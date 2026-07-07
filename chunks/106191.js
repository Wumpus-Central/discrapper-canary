"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(109112),
    s = n(17928),
    a = n(760751),
    o = n(486020),
    l = n(744700);
function u(e) {
    let { game: t, iconClassName: n } = e,
        { id: u, icon: c } = t,
        d = (0, s.bG)([a.A], () => a.A.getDetectableGame(u), [u]),
        _ = (0, l.A)(u, c, { size: 32 });
    if (null != _) return (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: _, width: 32 });
    if (null != d) {
        let e = o.Ay.getApplicationIconURL({ id: d.id, icon: d.icon, size: 32 });
        if (null != e)
            return (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: e, width: 32 });
    }
    return (0, i.jsx)(r._, { className: n, size: "md" });
}
