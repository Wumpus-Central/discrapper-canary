"use strict";
n.d(t, { f: () => d });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(110259),
    o = n(877624),
    l = n(397927),
    u = n(139286),
    c = n(602852);
let d = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n, className: i } = e;
    return (
        (0, u.A)({
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: o.C.PAYMENT_MODAL_BANNER, component_id: t },
        }),
        (0, r.jsx)("div", {
            className: a()(c.k, i),
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
