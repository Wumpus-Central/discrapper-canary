n.d(t, { h: () => c });
var r = n(951288),
    i = n(990547),
    a = n(79766),
    o = n(481060),
    s = n(213609),
    l = n(839683);
let c = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e;
    return (
        (0, s.Z)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: {
                component_type: a.I.PAYMENT_MODAL_BANNER,
                component_id: t,
            },
        }),
        (0, r.jsx)("div", {
            className: l.container,
            children: (0, r.jsxs)("div", {
                className: l.content,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(o.Eep, {
                            src: n.assetUrl,
                            width: 48,
                            height: 48,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: n.body,
                    }),
                ],
            }),
        })
    );
};
