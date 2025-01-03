n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var i = n(836560),
    r = n(317381),
    l = n(16609),
    a = n(626135),
    s = n(585483),
    o = n(70956),
    c = n(996106),
    d = n(631467),
    u = n(452426),
    h = n(186901),
    m = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = 10 * o.Z.Millis.SECOND,
    f = new Map(),
    _ = new Set(),
    E = (e, t, n) => {
        n([d.Z.CLOSE, t], e);
    };
class I extends i.EventEmitter {
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n)) {
            console.warn('[PostMessageTransport] Protocol error: event data should be an Array!');
            return;
        }
        let [r, l] = n;
        switch (r) {
            case d.Z.HANDSHAKE:
                if (null != e) throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Already connected');
                return this.handleHandshake(t, l, i);
            case d.Z.FRAME:
                if (null == e) throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Not connected');
                return this.handleFrame(t, e, l);
            case d.Z.CLOSE:
                if (null == e) throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Not connected');
                return this.handleClose(e, l);
            default:
                throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Invalid opcode');
        }
    }
    constructor(e, t, i, o) {
        var d;
        super(),
            (d = this),
            p(this, 'validateSocketClient', void 0),
            p(this, 'logger', void 0),
            p(this, 'createPostMessageProxySocket', void 0),
            p(this, 'onFrameHandled', void 0),
            p(this, 'handshakeFailureTimeoutId', void 0),
            p(this, 'disconnectSocket', function (e, t) {
                var n, i;
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                d.emit('disconnect', e, r ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : 'Unknown');
                let [l] =
                    null !==
                        (i = Array.from(f.entries()).find((t) => {
                            let [n, i] = t;
                            return i === e;
                        })) && void 0 !== i
                        ? i
                        : [null, null];
                null != l && f.delete(l);
            }),
            p(this, 'handleIFrameMount', (e) => {
                let { id: t } = e;
                _.add(t),
                    (this.handshakeFailureTimeoutId = setTimeout(() => {
                        Array.from(r.ZP.getSelfEmbeddedActivities().entries()).forEach((e) => {
                            let [t, n] = e;
                            a.default.track(m.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                                application_id: t,
                                channel_id: (0, l.p)(n.location),
                                guild_id: (0, l.j)(n.location),
                                timeout_ms: g
                            });
                        });
                    }, g));
            }),
            p(this, 'handleIFrameUnmount', (e) => {
                var t;
                let { id: n } = e;
                _.delete(n);
                let [i, r] =
                    null !==
                        (t = Array.from(f.entries()).find((e) => {
                            let [t, i] = e;
                            return i.frameId === n;
                        })) && void 0 !== t
                        ? t
                        : [null, null];
                null != r &&
                    null != i &&
                    (this.disconnectSocket(
                        r,
                        {
                            code: m.$VG.CLOSE_NORMAL,
                            message: 'iFrame gone'
                        },
                        !0
                    ),
                    f.delete(i));
            }),
            p(this, 'handleMessage', (e, t, n) => {
                let i = f.get(t);
                try {
                    this.routeEvent(i, t, e, n);
                } catch (e) {
                    if (e instanceof c.Z && e.errorCode === m.lTL.INVALID_PAYLOAD) throw e;
                    null != i
                        ? this.disconnectSocket(
                              i,
                              {
                                  code: e.code,
                                  message: e.message
                              },
                              !0
                          )
                        : E(
                              t,
                              {
                                  code: e.code,
                                  message: e.message
                              },
                              n
                          );
                }
            }),
            p(this, 'handleFrame', (e, t, n) => {
                var i;
                let r;
                if (e !== t.origin) throw new c.Z({ closeCode: m.$VG.INVALID_ORIGIN }, 'Origin has changed');
                try {
                    r = 'string' == typeof n ? JSON.parse(n) : n;
                } catch (e) {
                    throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Payload not recognized encoding');
                }
                null === (i = this.onFrameHandled) || void 0 === i || i.call(this, r, this.logger, t), this.emit('request', t, r);
            }),
            p(this, 'handleHandshake', async (e, t, i) => {
                let r;
                null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
                let l = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
                try {
                    l.assert(
                        t,
                        (0, u.Z)(l)
                            .required()
                            .keys({
                                v: l.number().min(1).max(1).required(),
                                encoding: l.string().equal('json').optional(),
                                client_id: l.string().required(),
                                frame_id: l.string().required(),
                                sdk_version: l.string().optional()
                            })
                    );
                } catch (e) {
                    throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, e.message);
                }
                let s = t.frame_id;
                if (!_.has(s)) throw (this.logger.error('Unrecognized frame ID '.concat(s)), new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Unrecognized frame ID '.concat(s)));
                null != t.sdk_version &&
                    a.default.track(m.rMx.ACTIVITY_HANDSHAKE, {
                        application_id: t.client_id,
                        sdk_version: t.sdk_version
                    });
                try {
                    var o;
                    r = this.createPostMessageProxySocket({
                        origin: e,
                        postMessageToRPCClient: i,
                        frameId: s,
                        version: Number(t.v),
                        logger: this.logger,
                        postClose: E,
                        encoding: null !== (o = t.encoding) && void 0 !== o ? o : 'json'
                    });
                } catch (e) {
                    throw (this.logger.error('Error opening window socket '.concat(e)), e);
                }
                this.logger.info('Socket Opened: '.concat(r.id));
                try {
                    if ((await this.validateSocketClient(r, e, t.client_id), !_.has(s))) throw (this.logger.error('Frame ID '.concat(s, ' no longer exists')), new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, 'Unrecognized frame ID '.concat(s)));
                    f.set(e, r), _.delete(s), r.authorization.scopes.push(h.b_), this.emit('connect', r), this.logger.info('Socket Validated: '.concat(r.id));
                } catch (e) {
                    throw (this.logger.info('Socket Closed: '.concat(r.id, ', ').concat(e.message)), e);
                }
            }),
            p(this, 'handleClose', async (e, t) => {
                let i = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
                try {
                    i.assert(
                        t,
                        (0, u.Z)(i)
                            .required()
                            .keys({
                                code: i.number().valid(Object.values(m.$VG)).required(),
                                message: i.string().optional()
                            })
                    );
                } catch (e) {
                    throw new c.Z({ closeCode: m.$VG.CLOSE_UNSUPPORTED }, e.message);
                }
                this.disconnectSocket(e, t);
            }),
            s.S.subscribe(m.CkL.IFRAME_MOUNT, this.handleIFrameMount),
            s.S.subscribe(m.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = i),
            (this.onFrameHandled = o);
    }
}
