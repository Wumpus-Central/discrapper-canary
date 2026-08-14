i.d(a, { A: () => l });
var t = i(477900);
i(582128);
var d = i(109112),
    e = i(744700),
    c = i(569926);
function l(s) {
    let { game: a, iconClassName: i, allowFetch: l = !0 } = s,
        { id: n, icon: h } = a,
        r = (0, e.A)(n, h, { size: 32 }),
        { data: u } = (0, c.I)(l && null == r ? n : void 0),
        p = r ?? u?.getIconURL(32);
    return null != p
        ? (0, t.jsx)("img", { alt: "", className: i, height: 32, loading: "lazy", src: p, width: 32 })
        : (0, t.jsx)(d._, { className: i, size: "md" });
}
