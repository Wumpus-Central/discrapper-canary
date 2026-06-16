n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(17928),
    l = n(994500),
    a = n(217424);
function r(e) {
    let { message: t, channel: n, compact: r } = e,
        o = (0, s.bG)([l.A], () => null != t.interaction && l.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(a.A, { message: t, channel: n, compact: r, isInteractionUserBlocked: o });
}
function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, i.jsx)(r, { message: e, channel: t, compact: n })
        : null;
}
