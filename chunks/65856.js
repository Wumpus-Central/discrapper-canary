n.d(t, { Z: () => v }), n(733860), n(653041), n(411104), n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(626135),
    l = n(70956),
    u = n(996106),
    c = n(863141),
    d = n(34954),
    f = n(186901),
    _ = n(981631);
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
let h = 'RPC_STORE_WAIT',
    m = [];
function g(e, t) {
    return s().isEqual(e, s().pick(t, Object.keys(e)));
}
function E(e) {
    return !!m.includes(e) || (m.unshift(e), m.splice(50), !1);
}
class v {
    registerTransport(e) {
        e.on('connect', (e) => this.handleConnect(e)), e.on('request', (e, t) => this.handleRequest(e, t)), e.on('disconnect', (e, t) => this.handleDisconnect(e, t));
    }
    handleConnect(e) {
        this.sockets.add(e), this.abortControllers.set(e, new AbortController()), this.onConnect(e);
        let t = {
            v: e.version,
            config: {
                cdn_host: window.GLOBAL_ENV.CDN_HOST,
                api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                environment: 'production'
            }
        };
        if (e.transport === f.He.IPC) {
            let n = this.getCurrentUser();
            if (null == n) {
                e.close(_.$VG.CLOSE_NORMAL, 'User logged out');
                return;
            }
            t.user = (0, c.Z)(n);
        }
        this.dispatch(e, null, _.Etm.DISPATCH, _.zMe.READY, t);
    }
    handleDisconnect(e, t) {
        var n;
        this.removeSubscriptions(e), this.sockets.delete(e), null === (n = this.abortControllers.get(e)) || void 0 === n || n.abort('DISCONNECTED'), this.abortControllers.delete(e), this.onDisconnect(e, t);
    }
    handleRequest(e, t) {
        new Promise((n) => {
            if (null == t.nonce || '' === t.nonce) throw new u.Z({ errorCode: _.lTL.INVALID_PAYLOAD }, 'Payload requires a nonce');
            let i = t.cmd,
                r = this.commands[i];
            if (null == r) throw new u.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'Invalid command: '.concat(t.cmd));
            if (!(0, d.Z)(e.authorization.scopes, r.scope)) throw new u.Z({ errorCode: _.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            o.default.track(_.rMx.RPC_COMMAND_SENT, {
                command: i,
                scope: 'object' == typeof r.scope ? JSON.stringify(r.scope) : r.scope,
                application_id: e.application.id,
                socket_scope: e.authorization.scopes.toString()
            }),
                n(r);
        })
            .then(
                (e) =>
                    new Promise(async (n, i) => {
                        if (null != e.validation) {
                            let a = await this.getJoi();
                            r()(null != e.validation, 'command.validation must not be null'),
                                a.validate(t.args, e.validation(a), { convert: !1 }, (t) => {
                                    if (null != t) {
                                        i(new u.Z({ errorCode: _.lTL.INVALID_PAYLOAD }, t.message));
                                        return;
                                    }
                                    n(e);
                                });
                        } else n(e);
                    })
            )
            .then((n) => {
                var i, r;
                return n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: null !== (r = t.args) && void 0 !== r ? r : {},
                    isSocketConnected: () => this.sockets.has(e),
                    signal: null === (i = this.abortControllers.get(e)) || void 0 === i ? void 0 : i.signal
                });
            })
            .then((n) => this.dispatch(e, t.nonce, t.cmd, null, n))
            .catch((n) => {
                let { code: i, message: r } = n;
                return this.error(e, t.nonce, t.cmd, i, r);
            });
    }
    setCommandHandler(e, t) {
        this.commands[e] = t;
    }
    setEventHandler(e, t) {
        this.events[e] = t;
    }
    dispatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Etm.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({
            cmd: n,
            data: r,
            evt: i,
            nonce: t
        });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Etm.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.lTL.UNKNOWN_ERROR,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'Unknown Error';
        o.default.track(_.rMx.RPC_SERVER_ERROR_CAUGHT, {
            command: n,
            code: i,
            message: r
        }),
            this.dispatch(e, t, n, _.zMe.ERROR, {
                code: i,
                message: r
            });
    }
    isSubscribed(e, t) {
        return void 0 !== this.subscriptions.find((n) => n.socket.application.id === e && n.evt === t);
    }
    getSubscription(e, t, n) {
        return this.subscriptions.find((i) => i.socket === e && i.evt === t && s().isEqual(i.args, n));
    }
    addSubscription(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = this.dispatch.bind(this, e, null, _.Etm.DISPATCH, t);
        null == this.getSubscription(e, t, n) &&
            this.subscriptions.push({
                update: i,
                dispatch: r,
                prevState: i
                    ? i({
                          prevState: null,
                          dispatch: r
                      })
                    : null,
                socket: e,
                evt: t,
                args: n
            });
    }
    removeSubscription(e, t, n) {
        s().remove(this.subscriptions, (i) => i.socket === e && i.evt === t && s().isEqual(i.args, n));
    }
    removeSubscriptions(e) {
        s().remove(this.subscriptions, (t) => t.socket === e);
    }
    dispatchToSubscriptions(e, t, n, i) {
        (null != i && '' !== i && E(i)) ||
            this.subscriptions.forEach((i) => {
                var r;
                i.evt === e && ('function' != typeof t || t(i)) && ('object' != typeof t || g(t, null !== (r = i.args) && void 0 !== r ? r : {})) && this.dispatch(i.socket, null, _.Etm.DISPATCH, i.evt, n);
            });
    }
    updateSubscriptions() {
        this.subscriptions.forEach((e) => {
            e.update && (e.prevState = e.update(e));
        });
    }
    storeWait(e, t, n) {
        let i = t();
        if (i || 0 === n) return Promise.resolve(i);
        let r = s().uniqueId(),
            a = () => this.removeSubscription(e, h, { uniqueId: r });
        return new Promise((i, s) => {
            let o = setTimeout(() => {
                a(), s(Error('timeout'));
            }, n * l.Z.Millis.SECOND);
            this.addSubscription(e, h, { uniqueId: r }, () => {
                let e = t();
                e && (clearTimeout(o), i(e));
            });
        }).then((e) => (a(), e));
    }
    constructor(e) {
        p(this, 'getCurrentUser', () => null), p(this, 'onConnect', () => {}), p(this, 'onDisconnect', () => {}), p(this, 'getJoi', void 0), p(this, 'events', {}), p(this, 'commands', {}), p(this, 'sockets', new Set()), p(this, 'subscriptions', []), p(this, 'abortControllers', new Map()), (this.getJoi = e);
    }
}
