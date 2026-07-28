"use strict";
n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var r = n(109112),
    a = n(17928),
    s = n(760751),
    l = n(486020),
    o = n(744700);
function d(e) {
    let { game: t, iconClassName: n } = e,
        { id: d, icon: c } = t,
        u = (0, a.bG)([s.A], () => s.A.getDetectableGame(d), [d]),
        _ = (0, o.A)(d, c, { size: 32 });
    if (null != _) return (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: _, width: 32 });
    if (null != u) {
        let e = l.Ay.getApplicationIconURL({ id: u.id, icon: u.icon, size: 32 });
        if (null != e)
            return (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: e, width: 32 });
    }
    return (0, i.jsx)(r._, { className: n, size: "md" });
}
