i.d(t, { A: () => o });
var n = i(158390),
    l = i(17928),
    a = i(228366),
    r = i(927813);
let s = r.A.Millis.SECOND,
    d = r.A.Millis.MINUTE,
    u = {};
class c extends l.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return u[e]?.space;
    }
    getFetchStatus(e) {
        return u[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return u[e]?.backoff?.pending === !0;
    }
}
let o = new c(a.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: i, requestId: n } = e,
            l = (null == (t = u[i]) && ((t = { fetchStatus: "idle" }), (u[i] = t)), t);
        (l.fetchStatus = "loading"), (l.activeFetchRequestId = n);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: i, space: n } = e,
            l = u[t];
        if (l?.activeFetchRequestId !== i) return !1;
        delete l.activeFetchRequestId, (l.space = n), (l.fetchStatus = "success"), l.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: i, retryable: l } = e,
            r = u[t];
        if (r?.activeFetchRequestId !== i) return !1;
        delete r.activeFetchRequestId,
            (r.fetchStatus = "error"),
            l &&
                (null == r.backoff && (r.backoff = new n.A(s, d, !0)),
                r.backoff.pending ||
                    r.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            i = u[t];
        if (i?.fetchStatus !== "error") return !1;
        i.backoff?.cancel(), (i.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: i } = e,
            n = u[t];
        if (null == n) return !1;
        delete n.activeFetchRequestId, (n.space = i), (n.fetchStatus = "success"), n.backoff?.succeed();
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i) return !1;
        u[t]?.backoff?.cancel(), delete u[t];
    },
    LOGOUT: function () {
        Object.values(u).forEach((e) => e?.backoff?.cancel()), (u = {});
    },
});
