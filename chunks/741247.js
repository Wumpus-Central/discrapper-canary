n.d(t, {
    default: () => c,
    e: () => s
});
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(239091),
    o = n(241635),
    a = n(388032);
function s(e, t) {
    return (0, o.Z)(e, t).length > 0;
}
function c(e) {
    let { role: t, guild: n, onSelect: s } = e,
        c = (0, o.Z)(n, t);
    return 0 === c.length
        ? null
        : (0, i.jsx)(r.v2r, {
              navId: 'guild-settings-role-context',
              'aria-label': a.intl.string(a.t['337Ja2']),
              onClose: l.Zy,
              onSelect: s,
              children: c
          });
}
