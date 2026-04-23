"use strict";
n.d(t, { f: () => f });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(110259),
    o = n(877624),
    l = n(673698),
    u = n(834730),
    c = n(262427),
    d = n(139286),
    _ = n(432029);
let f = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n, shouldUseOfferNotice: i, className: f } = e;
    (0, d.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: o.C.PAYMENT_MODAL_BANNER, component_id: t },
    });
    let p = (0, r.jsx)(l._, { src: n.assetUrl, width: 48, height: 48 });
    return i
        ? (0, r.jsx)(c.J, { className: _.No, customGraphic: p, text: n.body })
        : (0, r.jsx)("div", {
              className: s()(_.kL, _.No, f),
              children: (0, r.jsxs)("div", {
                  className: _.Qs,
                  children: [
                      (0, r.jsx)("div", { children: p }),
                      (0, r.jsx)(u.E, { variant: "text-sm/medium", color: "text-strong", children: n.body }),
                  ],
              }),
          });
};
