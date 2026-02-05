"use strict";
n.d(t, {
    C$: () => I,
    Fo: () => g,
    G9: () => S,
    KB: () => p,
    Mn: () => T,
    Yj: () => y,
    iU: () => m,
    uW: () => A,
    xJ: () => E,
}),
    n(136722);
var r = n(811602),
    i = n(282108),
    a = n(927492),
    s = n(969043);
n(134413);
var o = n(203389),
    l = n(734057),
    u = n(71393),
    c = n(320501);
n(287809), n(488926);
var d = n(628691),
    _ = n(272720),
    f = n(56595);
function p(e) {
    if (!(0, d.UN)(e.author)) return !1;
    let t = l.A.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = u.A.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = (0, f.A)(n),
        i = (0, _.A)(n);
    return r && null != i;
}
function h(e) {
    return A(l.A.getChannel(e));
}
function m(e) {
    return g(l.A.getChannel(e));
}
function g(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function E(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function A(e) {
    return null != e && (g(e) || E(e));
}
function I(e) {
    if (null == e || !(0, o.L)() || !h(e)) return !0;
    let { loaded: t, firstMessage: n } = s.A.getMessage(e);
    return !t || null == n || !(0, i.y5)(n, r.LO.EXPLICIT);
}
function T(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && E(t);
}
function y(e) {
    return e.sort((e, t) => (e.id == a.b.MULTIPLE_REPORTS ? -1 : +(t.id == a.b.MULTIPLE_REPORTS)));
}
function S(e, t) {
    let n = l.A.getChannel(e);
    if (null == n || !n.isModeratorReportChannel()) return !1;
    let r = c.A.getMessages(e).first();
    return r?.messageSnapshots?.[0]?.moderatorReport?.reported_user_id === t;
}
n(953660);
