"use strict";
n.d(t, { x: () => m });
var i = n(627968);
n(64700);
var r = n(562708),
    s = n(877624),
    a = n(534514),
    o = n(834730),
    l = n(232582),
    u = n(821609),
    c = n(349288),
    d = n(212245),
    _ = n(688810),
    h = n(139286),
    f = n(498470),
    p = n(637706),
    E = n(975841);
function m(e) {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: m } = (0, _.Ay)(),
        g = (0, d.p)();
    (0, h.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: s.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let A = (0, f.h)({
            buttonAction: n.button?.buttonAction ?? l.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            applicationId: n.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: m,
            analyticsLocation: g.location,
        }),
        I = (0, p.a)(n.body),
        T = (0, p.C)(n.helpArticle, n.helpArticleId),
        { icon: S } = (0, f.x)({ buttonAction: n.button?.buttonAction });
    return (0, i.jsxs)("div", {
        className: E.kL,
        children: [
            (0, i.jsx)("div", {
                className: E.LY,
                children: (0, i.jsx)("img", { src: n.assetUrl, className: E.ot, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: E.IH,
                children: [
                    (0, i.jsx)(a.D, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(o.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: E.tb,
                        children: [
                            I,
                            null != T &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(c.Anchor, { className: E.$T, href: T.url, children: T.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: E.UD,
                    children: (0, i.jsx)(u.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: A,
                        text: n.button.copy,
                        icon: S,
                    }),
                }),
        ],
    });
}
