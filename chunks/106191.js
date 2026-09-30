s.d(a, { A: () => i });
var r = s(477900);
s(582128);
var n = s(109112),
    t = s(744700),
    l = s(569926);
function i(e) {
    let { game: a, iconClassName: s, allowFetch: i = !0 } = e,
        { id: d, icon: o } = a,
        c = (0, t.A)(d, o, { size: 32 }),
        { data: m } = (0, l.I)(i && null == c ? d : void 0),
        u = c ?? m?.getIconURL(32);
    return null != u
        ? (0, r.jsx)("img", { alt: "", className: s, height: 32, loading: "lazy", src: u, width: 32 })
        : (0, r.jsx)(n._, { className: s, size: "md" });
}
