t.d(e, { default: () => h }), t(953529), t(388685);
var l = t(951288),
    a = t(647438),
    i = t(442837),
    o = t(481060),
    r = t(55563),
    s = t(937615),
    c = t(73346),
    d = t(231338),
    u = t(388032),
    m = t(424215);
function x(n) {
    var e, t, a, i;
    let { sku: r } = n;
    if (null == r) return null;
    let c = (0, s.T4)(
        null != (a = null == (e = r.price) ? void 0 : e.amount) ? a : 0,
        null != (i = null == (t = r.price) ? void 0 : t.currency) ? i : d.pK.USD,
    );
    return (0, l.jsxs)("div", {
        className: m.detailsContainer,
        children: [
            (0, l.jsxs)("div", {
                className: m.titleDescriptionContainer,
                children: [
                    (0, l.jsx)(o.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        lineClamp: 2,
                        children: r.name,
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: r.description,
                    }),
                ],
            }),
            (0, l.jsx)(o.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: c,
            }),
            (0, l.jsxs)("div", {
                className: m.buttonsContainer,
                children: [
                    (0, l.jsx)(o.zxk, {
                        variant: "primary",
                        onClick: () => {},
                        text: u.intl.string(u.t.boqtTE),
                        fullWidth: !0,
                    }),
                    (0, l.jsx)(o.zxk, {
                        icon: o.OgN,
                        variant: "secondary",
                        onClick: () => {},
                        text: u.intl.string(u.t.QAZA5e),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
function C(n) {
    let { socialLayerTenantMetadata: e, selectedCarouselItemIndex: t, applicationId: a } = n;
    if (null == e || e.carouselItems.length <= t) return null;
    let i = e.carouselItems[t];
    if (null == i) return null;
    let r = null != i.labelIconAssetId ? (0, c._W)(a, i.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: m.labelIconContainer,
        children: [
            null != r &&
                (0, l.jsx)("img", {
                    className: m.labelIcon,
                    src: r,
                    alt: i.label,
                }),
            (0, l.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: i.label,
            }),
        ],
    });
}
function h(n) {
    var e, t;
    let { transitionState: s, returnRef: c, skuId: d, applicationId: u } = n,
        h = (0, i.e7)([r.Z], () => r.Z.get(d)),
        f = null == h || null == (e = h.tenantMetadata) ? void 0 : e.socialLayer,
        [p, _] = a.useState(0);
    return null == f
        ? null
        : (0, l.jsx)(o.Y0X, {
              transitionState: s,
              "hide-shadow": !0,
              parentComponent: "SocialLayerStorefrontProductDetailsModal",
              className: m.modalRoot,
              size: o.CgR.DYNAMIC,
              returnRef: c,
              children: (0, l.jsx)(o.hzk, {
                  className: m.modalContent,
                  children: (0, l.jsxs)("div", {
                      className: m.infoContainer,
                      children: [
                          (0, l.jsx)(C, {
                              applicationId: u,
                              socialLayerTenantMetadata:
                                  null == h || null == (t = h.tenantMetadata) ? void 0 : t.socialLayer,
                              selectedCarouselItemIndex: p,
                          }),
                          (0, l.jsx)(x, { sku: h }),
                      ],
                  }),
              }),
          });
}
