n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(843472),
    o = n(406704),
    c = n(961350),
    s = n(697470),
    d = n(985018);

function u(e, t) {
    let n = (0, i.bG)([c.default], () => c.default.getId()),
        u = (0, o.Id)(t),
        g = (0, o.s5)(t);
    return (0, s.A)(e, n) && u && !g
        ? (0, r.jsx)(l.Drp, {
              id: "edit",
              label: d.intl.string(d.t.fsBWmS),
              action: () => a.A.startEditMessageRecord(t.id, e),
              leadingAccessory: {
                  type: "icon",
                  icon: l.R2l,
              },
              icon: l.R2l,
          })
        : null;
}
