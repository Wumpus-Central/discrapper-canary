n.d(t, { default: () => R }), n(539854), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(143941),
    d = n(602733),
    m = n(55563),
    p = n(551428),
    h = n(572004),
    g = n(937615),
    C = n(73346),
    _ = n(164670),
    b = n(411935),
    f = n(210218),
    x = n(705338),
    v = n(882508),
    I = n(594914),
    P = n(939716),
    j = n(231338),
    S = n(388032),
    k = n(424215);
function y(e) {
    var t, n, r, l;
    let { sku: i, guildId: o, shouldShowShopLink: u, onClose: d } = e;
    if (null == i) return null;
    let m = (0, g.T4)(
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
                            (0, I.P)(
                                i,
                                { isGift: !1 },
                                { analyticsLocations: [c.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON] },
                            );
                        },
                        text: S.intl.string(S.t.boqtTA),
                        fullWidth: !0,
                    }),
                    (0, a.jsxs)(s.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            u
                                ? (0, a.jsx)(s.Button, {
                                      icon: s.EOn,
                                      variant: "secondary",
                                      onClick: () => {
                                          (0, x.Z)({ guildId: o }), d();
                                      },
                                      text: S.intl.string(S.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(s.Button, {
                                icon: s.OgN,
                                variant: "secondary",
                                onClick: () => {
                                    (0, I.P)(
                                        i,
                                        { isGift: !0 },
                                        {
                                            analyticsLocations: [
                                                c.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON,
                                            ],
                                        },
                                    );
                                },
                                text: S.intl.string(S.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { sku: t, applicationId: n, storefront: l, onSelectedCarouselItemChange: i } = e,
        [o, s] = r.useState([]),
        [c, u] = r.useState([]),
        d = r.useCallback(
            (e) => {
                var t;
                let n = c.findIndex((t) => t === e);
                null == i || i(null != (t = o[n]) ? t : null);
            },
            [i, o, c],
        );
    return (r.useEffect(() => {
        var e, a, r;
        let [i, o] = (function (e, t, n) {
            let a = [],
                r = [];
            if (null == e || 0 === e.length) return [a, r];
            for (let l of e) {
                let e = null != l.assetId ? n[l.assetId] : null;
                null != e &&
                    (a.push(l),
                    e.mime_type.startsWith("video/")
                        ? r.push({
                              type: "video",
                              src: (0, C._W)(t, e, P.Q, "mp4"),
                              videoThumbnailSrc: (0, C._W)(t, e, P.Q, "webp"),
                              thumbnailSrc:
                                  null != l.thumbnailAssetId ? (0, C._W)(t, l.thumbnailAssetId, P.Q, "webp") : void 0,
                              backgroundSrc:
                                  null != l.backgroundAssetId ? (0, C._W)(t, l.backgroundAssetId, P.Q, "webp") : void 0,
                          })
                        : r.push({
                              type: "image",
                              src: (0, C._W)(t, e, P.Q, "webp"),
                              thumbnailSrc:
                                  null != l.thumbnailAssetId ? (0, C._W)(t, l.thumbnailAssetId, P.Q, "webp") : void 0,
                              backgroundSrc:
                                  null != l.backgroundAssetId ? (0, C._W)(t, l.backgroundAssetId, P.Q, "webp") : void 0,
                          }));
            }
            return [a, r];
        })(
            null !=
                (r =
                    null == t || null == (a = t.tenantMetadata) || null == (e = a.socialLayer)
                        ? void 0
                        : e.carouselItems)
                ? r
                : [],
            n,
            l.assets,
        );
        s(i), u(o);
    }, [t, l.assets, n]),
    0 === c.length)
        ? null
        : (0, a.jsx)(P.Z, {
              className: k.carousel,
              items: c,
              onItemChange: d,
          });
}
function w(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let r = null != t.labelIconAssetId ? (0, C._W)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: k.labelIconContainer,
        children: [
            null != r &&
                (0, a.jsx)(
                    "img",
                    {
                        className: k.labelIcon,
                        src: r,
                        alt: t.label,
                    },
                    r,
                ),
            (0, a.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: t.label,
            }),
        ],
    });
}
function O(e) {
    let { onClick: t, children: n, ariaLabel: r } = e;
    return (0, a.jsx)(s.P3F, {
        onClick: t,
        className: k.modalHeaderButton,
        "aria-label": r,
        role: "button",
        children: n,
    });
}
function R(e) {
    var t;
    let { transitionState: n, returnRef: l, skuId: c, applicationId: g, guildId: C, isStorefront: x, onClose: I } = e,
        P = (0, o.e7)([f.Z], () => f.Z.getStorefrontData(C), [C]),
        j = (0, o.e7)([p.Z], () => p.Z.isFetchingForSKU(c)),
        R = (0, o.e7)([m.Z], () => m.Z.get(c)),
        [E, T] = r.useState(null);
    (0, d.p2)(),
        r.useEffect(() => {
            null == C || null == c || p.Z.isFetchingForSKU(c) || (0, b.y)(C, c);
        }, [C, c]);
    let L = r.useCallback(() => {
        null != R &&
            (0, h.JG)((0, _.wQ)(C, R), () =>
                (0, s.showToast)((0, s.createToast)(S.intl.string(S.t["L/PwZf"]), s.ToastType.SUCCESS)),
            );
    }, [C, R]);
    return null == (null == R || null == (t = R.tenantMetadata) ? void 0 : t.socialLayer) ||
        (null == P ? void 0 : P.storefront) == null
        ? j
            ? (0, a.jsx)(s.$jN, {})
            : null
        : (0, a.jsx)(s.Y0X, {
              transitionState: n,
              "hide-shadow": !0,
              parentComponent: "SocialLayerStorefrontProductDetailsModal",
              className: k.modalRoot,
              size: s.CgR.DYNAMIC,
              returnRef: l,
              children: (0, a.jsxs)(s.hzk, {
                  className: k.modalContent,
                  children: [
                      (0, a.jsxs)("div", {
                          className: k.infoContainer,
                          children: [
                              (0, a.jsx)(w, {
                                  applicationId: g,
                                  selectedCarouselItem: E,
                              }),
                              (0, a.jsx)(y, {
                                  sku: R,
                                  guildId: C,
                                  shouldShowShopLink: !x,
                                  onClose: I,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: k.carouselContainer,
                          children: [
                              (0, a.jsx)(N, {
                                  sku: R,
                                  applicationId: g,
                                  storefront: P.storefront,
                                  onSelectedCarouselItemChange: T,
                              }),
                              (0, a.jsxs)("div", {
                                  className: k.modalHeaderButtonsContainer,
                                  children: [
                                      (0, a.jsx)(O, {
                                          onClick: L,
                                          ariaLabel: S.intl.string(S.t.Ej3B3Y),
                                          children: (0, a.jsx)(s.xPt, {
                                              size: "refresh_sm",
                                              color: "currentColor",
                                          }),
                                      }),
                                      null != R &&
                                          (0, a.jsx)(u.s, {
                                              skuId: R.id,
                                              isCardHovered: !0,
                                              className: i()(k.modalHeaderButton, k.wishlistButton),
                                              nuxGraphic: (0, v.c)(R),
                                          }),
                                      (0, a.jsx)(O, {
                                          onClick: I,
                                          ariaLabel: S.intl.string(S.t.cpT0Cq),
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
