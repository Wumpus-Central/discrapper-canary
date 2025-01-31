t.d(n, { Z: () => h }), t(47120);
var l,
    u,
    i,
    r = t(512722),
    a = t.n(r),
    d = t(442837),
    o = t(570140),
    s = t(344185),
    c = t(592125),
    f = t(306680);
let g = {},
    Z = new Set();
class m extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z, f.ZP);
    }
    getCount(e) {
        return g[e];
    }
    getThreadIdsMissingCounts(e, n) {
        return a()(s.Z.hasLoaded(e), 'must wait for THREAD_LIST_SYNC before calling this'), n.filter((e) => !(e in g) && !Z.has(e));
    }
}
(i = 'ForumPostUnreadCountStore'),
    (u = 'displayName') in m
        ? Object.defineProperty(m, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[u] = i);
let h = new m(o.Z, {
    CONNECTION_OPEN: function () {
        (g = {}), (Z = new Set());
    },
    THREAD_CREATE: function (e) {
        let { channel: n, isNewlyCreated: t } = e;
        if (!t || !s.Z.hasLoaded(n.guild_id)) return !1;
        g[n.id] = 0;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: n, optimistic: t, isPushNotification: l } = e;
        if (t || l || !(n in g)) return !1;
        g[n]++;
    },
    FORUM_UNREADS: function (e) {
        let { threads: n } = e;
        n.forEach((e) => {
            null != e.count && (g[e.threadId] = e.count);
        });
    },
    MESSAGE_ACK: function (e) {
        let { channelId: n } = e;
        if (!(n in g)) {
            let e = c.Z.getChannel(n),
                t = c.Z.getChannel(null == e ? void 0 : e.parent_id);
            if (!(null == t ? void 0 : t.isForumLikeChannel())) return !1;
        }
        g[n] = f.ZP.getUnreadCount(n);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: n } = e;
        n.forEach((e) => {
            let { threadId: n } = e;
            return Z.add(n);
        });
    }
});
