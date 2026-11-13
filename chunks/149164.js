n.d(t, { A: () => O, s: () => N });
var a = n(855986),
    i = n(927813),
    r = n(664947),
    l = n(73153),
    A = n(951217),
    u = n(653868),
    o = n(652215);
let s = [],
    d = new Map(),
    c = null;
function I(e) {
    return {
        organization: (0, A.p)(e.game_organization),
        application: (0, u.Xw)(e.application),
        displayNoun: e.application_config.display_noun ?? null,
    };
}
class g extends a.Ay.Store {
    static displayName = "InvitableGameOrganizationStore";
    getInvitableGameOrganizations(e) {
        let t = o.fic.INVITABLE_GAME_ORGANIZATIONS(e);
        return null == t ? s : (d.get(t) ?? c);
    }
}
let f = new g(l.h, {
    INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS: function (e) {
        let { guildIds: t, gameOrganizations: n } = e,
            a = o.fic.INVITABLE_GAME_ORGANIZATIONS(t);
        if (null == a) return !1;
        ((c = n.map(I)), d.set(a, c));
    },
    LOGOUT: function () {
        if (null == c) return !1;
        (d.clear(), (c = null));
    },
});
var p = n(489452),
    G = n(931937);
let N = (0, a.UT)(f, {
    getQueryId: o.fic.INVITABLE_GAME_ORGANIZATIONS,
    staleAfter: i.A.Seconds.MINUTE,
    failureStaleAfter: i.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: p.A },
    get: (e) => f.getInvitableGameOrganizations(e),
    load: async (e) => {
        await r.A.fetchInvitableGameOrganizations(e);
    },
});
function O(e) {
    return N((0, G.A)(e));
}
