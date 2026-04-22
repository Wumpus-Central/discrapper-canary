n.d(t, { f: () => m });
var l = n(627968),
    i = n(503698),
    a = n.n(i),
    r = n(110259),
    s = n(877624),
    o = n(673698),
    u = n(834730),
    c = n(262427),
    d = n(139286),
    p = n(432029);
let m = (e) => {
    let { componentId: t, promotionBannerMarketingComponentFields: n, shouldUseOfferNotice: i, className: m } = e;
    (0, d.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: s.C.PAYMENT_MODAL_BANNER, component_id: t },
    });
    let h = (0, l.jsx)(o._, { src: n.assetUrl, width: 48, height: 48 });
    return i
        ? (0, l.jsx)(c.J, { className: p.No, customGraphic: h, text: n.body })
        : (0, l.jsx)("div", {
              className: a()(p.kL, p.No, m),
              children: (0, l.jsxs)("div", {
                  className: p.Qs,
                  children: [
                      (0, l.jsx)("div", { children: h }),
                      (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-strong", children: n.body }),
                  ],
              }),
          });
};
