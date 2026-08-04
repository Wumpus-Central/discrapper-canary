"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(109112),
    a = n(744700),
    s = n(569926);
function l(e) {
    let { game: t, iconClassName: n, allowFetch: l = !0 } = e,
        { id: o, icon: d } = t,
        c = (0, a.A)(o, d, { size: 32 }),
        { data: u } = (0, s.I)(l && null == c ? o : void 0),
        _ = c ?? u?.getIconURL(32);
    return null != _
        ? (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: _, width: 32 })
        : (0, i.jsx)(r._, { className: n, size: "md" });
}
