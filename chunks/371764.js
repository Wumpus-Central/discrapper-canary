n.d(e, { x: () => A });
var i = n(477900);
n(582128);
var l = n(562708),
    o = n(877624),
    s = n(308588),
    a = n(670474),
    r = n(821609),
    c = n(297264),
    d = n(834730),
    u = n(28863),
    p = n(212245),
    m = n(688810),
    x = n(139286),
    h = n(498470),
    b = n(637706),
    g = n(767316);
function A(t) {
    let { componentId: e, promotionId: n, promotionBannerMarketingComponentFields: A } = t,
        { analyticsLocations: N } = (0, m.Ay)(),
        j = (0, p.p)();
    (0, x.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: o.C.MARKETING_PAGE_BANNER, component_id: e, promotion_id: n },
    });
    let v = (0, h.h)({
            buttonAction: A.button?.buttonAction ?? s.d.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: A.button?.deeplinkSection,
            applicationId: A.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: N,
            analyticsLocation: j.location,
        }),
        T = (0, b.a)(A.body),
        y = (0, b.C)(A.helpArticle, A.helpArticleId),
        { icon: I, iconPosition: C } = (0, h.x)({ buttonAction: A.button?.buttonAction });
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", {
                className: g.LY,
                children: (0, i.jsx)("img", { src: A.assetUrl, className: g.ot, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: g.IH,
                children: [
                    (0, i.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: A.header }),
                    (0, i.jsxs)(d.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: g.tb,
                        children: [
                            T,
                            null != y &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(u.Anchor, { className: g.$T, href: y.url, children: y.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != A.button &&
                (0, i.jsx)("div", {
                    className: g.UD,
                    children: (0, i.jsx)(r.$, {
                        variant: A.buttonVariant === a.F.PRIMARY ? "primary" : "expressive",
                        size: "md",
                        onClick: v,
                        text: A.button.copy,
                        icon: I,
                        iconPosition: C,
                    }),
                }),
        ],
    });
}
