n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(843472),
    a = n(406704),
    c = n(961350),
    s = n(697470),
    d = n(985018);

function u(e, t) {
    let n = (0, l.bG)([c.default], () => c.default.getId()),
        u = (0, a.Id)(t),
        f = (0, a.s5)(t);
    return (0, s.A)(e, n) && u && !f
        ? (0, r.jsx)(i.Drp, {
              id: "edit",
              label: d.intl.string(d.t.fsBWmS),
              action: () => o.A.startEditMessageRecord(t.id, e),
              icon: i.R2l,
          })
        : null;
}
