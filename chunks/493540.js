E.d(r, {
    Bo: () => O,
    DP: () => c,
    KW: () => u,
    P: () => _,
    Y7: () => s,
    gO: () => e,
    im: () => A,
    jh: () => a,
    ms: () => N,
});
var o = E(636537),
    i = E(228366),
    T = E(627363),
    R = E(652215),
    n = E(705751);
async function e(t) {
    await o.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(t), rejectWithError: !1 });
}
async function a(t) {
    return (await o.Bo.get({ url: R.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(t), rejectWithError: !1 })).body;
}
async function c(t, r) {
    await o.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r), rejectWithError: !1 });
}
async function O(t) {
    await o.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t), rejectWithError: !1 });
}
async function _(t) {
    return (await o.Bo.get({ url: R.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t), rejectWithError: !1 })).body;
}
async function A(t, r) {
    let E = (
        await o.Bo.post({
            url: R.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: r },
            rejectWithError: !1,
        })
    ).body;
    return null != E.application && i.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: E.application }), E;
}
function u(t) {
    return o.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t), rejectWithError: !1 });
}
function s(t) {
    return o.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t), rejectWithError: !1 });
}
async function I(t) {
    await o.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t), body: {}, rejectWithError: !1 });
}
async function N(t) {
    return await I(t), await T.Ay.getApplicationsForGuild(t, { type: n.S7.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: !0 });
}
