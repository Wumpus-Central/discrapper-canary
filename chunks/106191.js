"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(109112),
    a = n(744700),
    s = n(569926);
function l(e) {
    let { game: t, iconClassName: n } = e,
        { id: l, icon: o } = t,
        d = (0, a.A)(l, o, { size: 32 }),
        { data: c } = (0, s.I)(null == d ? l : void 0),
        u = d ?? c?.getIconURL(32);
    return null != u
        ? (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: u, width: 32 })
        : (0, i.jsx)(r._, { className: n, size: "md" });
}
