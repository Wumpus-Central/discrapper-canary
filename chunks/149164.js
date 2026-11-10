n.d(t, { A: () => m, s: () => R });
var l = n(855986),
    i = n(927813),
    r = n(664947),
    a = n(73153),
    o = n(951217),
    s = n(653868),
    u = n(652215);
let c = [],
    d = new Map(),
    f = null;
function A(e) {
    return {
        organization: (0, o.p)(e.game_organization),
        application: (0, s.Xw)(e.application),
        displayNoun: e.application_config.display_noun ?? null,
    };
}
class E extends l.Ay.Store {
    static displayName = "InvitableGameOrganizationStore";
    getInvitableGameOrganizations(e) {
        let t = u.fic.INVITABLE_GAME_ORGANIZATIONS(e);
        return null == t ? c : (d.get(t) ?? f);
    }
}
let p = new E(a.h, {
    INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS: function (e) {
        let { guildIds: t, gameOrganizations: n } = e,
            l = u.fic.INVITABLE_GAME_ORGANIZATIONS(t);
        if (null == l) return !1;
        ((f = n.map(A)), d.set(l, f));
    },
    LOGOUT: function () {
        if (null == f) return !1;
        (d.clear(), (f = null));
    },
});
var g = n(489452),
    I = n(931937);
let R = (0, l.UT)(p, {
    getQueryId: u.fic.INVITABLE_GAME_ORGANIZATIONS,
    staleAfter: i.A.Seconds.MINUTE,
    failureStaleAfter: i.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: g.A },
    get: (e) => p.getInvitableGameOrganizations(e),
    load: async (e) => {
        await r.A.fetchInvitableGameOrganizations(e);
    },
});
function m(e) {
    return R((0, I.A)(e));
}
