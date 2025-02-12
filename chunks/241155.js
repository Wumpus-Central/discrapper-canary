n.d(e, { Z: () => m }), n(47120);
var i,
    l,
    r,
    a = n(392711),
    d = n.n(a),
    s = n(442837),
    u = n(570140),
    o = n(924301),
    _ = n(601964),
    c = n(486527);
let E = !1,
    g = {},
    I = {},
    T = {},
    p = (t) => (
        (T[t.guild_scheduled_event.id] = new _.ZP(t.guild_scheduled_event.guild)),
        (I[t.guild_scheduled_event.id] = t.guild_scheduled_event),
        {
            channelId: t.directory_channel_id,
            scheduledEventId: t.entity_id,
            type: c.C2.GUILD_SCHEDULED_EVENT,
            authorId: t.author_id,
            createdAt: t.created_at
        }
    );
class C extends (i = s.ZP.Store) {
    isFetching() {
        return E;
    }
    getEventDirectoryEntries(t) {
        if (null != t) return g[t];
    }
    getCachedGuildByEventId(t) {
        var e;
        return null !== (e = T[t]) && void 0 !== e ? e : void 0;
    }
    getCachedGuildScheduledEventById(t) {
        var e;
        return null !== (e = I[t]) && void 0 !== e ? e : void 0;
    }
}
(r = 'EventDirectoryStore'),
    (l = 'displayName') in C
        ? Object.defineProperty(C, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[l] = r);
let m = new C(u.Z, {
    EVENT_DIRECTORY_FETCH_START: function () {
        E = !0;
    },
    EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
        let { channelId: e, entries: n } = t;
        E = !1;
        let i = d().sortBy(
                [...n],
                [
                    function (t) {
                        return (0, o.CQ)(t.guild_scheduled_event);
                    }
                ]
            ),
            l = d().map(i, p);
        g[e] = l;
    },
    EVENT_DIRECTORY_FETCH_FAILURE: function () {
        E = !1;
    }
});
