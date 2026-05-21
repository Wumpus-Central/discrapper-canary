n.d(t, { x: () => R });
var i = n(627968);
n(64700);
var l = n(562708),
    r = n(877624),
    s = n(403581),
    a = n(534514),
    c = n(834730),
    o = n(232582),
    d = n(821609),
    u = n(349288),
    E = n(212245),
    A = n(688810),
    _ = n(139286),
    T = n(498470),
    I = n(637706),
    N = n(975841);
let R = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: R } = (0, A.Ay)(),
        m = (0, E.p)();
    (0, _.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: r.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let C = (0, T.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            analyticsLocations: R,
            analyticsLocation: m.location,
        }),
        p = (0, I.a)(n.body),
        S = (0, I.C)(n.helpArticle, n.helpArticleId);
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [
            (0, i.jsx)("div", {
                className: N.LY,
                children: (0, i.jsx)("img", { src: n.assetUrl, className: N.ot, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: N.IH,
                children: [
                    (0, i.jsx)(a.D, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: N.tb,
                        children: [
                            p,
                            null != S &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(u.Anchor, { className: N.$T, href: S.url, children: S.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: N.UD,
                    children: (0, i.jsx)(d.$, {
                        variant: "expressive",
                        size: "md",
                        onClick: C,
                        text: n.button.copy,
                        icon: s.t,
                    }),
                }),
        ],
    });
};
