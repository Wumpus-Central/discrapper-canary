e.d(t, { A: () => c });
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(914430),
    s = e(924985),
    d = e(985018);
function c(n) {
    let t = (0, r.bG)([s.A], () => s.A.isCollapsed(n.id), [n.id]);
    return (0, i.jsx)(l.sLh, {
        id: "collapse-category",
        label: d.intl.string(d.t.SvVRsj),
        action: () => (t ? (0, a.fh)(n.id) : (0, a.Gv)(n.id)),
        checked: t,
    });
}
