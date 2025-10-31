n.d(t, { u: () => f });
var r = n(951288),
    i = n(990547),
    a = n(79766),
    o = n(793030),
    s = n(481060),
    l = n(213609),
    c = n(63063),
    u = n(388032),
    d = n(671713);
let f = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e;
    (0, l.Z)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.I.MARKETING_PAGE_BANNER,
            component_id: t,
        },
    });
    let f = n;
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsx)("div", {
                className: d.asset,
                children: (0, r.jsx)(s.Eep, {
                    src: f.assetUrl,
                    width: 96,
                    height: 96,
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.bannerContent,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: f.header,
                    }),
                    (0, r.jsx)(o.xvT, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        className: d.bannerDescription,
                        children: f.body,
                    }),
                    (0, r.jsx)(o.xvT, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        className: d.bannerDescription,
                        children: u.intl.format(u.t.mYS7uY, { helpCenterLink: c.Z.getArticleURL(f.helpArticleId) }),
                    }),
                ],
            }),
        ],
    });
};
