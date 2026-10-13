n.d(t, { gG: () => b, j_: () => k, EG: () => j, HJ: () => w, AV: () => N, KK: () => A, ZL: () => y });
var l = n(582128),
    r = n(158390),
    a = n(73153),
    i = n(643210);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(323874), n(14289), n(35956));
var s = n(382541);
let o = new Set([401, 403, 404]);
class u {
    options;
    socket = null;
    stopped = !1;
    constructor(e) {
        this.options = e;
    }
    open() {
        this.connect().catch((e) => {
            if (this.stopped) return;
            let t = e?.status;
            this.options.onClosed("number" == typeof t && o.has(t) ? 4403 : 0);
        });
    }
    async connect() {
        let { projectId: e, sessionId: t, mode: n, maxFps: l, width: r } = this.options,
            { ticket: a, baseUrl: i } = await (0, s.d)(e);
        if (this.stopped) return;
        let o = new URL(`/agent/browser-stream/${encodeURIComponent(t)}`, i.replace(/^http/, "ws"));
        (o.searchParams.set("ticket", a),
            o.searchParams.set("mode", n),
            o.searchParams.set("maxFps", String(l)),
            r > 0 && o.searchParams.set("width", String(r)));
        let u = new WebSocket(o.toString());
        ((u.binaryType = "arraybuffer"),
            (this.socket = u),
            (u.onmessage = (e) => {
                this.handleMessage(u, e).catch(() => u.close());
            }),
            (u.onclose = (e) => {
                this.socket === u && this.options.onClosed(e.code);
            }));
    }
    send(e) {
        "control" === this.options.mode &&
            this.socket?.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify(e));
    }
    close() {
        ((this.stopped = !0), this.socket?.close(), (this.socket = null));
    }
    async handleMessage(e, t) {
        if ("string" == typeof t.data) {
            let e = JSON.parse(t.data);
            e?.type === "mode" && ("control" === e.mode || "view" === e.mode) && this.options.onMode(e.mode);
            return;
        }
        let n =
            t.data instanceof ArrayBuffer
                ? (function (e) {
                      if (e.byteLength <= 9) return null;
                      let t = new DataView(e);
                      return 1 !== t.getUint8(0)
                          ? null
                          : {
                                seq: t.getUint32(1),
                                jpeg: new Uint8Array(e, 9),
                                deviceWidth: t.getUint16(5),
                                deviceHeight: t.getUint16(7),
                            };
                  })(t.data)
                : null;
        if (null != n)
            try {
                await this.options.onFrame(n);
            } catch {}
        this.socket === e &&
            e.readyState === WebSocket.OPEN &&
            e.send(JSON.stringify(null == n ? { type: "ack" } : { type: "ack", seq: n.seq }));
    }
}
let c = new Set(),
    d = new Map();
