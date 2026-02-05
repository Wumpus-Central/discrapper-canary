n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(994500),
    r = n(301960);
function s(e) {
    let { message: t, channel: n, compact: s } = e,
        o = (0, l.bG)([a.A], () => null != t.interaction && a.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(r.A, { message: t, channel: n, compact: s, isInteractionUserBlocked: o });
}
function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, i.jsx)(s, { message: e, channel: t, compact: n })
        : null;
}
