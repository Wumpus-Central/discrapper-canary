n.d(t, { h: () => d });
var r = n(951288),
    i = n(990547),
    l = n(79766),
    a = n(481060),
    s = n(213609),
    o = n(839683);
let d = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e;
    return (
        (0, s.Z)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: {
                component_type: l.I.PAYMENT_MODAL_BANNER,
                component_id: t,
            },
        }),
        (0, r.jsx)("div", {
            className: o.container,
            children: (0, r.jsxs)("div", {
                className: o.content,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(a.Eep, {
                            src: n.assetUrl,
                            width: 48,
                            height: 48,
                        }),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: n.body,
                    }),
                ],
            }),
        })
    );
};
