n.d(t, { x: () => f });
var i = n(627968);
n(64700);
var a = n(562708),
    s = n(877624),
    r = n(534514),
    l = n(834730),
    c = n(232582),
    o = n(821609),
    d = n(349288),
    u = n(212245),
    m = n(688810),
    A = n(139286),
    g = n(498470),
    N = n(637706),
    p = n(975841);
function f(e) {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: f } = (0, m.Ay)(),
        E = (0, u.p)();
    (0, A.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: s.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let x = (0, g.h)({
            buttonAction: n.button?.buttonAction ?? c.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            applicationId: n.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: f,
            analyticsLocation: E.location,
        }),
        h = (0, N.a)(n.body),
        C = (0, N.C)(n.helpArticle, n.helpArticleId),
        { icon: R } = (0, g.x)({ buttonAction: n.button?.buttonAction });
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)("div", {
                className: p.LY,
                children: (0, i.jsx)("img", { src: n.assetUrl, className: p.ot, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: p.IH,
                children: [
                    (0, i.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(l.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: p.tb,
                        children: [
                            h,
                            null != C &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(d.Anchor, { className: p.$T, href: C.url, children: C.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: p.UD,
                    children: (0, i.jsx)(o.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: x,
                        text: n.button.copy,
                        icon: R,
                    }),
                }),
        ],
    });
}
