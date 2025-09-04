n.d(t, { default: () => eK }), n(388685), n(314940), n(953529);
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
    b = n(481060),
    g = n(809206),
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
    Z = n(275388),
    B = n(25990),
    D = n(594174),
    M = n(626135),
    U = n(63063),
    F = n(74538),
    G = n(937615),
    H = n(335131),
    z = n(381585),
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
    eb = n(953405),
    eg = n(453713),
    eh = n(325834),
    eP = n(616066),
    ex = n(22267),
    ej = n(332246),
    eO = n(58201),
    e_ = n(445794),
    eC = n(794324),
    ey = n(361110),
    ew = n(29121),
    eS = n(956472),
    eT = n(832149),
    eE = n(642909),
    eI = n(215023),
    eN = n(981631),
    eA = n(474936),
    ek = n(231338),
    eR = n(388032),
    eL = n(188336);
function eZ(e) {
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
function eB(e, t) {
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
let eD = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, h.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: l ? eL.bundleAvatarPreviewContainer : eL.avatarPreviewContainer,
                    children: (0, r.jsx)(eP.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: l ? eL.bundlePfxPreviewContainer : eL.pfxPreviewContainer,
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
                    className: eL.nameplatePreviewContainer,
                    children: (0, r.jsx)(ex.Z, {
                        className: eL.nameplatePreview,
                        nameplate: t,
                        isHighlighted: o,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "large",
                    }),
                }),
            )
            .otherwise(() => null);
    },
    eM = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            l = t.items.length;
        return (0, r.jsx)("div", {
            className: eL.bundlePreviewContainer,
            children: (0, r.jsx)(b.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        b.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eL.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eD, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(b.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eL.bundleSlideTitle,
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
    eU = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, K.x6)(t)
            ? (0, r.jsx)(eM, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eI.o0)(t.skuId)
              ? (0, r.jsx)(ev.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eD, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eF = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(b.Text, {
                  variant: "text-sm/normal",
                  className: eL.learnMoreLink,
                  children: eR.intl.format(eR.t.Q1scdH, {
                      helpdeskArticle: U.Z.getArticleURL(eN.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eG = (e) => {
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
            { previewingVariantIndex: S } = h,
            T = (0, ej.N)(t, S),
            N = (0, eO.W)(t, x);
        s()(null != N, "Selected product should not be null");
        let A = (0, J.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: R } = (0, J.L)(N),
            { isDisabled: B, disabledReason: D } = (0, X.G)(N.skuId),
            M = (0, K.ne)({
                product: N,
                isPartiallyOwnedBundle: R,
                isPurchased: k,
            }),
            U = (0, p.e7)([V.Z], () => V.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            z = (0, P.ZP)(),
            W = (0, v.wj)(z),
            $ = (0, K.G1)(N),
            ee = (0, K.ql)(N, eN.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, Q.Rj)(null != T ? T : N),
            ei = i.useMemo(() => (0, K.BH)(N, w), [N, w]),
            { handleUseNow: el, isApplying: em } = (0, q.W)({
                product: N,
                onSuccess: c,
            }),
            ef = (0, ew.To)(N),
            { enabled: ep } = (0, L.WX)({ location: "collectibles_shop_product_details_modal" }),
            ev = (0, e_.Iw)(t),
            eP = null != ev,
            {
                checkoutEligiblePrices: ex,
                isOrbExclusive: eC,
                hasSufficientOrbs: ey,
            } = (0, eS.Ip)({
                product: N,
                isPremiumUser: w,
                tab: j,
                hasDiscountOffer: eP,
            }),
            eE = i.useCallback(
                () =>
                    (0, E.Z)({
                        skuId: N.skuId,
                        analyticsLocations: y,
                        variantsReturnStyle: f.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, ek.dG)()),
                    }),
                [y, c, N.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, g.cV)(er), () => (0, g.cV)(void 0);
        }, [er]);
        let eD = (0, Y.G)(N);
        return (0, r.jsxs)("div", {
            className: eL.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eL.titleContainer,
                    children: (0, r.jsx)(eo.Z, {
                        category: l,
                        display: eo.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eU, {
                    product: null != T ? T : N,
                    user: n,
                    activeSlide: _,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eL.description,
                            children: [
                                (0, r.jsx)(ea.Z, {
                                    product: N,
                                    isDarkText: !W,
                                    isOrbExclusive: eC,
                                }),
                                (0, r.jsx)(b.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eL.headingWithItemTypePill,
                                    children: ef,
                                }),
                                (0, r.jsx)(b.Text, {
                                    variant: "text-sm/normal",
                                    children: eD,
                                }),
                                (0, r.jsx)(eF, { skuId: N.skuId }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: eL.priceTag,
                                          isPartiallyPurchased: R,
                                      })
                                    : $
                                      ? (0, r.jsx)(b.Text, {
                                            variant: "text-md/semibold",
                                            className: eL.priceTag,
                                            children: eR.intl.string(eR.t.rt69oq),
                                        })
                                      : ep
                                        ? (0, r.jsx)(eb.a, {
                                              prices: ex,
                                              product: N,
                                              isPremiumUser: w,
                                              discount: ei,
                                              hasSufficientOrbs: ey,
                                              isProductDisabled: B,
                                              discountOfferAmount: ev,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eL.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(ec.Z, {
                                                      product: N,
                                                      discount: ei,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || eP,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: ev,
                                                  }),
                                                  w || eP ? null : (0, r.jsx)(eu.Z, { product: N }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(b.Rny, {
                            children:
                                C === eI.Ch.DEFAULT
                                    ? (0, r.jsx)(eg.P, {
                                          selectedVariantIndex: x,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: h,
                                          className: eL.variantsSwitch,
                                      })
                                    : (0, r.jsx)(eh.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: h,
                                          className: eL.variantsThumbnail,
                                          selectedVariantIndex: x,
                                      }),
                        }),
                        null !== D &&
                            (0, r.jsx)(b.Text, {
                                variant: "text-xs/normal",
                                className: eL.disabledReason,
                                children: D,
                            }),
                        (0, r.jsx)(b.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if ($ && !w && !en) {
                                    let e;
                                    return (
                                        (e = eR.intl.string(eR.t.sEAnVF)),
                                        (0, r.jsx)(I.Z, {
                                            subscriptionTier: eA.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: ed.v,
                                            onSubscribeModalClose: () => {
                                                (0, ed.T)({
                                                    product: N,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: y,
                                                });
                                            },
                                        })
                                    );
                                }
                                return M
                                    ? k
                                        ? (0, r.jsx)(b.zxk, {
                                              variant: "primary",
                                              onClick: el,
                                              loading: em,
                                              text: eR.intl.string(eR.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(b.zxk, {
                                                loading: U,
                                                loadingStartedLabel: eR.intl.string(eR.t["TYw+9v"]),
                                                loadingFinishedLabel: eR.intl.string(eR.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, H.fK)(N.skuId),
                                                        c(),
                                                        (0, eT.Z)({
                                                            product: N,
                                                            analyticsLocations: y,
                                                            purchaseType: eI.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eR.intl.string(eR.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ex.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === ek.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, Z.qA)({
                                                                        skuId: N.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, H.qg)({
                                                                                variantsReturnStyle: f.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eT.Z)({
                                                                                    product: N,
                                                                                    analyticsLocations: y,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eI.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: y,
                                                                    });
                                                                },
                                                                i = B
                                                                    ? eR.intl.string(eR.t.cTdr39)
                                                                    : eR.intl.string(eR.t.zqh7ZG),
                                                                l = !ey || B,
                                                                a = eR.intl.formatToPlainString(eR.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                o = l ? "".concat(a, ", ").concat(i) : a;
                                                            return (0, r.jsx)(b.ua7, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (i) =>
                                                                    (0, r.jsx)(
                                                                        b.zxk,
                                                                        eB(eZ({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: l,
                                                                            "aria-label": o,
                                                                            text: eR.intl.format(eR.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(b.aQr, {
                                                                                        className: eL.orbIconAligned,
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
                                                        l = (0, K.x6)(N)
                                                            ? eR.intl.string(eR.t.V1AWw8)
                                                            : N.type === d.Z.PROFILE_EFFECT
                                                              ? eR.intl.string(eR.t.kAeDcH)
                                                              : N.type === d.Z.NAMEPLATE
                                                                ? eR.intl.string(eR.t.H3vhqa)
                                                                : eR.intl.string(eR.t.AQ0Ven);
                                                    return (
                                                        eP
                                                            ? (l = eR.intl.formatToPlainString(eR.t["5U5RBw"], {
                                                                  discountOfferAmount: ev,
                                                              }))
                                                            : ep &&
                                                              (l = eR.intl.formatToPlainString(eR.t["cNSL/v"], {
                                                                  price: (0, G.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(b.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(b.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eE,
                                                                    text: l,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(es.Z, {
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
                        (0, r.jsx)(b.Text, {
                            className: a()(eL.disclaimer, !W && eL.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !k ? eR.intl.string(eR.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eH = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eL.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(_.Z, {
                avatar: (0, r.jsx)(b.qEK, {
                    src: t.avatarSrc,
                    size: b.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: b.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eL.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    ez = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, T.w$)();
        return (0, r.jsx)("div", {
            className: eL.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eR.intl.string(eR.t.SZeUdX),
            children: (0, r.jsxs)(b.Rny, {
                children: [
                    (0, r.jsx)(eH, {
                        user: i.mallow,
                        innerClassName: eL.userBlue,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: eL.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eH, {
                        user: i.phibi,
                        innerClassName: eL.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eL.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(ex.Z, {
                            className: eL.nameplatePreview,
                            innerClassName: eL.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                        }),
                    }),
                    (0, r.jsx)(eH, {
                        user: i.locke,
                        innerClassName: eL.userPink,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: eL.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eH, {
                        user: i.boom,
                        innerClassName: eL.userGreen,
                    }),
                    (0, r.jsx)(eH, {
                        user: i.cherry,
                        innerClassName: eL.userGreen,
                    }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, p.e7)([x.Z], () => x.Z.useReducedMotion),
            s = F.ZP.canUsePremiumProfileCustomization(n),
            c = (0, p.cj)([B.Z], () => B.Z.getAllPending()),
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
            [b] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: h, firstNameplate: P } = (0, Q.Rj)(t),
            j = null != h,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            N.Z,
                            eB(eZ({}, m), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: g,
                                pendingProfileEffectId: null == h ? void 0 : h.id,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideViewFullProfileButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(eW, { user: n }),
                    ],
                }),
            _ = (e) =>
                (0, r.jsx)(ez, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === d.Z.BUNDLE) {
            if (!(0, $.L)(t))
                return (0, r.jsx)("div", {
                    className: eL.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eL.combinedPreviewContent,
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
                          className: a()(eL.nameplatePreviewContainerInner, l && c ? eL.sliding : ""),
                          children: _(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(eL.profileEffectPreviewsContainerInner, l && c ? eL.sliding : ""),
                          children: O(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: eL.nameplatePreviewContainerInner,
                  children: _(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == b ? void 0 : b.type) === d.Z.AVATAR_DECORATION
                          ? eL.previewsContainerInner
                          : eL.profileEffectPreviewsContainerInner,
                  children: O(),
              });
    },
    eW = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.e5)(
                    eB(
                        eZ(
                            {},
                            (0, y.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eR.intl.string(eR.t.d5YwKy),
                            }),
                        ),
                        {
                            state: eN.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eR.intl.string(eR.t["TN+ZvL"]),
            children: (0, r.jsx)(b.Rny, {
                children: (0, r.jsxs)(b.Zbd, {
                    className: eL.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            S.Z,
                            {
                                className: eL.mockMessage,
                                author: (0, w.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eL.mockInput,
                            children: [
                                (0, r.jsx)(b.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eL.mockInputButton,
                                }),
                                (0, r.jsx)(b.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eL.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eK = (e) => {
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
            g = (0, p.e7)([D.default], () => D.default.getCurrentUser()),
            h = (0, z.sp)(),
            P =
                (0, eE.G)("CollectiblesShopProductDetailsModal") && (null == h ? void 0 : h.pageSection) === "top 4"
                    ? eI.Ch.THUMBNAIL
                    : eI.Ch.DEFAULT,
            x = (0, ey.f)(l),
            { previewingVariantIndex: _ } = x,
            C = (0, p.e7)([V.Z], () => V.Z.purchases),
            y = (0, W.o)(l, C),
            w = (0, ej.N)(l, _),
            S = (0, eO.W)(l, y);
        s()(null != S, "Selected product should not be null");
        let { analyticsLocations: T } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, el.u9)(S.skuId);
        let E = (0, eC.kc)(a);
        i.useEffect(() => {
            null != g && (0, R.Z)(g.id, g.getAvatarURL(void 0, 80));
        }, [g]);
        let I = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            M.default.track(eN.rMx.OPEN_MODAL, {
                type: eN.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: T,
                sku_id: S.skuId,
                product_type: I,
            }),
                S.items.forEach(H.oK);
        }, [c, T, S.skuId, S.items, I]);
        let N = (0, Z.r9)(),
            A = t === b.Dvm.EXITING,
            k = (0, e_.t0)(l),
            L = null == k ? void 0 : k.amount,
            B = i.useMemo(() => ((0, K.x6)(S) ? S.items.length : 0), [S]),
            { activeSlide: U, isTransitioning: F } = (0, ee.b)({
                slideCount: B,
                intervalMs: 5000,
            });
        if (null == g) return null;
        let G = (0, eI.ZS)(a.skuId);
        return (0, r.jsx)(O.Gt, {
            value: T,
            children: (0, r.jsxs)(b.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eL.modalRoot,
                returnRef: o,
                transitionState: t,
                size: b.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(b.hzk, {
                        "data-migration-pending": !0,
                        className: eL.modalContent,
                        children: [
                            (0, r.jsx)(eG, {
                                user: g,
                                product: l,
                                category: a,
                                onClose: n,
                                previewingVariantIndexProps: x,
                                selectedVariantIndex: y,
                                shouldCheckoutWithOrbs: f,
                                tab: v,
                                activeBundleSlide: U,
                                variantType: P,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    S.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? eL.fractionalNitroPreviewContainer
                                        : S.type === d.Z.AVATAR_DECORATION
                                          ? eL.collectiblePreviewsContainerWithChat
                                          : eL.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)(en.Z, {
                                        asset: E,
                                        size: (0, em.ML)(540),
                                        className: eL.categoryBanner,
                                        categoryBannerOverride: G,
                                    }),
                                    (0, eI.o0)(l.skuId)
                                        ? l.skuId === eI.Vt.ORB_PROFILE_BADGE
                                            ? N || A
                                                ? null
                                                : (0, r.jsx)(ep.M, { user: g })
                                            : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(ef.q, {})
                                              : (0, r.jsx)(ev.b, {
                                                    product: l,
                                                    className: eL.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eV, {
                                              user: g,
                                              product: null != w ? w : S,
                                              activeBundleSlide: U,
                                              isTransitioning: F,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: eL.pdpControls,
                                        children: [
                                            (0, r.jsx)(er.n, {
                                                skuId: S.skuId,
                                                tab: v,
                                            }),
                                            (0, r.jsx)(b.hU, {
                                                "aria-label": eR.intl.string(eR.t.cpT0Cg),
                                                onClick: n,
                                                icon: b.Uz9,
                                                variant: "overlay-secondary",
                                                size: "sm",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != L &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)(b.mzw, {
                                "data-migration-pending": !0,
                                className: eL.modalFooter,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                        alt: "",
                                        className: eL.modalFooterBackgroundImg,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: eL.modalFooterContentContainer,
                                        children: [
                                            (0, r.jsx)(b.Text, {
                                                variant: "text-sm/semibold",
                                                className: eL.modalFooterText,
                                                children: eR.intl.format(eR.t["78ph4e"], { discountOfferAmount: L }),
                                            }),
                                            (null == k ? void 0 : k.expiresAt) != null &&
                                                (0, r.jsx)(ei.R, { endDate: k.expiresAt }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        });
    };
