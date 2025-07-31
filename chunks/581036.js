(n.d(t, { Z: () => m }), n(388685));
var r,
    l,
    u,
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    d = n(570140),
    s = n(344185),
    c = n(592125),
    f = n(306680);
let g = {},
    Z = new Set();
class h extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z, f.ZP);
    }
    getCount(e) {
        return g[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (a()(s.Z.hasLoaded(e), 'must wait for THREAD_LIST_SYNC before calling this'), t.filter((e) => !(e in g) && !Z.has(e)));
    }
}
((u = 'ForumPostUnreadCountStore'),
    (l = 'displayName') in h
        ? Object.defineProperty(h, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[l] = u));
let m = new h(d.Z, {
    CONNECTION_OPEN: function () {
        ((g = {}), (Z = new Set()));
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (!n || !s.Z.hasLoaded(t.guild_id)) return !1;
        g[t.id] = 0;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, optimistic: n, isPushNotification: r } = e;
        if (n || r || !(t in g)) return !1;
        g[t]++;
    },
    FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            null != e.count && (g[e.threadId] = e.count);
        });
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        if (!(t in g)) {
            let e = c.Z.getChannel(t),
                n = c.Z.getChannel(null == e ? void 0 : e.parent_id);
            if (!(null == n ? void 0 : n.isForumLikeChannel())) return !1;
        }
        g[t] = f.ZP.getUnreadCount(t);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            let { threadId: t } = e;
            return Z.add(t);
        });
    }
});
