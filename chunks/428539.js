n.d(t, { A: () => m });
var i = n(73153),
    r = n(77468),
    a = n(573648),
    l = n(882997),
    s = n(962173),
    o = n(203982),
    d = n(636401),
    u = n(90924),
    c = n(629471),
    A = n(613057),
    h = n(652215),
    _ = n(360469),
    E = n(818348);
let p = new Set([_.AM, _.eK]),
    m = {
        [E.e$.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [A.sm.ANY]: [A.VH] },
            validation: (e) =>
                (0, c.A)(e).required().keys({ provider: e.string().required(), connection_redirect: e.string() }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: c },
                } = e;
                (0, u.lG)(t.transport);
                let A = (0, u.D2)(t.application),
                    _ = a.A.get(n);
                if (null == _)
                    throw new d.A({ errorCode: E.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === h.fg2.AMAZON_MUSIC) {
                    if (!p.has(A))
                        throw new d.A(
                            { errorCode: E.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new d.A(
                        { errorCode: E.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let a = s.A.getAccount(null, n);
                    if (null == a) {
                        function u(t) {
                            if (null == _) return;
                            let n = (t.accounts ?? []).find((e) => e.type === _.type);
                            null != n && (e({ access_token: n.access_token }), p());
                        }
                        function A() {
                            t(new d.A({ errorCode: E.Lw.OAUTH2_ERROR }, `OAuth2 setup for "${n}" failed`)), p();
                        }
                        function p() {
                            i.h.unsubscribe("USER_CONNECTIONS_UPDATE", u),
                                o._.unsubscribe(h.jej.CONNECTIONS_CALLBACK_ERROR, A);
                        }
                        i.h.subscribe("USER_CONNECTIONS_UPDATE", u),
                            o._.subscribe(h.jej.CONNECTIONS_CALLBACK_ERROR, A),
                            (0, l.A)({ platformType: _.type, location: h.ThZ.ACTIVITY_RPC, successRedirect: c });
                    } else
                        try {
                            let t = await r.A.refreshAccessToken(_.type, a.id);
                            if (null == t)
                                throw new d.A(
                                    { errorCode: E.Lw.OAUTH2_ERROR },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [E.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [A.sm.ANY]: [A.VH] },
            validation: (e) => (0, c.A)(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, u.lG)(t.transport);
                let i = (0, u.D2)(t.application),
                    l = a.A.get(n);
                if (null == l)
                    throw new d.A({ errorCode: E.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === h.fg2.AMAZON_MUSIC) {
                    if (!p.has(i))
                        throw new d.A(
                            { errorCode: E.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new d.A(
                        { errorCode: E.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                let o = s.A.getAccount(null, n);
                if (null == o) throw new d.A({ errorCode: E.Lw.NO_CONNECTION_FOUND }, "No connection found");
                let c = await r.A.refreshAccessToken(l.type, o.id);
                if (null == c)
                    throw new d.A(
                        { errorCode: E.Lw.OAUTH2_ERROR },
                        "Refreshing access token did not return a new access token",
                    );
                return { access_token: c };
            },
        },
    };
