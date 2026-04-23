"use strict";
n.d(t, {
    C$: () => A,
    Fo: () => E,
    G9: () => S,
    KB: () => p,
    Mn: () => I,
    Yj: () => T,
    iU: () => h,
    uW: () => g,
    xJ: () => m,
}),
    n(136722);
var r = n(811602),
    i = n(282108),
    s = n(927492),
    a = n(969043);
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
    return E(l.A.getChannel(e));
}
function E(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function m(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function g(e) {
    return null != e && (E(e) || m(e));
}
function A(e) {
    if (null == e || !(0, o.L)() || !g(l.A.getChannel(e))) return !0;
    let { loaded: t, firstMessage: n } = a.A.getMessage(e);
    return !t || null == n || !(0, i.y5)(n, r.LO.EXPLICIT);
}
function I(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && m(t);
}
function T(e) {
    return e.sort((e, t) => (e.id == s.b.MULTIPLE_REPORTS ? -1 : +(t.id == s.b.MULTIPLE_REPORTS)));
}
function S(e, t) {
    let n = l.A.getChannel(e);
    if (null == n || !n.isModeratorReportChannel()) return !1;
    let r = c.A.getMessages(e).first();
    return r?.messageSnapshots?.[0]?.moderatorReport?.reported_user_id === t;
}
n(953660);
