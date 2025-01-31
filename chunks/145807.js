n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(699516),
    r = n(697451);
function s(e) {
    let { message: t, channel: n, compact: s } = e,
        o = (0, l.e7)([a.Z], () => null != t.interaction && a.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(r.Z, {
        message: t,
        channel: n,
        compact: s,
        isInteractionUserBlocked: o
    });
}
function o(e, t, n) {
    return null != e.interaction && '' !== e.interaction.displayName
        ? (0, i.jsx)(s, {
              message: e,
              channel: t,
              compact: n
          })
        : null;
}
