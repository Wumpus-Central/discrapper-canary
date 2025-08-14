n.d(t, {
    Gm: () => m,
    Uj: () => h,
    ZI: () => p,
}),
    n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(708816),
    s = n(368072),
    l = n(777207),
    c = n(692547),
    u = n(330711),
    d = n(870756),
    f = n(818632);
let _ = 48,
    p = 5;
function h(e) {
    let {
        description: t,
        imgSrc: n,
        renderPurchaseButton: i,
        onPurchase: h,
        title: m,
        onDetails: g,
        benefitItems: E,
        benefitsSummary: b,
        subtitle: y,
        maxBenefits: O = p,
    } = e;
    return (0, r.jsx)(a.tE, {
        children: (0, r.jsxs)("div", {
            className: o()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != g ? g() : null != h && h();
            },
            onKeyUp: (e) => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != g ? g() : null != h && h());
            },
            children: [
                (0, r.jsx)("div", {
                    className: d.card,
                    children: (0, r.jsxs)("div", {
                        className: d.body,
                        children: [
                            (0, r.jsx)(l.x, {
                                tag: "div",
                                variant: "heading-lg/semibold",
                                children: m,
                            }),
                            (0, r.jsx)("div", {
                                className: d.image,
                                children:
                                    null != n
                                        ? (0, r.jsx)("img", {
                                              src: n.toString(),
                                              alt: "",
                                          })
                                        : (0, r.jsx)(s.V, {
                                              color: c.Z.colors.ICON_PRIMARY,
                                              size: "custom",
                                              height: _,
                                              width: _,
                                          }),
                            }),
                            null != i
                                ? i({
                                      onClick: (e) => {
                                          e.stopPropagation(), null == h || h();
                                      },
                                  })
                                : null,
                            y,
                            null != t &&
                                "" !== t &&
                                (0, r.jsx)(l.x, {
                                    className: d.description,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: t,
                                }),
                        ],
                    }),
                }),
                null != b &&
                    (0, r.jsx)("div", {
                        className: d.benefitsSummary,
                        children: (0, r.jsx)(l.x, {
                            color: "interactive-normal",
                            variant: "text-sm/medium",
                            children: u.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: b }),
                        }),
                    }),
                null != E &&
                    E.length > 0 &&
                    (0, r.jsx)("div", {
                        className: d.benefits,
                        children: (0, r.jsx)("div", {
                            className: d.benefitsContainer,
                            children: (0, r.jsxs)("div", {
                                className: d.benefitsList,
                                children: [
                                    (0, r.jsx)(l.x, {
                                        color: "header-secondary",
                                        variant: "eyebrow",
                                        children: u.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    E.length > O
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  E.slice(0, O),
                                                  (0, r.jsx)(l.x, {
                                                      variant: "text-md/semibold",
                                                      color: "text-secondary",
                                                      children: u.Z.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: E.length - O,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : E,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function m(e) {
    let { icon: t, header: n, description: i } = e;
    return (0, r.jsxs)("div", {
        className: d.cardBenefit,
        children: [
            (0, r.jsx)("div", {
                className: d.cardBenefitIcon,
                children: t,
            }),
            (0, r.jsxs)("div", {
                children: [
                    null != n &&
                        (0, r.jsx)(l.x, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n,
                        }),
                    (0, r.jsx)(l.x, {
                        variant: "text-sm/normal",
                        children: i,
                    }),
                ],
            }),
        ],
    });
}
