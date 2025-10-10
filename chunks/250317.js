t.d(e, { default: () => h }), t(953529), t(388685);
var l = t(951288),
    a = t(647438),
    i = t(442837),
    o = t(481060),
    r = t(55563),
    s = t(937615),
    c = t(73346),
    d = t(594914),
    u = t(231338),
    m = t(388032),
    x = t(424215);
function C(n) {
    var e, t, a, i;
    let { sku: r } = n;
    if (null == r) return null;
    let c = (0, s.T4)(
        null != (a = null == (e = r.price) ? void 0 : e.amount) ? a : 0,
        null != (i = null == (t = r.price) ? void 0 : t.currency) ? i : u.pK.USD,
    );
    return (0, l.jsxs)("div", {
        className: x.detailsContainer,
        children: [
            (0, l.jsxs)("div", {
                className: x.titleDescriptionContainer,
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
                className: x.buttonsContainer,
                children: [
                    (0, l.jsx)(o.zxk, {
                        variant: "primary",
                        onClick: () => {
                            (0, d.P)(r, { isGift: !1 });
                        },
                        text: m.intl.string(m.t.boqtTE),
                        fullWidth: !0,
                    }),
                    (0, l.jsx)(o.zxk, {
                        icon: o.OgN,
                        variant: "secondary",
                        onClick: () => {
                            (0, d.P)(r, { isGift: !0 });
                        },
                        text: m.intl.string(m.t.QAZA5e),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
function f(n) {
    let { socialLayerTenantMetadata: e, selectedCarouselItemIndex: t, applicationId: a } = n;
    if (null == e || e.carouselItems.length <= t) return null;
    let i = e.carouselItems[t];
    if (null == i) return null;
    let r = null != i.labelIconAssetId ? (0, c._W)(a, i.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: x.labelIconContainer,
        children: [
            null != r &&
                (0, l.jsx)("img", {
                    className: x.labelIcon,
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
        m = (0, i.e7)([r.Z], () => r.Z.get(d)),
        h = null == m || null == (e = m.tenantMetadata) ? void 0 : e.socialLayer,
        [p, _] = a.useState(0);
    return null == h
        ? null
        : (0, l.jsx)(o.Y0X, {
              transitionState: s,
              "hide-shadow": !0,
              parentComponent: "SocialLayerStorefrontProductDetailsModal",
              className: x.modalRoot,
              size: o.CgR.DYNAMIC,
              returnRef: c,
              children: (0, l.jsx)(o.hzk, {
                  className: x.modalContent,
                  children: (0, l.jsxs)("div", {
                      className: x.infoContainer,
                      children: [
                          (0, l.jsx)(f, {
                              applicationId: u,
                              socialLayerTenantMetadata:
                                  null == m || null == (t = m.tenantMetadata) ? void 0 : t.socialLayer,
                              selectedCarouselItemIndex: p,
                          }),
                          (0, l.jsx)(C, { sku: m }),
                      ],
                  }),
              }),
          });
}
