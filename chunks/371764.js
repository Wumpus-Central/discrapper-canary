s.d(t, { x: () => g });
var l = s(477900);
s(582128);
var n = s(562708),
    i = s(877624),
    r = s(297264),
    a = s(834730),
    o = s(308588),
    c = s(670474),
    d = s(821609),
    u = s(349288),
    x = s(212245),
    m = s(688810),
    p = s(139286),
    h = s(498470),
    j = s(637706),
    _ = s(767316);
function g(e) {
    let { componentId: t, promotionId: s, promotionBannerMarketingComponentFields: g } = e,
        { analyticsLocations: f } = (0, m.Ay)(),
        E = (0, x.p)();
    (0, p.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.MARKETING_PAGE_BANNER, component_id: t, promotion_id: s },
    });
    let A = (0, h.h)({
            buttonAction: g.button?.buttonAction ?? o.d.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: g.button?.deeplinkSection,
            applicationId: g.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: f,
            analyticsLocation: E.location,
        }),
        C = (0, j.a)(g.body),
        T = (0, j.C)(g.helpArticle, g.helpArticleId),
        { icon: N } = (0, h.x)({ buttonAction: g.button?.buttonAction });
    return (0, l.jsxs)("div", {
        className: _.kL,
        children: [
            (0, l.jsx)("div", {
                className: _.LY,
                children: (0, l.jsx)("img", { src: g.assetUrl, className: _.ot, alt: "" }),
            }),
            (0, l.jsxs)("div", {
                className: _.IH,
                children: [
                    (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: g.header }),
                    (0, l.jsxs)(a.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: _.tb,
                        children: [
                            C,
                            null != T &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, l.jsx)(u.Anchor, { className: _.$T, href: T.url, children: T.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != g.button &&
                (0, l.jsx)("div", {
                    className: _.UD,
                    children: (0, l.jsx)(d.$, {
                        variant: g.buttonVariant === c.F.PRIMARY ? "primary" : "expressive",
                        size: "md",
                        onClick: A,
                        text: g.button.copy,
                        icon: N,
                    }),
                }),
        ],
    });
}
