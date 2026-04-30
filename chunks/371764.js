i.d(t, { x: () => E });
var s = i(627968);
i(64700);
var a = i(110259),
    n = i(877624),
    r = i(403581),
    l = i(534514),
    c = i(834730),
    d = i(232582),
    o = i(821609),
    u = i(349288),
    m = i(212245),
    A = i(688810),
    p = i(139286),
    g = i(498470),
    x = i(637706),
    N = i(975841);
let E = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: i } = e,
        { analyticsLocations: E } = (0, A.Ay)(),
        h = (0, m.p)();
    (0, p.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let f = (0, g.h)({
            buttonAction: i.button?.buttonAction ?? d.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: i.button?.deeplinkSection,
            analyticsLocations: E,
            analyticsLocation: h.location,
        }),
        R = (0, x.a)(i.body),
        _ = (0, x.C)(i.helpArticle, i.helpArticleId);
    return (0, s.jsxs)("div", {
        className: N.kL,
        children: [
            (0, s.jsx)("div", {
                className: N.LY,
                children: (0, s.jsx)("img", { src: i.assetUrl, className: N.ot, alt: "" }),
            }),
            (0, s.jsxs)("div", {
                className: N.IH,
                children: [
                    (0, s.jsx)(l.D, { variant: "heading-md/semibold", color: "text-strong", children: i.header }),
                    (0, s.jsxs)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: N.tb,
                        children: [
                            R,
                            null != _ &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, s.jsx)(u.Anchor, { className: N.$T, href: _.url, children: _.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != i.button &&
                (0, s.jsx)("div", {
                    className: N.UD,
                    children: (0, s.jsx)(o.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: f,
                        text: i.button.copy,
                        icon: r.t,
                    }),
                }),
        ],
    });
};
