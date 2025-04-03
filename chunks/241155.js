n.d(t, { Z: () => U }), n(47120);
var i,
    r,
    d,
    a = n(392711),
    l = n.n(a),
    _ = n(442837),
    s = n(570140),
    u = n(924301),
    p = n(601964),
    o = n(75666);
let g = !1,
    I = {},
    c = {},
    N = {},
    E = (e) => (
        (N[e.guild_scheduled_event.id] = new p.ZP(e.guild_scheduled_event.guild)),
        (c[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: o.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at
        }
    );
class T extends (i = _.ZP.Store) {
    isFetching() {
        return g;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return I[e];
    }
    getCachedGuildByEventId(e) {
        var t;
        return null != (t = N[e]) ? t : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var t;
        return null != (t = c[e]) ? t : void 0;
    }
}
(d = 'EventDirectoryStore'),
    (r = 'displayName') in T
        ? Object.defineProperty(T, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[r] = d);
let U = new T(s.Z, {
    EVENT_DIRECTORY_FETCH_START: function () {
        g = !0;
    },
    EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { channelId: t, entries: n } = e;
        g = !1;
        let i = l().sortBy(
                [...n],
                [
                    function (e) {
                        return (0, u.CQ)(e.guild_scheduled_event);
                    }
                ]
            ),
            r = l().map(i, E);
        I[t] = r;
    },
    EVENT_DIRECTORY_FETCH_FAILURE: function () {
        g = !1;
    }
});
