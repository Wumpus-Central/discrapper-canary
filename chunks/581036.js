n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(344185),
    c = n(592125),
    u = n(306680);
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
let f = {},
    _ = new Set();
function p() {
    (f = {}), (_ = new Set());
}
function h(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (!n || !l.Z.hasLoaded(t.guild_id)) return !1;
    f[t.id] = 0;
}
function m(e) {
    let { channelId: t, optimistic: n, isPushNotification: r } = e;
    if (n || r || !(t in f)) return !1;
    f[t]++;
}
function g(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        null != e.count && (f[e.threadId] = e.count);
    });
}
function E(e) {
    let { channelId: t } = e;
    if (!(t in f)) {
        let e = c.Z.getChannel(t),
            n = c.Z.getChannel(null == e ? void 0 : e.parent_id);
        if (!(null == n ? void 0 : n.isForumLikeChannel())) return !1;
    }
    f[t] = u.ZP.getUnreadCount(t);
}
function b(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        let { threadId: t } = e;
        return _.add(t);
    });
}
class y extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.Z, u.ZP);
    }
    getCount(e) {
        return f[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            o()(l.Z.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in f) && !_.has(e))
        );
    }
}
d(y, "displayName", "ForumPostUnreadCountStore");
let O = new y(s.Z, {
    CONNECTION_OPEN: p,
    THREAD_CREATE: h,
    MESSAGE_CREATE: m,
    FORUM_UNREADS: g,
    MESSAGE_ACK: E,
    REQUEST_FORUM_UNREADS: b,
});
