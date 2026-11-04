var i = n(620632),
    r = n(73153),
    a = n(181658),
    s = n(652215);
n.d(
    t,
    {},
    {
        L5: async function (e, t) {
            return (
                await i.Bo.get({
                    url: s.Rsh.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
                    query: { application_id: e, sku_id: t },
                    rejectWithError: (0, i.fT)(),
                })
            ).body;
        },
        TA: function (e, t) {
            return (
                r.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e }),
                i.Bo.get({ url: s.Rsh.APPLICATION_PUBLIC(e), signal: t, rejectWithError: (0, i.fT)() })
                    .then(
                        (e) => (
                            r.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e.body, isHydrated: !0 }),
                            e.body
                        ),
                    )
                    .catch(
                        (t) => (
                            r.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }),
                            Promise.reject(new a.A(t))
                        ),
                    )
            );
        },
        dU: async function (e) {
            return (
                await i.Bo.get({
                    url: s.Rsh.GUILD_ENTITLEMENTS(e),
                    query: { with_sku: !0, with_application: !0 },
                    rejectWithError: (0, i.fT)(),
                })
            ).body;
        },
        fY: async function (e, t) {
            return (
                await i.Bo.get({
                    url: s.Rsh.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t),
                    rejectWithError: (0, i.fT)(),
                })
            ).body;
        },
        q$: async function (e) {
            return (await i.Bo.get({ url: s.Rsh.SUBSCRIPTION_PLAN_GROUP_LISTING(e), rejectWithError: (0, i.fT)() }))
                .body;
        },
    },
);
