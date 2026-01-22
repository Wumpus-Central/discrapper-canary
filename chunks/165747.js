n.d(l, { default: () => o }), n(321073);
var i = n(627968);
n(64700);
var e = n(397927),
    s = n(442433),
    a = n(50268),
    r = n(292024),
    u = n(652215),
    d = n(985018);
function o(t) {
    let { role: l, guild: n, onSelect: o } = t,
        p = [],
        c = (0, r.A)(n, l, u.BEX.INTEGRATIONS);
    null != c && p.push(c);
    let h = (0, a.A)({
        id: l.id,
        label: d.intl.string(d.t.sMsaLg),
    });
    return (null != h && p.push(h), 0 === p.length)
        ? null
        : (0, i.jsx)(e.W1t, {
              navId: "guild-integrations-permission-role-context",
              "aria-label": d.intl.string(d.t["337Ja9"]),
              onClose: s.Z_,
              onSelect: o,
              children: p,
          });
}
