"use strict";
n.d(t, { x: () => g });
var i = n(627968);
n(64700);
var r = n(562708),
    s = n(877624),
    a = n(403581),
    o = n(534514),
    l = n(834730),
    u = n(232582),
    c = n(821609),
    d = n(349288),
    _ = n(212245),
    f = n(688810),
    h = n(139286),
    p = n(498470),
    E = n(637706),
    m = n(975841);
let g = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: g } = (0, f.Ay)(),
        A = (0, _.p)();
    (0, h.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: s.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let I = (0, p.h)({
            buttonAction: n.button?.buttonAction ?? u.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            analyticsLocations: g,
            analyticsLocation: A.location,
        }),
        T = (0, E.a)(n.body),
        S = (0, E.C)(n.helpArticle, n.helpArticleId);
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)("div", {
                className: m.LY,
                children: (0, i.jsx)("img", { src: n.assetUrl, className: m.ot, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: m.IH,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(l.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: m.tb,
                        children: [
                            T,
                            null != S &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(d.Anchor, { className: m.$T, href: S.url, children: S.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: m.UD,
                    children: (0, i.jsx)(c.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: I,
                        text: n.button.copy,
                        icon: a.t,
                    }),
                }),
        ],
    });
};
