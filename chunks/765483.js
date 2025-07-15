e.d(n, { Z: () => u });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(501517),
    a = e(982168),
    o = e(388032),
    s = e(130883),
    d = e(183446);
function u(t) {
    let n = t.isArchivedThread();
    return !(0, a.P0)(t) || n
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'resolve-report',
              label: o.intl.string(s.default['8yIKen']),
              action: () => l.Z.resolveFlag(t.id),
              className: d.menuItem
          });
}
