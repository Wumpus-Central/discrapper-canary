t.d(n, { default: () => b }), t(953529), t(388685);
var l = t(951288),
    a = t(647438),
    i = t(442837),
    r = t(481060),
    o = t(55563),
    c = t(937615),
    s = t(73346),
    d = t(594914),
    u = t(231338),
    f = t(388032),
    m = t(424215);
function p(e) {
    var n, t, a, i;
    let { sku: o } = e;
    if (null == o) return null;
    let s = (0, c.T4)(
            null != (a = null == (n = o.price) ? void 0 : n.amount) ? a : 0,
            null != (i = null == (t = o.price) ? void 0 : t.currency) ? i : u.pK.USD,
        ),
        p = (e) => {
            let { isGift: n } = e;
            (0, d.P)(o, { isGift: n });
        };
    return (0, l.jsxs)("div", {
        className: m.detailsContainer,
        children: [
            (0, l.jsxs)("div", {
                className: m.titleDescriptionContainer,
                children: [
                    (0, l.jsx)(r.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        lineClamp: 2,
                        children: o.name,
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: o.description,
                    }),
                ],
            }),
            (0, l.jsx)(r.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: s,
            }),
            (0, l.jsxs)("div", {
                className: m.buttonsContainer,
                children: [
                    (0, l.jsx)(r.zxk, {
                        variant: "primary",
                        onClick: () => {
                            p({ isGift: !1 });
                        },
                        text: f.intl.string(f.t.boqtTE),
                        fullWidth: !0,
                    }),
                    (0, l.jsx)(r.zxk, {
                        icon: r.OgN,
                        variant: "secondary",
                        onClick: () => {
                            p({ isGift: !0 });
                        },
                        text: f.intl.string(f.t.QAZA5e),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { socialLayerTenantMetadata: n, selectedCarouselItemIndex: t, applicationId: a } = e;
    if (null == n || n.carouselItems.length <= t) return null;
    let i = n.carouselItems[t];
    if (null == i) return null;
    let o = null != i.labelIconAssetId ? (0, s._W)(a, i.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: m.labelIconContainer,
        children: [
            null != o &&
                (0, l.jsx)("img", {
                    className: m.labelIcon,
                    src: o,
                    alt: i.label,
                }),
            (0, l.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: i.label,
            }),
        ],
    });
}
function b(e) {
    var n, t;
    let { transitionState: c, returnRef: s, skuId: d, applicationId: u } = e,
        f = (0, i.e7)([o.Z], () => o.Z.get(d)),
        b = null == f || null == (n = f.tenantMetadata) ? void 0 : n.socialLayer,
        [h, C] = a.useState(0);
    return null == b
        ? null
        : (0, l.jsx)(r.Y0X, {
              transitionState: c,
              "hide-shadow": !0,
              parentComponent: "SocialLayerStorefrontProductDetailsModal",
              className: m.modalRoot,
              size: r.CgR.DYNAMIC,
              returnRef: s,
              children: (0, l.jsx)(r.hzk, {
                  className: m.modalContent,
                  children: (0, l.jsxs)("div", {
                      className: m.infoContainer,
                      children: [
                          (0, l.jsx)(x, {
                              applicationId: u,
                              socialLayerTenantMetadata:
                                  null == f || null == (t = f.tenantMetadata) ? void 0 : t.socialLayer,
                              selectedCarouselItemIndex: h,
                          }),
                          (0, l.jsx)(p, { sku: f }),
                      ],
                  }),
              }),
          });
}
