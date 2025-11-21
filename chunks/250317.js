n.d(t, { default: () => A }), n(388685), n(539854), n(953529);
var r = n(54381),
    a = n(473749),
    l = n(688619),
    o = n.n(l),
    i = n(120356),
    s = n.n(i),
    c = n(442837),
    u = n(481060),
    d = n(410030),
    m = n(100527),
    p = n(220082),
    g = n(143941),
    h = n(602733),
    C = n(55563),
    _ = n(551428),
    f = n(572004),
    b = n(937615),
    x = n(73346),
    I = n(164670),
    v = n(411935),
    j = n(210218),
    P = n(705338),
    S = n(882508),
    k = n(594914),
    y = n(939716),
    N = n(231338),
    w = n(388032),
    O = n(424215);
function R(e) {
    var t, n, a, l;
    let { sku: o, guildId: i, shouldShowShopLink: s, onClose: c } = e;
    if (null == o) return null;
    let d = (0, b.T4)(
        null != (a = null == (t = o.price) ? void 0 : t.amount) ? a : 0,
        null != (l = null == (n = o.price) ? void 0 : n.currency) ? l : N.pK.USD,
    );
    return (0, r.jsxs)("div", {
        className: O.detailsContainer,
        children: [
            (0, r.jsxs)("div", {
                className: O.titleDescriptionContainer,
                children: [
                    (0, r.jsx)(u.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        lineClamp: 2,
                        children: o.name,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: o.description,
                    }),
                ],
            }),
            (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: d,
            }),
            (0, r.jsxs)("div", {
                className: O.buttonsContainer,
                children: [
                    (0, r.jsx)(u.Button, {
                        variant: "primary",
                        onClick: () => {
                            (0, k.P)(
                                o,
                                { isGift: !1 },
                                { analyticsLocations: [m.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON] },
                            );
                        },
                        text: w.intl.string(w.t.boqtTA),
                        fullWidth: !0,
                    }),
                    (0, r.jsxs)(u.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            s
                                ? (0, r.jsx)(u.Button, {
                                      icon: u.EOn,
                                      variant: "secondary",
                                      onClick: () => {
                                          (0, P.Z)({ guildId: i }), c();
                                      },
                                      text: w.intl.string(w.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, r.jsx)(u.Button, {
                                icon: u.OgN,
                                variant: "secondary",
                                onClick: () => {
                                    (0, k.P)(
                                        o,
                                        { isGift: !0 },
                                        {
                                            analyticsLocations: [
                                                m.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON,
                                            ],
                                        },
                                    );
                                },
                                text: w.intl.string(w.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { sku: t, applicationId: n, storefront: l, onSelectedCarouselItemChange: o, isMuted: i } = e,
        [s, c] = a.useState([]),
        [u, d] = a.useState([]),
        m = a.useCallback(
            (e) => {
                var t;
                let n = u.findIndex((t) => t === e);
                null == o || o(null != (t = s[n]) ? t : null);
            },
            [o, s, u],
        );
    return (a.useEffect(() => {
        var e, r, a;
        let [o, i] = (function (e, t, n) {
            let r = [],
                a = [];
            if (null == e || 0 === e.length) return [r, a];
            for (let l of e) {
                let e = null != l.assetId ? n[l.assetId] : null;
                null != e &&
                    (r.push(l),
                    e.mime_type.startsWith("video/")
                        ? a.push({
                              type: "video",
                              src: (0, x._W)(t, e, y.Q, "mp4"),
                              videoThumbnailSrc: (0, x._W)(t, e, y.Q, "webp"),
                              thumbnailSrc:
                                  null != l.thumbnailAssetId ? (0, x._W)(t, l.thumbnailAssetId, y.Q, "webp") : void 0,
                              backgroundSrc:
                                  null != l.backgroundAssetId ? (0, x._W)(t, l.backgroundAssetId, y.Q, "webp") : void 0,
                          })
                        : a.push({
                              type: "image",
                              src: (0, x._W)(t, e, y.Q, "webp"),
                              thumbnailSrc:
                                  null != l.thumbnailAssetId ? (0, x._W)(t, l.thumbnailAssetId, y.Q, "webp") : void 0,
                              backgroundSrc:
                                  null != l.backgroundAssetId ? (0, x._W)(t, l.backgroundAssetId, y.Q, "webp") : void 0,
                          }));
            }
            return [r, a];
        })(
            null !=
                (a =
                    null == t || null == (r = t.tenantMetadata) || null == (e = r.socialLayer)
                        ? void 0
                        : e.carouselItems)
                ? a
                : [],
            n,
            l.assets,
        );
        c(o), d(i);
    }, [t, l.assets, n]),
    0 === u.length)
        ? null
        : (0, r.jsx)(y.Z, {
              className: O.carousel,
              items: u,
              onItemChange: m,
              isMuted: i,
          });
}
function E(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, x._W)(n, t.labelIconAssetId) : null;
    return (0, r.jsxs)("div", {
        className: O.labelIconContainer,
        children: [
            null != a &&
                (0, r.jsx)(
                    "img",
                    {
                        className: O.labelIcon,
                        src: a,
                        alt: t.label,
                    },
                    a,
                ),
            (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: t.label,
            }),
        ],
    });
}
function L(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, r.jsx)(u.P3F, {
        onClick: t,
        className: O.modalHeaderButton,
        "aria-label": a,
        role: "button",
        children: n,
    });
}
function A(e) {
    var t;
    let { transitionState: n, returnRef: l, skuId: i, applicationId: m, guildId: b, isStorefront: P, onClose: k } = e,
        y = (0, c.e7)([j.Z], () => j.Z.getStorefrontData(b), [b]),
        N = (0, c.e7)([_.Z], () => _.Z.isFetchingForSKU(i)),
        A = (0, u.wjy)((0, d.ZP)()),
        [Z, W] = a.useState(!0),
        B = (0, c.e7)([C.Z], () => C.Z.get(i)),
        [D, H] = a.useState(null),
        z = (function (e, t) {
            let n =
                    (null == t ? void 0 : t.labelIconAssetId) != null
                        ? (0, x._W)(e, null == t ? void 0 : t.labelIconAssetId)
                        : null,
                [r, l] = (0, p.Cf)(n, "#000000"),
                i = a.useMemo(() => {
                    let e = o()(r).darken(1);
                    return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(
                        e.alpha(0.25).hex(),
                        " 0%, transparent 100%)",
                    );
                }, [r]);
            return null != n && "#000000" !== r ? i : void 0;
        })(m, D);
    (0, h.p2)(),
        a.useEffect(() => {
            null == b || null == i || _.Z.isFetchingForSKU(i) || (0, v.y)(b, i);
        }, [b, i]);
    let M = a.useCallback(() => {
        null != B &&
            (0, f.JG)((0, I.wQ)(b, B), () =>
                (0, u.showToast)((0, u.createToast)(w.intl.string(w.t["L/PwZf"]), u.ToastType.SUCCESS)),
            );
    }, [b, B]);
    if (
        null == (null == B || null == (t = B.tenantMetadata) ? void 0 : t.socialLayer) ||
        (null == y ? void 0 : y.storefront) == null
    )
        return N ? (0, r.jsx)(u.$jN, {}) : null;
    let F =
            null != y.storefront.logoAssetId
                ? (0, x._W)(y.storefront.applicationId, y.storefront.logoAssetId, 75)
                : null,
        U =
            null != y.storefront.lightThemeLogoAssetId
                ? (0, x._W)(y.storefront.applicationId, y.storefront.lightThemeLogoAssetId, 75)
                : null,
        Q = null;
    return (
        (Q = A ? (null != F ? F : U) : null != U ? U : F),
        (0, r.jsx)(u.Y0X, {
            transitionState: n,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: O.modalRoot,
            size: u.CgR.DYNAMIC,
            returnRef: l,
            children: (0, r.jsxs)(u.hzk, {
                className: O.modalContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.infoContainer,
                        style: { background: z },
                        children: [
                            (0, r.jsx)("div", {
                                className: O.logoContainer,
                                children:
                                    null != Q
                                        ? (0, r.jsx)("img", {
                                              className: O.logo,
                                              src: Q,
                                              alt: "",
                                          })
                                        : null,
                            }),
                            (0, r.jsx)(E, {
                                applicationId: m,
                                selectedCarouselItem: D,
                            }),
                            (0, r.jsx)(R, {
                                sku: B,
                                guildId: b,
                                shouldShowShopLink: !P,
                                onClose: k,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: O.carouselContainer,
                        children: [
                            (0, r.jsx)(T, {
                                sku: B,
                                applicationId: m,
                                storefront: y.storefront,
                                onSelectedCarouselItemChange: H,
                                isMuted: Z,
                            }),
                            (0, r.jsxs)("div", {
                                className: O.modalHeaderButtonsContainer,
                                children: [
                                    null != B &&
                                        (0, r.jsx)(g.s, {
                                            skuId: B.id,
                                            isCardHovered: !0,
                                            className: s()(O.modalHeaderButton, O.wishlistButton),
                                            nuxGraphic: (0, S.c)(B),
                                        }),
                                    (0, r.jsx)(L, {
                                        onClick: M,
                                        ariaLabel: w.intl.string(w.t.Ej3B3Y),
                                        children: (0, r.jsx)(u.xPt, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, r.jsx)(L, {
                                        onClick: () => W(!Z),
                                        ariaLabel: Z ? w.intl.string(w.t.YqAjXy) : w.intl.string(w.t.w4m945),
                                        children: Z
                                            ? (0, r.jsx)(u.OyP, {
                                                  size: "refresh_sm",
                                                  color: "currentColor",
                                              })
                                            : (0, r.jsx)(u.gj8, {
                                                  size: "refresh_sm",
                                                  color: "currentColor",
                                              }),
                                    }),
                                    (0, r.jsx)(L, {
                                        onClick: k,
                                        ariaLabel: w.intl.string(w.t.cpT0Cq),
                                        children: (0, r.jsx)(u.Uz9, {
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
        })
    );
}
