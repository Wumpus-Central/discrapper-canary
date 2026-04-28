"use strict";
n.d(t, { Lr: () => d, j4: () => u, jY: () => h }), n(938796);
var l = n(665260),
    i = n(702841),
    s = n(696451),
    a = n(701785),
    r = n(65995),
    o = n(978165),
    c = n(340837);
function u(e, t) {
    let n = (0, o.A)(e),
        l = (0, i.bG)([a.h], () => a.h.getNewMemberActions(e), [e]),
        s = (0, i.bG)([r.A], () => r.A.getCompletedActions(e));
    if (!n) return {};
    let c = l?.findIndex((e) => e.channelId === t.id) ?? 0,
        u = c >= 0 && null != l ? l[c] : null,
        d = null != u && s?.[u.channelId] === !0;
    return { channelAction: u, completed: d };
}
function d(e, t) {
    let n = (0, i.bG)([a.h], () => a.h.getNewMemberActions(e)),
        l = (0, i.bG)([r.A], () => r.A.getCompletedActions(e));
    return n?.find((e) => l?.[e.channelId] !== !0 && e.channelId !== t);
}
function h(e) {
    let t = (0, i.bG)([s.Ay], () => s.Ay.getSelfMember(e));
    return (0, l.Lt)(t?.flags ?? 0, c.D.COMPLETED_HOME_ACTIONS);
}
