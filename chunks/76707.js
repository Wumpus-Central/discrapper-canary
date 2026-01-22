n.d(t, { A: () => l }), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(296388);
let l = (e) => {
    var t, n, i, l;
    let {
        title: c,
        shouldShowElement: u,
        cardVariantStyleInfo: d,
        description: f,
        titleClassName: p = "",
        subtitle: _ = "",
        subtitleClassName: h,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-xl/extrabold",
                className: a()(o.Jf, p),
                children: c,
            }),
            "" !== _ &&
                (null == u || u(null == d ? void 0 : d.subtitle)) &&
                (0, r.jsxs)("div", {
                    className: h,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant:
                                null != (t = null == d || null == (i = d.subtitle) ? void 0 : i.textVariant)
                                    ? t
                                    : "text-sm/normal",
                            children: _,
                        }),
                        null != f &&
                            (0, r.jsx)(s.Text, {
                                variant:
                                    null != (n = null == d || null == (l = d.description) ? void 0 : l.textVariant)
                                        ? n
                                        : "text-sm/normal",
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("br", {}), f],
                                }),
                            }),
                    ],
                }),
        ],
    });
};
