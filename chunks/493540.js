T.d(r, {
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
var E = T(636537),
    o = T(228366),
    i = T(627363),
    R = T(652215),
    n = T(705751);
async function e(t) {
    await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(t), rejectWithError: (0, E.fT)() });
}
async function a(t) {
    return (await E.Bo.get({ url: R.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(t), rejectWithError: (0, E.fT)() })).body;
}
async function c(t, r) {
    await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r), rejectWithError: (0, E.fT)() });
}
async function O(t) {
    await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t), rejectWithError: (0, E.fT)() });
}
async function _(t) {
    return (await E.Bo.get({ url: R.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t), rejectWithError: (0, E.fT)() }))
        .body;
}
async function A(t, r) {
    let T = (
        await E.Bo.post({
            url: R.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: r },
            rejectWithError: (0, E.fT)(),
        })
    ).body;
    return null != T.application && o.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: T.application }), T;
}
function u(t) {
    return E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t), rejectWithError: (0, E.fT)() });
}
function s(t) {
    return E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t), rejectWithError: (0, E.fT)() });
}
async function I(t) {
    await E.Bo.post({ url: R.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t), body: {}, rejectWithError: (0, E.fT)() });
}
async function N(t) {
    return await I(t), await i.Ay.getApplicationsForGuild(t, { type: n.S7.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: !0 });
}
