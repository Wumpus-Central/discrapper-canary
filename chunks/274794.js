n.d(t, {
    A: () => b,
}),
    n(667532),
    n(457529),
    n(321073),
    n(65821),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(954571),
    l = n(927813),
    c = n(636401),
    u = n(639621),
    d = n(722306),
    f = n(613057),
    p = n(652215);

function _(e, t, n) {
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
let h = "RPC_STORE_WAIT",
    m = [];

function g(e, t) {
    return s().isEqual(e, s().pick(t, Object.keys(e)));
}

function E(e) {
    return !!m.includes(e) || (m.unshift(e), m.splice(50), !1);
}
class b {
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
        if (e.transport === f.z4.IPC) {
            let n = this.getCurrentUser();
            if (null == n) return void e.close(p.YI$.CLOSE_NORMAL, "User logged out");
            t.user = (0, u.A)(n);
        }
        this.dispatch(e, null, p.e$_.DISPATCH, p.ZE4.READY, t);
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
                throw new c.A(
                    {
                        errorCode: p.Lw6.INVALID_PAYLOAD,
                    },
                    "Payload requires a nonce",
                );
            let r = t.cmd,
                i = this.commands[r];
            if (null == i)
                throw new c.A(
                    {
                        errorCode: p.Lw6.INVALID_COMMAND,
                    },
                    "Invalid command: ".concat(t.cmd),
                );
            if (!(0, d.A)(e.authorization.scopes, i.scope))
                throw new c.A(
                    {
                        errorCode: p.Lw6.INVALID_PERMISSIONS,
                    },
                    "Not authenticated or invalid scope",
                );
            o.default.track(p.HAw.RPC_COMMAND_SENT, {
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
                            let a = await this.getJoi();
                            i()(null != e.validation, "command.validation must not be null"),
                                a.validate(
                                    t.args,
                                    e.validation(a),
                                    {
                                        convert: !1,
                                    },
                                    (t) => {
                                        null != t
                                            ? r(
                                                  new c.A(
                                                      {
                                                          errorCode: p.Lw6.INVALID_PAYLOAD,
                                                      },
                                                      t.message,
                                                  ),
                                              )
                                            : n(e);
                                    },
                                );
                        } else n(e);
                    }),
            )
            .then((n) => {
                var r;
                return n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: null != (r = t.args) ? r : {},
                    isSocketConnected: () => this.sockets.has(e),
                    signal: e.abortController.signal,
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.e$_.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({
            cmd: n,
            data: i,
            evt: r,
            nonce: t,
        });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.e$_.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.Lw6.UNKNOWN_ERROR,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
        o.default.track(p.HAw.RPC_SERVER_ERROR_CAUGHT, {
            command: n,
            code: r,
            message: i,
        }),
            this.dispatch(e, t, n, p.ZE4.ERROR, {
                code: r,
                message: i,
            });
    }
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
    getSubscription(e, t, n) {
        return this.subscriptions.find((r) => r.socket === e && r.evt === t && s().isEqual(r.args, n));
    }
    addSubscription(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = this.dispatch.bind(this, e, null, p.e$_.DISPATCH, t);
        null == this.getSubscription(e, t, n) &&
            (this.subscriptions.push({
                update: r,
                dispatch: i,
                prevState: r
                    ? r({
                          prevState: null,
                          dispatch: i,
                      })
                    : null,
                socket: e,
                evt: t,
                args: n,
            }),
            this.dispatchIsSubscribedUpdate());
    }
    removeSubscription(e, t, n) {
        s().remove(this.subscriptions, (r) => r.socket === e && r.evt === t && s().isEqual(r.args, n)),
            this.dispatchIsSubscribedUpdate();
    }
    removeSubscriptions(e) {
        s().remove(this.subscriptions, (t) => t.socket === e), this.dispatchIsSubscribedUpdate();
    }
    dispatchToSubscriptions(e, t, n, r) {
        (null != r && "" !== r && E(r)) ||
            this.subscriptions.forEach((r) => {
                var i;
                r.evt !== e ||
                    (("function" != typeof t || t(r)) &&
                        ("object" != typeof t || g(t, null != (i = r.args) ? i : {})) &&
                        ("function" == typeof n && (n = n(r)),
                        this.dispatch(r.socket, null, p.e$_.DISPATCH, r.evt, n)));
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
        let i = s().uniqueId(),
            a = () =>
                this.removeSubscription(e, h, {
                    uniqueId: i,
                });
        return new Promise((r, s) => {
            let o = setTimeout(() => {
                a(), s(Error("timeout"));
            }, n * l.A.Millis.SECOND);
            this.addSubscription(
                e,
                h,
                {
                    uniqueId: i,
                },
                () => {
                    let e = t();
                    e && (clearTimeout(o), r(e));
                },
            );
        }).then((e) => (a(), e));
    }
    constructor(e) {
        _(this, "getCurrentUser", () => null),
            _(this, "onConnect", () => {}),
            _(this, "onDisconnect", () => {}),
            _(this, "getJoi", void 0),
            _(this, "events", {}),
            _(this, "commands", {}),
            _(this, "sockets", new Set()),
            _(this, "subscriptions", []),
            _(this, "isSubscribedListeners", new Set()),
            (this.getJoi = e);
    }
}
