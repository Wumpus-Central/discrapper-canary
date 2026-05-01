n.d(t, {
    C$: () => N,
    Fo: () => T,
    G9: () => m,
    KB: () => A,
    Mn: () => f,
    Yj: () => p,
    iU: () => I,
    uW: () => S,
    xJ: () => h,
}),
    n(136722);
var i = n(811602),
    a = n(282108),
    r = n(927492),
    s = n(969043);
n(134413);
var l = n(203389),
    o = n(734057),
    d = n(71393),
    c = n(232835);
n(287809), n(488926);
var _ = n(628691),
    E = n(272720),
    u = n(56595);
function A(e) {
    if (!(0, _.UN)(e.author)) return !1;
    let t = o.A.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = d.A.getGuild(t.guild_id);
    if (null == n) return !1;
    let i = (0, u.A)(n),
        a = (0, E.A)(n);
    return i && null != a;
}
function I(e) {
    return T(o.A.getChannel(e));
}
function T(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function h(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function S(e) {
    return null != e && (T(e) || h(e));
}
function N(e) {
    if (null == e || !(0, l.L)() || !S(o.A.getChannel(e))) return !0;
    let { loaded: t, firstMessage: n } = s.A.getMessage(e);
    return !t || null == n || !(0, a.y5)(n, i.LO.EXPLICIT);
}
function f(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && h(t);
}
function p(e) {
    return e.sort((e, t) => (e.id == r.b.MULTIPLE_REPORTS ? -1 : +(t.id == r.b.MULTIPLE_REPORTS)));
}
function m(e, t) {
    let n = o.A.getChannel(e);
    if (null == n || !n.isModeratorReportChannel()) return !1;
    let i = c.A.getMessages(e).first();
    return i?.messageSnapshots?.[0]?.moderatorReport?.reported_user_id === t;
}
n(953660);
