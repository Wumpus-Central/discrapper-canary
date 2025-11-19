t.d(n, { Z: () => f });
var r = t(54381);
t(473749);
var i = t(442837),
    l = t(481060),
    o = t(660189),
    a = t(501517),
    c = t(982168),
    u = t(388032),
    s = t(797013),
    d = t(474440);
function f(e) {
    let n = e.isArchivedThread(),
        t = (0, c.P0)(e),
        { firstMessage: f } = (0, i.e7)([o.Z], () => o.Z.getMessage(e.id), [e.id]);
    return !t || n || null == f
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "resolve-report",
              label: u.intl.string(s.default["8yIKem"]),
              action: () => a.Z.resolveFlag(e.id),
              className: d.menuItem,
          });
}
