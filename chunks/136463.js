i.d(t, { c: () => T });
var n = i(855986),
    l = i(71393),
    r = i(927813),
    a = i(669610),
    d = i(73153),
    o = i(951217);
let u = {},
    g = {},
    I = {},
    _ = {},
    A = {};
function c(e) {
    ((I[e.id] = e), (_[e.guildId] = e), delete g[e.guildId], delete u[e.guildId]);
}
function G(e) {
    (delete I[e.id], delete _[e.guildId], delete A[e.guildId], delete g[e.guildId], delete u[e.guildId]);
}
class E extends n.Ay.Store {
    static displayName = "GameOrganizationStore";
    getGameOrganization(e) {
        return I[e];
    }
    getGameOrganizationByGuildId(e) {
        return null == e ? null : (_[e] ?? null);
    }
    getDisplayNounByGuildId(e) {
        return null == e ? null : (A[e] ?? null);
    }
    isLoadingForGuild(e) {
        return null != e && (u[e] ?? !1);
    }
    getErrorForGuild(e) {
        return null == e ? null : (g[e] ?? null);
    }
}
let s = new E(d.h, {
    GAME_ORGANIZATION_FETCH_START: function (e) {
        let { guildId: t } = e;
        u[t] = !0;
    },
    GAME_ORGANIZATION_FETCH_SUCCESS: function (e) {
        let { gameOrganization: t, displayNoun: i } = e;
        (c(t), (A[t.guildId] = i));
    },
    GAME_ORGANIZATION_FETCH_FAILURE: function (e) {
        let { guildId: t, error: i } = e;
        (delete u[t], (g[t] = i));
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let {
                invite: { game_organization: t, application_config: i },
            } = e,
            n = (0, o.p)(t);
        (c(n), null != i && (A[n.guildId] = i.display_noun), delete g[n.guildId]);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            i = _[t.id];
        return (
            null != i &&
            (t.linked_game_organization?.application_id !== i.applicationId ||
                t.linked_game_organization?.game_organization_id !== i?.id) &&
            (G(i), !0)
        );
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            i = _[t.id];
        return null != i && (G(i), !0);
    },
});
var p = i(652215);
let N = 5 * r.A.Seconds.MINUTE,
    O = 15 * r.A.Seconds.SECOND,
    T = (0, n.UT)(s, {
        getQueryId: p.fic.GAME_ORGANIZATION,
        get: (e) => s.getGameOrganizationByGuildId(e),
        load: (e) => {
            let t = l.A.getGuild(e);
            return null == t || null == t.linkedGameOrganization ? Promise.resolve(void 0) : (0, a.G)(e);
        },
        getIsLoading: (e) => s.isLoadingForGuild(e),
        getError: (e) => s.getErrorForGuild(e),
        staleAfter: N,
        failureStaleAfter: O,
    });
