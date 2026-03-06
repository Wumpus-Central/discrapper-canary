"use strict";
n.d(t, { f: () => d });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(110259),
    o = n(877624),
    l = n(397927),
    u = n(139286),
    c = n(339882);
let d = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n, className: i } = e;
    return (
        (0, u.A)({
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: o.C.PAYMENT_MODAL_BANNER, component_id: t },
        }),
        (0, r.jsx)("div", {
            className: s()(c.k, i),
            children: (0, r.jsxs)("div", {
                className: c.Q,
                children: [
                    (0, r.jsx)("div", { children: (0, r.jsx)(l._V3, { src: n.assetUrl, width: 48, height: 48 }) }),
                    (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: "text-strong", children: n.body }),
                ],
            }),
        })
    );
};
