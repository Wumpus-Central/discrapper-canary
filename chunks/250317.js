n.d(t, { default: () => M }), n(388685), n(539854), n(953529);
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
    p = n(100527),
    g = n(906732),
    _ = n(220082),
    C = n(143941),
    h = n(602733),
    f = n(55563),
    b = n(551428),
    I = n(626135),
    x = n(572004),
    v = n(937615),
    k = n(73346),
    P = n(164670),
    S = n(411935),
    j = n(210218),
    y = n(705338),
    N = n(882508),
    T = n(594914),
    O = n(939716),
    E = n(181268),
    w = n(582113),
    L = n(981631),
    R = n(231338),
    A = n(388032),
    B = n(424215);
function Z(e) {
    var t, n, r, o;
    let { sku: i, guildId: s, shouldShowShopLink: c, onClose: d, trackPDPClick: m } = e,
        g = a.useCallback(() => {
            null != i &&
                (m(E.o4.BUY_BUTTON),
                (0, T.P)(
                    i,
                    { isGift: !1 },
                    { analyticsLocations: [p.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON] },
                ));
        }, [i, m]),
        _ = a.useCallback(() => {
            (0, y.eagerNavigateToSocialLayerStorefront)({ guildId: s });
        }, [s]),
        C = a.useCallback(() => {
            m(E.o4.VISIT_SHOP), (0, y.default)({ guildId: s }), d();
        }, [s, d, m]),
        h = a.useCallback(() => {
            null != i &&
                (m(E.o4.GIFT_BUTTON),
                (0, T.P)(
                    i,
                    { isGift: !0 },
                    { analyticsLocations: [p.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [i, m]);
    if (null == i) return null;
    let f = (0, v.T4)(
        null != (r = null == (t = i.price) ? void 0 : t.amount) ? r : 0,
        null != (o = null == (n = i.price) ? void 0 : n.currency) ? o : R.pK.USD,
    );
    return (0, l.jsxs)("div", {
        className: B.detailsContainer,
        children: [
            (0, l.jsxs)("div", {
                className: B.titleDescriptionContainer,
                children: [
                    (0, l.jsx)(u.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: i.name,
                    }),
                    (0, l.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: i.description,
                    }),
                ],
            }),
            (0, l.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: f,
            }),
            (0, l.jsxs)("div", {
                className: B.buttonsContainer,
                children: [
                    (0, l.jsx)(u.Button, {
                        variant: "primary",
                        onClick: g,
                        text: A.intl.string(A.t.boqtTA),
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
                                      onMouseDown: _,
                                      onClick: C,
                                      text: A.intl.string(A.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, l.jsx)(u.Button, {
                                icon: u.OgN,
                                variant: "secondary",
                                onClick: h,
                                text: A.intl.string(A.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let { sku: t, applicationId: n, storefront: r, onSelectedCarouselItemChange: o, isMuted: i, trackPDPClick: s } = e,
        [c, u] = a.useState([]),
        [d, m] = a.useState([]),
        p = a.useCallback(
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
                              src: (0, k._W)(t, e, O.Q, "mp4"),
                              videoThumbnailSrc: (0, k._W)(t, e, O.Q, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, O.Q, P._Z) : void 0,
                          })
                        : a.push({
                              type: "image",
                              src: (0, k._W)(t, e, O.Q, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, O.Q, P._Z) : void 0,
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
        : (0, l.jsx)(O.Z, {
              className: B.carousel,
              items: d,
              onItemChange: p,
              isMuted: i,
              onTrackClick: s,
          });
}
function D(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, k._W)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: B.labelIconContainer,
        children: [
            null != a &&
                (0, l.jsx)(
                    "img",
                    {
                        className: B.labelIcon,
                        src: a,
                        alt: t.label,
                    },
                    a,
                ),
            (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-primary",
                children: t.label,
            }),
        ],
    });
}
function U(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(u.P3F, {
        onClick: t,
        className: B.modalHeaderButton,
        "aria-label": a,
        role: "button",
        children: n,
    });
}
function M(e) {
    var t;
    let {
            transitionState: n,
            returnRef: r,
            skuId: i,
            applicationId: p,
            guildId: v,
            isStorefront: y,
            analyticsLocations: T,
            analyticsContext: O,
            onClose: R,
        } = e,
        { analyticsLocations: M } = (0, g.ZP)(null != T ? T : []),
        H = (0, c.e7)([j.Z], () => j.Z.getStorefrontData(v), [v]),
        F = (0, c.e7)([b.Z], () => b.Z.isFetchingForSKU(i)),
        z = (0, u.wjy)((0, m.ZP)()),
        [Q, Y] = a.useState(!0),
        G = (0, c.e7)([f.Z], () => f.Z.get(i)),
        [V, K] = a.useState(null),
        X = (function (e, t) {
            let n =
                    (null == t ? void 0 : t.labelIconAssetId) != null
                        ? (0, k._W)(e, null == t ? void 0 : t.labelIconAssetId)
                        : null,
                [l, r] = (0, _.Cf)(n, "#000000"),
                i = a.useMemo(() => {
                    let e = o()(l).darken(1);
                    return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(
                        e.alpha(0.25).hex(),
                        " 0%, transparent 100%)",
                    );
                }, [l]);
            return null != n && "#000000" !== l ? i : void 0;
        })(p, V);
    (0, h.p2)(),
        (0, d.ZP)(() => {
            I.default.track(L.rMx.OPEN_MODAL, {
                location_stack: M,
                type: w.n8,
                sku_id: i,
                application_id: p,
            });
        });
    let q = a.useCallback(
        (e) => {
            I.default.track(L.rMx.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == O ? void 0 : O.sessionId,
                sku_id: i,
                guild_id: null == O ? void 0 : O.guildId,
                cta_type: e,
                location_stack: M,
            });
        },
        [O, i, M],
    );
    a.useEffect(() => {
        null == v || null == i || b.Z.isFetchingForSKU(i) || (0, S.y)(v, i);
    }, [v, i]);
    let J = a.useCallback(() => {
            null != G &&
                (q(E.o4.COPY_LINK_BUTTON),
                (0, x.JG)((0, P.wQ)(v, G), () =>
                    (0, u.showToast)((0, u.createToast)(A.intl.string(A.t["L/PwZf"]), u.ToastType.SUCCESS)),
                ));
        }, [v, G, q]),
        $ = a.useCallback(() => {
            q(E.o4.WISHLIST_BUTTON);
        }, [q]),
        ee = a.useCallback(() => {
            Y(!Q), q(E.o4.MUTE_BUTTON);
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
            className: B.modalRoot,
            size: u.CgR.DYNAMIC,
            returnRef: r,
            children: (0, l.jsxs)(u.hzk, {
                className: B.modalContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: B.infoContainer,
                        style: { background: X },
                        children: [
                            (0, l.jsx)("div", {
                                className: B.logoContainer,
                                children:
                                    null != el
                                        ? (0, l.jsx)("img", {
                                              className: B.logo,
                                              src: el,
                                              alt: "",
                                          })
                                        : null,
                            }),
                            (0, l.jsx)(D, {
                                applicationId: p,
                                selectedCarouselItem: V,
                            }),
                            (0, l.jsx)(Z, {
                                sku: G,
                                guildId: v,
                                shouldShowShopLink: !y,
                                onClose: R,
                                trackPDPClick: q,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: B.carouselContainer,
                        children: [
                            (0, l.jsx)(W, {
                                sku: G,
                                applicationId: p,
                                storefront: H.storefront,
                                onSelectedCarouselItemChange: K,
                                isMuted: Q,
                                trackPDPClick: q,
                            }),
                            (0, l.jsxs)("div", {
                                className: B.modalHeaderButtonsContainer,
                                children: [
                                    null != G &&
                                        (0, l.jsx)(C.s, {
                                            skuId: G.id,
                                            isCardHovered: !0,
                                            className: s()(B.modalHeaderButton, B.wishlistButton),
                                            nuxGraphic: (0, N.c)(G),
                                            onClick: $,
                                        }),
                                    (0, l.jsx)(U, {
                                        onClick: J,
                                        ariaLabel: A.intl.string(A.t.Ej3B3Y),
                                        children: (0, l.jsx)(u.xPt, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, l.jsx)(U, {
                                        onClick: ee,
                                        ariaLabel: Q ? A.intl.string(A.t.YqAjXy) : A.intl.string(A.t.w4m945),
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
                                    (0, l.jsx)(U, {
                                        onClick: R,
                                        ariaLabel: A.intl.string(A.t.cpT0Cq),
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
