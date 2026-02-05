n.d(t, { A: () => f });
var r = n(284009),
    u = n.n(r),
    i = n(311907),
    l = n(73153),
    a = n(970278),
    d = n(734057),
    o = n(222823);
let s = {},
    A = new Set();
class c extends i.Ay.Store {
    static displayName = "ForumPostUnreadCountStore";
    initialize() {
        this.waitFor(a.A, d.A, o.Ay);
    }
    getCount(e) {
        return s[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            u()(a.A.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in s) && !A.has(e))
        );
    }
}
let f = new c(l.h, {
    CONNECTION_OPEN: function () {
        (s = {}), (A = new Set());
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (!n || !a.A.hasLoaded(t.guild_id)) return !1;
        s[t.id] = 0;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, optimistic: n, isPushNotification: r } = e;
        if (n || r || !(t in s)) return !1;
        s[t]++;
    },
    FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            null != e.count && (s[e.threadId] = e.count);
        });
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        if (!(t in s)) {
            let e = d.A.getChannel(t),
                n = d.A.getChannel(e?.parent_id);
            if (!n?.isForumLikeChannel()) return !1;
        }
        s[t] = o.Ay.getUnreadCount(t);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            let { threadId: t } = e;
            return A.add(t);
        });
    },
});
