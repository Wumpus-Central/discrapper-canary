n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(296388);
let o = (e) => {
    let {
            title: t,
            cardVariantStyleInfo: n,
            description: s,
            titleClassName: o,
            subtitle: c,
            subtitleClassName: d,
            isOverlay: u,
        } = e,
        _ = null != c && !(u && n?.subtitle?.hideOnOverlay === !0),
        m = null != s;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, { variant: "heading-xl/extrabold", className: r()(l.Jf, o), children: t }),
            (_ || m) &&
                (0, i.jsxs)("div", {
                    className: d,
                    children: [
                        _ && (0, i.jsx)(a.Text, { variant: n?.subtitle?.textVariant ?? "text-sm/normal", children: c }),
                        m &&
                            (0, i.jsxs)(a.Text, {
                                variant: n?.description?.textVariant ?? "text-sm/normal",
                                children: [_ && (0, i.jsx)("br", {}), s],
                            }),
                    ],
                }),
        ],
    });
};
