n.d(t, { default: () => H }), n(388685), n(539854), n(953529);
var l = n(54381),
    a = n(473749),
    r = n(688619),
    o = n.n(r),
    i = n(120356),
    s = n.n(i),
    c = n(442837),
    u = n(481060),
    d = n(493773),
    m = n(410030),
    f = n(100527),
    b = n(906732),
    p = n(220082),
    g = n(143941),
    C = n(245216),
    h = n(602733),
    _ = n(55563),
    I = n(551428),
    x = n(626135),
    v = n(937615),
    k = n(73346),
    P = n(164670),
    j = n(411935),
    S = n(210218),
    y = n(705338),
    N = n(882508),
    O = n(813687),
    T = n(594914),
    E = n(939716),
    R = n(181268),
    w = n(582113),
    L = n(981631),
    A = n(231338),
    B = n(388032),
    Z = n(226421);
function W(e) {
    var t, n, r, o;
    let { sku: i, guildId: s, shouldShowShopLink: c, onClose: d, trackPDPClick: m } = e,
        b = a.useCallback(() => {
            null != i &&
                (m(R.o4.BUY_BUTTON),
                (0, T.P)(
                    i,
                    { isGift: !1 },
                    { analyticsLocations: [f.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON] },
                ));
        }, [i, m]),
        p = a.useCallback(() => {
            (0, y.eagerNavigateToSocialLayerStorefront)({ guildId: s });
        }, [s]),
        g = a.useCallback(() => {
            m(R.o4.VISIT_SHOP), (0, y.default)({ guildId: s }), d();
        }, [s, d, m]),
        C = a.useCallback(() => {
            null != i &&
                (m(R.o4.GIFT_BUTTON),
                (0, T.P)(
                    i,
                    { isGift: !0 },
                    { analyticsLocations: [f.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [i, m]);
    if (null == i) return null;
    let h = (0, v.T4)(
        null != (r = null == (t = i.price) ? void 0 : t.amount) ? r : 0,
        null != (o = null == (n = i.price) ? void 0 : n.currency) ? o : A.pK.USD,
    );
    return (0, l.jsxs)("div", {
        className: Z.detailsContainer,
        children: [
            (0, l.jsxs)("div", {
                className: Z.titleDescriptionContainer,
                children: [
                    (0, l.jsx)(u.Heading, {
                        variant: "heading-xl/bold",
                        color: "text-strong",
                        children: i.name,
                    }),
                    (0, l.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: i.description,
                    }),
                ],
            }),
            (0, l.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: h,
            }),
            (0, l.jsxs)("div", {
                className: Z.buttonsContainer,
                children: [
                    (0, l.jsx)(u.Button, {
                        variant: "primary",
                        onClick: b,
                        text: B.intl.string(B.t.boqtTA),
                        fullWidth: !0,
                    }),
                    (0, l.jsxs)(u.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            c
                                ? (0, l.jsx)(u.Button, {
                                      icon: u.EOn,
                                      variant: "secondary",
                                      onMouseDown: p,
                                      onClick: g,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, l.jsx)(u.Button, {
                                icon: u.OgN,
                                variant: "secondary",
                                onClick: C,
                                text: B.intl.string(B.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { sku: t, applicationId: n, storefront: r, onSelectedCarouselItemChange: o, isMuted: i, trackPDPClick: s } = e,
        [c, u] = a.useState([]),
        [d, m] = a.useState([]),
        f = a.useCallback(
            (e) => {
                var t;
                let n = d.findIndex((t) => t === e);
                null == o || o(null != (t = c[n]) ? t : null);
            },
            [o, c, d],
        );
    return (a.useEffect(() => {
        var e, l, a;
        let [o, i] = (function (e, t, n) {
            let l = [],
                a = [];
            if (null == e || 0 === e.length) return [l, a];
            for (let r of e) {
                let e = null != r.assetId ? n[r.assetId] : null;
                null != e &&
                    (l.push(r),
                    e.mime_type.startsWith("video/")
                        ? a.push({
                              type: "video",
                              src: (0, k._W)(t, e, E.Q, "mp4"),
                              videoThumbnailSrc: (0, k._W)(t, e, E.Q, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, E.Q, P._Z) : void 0,
                          })
                        : a.push({
                              type: "image",
                              src: (0, k._W)(t, e, E.Q, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, E.Q, P._Z) : void 0,
                          }));
            }
            return [l, a];
        })(
            null !=
                (a =
                    null == t || null == (l = t.tenantMetadata) || null == (e = l.socialLayer)
                        ? void 0
                        : e.carouselItems)
                ? a
                : [],
            n,
            r.assets,
        );
        u(o), m(i);
    }, [t, r.assets, n]),
    0 === d.length)
        ? null
        : (0, l.jsx)(E.Z, {
              className: Z.carousel,
              items: d,
              onItemChange: f,
              isMuted: i,
              onTrackClick: s,
          });
}
function U(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, k._W)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: Z.labelIconContainer,
        children: [
            null != a &&
                (0, l.jsx)(
                    "img",
                    {
                        className: Z.labelIcon,
                        src: a,
                        alt: t.label,
                    },
                    a,
                ),
            (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                children: t.label,
            }),
        ],
    });
}
function M(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(u.P3F, {
        onClick: t,
        className: Z.modalHeaderButton,
        "aria-label": a,
        role: "button",
        children: n,
    });
}
function H(e) {
    var t;
    let {
            transitionState: n,
            returnRef: r,
            skuId: i,
            applicationId: f,
            guildId: v,
            isStorefront: P,
            analyticsLocations: y,
            analyticsContext: T,
            onClose: E,
        } = e,
        { analyticsLocations: A } = (0, b.ZP)(null != y ? y : []),
        H = (0, c.e7)([S.Z], () => S.Z.getStorefrontData(v), [v]),
        F = (0, c.e7)([I.Z], () => I.Z.isFetchingForSKU(i)),
        z = (0, u.wjy)((0, m.ZP)()),
        [Q, Y] = a.useState(!0),
        G = (0, c.e7)([_.Z], () => _.Z.get(i)),
        [V, X] = a.useState(null),
        K = (function (e, t) {
            let n =
                    (null == t ? void 0 : t.labelIconAssetId) != null
                        ? (0, k._W)(e, null == t ? void 0 : t.labelIconAssetId)
                        : null,
                [l, r] = (0, p.Cf)(n, "#000000"),
                i = a.useMemo(() => {
                    let e = o()(l).darken(1);
                    return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(
                        e.alpha(0.25).hex(),
                        " 0%, transparent 100%)",
                    );
                }, [l]);
            return null != n && "#000000" !== l ? i : void 0;
        })(f, V);
    (0, h.p2)(),
        (0, d.ZP)(() => {
            x.default.track(L.rMx.OPEN_MODAL, {
                location_stack: A,
                type: w.n8,
                sku_id: i,
                application_id: f,
            });
        });
    let q = a.useCallback(
        (e) => {
            x.default.track(L.rMx.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == T ? void 0 : T.sessionId,
                sku_id: i,
                guild_id: null == T ? void 0 : T.guildId,
                cta_type: e,
                location_stack: A,
            });
        },
        [T, i, A],
    );
    a.useEffect(() => {
        null == v || null == i || I.Z.isFetchingForSKU(i) || (0, j.y)(v, i);
    }, [v, i]);
    let $ = a.useCallback(() => {
            null != G &&
                (q(R.o4.FORWARD_BUTTON),
                (0, O.b)({
                    sku: G,
                    guildId: v,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: A,
                    analyticsContext: T,
                }));
        }, [G, v, q, A, T]),
        J = a.useCallback(() => {
            q(R.o4.WISHLIST_BUTTON);
        }, [q]),
        ee = a.useCallback(() => {
            Y(!Q), q(R.o4.MUTE_BUTTON);
        }, [Q, q]);
    if (
        null == (null == G || null == (t = G.tenantMetadata) ? void 0 : t.socialLayer) ||
        (null == H ? void 0 : H.storefront) == null
    )
        return F ? (0, l.jsx)(u.$jN, {}) : null;
    let et =
            null != H.storefront.logoAssetId
                ? (0, k._W)(H.storefront.applicationId, H.storefront.logoAssetId, 75)
                : null,
        en =
            null != H.storefront.lightThemeLogoAssetId
                ? (0, k._W)(H.storefront.applicationId, H.storefront.lightThemeLogoAssetId, 75)
                : null,
        el = null;
    return (
        (el = z ? (null != et ? et : en) : null != en ? en : et),
        (0, l.jsx)(u.Y0X, {
            transitionState: n,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: Z.modalRoot,
            size: u.CgR.DYNAMIC,
            returnRef: r,
            children: (0, l.jsxs)(u.hzk, {
                className: Z.modalContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: Z.infoContainer,
                        style: { background: K },
                        children: [
                            (0, l.jsx)("div", {
                                className: Z.logoContainer,
                                children:
                                    null != el
                                        ? (0, l.jsx)("img", {
                                              className: Z.logo,
                                              src: el,
                                              alt: "",
                                          })
                                        : null,
                            }),
                            (0, l.jsx)(U, {
                                applicationId: f,
                                selectedCarouselItem: V,
                            }),
                            (0, l.jsx)(W, {
                                sku: G,
                                guildId: v,
                                shouldShowShopLink: !P,
                                onClose: E,
                                trackPDPClick: q,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: Z.carouselContainer,
                        children: [
                            (0, l.jsx)(D, {
                                sku: G,
                                applicationId: f,
                                storefront: H.storefront,
                                onSelectedCarouselItemChange: X,
                                isMuted: Q,
                                trackPDPClick: q,
                            }),
                            (0, l.jsxs)("div", {
                                className: Z.modalHeaderButtonsContainer,
                                children: [
                                    null != G &&
                                        (0, l.jsx)(g.s, {
                                            skuId: G.id,
                                            isCardHovered: !0,
                                            className: s()(Z.modalHeaderButton, Z.wishlistButton),
                                            nuxGraphic: (0, N.c)(G),
                                            onClick: J,
                                        }),
                                    (0, l.jsx)(M, {
                                        onClick: $,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, l.jsx)(C.Z, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, l.jsx)(M, {
                                        onClick: ee,
                                        ariaLabel: Q ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: Q
                                            ? (0, l.jsx)(u.OyP, {
                                                  size: "refresh_sm",
                                                  color: "currentColor",
                                              })
                                            : (0, l.jsx)(u.gj8, {
                                                  size: "refresh_sm",
                                                  color: "currentColor",
                                              }),
                                    }),
                                    (0, l.jsx)(M, {
                                        onClick: E,
                                        ariaLabel: B.intl.string(B.t.cpT0Cq),
                                        children: (0, l.jsx)(u.Uz9, {
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
