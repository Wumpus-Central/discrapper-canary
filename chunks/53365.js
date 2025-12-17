n.d(r, {
    $J: () => s,
    He: () => T,
    av: () => u,
    df: () => N,
    hY: () => O,
    oL: () => R,
    wE: () => l,
    wZ: () => _,
    yk: () => c,
    zo: () => A,
});
var i = n(544891),
    e = n(570140),
    a = n(728345),
    E = n(981631),
    o = n(674563);
async function T(t) {
    await i.tn.post({
        url: E.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
        rejectWithError: !1,
    });
}
async function c(t) {
    return (
        await i.tn.get({
            url: E.ANM.CREATOR_MONETIZATION_ELIGIBILITY(t),
            rejectWithError: !1,
        })
    ).body;
}
async function l(t, r) {
    await i.tn.post({
        url: E.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r),
        rejectWithError: !1,
    });
}
async function A(t) {
    await i.tn.post({
        url: E.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
        rejectWithError: !1,
    });
}
async function _(t) {
    return (
        await i.tn.get({
            url: E.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
            rejectWithError: !1,
        })
    ).body;
}
async function u(t) {
    try {
        let r = await i.tn.get({
            url: E.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: t },
            rejectWithError: !0,
        });
        e.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: r.body.eligible_guilds,
        });
    } catch (t) {}
}
async function N(t, r) {
    let n = (
        await i.tn.post({
            url: E.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: r },
            rejectWithError: !1,
        })
    ).body;
    return (
        null != n.application &&
            e.Z.dispatch({
                type: "APPLICATION_FETCH_SUCCESS",
                application: n.application,
            }),
        n
    );
}
function O(t) {
    return i.tn.post({
        url: E.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
        rejectWithError: !1,
    });
}
function s(t) {
    return i.tn.post({
        url: E.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
        rejectWithError: !1,
    });
}
async function I(t) {
    await i.tn.post({
        url: E.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
        body: {},
        rejectWithError: !1,
    });
}
async function R(t) {
    return (
        await I(t),
        await a.ZP.getApplicationsForGuild(t, {
            type: o.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
        })
    );
}
