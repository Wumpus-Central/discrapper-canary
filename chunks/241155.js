n(47120);
var i,
    l,
    r,
    d,
    a = n(392711),
    u = n.n(a),
    s = n(442837),
    o = n(570140),
    _ = n(924301),
    E = n(601964),
    c = n(486527);
let I = !1,
    T = {},
    g = {},
    p = {},
    m = (t) => (
        (p[t.guild_scheduled_event.id] = new E.ZP(t.guild_scheduled_event.guild)),
        (g[t.guild_scheduled_event.id] = t.guild_scheduled_event),
        {
            channelId: t.directory_channel_id,
            scheduledEventId: t.entity_id,
            type: c.C2.GUILD_SCHEDULED_EVENT,
            authorId: t.author_id,
            createdAt: t.created_at
        }
    );
class U extends (i = s.ZP.Store) {
    isFetching() {
        return I;
    }
    getEventDirectoryEntries(t) {
        if (null != t) return T[t];
    }
    getCachedGuildByEventId(t) {
        var e;
        return null !== (e = p[t]) && void 0 !== e ? e : void 0;
    }
    getCachedGuildScheduledEventById(t) {
        var e;
        return null !== (e = g[t]) && void 0 !== e ? e : void 0;
    }
}
(d = 'EventDirectoryStore'),
    (r = 'displayName') in (l = U)
        ? Object.defineProperty(l, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = d),
    (e.Z = new U(o.Z, {
        EVENT_DIRECTORY_FETCH_START: function () {
            I = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
            let { channelId: e, entries: n } = t;
            I = !1;
            let i = u().sortBy(
                    [...n],
                    [
                        function (t) {
                            return (0, _.CQ)(t.guild_scheduled_event);
                        }
                    ]
                ),
                l = u().map(i, m);
            T[e] = l;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
            I = !1;
        }
    }));
