n.d(t, { i: () => o });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(680393);
function o(e) {
    let {
        bannerIcon: t,
        bannerHeader: n,
        bannerSubtext: r,
        textStyles: o,
        headerStyles: s,
        containerStyles: c,
        children: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(a.spamBanner, c),
        children: [
            (0, i.jsxs)("div", {
                className: l()(a.bannerTextContainer, o),
                children: [
                    null != t &&
                        ("string" == typeof t
                            ? (0, i.jsx)("img", {
                                  src: t,
                                  alt: "",
                                  className: a.bannerIcon,
                              })
                            : t),
                    (0, i.jsxs)("div", {
                        className: a.bannerText,
                        children: [
                            (0, i.jsx)("div", {
                                className: l()(a.bannerHeader, s),
                                children: n,
                            }),
                            null != r &&
                                (0, i.jsx)("div", {
                                    className: a.bannerSubtext,
                                    children: r,
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a.actionButtons,
                children: u,
            }),
        ],
    });
}
