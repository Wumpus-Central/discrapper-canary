n.d(t, { x: () => h });
var a = n(627968);
n(64700);
var i = n(110259),
    r = n(877624),
    s = n(403581),
    l = n(534514),
    c = n(834730),
    o = n(232582),
    d = n(821609),
    u = n(349288),
    _ = n(212245),
    m = n(688810),
    p = n(139286),
    f = n(498470),
    A = n(637706),
    g = n(975841);
let h = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: h } = (0, m.Ay)(),
        x = (0, _.p)();
    (0, p.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: r.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let b = (0, f.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            analyticsLocations: h,
            analyticsLocation: x.location,
        }),
        C = (0, A.a)(n.body),
        N = (0, A.C)(n.helpArticle, n.helpArticleId);
    return (0, a.jsxs)("div", {
        className: g.kL,
        children: [
            (0, a.jsx)("div", {
                className: g.LY,
                children: (0, a.jsx)("img", { src: n.assetUrl, className: g.ot, alt: "" }),
            }),
            (0, a.jsxs)("div", {
                className: g.IH,
                children: [
                    (0, a.jsx)(l.D, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, a.jsxs)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: g.tb,
                        children: [
                            C,
                            null != N &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, a.jsx)(u.Anchor, { className: g.$T, href: N.url, children: N.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, a.jsx)("div", {
                    className: g.UD,
                    children: (0, a.jsx)(d.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: b,
                        text: n.button.copy,
                        icon: s.t,
                    }),
                }),
        ],
    });
};
