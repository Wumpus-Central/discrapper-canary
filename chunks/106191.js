var n = i(477900);
i(582128);
var e = i(503698),
    t = i.n(e),
    c = i(109112),
    d = i(854456),
    l = i(744700),
    h = i(454908),
    o = i(989533);
i.d(
    a,
    {},
    {
        A: function (s) {
            let { game: a, iconClassName: i, withBackground: e = !1, allowFetch: r = !0 } = s,
                u = (0, d.A)(e),
                { id: p, icon: k } = a,
                m = (0, l.A)(p, k, { size: 32 }),
                { data: g } = (0, h.I)(r && null == m ? p : void 0),
                w = m ?? g?.getIconURL(32),
                A = t()(i, { [o.VA]: e });
            return null != w
                ? (0, n.jsx)("img", { alt: "", className: A, height: 32, loading: "lazy", src: w, width: 32, style: u })
                : (0, n.jsx)(c.UnknownGameIcon, { className: i, size: "md" });
        },
    },
);
