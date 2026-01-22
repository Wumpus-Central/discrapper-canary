n.d(t, {
    A: () => o,
}),
    n(457529),
    n(142703);
var r = n(954571),
    i = n(636401),
    l = n(722306),
    a = n(105130),
    s = n(652215);
let o = {
    [s.e$_.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: o, args: c } = e,
                u = t.events[o];
            if (null == u)
                throw new i.A(
                    {
                        errorCode: s.Lw6.INVALID_EVENT,
                    },
                    "Invalid event: ".concat(o),
                );
            if (!(0, l.A)(n.authorization.scopes, u.scope))
                throw new i.A(
                    {
                        errorCode: s.Lw6.INVALID_PERMISSIONS,
                    },
                    "Not authenticated or invalid scope",
                );
            if (
                (r.default.track(s.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: "object" == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != u.validation)
            ) {
                let e = await t.getJoi();
                if (
                    null !=
                    e.validate(c, u.validation(e), {
                        convert: !1,
                    }).error
                )
                    throw new i.A(
                        {
                            errorCode: s.Lw6.INVALID_PAYLOAD,
                        },
                        "Invalid subscription parameters provided",
                    );
            }
            let d = u.handler({
                    args: c,
                    socket: n,
                }),
                p = (0, a.M)(n, o, c);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, o, c, d),
                        null != p && t.dispatchToSubscriptions(o, (e) => e.socket.id === n.id, p);
                }),
                    e({
                        evt: o,
                    });
            });
        },
    },
    [s.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: r, args: l } = e;
            if (null == t.events[r])
                throw new i.A(
                    {
                        errorCode: s.Lw6.INVALID_EVENT,
                    },
                    "Invalid event: ".concat(r),
                );
            return (
                t.removeSubscription(n, r, l),
                {
                    evt: r,
                }
            );
        },
    },
};
