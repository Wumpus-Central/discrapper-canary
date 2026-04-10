"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(994500),
    l = n(301960);
function a(e) {
    let { message: t, channel: n, compact: a } = e,
        c = (0, r.bG)([s.A], () => null != t.interaction && s.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(l.A, { message: t, channel: n, compact: a, isInteractionUserBlocked: c });
}
function c(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, i.jsx)(a, { message: e, channel: t, compact: n })
        : null;
}
