n.d(t, { default: () => O }), n(539854), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(143941),
    u = n(602733),
    d = n(55563),
    m = n(551428),
    p = n(572004),
    h = n(937615),
    g = n(73346),
    C = n(164670),
    b = n(411935),
    f = n(210218),
    _ = n(705338),
    x = n(882508),
    v = n(594914),
    I = n(939716),
    j = n(231338),
    P = n(388032),
    k = n(424215);
function S(e) {
    var t, n, r, l;
    let { sku: i, guildId: o, shouldShowShopLink: c, onClose: u } = e;
    if (null == i) return null;
    let d = (0, h.T4)(
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
                children: d,
            }),
            (0, a.jsxs)("div", {
                className: k.buttonsContainer,
                children: [
                    (0, a.jsx)(s.Button, {
                        variant: "primary",
                        onClick: () => {
                            (0, v.P)(i, { isGift: !1 });
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
                                          (0, _.Z)({ guildId: o }), u();
                                      },
                                      text: P.intl.string(P.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(s.Button, {
                                icon: s.OgN,
                                variant: "secondary",
                                onClick: () => {
                                    (0, v.P)(i, { isGift: !0 });
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
                              src: (0, g._W)(t, e, I.Q, "mp4"),
                              videoThumbnailSrc: (0, g._W)(t, e, I.Q, "webp"),
                              thumbnailSrc:
                                  null != l.thumbnailAssetId ? (0, g._W)(t, l.thumbnailAssetId, I.Q, "webp") : void 0,
                              backgroundSrc:
                                  null != l.backgroundAssetId ? (0, g._W)(t, l.backgroundAssetId, I.Q, "webp") : void 0,
                          })
                        : r.push({
                              type: "image",
                              src: (0, g._W)(t, e, I.Q, "webp"),
                              thumbnailSrc:
                                  null != l.thumbnailAssetId ? (0, g._W)(t, l.thumbnailAssetId, I.Q, "webp") : void 0,
                              backgroundSrc:
                                  null != l.backgroundAssetId ? (0, g._W)(t, l.backgroundAssetId, I.Q, "webp") : void 0,
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
        : (0, a.jsx)(I.Z, {
              className: k.carousel,
              items: c,
              onItemChange: d,
          });
}
function w(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let r = null != t.labelIconAssetId ? (0, g._W)(n, t.labelIconAssetId) : null;
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
function N(e) {
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
    var t;
    let { transitionState: n, returnRef: l, skuId: h, applicationId: g, guildId: _, isStorefront: v, onClose: I } = e,
        j = (0, o.e7)([f.Z], () => f.Z.getStorefrontData(_), [_]),
        O = (0, o.e7)([m.Z], () => m.Z.isFetchingForSKU(h)),
        E = (0, o.e7)([d.Z], () => d.Z.get(h)),
        [R, Z] = r.useState(null);
    (0, u.p2)(),
        r.useEffect(() => {
            null == _ || null == h || m.Z.isFetchingForSKU(h) || (0, b.y)(_, h);
        }, [_, h]);
    let L = r.useCallback(() => {
        null != E &&
            (0, p.JG)((0, C.wQ)(_, E), () =>
                (0, s.showToast)((0, s.createToast)(P.intl.string(P.t["L/PwZf"]), s.ToastType.SUCCESS)),
            );
    }, [_, E]);
    return null == (null == E || null == (t = E.tenantMetadata) ? void 0 : t.socialLayer) ||
        (null == j ? void 0 : j.storefront) == null
        ? O
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
                                  selectedCarouselItem: R,
                              }),
                              (0, a.jsx)(S, {
                                  sku: E,
                                  guildId: _,
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
                                  applicationId: g,
                                  storefront: j.storefront,
                                  onSelectedCarouselItemChange: Z,
                              }),
                              (0, a.jsxs)("div", {
                                  className: k.modalHeaderButtonsContainer,
                                  children: [
                                      (0, a.jsx)(N, {
                                          onClick: L,
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
                                              nuxGraphic: (0, x.c)(E),
                                          }),
                                      (0, a.jsx)(N, {
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
