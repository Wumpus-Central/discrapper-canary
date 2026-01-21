n.d(t, { u: () => y });
var r = n(54381);
n(473749);
var i = n(990547),
    a = n(79766),
    o = n(657707),
    s = n(793030),
    l = n(740111),
    c = n(159691),
    u = n(481060),
    d = n(2052),
    f = n(906732),
    p = n(213609),
    _ = n(63063),
    h = n(671728),
    m = n(115324),
    g = n(45509),
    E = n(388032),
    b = n(407367);
let y = (e) => {
    var t, n;
    let { componentId: y, promotionBannerMarketingComponentFields: O } = e,
        { analyticsLocations: v } = (0, f.ZP)(),
        S = (0, d.O)();
    (0, p.Z)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.I.MARKETING_PAGE_BANNER,
            component_id: y,
        },
    });
    let I = O,
        T = (0, g.$C)("marketing_page_banner"),
        C = (0, h.K)({
            buttonAction:
                T.treatment === g.IA.PLAN_SELECTION
                    ? l.Wc.OPEN_PLAN_SELECTION_MODAL
                    : null != (n = null == (t = I.button) ? void 0 : t.buttonAction)
                      ? n
                      : l.Wc.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: v,
            analyticsLocation: S.location,
        }),
        A = (0, m.$)(I.body);
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            (0, r.jsx)("div", {
                className: b.asset,
                children: (0, r.jsx)(u.Eep, {
                    src: I.assetUrl,
                    width: 96,
                    height: 96,
                    className: b.assetImage,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.bannerContent,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: I.header,
                    }),
                    (0, r.jsxs)(s.xvT, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: b.bannerDescription,
                        children: [
                            A,
                            "" !== I.helpArticleId &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        "\xA0",
                                        (0, r.jsx)(u.eee, {
                                            className: b.termsApplyAnchor,
                                            href: _.Z.getArticleURL(I.helpArticleId),
                                            children: E.intl.string(E.t["sBp+u0"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            null != I.button &&
                (0, r.jsx)("div", {
                    className: b.buttonContainer,
                    children: (0, r.jsx)(c.zxk, {
                        variant: "expressive",
                        size: "md",
                        onClick: C,
                        text: I.button.copy,
                        icon: o.NitroWheelIcon,
                    }),
                }),
        ],
    });
};
