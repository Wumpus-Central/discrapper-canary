i.d(e, { A: () => o });
var n = i(158390),
    l = i(17928),
    a = i(228366),
    r = i(927813);
let s = r.A.Millis.SECOND,
    c = r.A.Millis.MINUTE,
    d = {};
class u extends l.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(t) {
        return d[t]?.space;
    }
    getFetchStatus(t) {
        return d[t]?.fetchStatus ?? "idle";
    }
    isInBackoff(t) {
        return d[t]?.backoff?.pending === !0;
    }
}
let o = new u(a.h, {
    GUILD_SPACE_FETCH_START: function (t) {
        let e,
            { guildId: i, requestId: n } = t,
            l = (null == (e = d[i]) && ((e = { fetchStatus: "idle" }), (d[i] = e)), e);
        (l.fetchStatus = "loading"), (l.activeFetchRequestId = n);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (t) {
        let { guildId: e, requestId: i, space: n } = t,
            l = d[e];
        if (l?.activeFetchRequestId !== i) return !1;
        delete l.activeFetchRequestId, (l.space = n), (l.fetchStatus = "success"), l.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (t) {
        let { guildId: e, requestId: i, retryable: l } = t,
            r = d[e];
        if (r?.activeFetchRequestId !== i) return !1;
        delete r.activeFetchRequestId,
            (r.fetchStatus = "error"),
            l &&
                (null == r.backoff && (r.backoff = new n.A(s, c, !0)),
                r.backoff.pending ||
                    r.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: e })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (t) {
        let { guildId: e } = t,
            i = d[e];
        if (i?.fetchStatus !== "error") return !1;
        i.backoff?.cancel(), (i.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (t) {
        let { guildId: e, space: i } = t,
            n = d[e];
        if (null == n) return !1;
        delete n.activeFetchRequestId, (n.space = i), (n.fetchStatus = "success"), n.backoff?.succeed();
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i) return !1;
        d[e]?.backoff?.cancel(), delete d[e];
    },
    LOGOUT: function () {
        Object.values(d).forEach((t) => t?.backoff?.cancel()), (d = {});
    },
});
