n.d(t, {
    default: () => G,
}),
    n(896048),
    n(321073),
    n(228524);
var r = n(627968),
    l = n(64700),
    a = n(310784),
    i = n.n(a),
    o = n(503698),
    s = n.n(o),
    c = n(311907),
    d = n(397927),
    u = n(964486),
    _ = n(736653),
    m = n(793574),
    b = n(688810),
    p = n(654107),
    h = n(139146),
    f = n(427209),
    g = n(594832),
    O = n(67480),
    y = n(328968),
    j = n(954571),
    v = n(580630),
    C = n(371794),
    A = n(871123),
    x = n(733391),
    E = n(832163),
    S = n(44724),
    T = n(486318),
    I = n(345938),
    P = n(533406),
    k = n(953590),
    N = n(995393),
    w = n(188275),
    R = n(652215),
    U = n(818348),
    D = n(985018),
    L = n(88465);

function M(e) {
    var t, n, a, i;
    let { sku: o, guildId: s, shouldShowShopLink: u, onClose: _, trackPDPClick: b } = e,
        p = null == o ? void 0 : o.id,
        h = (0, c.bG)([E.A], () => (null != p ? E.A.getNormalizedSKUEligibility(p) : void 0), [p]),
        f = l.useCallback(() => {
            null != o &&
                (b(N.Jq.BUY_BUTTON),
                (0, P.a)(
                    o,
                    {
                        isGift: !1,
                    },
                    {
                        analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: s,
                    },
                ));
        }, [o, b, s]),
        g = l.useCallback(() => {
            (0, S.X)({
                guildId: s,
            });
        }, [s]),
        O = l.useCallback(() => {
            b(N.Jq.VISIT_SHOP),
                (0, S.default)({
                    guildId: s,
                }),
                _();
        }, [s, _, b]),
        y = l.useCallback(() => {
            null != o &&
                (b(N.Jq.GIFT_BUTTON),
                (0, P.a)(
                    o,
                    {
                        isGift: !0,
                    },
                    {
                        analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                    },
                ));
        }, [o, b]);
    if (null == o) return null;
    let j = (0, v.$g)(
        null != (t = null == (a = o.price) ? void 0 : a.amount) ? t : 0,
        null != (n = null == (i = o.price) ? void 0 : i.currency) ? n : U.Yr.USD,
    );
    return (0, r.jsxs)("div", {
        className: L.wt,
        children: [
            (0, r.jsxs)("div", {
                className: L.AX,
                children: [
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-xl/bold",
                        color: "text-strong",
                        children: o.name,
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: o.description,
                    }),
                ],
            }),
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: j,
            }),
            (0, r.jsxs)("div", {
                className: L.NC,
                children: [
                    (0, r.jsx)(d.Button, {
                        variant: "primary",
                        onClick: f,
                        text: h ? D.intl.string(D.t.boqtTA) : D.intl.string(D.t.cg0M2H),
                        fullWidth: !0,
                        disabled: !h,
                    }),
                    (0, r.jsxs)(d.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            u
                                ? (0, r.jsx)(d.Button, {
                                      icon: d.U1X,
                                      variant: "secondary",
                                      onMouseDown: g,
                                      onClick: O,
                                      text: D.intl.string(D.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, r.jsx)(d.Button, {
                                icon: d.okO,
                                variant: "secondary",
                                onClick: y,
                                text: D.intl.string(D.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

function B(e) {
    let { sku: t, applicationId: n, storefront: a, onSelectedCarouselItemChange: i, isMuted: o, trackPDPClick: s } = e,
        [c, d] = l.useState([]),
        [u, _] = l.useState([]),
        m = l.useCallback(
            (e) => {
                var t;
                let n = u.findIndex((t) => t === e);
                null == i || i(null != (t = c[n]) ? t : null);
            },
            [i, c, u],
        );
    return (l.useEffect(() => {
        var e, r, l;
        let [i, o] = (function (e, t, n) {
            let r = [],
                l = [];
            if (null == e || 0 === e.length) return [r, l];
            for (let a of e) {
                let e = null != a.assetId ? n[a.assetId] : null;
                null != e &&
                    (r.push(a),
                    e.mime_type.startsWith("video/")
                        ? l.push({
                              type: "video",
                              src: (0, C.YE)(t, e, k.B, "mp4"),
                              videoThumbnailSrc: (0, C.YE)(t, e, k.B, "webp"),
                              thumbnailSrc:
                                  null != a.thumbnailAssetId ? (0, C.YE)(t, a.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != a.backgroundAssetId ? (0, C.YE)(t, a.backgroundAssetId, k.B, A.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, C.YE)(t, e, k.B, "webp"),
                              thumbnailSrc:
                                  null != a.thumbnailAssetId ? (0, C.YE)(t, a.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != a.backgroundAssetId ? (0, C.YE)(t, a.backgroundAssetId, k.B, A.pV) : void 0,
                          }));
            }
            return [r, l];
        })(
            null !=
                (e =
                    null == t || null == (l = t.tenantMetadata) || null == (r = l.socialLayer)
                        ? void 0
                        : r.carouselItems)
                ? e
                : [],
            n,
            a.assets,
        );
        d(i), _(o);
    }, [t, a.assets, n]),
    0 === u.length)
        ? null
        : (0, r.jsx)(k.A, {
              className: L.Dk,
              items: u,
              onItemChange: m,
              isMuted: o,
              onTrackClick: s,
          });
}

function F(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, C.YE)(n, t.labelIconAssetId) : null;
    return (0, r.jsxs)("div", {
        className: L.HI,
        children: [
            null != l &&
                (0, r.jsx)(
                    "img",
                    {
                        className: L.IX,
                        src: l,
                        alt: t.label,
                    },
                    l,
                ),
            (0, r.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                children: t.label,
            }),
        ],
    });
}

function H(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, r.jsx)(d.DUT, {
        onClick: t,
        className: L.jU,
        "aria-label": l,
        role: "button",
        children: n,
    });
}

function G(e) {
    var t;
    let {
            transitionState: n,
            returnRef: a,
            skuId: o,
            applicationId: m,
            guildId: v,
            isStorefront: A,
            analyticsLocations: S,
            analyticsContext: P,
            onClose: k,
        } = e,
        { analyticsLocations: U } = (0, b.Ay)(null != S ? S : []),
        G = (0, c.bG)([E.A], () => E.A.getStorefrontData(v), [v]),
        W = (0, c.bG)([y.A], () => y.A.isFetchingForSKU(o)),
        Y = (0, d.Mwr)((0, _.Ay)()),
        [q, V] = l.useState(!0),
        X = (0, c.bG)([O.A], () => O.A.get(o)),
        [z, J] = l.useState(null),
        $ = (function (e, t) {
            let n =
                    (null == t ? void 0 : t.labelIconAssetId) != null
                        ? (0, C.YE)(e, null == t ? void 0 : t.labelIconAssetId)
                        : null,
                [r, a] = (0, p.rh)(n, "#000000"),
                o = l.useMemo(() => {
                    let e = i()(r).darken(1);
                    return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(
                        e.alpha(0.25).hex(),
                        " 0%, transparent 100%)",
                    );
                }, [r]);
            return null != n && "#000000" !== r ? o : void 0;
        })(m, z);
    (0, g.pE)(),
        (0, u.Ay)(() => {
            j.default.track(R.HAw.OPEN_MODAL, {
                location_stack: U,
                type: w.Nh,
                sku_id: o,
                application_id: m,
            });
        });
    let K = l.useCallback(
        (e) => {
            j.default.track(R.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == P ? void 0 : P.sessionId,
                sku_id: o,
                guild_id: null == P ? void 0 : P.guildId,
                cta_type: e,
                location_stack: U,
            });
        },
        [P, o, U],
    );
    l.useEffect(() => {
        null == v || null == o || y.A.isFetchingForSKU(o) || (0, x.qf)(v, o);
    }, [v, o]);
    let Q = l.useCallback(() => {
            null != X &&
                (K(N.Jq.FORWARD_BUTTON),
                (0, I.d)({
                    sku: X,
                    guildId: v,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: U,
                    analyticsContext: P,
                }));
        }, [X, v, K, U, P]),
        Z = l.useCallback(() => {
            K(N.Jq.WISHLIST_BUTTON);
        }, [K]),
        ee = l.useCallback(() => {
            V(!q), K(N.Jq.MUTE_BUTTON);
        }, [q, K]);
    if (
        null == (null == X || null == (t = X.tenantMetadata) ? void 0 : t.socialLayer) ||
        (null == G ? void 0 : G.storefront) == null
    )
        return W ? (0, r.jsx)(d.y$y, {}) : null;
    let et =
            null != G.storefront.logoAssetId
                ? (0, C.YE)(G.storefront.applicationId, G.storefront.logoAssetId, 75)
                : null,
        en =
            null != G.storefront.lightThemeLogoAssetId
                ? (0, C.YE)(G.storefront.applicationId, G.storefront.lightThemeLogoAssetId, 75)
                : null,
        er = null;
    return (
        (er = Y ? (null != et ? et : en) : null != en ? en : et),
        (0, r.jsx)(d.EOs, {
            transitionState: n,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: L.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: a,
            children: (0, r.jsxs)(d.$mQ, {
                className: L.jE,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.op,
                        style: {
                            background: $,
                        },
                        children: [
                            (0, r.jsx)("div", {
                                className: L.r$,
                                children:
                                    null != er
                                        ? (0, r.jsx)("img", {
                                              className: L.wm,
                                              src: er,
                                              alt: "",
                                          })
                                        : null,
                            }),
                            (0, r.jsx)(F, {
                                applicationId: m,
                                selectedCarouselItem: z,
                            }),
                            (0, r.jsx)(M, {
                                sku: X,
                                guildId: v,
                                shouldShowShopLink: !A,
                                onClose: k,
                                trackPDPClick: K,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: L.Cf,
                        children: [
                            (0, r.jsx)(B, {
                                sku: X,
                                applicationId: m,
                                storefront: G.storefront,
                                onSelectedCarouselItemChange: J,
                                isMuted: q,
                                trackPDPClick: K,
                            }),
                            (0, r.jsxs)("div", {
                                className: L.V7,
                                children: [
                                    null != X &&
                                        (0, r.jsx)(h._, {
                                            skuId: X.id,
                                            isCardHovered: !0,
                                            className: s()(L.jU, L.ij),
                                            nuxGraphic: (0, T.N)(X),
                                            onClick: Z,
                                        }),
                                    (0, r.jsx)(H, {
                                        onClick: Q,
                                        ariaLabel: D.intl.string(D.t.Ej3B3Y),
                                        children: (0, r.jsx)(f.A, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, r.jsx)(H, {
                                        onClick: ee,
                                        ariaLabel: q ? D.intl.string(D.t.YqAjXy) : D.intl.string(D.t.w4m945),
                                        children: q
                                            ? (0, r.jsx)(d._RO, {
                                                  size: "refresh_sm",
                                                  color: "currentColor",
                                              })
                                            : (0, r.jsx)(d.HKD, {
                                                  size: "refresh_sm",
                                                  color: "currentColor",
                                              }),
                                    }),
                                    (0, r.jsx)(H, {
                                        onClick: k,
                                        ariaLabel: D.intl.string(D.t.cpT0Cq),
                                        children: (0, r.jsx)(d.d$L, {
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
