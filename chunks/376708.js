n.d(t, {
    C$: () => O,
    Fo: () => T,
    G9: () => C,
    KB: () => I,
    Mn: () => R,
    Yj: () => f,
    iU: () => A,
    uW: () => N,
    xJ: () => S,
}),
    n(136722);
var i = n(811602),
    r = n(282108),
    a = n(927492),
    s = n(969043);
n(134413);
var _ = n(203389),
    l = n(734057),
    o = n(71393),
    E = n(232835);
n(287809), n(488926);
var d = n(628691),
    c = n(272720),
    u = n(56595);
function I(e) {
    if (!(0, d.UN)(e.author)) return !1;
    let t = l.A.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = o.A.getGuild(t.guild_id);
    if (null == n) return !1;
    let i = (0, u.A)(n),
        r = (0, c.A)(n);
    return i && null != r;
}
function A(e) {
    return T(l.A.getChannel(e));
}
function T(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel();
}
function S(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost();
}
function N(e) {
    return null != e && (T(e) || S(e));
}
function O(e) {
    if (null == e || !(0, _.L)() || !N(l.A.getChannel(e))) return !0;
    let { loaded: t, firstMessage: n } = s.A.getMessage(e);
    return !t || null == n || !(0, r.y5)(n, i.LO.EXPLICIT);
}
function R(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && S(t);
}
function f(e) {
    return e.sort((e, t) => (e.id == a.b.MULTIPLE_REPORTS ? -1 : +(t.id == a.b.MULTIPLE_REPORTS)));
}
function C(e, t) {
    let n = l.A.getChannel(e);
    if (null == n || !n.isModeratorReportChannel()) return !1;
    let i = E.A.getMessages(e).first();
    return i?.messageSnapshots?.[0]?.moderatorReport?.reported_user_id === t;
}
n(953660);
