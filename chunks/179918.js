n.d(t, { u: () => O });
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(79766),
    s = n(657707),
    l = n(793030),
    c = n(740111),
    u = n(159691),
    d = n(481060),
    f = n(2052),
    p = n(906732),
    _ = n(213609),
    m = n(63063),
    h = n(671728),
    g = n(115324),
    E = n(45509),
    b = n(388032),
    y = n(407367);
let O = (e) => {
    var t, n;
    let { componentId: O, promotionBannerMarketingComponentFields: v } = e,
        { analyticsLocations: S } = (0, p.ZP)(),
        I = (0, f.O)();
    (0, _.Z)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: o.I.MARKETING_PAGE_BANNER,
            component_id: O,
        },
    });
    let T = v,
        C = (0, E.$C)("marketing_page_banner"),
        A = (0, h.K)({
            buttonAction:
                C.treatment === E.IA.PLAN_SELECTION
                    ? c.Wc.OPEN_PLAN_SELECTION_MODAL
                    : null != (n = null == (t = T.button) ? void 0 : t.buttonAction)
                      ? n
                      : c.Wc.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: S,
            analyticsLocation: I.location,
        }),
        N = i.useMemo(() => (0, g.h)(T.body), [T.body]);
    return (0, r.jsxs)("div", {
        className: y.container,
        children: [
            (0, r.jsx)("div", {
                className: y.asset,
                children: (0, r.jsx)(d.Eep, {
                    src: T.assetUrl,
                    width: 96,
                    height: 96,
                }),
            }),
            (0, r.jsxs)("div", {
                className: y.bannerContent,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: T.header,
                    }),
                    (0, r.jsxs)(l.xvT, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: y.bannerDescription,
                        children: [
                            N,
                            "" !== T.helpArticleId &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        "\xA0",
                                        (0, r.jsx)(d.eee, {
                                            className: y.termsApplyAnchor,
                                            href: m.Z.getArticleURL(T.helpArticleId),
                                            children: b.intl.string(b.t["sBp+u0"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != T.button &&
                (0, r.jsx)("div", {
                    className: y.buttonContainer,
                    children: (0, r.jsx)(u.zxk, {
                        variant: "expressive",
                        size: "md",
                        onClick: A,
                        text: T.button.copy,
                        icon: s.SrA,
                    }),
                }),
        ],
    });
};
