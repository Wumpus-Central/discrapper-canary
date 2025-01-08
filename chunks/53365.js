r.d(t, {
    $J: function () {
        return m;
    },
    He: function () {
        return o;
    },
    av: function () {
        return E;
    },
    df: function () {
        return p;
    },
    hY: function () {
        return I;
    },
    oL: function () {
        return T;
    },
    wE: function () {
        return d;
    },
    wZ: function () {
        return _;
    },
    yk: function () {
        return c;
    },
    zo: function () {
        return u;
    }
});
var n = r(544891),
    i = r(570140),
    a = r(728345),
    l = r(981631),
    s = r(674563);
async function o(e) {
    await n.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
        rejectWithError: !1
    });
}
async function c(e) {
    return (
        await n.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1
        })
    ).body;
}
async function d(e, t) {
    await n.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
        rejectWithError: !1
    });
}
async function u(e) {
    await n.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
        rejectWithError: !1
    });
}
async function _(e) {
    return (
        await n.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1
        })
    ).body;
}
async function E(e) {
    try {
        let t = await n.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: t.body.eligible_guilds
        });
    } catch (e) {}
}
async function p(e, t) {
    let r = (
        await n.tn.post({
            url: l.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
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
function I(e) {
    return n.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        rejectWithError: !1
    });
}
function m(e) {
    return n.tn.post({
        url: l.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        rejectWithError: !1
    });
}
async function h(e) {
    await n.tn.post({
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
