n.d(t, {
    default: () => c,
    x: () => o,
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(442433),
    a = n(484740),
    s = n(985018);

function o(e, t) {
    return (0, a.A)(e, t).length > 0;
}

function c(e) {
    let { role: t, guild: n, onSelect: o } = e,
        c = (0, a.A)(n, t);
    return 0 === c.length
        ? null
        : (0, i.jsx)(r.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "guild-settings-role-context",
              "aria-label": s.intl.string(s.t["337Ja9"]),
              onClose: l.Z_,
              onSelect: o,
              children: c,
          });
}
