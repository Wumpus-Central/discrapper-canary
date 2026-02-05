n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(843472),
    s = n(406704),
    o = n(961350),
    d = n(697470),
    c = n(985018);
function u(e, t) {
    let n = (0, l.bG)([o.default], () => o.default.getId()),
        u = (0, s.Id)(t),
        g = (0, s.s5)(t);
    return (0, d.A)(e, n) && u && !g
        ? (0, i.jsx)(a.Drp, {
              id: "edit",
              label: c.intl.string(c.t.fsBWmS),
              action: () => r.A.startEditMessageRecord(t.id, e),
              leadingAccessory: { type: "icon", icon: a.R2l },
              icon: a.R2l,
          })
        : null;
}
