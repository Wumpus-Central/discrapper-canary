n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(699516),
    o = n(697451);
function l(e) {
    let { message: t, channel: n, compact: l } = e,
        s = (0, i.e7)([a.Z], () => null != t.interaction && a.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(o.Z, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: s
    });
}
function s(e, t, n) {
    return null != e.interaction && '' !== e.interaction.displayName
        ? (0, r.jsx)(l, {
              message: e,
              channel: t,
              compact: n
          })
        : null;
}
