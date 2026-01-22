n.d(t, {
    A: () => h,
}),
    n(896048);
var r,
    l,
    u = n(284009),
    i = n.n(u),
    a = n(311907),
    o = n(73153),
    d = n(970278),
    s = n(734057),
    c = n(222823);
let A = {},
    f = new Set();
class g extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(d.A, s.A, c.Ay);
    }
    getCount(e) {
        return A[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            i()(d.A.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in A) && !f.has(e))
        );
    }
}
(l = "displayName") in g
    ? Object.defineProperty(g, l, {
          value: "ForumPostUnreadCountStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[l] = "ForumPostUnreadCountStore");
let h = new g(o.h, {
    CONNECTION_OPEN: function () {
        (A = {}), (f = new Set());
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (!n || !d.A.hasLoaded(t.guild_id)) return !1;
        A[t.id] = 0;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, optimistic: n, isPushNotification: r } = e;
        if (n || r || !(t in A)) return !1;
        A[t]++;
    },
    FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            null != e.count && (A[e.threadId] = e.count);
        });
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        if (!(t in A)) {
            let e = s.A.getChannel(t),
                n = s.A.getChannel(null == e ? void 0 : e.parent_id);
            if (!(null == n ? void 0 : n.isForumLikeChannel())) return !1;
        }
        A[t] = c.Ay.getUnreadCount(t);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            let { threadId: t } = e;
            return f.add(t);
        });
    },
});
