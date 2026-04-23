e.d(t, { A: () => c });
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(477782),
    a = e(914430),
    d = e(924985),
    s = e(985018);
function c(n) {
    let t = (0, r.bG)([d.A], () => d.A.isCollapsed(n.id), [n.id]);
    return (0, i.jsx)(l.sL, {
        id: "collapse-category",
        label: s.intl.string(s.t.SvVRsj),
        action: () => (t ? (0, a.fh)(n.id) : (0, a.Gv)(n.id)),
        checked: t,
    });
}
