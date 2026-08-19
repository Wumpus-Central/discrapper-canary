"use strict";
n.d(t, { Lr: () => d, j4: () => c, jY: () => h }), n(938796);
var l = n(665260),
    i = n(702841),
    s = n(696451),
    r = n(701785),
    a = n(65995),
    o = n(978165),
    u = n(340837);
function c(e, t) {
    let n = (0, o.A)(e),
        l = (0, i.bG)([r.h], () => r.h.getNewMemberActions(e), [e]),
        s = (0, i.bG)([a.A], () => a.A.getCompletedActions(e));
    if (!n) return {};
    let u = l?.findIndex((e) => e.channelId === t.id) ?? 0,
        c = u >= 0 && null != l ? l[u] : null,
        d = null != c && s?.[c.channelId] === !0;
    return { channelAction: c, completed: d };
}
function d(e, t) {
    let n = (0, i.bG)([r.h], () => r.h.getNewMemberActions(e)),
        l = (0, i.bG)([a.A], () => a.A.getCompletedActions(e));
    return n?.find((e) => l?.[e.channelId] !== !0 && e.channelId !== t);
}
function h(e) {
    let t = (0, i.bG)([s.Ay], () => s.Ay.getSelfMember(e));
    return (0, l.Lt)(t?.flags ?? 0, u.D.COMPLETED_HOME_ACTIONS);
}
