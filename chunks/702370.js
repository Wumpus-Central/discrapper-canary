n.d(t, { default: () => eV }), n(388685), n(314940), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    p = n(311570),
    f = n(399606),
    v = n(780384),
    g = n(481060),
    b = n(809206),
    h = n(727637),
    P = n(410030),
    x = n(607070),
    j = n(100527),
    O = n(906732),
    _ = n(570908),
    C = n(786761),
    y = n(3148),
    w = n(739566),
    T = n(753206),
    S = n(4242),
    E = n(333867),
    I = n(767714),
    N = n(678135),
    A = n(876917),
    k = n(643879),
    R = n(484459),
    L = n(825102),
    Z = n(275388),
    B = n(25990),
    D = n(594174),
    M = n(626135),
    U = n(63063),
    F = n(74538),
    G = n(937615),
    z = n(335131),
    H = n(1870),
    V = n(429368),
    W = n(884697),
    K = n(635552),
    q = n(83479),
    Y = n(290175),
    X = n(724994),
    J = n(328456),
    Q = n(330349),
    $ = n(556971),
    ee = n(390698),
    et = n(141011),
    en = n(525518),
    er = n(168020),
    ei = n(426171),
    el = n(224068),
    ea = n(813083),
    eo = n(680942),
    es = n(558060),
    ec = n(539598),
    eu = n(237031),
    ed = n(372654),
    em = n(38914),
    ep = n(259673),
    ef = n(508925),
    ev = n(953405),
    eg = n(453713),
    eb = n(325834),
    eh = n(616066),
    eP = n(22267),
    ex = n(332246),
    ej = n(58201),
    eO = n(445794),
    e_ = n(794324),
    eC = n(361110),
    ey = n(29121),
    ew = n(956472),
    eT = n(832149),
    eS = n(215023),
    eE = n(981631),
    eI = n(474936),
    eN = n(231338),
    eA = n(388032),
    ek = n(188336);
