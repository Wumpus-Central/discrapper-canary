i.d(t, { c: () => T });
var n = i(855986),
    r = i(71393),
    l = i(927813),
    a = i(669610),
    d = i(73153),
    o = i(951217);
let u = {},
    A = {},
    I = {},
    _ = {};
function g(e) {
    ((I[e.id] = e), (_[e.guildId] = e), delete A[e.guildId], delete u[e.guildId]);
}
function G(e) {
    (delete I[e.id], delete _[e.guildId], delete A[e.guildId], delete u[e.guildId]);
}
class c extends n.Ay.Store {
    static displayName = "GameOrganizationStore";
    getGameOrganization(e) {
        return I[e];
    }
    getGameOrganizationByGuildId(e) {
        return null == e ? null : (_[e] ?? null);
    }
    isLoadingForGuild(e) {
        return null != e && (u[e] ?? !1);
    }
    getErrorForGuild(e) {
        return null == e ? null : (A[e] ?? null);
    }
}
let E = new c(d.h, {
    GAME_ORGANIZATION_FETCH_START: function (e) {
        let { guildId: t } = e;
        u[t] = !0;
    },
    GAME_ORGANIZATION_FETCH_SUCCESS: function (e) {
        let { gameOrganization: t } = e;
        g(t);
    },
    GAME_ORGANIZATION_FETCH_FAILURE: function (e) {
        let { guildId: t, error: i } = e;
        (delete u[t], (A[t] = i));
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let {
                invite: { game_organization: t },
            } = e,
            i = (0, o.p)(t);
        (g(i), delete A[i.guildId]);
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
var s = i(652215);
let O = 5 * l.A.Seconds.MINUTE,
    N = 15 * l.A.Seconds.SECOND,
    T = (0, n.UT)(E, {
        getQueryId: s.fic.GAME_ORGANIZATION,
        get: (e) => E.getGameOrganizationByGuildId(e),
        load: (e) => {
            let t = r.A.getGuild(e);
            return null == t || null == t.linkedGameOrganization ? Promise.resolve(void 0) : (0, a.G)(e);
        },
        getIsLoading: (e) => E.isLoadingForGuild(e),
        getError: (e) => E.getErrorForGuild(e),
        staleAfter: O,
        failureStaleAfter: N,
    });
