n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var l = n(17928),
    s = n(994500),
    a = n(217424);
function r(e) {
    let { message: t, channel: n, compact: r } = e,
        o = (0, l.bG)([s.A], () => null != t.interaction && s.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(a.A, { message: t, channel: n, compact: r, isInteractionUserBlocked: o });
}
function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, i.jsx)(r, { message: e, channel: t, compact: n })
        : null;
}
