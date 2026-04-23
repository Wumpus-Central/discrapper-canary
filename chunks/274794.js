"use strict";
n.d(t, { A: () => E }), n(667532), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(954571),
    l = n(927813),
    u = n(636401),
    c = n(639621),
    d = n(722306),
    _ = n(613057),
    f = n(652215);
let p = "RPC_STORE_WAIT",
    h = [];
class E {
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
        if (e.transport === _.z4.IPC) {
            let n = this.getCurrentUser();
            if (null == n) return void e.close(f.YI$.CLOSE_NORMAL, "User logged out");
            t.user = (0, c.A)(n);
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
                throw new u.A({ errorCode: f.Lw6.INVALID_PAYLOAD }, "Payload requires a nonce");
            let r = t.cmd,
                i = this.commands[r];
            if (null == i) throw new u.A({ errorCode: f.Lw6.INVALID_COMMAND }, `Invalid command: ${t.cmd}`);
            if (!(0, d.A)(e.authorization.scopes, i.scope))
                throw new u.A({ errorCode: f.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            o.default.track(f.HAw.RPC_COMMAND_SENT, {
                command: r,
                scope: "object" == typeof i.scope ? JSON.stringify(i.scope) : i.scope,
                application_id: e.application.id,
                socket_scope: e.authorization.scopes.toString(),
            }),
                n(i);
        })
            .then(
                (e) =>
                    new Promise(async (n, r) => {
                        if (null != e.validation) {
                            let s = await this.getJoi();
                            i()(null != e.validation, "command.validation must not be null"),
                                s.validate(t.args, e.validation(s), { convert: !1 }, (t) => {
                                    null != t ? r(new u.A({ errorCode: f.Lw6.INVALID_PAYLOAD }, t.message)) : n(e);
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.e$_.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({ cmd: n, data: i, evt: r, nonce: t });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.e$_.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.Lw6.UNKNOWN_ERROR,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
        o.default.track(f.HAw.RPC_SERVER_ERROR_CAUGHT, { command: n, code: r, message: i }),
            this.dispatch(e, t, n, f.ZE4.ERROR, { code: r, message: i });
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
        return this.subscriptions.find((r) => r.socket === e && r.evt === t && a().isEqual(r.args, n));
    }
    addSubscription(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = this.dispatch.bind(this, e, null, f.e$_.DISPATCH, t);
        null == this.getSubscription(e, t, n) &&
            (this.subscriptions.push({
                update: r,
                dispatch: i,
                prevState: r ? r({ prevState: null, dispatch: i }) : null,
                socket: e,
                evt: t,
                args: n,
            }),
            this.dispatchIsSubscribedUpdate());
    }
    removeSubscription(e, t, n) {
        a().remove(this.subscriptions, (r) => r.socket === e && r.evt === t && a().isEqual(r.args, n)),
            this.dispatchIsSubscribedUpdate();
    }
    removeSubscriptions(e) {
        a().remove(this.subscriptions, (t) => t.socket === e), this.dispatchIsSubscribedUpdate();
    }
    dispatchToSubscriptions(e, t, n, r) {
        (null != r && "" !== r && (h.includes(r) || (h.unshift(r), h.splice(50), 0))) ||
            this.subscriptions.forEach((r) => {
                var i;
                r.evt === e &&
                    ("function" != typeof t || t(r)) &&
                    ("object" != typeof t || ((i = r.args ?? {}), a().isEqual(t, a().pick(i, Object.keys(t))))) &&
                    ("function" == typeof n && (n = n(r)), this.dispatch(r.socket, null, f.e$_.DISPATCH, r.evt, n));
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
            s = () => this.removeSubscription(e, p, { uniqueId: i });
        return new Promise((r, a) => {
            let o = setTimeout(() => {
                s(), a(Error("timeout"));
            }, n * l.A.Millis.SECOND);
            this.addSubscription(e, p, { uniqueId: i }, () => {
                let e = t();
                e && (clearTimeout(o), r(e));
            });
        }).then((e) => (s(), e));
    }
}
