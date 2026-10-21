c.d(t, { A: () => r });
var s = c(158390),
    i = c(17928),
    a = c(73153),
    u = c(927813);
let n = u.A.Millis.SECOND,
    f = u.A.Millis.MINUTE,
    l = {};
class d extends i.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return l[e]?.space;
    }
    isSpaceMissing(e) {
        return l[e]?.isMissing ?? !1;
    }
    getFetchStatus(e) {
        return l[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return l[e]?.backoff?.pending === !0;
    }
}
let r = new d(a.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: c, requestId: s } = e,
            i = (null == (t = l[c]) && ((t = { fetchStatus: "idle", isMissing: !1 }), (l[c] = t)), t);
        ((i.fetchStatus = "loading"), (i.activeFetchRequestId = s));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: c, space: s } = e,
            i = l[t];
        if (i?.activeFetchRequestId !== c) return !1;
        (delete i.activeFetchRequestId,
            (i.isMissing = !1),
            (i.space = s),
            (i.fetchStatus = "success"),
            i.backoff?.succeed());
    },
    GUILD_SPACE_FETCH_NOT_FOUND: function (e) {
        let { guildId: t, requestId: c } = e,
            s = l[t];
        if (s?.activeFetchRequestId !== c) return !1;
        (delete s.activeFetchRequestId,
            (s.space = { guild_id: t, header: { custom_banner_hash: null }, widgets: [] }),
            (s.isMissing = !0),
            (s.fetchStatus = "success"),
            s.backoff?.succeed());
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: c, retryable: i } = e,
            u = l[t];
        if (u?.activeFetchRequestId !== c) return !1;
        (delete u.activeFetchRequestId,
            (u.fetchStatus = "error"),
            i &&
                (null == u.backoff && (u.backoff = new s.A(n, f, !0)),
                u.backoff.pending ||
                    u.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t }))));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            c = l[t];
        if (c?.fetchStatus !== "error") return !1;
        (c.backoff?.cancel(), (c.fetchStatus = "idle"));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: c } = e,
            s = l[t];
        if (null == s) return !1;
        (delete s.activeFetchRequestId,
            (s.isMissing = !1),
            (s.space = c),
            (s.fetchStatus = "success"),
            s.backoff?.succeed());
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: c },
        } = e;
        if (c) return !1;
        (l[t]?.backoff?.cancel(), delete l[t]);
    },
    LOGOUT: function () {
        (Object.values(l).forEach((e) => e?.backoff?.cancel()), (l = {}));
    },
});
