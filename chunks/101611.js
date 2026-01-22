n.d(t, {
    Lr: () => d,
    j4: () => u,
    jY: () => f,
}),
    n(938796);
var r = n(665260),
    i = n(417597),
    a = n(696451),
    s = n(701785),
    o = n(65995),
    l = n(978165),
    c = n(340837);
function u(e, t) {
    var n;
    let r = (0, l.A)(e),
        a = (0, i.bG)([s.h], () => s.h.getNewMemberActions(e), [e]),
        c = (0, i.bG)([o.A], () => o.A.getCompletedActions(e));
    if (!r) return {};
    let u = null != (n = null == a ? void 0 : a.findIndex((e) => e.channelId === t.id)) ? n : 0,
        d = u >= 0 && null != a ? a[u] : null,
        f = null != d && (null == c ? void 0 : c[d.channelId]) === !0;
    return {
        channelAction: d,
        completed: f,
    };
}
function d(e, t) {
    let n = (0, i.bG)([s.h], () => s.h.getNewMemberActions(e)),
        r = (0, i.bG)([o.A], () => o.A.getCompletedActions(e));
    return null == n ? void 0 : n.find((e) => (null == r ? void 0 : r[e.channelId]) !== !0 && e.channelId !== t);
}
function f(e) {
    var t;
    let n = (0, i.bG)([a.Ay], () => a.Ay.getSelfMember(e));
    return (0, r.Lt)(null != (t = null == n ? void 0 : n.flags) ? t : 0, c.D.COMPLETED_HOME_ACTIONS);
}
