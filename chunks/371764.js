n.d(t, { x: () => y });
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(877624),
    s = n(934551),
    o = n(158954),
    l = n(232582),
    c = n(732955),
    u = n(397927),
    d = n(212245),
    f = n(688810),
    p = n(139286),
    _ = n(975571),
    h = n(498470),
    m = n(637706),
    g = n(895163),
    E = n(985018),
    b = n(122506);
let y = (e) => {
    var t, n;
    let { componentId: y, promotionBannerMarketingComponentFields: O } = e,
        { analyticsLocations: A } = (0, f.Ay)(),
        v = (0, d.p)();
    (0, p.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.C.MARKETING_PAGE_BANNER,
            component_id: y,
        },
    });
    let S = O,
        I = (0, g.Xn)("marketing_page_banner"),
        T = (0, h.h)({
            buttonAction:
                I.treatment === g.tz.PLAN_SELECTION
                    ? l.dz.OPEN_PLAN_SELECTION_MODAL
                    : null != (t = null == (n = S.button) ? void 0 : n.buttonAction)
                      ? t
                      : l.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: A,
            analyticsLocation: v.location,
        }),
        C = (0, m.a)(S.body);
    return (0, r.jsxs)("div", {
        className: b.kL,
        children: [
            (0, r.jsx)("div", {
                className: b.LY,
                children: (0, r.jsx)(u._V3, {
                    src: S.assetUrl,
                    width: 96,
                    height: 96,
                    className: b.ot,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.IH,
                children: [
                    (0, r.jsx)(o.DZT, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: S.header,
                    }),
                    (0, r.jsxs)(o.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: b.tb,
                        children: [
                            C,
                            "" !== S.helpArticleId &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        "\xA0",
                                        (0, r.jsx)(u.MzZ, {
                                            className: b.$T,
                                            href: _.A.getArticleURL(S.helpArticleId),
                                            children: E.intl.string(E.t["sBp+u0"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != S.button &&
                (0, r.jsx)("div", {
                    className: b.UD,
                    children: (0, r.jsx)(c.$nd, {
                        variant: "expressive",
                        size: "md",
                        onClick: T,
                        text: S.button.copy,
                        icon: s.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
