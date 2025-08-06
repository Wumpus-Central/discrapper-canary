n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(924301),
    c = n(411198),
    u = n(75666);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = !1,
    _ = {},
    p = {},
    h = {},
    m = (e) => (
        (h[e.guild_scheduled_event.id] = (0, c.Q0)(e.guild_scheduled_event.guild)),
        (p[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: u.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
        }
    );
function g() {
    f = !0;
}
function E(e) {
    let { channelId: t, entries: n } = e;
    f = !1;
    let r = o().sortBy(
            [...n],
            [
                function (e) {
                    return (0, l.CQ)(e.guild_scheduled_event);
                },
            ],
        ),
        i = o().map(r, m);
    _[t] = i;
}
function b() {
    f = !1;
}
class y extends (r = a.ZP.Store) {
    isFetching() {
        return f;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return _[e];
    }
    getCachedGuildByEventId(e) {
        var t;
        return null != (t = h[e]) ? t : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var t;
        return null != (t = p[e]) ? t : void 0;
    }
}
d(y, "displayName", "EventDirectoryStore");
let O = new y(s.Z, {
    EVENT_DIRECTORY_FETCH_START: g,
    EVENT_DIRECTORY_FETCH_SUCCESS: E,
    EVENT_DIRECTORY_FETCH_FAILURE: b,
});
