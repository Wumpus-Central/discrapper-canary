n.d(t, {
    default: () => d,
    e: () => o
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(239091),
    r = n(241635),
    s = n(388032);
function o(e, t) {
    return (0, r.Z)(e, t).length > 0;
}
function d(e) {
    let { role: t, guild: n, onSelect: o } = e,
        d = (0, r.Z)(n, t);
    return 0 === d.length
        ? null
        : (0, i.jsx)(l.v2r, {
              navId: 'guild-settings-role-context',
              'aria-label': s.intl.string(s.t['337Ja2']),
              onClose: a.Zy,
              onSelect: o,
              children: d
          });
}
