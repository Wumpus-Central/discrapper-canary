n.d(t, { Z: () => m }), n(388685);
var r,
    l,
    u = n(512722),
    i = n.n(u),
    a = n(442837),
    o = n(570140),
    d = n(344185),
    s = n(592125),
    c = n(306680);
let f = {},
    g = new Set();
class Z extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, s.Z, c.ZP);
    }
    getCount(e) {
        return f[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            i()(d.Z.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in f) && !g.has(e))
        );
    }
}
(l = "displayName") in Z
    ? Object.defineProperty(Z, l, {
          value: "ForumPostUnreadCountStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (Z[l] = "ForumPostUnreadCountStore");
let m = new Z(o.Z, {
    CONNECTION_OPEN: function () {
        (f = {}), (g = new Set());
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (!n || !d.Z.hasLoaded(t.guild_id)) return !1;
        f[t.id] = 0;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, optimistic: n, isPushNotification: r } = e;
        if (n || r || !(t in f)) return !1;
        f[t]++;
    },
    FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            null != e.count && (f[e.threadId] = e.count);
        });
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        if (!(t in f)) {
            let e = s.Z.getChannel(t),
                n = s.Z.getChannel(null == e ? void 0 : e.parent_id);
            if (!(null == n ? void 0 : n.isForumLikeChannel())) return !1;
        }
        f[t] = c.ZP.getUnreadCount(t);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            let { threadId: t } = e;
            return g.add(t);
        });
    },
});
