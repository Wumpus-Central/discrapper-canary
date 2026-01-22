n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(914430),
    c = n(924985),
    o = n(985018);
function s(e) {
    let t = (0, i.bG)([c.A], () => c.A.isCollapsed(e.id), [e.id]);
    return (0, r.jsx)(l.sLh, {
        id: "collapse-category",
        label: o.intl.string(o.t.SvVRsj),
        action: () => (t ? (0, a.fh)(e.id) : (0, a.Gv)(e.id)),
        checked: t,
    });
}
