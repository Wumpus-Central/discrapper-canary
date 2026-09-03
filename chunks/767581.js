n.d(t, { U1: () => c, mf: () => E, yg: () => u, yr: () => h, yz: () => A });
var i = n(602137),
    r = n(734057),
    a = n(71393),
    s = n(573163),
    l = n(253913),
    o = n(746080),
    d = n(375708);
function c(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id),
    };
}
function u(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A, s.Ay],
        l = t.getChannel(e);
    if (null == l) return null;
    let o = n.getGuild(l.guild_id);
    return null == o ? null : c(l, o, [i]);
}
function _() {
    return { minutes: d.t.nFt9ck, hours: d.t.jzCewe, days: d.t.U4I0sw, month: d.intl.string(d.t["nBNJ/L"]) };
}
function E(e, t) {
    if (t === l.EG.POSTED_DURATION_AGO && e === i.T.CREATION_DATE) return _;
}
function A(e, t) {
    let [n] = t,
        i = n.hasTrackedUnread(e),
        r = n.hasOpenedThread(e),
        a = null != n.getTrackedAckMessageId(e);
    return i && r && a;
}
function h(e) {
    return r.A.getChannel(e)?.hasFlag(o.lx.PINNED) === !0;
}
