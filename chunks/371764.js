n.d(t, { x: () => C });
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
    x = n(895163),
    p = n(985018),
    E = n(122506);
let C = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: C } = (0, _.Ay)(),
        T = (0, u.p)();
    (0, m.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: a.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let S = (0, x.Xn)("marketing_page_banner"),
        I = (0, g.h)({
            buttonAction:
                S.treatment === x.tz.PLAN_SELECTION
                    ? o.dz.OPEN_PLAN_SELECTION_MODAL
                    : (n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL),
            analyticsLocations: C,
            analyticsLocation: T.location,
        }),
        f = (0, h.a)(n.body);
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
                    (0, i.jsx)(r.DZT, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(r.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: E.tb,
                        children: [
                            f,
                            "" !== n.helpArticleId &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(d.MzZ, {
                                            className: E.$T,
                                            href: A.A.getArticleURL(n.helpArticleId),
                                            children: p.intl.string(p.t["sBp+u0"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != n.button &&
                (0, i.jsx)("div", {
                    className: E.UD,
                    children: (0, i.jsx)(c.$nd, {
                        variant: "expressive",
                        size: "md",
                        onClick: I,
                        text: n.button.copy,
                        icon: l.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
