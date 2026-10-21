n.d(t, { A: () => g });
var i = n(268218);
(n(667532), n(321073));
var r = n(284009),
    a = n.n(r),
    s = n(435558),
    l = n.n(s),
    o = n(451988),
    d = n(174459),
    c = n(927813),
    u = n(636401),
    _ = n(112420),
    E = n(144189),
    A = n(639621),
    h = n(722306),
    f = n(613057),
    I = n(652215);
let p = "RPC_STORE_WAIT",
    T = [];
class m {
    getCurrentUser = () => null;
    onConnect = () => {};
    onDisconnect = () => {};
    getJoi;
    events = {};
    commands = {};
    sockets = new Set();
    subscriptions = [];
    constructor(e) {
        this.getJoi = e;
    }
    registerTransport(e) {
        (e.on("connect", (e) => this.handleConnect(e)),
            e.on("request", (e, t) => this.handleRequest(e, t)),
            e.on("disconnect", (e, t) => this.handleDisconnect(e, t)));
    }
    handleConnect(e) {
        (this.sockets.add(e), this.onConnect(e));
        let t = {
            v: e.version,
            config: {
                cdn_host: window.GLOBAL_ENV.CDN_HOST,
                api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                environment: "production",
            },
        };
        if (e.transport === f.z4.IPC || e.transport === f.z4.POST_MESSAGE) {
            let n = this.getCurrentUser();
            if (null == n) return void e.close(I.YI$.CLOSE_NORMAL, "User logged out");
            t.user = (0, A.A)(n);
        }
        this.dispatch(e, null, I.e$_.DISPATCH, I.ZE4.READY, t);
    }
    handleDisconnect(e, t) {
        (e.abortController.abort("DISCONNECTED"),
            this.removeSubscriptions(e),
            this.sockets.delete(e),
            this.onDisconnect(e, t));
    }
    handleRequest(e, t) {
        new Promise((n) => {
            if (null == t.nonce || "" === t.nonce)
                throw new u.A({ errorCode: I.Lw6.INVALID_PAYLOAD }, "Payload requires a nonce");
            let i = t.cmd,
                r = this.commands[i];
            if (null == r) throw new u.A({ errorCode: I.Lw6.INVALID_COMMAND }, `Invalid command: ${t.cmd}`);
            if (!(0, h.A)(e.authorization.scopes, r.scope))
                throw new u.A({ errorCode: I.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            (d.default.track(I.HAw.RPC_COMMAND_SENT, {
                command: i,
                scope: "object" == typeof r.scope ? JSON.stringify(r.scope) : r.scope,
                application_id: e.application.id,
                socket_scope: Array.from(e.authorization.scopes).toString(),
            }),
                n(r));
        })
            .then(async (e) => {
                if (null != e.validation) {
                    let n = await this.getJoi();
                    a()(null != e.validation, "command.validation must not be null");
                    let i = e.validation(n);
                    await new Promise((e, r) => {
                        n.validate(t.args, i, { convert: !1 }, (t) => {
                            null != t ? r(new u.A({ errorCode: I.Lw6.INVALID_PAYLOAD }, t.message)) : e();
                        });
                    });
                }
                return e;
            })
            .then(async (n) => {
                let i = (0, E.mS)(e, n.scope);
                return (
                    await n.validateAccess?.({ socket: e, args: t.args ?? {}, botScopeOnly: i }),
                    { command: n, botScopeOnly: i }
                );
            })
            .then((n) => {
                let { command: i, botScopeOnly: r } = n;
                if (e.source.type === f.z4.POST_MESSAGE) {
                    let n = (0, _.v)({ cmd: t.cmd, iframeId: e.source.iframeId, args: t.args ?? {} });
                    if (null != n) return n.result;
                }
                return i.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: t.args ?? {},
                    botScopeOnly: r,
                    isSocketConnected: () => this.sockets.has(e),
                    signal: e.abortController.signal,
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.e$_.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({ cmd: n, data: r, evt: i, nonce: t });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.e$_.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.Lw6.UNKNOWN_ERROR,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
        (d.default.track(I.HAw.RPC_SERVER_ERROR_CAUGHT, { command: n, code: i, message: r }),
            this.dispatch(e, t, n, I.ZE4.ERROR, { code: i, message: r }));
    }
    isSubscribedListeners = new Set();
    listenIsSubscribed(e) {
        return (
            this.isSubscribedListeners.add(e),
            () => {
                this.isSubscribedListeners.delete(e);
            }
        );
    }
    dispatchIsSubscribedUpdate() {
        this.isSubscribedListeners.forEach((e) => e());
    }
    isSubscribed(e, t) {
        return void 0 !== this.subscriptions.find((n) => n.socket.application.id === e && n.evt === t);
    }
    isChildSubscribed(e, t) {
        return (
            null != e && void 0 !== this.subscriptions.find((n) => n.socket.application.parentId === e && n.evt === t)
        );
    }
    waitForSubscription(e, t, n) {
        let i = () => this.subscriptions.some((n) => n.evt === e && t(n));
        return i()
            ? Promise.resolve()
            : new Promise((t, r) => {
                  let a = new o.Ep(),
                      s = this.listenIsSubscribed(() => {
                          i() && (a.stop(), s(), t());
                      });
                  a.start(n, () => {
                      (s(), r(Error(`No subscription to ${e} after ${n}ms`)));
                  });
              });
    }
    getSubscription(e, t, n) {
        return this.subscriptions.find((i) => i.socket === e && i.evt === t && l().isEqual(i.args, n));
    }
    addSubscription(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this.sockets.has(e)) return;
        let r = this.dispatch.bind(this, e, null, I.e$_.DISPATCH, t);
        null == this.getSubscription(e, t, n) &&
            (this.subscriptions.push({
                update: i,
                dispatch: r,
                prevState: i ? i({ prevState: null, dispatch: r }) : null,
                socket: e,
                evt: t,
                args: n,
            }),
            this.dispatchIsSubscribedUpdate());
    }
    removeSubscription(e, t, n) {
        (l().remove(this.subscriptions, (i) => i.socket === e && i.evt === t && l().isEqual(i.args, n)),
            this.dispatchIsSubscribedUpdate());
    }
    removeSubscriptions(e) {
        (l().remove(this.subscriptions, (t) => t.socket === e), this.dispatchIsSubscribedUpdate());
    }
    dispatchToSubscriptions(e, t, n, i) {
        (null != i && "" !== i && (T.includes(i) || (T.unshift(i), T.splice(50), 0))) ||
            this.subscriptions.forEach((i) => {
                var r;
                if (
                    i.evt !== e ||
                    ("function" == typeof t && !t(i)) ||
                    ("object" == typeof t && ((r = i.args ?? {}), !l().isEqual(t, l().pick(r, Object.keys(t)))))
                )
                    return;
                let a = "function" == typeof n ? n(i) : n;
                this.dispatch(i.socket, null, I.e$_.DISPATCH, i.evt, a);
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
        let r = l().uniqueId(),
            a = () => this.removeSubscription(e, p, { uniqueId: r });
        return new Promise((i, s) => {
            let l = setTimeout(() => {
                (a(), s(Error("timeout")));
            }, n * c.A.Millis.SECOND);
            this.addSubscription(e, p, { uniqueId: r }, () => {
                let e = t();
                e && (clearTimeout(l), i(e));
            });
        }).then((e) => (a(), e));
    }
}
let g = new m(async () => {
    let { default: e } = await (0, i.sq)({
        createPromise: () => n.e("734188").then(n.t.bind(n, 88137, 23)),
        webpackId: 88137,
    });
    return e;
});
