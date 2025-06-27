r.d(t, {
    $J: () => I,
    He: () => s,
    av: () => p,
    df: () => E,
    hY: () => O,
    oL: () => T,
    wE: () => d,
    wZ: () => _,
    yk: () => c,
    zo: () => u
});
var n = r(544891),
    i = r(570140),
    a = r(728345),
    o = r(981631),
    l = r(674563);
async function s(e) {
    await n.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
        rejectWithError: !1
    });
}
async function c(e) {
    return (
        await n.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1
        })
    ).body;
}
async function d(e, t) {
    await n.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
        rejectWithError: !1
    });
}
async function u(e) {
    await n.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
        rejectWithError: !1
    });
}
async function _(e) {
    return (
        await n.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1
        })
    ).body;
}
async function p(e) {
    try {
        let t = await n.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: t.body.eligible_guilds
        });
    } catch (e) {}
}
async function E(e, t) {
    let r = (
        await n.tn.post({
            url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1
        })
    ).body;
    return (
        null != r.application &&
            i.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: r.application
            }),
        r
    );
}
function O(e) {
    return n.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        rejectWithError: !1
    });
}
function I(e) {
    return n.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        rejectWithError: !1
    });
}
async function A(e) {
    await n.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
        body: {},
        rejectWithError: !1
    });
}
async function T(e) {
    return (
        await A(e),
        await a.ZP.getApplicationsForGuild(e, {
            type: l.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0
        })
    );
}
