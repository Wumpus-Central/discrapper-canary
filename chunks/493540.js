r.d(t, {
    Bo: () => d,
    DP: () => _,
    KW: () => A,
    P: () => E,
    Y7: () => p,
    _8: () => h,
    gO: () => l,
    im: () => I,
    jh: () => c,
    ms: () => u,
});
var i = r(562465),
    a = r(73153),
    s = r(627363),
    n = r(652215),
    o = r(705751);
async function l(e) {
    await i.Bo.post({ url: n.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(e), rejectWithError: !1 });
}
async function c(e) {
    return (await i.Bo.get({ url: n.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(e), rejectWithError: !1 })).body;
}
async function _(e, t) {
    await i.Bo.post({ url: n.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t), rejectWithError: !1 });
}
async function d(e) {
    await i.Bo.post({ url: n.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e), rejectWithError: !1 });
}
async function E(e) {
    return (await i.Bo.get({ url: n.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e), rejectWithError: !1 })).body;
}
async function h(e) {
    try {
        let t = await i.Bo.get({
            url: n.Rsh.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0,
        });
        a.h.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: t.body.eligible_guilds,
        });
    } catch (e) {}
}
async function I(e, t) {
    let r = (
        await i.Bo.post({
            url: n.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1,
        })
    ).body;
    return null != r.application && a.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: r.application }), r;
}
function A(e) {
    return i.Bo.post({ url: n.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e), rejectWithError: !1 });
}
function p(e) {
    return i.Bo.post({ url: n.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e), rejectWithError: !1 });
}
async function T(e) {
    await i.Bo.post({ url: n.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e), body: {}, rejectWithError: !1 });
}
async function u(e) {
    return await T(e), await s.Ay.getApplicationsForGuild(e, { type: o.S7.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: !0 });
}
