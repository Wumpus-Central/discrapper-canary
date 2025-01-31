n.d(t, {
    K_: () => d,
    P3: () => c,
    PE: () => f
}),
    n(789020);
var i = n(399606),
    r = n(271383),
    a = n(630388),
    s = n(563534),
    o = n(846121),
    l = n(460347),
    u = n(372897);
function c(e, t) {
    var n;
    let r = (0, l.Z)(e),
        a = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e), [e]),
        u = (0, i.e7)([o.Z], () => o.Z.getCompletedActions(e));
    if (!r) return {};
    let c = null !== (n = null == a ? void 0 : a.findIndex((e) => e.channelId === t.id)) && void 0 !== n ? n : 0,
        d = c >= 0 && null != a ? a[c] : null,
        f = null != d && (null == u ? void 0 : u[d.channelId]) === !0;
    return {
        channelAction: d,
        completed: f
    };
}
function d(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e)),
        r = (0, i.e7)([o.Z], () => o.Z.getCompletedActions(e));
    return null == n ? void 0 : n.find((e) => (null == r ? void 0 : r[e.channelId]) !== !0 && e.channelId !== t);
}
function f(e) {
    var t;
    let n = (0, i.e7)([r.ZP], () => r.ZP.getSelfMember(e));
    return (0, a.yE)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, u.q.COMPLETED_HOME_ACTIONS);
}
