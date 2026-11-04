var E = T(620632),
    o = T(73153),
    i = T(627363),
    R = T(652215),
    n = T(705751);
T.d(
    r,
    {},
    {
        Bo: async function (t) {
            await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t), rejectWithError: (0, E.fT)() });
        },
        DP: async function (t, r) {
            await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r), rejectWithError: (0, E.fT)() });
        },
        KW: function (t) {
            return E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t), rejectWithError: (0, E.fT)() });
        },
        P: async function (t) {
            return (
                await E.Bo.get({
                    url: R.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
                    rejectWithError: (0, E.fT)(),
                })
            ).body;
        },
        Y7: function (t) {
            return E.Bo.post({
                url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
                rejectWithError: (0, E.fT)(),
            });
        },
        gO: async function (t) {
            await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(t), rejectWithError: (0, E.fT)() });
        },
        im: async function (t, r) {
            let T = (
                await E.Bo.post({
                    url: R.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
                    body: { team_id: r },
                    rejectWithError: (0, E.fT)(),
                })
            ).body;
            return (
                null != T.application &&
                    o.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: T.application }),
                T
            );
        },
        jh: async function (t) {
            return (await E.Bo.get({ url: R.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(t), rejectWithError: (0, E.fT)() }))
                .body;
        },
        ms: async function (t) {
            return (
                await (async function (t) {
                    await E.Bo.post({
                        url: R.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
                        body: {},
                        rejectWithError: (0, E.fT)(),
                    });
                })(t),
                await i.Ay.getApplicationsForGuild(t, { type: n.S7.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: !0 })
            );
        },
    },
);
