n.d(t, {
    f: () => c,
});
var r = n(627968),
    i = n(110259),
    a = n(877624),
    s = n(397927),
    o = n(139286),
    l = n(602852);
let c = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e;
    return (
        (0, o.A)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: {
                component_type: a.C.PAYMENT_MODAL_BANNER,
                component_id: t,
            },
        }),
        (0, r.jsx)("div", {
            className: l.k,
            children: (0, r.jsxs)("div", {
                className: l.Q,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(s._V3, {
                            src: n.assetUrl,
                            width: 48,
                            height: 48,
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: n.body,
                    }),
                ],
            }),
        })
    );
};
