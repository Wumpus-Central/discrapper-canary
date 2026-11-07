var i = n(477900);
n(582128);
var o = n(613412),
    l = n(517352),
    s = n(308588),
    a = n(670474),
    r = n(821609),
    c = n(534514),
    d = n(834730),
    u = n(28863),
    p = n(212245),
    m = n(688810),
    h = n(139286),
    x = n(498470),
    b = n(637706),
    g = n(767316);
n.d(
    e,
    {},
    {
        x: function (t) {
            let {
                    componentId: e,
                    componentType: n = l.oW.MARKETING_PAGE_BANNER,
                    promotionId: A,
                    promotionBannerMarketingComponentFields: N,
                } = t,
                { analyticsLocations: j } = (0, m.Ay)(),
                v = (0, p.p)();
            (0, h.A)({
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: { component_type: n, component_id: e, promotion_id: A },
            });
            let I = (0, x.h)({
                    buttonAction: N.button?.buttonAction ?? s.d.OPEN_TIER_2_PAYMENT_MODAL,
                    deeplinkSection: N.button?.deeplinkSection,
                    applicationId: N.button?.navigableStorefrontApplicationId?.value,
                    shopCollectionId: N.button?.shopCollectionId?.value,
                    analyticsLocations: j,
                    analyticsLocation: v.location,
                }),
                y = (0, b.a)(N.body),
                C = (0, b.C)(N.helpArticle, N.helpArticleId),
                { icon: T, iconPosition: _ } = (0, x.x)({ buttonAction: N.button?.buttonAction });
            return (0, i.jsxs)("div", {
                className: g.kL,
                children: [
                    (0, i.jsx)("div", {
                        className: g.LY,
                        children: (0, i.jsx)("img", { src: N.assetUrl, className: g.ot, alt: "" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: g.IH,
                        children: [
                            (0, i.jsx)(c.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: N.header,
                            }),
                            (0, i.jsxs)(d.E, {
                                variant: "body-md/medium",
                                color: "text-subtle",
                                className: g.tb,
                                children: [
                                    y,
                                    null != C &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                "\xa0",
                                                (0, i.jsx)(u.Anchor, {
                                                    className: g.$T,
                                                    href: C.url,
                                                    children: C.linkText,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    null != N.button &&
                        (0, i.jsx)("div", {
                            className: g.UD,
                            children: (0, i.jsx)(r.$, {
                                variant: N.buttonVariant === a.F.PRIMARY ? "primary" : "expressive",
                                size: "md",
                                onClick: I,
                                text: N.button.copy,
                                icon: T,
                                iconPosition: _,
                            }),
                        }),
                ],
            });
        },
    },
);
