n.d(t, { i: () => u, x: () => E });
var i = n(972347),
    r = n(507821),
    a = n(654186);
(n(323874), n(14289), n(35956));
class s extends i.A {
    started = !1;
    connectTimeout = null;
    closed = !1;
    worker;
    userId;
    rtc;
    webTransportAck;
    state = 0;
    constructor(e, t) {
        (super(),
            (this.userId = t),
            (this.rtc = e),
            (this.webTransportAck = this.onWebTransportAck.bind(this)),
            this.on(a.I.Connect, () => {
                ((this.state = 2), this.clearConnectTimeout());
            }),
            this.on(a.I.Disconnect, this.onDisconnect.bind(this)),
            (this.worker = new Worker(
                new URL("/assets/" + n.u(85762), n.b),
                Object.assign({}, { name: "datagram-worker" }, { type: void 0 }),
            )),
            null != this.worker &&
                (this.worker.onmessage = (e) => {
                    this.emit(e.data[0], ...e.data.slice(1));
                }));
    }
    get isConnected() {
        return 2 === this.state;
    }
    connect() {
        this.started ||
            this.closed ||
            ((this.started = !0),
            (this.state = 1),
            this.rtc.on(r.q.WebTransportAck, this.webTransportAck),
            (this.connectTimeout = setTimeout(() => {
                1 === this.state &&
                    (this.emit(a.I.Timeout),
                    this.rtc.off(r.q.WebTransportAck, this.webTransportAck),
                    this.emit(a.I.Disconnect));
            }, 1e4)),
            this.rtc.startWebTransport());
    }
    onWebTransportAck(e, t) {
        this.rtc.off(r.q.WebTransportAck, this.webTransportAck);
        let n = this.rtc.getVoiceAddress();
        if (null == n) {
            (this.emit(a.I.MissingAddress), this.emit(a.I.Disconnect));
            return;
        }
        this.emit(a.I.Starting, n.address, n.port);
        let i = `https://${n.address}:${n.port}/?token=${e}`;
        this.worker?.postMessage([a.b.Connect, i, t, this.userId]);
    }
    clearConnectTimeout() {
        null != this.connectTimeout && (clearTimeout(this.connectTimeout), (this.connectTimeout = null));
    }
    onDisconnect() {
        (this.clearConnectTimeout(),
            (this.state = 0),
            (this.closed = !0),
            this.rtc.off(r.q.WebTransportAck, this.webTransportAck),
            this.worker?.terminate());
    }
    send(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        this.worker?.postMessage([e, ...n]);
    }
    close() {
        if (this.closed) return;
        let e = this.isConnected;
        ((this.closed = !0),
            this.clearConnectTimeout(),
            (this.state = 0),
            this.rtc.off(r.q.WebTransportAck, this.webTransportAck),
            e ? this.worker?.postMessage([a.b.Close]) : this.worker?.terminate());
    }
}
var l = n(158390);
class o {
    backoff = new l.A(1e3, 3e4, !0);
    attempts = 0;
    startedAt = null;
    stableTimer = null;
    schedule(e) {
        this.cancel();
        let t = performance.now();
        this.startedAt ??= t;
        let n = this.startedAt + 12e4;
        this.attempts >= 6 ||
            t >= n ||
            (this.attempts++,
            t +
                this.backoff.fail(() => {
                    performance.now() <= n && e();
                }) >
                n && this.backoff.cancel());
    }
    connected() {
        (this.cancel(), (this.stableTimer = setTimeout(() => this.reset(), 3e4)));
    }
    reset() {
        (this.cancel(), this.backoff.succeed(), (this.attempts = 0), (this.startedAt = null));
    }
    cancel() {
        (this.backoff.cancel(),
            null != this.stableTimer && (clearTimeout(this.stableTimer), (this.stableTimer = null)));
    }
}
class d {
    acquire;
    onEmpty;
    recovery = new o();
    subscribers = new Set();
    lease = null;
    detach = null;
    started = !1;
    closed = !1;
    constructor(e, t) {
        ((this.acquire = e), (this.onEmpty = t));
    }
    subscribe(e) {
        (this.subscribers.add(e),
            null != this.lease ? e.onConnection(this.lease.connection) : this.started || this.start());
        let t = !1;
        return {
            retry: () => {
                t || this.closed || null != this.lease || (this.recovery.cancel(), this.start());
            },
            release: () => {
                t || ((t = !0), this.subscribers.delete(e), 0 === this.subscribers.size && this.close());
            },
        };
    }
    close() {
        this.closed ||
            ((this.closed = !0),
            this.recovery.cancel(),
            this.detach?.(),
            (this.detach = null),
            this.lease?.release(),
            (this.lease = null),
            this.subscribers.clear(),
            this.onEmpty());
    }
    scheduleRecovery() {
        this.closed || 0 === this.subscribers.size || (null == this.lease && this.recovery.schedule(this.start));
    }
    start = () => {
        if (this.closed || 0 === this.subscribers.size || null != this.lease) return;
        this.started = !0;
        let e = this.acquire();
        this.lease = e;
        let t = e.connection.isConnected,
            n = () => {
                ((t = !0), this.recovery.connected());
            },
            i = () => {
                if (this.lease === e) {
                    for (let n of (this.recovery.cancel(),
                    this.detach?.(),
                    (this.detach = null),
                    (this.lease = null),
                    e.release(),
                    [...this.subscribers]))
                        this.subscribers.has(n) && n.onDisconnect(t);
                    this.scheduleRecovery();
                }
            };
        for (let t of ((this.detach = () => {
            (e.connection.off(a.I.Connect, n), e.connection.off(a.I.Disconnect, i));
        }),
        e.connection.on(a.I.Connect, n),
        e.connection.on(a.I.Disconnect, i),
        [...this.subscribers]))
            this.subscribers.has(t) && t.onConnection(e.connection);
        if (this.lease === e) {
            t && n();
            try {
                e.connection.connect();
            } catch {
                i();
            }
        }
    };
}
let c = new WeakMap();
function u(e, t) {
    let n = c.get(e);
    if (null == n || n.userId !== t) {
        (n?.connection.close(), (n = { connection: new s(e, t), users: 0, userId: t }), c.set(e, n));
        let i = n;
        i.connection.on(a.I.Disconnect, () => {
            c.get(e) === i && c.delete(e);
        });
    }
    n.users++;
    let i = n,
        r = !1;
    return {
        connection: i.connection,
        release() {
            r || ((r = !0), 0 == --i.users && (i.connection.close(), c.get(e) === i && c.delete(e)));
        },
    };
}
let _ = new WeakMap();
function E(e, t, n) {
    let i = _.get(e);
    if (null == i || i.userId !== t) {
        i?.owner.close();
        let n = new d(
            () => u(e, t),
            () => {
                _.get(e)?.owner === n && _.delete(e);
            },
        );
        ((i = { userId: t, owner: n }), _.set(e, i));
    }
    return i.owner.subscribe(n);
}
