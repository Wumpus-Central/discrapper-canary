t.d(n, { Z: () => f });
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(481060),
    a = t(660189),
    o = t(501517),
    c = t(982168),
    s = t(388032),
    u = t(43617),
    d = t(474440);
function f(e) {
    let n = e.isArchivedThread(),
        t = (0, c.P0)(e),
        { firstMessage: f } = (0, i.e7)([a.Z], () => a.Z.getMessage(e.id), [e.id]);
    return !t || n || null == f
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "resolve-report",
              label: s.intl.string(u.default["8yIKem"]),
              action: () => o.Z.resolveFlag(e.id),
              className: d.menuItem,
          });
}
