n.d(t, {
    Bo: () => u,
    DP: () => c,
    KW: () => h,
    P: () => m,
    Y7: () => x,
    gO: () => o,
    im: () => g,
    jh: () => d,
    ms: () => p,
});
var i = n(636537),
    l = n(228366),
    s = n(627363),
    a = n(652215),
    r = n(705751);
async function o(e) {
    await i.Bo.post({ url: a.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(e), rejectWithError: !1 });
}
async function d(e) {
    return (await i.Bo.get({ url: a.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(e), rejectWithError: !1 })).body;
}
async function c(e, t) {
    await i.Bo.post({ url: a.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t), rejectWithError: !1 });
}
async function u(e) {
    await i.Bo.post({ url: a.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e), rejectWithError: !1 });
}
async function m(e) {
    return (await i.Bo.get({ url: a.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e), rejectWithError: !1 })).body;
}
async function g(e, t) {
    let n = (
        await i.Bo.post({
            url: a.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1,
        })
    ).body;
    return null != n.application && l.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: n.application }), n;
}
function h(e) {
    return i.Bo.post({ url: a.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e), rejectWithError: !1 });
}
function x(e) {
    return i.Bo.post({ url: a.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e), rejectWithError: !1 });
}
async function _(e) {
    await i.Bo.post({ url: a.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e), body: {}, rejectWithError: !1 });
}
async function p(e) {
    return await _(e), await s.Ay.getApplicationsForGuild(e, { type: r.S7.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: !0 });
}
