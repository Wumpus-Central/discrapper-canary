n.d(t, { default: () => O }), n(953529), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(143941),
    u = n(703656),
    d = n(602733),
    m = n(55563),
    p = n(551428),
    g = n(572004),
    h = n(937615),
    C = n(73346),
    _ = n(164670),
    b = n(411935),
    f = n(210218),
    x = n(594914),
    v = n(939716),
    I = n(981631),
    j = n(231338),
    P = n(388032),
    k = n(424215);
function S(e) {
    var t, n, r, l;
    let { sku: i, guildId: o, shouldShowShopLink: c, onClose: d } = e;
    if (null == i) return null;
    let m = (0, h.T4)(
        null != (r = null == (t = i.price) ? void 0 : t.amount) ? r : 0,
        null != (l = null == (n = i.price) ? void 0 : n.currency) ? l : j.pK.USD,
    );
    return (0, a.jsxs)("div", {
        className: k.detailsContainer,
        children: [
            (0, a.jsxs)("div", {
                className: k.titleDescriptionContainer,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        lineClamp: 2,
                        children: i.name,
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: i.description,
                    }),
                ],
            }),
            (0, a.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: m,
            }),
            (0, a.jsxs)("div", {
                className: k.buttonsContainer,
                children: [
                    (0, a.jsx)(s.Button, {
                        variant: "primary",
                        onClick: () => {
                            (0, x.P)(i, { isGift: !1 });
                        },
                        text: P.intl.string(P.t.boqtTA),
                        fullWidth: !0,
                    }),
                    (0, a.jsxs)(s.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            c
                                ? (0, a.jsx)(s.Button, {
                                      icon: s.EOn,
                                      variant: "secondary",
                                      onClick: () => {
                                          (0, u.uL)(I.Z5c.CHANNELS_GAME_SHOP(o)), d();
                                      },
                                      text: P.intl.string(P.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(s.Button, {
                                icon: s.OgN,
                                variant: "secondary",
                                onClick: () => {
                                    (0, x.P)(i, { isGift: !0 });
                                },
                                text: P.intl.string(P.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    var t, n, r;
    let { sku: l, applicationId: i, storefront: o } = e;
    if (null == l) return null;
    let s = null == (n = l.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.carouselItems;
    if (null == s || 0 === s.length) return null;
    let c =
        ((r = o.assets),
        null == s || 0 === s.length
            ? []
            : s
                  .map((e) => {
                      let t = null != e.assetId ? r[e.assetId] : null;
                      return null == t
                          ? null
                          : t.mime_type.startsWith("video/")
                            ? {
                                  type: "video",
                                  src: (0, C._W)(i, t, v.Q, "mp4"),
                                  videoThumbnailSrc: (0, C._W)(i, t, v.Q, "webp"),
                                  thumbnailSrc:
                                      null != e.thumbnailAssetId
                                          ? (0, C._W)(i, e.thumbnailAssetId, v.Q, "webp")
                                          : void 0,
                                  backgroundSrc:
                                      null != e.backgroundAssetId
                                          ? (0, C._W)(i, e.backgroundAssetId, v.Q, "webp")
                                          : void 0,
                              }
                            : {
                                  type: "image",
                                  src: (0, C._W)(i, t, v.Q, "webp"),
                                  thumbnailSrc:
                                      null != e.thumbnailAssetId
                                          ? (0, C._W)(i, e.thumbnailAssetId, v.Q, "webp")
                                          : void 0,
                                  backgroundSrc:
                                      null != e.backgroundAssetId
                                          ? (0, C._W)(i, e.backgroundAssetId, v.Q, "webp")
                                          : void 0,
                              };
                  })
                  .filter((e) => null != e));
    return 0 === c.length
        ? null
        : (0, a.jsx)(v.Z, {
              className: k.carousel,
              items: c,
          });
}
function N(e) {
    let { socialLayerTenantMetadata: t, selectedCarouselItemIndex: n, applicationId: r } = e;
    if (null == t || t.carouselItems.length <= n) return null;
    let l = t.carouselItems[n];
    if (null == l) return null;
    let i = null != l.labelIconAssetId ? (0, C._W)(r, l.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: k.labelIconContainer,
        children: [
            null != i &&
                (0, a.jsx)("img", {
                    className: k.labelIcon,
                    src: i,
                    alt: l.label,
                }),
            (0, a.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: l.label,
            }),
        ],
    });
}
function w(e) {
    let { onClick: t, children: n, ariaLabel: r } = e;
    return (0, a.jsx)(s.P3F, {
        onClick: t,
        className: k.modalHeaderButton,
        "aria-label": r,
        role: "button",
        children: n,
    });
}
function O(e) {
    var t, n;
    let { transitionState: l, returnRef: u, skuId: h, applicationId: C, guildId: x, isStorefront: v, onClose: I } = e,
        j = (0, o.e7)([f.Z], () => f.Z.getStorefrontData(x), [x]),
        O = (0, o.e7)([p.Z], () => p.Z.isFetchingForSKU(h)),
        E = (0, o.e7)([m.Z], () => m.Z.get(h)),
        [R, L] = r.useState(0);
    (0, d.p2)(),
        r.useEffect(() => {
            null == x || null == h || p.Z.isFetchingForSKU(h) || (0, b.y)(x, h);
        }, [x, h]);
    let Z = r.useCallback(() => {
        null != E &&
            (0, g.JG)((0, _.wQ)(x, E), () =>
                (0, s.showToast)((0, s.createToast)(P.intl.string(P.t["L/PwZf"]), s.ToastType.SUCCESS)),
            );
    }, [x, E]);
    return null == (null == E || null == (t = E.tenantMetadata) ? void 0 : t.socialLayer) ||
        (null == j ? void 0 : j.storefront) == null
        ? O
            ? (0, a.jsx)(s.$jN, {})
            : null
        : (0, a.jsx)(s.Y0X, {
              transitionState: l,
              "hide-shadow": !0,
              parentComponent: "SocialLayerStorefrontProductDetailsModal",
              className: k.modalRoot,
              size: s.CgR.DYNAMIC,
              returnRef: u,
              children: (0, a.jsxs)(s.hzk, {
                  className: k.modalContent,
                  children: [
                      (0, a.jsxs)("div", {
                          className: k.infoContainer,
                          children: [
                              (0, a.jsx)(N, {
                                  applicationId: C,
                                  socialLayerTenantMetadata:
                                      null == E || null == (n = E.tenantMetadata) ? void 0 : n.socialLayer,
                                  selectedCarouselItemIndex: R,
                              }),
                              (0, a.jsx)(S, {
                                  sku: E,
                                  guildId: x,
                                  shouldShowShopLink: !v,
                                  onClose: I,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: k.carouselContainer,
                          children: [
                              (0, a.jsx)(y, {
                                  sku: E,
                                  applicationId: C,
                                  storefront: j.storefront,
                              }),
                              (0, a.jsxs)("div", {
                                  className: k.modalHeaderButtonsContainer,
                                  children: [
                                      (0, a.jsx)(w, {
                                          onClick: Z,
                                          ariaLabel: P.intl.string(P.t.Ej3B3Y),
                                          children: (0, a.jsx)(s.xPt, {
                                              size: "refresh_sm",
                                              color: "currentColor",
                                          }),
                                      }),
                                      null != E &&
                                          (0, a.jsx)(c.s, {
                                              skuId: E.id,
                                              isCardHovered: !0,
                                              className: i()(k.modalHeaderButton, k.wishlistButton),
                                          }),
                                      (0, a.jsx)(w, {
                                          onClick: I,
                                          ariaLabel: P.intl.string(P.t.cpT0Cq),
                                          children: (0, a.jsx)(s.Uz9, {
                                              size: "refresh_sm",
                                              color: "currentColor",
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
