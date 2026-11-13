n.d(t, { A: () => R, s: () => I });
var l = n(855986),
    r = n(927813),
    i = n(664947),
    o = n(73153),
    a = n(951217),
    s = n(653868),
    u = n(652215);
let c = [],
    d = new Map(),
    f = null;
function A(e) {
    return {
        organization: (0, a.p)(e.game_organization),
        application: (0, s.Xw)(e.application),
        displayNoun: e.application_config.display_noun ?? null,
    };
}
class p extends l.Ay.Store {
    static displayName = "InvitableGameOrganizationStore";
    getInvitableGameOrganizations(e) {
        let t = u.fic.INVITABLE_GAME_ORGANIZATIONS(e);
        return null == t ? c : (d.get(t) ?? f);
    }
}
let E = new p(o.h, {
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
    _ = n(931937);
let I = (0, l.UT)(E, {
    getQueryId: u.fic.INVITABLE_GAME_ORGANIZATIONS,
    staleAfter: r.A.Seconds.MINUTE,
    failureStaleAfter: r.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: g.A },
    get: (e) => E.getInvitableGameOrganizations(e),
    load: async (e) => {
        await i.A.fetchInvitableGameOrganizations(e);
    },
});
function R(e) {
    return I((0, _.A)(e));
}
