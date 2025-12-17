n.d(t, { Z: () => l }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(290643);
let l = (e) => {
    var t, n, i, l;
    let {
        title: c,
        shouldShowElement: u,
        cardVariantStyleInfo: d,
        description: f,
        titleClassName: p = "",
        subtitle: _ = "",
        subtitleClassName: m,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-xl/extrabold",
                className: a()(s.cardHeading, p),
                children: c,
            }),
            "" !== _ &&
                (null == u || u(null == d ? void 0 : d.subtitle)) &&
                (0, r.jsxs)("div", {
                    className: m,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant:
                                null != (i = null == d || null == (t = d.subtitle) ? void 0 : t.textVariant)
                                    ? i
                                    : "text-sm/normal",
                            children: _,
                        }),
                        null != f &&
                            (0, r.jsx)(o.Text, {
                                variant:
                                    null != (l = null == d || null == (n = d.description) ? void 0 : n.textVariant)
                                        ? l
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
