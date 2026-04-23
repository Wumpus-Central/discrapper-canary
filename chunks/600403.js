n.d(t, { A: () => o }), n(142703);
var i = n(954571),
    r = n(636401),
    a = n(722306),
    l = n(105130),
    s = n(652215);
let o = {
    [s.e$_.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: o, args: d } = e,
                u = t.events[o];
            if (null == u) throw new r.A({ errorCode: s.Lw6.INVALID_EVENT }, `Invalid event: ${o}`);
            if (!(0, a.A)(n.authorization.scopes, u.scope))
                throw new r.A({ errorCode: s.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            if (
                (i.default.track(s.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: "object" == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != u.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(d, u.validation(e), { convert: !1 }).error)
                    throw new r.A({ errorCode: s.Lw6.INVALID_PAYLOAD }, "Invalid subscription parameters provided");
            }
            let c = u.handler({ args: d, socket: n }),
                A = (0, l.M)(n, o, d);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, o, d, c),
                        null != A && t.dispatchToSubscriptions(o, (e) => e.socket.id === n.id, A);
                }),
                    e({ evt: o });
            });
        },
    },
    [s.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: a } = e;
            if (null == t.events[i]) throw new r.A({ errorCode: s.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            return t.removeSubscription(n, i, a), { evt: i };
        },
    },
};
