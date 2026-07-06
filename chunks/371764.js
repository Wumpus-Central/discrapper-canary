s.d(t, { x: () => _ });
var l = s(627968);
s(64700);
var n = s(562708),
    i = s(877624),
    r = s(534514),
    a = s(834730),
    o = s(232582),
    c = s(821609),
    d = s(349288),
    u = s(212245),
    x = s(688810),
    m = s(139286),
    p = s(498470),
    j = s(637706),
    h = s(975841);
function _(e) {
    let { componentId: t, promotionBannerMarketingComponentFields: s } = e,
        { analyticsLocations: _ } = (0, x.Ay)(),
        f = (0, u.p)();
    (0, m.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let g = (0, p.h)({
            buttonAction: s.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: s.button?.deeplinkSection,
            applicationId: s.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: _,
            analyticsLocation: f.location,
        }),
        E = (0, j.a)(s.body),
        A = (0, j.C)(s.helpArticle, s.helpArticleId),
        { icon: C } = (0, p.x)({ buttonAction: s.button?.buttonAction });
    return (0, l.jsxs)("div", {
        className: h.kL,
        children: [
            (0, l.jsx)("div", {
                className: h.LY,
                children: (0, l.jsx)("img", { src: s.assetUrl, className: h.ot, alt: "" }),
            }),
            (0, l.jsxs)("div", {
                className: h.IH,
                children: [
                    (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: s.header }),
                    (0, l.jsxs)(a.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: h.tb,
                        children: [
                            E,
                            null != A &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, l.jsx)(d.Anchor, { className: h.$T, href: A.url, children: A.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != s.button &&
                (0, l.jsx)("div", {
                    className: h.UD,
                    children: (0, l.jsx)(c.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: g,
                        text: s.button.copy,
                        icon: C,
                    }),
                }),
        ],
    });
}
