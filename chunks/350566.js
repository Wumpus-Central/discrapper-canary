r.d(t, { Z: () => d });
var s = r(544891),
    n = r(570140),
    a = r(38618),
    i = r(769654),
    l = r(430824),
    c = r(981631);
let d = {
    acceptGuildTemplate: (e, t, r) => (
        n.Z.dispatch({
            type: 'GUILD_TEMPLATE_ACCEPT',
            code: e
        }),
        new Promise((d, u) => {
            s.tn
                .post({
                    url: c.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
                    body: {
                        name: t,
                        icon: r
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (t) => {
                        let r = t.body;
                        n.Z.dispatch({
                            type: 'GUILD_TEMPLATE_ACCEPT_SUCCESS',
                            code: e,
                            guild: r
                        }),
                            a.Z.isConnected()
                                ? l.Z.addConditionalChangeListener(() => {
                                      if (null != l.Z.getGuild(r.id)) return (0, i.X)(r.id), d(r), !1;
                                  })
                                : ((0, i.X)(r.id), d(r));
                    },
                    (t) => {
                        n.Z.dispatch({
                            type: 'GUILD_TEMPLATE_ACCEPT_FAILURE',
                            code: e
                        }),
                            u(t.body);
                    }
                );
        })
    )
};
