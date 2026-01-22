n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(994500),
    s = n(301960);
function o(e) {
    let { message: t, channel: n, compact: o } = e,
        l = (0, i.bG)([a.A], () => null != t.interaction && a.A.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(s.A, {
        message: t,
        channel: n,
        compact: o,
        isInteractionUserBlocked: l,
    });
}
function l(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, r.jsx)(o, {
              message: e,
              channel: t,
              compact: n,
          })
        : null;
}
