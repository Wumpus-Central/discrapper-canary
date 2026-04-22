n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    r = n(22231),
    s = n(843472),
    o = n(406704),
    d = n(961350),
    c = n(697470),
    u = n(985018);
function g(e, t) {
    let n = (0, l.bG)([d.default], () => d.default.getId()),
        g = (0, o.Id)(t),
        A = (0, o.s5)(t);
    return (0, c.A)(e, n) && g && !A
        ? (0, i.jsx)(a.Dr, {
              id: "edit",
              label: u.intl.string(u.t.fsBWmS),
              action: () => s.A.startEditMessageRecord(t.id, e),
              leadingAccessory: { type: "icon", icon: r.R },
              icon: r.R,
          })
        : null;
}
