t.d(n, { Z: () => N }), t(388685);
var i,
    l,
    r,
    a = t(392711),
    d = t.n(a),
    o = t(442837),
    s = t(570140),
    c = t(924301),
    u = t(601964),
    _ = t(75666);
let g = !1,
    p = {},
    m = {},
    I = {},
    f = (e) => (
        (I[e.guild_scheduled_event.id] = new u.ZP(e.guild_scheduled_event.guild)),
        (m[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at
        }
    );
class v extends (i = o.ZP.Store) {
    isFetching() {
        return g;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return p[e];
    }
    getCachedGuildByEventId(e) {
        var n;
        return null != (n = I[e]) ? n : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var n;
        return null != (n = m[e]) ? n : void 0;
    }
}
(r = 'EventDirectoryStore'),
    (l = 'displayName') in v
        ? Object.defineProperty(v, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (v[l] = r);
let N = new v(s.Z, {
    EVENT_DIRECTORY_FETCH_START: function () {
        g = !0;
    },
    EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: n, entries: t } = e;
        g = !1;
        let i = d().sortBy(
                [...t],
                [
                    function (e) {
                        return (0, c.CQ)(e.guild_scheduled_event);
                    }
                ]
            ),
            l = d().map(i, f);
        p[n] = l;
    },
    EVENT_DIRECTORY_FETCH_FAILURE: function () {
        g = !1;
    }
});
