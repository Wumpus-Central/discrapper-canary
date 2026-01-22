n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    o = n(50268),
    a = n(373963),
    c = n(345254),
    s = n(734495),
    d = n(985018);
function u(e, t, n) {
    let u = (0, a.A)(n),
        f = (0, s.A)(e),
        g = (0, c.A)(e, t),
        p = (0, o.A)({
            id: e.id,
            label: d.intl.string(d.t.zBoHlf),
            shiftId: "".concat(e.channel_id, "-").concat(e.id),
        }),
        b = l.useMemo(() => [f, g, p, u].filter(Boolean), [u, f, g, p]);
    return 0 === b.length
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "copy",
              label: d.intl.string(d.t.OpuAlK),
              icon: i.TdU,
              children: b,
          });
}
