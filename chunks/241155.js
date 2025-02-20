n.d(e, { Z: () => U }), n(47120);
var i,
    d,
    _,
    a = n(392711),
    r = n.n(a),
    l = n(442837),
    s = n(570140),
    o = n(924301),
    c = n(601964),
    p = n(75666);
let E = !1,
    u = {},
    I = {},
    T = {},
    g = (t) => (
        (T[t.guild_scheduled_event.id] = new c.ZP(t.guild_scheduled_event.guild)),
        (I[t.guild_scheduled_event.id] = t.guild_scheduled_event),
        {
            channelId: t.directory_channel_id,
            scheduledEventId: t.entity_id,
            type: p.C2.GUILD_SCHEDULED_EVENT,
            authorId: t.author_id,
            createdAt: t.created_at
        }
    );
class N extends (i = l.ZP.Store) {
    isFetching() {
        return E;
    }
    getEventDirectoryEntries(t) {
        if (null != t) return u[t];
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
(_ = 'EventDirectoryStore'),
    (d = 'displayName') in N
        ? Object.defineProperty(N, d, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[d] = _);
let U = new N(s.Z, {
    EVENT_DIRECTORY_FETCH_START: function () {
        E = !0;
    },
    EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
        let { channelId: e, entries: n } = t;
        E = !1;
        let i = r().sortBy(
                [...n],
                [
                    function (t) {
                        return (0, o.CQ)(t.guild_scheduled_event);
                    }
                ]
            ),
            d = r().map(i, g);
        u[e] = d;
    },
    EVENT_DIRECTORY_FETCH_FAILURE: function () {
        E = !1;
    }
});
