"use strict";
n.d(t, { U1: () => c, mf: () => f, yg: () => d, yr: () => h, yz: () => p });
var r = n(602137),
    i = n(734057),
    a = n(71393),
    s = n(222823),
    o = n(253913),
    l = n(746080),
    u = n(985018);
function c(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id),
    };
}
function d(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, a.A, s.Ay],
        o = t.getChannel(e);
    if (null == o) return null;
    let l = n.getGuild(o.guild_id);
    return null == l ? null : c(o, l, [r]);
}
let _ = () => ({ minutes: u.t.nFt9ck, hours: u.t.jzCewe, days: u.t.U4I0sw, month: u.intl.string(u.t["nBNJ/L"]) });
function f(e, t) {
    if (t === o.EG.POSTED_DURATION_AGO && e === r.T.CREATION_DATE) return _;
}
function p(e, t) {
    let [n] = t,
        r = n.hasTrackedUnread(e),
        i = n.hasOpenedThread(e),
        a = null != n.getTrackedAckMessageId(e);
    return r && i && a;
}
function h(e) {
    return i.A.getChannel(e)?.hasFlag(l.lx.PINNED) === !0;
}
