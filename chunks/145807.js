n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(699516),
    o = n(697451);
function s(e) {
    let { message: t, channel: n, compact: s } = e,
        l = (0, i.e7)([a.Z], () => null != t.interaction && a.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(o.Z, {
        message: t,
        channel: n,
        compact: s,
        isInteractionUserBlocked: l,
    });
}
function l(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, r.jsx)(s, {
              message: e,
              channel: t,
              compact: n,
          })
        : null;
}
