"use strict";
n.d(t, { A: () => E });
var i = n(284009),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(970278),
    o = n(734057),
    d = n(568548);
let c = {},
    u = new Set();
class _ extends a.Ay.Store {
    static displayName = "ForumPostUnreadCountStore";
    initialize() {
        this.waitFor(l.A, o.A, d.Ay);
    }
    getCount(e) {
        return c[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            r()(l.A.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in c) && !u.has(e))
        );
    }
}
let E = new _(s.h, {
    CONNECTION_OPEN: function () {
        (c = {}), (u = new Set());
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (!n || !l.A.hasLoaded(t.guild_id)) return !1;
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
            let e = o.A.getChannel(t),
                n = o.A.getChannel(e?.parent_id);
            if (!n?.isForumLikeChannel()) return !1;
        }
        c[t] = d.Ay.getUnreadCount(t);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { threads: t } = e;
        t.forEach((e) => {
            let { threadId: t } = e;
            return u.add(t);
        });
    },
});
