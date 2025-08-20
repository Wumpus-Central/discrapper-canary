n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(699516),
    o = n(697451);
function a(e) {
    let { message: t, channel: n, compact: a } = e,
        s = (0, i.e7)([l.Z], () => null != t.interaction && l.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(o.Z, {
        message: t,
        channel: n,
        compact: a,
        isInteractionUserBlocked: s,
    });
}
function s(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
        ? (0, r.jsx)(a, {
              message: e,
              channel: t,
              compact: n,
          })
        : null;
}
