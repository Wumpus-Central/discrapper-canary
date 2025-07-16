n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(501517),
    a = n(982168),
    o = n(388032),
    s = n(130883),
    d = n(183446);
function u(e) {
    let t = e.isArchivedThread();
    return !(0, a.P0)(e) || t
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'resolve-report',
              label: o.intl.string(s.default['8yIKen']),
              action: () => l.Z.resolveFlag(e.id),
              className: d.menuItem
          });
}
