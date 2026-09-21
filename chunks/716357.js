c.d(t, { A: () => r });
var a = c(158390),
    f = c(17928),
    u = c(228366),
    s = c(927813);
let i = s.A.Millis.SECOND,
    n = s.A.Millis.MINUTE,
    l = {};
class d extends f.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return l[e]?.space;
    }
    getFetchStatus(e) {
        return l[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return l[e]?.backoff?.pending === !0;
    }
}
let r = new d(u.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: c, requestId: a } = e,
            f = (null == (t = l[c]) && ((t = { fetchStatus: "idle" }), (l[c] = t)), t);
        ((f.fetchStatus = "loading"), (f.activeFetchRequestId = a));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: c, space: a } = e,
            f = l[t];
        if (f?.activeFetchRequestId !== c) return !1;
        (delete f.activeFetchRequestId, (f.space = a), (f.fetchStatus = "success"), f.backoff?.succeed());
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: c, retryable: f } = e,
            s = l[t];
        if (s?.activeFetchRequestId !== c) return !1;
        (delete s.activeFetchRequestId,
            (s.fetchStatus = "error"),
            f &&
                (null == s.backoff && (s.backoff = new a.A(i, n, !0)),
                s.backoff.pending ||
                    s.backoff.fail(() => u.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t }))));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            c = l[t];
        if (c?.fetchStatus !== "error") return !1;
        (c.backoff?.cancel(), (c.fetchStatus = "idle"));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: c } = e,
            a = l[t];
        if (null == a) return !1;
        (delete a.activeFetchRequestId, (a.space = c), (a.fetchStatus = "success"), a.backoff?.succeed());
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
