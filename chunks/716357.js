l.d(t, { A: () => o });
var i = l(158390),
    n = l(17928),
    a = l(228366),
    s = l(927813);
let r = s.A.Millis.SECOND,
    c = s.A.Millis.MINUTE,
    d = {};
class u extends n.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return d[e]?.space;
    }
    getFetchStatus(e) {
        return d[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return d[e]?.backoff?.pending === !0;
    }
}
let o = new u(a.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: l, requestId: i } = e,
            n = (null == (t = d[l]) && ((t = { fetchStatus: "idle" }), (d[l] = t)), t);
        ((n.fetchStatus = "loading"), (n.activeFetchRequestId = i));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: l, space: i } = e,
            n = d[t];
        if (n?.activeFetchRequestId !== l) return !1;
        (delete n.activeFetchRequestId, (n.space = i), (n.fetchStatus = "success"), n.backoff?.succeed());
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: l, retryable: n } = e,
            s = d[t];
        if (s?.activeFetchRequestId !== l) return !1;
        (delete s.activeFetchRequestId,
            (s.fetchStatus = "error"),
            n &&
                (null == s.backoff && (s.backoff = new i.A(r, c, !0)),
                s.backoff.pending ||
                    s.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t }))));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            l = d[t];
        if (l?.fetchStatus !== "error") return !1;
        (l.backoff?.cancel(), (l.fetchStatus = "idle"));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: l } = e,
            i = d[t];
        if (null == i) return !1;
        (delete i.activeFetchRequestId, (i.space = l), (i.fetchStatus = "success"), i.backoff?.succeed());
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l) return !1;
        (d[t]?.backoff?.cancel(), delete d[t]);
    },
    LOGOUT: function () {
        (Object.values(d).forEach((e) => e?.backoff?.cancel()), (d = {}));
    },
});
