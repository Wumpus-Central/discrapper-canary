n.d(t, { x: () => h });
var r = n(627968);
n(64700);
var a = n(110259),
    i = n(877624),
    s = n(403581),
    l = n(534514),
    c = n(834730),
    o = n(232582),
    d = n(821609),
    u = n(349288),
    _ = n(212245),
    m = n(688810),
    p = n(139286),
    f = n(498470),
    A = n(637706),
    g = n(975841);
let h = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: h } = (0, m.Ay)(),
        b = (0, _.p)();
    (0, p.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let x = (0, f.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            analyticsLocations: h,
            analyticsLocation: b.location,
        }),
        C = (0, A.a)(n.body),
        v = (0, A.C)(n.helpArticle, n.helpArticleId);
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsx)("div", {
                className: g.LY,
                children: (0, r.jsx)("img", { src: n.assetUrl, className: g.ot, alt: "" }),
            }),
            (0, r.jsxs)("div", {
                className: g.IH,
                children: [
                    (0, r.jsx)(l.D, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, r.jsxs)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: g.tb,
                        children: [
                            C,
                            null != v &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, r.jsx)(u.Anchor, { className: g.$T, href: v.url, children: v.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, r.jsx)("div", {
                    className: g.UD,
                    children: (0, r.jsx)(d.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: x,
                        text: n.button.copy,
                        icon: s.t,
                    }),
                }),
        ],
    });
};
