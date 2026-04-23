n.d(t, { A: () => g }), n(321073);
var i = n(143236),
    r = n(933958),
    a = n(969151),
    l = n(954571),
    s = n(203982),
    o = n(927813),
    d = n(636401),
    u = n(440454),
    c = n(629471),
    A = n(613057),
    h = n(652215);
let _ = 10 * o.A.Millis.SECOND,
    E = new Map(),
    p = new Set(),
    m = (e, t, n) => {
        n([u.A.CLOSE, t], e);
    };
class g extends i.EventEmitter {
    validateSocketClient;
    logger;
    createPostMessageProxySocket;
    onFrameHandled;
    handshakeFailureTimeoutId;
    constructor(e, t, n, i) {
        super(),
            s._.subscribe(h.jej.IFRAME_MOUNT, this.handleIFrameMount),
            s._.subscribe(h.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = n),
            (this.onFrameHandled = i);
    }
    disconnectSocket = (() => {
        var e = this;
        return function (t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.emit("disconnect", t, i ? void 0 : n), t.close(n.code, n.message ?? "Unknown");
            let [r] = Array.from(E.entries()).find((e) => {
                let [n, i] = e;
                return i === t;
            }) ?? [null, null];
            null != r && E.delete(r);
        };
    })();
    handleIFrameMount = (e) => {
        let { id: t } = e;
        p.add(t),
            (this.handshakeFailureTimeoutId = setTimeout(() => {
                Array.from(r.Ay.getSelfEmbeddedActivities().entries()).forEach((e) => {
                    let [t, n] = e;
                    l.default.track(h.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                        application_id: t,
                        channel_id: (0, a.H)(n.location),
                        guild_id: (0, a.D)(n.location),
                        timeout_ms: _,
                    });
                });
            }, _));
    };
    handleIFrameUnmount = (e) => {
        let { id: t } = e;
        p.delete(t);
        let [n, i] = Array.from(E.entries()).find((e) => {
            let [n, i] = e;
            return i.frameId === t;
        }) ?? [null, null];
        null != i &&
            null != n &&
            (this.disconnectSocket(i, { code: h.YI$.CLOSE_NORMAL, message: "iFrame gone" }, !0), E.delete(n));
    };
    handleMessage = (e, t, n) => {
        let i = E.get(t);
        try {
            this.routeEvent(i, t, e, n);
        } catch (e) {
            if (e instanceof d.A && e.errorCode === h.Lw6.INVALID_PAYLOAD) throw e;
            null != i
                ? this.disconnectSocket(i, { code: e.code, message: e.message }, !0)
                : m(t, { code: e.code, message: e.message }, n);
        }
    };
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n))
            return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [r, a] = n;
        switch (r) {
            case u.A.HANDSHAKE:
                if (null != e) throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, "Already connected");
                return this.handleHandshake(t, a, i);
            case u.A.FRAME:
                if (null == e) throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleFrame(t, e, a);
            case u.A.CLOSE:
                if (null == e) throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleClose(e, a);
            default:
                throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, "Invalid opcode");
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new d.A({ closeCode: h.YI$.INVALID_ORIGIN }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n;
        } catch (e) {
            throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, "Payload not recognized encoding");
        }
        this.onFrameHandled?.(i, this.logger, t), this.emit("request", t, i);
    };
    handleHandshake = async (e, t, i) => {
        let r;
        null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
        let a = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            a.assert(
                t,
                (0, c.A)(a)
                    .required()
                    .keys({
                        v: a.number().min(1).max(1).required(),
                        encoding: a.string().equal("json").optional(),
                        client_id: a.string().required(),
                        frame_id: a.string().required(),
                        sdk_version: a.string().optional(),
                    }),
            );
        } catch (e) {
            throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        let s = t.frame_id;
        if (!p.has(s))
            throw (
                (this.logger.error(`Unrecognized frame ID ${s}`),
                new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${s}`))
            );
        null != t.sdk_version &&
            l.default.track(h.HAw.ACTIVITY_HANDSHAKE, { application_id: t.client_id, sdk_version: t.sdk_version });
        try {
            r = this.createPostMessageProxySocket({
                origin: e,
                postMessageToRPCClient: i,
                frameId: s,
                version: Number(t.v),
                logger: this.logger,
                postClose: m,
                encoding: t.encoding ?? "json",
            });
        } catch (e) {
            throw (this.logger.error(`Error opening window socket ${e}`), e);
        }
        this.logger.info(`Socket Opened: ${r.id}`);
        try {
            if ((await this.validateSocketClient(r, e, t.client_id), !p.has(s)))
                throw (
                    (this.logger.error(`Frame ID ${s} no longer exists`),
                    new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${s}`))
                );
            E.set(e, r),
                p.delete(s),
                r.authorization.scopes.push(A.W_),
                this.emit("connect", r),
                this.logger.info(`Socket Validated: ${r.id}`);
        } catch (e) {
            throw (this.logger.info(`Socket Closed: ${r.id}, ${e.message}`), e);
        }
    };
    handleClose = async (e, t) => {
        let i = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            i.assert(
                t,
                (0, c.A)(i)
                    .required()
                    .keys({ code: i.number().valid(Object.values(h.YI$)).required(), message: i.string().optional() }),
            );
        } catch (e) {
            throw new d.A({ closeCode: h.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        this.disconnectSocket(e, t);
    };
}
