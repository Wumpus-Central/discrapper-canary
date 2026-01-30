n.d(t, {
    A: () => o,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(296388);
let o = (e) => {
    var t, n, i, o, c;
    let {
            title: d,
            cardVariantStyleInfo: u,
            description: _,
            titleClassName: p,
            subtitle: m,
            subtitleClassName: g,
            isOverlay: A,
        } = e,
        f = null != m && !(A && (null == u || null == (i = u.subtitle) ? void 0 : i.hideOnOverlay) === !0),
        b = null != _;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-xl/extrabold",
                className: l()(a.Jf, p),
                children: d,
            }),
            (f || b) &&
                (0, r.jsxs)("div", {
                    className: g,
                    children: [
                        f &&
                            (0, r.jsx)(s.Text, {
                                variant:
                                    null != (t = null == u || null == (o = u.subtitle) ? void 0 : o.textVariant)
                                        ? t
                                        : "text-sm/normal",
                                children: m,
                            }),
                        b &&
                            (0, r.jsxs)(s.Text, {
                                variant:
                                    null != (n = null == u || null == (c = u.description) ? void 0 : c.textVariant)
                                        ? n
                                        : "text-sm/normal",
                                children: [f && (0, r.jsx)("br", {}), _],
                            }),
                    ],
                }),
        ],
    });
};
