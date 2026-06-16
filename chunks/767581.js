"use strict";
n.d(t, { U1: () => c, mf: () => h, yg: () => d, yr: () => p, yz: () => f });
var i = n(602137),
    r = n(734057),
    s = n(71393),
    a = n(222823),
    o = n(253913),
    l = n(746080),
    u = n(375708);
function c(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Ay];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id),
    };
}
function d(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, s.A, a.Ay],
        o = t.getChannel(e);
    if (null == o) return null;
    let l = n.getGuild(o.guild_id);
    return null == l ? null : c(o, l, [i]);
}
let _ = () => ({ minutes: u.t.nFt9ck, hours: u.t.jzCewe, days: u.t.U4I0sw, month: u.intl.string(u.t["nBNJ/L"]) });
function h(e, t) {
    if (t === o.EG.POSTED_DURATION_AGO && e === i.T.CREATION_DATE) return _;
}
function f(e, t) {
    let [n] = t,
        i = n.hasTrackedUnread(e),
        r = n.hasOpenedThread(e),
        s = null != n.getTrackedAckMessageId(e);
    return i && r && s;
}
function p(e) {
    return r.A.getChannel(e)?.hasFlag(l.lx.PINNED) === !0;
}
