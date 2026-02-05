"use strict";
n.d(t, { Lr: () => d, j4: () => c, jY: () => _ }), n(938796);
var r = n(665260),
    i = n(417597),
    a = n(696451),
    s = n(701785),
    o = n(65995),
    l = n(978165),
    u = n(340837);
function c(e, t) {
    let n = (0, l.A)(e),
        r = (0, i.bG)([s.h], () => s.h.getNewMemberActions(e), [e]),
        a = (0, i.bG)([o.A], () => o.A.getCompletedActions(e));
    if (!n) return {};
    let u = r?.findIndex((e) => e.channelId === t.id) ?? 0,
        c = u >= 0 && null != r ? r[u] : null,
        d = null != c && a?.[c.channelId] === !0;
    return { channelAction: c, completed: d };
}
function d(e, t) {
    let n = (0, i.bG)([s.h], () => s.h.getNewMemberActions(e)),
        r = (0, i.bG)([o.A], () => o.A.getCompletedActions(e));
    return n?.find((e) => r?.[e.channelId] !== !0 && e.channelId !== t);
}
function _(e) {
    let t = (0, i.bG)([a.Ay], () => a.Ay.getSelfMember(e));
    return (0, r.Lt)(t?.flags ?? 0, u.D.COMPLETED_HOME_ACTIONS);
}
