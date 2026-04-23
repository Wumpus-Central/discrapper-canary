"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(994500),
    s = n(301960);
function a(e) {
    let { message: t, channel: n, compact: a } = e,
        o = (0, r.bG)([l.A], () => null != t.interaction && l.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(s.A, { message: t, channel: n, compact: a, isInteractionUserBlocked: o });
}
function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, i.jsx)(a, { message: e, channel: t, compact: n })
        : null;
}
