n.d(t, { x: () => x });
var i = n(627968);
n(64700);
var s = n(110259),
    r = n(877624),
    a = n(934551),
    l = n(158954),
    o = n(232582),
    c = n(732955),
    d = n(397927),
    u = n(212245),
    _ = n(688810),
    m = n(139286),
    A = n(975571),
    g = n(498470),
    E = n(637706),
    h = n(895163),
    p = n(985018),
    C = n(122506);
let x = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: x } = (0, _.Ay)(),
        T = (0, u.p)();
    (0, m.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: r.C.MARKETING_PAGE_BANNER, component_id: t },
    });
    let I = (0, h.Xn)("marketing_page_banner"),
        S = (0, g.h)({
            buttonAction:
                I.treatment === h.tz.PLAN_SELECTION
                    ? o.dz.OPEN_PLAN_SELECTION_MODAL
                    : (n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL),
            analyticsLocations: x,
            analyticsLocation: T.location,
        }),
        f = (0, E.a)(n.body);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)("div", {
                className: C.LY,
                children: (0, i.jsx)(d._V3, { src: n.assetUrl, width: 96, height: 96, className: C.ot }),
            }),
            (0, i.jsxs)("div", {
                className: C.IH,
                children: [
                    (0, i.jsx)(l.DZT, { variant: "heading-md/semibold", color: "text-strong", children: n.header }),
                    (0, i.jsxs)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: C.tb,
                        children: [
                            f,
                            "" !== n.helpArticleId &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, i.jsx)(d.MzZ, {
                                            className: C.$T,
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
                    className: C.UD,
                    children: (0, i.jsx)(c.$nd, {
                        variant: "expressive",
                        size: "md",
                        onClick: S,
                        text: n.button.copy,
                        icon: a.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
