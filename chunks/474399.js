"use strict";
n.d(t, { A: () => f });
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(970278),
    l = n(734057),
    u = n(222823);
let c = {},
    d = new Set();
class _ extends s.Ay.Store {
    static displayName = "ForumPostUnreadCountStore";
    initialize() {
        this.waitFor(o.A, l.A, u.Ay);
    }
    getCount(e) {
        return c[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            r()(o.A.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in c) && !d.has(e))
        );
    }
}
let f = new _(a.h, {
    CONNECTION_OPEN: function () {
        (c = {}), (d = new Set());
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (!n || !o.A.hasLoaded(t.guild_id)) return !1;
        c[t.id] = 0;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, optimistic: n, isPushNotification: i } = e;
        if (n || i || !(t in c)) return !1;
        c[t]++;
    },
    FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            null != e.count && (c[e.threadId] = e.count);
        });
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        if (!(t in c)) {
            let e = l.A.getChannel(t),
                n = l.A.getChannel(e?.parent_id);
            if (!n?.isForumLikeChannel()) return !1;
        }
        c[t] = u.Ay.getUnreadCount(t);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            let { threadId: t } = e;
            return d.add(t);
        });
    },
});