function m(e, t) {
    let n = `${e}:${t}`,
        l = d.get(n);
    if (null == l) {
        let a = {
            projectId: e,
            sessionId: t,
            startedAt: g(e, t),
            subscribers: new Set(),
            socket: null,
            socketKey: null,
            control: !1,
            controlState: "off",
            controlListeners: new Set(),
            restarts: 0,
            restartListeners: new Set(),
            lastFrame: null,
            state: "connecting",
            stateListeners: new Set(),
            backoff: new r.A(500, 8e3),
            retry: () => {
                ((a.socketKey = null), x(a));
            },
        };
        ((l = a), d.set(n, l));
    }
    return l;
}
function f(e, t) {
    if (e.state !== t) for (let n of ((e.state = t), e.stateListeners)) n();
}
function h(e, t) {
    if (e.controlState !== t) for (let n of ((e.controlState = t), e.controlListeners)) n(t);
}
function g(e, t) {
    return i.A.getSessions(e).find((e) => e.id === t)?.started_at ?? null;
}
function p(e) {
    (e.backoff.cancel(),
        e.socket?.close(),
        (e.socket = null),
        (e.socketKey = null),
        "granted" === e.controlState && h(e, e.control ? "pending" : "off"));
}
function x(e) {
    if (0 === e.subscribers.size || null == e.startedAt || c.has(e.projectId)) {
        (p(e), f(e, "connecting"));
        return;
    }
    let t = [...e.subscribers],
        n = Math.max(...t.map((e) => e.fps)),
        l = t.some((e) => 0 === e.width) ? 0 : Math.max(...t.map((e) => e.width)),
        r = e.control ? "control" : "view",
        a = `${r}:${n}:${l}`;
    if (e.socketKey === a && (null != e.socket || e.backoff.pending)) return;
    (p(e), (e.socketKey = a));
    let i = new u({
        projectId: e.projectId,
        sessionId: e.sessionId,
        mode: r,
        maxFps: n,
        width: l,
        onFrame: async (t) => {
            e.socket === i &&
                ((e.lastFrame = t),
                e.backoff.succeed(),
                f(e, "live"),
                await Promise.allSettled([...e.subscribers].map((e) => e.onFrame(t))));
        },
        onMode: (t) => {
            e.socket === i &&
                e.control &&
                ("control" === t ? h(e, "granted") : ((e.control = !1), h(e, "denied"), x(e)));
        },
        onClosed: (t) => {
            if (e.socket !== i) return;
            if ((p(e), 4403 === t))
                return void (function (e) {
                    for (let t of (c.add(e), d.values())) t.projectId === e && (p(t), v(t), f(t, "connecting"));
                })(e.projectId);
            let n = 4409 === t && e.control;
            (n && ((e.control = !1), e.backoff.succeed(), h(e, "denied")),
                f(e, "connecting"),
                0 !== e.subscribers.size && null != e.startedAt && (n || (e.socketKey = a), e.backoff.fail(e.retry)));
        },
    });
    ((e.socket = i), i.open());
}
function v(e) {
    ((e.control = !1), h(e, "off"));
}
function j(e, t, n) {
    let l = m(e, t),
        r = n && null != l.startedAt;
    l.control !== r && ((l.control = r), r ? h(l, "pending") : "denied" !== l.controlState && h(l, "off"), x(l));
}
function b(e, t) {
    let n = d.get(`${e}:${t}`);
    null == n || n.control || "denied" !== n.controlState || h(n, "off");
}
function y(e, t, n) {
    let l = d.get(`${e}:${t}`);
    l?.controlState === "granted" && l.socket?.send(n);
}
function w(e, t) {
    let n = l.useCallback(
        (n) => {
            let l = m(e, t);
            return (
                l.controlListeners.add(n),
                () => {
                    l.controlListeners.delete(n);
                }
            );
        },
        [e, t],
    );
    return l.useSyncExternalStore(n, () => d.get(`${e}:${t}`)?.controlState ?? "off");
}
function k(e, t, n) {
    return d.get(`${e}:${t}`)?.lastFrame === n;
}
function N(e, t) {
    let [n, r] = l.useState(() => d.get(`${e}:${t}`)?.restarts ?? 0);
    return (
        l.useEffect(() => {
            let n = m(e, t);
            return (
                n.restartListeners.add(r),
                () => {
                    n.restartListeners.delete(r);
                }
            );
        }, [e, t]),
        n
    );
}
function A(e, t, n) {
    let { fps: r, onFrame: a, enabled: i = !0, width: s = 0 } = n,
        o = l.useCallback(
            (n) => {
                let l = m(e, t);
                return (
                    l.stateListeners.add(n),
                    () => {
                        l.stateListeners.delete(n);
                    }
                );
            },
            [e, t],
        ),
        u = l.useSyncExternalStore(o, () => d.get(`${e}:${t}`)?.state ?? "connecting");
    return (
        l.useEffect(() => {
            let n = m(e, t);
            if ((null != n.lastFrame && Promise.resolve(a(n.lastFrame)).catch(() => void 0), !i)) return;
            let l = { fps: r, width: s, onFrame: a };
            return (
                n.subscribers.add(l),
                x(n),
                () => {
                    (n.subscribers.delete(l), x(n));
                }
            );
        }, [e, t, r, a, i, s]),
        u
    );
}
(i.A.addChangeListener(function () {
    for (let e of d.values()) {
        let t = g(e.projectId, e.sessionId);
        if (t !== e.startedAt) {
            if (((e.startedAt = t), p(e), null == t)) {
                v(e);
                continue;
            }
            for (let t of ((e.lastFrame = null), (e.restarts += 1), e.restartListeners)) t(e.restarts);
            (e.backoff.succeed(), h(e, e.control ? "pending" : "off"), f(e, "connecting"), x(e));
        }
    }
}),
    a.h.subscribe("CONJURE_BROWSER_SESSIONS_SET", function (e) {
        let { projectId: t } = e;
        if (c.delete(t)) for (let e of d.values()) e.projectId === t && (e.backoff.succeed(), x(e));
    }));
