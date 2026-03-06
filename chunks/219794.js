"use strict";
n.d(t, { f: () => _ });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(110259),
    o = n(877624),
    l = n(397927),
    u = n(262427),
    c = n(139286),
    d = n(339882);
let _ = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n, shouldUseOfferNotice: i, className: _ } = e;
    (0, c.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: o.C.PAYMENT_MODAL_BANNER, component_id: t },
    });
    let f = (0, r.jsx)(l._V3, { src: n.assetUrl, width: 48, height: 48 });
    return i
        ? (0, r.jsx)(u.J, { className: d.No, customGraphic: f, text: n.body })
        : (0, r.jsx)("div", {
              className: s()(d.kL, d.No, _),
              children: (0, r.jsxs)("div", {
                  className: d.Qs,
                  children: [
                      (0, r.jsx)("div", { children: f }),
                      (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: "text-strong", children: n.body }),
                  ],
              }),
          });
};
