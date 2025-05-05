n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(699516),
    a = n(697451);
function o(e) {
    let { message: t, channel: n, compact: o } = e,
        s = (0, i.e7)([l.Z], () => null != t.interaction && l.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(a.Z, {
        message: t,
        channel: n,
        compact: o,
        isInteractionUserBlocked: s
    });
}
function s(e, t, n) {
    return null != e.interaction && '' !== e.interaction.displayName
        ? (0, r.jsx)(o, {
              message: e,
              channel: t,
              compact: n
          })
        : null;
}
