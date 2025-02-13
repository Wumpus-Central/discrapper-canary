t.d(n, { Z: () => f }), t(47120);
var i,
    l,
    a,
    r = t(392711),
    d = t.n(r),
    s = t(442837),
    o = t(570140),
    c = t(924301),
    u = t(601964),
    _ = t(75666);
let m = !1,
    g = {},
    p = {},
    v = {},
    h = (e) => (
        (v[e.guild_scheduled_event.id] = new u.ZP(e.guild_scheduled_event.guild)),
        (p[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at
        }
    );
class I extends (i = s.ZP.Store) {
    isFetching() {
        return m;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return g[e];
    }
    getCachedGuildByEventId(e) {
        var n;
        return null !== (n = v[e]) && void 0 !== n ? n : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var n;
        return null !== (n = p[e]) && void 0 !== n ? n : void 0;
    }
}
(a = 'EventDirectoryStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = a);
let f = new I(o.Z, {
    EVENT_DIRECTORY_FETCH_START: function () {
        m = !0;
    },
    EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: n, entries: t } = e;
        m = !1;
        let i = d().sortBy(
                [...t],
                [
                    function (e) {
                        return (0, c.CQ)(e.guild_scheduled_event);
                    }
                ]
            ),
            l = d().map(i, h);
        g[n] = l;
    },
    EVENT_DIRECTORY_FETCH_FAILURE: function () {
        m = !1;
    }
});
