e.d(n, { Z: () => f });
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    a = e(660189),
    o = e(501517),
    s = e(982168),
    d = e(388032),
    u = e(130883),
    c = e(183446);
function f(t) {
    let n = t.isArchivedThread(),
        e = (0, s.P0)(t),
        { firstMessage: f } = (0, r.e7)([a.Z], () => a.Z.getMessage(t.id), [t.id]);
    return !e || n || null == f
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'resolve-report',
              label: d.intl.string(u.default['8yIKen']),
              action: () => o.Z.resolveFlag(t.id),
              className: c.menuItem
          });
}
