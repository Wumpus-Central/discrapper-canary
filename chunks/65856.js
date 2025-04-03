n.d(t, { Z: () => b }), n(733860), n(26686), n(653041), n(411104), n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(626135),
    l = n(70956),
    c = n(996106),
    u = n(863141),
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
    return a().isEqual(e, a().pick(t, Object.keys(e)));
}
function E(e) {
    return !!m.includes(e) || (m.unshift(e), m.splice(50), !1);
}
class b {
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
            if (null == n) return void e.close(_.$VG.CLOSE_NORMAL, 'User logged out');
            t.user = (0, u.Z)(n);
        }
        this.dispatch(e, null, _.Etm.DISPATCH, _.zMe.READY, t);
    }
    handleDisconnect(e, t) {
        var n;
        this.removeSubscriptions(e), this.sockets.delete(e), null == (n = this.abortControllers.get(e)) || n.abort('DISCONNECTED'), this.abortControllers.delete(e), this.onDisconnect(e, t);
    }
    handleRequest(e, t) {
        new Promise((n) => {
            if (null == t.nonce || '' === t.nonce) throw new c.Z({ errorCode: _.lTL.INVALID_PAYLOAD }, 'Payload requires a nonce');
            let r = t.cmd,
                i = this.commands[r];
            if (null == i) throw new c.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'Invalid command: '.concat(t.cmd));
            if (!(0, d.Z)(e.authorization.scopes, i.scope)) throw new c.Z({ errorCode: _.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            s.default.track(_.rMx.RPC_COMMAND_SENT, {
                command: r,
                scope: 'object' == typeof i.scope ? JSON.stringify(i.scope) : i.scope,
                application_id: e.application.id,
                socket_scope: e.authorization.scopes.toString()
            }),
                n(i);
        })
            .then(
                (e) =>
                    new Promise(async (n, r) => {
                        if (null != e.validation) {
                            let o = await this.getJoi();
                            i()(null != e.validation, 'command.validation must not be null'),
                                o.validate(t.args, e.validation(o), { convert: !1 }, (t) => {
                                    if (null != t) return void r(new c.Z({ errorCode: _.lTL.INVALID_PAYLOAD }, t.message));
                                    n(e);
                                });
                        } else n(e);
                    })
            )
            .then((n) => {
                var r, i;
                return n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: null != (i = t.args) ? i : {},
                    isSocketConnected: () => this.sockets.has(e),
                    signal: null == (r = this.abortControllers.get(e)) ? void 0 : r.signal
                });
            })
            .then((n) => this.dispatch(e, t.nonce, t.cmd, null, n))
            .catch((n) => {
                let { code: r, message: i } = n;
                return this.error(e, t.nonce, t.cmd, r, i);
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
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({
            cmd: n,
            data: i,
            evt: r,
            nonce: t
        });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Etm.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.lTL.UNKNOWN_ERROR,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'Unknown Error';
        s.default.track(_.rMx.RPC_SERVER_ERROR_CAUGHT, {
            command: n,
            code: r,
            message: i
        }),
            this.dispatch(e, t, n, _.zMe.ERROR, {
                code: r,
                message: i
            });
    }
    isSubscribed(e, t) {
        return void 0 !== this.subscriptions.find((n) => n.socket.application.id === e && n.evt === t);
    }
    getSubscription(e, t, n) {
        return this.subscriptions.find((r) => r.socket === e && r.evt === t && a().isEqual(r.args, n));
    }
    addSubscription(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = this.dispatch.bind(this, e, null, _.Etm.DISPATCH, t);
        null == this.getSubscription(e, t, n) &&
            this.subscriptions.push({
                update: r,
                dispatch: i,
                prevState: r
                    ? r({
                          prevState: null,
                          dispatch: i
                      })
                    : null,
                socket: e,
                evt: t,
                args: n
            });
    }
    removeSubscription(e, t, n) {
        a().remove(this.subscriptions, (r) => r.socket === e && r.evt === t && a().isEqual(r.args, n));
    }
    removeSubscriptions(e) {
        a().remove(this.subscriptions, (t) => t.socket === e);
    }
    dispatchToSubscriptions(e, t, n, r) {
        (null != r && '' !== r && E(r)) ||
            this.subscriptions.forEach((r) => {
                var i;
                r.evt === e && ('function' != typeof t || t(r)) && ('object' != typeof t || g(t, null != (i = r.args) ? i : {})) && ('function' == typeof n && (n = n(r)), this.dispatch(r.socket, null, _.Etm.DISPATCH, r.evt, n));
            });
    }
    updateSubscriptions() {
        this.subscriptions.forEach((e) => {
            e.update && (e.prevState = e.update(e));
        });
    }
    storeWait(e, t, n) {
        let r = t();
        if (r || 0 === n) return Promise.resolve(r);
        let i = a().uniqueId(),
            o = () => this.removeSubscription(e, h, { uniqueId: i });
        return new Promise((r, a) => {
            let s = setTimeout(() => {
                o(), a(Error('timeout'));
            }, n * l.Z.Millis.SECOND);
            this.addSubscription(e, h, { uniqueId: i }, () => {
                let e = t();
                e && (clearTimeout(s), r(e));
            });
        }).then((e) => (o(), e));
    }
    constructor(e) {
        p(this, 'getCurrentUser', () => null), p(this, 'onConnect', () => {}), p(this, 'onDisconnect', () => {}), p(this, 'getJoi', void 0), p(this, 'events', {}), p(this, 'commands', {}), p(this, 'sockets', new Set()), p(this, 'subscriptions', []), p(this, 'abortControllers', new Map()), (this.getJoi = e);
    }
}
