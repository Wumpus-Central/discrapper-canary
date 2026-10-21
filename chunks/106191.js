i.d(a, { A: () => u });
var t = i(477900);
i(582128);
var e = i(503698),
    d = i.n(e),
    l = i(109112),
    c = i(854456),
    n = i(744700),
    h = i(454908),
    r = i(989533);
function u(s) {
    let { game: a, iconClassName: i, withBackground: e = !1, allowFetch: u = !0 } = s,
        p = (0, c.A)(e),
        { id: o, icon: g } = a,
        k = (0, n.A)(o, g, { size: 32 }),
        { data: m } = (0, h.I)(u && null == k ? o : void 0),
        A = k ?? m?.getIconURL(32),
        v = d()(i, { [r.VA]: e });
    return null != A
        ? (0, t.jsx)("img", { alt: "", className: v, height: 32, loading: "lazy", src: A, width: 32, style: p })
        : (0, t.jsx)(l._, { className: i, size: "md" });
}
