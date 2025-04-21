n.d(t, { Z: () => d });
var i = n(544891),
    r = n(570140),
    s = n(38618),
    l = n(769654),
    a = n(430824),
    c = n(981631);
let d = {
    acceptGuildTemplate: (e, t, n) => (
        r.Z.dispatch({
            type: 'GUILD_TEMPLATE_ACCEPT',
            code: e
        }),
        new Promise((d, u) => {
            i.tn
                .post({
                    url: c.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
                    body: {
                        name: t,
                        icon: n
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (t) => {
                        let n = t.body;
                        r.Z.dispatch({
                            type: 'GUILD_TEMPLATE_ACCEPT_SUCCESS',
                            code: e,
                            guild: n
                        }),
                            s.Z.isConnected()
                                ? a.Z.addConditionalChangeListener(() => {
                                      if (null != a.Z.getGuild(n.id)) return (0, l.X)(n.id), d(n), !1;
                                  })
                                : ((0, l.X)(n.id), d(n));
                    },
                    (t) => {
                        r.Z.dispatch({
                            type: 'GUILD_TEMPLATE_ACCEPT_FAILURE',
                            code: e
                        }),
                            u(t.body);
                    }
                );
        })
    )
};
