a.d(t, { x: () => E });
var s = a(627968);
a(64700);
var i = a(562708),
    n = a(877624),
    r = a(403581),
    l = a(534514),
    c = a(834730),
    o = a(232582),
    d = a(821609),
    u = a(349288),
    m = a(212245),
    A = a(688810),
    N = a(139286),
    g = a(498470),
    p = a(637706),
    x = a(975841);
let E = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: a } = e,
        { analyticsLocations: E } = (0, A.Ay)(),
        h = (0, m.p)();
    (0, N.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let f = (0, g.h)({
            buttonAction: a.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: a.button?.deeplinkSection,
            analyticsLocations: E,
            analyticsLocation: h.location,
        }),
        C = (0, p.a)(a.body),
        R = (0, p.C)(a.helpArticle, a.helpArticleId);
    return (0, s.jsxs)("div", {
        className: x.kL,
        children: [
            (0, s.jsx)("div", {
                className: x.LY,
                children: (0, s.jsx)("img", { src: a.assetUrl, className: x.ot, alt: "" }),
            }),
            (0, s.jsxs)("div", {
                className: x.IH,
                children: [
                    (0, s.jsx)(l.D, { variant: "heading-md/semibold", color: "text-strong", children: a.header }),
                    (0, s.jsxs)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: x.tb,
                        children: [
                            C,
                            null != R &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, s.jsx)(u.Anchor, { className: x.$T, href: R.url, children: R.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != a.button &&
                (0, s.jsx)("div", {
                    className: x.UD,
                    children: (0, s.jsx)(d.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: f,
                        text: a.button.copy,
                        icon: r.t,
                    }),
                }),
        ],
    });
};
