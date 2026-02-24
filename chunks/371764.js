n.d(t, { x: () => E });
var i = n(627968);
n(64700);
var s = n(110259),
    a = n(877624),
    l = n(934551),
    r = n(158954),
    o = n(232582),
    c = n(732955),
    d = n(397927),
    u = n(212245),
    _ = n(688810),
    m = n(139286),
    A = n(975571),
    g = n(498470),
    h = n(637706),
    x = n(985018),
    p = n(122506);
let E = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: E } = (0, _.Ay)(),
        C = (0, u.p)();
    (0, m.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: a.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let T = (0, g.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: E,
            analyticsLocation: C.location,
        }),
        S = (0, h.a)(n.body);
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
                    (0, i.jsx)(r.DZT, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(r.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: p.tb,
                        children: [
                            S,
                            "" !== n.helpArticleId &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(d.MzZ, {
                                            className: p.$T,
                                            href: A.A.getArticleURL(n.helpArticleId),
                                            children: x.intl.string(x.t["sBp+u0"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: p.UD,
                    children: (0, i.jsx)(c.$nd, {
                        variant: "expressive",
                        size: "md",
                        onClick: T,
                        text: n.button.copy,
                        icon: l.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
