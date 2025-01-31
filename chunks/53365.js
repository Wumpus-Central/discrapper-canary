i.d(t, {
    $J: () => m,
    He: () => o,
    av: () => E,
    df: () => p,
    hY: () => I,
    oL: () => T,
    wE: () => d,
    wZ: () => _,
    yk: () => c,
    zo: () => u
});
var r = i(544891),
    n = i(570140),
    a = i(728345),
    l = i(981631),
    s = i(674563);
async function o(e) {
    await r.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
        rejectWithError: !1
    });
}
async function c(e) {
    return (
        await r.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1
        })
    ).body;
}
async function d(e, t) {
    await r.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
        rejectWithError: !1
    });
}
async function u(e) {
    await r.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
        rejectWithError: !1
    });
}
async function _(e) {
    return (
        await r.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1
        })
    ).body;
}
async function E(e) {
    try {
        let t = await r.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0
        });
        n.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: t.body.eligible_guilds
        });
    } catch (e) {}
}
async function p(e, t) {
    let i = (
        await r.tn.post({
            url: l.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1
        })
    ).body;
    return (
        null != i.application &&
            n.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: i.application
            }),
        i
    );
}
function I(e) {
    return r.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        rejectWithError: !1
    });
}
function m(e) {
    return r.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        rejectWithError: !1
    });
}
async function h(e) {
    await r.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
        body: {},
        rejectWithError: !1
    });
}
async function T(e) {
    return (
        await h(e),
        await a.ZP.getApplicationsForGuild(e, {
            type: s.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0
        })
    );
}
