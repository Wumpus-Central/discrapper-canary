n.d(t, { default: () => d, x: () => o });
var i = n(627968);
n(64700);
var l = n(861672),
    s = n(442433),
    a = n(484740),
    r = n(985018);
function o(e, t) {
    return (0, a.A)(e, t).length > 0;
}
function d(e) {
    let { role: t, guild: n, onSelect: o } = e,
        d = (0, a.A)(n, t);
    return 0 === d.length
        ? null
        : (0, i.jsx)(l.W, {
              "data-menu-migrated-auto": !0,
              navId: "guild-settings-role-context",
              "aria-label": r.intl.string(r.t["337Ja9"]),
              onClose: s.Z_,
              onSelect: o,
              children: d,
          });
}
