r.d(t, {
    Bo: () => u,
    DP: () => d,
    KW: () => h,
    P: () => _,
    Y7: () => O,
    _8: () => p,
    gO: () => l,
    im: () => E,
    jh: () => c,
    ms: () => A,
});
var i = r(562465),
    n = r(73153),
    a = r(627363),
    o = r(652215),
    s = r(705751);
async function l(e) {
    await i.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
        rejectWithError: !1,
    });
}
async function c(e) {
    return (
        await i.Bo.get({
            url: o.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1,
        })
    ).body;
}
async function d(e, t) {
    await i.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
        rejectWithError: !1,
    });
}
async function u(e) {
    await i.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
        rejectWithError: !1,
    });
}
async function _(e) {
    return (
        await i.Bo.get({
            url: o.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1,
        })
    ).body;
}
async function p(e) {
    try {
        let t = await i.Bo.get({
            url: o.Rsh.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0,
        });
        n.h.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: t.body.eligible_guilds,
        });
    } catch (e) {}
}
async function E(e, t) {
    let r = (
        await i.Bo.post({
            url: o.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1,
        })
    ).body;
    return (
        null != r.application &&
            n.h.dispatch({
                type: "APPLICATION_FETCH_SUCCESS",
                application: r.application,
            }),
        r
    );
}
function h(e) {
    return i.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        rejectWithError: !1,
    });
}
function O(e) {
    return i.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        rejectWithError: !1,
    });
}
async function I(e) {
    await i.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
        body: {},
        rejectWithError: !1,
    });
}
async function A(e) {
    return (
        await I(e),
        await a.Ay.getApplicationsForGuild(e, {
            type: s.S7.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
        })
    );
}
