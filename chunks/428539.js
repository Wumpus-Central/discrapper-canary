n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(73153),
    i = n(77468),
    l = n(573648),
    a = n(882997),
    s = n(962173),
    o = n(203982),
    c = n(636401),
    u = n(90924),
    d = n(629471),
    p = n(613057),
    f = n(652215),
    h = n(360469),
    A = n(818348);
let g = new Set([h.AM, h.eK]),
    m = {
        [A.e$.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: {
                [p.sm.ANY]: [p.VH],
            },
            validation: (e) =>
                (0, d.A)(e).required().keys({
                    provider: e.string().required(),
                    connection_redirect: e.string(),
                }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: d },
                } = e;
                (0, u.lG)(t.transport);
                let p = (0, u.D2)(t.application),
                    h = l.A.get(n);
                if (null == h)
                    throw new c.A(
                        {
                            errorCode: A.Lw.INVALID_PROVIDER,
                        },
                        'Platform not found for provider "'.concat(n, '"'),
                    );
                if (n === f.fg2.AMAZON_MUSIC) {
                    if (!g.has(p))
                        throw new c.A(
                            {
                                errorCode: A.Lw.UNAUTHORIZED_FOR_APPLICATION,
                            },
                            "Command not available for this application",
                        );
                } else
                    throw new c.A(
                        {
                            errorCode: A.Lw.UNAUTHORIZED_FOR_APPLICATION,
                        },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let l = s.A.getAccount(null, n);
                    if (null == l) {
                        function u(t) {
                            var n;
                            if (null == h) return;
                            let r = (null != (n = t.accounts) ? n : []).find((e) => e.type === h.type);
                            null != r &&
                                (e({
                                    access_token: r.access_token,
                                }),
                                g());
                        }

                        function p() {
                            t(
                                new c.A(
                                    {
                                        errorCode: A.Lw.OAUTH2_ERROR,
                                    },
                                    'OAuth2 setup for "'.concat(n, '" failed'),
                                ),
                            ),
                                g();
                        }

                        function g() {
                            r.h.unsubscribe("USER_CONNECTIONS_UPDATE", u),
                                o._.unsubscribe(f.jej.CONNECTIONS_CALLBACK_ERROR, p);
                        }
                        r.h.subscribe("USER_CONNECTIONS_UPDATE", u),
                            o._.subscribe(f.jej.CONNECTIONS_CALLBACK_ERROR, p),
                            (0, a.A)({
                                platformType: h.type,
                                location: f.ThZ.ACTIVITY_RPC,
                                successRedirect: d,
                            });
                    } else
                        try {
                            let t = await i.A.refreshAccessToken(h.type, l.id);
                            if (null == t)
                                throw new c.A(
                                    {
                                        errorCode: A.Lw.OAUTH2_ERROR,
                                    },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({
                                access_token: t,
                            });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [A.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: {
                [p.sm.ANY]: [p.VH],
            },
            validation: (e) =>
                (0, d.A)(e).required().keys({
                    provider: e.string().required(),
                }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, u.lG)(t.transport);
                let r = (0, u.D2)(t.application),
                    a = l.A.get(n);
                if (null == a)
                    throw new c.A(
                        {
                            errorCode: A.Lw.INVALID_PROVIDER,
                        },
                        'Platform not found for provider "'.concat(n, '"'),
                    );
                if (n === f.fg2.AMAZON_MUSIC) {
                    if (!g.has(r))
                        throw new c.A(
                            {
                                errorCode: A.Lw.UNAUTHORIZED_FOR_APPLICATION,
                            },
                            "Command not available for this application",
                        );
                } else
                    throw new c.A(
                        {
                            errorCode: A.Lw.UNAUTHORIZED_FOR_APPLICATION,
                        },
                        "Command not available for this application",
                    );
                let o = s.A.getAccount(null, n);
                if (null == o)
                    throw new c.A(
                        {
                            errorCode: A.Lw.NO_CONNECTION_FOUND,
                        },
                        "No connection found",
                    );
                let d = await i.A.refreshAccessToken(a.type, o.id);
                if (null == d)
                    throw new c.A(
                        {
                            errorCode: A.Lw.OAUTH2_ERROR,
                        },
                        "Refreshing access token did not return a new access token",
                    );
                return {
                    access_token: d,
                };
            },
        },
    };
