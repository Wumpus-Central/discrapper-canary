r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(733860);
var a = r(653041);
var o = r(411104);
var s = r(47120);
var l = r(512722),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(626135),
    p = r(70956),
    h = r(996106),
    _ = r(863141),
    m = r(34954),
    g = r(186901),
    E = r(981631);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = 'RPC_STORE_WAIT',
    b = [];
function I(e, n) {
    return d().isEqual(e, d().pick(n, Object.keys(e)));
}
function T(e) {
    return !!b.includes(e) || (b.unshift(e), b.splice(50), !1);
}
class S {
    registerTransport(e) {
        e.on('connect', (e) => this.handleConnect(e)), e.on('request', (e, n) => this.handleRequest(e, n)), e.on('disconnect', (e, n) => this.handleDisconnect(e, n));
    }
    handleConnect(e) {
        this.sockets.add(e), this.abortControllers.set(e, new AbortController()), this.onConnect(e);
        let n = {
            v: e.version,
            config: {
                cdn_host: window.GLOBAL_ENV.CDN_HOST,
                api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                environment: 'production'
            }
        };
        if (e.transport === g.He.IPC) {
            let r = this.getCurrentUser();
            if (null == r) {
                e.close(E.$VG.CLOSE_NORMAL, 'User logged out');
                return;
            }
            n.user = (0, _.Z)(r);
        }
        this.dispatch(e, null, E.Etm.DISPATCH, E.zMe.READY, n);
    }
    handleDisconnect(e, n) {
        var r;
        this.removeSubscriptions(e), this.sockets.delete(e), null === (r = this.abortControllers.get(e)) || void 0 === r || r.abort('DISCONNECTED'), this.abortControllers.delete(e), this.onDisconnect(e, n);
    }
    handleRequest(e, n) {
        new Promise((r) => {
            if (null == n.nonce || '' === n.nonce) throw new h.Z({ errorCode: E.lTL.INVALID_PAYLOAD }, 'Payload requires a nonce');
            let i = n.cmd,
                a = this.commands[i];
            if (null == a) throw new h.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'Invalid command: '.concat(n.cmd));
            if (!(0, m.Z)(e.authorization.scopes, a.scope)) throw new h.Z({ errorCode: E.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            f.default.track(E.rMx.RPC_COMMAND_SENT, {
                command: i,
                scope: 'object' == typeof a.scope ? JSON.stringify(a.scope) : a.scope,
                application_id: e.application.id,
                socket_scope: e.authorization.scopes.toString()
            }),
                r(a);
        })
            .then(
                (e) =>
                    new Promise(async (r, i) => {
                        if (null != e.validation) {
                            let a = await this.getJoi();
                            u()(null != e.validation, 'command.validation must not be null'),
                                a.validate(n.args, e.validation(a), { convert: !1 }, (n) => {
                                    if (null != n) {
                                        i(new h.Z({ errorCode: E.lTL.INVALID_PAYLOAD }, n.message));
                                        return;
                                    }
                                    r(e);
                                });
                        } else r(e);
                    })
            )
            .then((r) => {
                var i, a;
                return r.handler({
                    socket: e,
                    server: this,
                    cmd: n.cmd,
                    evt: n.evt,
                    nonce: n.nonce,
                    args: null !== (a = n.args) && void 0 !== a ? a : {},
                    isSocketConnected: () => this.sockets.has(e),
                    signal: null === (i = this.abortControllers.get(e)) || void 0 === i ? void 0 : i.signal
                });
            })
            .then((r) => this.dispatch(e, n.nonce, n.cmd, null, r))
            .catch((r) => {
                let { code: i, message: a } = r;
                return this.error(e, n.nonce, n.cmd, i, a);
            });
    }
    setCommandHandler(e, n) {
        this.commands[e] = n;
    }
    setEventHandler(e, n) {
        this.events[e] = n;
    }
    dispatch(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Etm.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({
            cmd: r,
            data: a,
            evt: i,
            nonce: n
        });
    }
    error(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Etm.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.lTL.UNKNOWN_ERROR,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'Unknown Error';
        f.default.track(E.rMx.RPC_SERVER_ERROR_CAUGHT, {
            command: r,
            code: i,
            message: a
        }),
            this.dispatch(e, n, r, E.zMe.ERROR, {
                code: i,
                message: a
            });
    }
    isSubscribed(e, n) {
        return void 0 !== this.subscriptions.find((r) => r.socket.application.id === e && r.evt === n);
    }
    getSubscription(e, n, r) {
        return this.subscriptions.find((i) => i.socket === e && i.evt === n && d().isEqual(i.args, r));
    }
    addSubscription(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            a = this.dispatch.bind(this, e, null, E.Etm.DISPATCH, n);
        if (null == this.getSubscription(e, n, r))
            this.subscriptions.push({
                update: i,
                dispatch: a,
                prevState: i
                    ? i({
                          prevState: null,
                          dispatch: a
                      })
                    : null,
                socket: e,
                evt: n,
                args: r
            });
    }
    removeSubscription(e, n, r) {
        d().remove(this.subscriptions, (i) => i.socket === e && i.evt === n && d().isEqual(i.args, r));
    }
    removeSubscriptions(e) {
        d().remove(this.subscriptions, (n) => n.socket === e);
    }
    dispatchToSubscriptions(e, n, r, i) {
        !(null != i && '' !== i && T(i)) &&
            this.subscriptions.forEach((i) => {
                var a;
                if (i.evt === e && ('function' != typeof n || !!n(i)) && ('object' != typeof n || !!I(n, null !== (a = i.args) && void 0 !== a ? a : {}))) this.dispatch(i.socket, null, E.Etm.DISPATCH, i.evt, r);
            });
    }
    updateSubscriptions() {
        this.subscriptions.forEach((e) => {
            if (!!e.update) e.prevState = e.update(e);
        });
    }
    storeWait(e, n, r) {
        let i = n();
        if (i || 0 === r) return Promise.resolve(i);
        let a = d().uniqueId(),
            o = () => this.removeSubscription(e, y, { uniqueId: a });
        return new Promise((i, s) => {
            let l = setTimeout(() => {
                o(), s(Error('timeout'));
            }, r * p.Z.Millis.SECOND);
            this.addSubscription(e, y, { uniqueId: a }, () => {
                let e = n();
                e && (clearTimeout(l), i(e));
            });
        }).then((e) => (o(), e));
    }
    constructor(e) {
        v(this, 'getCurrentUser', () => null), v(this, 'onConnect', () => {}), v(this, 'onDisconnect', () => {}), v(this, 'getJoi', void 0), v(this, 'events', {}), v(this, 'commands', {}), v(this, 'sockets', new Set()), v(this, 'subscriptions', []), v(this, 'abortControllers', new Map()), (this.getJoi = e);
    }
}
