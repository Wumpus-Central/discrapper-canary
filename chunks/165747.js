l.d(n, { default: () => o }), l(321073);
var e = l(627968);
l(64700);
var i = l(861672),
    a = l(442433),
    s = l(50268),
    r = l(292024),
    u = l(652215),
    d = l(985018);
function o(t) {
    let { role: n, guild: l, onSelect: o } = t,
        p = [],
        c = (0, r.A)(l, n, u.BEX.INTEGRATIONS);
    null != c && p.push(c);
    let h = (0, s.A)({ id: n.id, label: d.intl.string(d.t.sMsaLg) });
    return (null != h && p.push(h), 0 === p.length)
        ? null
        : (0, e.jsx)(i.W, {
              "data-menu-migrated-auto": !0,
              navId: "guild-integrations-permission-role-context",
              "aria-label": d.intl.string(d.t["337Ja9"]),
              onClose: a.Z_,
              onSelect: o,
              children: p,
          });
}
