t.d(n, { Z: () => f });
var i = t(951288);
t(647438);
var r = t(442837),
    l = t(481060),
    a = t(660189),
    o = t(501517),
    s = t(982168),
    c = t(388032),
    u = t(764295),
    d = t(474440);
function f(e) {
    let n = e.isArchivedThread(),
        t = (0, s.P0)(e),
        { firstMessage: f } = (0, r.e7)([a.Z], () => a.Z.getMessage(e.id), [e.id]);
    return !t || n || null == f
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "resolve-report",
              label: c.intl.string(u.default["8yIKen"]),
              action: () => o.Z.resolveFlag(e.id),
              className: d.menuItem,
          });
}
