n.d(t, {
    x: () => E,
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(877624),
    s = n(934551),
    a = n(158954),
    o = n(232582),
    c = n(732955),
    d = n(397927),
    u = n(212245),
    _ = n(688810),
    p = n(139286),
    m = n(975571),
    g = n(498470),
    A = n(637706),
    f = n(895163),
    h = n(985018),
    b = n(122506);
let E = (e) => {
    var t, n;
    let { componentId: E, promotionBannerMarketingComponentFields: x } = e,
        { analyticsLocations: O } = (0, _.Ay)(),
        C = (0, u.p)();
    (0, p.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: E,
        },
    });
    let I = (0, f.Xn)("marketing_page_banner"),
        T = (0, g.h)({
            buttonAction:
                I.treatment === f.tz.PLAN_SELECTION
                    ? o.dz.OPEN_PLAN_SELECTION_MODAL
                    : null != (t = null == (n = x.button) ? void 0 : n.buttonAction)
                      ? t
                      : o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: O,
            analyticsLocation: C.location,
        }),
        S = (0, A.a)(x.body);
    return (0, r.jsxs)("div", {
        className: b.kL,
        children: [
            (0, r.jsx)("div", {
                className: b.LY,
                children: (0, r.jsx)(d._V3, {
                    src: x.assetUrl,
                    width: 96,
                    height: 96,
                    className: b.ot,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.IH,
                children: [
                    (0, r.jsx)(a.DZT, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: x.header,
                    }),
                    (0, r.jsxs)(a.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: b.tb,
                        children: [
                            S,
                            "" !== x.helpArticleId &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        "\xa0",
                                        (0, r.jsx)(d.MzZ, {
                                            className: b.$T,
                                            href: m.A.getArticleURL(x.helpArticleId),
                                            children: h.intl.string(h.t["sBp+u0"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != x.button &&
                (0, r.jsx)("div", {
                    className: b.UD,
                    children: (0, r.jsx)(c.$nd, {
                        variant: "expressive",
                        size: "md",
                        onClick: T,
                        text: x.button.copy,
                        icon: s.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
