"use strict";
n.d(t, { A: () => g });
var i = n(268218);
n(667532), n(321073);
var r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(174459),
    u = n(927813),
    c = n(636401),
    d = n(639621),
    _ = n(722306),
    h = n(613057),
    f = n(652215);
let p = "RPC_STORE_WAIT",
    E = [];
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
        e.on("connect", (e) => this.handleConnect(e)),
            e.on("request", (e, t) => this.handleRequest(e, t)),
            e.on("disconnect", (e, t) => this.handleDisconnect(e, t));
    }
    handleConnect(e) {
        this.sockets.add(e), this.onConnect(e);
        let t = {
            v: e.version,
            config: {
                cdn_host: window.GLOBAL_ENV.CDN_HOST,
                api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                environment: "production",
            },
        };
        if (e.transport === h.z4.IPC) {
            let n = this.getCurrentUser();
            if (null == n) return void e.close(f.YI$.CLOSE_NORMAL, "User logged out");
            t.user = (0, d.A)(n);
        }
        this.dispatch(e, null, f.e$_.DISPATCH, f.ZE4.READY, t);
    }
    handleDisconnect(e, t) {
        e.abortController.abort("DISCONNECTED"),
            this.removeSubscriptions(e),
            this.sockets.delete(e),
            this.onDisconnect(e, t);
    }
    handleRequest(e, t) {
        new Promise((n) => {
            if (null == t.nonce || "" === t.nonce)
                throw new c.A({ errorCode: f.Lw6.INVALID_PAYLOAD }, "Payload requires a nonce");
            let i = t.cmd,
                r = this.commands[i];
            if (null == r) throw new c.A({ errorCode: f.Lw6.INVALID_COMMAND }, `Invalid command: ${t.cmd}`);
            if (!(0, _.A)(e.authorization.scopes, r.scope))
                throw new c.A({ errorCode: f.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            l.default.track(f.HAw.RPC_COMMAND_SENT, {
                command: i,
                scope: "object" == typeof r.scope ? JSON.stringify(r.scope) : r.scope,
                application_id: e.application.id,
                socket_scope: e.authorization.scopes.toString(),
            }),
                n(r);
        })
            .then(
                (e) =>
                    new Promise(async (n, i) => {
                        if (null != e.validation) {
                            let r = await this.getJoi();
                            s()(null != e.validation, "command.validation must not be null"),
                                r.validate(t.args, e.validation(r), { convert: !1 }, (t) => {
                                    null != t ? i(new c.A({ errorCode: f.Lw6.INVALID_PAYLOAD }, t.message)) : n(e);
                                });
                        } else n(e);
                    }),
            )
            .then((n) =>
                n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: t.args ?? {},
                    isSocketConnected: () => this.sockets.has(e),
                    signal: e.abortController.signal,
                }),
            )
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.e$_.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({ cmd: n, data: r, evt: i, nonce: t });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.e$_.DISPATCH,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.Lw6.UNKNOWN_ERROR,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
        l.default.track(f.HAw.RPC_SERVER_ERROR_CAUGHT, { command: n, code: i, message: r }),
            this.dispatch(e, t, n, f.ZE4.ERROR, { code: i, message: r });
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
    getSubscription(e, t, n) {
        return this.subscriptions.find((i) => i.socket === e && i.evt === t && o().isEqual(i.args, n));
    }
    addSubscription(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = this.dispatch.bind(this, e, null, f.e$_.DISPATCH, t);
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
        o().remove(this.subscriptions, (i) => i.socket === e && i.evt === t && o().isEqual(i.args, n)),
            this.dispatchIsSubscribedUpdate();
    }
    removeSubscriptions(e) {
        o().remove(this.subscriptions, (t) => t.socket === e), this.dispatchIsSubscribedUpdate();
    }
    dispatchToSubscriptions(e, t, n, i) {
        (null != i && "" !== i && (E.includes(i) || (E.unshift(i), E.splice(50), 0))) ||
            this.subscriptions.forEach((i) => {
                var r;
                i.evt === e &&
                    ("function" != typeof t || t(i)) &&
                    ("object" != typeof t || ((r = i.args ?? {}), o().isEqual(t, o().pick(r, Object.keys(t))))) &&
                    ("function" == typeof n && (n = n(i)), this.dispatch(i.socket, null, f.e$_.DISPATCH, i.evt, n));
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
        let r = o().uniqueId(),
            s = () => this.removeSubscription(e, p, { uniqueId: r });
        return new Promise((i, a) => {
            let o = setTimeout(() => {
                s(), a(Error("timeout"));
            }, n * u.A.Millis.SECOND);
            this.addSubscription(e, p, { uniqueId: r }, () => {
                let e = t();
                e && (clearTimeout(o), i(e));
            });
        }).then((e) => (s(), e));
    }
}
let g = new m(async () => {
    let { default: e } = await (0, i.sq)({
        createPromise: () => n.e("34188").then(n.t.bind(n, 88137, 23)),
        webpackId: 88137,
    });
    return e;
});
