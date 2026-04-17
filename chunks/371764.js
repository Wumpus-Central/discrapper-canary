n.d(t, { x: () => f });
var i = n(627968);
n(64700);
var r = n(110259),
    a = n(877624),
    s = n(934551),
    l = n(158954),
    o = n(232582),
    c = n(732955),
    d = n(397927),
    u = n(212245),
    _ = n(688810),
    m = n(139286),
    p = n(498470),
    A = n(637706),
    g = n(975841);
let f = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: f } = (0, _.Ay)(),
        h = (0, u.p)();
    (0, m.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: a.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let b = (0, p.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: n.button?.deeplinkSection,
            analyticsLocations: f,
            analyticsLocation: h.location,
        }),
        x = (0, A.a)(n.body),
        R = (0, A.C)(n.helpArticle, n.helpArticleId);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", {
                className: g.LY,
                children: (0, i.jsx)("img", { src: n.assetUrl, className: g.ot, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: g.IH,
                children: [
                    (0, i.jsx)(l.DZT, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: g.tb,
                        children: [
                            x,
                            null != R &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(d.MzZ, { className: g.$T, href: R.url, children: R.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: g.UD,
                    children: (0, i.jsx)(c.$nd, {
                        variant: "expressive",
                        size: "md",
                        onClick: b,
                        text: n.button.copy,
                        icon: s.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