function eR(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eL(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eZ = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, h.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: l ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                    children: (0, r.jsx)(eh.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: l ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
                    ref: a,
                    children: (0, r.jsx)(A.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: a,
                    className: ek.nameplatePreviewContainer,
                    children: (0, r.jsx)(eP.Z, {
                        className: ek.nameplatePreview,
                        nameplate: t,
                        isHighlighted: o,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "large",
                    }),
                }),
            )
            .otherwise(() => null);
    },
    eB = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            l = t.items.length;
        return (0, r.jsx)("div", {
            className: ek.bundlePreviewContainer,
            children: (0, r.jsx)(g.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        g.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: ek.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eZ, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(g.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ek.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, " ", s],
                                    }),
                                ],
                            }),
                        },
                        a,
                    );
                }),
            }),
        });
    },
    eD = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eB, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eS.o0)(t.skuId)
              ? (0, r.jsx)(ef.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eZ, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eM = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  className: ek.learnMoreLink,
                  children: eA.intl.format(eA.t.Q1scdH, {
                      helpdeskArticle: U.Z.getArticleURL(eE.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eU = (e) => {
        let {
                product: t,
                user: n,
                category: l,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: m,
                previewingVariantIndexProps: h,
                selectedVariantIndex: x,
                tab: j,
                activeBundleSlide: _,
                variantType: C,
            } = e,
            { analyticsLocations: y } = (0, O.ZP)(),
            w = F.ZP.canUseCollectibles(n),
            { previewingVariantIndex: T } = h,
            S = (0, ex.N)(t, T),
            N = (0, ej.W)(t, x);
        s()(null != N, "Selected product should not be null");
        let A = (0, X.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: R } = (0, X.L)(N),
            { isDisabled: B, disabledReason: D } = (0, Y.G)(N.skuId),
            M = (0, W.ne)({
                product: N,
                isPartiallyOwnedBundle: R,
                isPurchased: k,
            }),
            U = (0, f.e7)([H.Z], () => H.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            V = (0, P.ZP)(),
            Q = (0, v.wj)(V),
            $ = (0, W.G1)(N),
            et = (0, W.ql)(N, eE.tuJ.DEFAULT),
            en = (null == et ? void 0 : et.amount) === 0,
            { firstAvatarDecoration: er } = (0, J.Rj)(null != S ? S : N),
            ei = i.useMemo(() => (0, W.BH)(N, w), [N, w]),
            { handleUseNow: ed, isApplying: em } = (0, K.W)({
                product: N,
                onSuccess: c,
            }),
            ep = (0, ey.To)(N),
            { enabled: ef } = (0, L.WX)({ location: "collectibles_shop_product_details_modal" }),
            eh = (0, eO.Iw)(t),
            eP = null != eh,
            {
                checkoutEligiblePrices: e_,
                isOrbExclusive: eC,
                hasSufficientOrbs: eZ,
            } = (0, ew.Ip)({
                product: N,
                isPremiumUser: w,
                tab: j,
                hasDiscountOffer: eP,
            }),
            eB = i.useCallback(
                () =>
                    (0, E.Z)({
                        skuId: N.skuId,
                        analyticsLocations: y,
                        variantsReturnStyle: p.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eN.dG)()),
                    }),
                [y, c, N.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, b.cV)(er), () => (0, b.cV)(void 0);
        }, [er]);
        let eU = (0, q.G)(N);
        return (0, r.jsxs)("div", {
            className: ek.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: ek.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: l,
                        display: ea.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eD, {
                    product: null != S ? S : N,
                    user: n,
                    activeSlide: _,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ek.description,
                            children: [
                                (0, r.jsx)(el.Z, {
                                    product: N,
                                    isDarkText: !Q,
                                    isOrbExclusive: eC,
                                }),
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: ek.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: eU,
                                }),
                                (0, r.jsx)(eM, { skuId: N.skuId }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: R,
                                      })
                                    : $
                                      ? (0, r.jsx)(g.Text, {
                                            variant: "text-md/semibold",
                                            className: ek.priceTag,
                                            children: eA.intl.string(eA.t.rt69oq),
                                        })
                                      : ef
                                        ? (0, r.jsx)(ev.a, {
                                              prices: e_,
                                              product: N,
                                              isPremiumUser: w,
                                              discount: ei,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: B,
                                              discountOfferAmount: eh,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ek.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: N,
                                                      discount: ei,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || eP,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eh,
                                                  }),
                                                  w || eP ? null : (0, r.jsx)(ec.Z, { product: N }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(g.Rny, {
                            children:
                                C === eS.Ch.DEFAULT
                                    ? (0, r.jsx)(eg.P, {
                                          selectedVariantIndex: x,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: h,
                                          className: ek.variantsSwitch,
                                      })
                                    : (0, r.jsx)(eb.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: h,
                                          className: ek.variantsThumbnail,
                                          selectedVariantIndex: x,
                                      }),
                        }),
                        null !== D &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                className: ek.disabledReason,
                                children: D,
                            }),
                        (0, r.jsx)(g.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if ($ && !w && !en) {
                                    let e;
                                    return (
                                        (e = eA.intl.string(eA.t.sEAnVF)),
                                        (0, r.jsx)(I.Z, {
                                            subscriptionTier: eI.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eu.v,
                                            onSubscribeModalClose: () => {
                                                (0, eu.T)({
                                                    product: N,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: y,
                                                    variantType: C,
                                                });
                                            },
                                        })
                                    );
                                }
                                return M
                                    ? k
                                        ? (0, r.jsx)(g.zxk, {
                                              variant: "primary",
                                              onClick: ed,
                                              loading: em,
                                              text: eA.intl.string(eA.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(g.zxk, {
                                                loading: U,
                                                loadingStartedLabel: eA.intl.string(eA.t["TYw+9v"]),
                                                loadingFinishedLabel: eA.intl.string(eA.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(N.skuId),
                                                        c(),
                                                        (0, eT.Z)({
                                                            product: N,
                                                            analyticsLocations: y,
                                                            purchaseType: eS.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eA.intl.string(eA.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: e_.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eN.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, Z.qA)({
                                                                        skuId: N.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: p.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eT.Z)({
                                                                                    product: N,
                                                                                    analyticsLocations: y,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eS.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: y,
                                                                    });
                                                                },
                                                                i = B
                                                                    ? eA.intl.string(eA.t.cTdr39)
                                                                    : eA.intl.string(eA.t.zqh7ZG),
                                                                l = !eZ || B,
                                                                a = eA.intl.formatToPlainString(eA.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                o = l ? "".concat(a, ", ").concat(i) : a;
                                                            return (0, r.jsx)(g.ua7, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (i) =>
                                                                    (0, r.jsx)(
                                                                        g.zxk,
                                                                        eL(eR({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: l,
                                                                            "aria-label": o,
                                                                            text: eA.intl.format(eA.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(g.aQr, {
                                                                                        className: ek.orbIconAligned,
                                                                                        size: "sm",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let i = !$ && !en && !u.tq && !eC && M,
                                                        l = (0, W.x6)(N)
                                                            ? eA.intl.string(eA.t.V1AWw8)
                                                            : N.type === d.Z.PROFILE_EFFECT
                                                              ? eA.intl.string(eA.t.kAeDcH)
                                                              : N.type === d.Z.NAMEPLATE
                                                                ? eA.intl.string(eA.t.H3vhqa)
                                                                : eA.intl.string(eA.t.AQ0Ven);
                                                    return (
                                                        eP
                                                            ? (l = eA.intl.formatToPlainString(eA.t["5U5RBw"], {
                                                                  discountOfferAmount: eh,
                                                              }))
                                                            : ef &&
                                                              (l = eA.intl.formatToPlainString(eA.t["cNSL/v"], {
                                                                  price: (0, G.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(g.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(g.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: l,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(eo.Z, {
                                                                        primary: n,
                                                                        product: N,
                                                                        onSuccess: c,
                                                                    }),
                                                            ],
                                                        })
                                                    );
                                                }),
                                            })
                                    : null;
                            })(),
                        }),
                        (0, r.jsx)(g.Text, {
                            className: a()(ek.disclaimer, !Q && ek.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !k ? eA.intl.string(eA.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eF = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(_.Z, {
                avatar: (0, r.jsx)(g.qEK, {
                    src: t.avatarSrc,
                    size: g.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: g.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(ek.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, S.w$)();
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eA.intl.string(eA.t.SZeUdX),
            children: (0, r.jsxs)(g.Rny, {
                children: [
                    (0, r.jsx)(eF, {
                        user: i.mallow,
                        innerClassName: ek.userBlue,
                    }),
                    (0, r.jsxs)(g.Text, {
                        variant: "text-sm/semibold",
                        className: ek.nameplateRightPanePreviewSectionGroup,
                        children: [eA.intl.string(eA.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eF, {
                        user: i.phibi,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: ek.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eP.Z, {
                            className: ek.nameplatePreview,
                            innerClassName: ek.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                        }),
                    }),
                    (0, r.jsx)(eF, {
                        user: i.locke,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsxs)(g.Text, {
                        variant: "text-sm/semibold",
                        className: ek.nameplateRightPanePreviewSectionGroup,
                        children: [eA.intl.string(eA.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eF, {
                        user: i.boom,
                        innerClassName: ek.userGreen,
                    }),
                    (0, r.jsx)(eF, {
                        user: i.cherry,
                        innerClassName: ek.userGreen,
                    }),
                ],
            }),
        });
    },
    ez = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, f.e7)([x.Z], () => x.Z.useReducedMotion),
            s = F.ZP.canUsePremiumProfileCustomization(n),
            c = (0, f.cj)([B.Z], () => B.Z.getAllPending()),
            { pendingAvatar: u } = c,
            m = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(c, ["pendingAvatar"]),
            p = (0, k.SD)({
                userId: n.id,
                image: u,
            }),
            v = t.type === d.Z.AVATAR_DECORATION,
            [g] = t.items,
            { firstAvatarDecoration: b, firstProfileEffect: h, firstNameplate: P } = (0, J.Rj)(t),
            j = null != h,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            N.Z,
                            eL(eR({}, m), {
                                pendingAvatar: p,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: b,
                                pendingProfileEffectId: null == h ? void 0 : h.id,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(eH, { user: n }),
                    ],
                }),
            _ = (e) =>
                (0, r.jsx)(eG, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === d.Z.BUNDLE) {
            if (!(0, Q.L)(t))
                return (0, r.jsx)("div", {
                    className: ek.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: ek.combinedPreviewContent,
                        children: O(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    c = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === d.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: a()(ek.nameplatePreviewContainerInner, l && c ? ek.sliding : ""),
                          children: _(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(ek.profileEffectPreviewsContainerInner, l && c ? ek.sliding : ""),
                          children: O(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: ek.nameplatePreviewContainerInner,
                  children: _(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == g ? void 0 : g.type) === d.Z.AVATAR_DECORATION
                          ? ek.previewsContainerInner
                          : ek.profileEffectPreviewsContainerInner,
                  children: O(),
              });
    },
    eH = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.e5)(
                    eL(
                        eR(
                            {},
                            (0, y.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eA.intl.string(eA.t.d5YwKy),
                            }),
                        ),
                        {
                            state: eE.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eA.intl.string(eA.t["TN+ZvL"]),
            children: (0, r.jsx)(g.Rny, {
                children: (0, r.jsxs)(g.Zbd, {
                    className: ek.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            T.Z,
                            {
                                className: ek.mockMessage,
                                author: (0, w.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: ek.mockInput,
                            children: [
                                (0, r.jsx)(g.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ek.mockInputButton,
                                }),
                                (0, r.jsx)(g.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ek.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eV = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: l,
                category: a,
                returnRef: o,
                analyticsSource: c,
                analyticsLocations: u,
                shouldCheckoutWithOrbs: p,
                tab: v,
                variantType: b = eS.Ch.DEFAULT,
            } = e,
            h = (0, f.e7)([D.default], () => D.default.getCurrentUser()),
            P = (0, eC.f)(l),
            { previewingVariantIndex: x } = P,
            _ = (0, f.e7)([H.Z], () => H.Z.purchases),
            C = (0, V.o)(l, _),
            y = (0, ex.N)(l, x),
            w = (0, ej.W)(l, C);
        s()(null != w, "Selected product should not be null");
        let { analyticsLocations: T } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(w.skuId);
        let S = (0, e_.kc)(a);
        i.useEffect(() => {
            null != h && (0, R.Z)(h.id, h.getAvatarURL(void 0, 80));
        }, [h]);
        let E = i.useMemo(() => (0, W.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            M.default.track(eE.rMx.OPEN_MODAL, {
                type: eE.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: T,
                sku_id: w.skuId,
                product_type: E,
            }),
                w.items.forEach(z.oK);
        }, [c, T, w.skuId, w.items, E]);
        let I = (0, Z.r9)(),
            N = t === g.Dvm.EXITING,
            A = (0, eO.t0)(l),
            k = null == A ? void 0 : A.amount,
            L = i.useMemo(() => ((0, W.x6)(w) ? w.items.length : 0), [w]),
            { activeSlide: B, isTransitioning: U } = (0, $.b)({
                slideCount: L,
                intervalMs: 5000,
            });
        if (null == h) return null;
        let F = (0, eS.ZS)(a.skuId);
        return (0, r.jsx)(O.Gt, {
            value: T,
            children: (0, r.jsxs)(g.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: ek.modalRoot,
                returnRef: o,
                transitionState: t,
                size: g.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(g.hzk, {
                        "data-migration-pending": !0,
                        className: ek.modalContent,
                        children: [
                            (0, r.jsx)(eU, {
                                user: h,
                                product: l,
                                category: a,
                                onClose: n,
                                previewingVariantIndexProps: P,
                                selectedVariantIndex: C,
                                shouldCheckoutWithOrbs: p,
                                tab: v,
                                activeBundleSlide: B,
                                variantType: b,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    w.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? ek.fractionalNitroPreviewContainer
                                        : w.type === d.Z.AVATAR_DECORATION
                                          ? ek.collectiblePreviewsContainerWithChat
                                          : ek.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)(et.Z, {
                                        asset: S,
                                        size: (0, ed.ML)(540),
                                        className: ek.categoryBanner,
                                        categoryBannerOverride: F,
                                    }),
                                    (0, eS.o0)(l.skuId)
                                        ? l.skuId === eS.Vt.ORB_PROFILE_BADGE
                                            ? I || N
                                                ? null
                                                : (0, r.jsx)(ep.M, { user: h })
                                            : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(em.q, {})
                                              : (0, r.jsx)(ef.b, {
                                                    product: l,
                                                    className: ek.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(ez, {
                                              user: h,
                                              product: null != y ? y : w,
                                              activeBundleSlide: B,
                                              isTransitioning: U,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: ek.pdpControls,
                                        children: [
                                            (0, r.jsx)(en.n, {
                                                skuId: w.skuId,
                                                tab: v,
                                            }),
                                            (0, r.jsx)(g.hU, {
                                                "aria-label": eA.intl.string(eA.t.cpT0Cg),
                                                onClick: n,
                                                icon: g.Uz9,
                                                variant: "overlay-secondary",
                                                size: "sm",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != k &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)(g.mzw, {
                                "data-migration-pending": !0,
                                className: ek.modalFooter,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                        alt: "",
                                        className: ek.modalFooterBackgroundImg,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: ek.modalFooterContentContainer,
                                        children: [
                                            (0, r.jsx)(g.Text, {
                                                variant: "text-sm/semibold",
                                                className: ek.modalFooterText,
                                                children: eA.intl.format(eA.t["78ph4e"], { discountOfferAmount: k }),
                                            }),
                                            (null == A ? void 0 : A.expiresAt) != null &&
                                                (0, r.jsx)(er.R, { endDate: A.expiresAt }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        });
    };
