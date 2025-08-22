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
    f = n(311570),
    p = n(399606),
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
    S = n(753206),
    T = n(4242),
    E = n(333867),
    I = n(767714),
    N = n(678135),
    A = n(876917),
    k = n(643879),
    R = n(484459),
    L = n(822857),
    Z = n(960919),
    B = n(275388),
    D = n(25990),
    M = n(594174),
    U = n(626135),
    F = n(63063),
    G = n(74538),
    H = n(937615),
    z = n(335131),
    V = n(1870),
    W = n(429368),
    K = n(884697),
    q = n(635552),
    Y = n(83479),
    X = n(290175),
    J = n(724994),
    Q = n(328456),
    $ = n(330349),
    ee = n(556971),
    et = n(390698),
    en = n(141011),
    er = n(525518),
    ei = n(168020),
    el = n(426171),
    ea = n(224068),
    eo = n(813083),
    es = n(680942),
    ec = n(558060),
    eu = n(539598),
    ed = n(237031),
    em = n(372654),
    ef = n(38914),
    ep = n(259673),
    ev = n(508925),
    eg = n(953405),
    eb = n(453713),
    eh = n(616066),
    eP = n(22267),
    ex = n(332246),
    ej = n(58201),
    eO = n(445794),
    e_ = n(794324),
    eC = n(361110),
    ey = n(29121),
    ew = n(956472),
    eS = n(832149),
    eT = n(215023),
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
        return (0, K.x6)(t)
            ? (0, r.jsx)(eB, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eT.o0)(t.skuId)
              ? (0, r.jsx)(ev.b, {
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
                      helpdeskArticle: F.Z.getArticleURL(eE.BhN.FRACTIONAL_PREMIUM_ABOUT),
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
            } = e,
            { analyticsLocations: C } = (0, O.ZP)(),
            y = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: w } = h,
            S = (0, ex.N)(t, w),
            T = (0, ej.W)(t, x);
        s()(null != T, "Selected product should not be null");
        let N = (0, J.L)(t),
            { isPurchased: A, isPartiallyOwnedBundle: k } = (0, J.L)(T),
            { isDisabled: R, disabledReason: D } = (0, X.G)(T.skuId),
            M = (0, K.ne)({
                product: T,
                isPartiallyOwnedBundle: k,
                isPurchased: A,
            }),
            U = (0, p.e7)([V.Z], () => V.Z.isClaiming === (null == T ? void 0 : T.skuId)),
            F = (0, P.ZP)(),
            W = (0, v.wj)(F),
            $ = (0, K.G1)(T),
            ee = (0, K.ql)(T, eE.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, Q.Rj)(null != S ? S : T),
            ei = i.useMemo(() => (0, K.BH)(T, y), [T, y]),
            { handleUseNow: el, isApplying: em } = (0, q.W)({
                product: T,
                onSuccess: c,
            }),
            ef = (0, ey.To)(T),
            { enabled: ep } = (0, L.WX)({ location: "collectibles_shop_product_details_modal" }),
            ev = (0, eO.Iw)(t),
            eh = null != ev,
            {
                checkoutEligiblePrices: eP,
                isOrbExclusive: e_,
                hasSufficientOrbs: eC,
            } = (0, ew.Ip)({
                product: T,
                isPremiumUser: y,
                tab: j,
                hasDiscountOffer: eh,
            }),
            eZ = i.useCallback(
                () =>
                    (0, E.Z)({
                        skuId: T.skuId,
                        analyticsLocations: C,
                        variantsReturnStyle: f.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eN.dG)()),
                    }),
                [C, c, T.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, b.cV)(er), () => (0, b.cV)(void 0);
        }, [er]);
        let eB = (0, Y.G)(T);
        return (0, r.jsxs)("div", {
            className: ek.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: ek.titleContainer,
                    children: (0, r.jsx)(eo.Z, {
                        category: l,
                        display: eo.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eD, {
                    product: null != S ? S : T,
                    user: n,
                    activeSlide: _,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ek.description,
                            children: [
                                (0, r.jsx)(ea.Z, {
                                    product: T,
                                    isDarkText: !W,
                                    isOrbExclusive: e_,
                                }),
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: ek.headingWithItemTypePill,
                                    children: ef,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: eB,
                                }),
                                (0, r.jsx)(eM, { skuId: T.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: k,
                                      })
                                    : $
                                      ? (0, r.jsx)(g.Text, {
                                            variant: "text-md/semibold",
                                            className: ek.priceTag,
                                            children: eA.intl.string(eA.t.rt69oq),
                                        })
                                      : ep
                                        ? (0, r.jsx)(eg.a, {
                                              prices: eP,
                                              product: T,
                                              isPremiumUser: y,
                                              discount: ei,
                                              hasSufficientOrbs: eC,
                                              isProductDisabled: R,
                                              discountOfferAmount: ev,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ek.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(ec.Z, {
                                                      product: T,
                                                      discount: ei,
                                                      isPremiumUser: y,
                                                      hideStrikethroughPrice: !y || eh,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: ev,
                                                  }),
                                                  y || eh ? null : (0, r.jsx)(eu.Z, { product: T }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(g.Rny, {
                            children: (0, r.jsx)(eb.P, {
                                selectedVariantIndex: x,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: h,
                                className: ek.variantsSwitch,
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
                                if ($ && !y && !en) {
                                    let e;
                                    return (
                                        (e = eA.intl.string(eA.t.sEAnVF)),
                                        (0, r.jsx)(I.Z, {
                                            subscriptionTier: eI.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: ed.v,
                                            onSubscribeModalClose: () => {
                                                (0, ed.T)({
                                                    product: T,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: C,
                                                });
                                            },
                                        })
                                    );
                                }
                                return M
                                    ? A
                                        ? (0, r.jsx)(g.zxk, {
                                              variant: "primary",
                                              onClick: el,
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
                                                    await (0, z.fK)(T.skuId),
                                                        c(),
                                                        (0, eS.Z)({
                                                            product: T,
                                                            analyticsLocations: C,
                                                            purchaseType: eT.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eA.intl.string(eA.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eP.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eN.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, B.qA)({
                                                                        skuId: T.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: f.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eS.Z)({
                                                                                    product: T,
                                                                                    analyticsLocations: C,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eT.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: C,
                                                                    });
                                                                },
                                                                i = R
                                                                    ? eA.intl.string(eA.t.cTdr39)
                                                                    : eA.intl.string(eA.t.zqh7ZG),
                                                                l = !eC || R,
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
                                                                                    (0, r.jsx)(Z.Z, {
                                                                                        className: ek.orbIconAligned,
                                                                                        shouldUseThemeColor: l && !t,
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let i = !$ && !en && !u.tq && !e_ && M,
                                                        l = (0, K.x6)(T)
                                                            ? eA.intl.string(eA.t.V1AWw8)
                                                            : T.type === d.Z.PROFILE_EFFECT
                                                              ? eA.intl.string(eA.t.kAeDcH)
                                                              : T.type === d.Z.NAMEPLATE
                                                                ? eA.intl.string(eA.t.H3vhqa)
                                                                : eA.intl.string(eA.t.AQ0Ven);
                                                    return (
                                                        eh
                                                            ? (l = eA.intl.formatToPlainString(eA.t["5U5RBw"], {
                                                                  discountOfferAmount: ev,
                                                              }))
                                                            : ep &&
                                                              (l = eA.intl.formatToPlainString(eA.t["cNSL/v"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(g.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(g.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eZ,
                                                                    text: l,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(es.Z, {
                                                                        primary: n,
                                                                        product: T,
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
                            className: a()(ek.disclaimer, !W && ek.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !A ? eA.intl.string(eA.t.nKdAlJ) : null,
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
            i = (0, T.w$)();
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
    eH = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, p.e7)([x.Z], () => x.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            c = (0, p.cj)([D.Z], () => D.Z.getAllPending()),
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
            f = (0, k.SD)({
                userId: n.id,
                image: u,
            }),
            v = t.type === d.Z.AVATAR_DECORATION,
            [g] = t.items,
            { firstAvatarDecoration: b, firstProfileEffect: h, firstNameplate: P } = (0, Q.Rj)(t),
            j = null != h,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            N.Z,
                            eL(eR({}, m), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: b,
                                pendingProfileEffectId: null == h ? void 0 : h.id,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideViewFullProfileButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(ez, { user: n }),
                    ],
                }),
            _ = (e) =>
                (0, r.jsx)(eG, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === d.Z.BUNDLE) {
            if (!(0, $.L)(t))
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
    ez = (e) => {
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
                            S.Z,
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
                shouldCheckoutWithOrbs: f,
                tab: v,
            } = e,
            b = (0, p.e7)([M.default], () => M.default.getCurrentUser()),
            h = (0, eC.f)(l),
            { previewingVariantIndex: P } = h,
            x = (0, p.e7)([V.Z], () => V.Z.purchases),
            _ = (0, W.o)(l, x),
            C = (0, ex.N)(l, P),
            y = (0, ej.W)(l, _);
        s()(null != y, "Selected product should not be null");
        let { analyticsLocations: w } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, el.u9)(y.skuId);
        let S = (0, e_.kc)(a);
        i.useEffect(() => {
            null != b && (0, R.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let T = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            U.default.track(eE.rMx.OPEN_MODAL, {
                type: eE.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: w,
                sku_id: y.skuId,
                product_type: T,
            }),
                y.items.forEach(z.oK);
        }, [c, w, y.skuId, y.items, T]);
        let E = (0, B.r9)(),
            I = t === g.Dvm.EXITING,
            N = (0, eO.t0)(l),
            A = null == N ? void 0 : N.amount,
            k = i.useMemo(() => ((0, K.x6)(y) ? y.items.length : 0), [y]),
            { activeSlide: L, isTransitioning: Z } = (0, ee.b)({
                slideCount: k,
                intervalMs: 5000,
            });
        if (null == b) return null;
        let D = (0, eT.ZS)(a.skuId);
        return (0, r.jsx)(O.Gt, {
            value: w,
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
                                user: b,
                                product: l,
                                category: a,
                                onClose: n,
                                previewingVariantIndexProps: h,
                                selectedVariantIndex: _,
                                shouldCheckoutWithOrbs: f,
                                tab: v,
                                activeBundleSlide: L,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    y.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? ek.fractionalNitroPreviewContainer
                                        : y.type === d.Z.AVATAR_DECORATION
                                          ? ek.collectiblePreviewsContainerWithChat
                                          : ek.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)(en.Z, {
                                        asset: S,
                                        size: (0, em.ML)(540),
                                        className: ek.categoryBanner,
                                        categoryBannerOverride: D,
                                    }),
                                    (0, eT.o0)(l.skuId)
                                        ? l.skuId === eT.Vt.ORB_PROFILE_BADGE
                                            ? E || I
                                                ? null
                                                : (0, r.jsx)(ep.M, { user: b })
                                            : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(ef.q, {})
                                              : (0, r.jsx)(ev.b, {
                                                    product: l,
                                                    className: ek.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eH, {
                                              user: b,
                                              product: null != C ? C : y,
                                              activeBundleSlide: L,
                                              isTransitioning: Z,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: ek.pdpControls,
                                        children: [
                                            (0, r.jsx)(er.n, {
                                                skuId: y.skuId,
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
                    null != A &&
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
                                                children: eA.intl.format(eA.t["78ph4e"], { discountOfferAmount: A }),
                                            }),
                                            (null == N ? void 0 : N.expiresAt) != null &&
                                                (0, r.jsx)(ei.R, { endDate: N.expiresAt }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        });
    };
