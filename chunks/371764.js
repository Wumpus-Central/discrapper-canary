s.d(t, { x: () => g });
var l = s(627968);
s(64700);
var n = s(562708),
    i = s(877624),
    r = s(534514),
    a = s(834730),
    o = s(232582),
    c = s(670474),
    d = s(821609),
    u = s(349288),
    x = s(212245),
    m = s(688810),
    p = s(139286),
    h = s(498470),
    j = s(637706),
    _ = s(975841);
function g(e) {
    let { componentId: t, promotionBannerMarketingComponentFields: s } = e,
        { analyticsLocations: g } = (0, m.Ay)(),
        f = (0, x.p)();
    (0, p.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let A = (0, h.h)({
            buttonAction: s.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: s.button?.deeplinkSection,
            applicationId: s.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: g,
            analyticsLocation: f.location,
        }),
        E = (0, j.a)(s.body),
        C = (0, j.C)(s.helpArticle, s.helpArticleId),
        { icon: T } = (0, h.x)({ buttonAction: s.button?.buttonAction });
    return (0, l.jsxs)("div", {
        className: _.kL,
        children: [
            (0, l.jsx)("div", {
                className: _.LY,
                children: (0, l.jsx)("img", { src: s.assetUrl, className: _.ot, alt: "" }),
            }),
            (0, l.jsxs)("div", {
                className: _.IH,
                children: [
                    (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: s.header }),
                    (0, l.jsxs)(a.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: _.tb,
                        children: [
                            E,
                            null != C &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, l.jsx)(u.Anchor, { className: _.$T, href: C.url, children: C.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != s.button &&
                (0, l.jsx)("div", {
                    className: _.UD,
                    children: (0, l.jsx)(d.$, {
                        variant: s.buttonVariant === c.FF.PRIMARY ? "primary" : "expressive",
                        size: "md",
                        onClick: A,
                        text: s.button.copy,
                        icon: T,
                    }),
                }),
        ],
    });
}
