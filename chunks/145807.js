n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(699516),
    a = n(697451);
function s(e) {
    let { message: t, channel: n, compact: s } = e,
        l = (0, i.e7)([o.Z], () => null != t.interaction && o.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, r.jsx)(a.Z, {
        message: t,
        channel: n,
        compact: s,
        isInteractionUserBlocked: l
    });
}
function l(e, t, n) {
    return null != e.interaction && '' !== e.interaction.displayName
        ? (0, r.jsx)(s, {
              message: e,
              channel: t,
              compact: n
          })
        : null;
}
