"use strict";
n.d(t, { A: () => A });
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(970278),
    l = n(734057),
    u = n(222823);
let c = {},
    d = new Set();
function _() {
    (c = {}), (d = new Set());
}
function f(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (!n || !o.A.hasLoaded(t.guild_id)) return !1;
    c[t.id] = 0;
}
function p(e) {
    let { channelId: t, optimistic: n, isPushNotification: r } = e;
    if (n || r || !(t in c)) return !1;
    c[t]++;
}
function h(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        null != e.count && (c[e.threadId] = e.count);
    });
}
function m(e) {
    let { channelId: t } = e;
    if (!(t in c)) {
        let e = l.A.getChannel(t),
            n = l.A.getChannel(e?.parent_id);
        if (!n?.isForumLikeChannel()) return !1;
    }
    c[t] = u.Ay.getUnreadCount(t);
}
function E(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        let { threadId: t } = e;
        return d.add(t);
    });
}
class g extends s.Ay.Store {
    static displayName = "ForumPostUnreadCountStore";
    initialize() {
        this.waitFor(o.A, l.A, u.Ay);
    }
    getCount(e) {
        return c[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return (
            i()(o.A.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"),
            t.filter((e) => !(e in c) && !d.has(e))
        );
    }
}
let A = new g(a.h, {
    CONNECTION_OPEN: _,
    THREAD_CREATE: f,
    MESSAGE_CREATE: p,
    FORUM_UNREADS: h,
    MESSAGE_ACK: m,
    REQUEST_FORUM_UNREADS: E,
});
