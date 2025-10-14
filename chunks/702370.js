n.d(t, { default: () => ez }), n(388685), n(314940), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(979554),
    d = n(314794),
    m = n(311570),
    p = n(399606),
    f = n(28664),
    h = n(780384),
    v = n(481060),
    g = n(809206),
    _ = n(410030),
    b = n(607070),
    x = n(100527),
    P = n(906732),
    I = n(570908),
    S = n(104505),
    C = n(786761),
    T = n(3148),
    j = n(739566),
    E = n(753206),
    O = n(4242),
    w = n(333867),
    y = n(767714),
    A = n(678135),
    N = n(876917),
    k = n(643879),
    L = n(567400),
    R = n(484459),
    Z = n(825102),
    B = n(275388),
    U = n(25990),
    D = n(594174),
    H = n(626135),
    M = n(63063),
    F = n(74538),
    W = n(937615),
    G = n(335131),
    V = n(1870),
    z = n(429368),
    K = n(884697),
    Y = n(635552),
    q = n(83479),
    J = n(290175),
    X = n(724994),
    Q = n(328456),
    $ = n(330349),
    ee = n(556971),
    et = n(390698),
    en = n(525518),
    er = n(168020),
    ei = n(426171),
    el = n(224068),
    ea = n(813083),
    eo = n(680942),
    es = n(558060),
    ec = n(539598),
    eu = n(237031),
    ed = n(38914),
    em = n(259673),
    ep = n(508925),
    ef = n(953405),
    eh = n(453713),
    ev = n(325834),
    eg = n(143941),
    e_ = n(616066),
    eb = n(22267),
    ex = n(332246),
    eP = n(58201),
    eI = n(445794),
    eS = n(794324),
    eC = n(694364),
    eT = n(361110),
    ej = n(29121),
    eE = n(956472),
    eO = n(832149),
    ew = n(215023),
    ey = n(981631),
    eA = n(474936),
    eN = n(231338),
    ek = n(388032),
    eL = n(188336);
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
function eZ(e, t) {
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
let eB = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, S.X)(a);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: l ? eL.bundleAvatarPreviewContainer : eL.avatarPreviewContainer,
                    children: (0, r.jsx)(e_.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: l ? eL.bundlePfxPreviewContainer : eL.pfxPreviewContainer,
                    ref: a,
                    children: (0, r.jsx)(N.Z, {
                        skuId: t.skuId,
                        isHighlighted: o,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: a,
                    className: eL.nameplatePreviewContainer,
                    children: (0, r.jsx)(eb.Z, {
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
    eU = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            l = t.items.length;
        return (0, r.jsx)("div", {
            className: eL.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        v.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eL.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eB, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(v.Text, {
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
    eD = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, K.x6)(t)
            ? (0, r.jsx)(eU, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, ew.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eB, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eH = (e) => {
        let { skuId: t } = e;
        return t === d.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: eL.learnMoreLink,
                  children: ek.intl.format(ek.t.Q1scdH, {
                      helpdeskArticle: M.Z.getArticleURL(ey.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: n,
                category: l,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: d,
                previewingVariantIndexProps: b,
                selectedVariantIndex: x,
                tab: I,
                activeBundleSlide: S,
                variantType: C,
            } = e,
            { analyticsLocations: T } = (0, P.ZP)(),
            j = F.ZP.canUseCollectibles(n),
            { previewingVariantIndex: E } = b,
            O = (0, ex.N)(t, E),
            A = (0, eP.W)(t, x);
        s()(null != A, "Selected product should not be null");
        let N = (0, X.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: L } = (0, X.L)(A),
            { isDisabled: R, disabledReason: U } = (0, J.G)(A.skuId),
            D = (0, K.ne)({
                product: A,
                isPartiallyOwnedBundle: L,
                isPurchased: k,
            }),
            H = (0, p.e7)([V.Z], () => V.Z.isClaiming === (null == A ? void 0 : A.skuId)),
            M = (0, _.ZP)(),
            z = (0, h.wj)(M),
            $ = (0, K.G1)(A),
            ee = (0, K.ql)(A, ey.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, Q.Rj)(null != O ? O : A),
            ei = i.useMemo(() => (0, K.BH)(A, j), [A, j]),
            { handleUseNow: ed, isApplying: em } = (0, Y.W)({
                product: A,
                onSuccess: c,
            }),
            ep = (0, ej.To)(A),
            eg = (0, eC.J)(A),
            { enabled: e_ } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, eI.Iw)(t),
            eS = null != eb,
            {
                checkoutEligiblePrices: eT,
                isOrbExclusive: eR,
                hasSufficientOrbs: eZ,
            } = (0, eE.Ip)({
                product: A,
                isPremiumUser: j,
                tab: I,
                hasDiscountOffer: eS,
            }),
            eB = i.useCallback(
                () =>
                    (0, w.Z)({
                        skuId: A.skuId,
                        analyticsLocations: T,
                        variantsReturnStyle: m.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eN.dG)()),
                    }),
                [T, c, A.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, g.cV)(er), () => (0, g.cV)(void 0);
        }, [er]);
        let eU = (0, q.G)(A);
        return (0, r.jsxs)("div", {
            className: eL.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eL.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: l,
                        display: ea.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eD, {
                    product: null != O ? O : A,
                    user: n,
                    activeSlide: S,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eL.description,
                            children: [
                                (0, r.jsx)(el.Z, {
                                    product: A,
                                    isDarkText: !z,
                                    isOrbExclusive: eR,
                                }),
                                (0, r.jsx)(v.Heading, {
                                    variant: "heading-xl/extrabold",
                                    className: eL.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: "text-sm/normal",
                                    children: eU,
                                }),
                                (0, r.jsx)(eH, { skuId: A.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: eL.priceTag,
                                          isPartiallyPurchased: L,
                                      })
                                    : $
                                      ? (0, r.jsx)(v.Text, {
                                            variant: "text-md/semibold",
                                            className: eL.priceTag,
                                            children: ek.intl.string(ek.t.rt69oq),
                                        })
                                      : e_
                                        ? (0, r.jsx)(ef.a, {
                                              prices: eT,
                                              product: A,
                                              isPremiumUser: j,
                                              discount: ei,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: R,
                                              discountOfferAmount: eb,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eL.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: A,
                                                      discount: ei,
                                                      isPremiumUser: j,
                                                      hideStrikethroughPrice: !j || eS,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eb,
                                                  }),
                                                  j || eS ? null : (0, r.jsx)(ec.Z, { product: A }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(v.Rny, {
                            children:
                                C === ew.Ch.DEFAULT
                                    ? (0, r.jsx)(eh.P, {
                                          selectedVariantIndex: x,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: b,
                                          className: eL.variantsSwitch,
                                      })
                                    : (0, r.jsx)(ev.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: b,
                                          className: eL.variantsThumbnail,
                                          selectedVariantIndex: x,
                                      }),
                        }),
                        null !== U &&
                            (0, r.jsx)(v.Text, {
                                variant: "text-xs/normal",
                                className: eL.disabledReason,
                                children: U,
                            }),
                        (0, r.jsx)(v.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if ($ && !j && !en) {
                                    let e;
                                    return (
                                        (e = ek.intl.string(ek.t.sEAnVF)),
                                        (0, r.jsx)(y.Z, {
                                            subscriptionTier: eA.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eu.v,
                                            onSubscribeModalClose: () => {
                                                (0, eu.T)({
                                                    product: A,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: d,
                                                    analyticsLocations: T,
                                                    variantType: C,
                                                });
                                            },
                                        })
                                    );
                                }
                                return D
                                    ? k
                                        ? (0, r.jsx)(v.Button, {
                                              variant: "primary",
                                              onClick: ed,
                                              loading: em,
                                              text: ek.intl.string(ek.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(v.Button, {
                                                loading: H,
                                                loadingStartedLabel: ek.intl.string(ek.t["TYw+9v"]),
                                                loadingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, G.fK)(A.skuId),
                                                        c(),
                                                        (0, eO.Z)({
                                                            product: A,
                                                            analyticsLocations: T,
                                                            purchaseType: ew.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: ek.intl.string(ek.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eT.map((e, t) => {
                                                    let n,
                                                        i = 0 === t;
                                                    if (e.currency === eN.pK.DISCORD_ORB) {
                                                        let t = R
                                                                ? ek.intl.string(ek.t.cTdr39)
                                                                : ek.intl.string(ek.t.zqh7ZG),
                                                            n = !eZ || R,
                                                            l = ek.intl.formatToPlainString(ek.t["fNG/09"], {
                                                                orbPrice: e.amount,
                                                            }),
                                                            a = n ? "".concat(l, ", ").concat(t) : l;
                                                        return (0, r.jsx)(f.u, {
                                                            position: "top",
                                                            text: t,
                                                            shouldShow: n,
                                                            "aria-label": !1,
                                                            children: (0, r.jsx)(v.Button, {
                                                                variant: i ? "primary" : "secondary",
                                                                onClick: () => {
                                                                    (0, B.qA)({
                                                                        skuId: A.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, G.qg)({
                                                                                variantsReturnStyle: m.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eO.Z)({
                                                                                    product: A,
                                                                                    analyticsLocations: T,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: ew.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: T,
                                                                    });
                                                                },
                                                                disabled: n,
                                                                "aria-label": a,
                                                                text: ek.intl.format(ek.t.kAgx5O, {
                                                                    orbPrice: e.amount,
                                                                    orbIconHook: () =>
                                                                        (0, r.jsx)(v.aQr, {
                                                                            className: eL.orbIconAligned,
                                                                            size: "sm",
                                                                            color: "currentColor",
                                                                        }),
                                                                }),
                                                                fullWidth: !0,
                                                            }),
                                                        });
                                                    }
                                                    return (
                                                        (n = (0, K.x6)(A)
                                                            ? ek.intl.string(ek.t.V1AWw8)
                                                            : A.type === u.Z.PROFILE_EFFECT
                                                              ? ek.intl.string(ek.t.kAeDcH)
                                                              : A.type === u.Z.NAMEPLATE
                                                                ? ek.intl.string(ek.t.H3vhqa)
                                                                : ek.intl.string(ek.t.AQ0Ven)),
                                                        eS
                                                            ? (n = ek.intl.formatToPlainString(ek.t["5U5RBw"], {
                                                                  discountOfferAmount: eb,
                                                              }))
                                                            : e_ &&
                                                              (n = ek.intl.formatToPlainString(ek.t["cNSL/v"], {
                                                                  price: (0, W.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(v.ButtonGroup, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(v.Button, {
                                                                    variant: i ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: n,
                                                                    fullWidth: !0,
                                                                }),
                                                                eg &&
                                                                    (0, r.jsx)(eo.Z, {
                                                                        primary: i,
                                                                        product: A,
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
                        (0, r.jsx)(v.Text, {
                            className: a()(eL.disclaimer, !z && eL.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !k ? ek.intl.string(ek.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eF = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eL.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(I.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eL.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eW = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, O.w$)();
        return (0, r.jsx)("div", {
            className: eL.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": ek.intl.string(ek.t.SZeUdX),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eF, {
                        user: i.mallow,
                        innerClassName: eL.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eL.nameplateRightPanePreviewSectionGroup,
                        children: [ek.intl.string(ek.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eF, {
                        user: i.phibi,
                        innerClassName: eL.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eL.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eb.Z, {
                            className: eL.nameplatePreview,
                            innerClassName: eL.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                        }),
                    }),
                    (0, r.jsx)(eF, {
                        user: i.locke,
                        innerClassName: eL.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eL.nameplateRightPanePreviewSectionGroup,
                        children: [ek.intl.string(ek.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eF, {
                        user: i.boom,
                        innerClassName: eL.userGreen,
                    }),
                    (0, r.jsx)(eF, {
                        user: i.cherry,
                        innerClassName: eL.userGreen,
                    }),
                ],
            }),
        });
    },
    eG = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, p.e7)([b.Z], () => b.Z.useReducedMotion),
            s = F.ZP.canUsePremiumProfileCustomization(n),
            c = (0, p.cj)([U.Z], () => U.Z.getAllPending()),
            { pendingAvatar: d } = c,
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
                image: d,
            }),
            h = t.type === u.Z.AVATAR_DECORATION,
            [v] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: _, firstNameplate: x } = (0, Q.Rj)(t),
            P = null != _,
            I = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            A.Z,
                            eZ(eR({}, m), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: g,
                                pendingProfileEffect: _,
                                disabledInputs: !0,
                                hideMessageInput: !P,
                                hideCustomStatus: !0,
                                hideBioSection: h,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        h && (0, r.jsx)(eV, { user: n }),
                    ],
                }),
            S = (e) =>
                (0, r.jsx)(eW, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === u.Z.BUNDLE) {
            if (!(0, $.L)(t))
                return (0, r.jsx)("div", {
                    className: eL.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eL.combinedPreviewContent,
                        children: I(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    c = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === u.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: a()(eL.nameplatePreviewContainerInner, l && c ? eL.sliding : ""),
                          children: S(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(eL.profileEffectPreviewsContainerInner, l && c ? eL.sliding : ""),
                          children: I(),
                      });
            }
        }
        return null != x
            ? (0, r.jsx)("div", {
                  className: eL.nameplatePreviewContainerInner,
                  children: S(x),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == v ? void 0 : v.type) === u.Z.AVATAR_DECORATION
                          ? eL.previewsContainerInner
                          : eL.profileEffectPreviewsContainerInner,
                  children: I(),
              });
    },
    eV = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.e5)(
                    eZ(
                        eR(
                            {},
                            (0, T.ZP)({
                                author: t,
                                channelId: "1337",
                                content: ek.intl.string(ek.t.d5YwKy),
                            }),
                        ),
                        {
                            state: ey.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ek.intl.string(ek.t["TN+ZvL"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: eL.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            E.Z,
                            {
                                className: eL.mockMessage,
                                author: (0, j.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eL.mockInput,
                            children: [
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eL.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
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
    ez = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: l,
                category: o,
                returnRef: c,
                analyticsSource: m,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: h,
                tab: g,
                variantType: _ = ew.Ch.DEFAULT,
            } = e,
            b = (0, p.e7)([D.default], () => D.default.getCurrentUser()),
            I = (0, eT.f)(l),
            { previewingVariantIndex: S } = I,
            C = (0, p.e7)([V.Z], () => V.Z.purchases),
            T = (0, z.o)(l, C),
            j = (0, ex.N)(l, S),
            E = (0, eP.W)(l, T);
        s()(null != E, "Selected product should not be null");
        let { analyticsLocations: O } = (0, P.ZP)([...f, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(E.skuId);
        let w = (0, eS.kc)(o),
            y = (0, L.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != b && (0, R.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let A = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            H.default.track(ey.rMx.OPEN_MODAL, {
                type: ey.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: m,
                location_stack: O,
                sku_id: E.skuId,
                product_type: A,
            }),
                E.items.forEach(G.oK);
        }, [m, O, E.skuId, E.items, A]);
        let N = (0, B.r9)(),
            k = t === v.Dvm.EXITING,
            Z = (0, eI.t0)(l),
            U = null == Z ? void 0 : Z.amount,
            M = i.useMemo(() => ((0, K.x6)(E) ? E.items.length : 0), [E]),
            { activeSlide: F, isTransitioning: W } = (0, ee.b)({
                slideCount: M,
                intervalMs: 5000,
            });
        return null == b
            ? null
            : (0, r.jsx)(P.Gt, {
                  value: O,
                  children: (0, r.jsxs)(v.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eL.modalRoot,
                      returnRef: c,
                      transitionState: t,
                      size: v.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(v.hzk, {
                              "data-migration-pending": !0,
                              className: eL.modalContent,
                              children: [
                                  (0, r.jsx)(eM, {
                                      user: b,
                                      product: l,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: I,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: h,
                                      tab: g,
                                      activeBundleSlide: F,
                                      variantType: _,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          eL.previewContainer,
                                          E.skuId === d.a.PREMIUM_TIER_2_3_DAY
                                              ? eL.fractionalNitroPreviewContainer
                                              : E.type === u.Z.AVATAR_DECORATION
                                                ? eL.collectiblePreviewsContainerWithChat
                                                : eL.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(w, ")") },
                                      children: [
                                          (0, ew.o0)(l.skuId)
                                              ? l.skuId === ew.Vt.ORB_PROFILE_BADGE
                                                  ? N || k
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: b })
                                                  : l.skuId === d.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: l,
                                                          className: eL.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eG, {
                                                    user: b,
                                                    product: null != j ? j : E,
                                                    activeBundleSlide: F,
                                                    isTransitioning: W,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eL.pdpControls,
                                              children: [
                                                  y &&
                                                      (0, r.jsx)(eg.a, {
                                                          product: l,
                                                          selectedVariantIndex: T,
                                                          className: eL.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: E.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": ek.intl.string(ek.t.cpT0Cg),
                                                      onClick: n,
                                                      icon: v.Uz9,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          null != U &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(v.mzw, {
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
                                                  (0, r.jsx)(v.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eL.modalFooterText,
                                                      children: ek.intl.format(ek.t["78ph4e"], {
                                                          discountOfferAmount: U,
                                                      }),
                                                  }),
                                                  (null == Z ? void 0 : Z.expiresAt) != null &&
                                                      (0, r.jsx)(er.R, { endDate: Z.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
