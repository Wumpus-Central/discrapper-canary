n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(660189),
    o = n(501517),
    s = n(982168),
    d = n(388032),
    u = n(130883),
    c = n(183446);
function f(e) {
    let t = e.isArchivedThread(),
        n = (0, s.P0)(e),
        { firstMessage: f } = (0, r.e7)([a.Z], () => a.Z.getMessage(e.id), [e.id]);
    return !n || t || null == f
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'resolve-report',
              label: d.intl.string(u.default['8yIKen']),
              action: () => o.Z.resolveFlag(e.id),
              className: c.menuItem
          });
}
