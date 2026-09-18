l.d(t, { A: () => o });
var n = l(158390),
    i = l(17928),
    a = l(228366),
    r = l(927813);
let s = r.A.Millis.SECOND,
    d = r.A.Millis.MINUTE,
    c = {};
class u extends i.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return c[e]?.space;
    }
    getFetchStatus(e) {
        return c[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return c[e]?.backoff?.pending === !0;
    }
}
let o = new u(a.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: l, requestId: n } = e,
            i = (null == (t = c[l]) && ((t = { fetchStatus: "idle" }), (c[l] = t)), t);
        ((i.fetchStatus = "loading"), (i.activeFetchRequestId = n));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: l, space: n } = e,
            i = c[t];
        if (i?.activeFetchRequestId !== l) return !1;
        (delete i.activeFetchRequestId, (i.space = n), (i.fetchStatus = "success"), i.backoff?.succeed());
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: l, retryable: i } = e,
            r = c[t];
        if (r?.activeFetchRequestId !== l) return !1;
        (delete r.activeFetchRequestId,
            (r.fetchStatus = "error"),
            i &&
                (null == r.backoff && (r.backoff = new n.A(s, d, !0)),
                r.backoff.pending ||
                    r.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t }))));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            l = c[t];
        if (l?.fetchStatus !== "error") return !1;
        (l.backoff?.cancel(), (l.fetchStatus = "idle"));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: l } = e,
            n = c[t];
        if (null == n) return !1;
        (delete n.activeFetchRequestId, (n.space = l), (n.fetchStatus = "success"), n.backoff?.succeed());
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l) return !1;
        (c[t]?.backoff?.cancel(), delete c[t]);
    },
    LOGOUT: function () {
        (Object.values(c).forEach((e) => e?.backoff?.cancel()), (c = {}));
    },
});
