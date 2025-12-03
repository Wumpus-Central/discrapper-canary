n.d(t, { u: () => g });
var r = n(54381),
    i = n(990547),
    a = n(79766),
    o = n(657707),
    s = n(793030),
    l = n(159691),
    c = n(481060),
    u = n(2052),
    d = n(906732),
    f = n(213609),
    p = n(63063),
    _ = n(671728),
    m = n(388032),
    h = n(671713);
let g = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e,
        { analyticsLocations: g } = (0, d.ZP)(),
        E = (0, u.O)();
    (0, f.Z)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.I.MARKETING_PAGE_BANNER,
            component_id: t,
        },
    });
    let b = n,
        y =
            null != b.button
                ? (0, _.K)({
                      buttonAction: b.button.buttonAction,
                      analyticsLocations: g,
                      analyticsLocation: E.location,
                  })
                : void 0;
    return (0, r.jsxs)("div", {
        className: h.container,
        children: [
            (0, r.jsx)("div", {
                className: h.asset,
                children: (0, r.jsx)(c.Eep, {
                    src: b.assetUrl,
                    width: 96,
                    height: 96,
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.bannerContent,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: b.header,
                    }),
                    (0, r.jsx)(s.xvT, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: h.bannerDescription,
                        children: b.body,
                    }),
                    (0, r.jsx)(s.xvT, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: h.bannerDescription,
                        children: m.intl.format(m.t.mYS7uY, { helpCenterLink: p.Z.getArticleURL(b.helpArticleId) }),
                    }),
                ],
            }),
            null != b.button &&
                (0, r.jsx)("div", {
                    className: h.buttonContainer,
                    children: (0, r.jsx)(l.zxk, {
                        variant: "expressive",
                        size: "md",
                        onClick: y,
                        text: b.button.copy,
                        icon: o.SrA,
                    }),
                }),
        ],
    });
};
