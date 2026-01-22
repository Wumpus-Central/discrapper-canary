n.d(t, {
    A: () => _,
}),
    n(896048),
    n(321073);
var r = n(143236),
    i = n(933958),
    l = n(969151),
    a = n(954571),
    s = n(203982),
    o = n(927813),
    c = n(636401),
    u = n(440454),
    d = n(629471),
    p = n(613057),
    f = n(652215);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let A = 10 * o.A.Millis.SECOND,
    g = new Map(),
    m = new Set(),
    b = (e, t, n) => {
        n([u.A.CLOSE, t], e);
    };
class _ extends r.EventEmitter {
    routeEvent(e, t, n, r) {
        if (!Array.isArray(n))
            return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [i, l] = n;
        switch (i) {
            case u.A.HANDSHAKE:
                if (null != e)
                    throw new c.A(
                        {
                            closeCode: f.YI$.CLOSE_UNSUPPORTED,
                        },
                        "Already connected",
                    );
                return this.handleHandshake(t, l, r);
            case u.A.FRAME:
                if (null == e)
                    throw new c.A(
                        {
                            closeCode: f.YI$.CLOSE_UNSUPPORTED,
                        },
                        "Not connected",
                    );
                return this.handleFrame(t, e, l);
            case u.A.CLOSE:
                if (null == e)
                    throw new c.A(
                        {
                            closeCode: f.YI$.CLOSE_UNSUPPORTED,
                        },
                        "Not connected",
                    );
                return this.handleClose(e, l);
            default:
                throw new c.A(
                    {
                        closeCode: f.YI$.CLOSE_UNSUPPORTED,
                    },
                    "Invalid opcode",
                );
        }
    }
    constructor(e, t, r, o) {
        var u;
        super(),
            (u = this),
            h(this, "validateSocketClient", void 0),
            h(this, "logger", void 0),
            h(this, "createPostMessageProxySocket", void 0),
            h(this, "onFrameHandled", void 0),
            h(this, "handshakeFailureTimeoutId", void 0),
            h(this, "disconnectSocket", function (e, t) {
                var n, r;
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                u.emit("disconnect", e, i ? void 0 : t), e.close(t.code, null != (n = t.message) ? n : "Unknown");
                let [l] =
                    null !=
                    (r = Array.from(g.entries()).find((t) => {
                        let [n, r] = t;
                        return r === e;
                    }))
                        ? r
                        : [null, null];
                null != l && g.delete(l);
            }),
            h(this, "handleIFrameMount", (e) => {
                let { id: t } = e;
                m.add(t),
                    (this.handshakeFailureTimeoutId = setTimeout(() => {
                        Array.from(i.Ay.getSelfEmbeddedActivities().entries()).forEach((e) => {
                            let [t, n] = e;
                            a.default.track(f.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                                application_id: t,
                                channel_id: (0, l.H)(n.location),
                                guild_id: (0, l.D)(n.location),
                                timeout_ms: A,
                            });
                        });
                    }, A));
            }),
            h(this, "handleIFrameUnmount", (e) => {
                var t;
                let { id: n } = e;
                m.delete(n);
                let [r, i] =
                    null !=
                    (t = Array.from(g.entries()).find((e) => {
                        let [t, r] = e;
                        return r.frameId === n;
                    }))
                        ? t
                        : [null, null];
                null != i &&
                    null != r &&
                    (this.disconnectSocket(
                        i,
                        {
                            code: f.YI$.CLOSE_NORMAL,
                            message: "iFrame gone",
                        },
                        !0,
                    ),
                    g.delete(r));
            }),
            h(this, "handleMessage", (e, t, n) => {
                let r = g.get(t);
                try {
                    this.routeEvent(r, t, e, n);
                } catch (e) {
                    if (e instanceof c.A && e.errorCode === f.Lw6.INVALID_PAYLOAD) throw e;
                    null != r
                        ? this.disconnectSocket(
                              r,
                              {
                                  code: e.code,
                                  message: e.message,
                              },
                              !0,
                          )
                        : b(
                              t,
                              {
                                  code: e.code,
                                  message: e.message,
                              },
                              n,
                          );
                }
            }),
            h(this, "handleFrame", (e, t, n) => {
                var r;
                let i;
                if (e !== t.origin)
                    throw new c.A(
                        {
                            closeCode: f.YI$.INVALID_ORIGIN,
                        },
                        "Origin has changed",
                    );
                try {
                    i = "string" == typeof n ? JSON.parse(n) : n;
                } catch (e) {
                    throw new c.A(
                        {
                            closeCode: f.YI$.CLOSE_UNSUPPORTED,
                        },
                        "Payload not recognized encoding",
                    );
                }
                null == (r = this.onFrameHandled) || r.call(this, i, this.logger, t), this.emit("request", t, i);
            }),
            h(this, "handleHandshake", async (e, t, r) => {
                let i;
                null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
                let l = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
                try {
                    l.assert(
                        t,
                        (0, d.A)(l)
                            .required()
                            .keys({
                                v: l.number().min(1).max(1).required(),
                                encoding: l.string().equal("json").optional(),
                                client_id: l.string().required(),
                                frame_id: l.string().required(),
                                sdk_version: l.string().optional(),
                            }),
                    );
                } catch (e) {
                    throw new c.A(
                        {
                            closeCode: f.YI$.CLOSE_UNSUPPORTED,
                        },
                        e.message,
                    );
                }
                let s = t.frame_id;
                if (!m.has(s))
                    throw (
                        (this.logger.error("Unrecognized frame ID ".concat(s)),
                        new c.A(
                            {
                                closeCode: f.YI$.CLOSE_UNSUPPORTED,
                            },
                            "Unrecognized frame ID ".concat(s),
                        ))
                    );
                null != t.sdk_version &&
                    a.default.track(f.HAw.ACTIVITY_HANDSHAKE, {
                        application_id: t.client_id,
                        sdk_version: t.sdk_version,
                    });
                try {
                    var o;
                    i = this.createPostMessageProxySocket({
                        origin: e,
                        postMessageToRPCClient: r,
                        frameId: s,
                        version: Number(t.v),
                        logger: this.logger,
                        postClose: b,
                        encoding: null != (o = t.encoding) ? o : "json",
                    });
                } catch (e) {
                    throw (this.logger.error("Error opening window socket ".concat(e)), e);
                }
                this.logger.info("Socket Opened: ".concat(i.id));
                try {
                    if ((await this.validateSocketClient(i, e, t.client_id), !m.has(s)))
                        throw (
                            (this.logger.error("Frame ID ".concat(s, " no longer exists")),
                            new c.A(
                                {
                                    closeCode: f.YI$.CLOSE_UNSUPPORTED,
                                },
                                "Unrecognized frame ID ".concat(s),
                            ))
                        );
                    g.set(e, i),
                        m.delete(s),
                        i.authorization.scopes.push(p.W_),
                        this.emit("connect", i),
                        this.logger.info("Socket Validated: ".concat(i.id));
                } catch (e) {
                    throw (this.logger.info("Socket Closed: ".concat(i.id, ", ").concat(e.message)), e);
                }
            }),
            h(this, "handleClose", async (e, t) => {
                let r = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
                try {
                    r.assert(
                        t,
                        (0, d.A)(r)
                            .required()
                            .keys({
                                code: r.number().valid(Object.values(f.YI$)).required(),
                                message: r.string().optional(),
                            }),
                    );
                } catch (e) {
                    throw new c.A(
                        {
                            closeCode: f.YI$.CLOSE_UNSUPPORTED,
                        },
                        e.message,
                    );
                }
                this.disconnectSocket(e, t);
            }),
            s._.subscribe(f.jej.IFRAME_MOUNT, this.handleIFrameMount),
            s._.subscribe(f.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = r),
            (this.onFrameHandled = o);
    }
}
