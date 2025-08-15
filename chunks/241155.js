t.d(n, { Z: () => v }), t(388685);
var i,
    l,
    r = t(392711),
    d = t.n(r),
    a = t(442837),
    o = t(570140),
    s = t(924301),
    c = t(411198),
    u = t(75666);
let _ = !1,
    g = {},
    p = {},
    m = {},
    f = (e) => (
        (m[e.guild_scheduled_event.id] = (0, c.Q0)(e.guild_scheduled_event.guild)),
        (p[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: u.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
        }
    );
class I extends (i = a.ZP.Store) {
    isFetching() {
        return _;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return g[e];
    }
    getCachedGuildByEventId(e) {
        var n;
        return null != (n = m[e]) ? n : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var n;
        return null != (n = p[e]) ? n : void 0;
    }
}
(l = "displayName") in I
    ? Object.defineProperty(I, l, {
          value: "EventDirectoryStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (I[l] = "EventDirectoryStore");
let v = new I(o.Z, {
    EVENT_DIRECTORY_FETCH_START: function () {
        _ = !0;
    },
    EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: n, entries: t } = e;
        _ = !1;
        let i = d().sortBy(
                [...t],
                [
                    function (e) {
                        return (0, s.CQ)(e.guild_scheduled_event);
                    },
                ],
            ),
            l = d().map(i, f);
        g[n] = l;
    },
    EVENT_DIRECTORY_FETCH_FAILURE: function () {
        _ = !1;
    },
});
