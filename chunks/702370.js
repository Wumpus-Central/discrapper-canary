n.d(t, { default: () => eV }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(979554),
    u = n(314794),
    d = n(311570),
    m = n(399606),
    p = n(28664),
    f = n(780384),
    v = n(481060),
    h = n(410030),
    g = n(607070),
    b = n(100527),
    x = n(906732),
    P = n(570908),
    _ = n(104505),
    j = n(786761),
    O = n(3148),
    C = n(739566),
    w = n(753206),
    I = n(4242),
    y = n(566697),
    T = n(333867),
    S = n(767714),
    A = n(150039),
    E = n(678135),
    N = n(876917),
    R = n(643879),
    k = n(567400),
    L = n(484459),
    B = n(706454),
    Z = n(825102),
    D = n(275388),
    U = n(25990),
    M = n(594174),
    F = n(626135),
    G = n(63063),
    H = n(74538),
    z = n(937615),
    V = n(335131),
    W = n(1870),
    q = n(429368),
    K = n(884697),
    Y = n(635552),
    J = n(83479),
    X = n(290175),
    Q = n(724994),
    $ = n(328456),
    ee = n(330349),
    et = n(556971),
    en = n(390698),
    er = n(525518),
    ei = n(168020),
    ea = n(426171),
    el = n(224068),
    eo = n(813083),
    es = n(680942),
    ec = n(558060),
    eu = n(539598),
    ed = n(237031),
    em = n(38914),
    ep = n(259673),
    ef = n(508925),
    ev = n(953405),
    eh = n(453713),
    eg = n(143941),
    eb = n(616066),
    ex = n(332246),
    eP = n(58201),
    e_ = n(445794),
    ej = n(794324),
    eO = n(694364),
    eC = n(361110),
    ew = n(29121),
    eI = n(956472),
    ey = n(832149),
    eT = n(215023),
    eS = n(981631),
    eA = n(474936),
    eE = n(231338),
    eN = n(388032),
    eR = n(653193);
function ek(e) {
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
let eB = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            o = (0, _.X)(l),
            s = (0, K.x6)(n),
            { firstAvatarDecoration: u } = (0, $.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? eR.bundleAvatarPreviewContainer : eR.avatarPreviewContainer,
                  children: (0, r.jsx)(eb.R, {
                      user: a,
                      item: t,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? eR.bundlePfxPreviewContainer : eR.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(N.Z, {
                        skuId: t.skuId,
                        isHighlighted: o,
                        removeSetHeight: !0,
                    }),
                })
              : t.type === c.Z.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: eR.nameplatePreviewContainer,
                      children: (0, r.jsx)(y.Z, {
                          className: eR.nameplatePreview,
                          nameplate: t,
                          isHighlighted: o,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: u,
                      }),
                  })
                : null;
    },
    eZ = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: eR.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(a, ")");
                    return (0, r.jsx)(
                        v.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: eR.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eB, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eR.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, " ", s],
                                    }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            }),
        });
    },
    eD = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, K.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eT.o0)(t.skuId)
              ? (0, r.jsx)(ef.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eB, {
                      item: t.items[0],
                      product: t,
                      user: n,
                  })
                : null;
    },
    eU = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: eR.learnMoreLink,
                  children: eN.intl.format(eN.t.Q1scdE, {
                      helpdeskArticle: G.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: u,
                returnRef: g,
                previewingVariantIndexProps: b,
                selectedVariantIndex: P,
                activeBundleSlide: _,
                isRental: j,
                rentalDuration: O,
            } = e,
            { analyticsLocations: C } = (0, x.ZP)(),
            w = (0, m.e7)([B.default], () => B.default.locale),
            I = H.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y } = b,
            E = (0, ex.N)(t, y),
            N = (0, eP.W)(t, P);
        s()(null != N, "Selected product should not be null");
        let R = (0, Q.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: L } = (0, Q.L)(N),
            { isDisabled: U, disabledReason: M } = (0, X.G)(N.skuId),
            F = (0, K.ne)({
                product: N,
                isPartiallyOwnedBundle: L,
                isPurchased: k,
            }),
            G = (0, m.e7)([W.Z], () => W.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            q = (0, h.ZP)(),
            ee = (0, f.wj)(q),
            et = (0, K.G1)(N),
            er = (0, K.ql)(N, eS.tuJ.DEFAULT),
            ei = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: ea } = (0, $.Rj)(null != E ? E : N),
            em = i.useMemo(() => (0, K.BH)(N, I), [N, I]),
            { handleUseNow: ep, isApplying: ef } = (0, Y.W)({
                product: N,
                onSuccess: u,
            }),
            eg = (0, ew.To)(N),
            eb = (0, eO.J)(N),
            { enabled: ej } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            eC = (0, J.G)(N),
            ek = 1 === O ? eN.intl.string(eN.t.ggwFN5) : eN.intl.string(eN.t.QUjmjp),
            eL = (0, e_.Iw)(t),
            eB = null != eL,
            {
                checkoutEligiblePrices: eZ,
                isOrbExclusive: eM,
                hasSufficientOrbs: eF,
            } = (0, eI.Ip)({
                product: N,
                isPremiumUser: I,
                hasDiscountOffer: eB,
                isRental: j,
            }),
            eG = i.useCallback(
                () =>
                    (0, T.Z)({
                        skuId: N.skuId,
                        analyticsLocations: C,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eE.dG)()),
                    }),
                [C, u, N.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != ea) return (0, A.PO)(ea), () => (0, A.PO)(void 0);
            }, [ea]),
            (0, r.jsxs)("div", {
                className: eR.collectibleInfoContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: eR.titleContainer,
                        children: (0, r.jsx)(eo.Z, { category: a }),
                    }),
                    (0, r.jsx)(eD, {
                        product: null != E ? E : N,
                        user: n,
                        activeSlide: _,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eR.description,
                                children: [
                                    (0, r.jsx)(el.Z, {
                                        product: N,
                                        isDarkText: !ee,
                                        isOrbExclusive: eM,
                                        rentalDuration: O,
                                    }),
                                    (0, r.jsx)(v.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eR.headingWithItemTypePill,
                                        children: eg,
                                    }),
                                    (0, r.jsx)(v.Text, {
                                        variant: "text-sm/normal",
                                        children: j ? ek : eC,
                                    }),
                                    (0, r.jsx)(eU, { skuId: N.skuId }),
                                    R.isPurchased || R.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(en.U, {
                                              className: eR.priceTag,
                                              isPartiallyPurchased: L,
                                          })
                                        : et
                                          ? (0, r.jsx)(v.Text, {
                                                variant: "text-md/semibold",
                                                className: eR.priceTag,
                                                children: eN.intl.string(eN.t.rt69oo),
                                            })
                                          : ej
                                            ? (0, r.jsx)(ev.a, {
                                                  prices: eZ,
                                                  product: N,
                                                  isPremiumUser: I,
                                                  discount: em,
                                                  hasSufficientOrbs: eF,
                                                  isProductDisabled: U,
                                                  discountOfferAmount: eL,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eR.priceTagContainer,
                                                  children: [
                                                      (0, r.jsx)(ec.Z, {
                                                          product: N,
                                                          discount: em,
                                                          isPremiumUser: I,
                                                          hideStrikethroughPrice: !I || eB,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eL,
                                                      }),
                                                      I || eB ? null : (0, r.jsx)(eu.Z, { product: N }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, r.jsx)(v.Rny, {
                                children: (0, r.jsx)(eh.P, {
                                    selectedVariantIndex: P,
                                    variantGroupProduct: t,
                                    previewingVariantIndexProps: b,
                                    className: eR.variantsSwitch,
                                }),
                            }),
                            null !== M &&
                                (0, r.jsx)(v.Text, {
                                    variant: "text-xs/normal",
                                    className: eR.disabledReason,
                                    children: M,
                                }),
                            (0, r.jsx)(v.Kqy, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (et && !I && !ei) {
                                        let e;
                                        return (
                                            (e = eN.intl.string(eN.t.sEAnVH)),
                                            (0, r.jsx)(S.Z, {
                                                subscriptionTier: eA.Si.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ed.v,
                                                onSubscribeModalClose: () => {
                                                    (0, ed.T)({
                                                        product: N,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: o,
                                                        returnRef: g,
                                                        analyticsLocations: C,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return F
                                        ? k
                                            ? (0, r.jsx)(v.Button, {
                                                  variant: "primary",
                                                  onClick: ep,
                                                  loading: ef,
                                                  text: eN.intl.string(eN.t.MAS7uK),
                                                  fullWidth: !0,
                                              })
                                            : et
                                              ? (0, r.jsx)(v.Button, {
                                                    loading: G,
                                                    loadingStartedLabel: eN.intl.string(eN.t["TYw+9s"]),
                                                    loadingFinishedLabel: eN.intl.string(eN.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, V.fK)(N.skuId),
                                                            u(),
                                                            (0, ey.Z)({
                                                                product: N,
                                                                analyticsLocations: C,
                                                                purchaseType: eT.o8.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eN.intl.string(eN.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eZ.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === eE.pK.DISCORD_ORB) {
                                                            if (j) {
                                                                let e = U
                                                                        ? eN.intl.string(eN.t.cTdr3x)
                                                                        : eN.intl.string(eN.t.zqh7ZM),
                                                                    t = !eF || U,
                                                                    n = eN.intl.formatToPlainString(eN.t.DlNs2T, {
                                                                        orbPrice: eT.As,
                                                                    }),
                                                                    a = t ? "".concat(n, ", ").concat(e) : n;
                                                                return (0, r.jsx)(p.u, {
                                                                    position: "top",
                                                                    text: e,
                                                                    shouldShow: t,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(v.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, D.qA)({
                                                                                skuId: N.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    var t, n;
                                                                                    let { entitlements: r } = e;
                                                                                    (0, V.qg)({
                                                                                        variantsReturnStyle:
                                                                                            d.v.VARIANTS_GROUP,
                                                                                    }),
                                                                                        u();
                                                                                    let i =
                                                                                        (null == (t = r[0])
                                                                                            ? void 0
                                                                                            : t.ends_at) != null
                                                                                            ? new Date(
                                                                                                  r[0].ends_at,
                                                                                              ).toLocaleDateString(w, {
                                                                                                  minute: "numeric",
                                                                                                  hour: "numeric",
                                                                                                  day: "numeric",
                                                                                                  month: "long",
                                                                                                  year: "numeric",
                                                                                              })
                                                                                            : void 0;
                                                                                    (0, ey.Z)({
                                                                                        product: N,
                                                                                        analyticsLocations: C,
                                                                                        itemConsumed:
                                                                                            null == (n = r[0])
                                                                                                ? void 0
                                                                                                : n.consumed,
                                                                                        purchaseType: eT.o8.ORB,
                                                                                        isRental: !0,
                                                                                        rentalDuration: O,
                                                                                        rentalExpiresAt: i,
                                                                                    });
                                                                                },
                                                                                analyticsLocations: C,
                                                                                isRental: !0,
                                                                            });
                                                                        },
                                                                        disabled: t,
                                                                        "aria-label": a,
                                                                        text: eN.intl.format(eN.t["4NKuqc"], {
                                                                            orbPrice: eT.As,
                                                                            orbIconHook: () =>
                                                                                (0, r.jsx)(v.aQr, {
                                                                                    className: eR.orbIconAligned,
                                                                                    size: "sm",
                                                                                    color: "currentColor",
                                                                                }),
                                                                        }),
                                                                        fullWidth: !0,
                                                                    }),
                                                                });
                                                            }
                                                            let t = U
                                                                    ? eN.intl.string(eN.t.cTdr3x)
                                                                    : eN.intl.string(eN.t.zqh7ZM),
                                                                n = !eF || U,
                                                                a = eN.intl.formatToPlainString(eN.t["fNG/05"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                l = n ? "".concat(a, ", ").concat(t) : a;
                                                            return (0, r.jsx)(p.u, {
                                                                position: "top",
                                                                text: t,
                                                                shouldShow: n,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(v.Button, {
                                                                    variant: i ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        (0, D.qA)({
                                                                            skuId: N.skuId,
                                                                            onCheckoutSuccess: (e) => {
                                                                                var t;
                                                                                let { entitlements: n } = e;
                                                                                (0, V.qg)({
                                                                                    variantsReturnStyle:
                                                                                        d.v.VARIANTS_GROUP,
                                                                                }),
                                                                                    u(),
                                                                                    (0, ey.Z)({
                                                                                        product: N,
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
                                                                    disabled: n,
                                                                    "aria-label": l,
                                                                    text: eN.intl.format(eN.t.kAgx5L, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(v.aQr, {
                                                                                className: eR.orbIconAligned,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            });
                                                        }
                                                        return (
                                                            (n = (0, K.x6)(N)
                                                                ? eN.intl.string(eN.t.V1AWw0)
                                                                : N.type === c.Z.PROFILE_EFFECT
                                                                  ? eN.intl.string(eN.t.kAeDcK)
                                                                  : N.type === c.Z.NAMEPLATE
                                                                    ? eN.intl.string(eN.t.H3vhqU)
                                                                    : eN.intl.string(eN.t.AQ0Veg)),
                                                            eB
                                                                ? (n = eN.intl.formatToPlainString(eN.t["5U5RB5"], {
                                                                      discountOfferAmount: eL,
                                                                  }))
                                                                : ej &&
                                                                  (n = eN.intl.formatToPlainString(eN.t["cNSL/j"], {
                                                                      price: (0, z.T4)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(v.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(v.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eG,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eb &&
                                                                        (0, r.jsx)(es.Z, {
                                                                            primary: i,
                                                                            product: N,
                                                                            onSuccess: u,
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
                                className: l()(eR.disclaimer, !ee && eR.disclaimerLight),
                                variant: "text-xxs/normal",
                                children: et && !k ? eN.intl.string(eN.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eF = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eR.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eR.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: eR.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eN.intl.string(eN.t.SZeUdR),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eF, {
                        user: a.mallow,
                        innerClassName: eR.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eR.nameplateRightPanePreviewSectionGroup,
                        children: [eN.intl.string(eN.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eF, {
                        user: a.phibi,
                        innerClassName: eR.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eR.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(y.Z, {
                            className: eR.nameplatePreview,
                            innerClassName: eR.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eF, {
                        user: a.locke,
                        innerClassName: eR.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eR.nameplateRightPanePreviewSectionGroup,
                        children: [eN.intl.string(eN.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eF, {
                        user: a.boom,
                        innerClassName: eR.userGreen,
                    }),
                    (0, r.jsx)(eF, {
                        user: a.cherry,
                        innerClassName: eR.userGreen,
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
            s = H.ZP.canUsePremiumProfileCustomization(n),
            u = (0, m.cj)([U.Z], () => U.Z.getAllPending()),
            { pendingAvatar: d } = u,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(u, ["pendingAvatar"]),
            f = (0, R.SD)({
                userId: n.id,
                image: d,
            }),
            v = t.type === c.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: b, firstProfileEffect: x, firstNameplate: P } = (0, $.Rj)(t),
            _ = null != x,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            E.Z,
                            eL(ek({}, p), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: b,
                                pendingProfileEffect: x,
                                disabledInputs: !0,
                                hideMessageInput: !_,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(ez, { user: n }),
                    ],
                }),
            O = (e) =>
                (0, r.jsx)(eG, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: b,
                });
        if (t.type === c.Z.BUNDLE) {
            if (!(0, ee.L)(t))
                return (0, r.jsx)("div", {
                    className: eR.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eR.combinedPreviewContent,
                        children: j(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    u = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === c.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: l()(eR.nameplatePreviewContainerInner, a && u ? eR.sliding : ""),
                          children: O(n),
                      })
                    : (0, r.jsx)("div", {
                          className: l()(eR.profileEffectPreviewsContainerInner, a && u ? eR.sliding : ""),
                          children: j(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: eR.nameplatePreviewContainerInner,
                  children: O(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === c.Z.AVATAR_DECORATION
                          ? eR.previewsContainerInner
                          : eR.profileEffectPreviewsContainerInner,
                  children: j(),
              });
    },
    ez = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.e5)(
                    eL(
                        ek(
                            {},
                            (0, O.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eN.intl.string(eN.t.d5YwK5),
                            }),
                        ),
                        {
                            state: eS.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eN.intl.string(eN.t["TN+ZvB"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: eR.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            w.Z,
                            {
                                className: eR.mockMessage,
                                author: (0, C.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eR.mockInput,
                            children: [
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eR.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eR.mockInputButton,
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
                product: a,
                category: o,
                returnRef: d,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: h,
                tab: g,
                isRental: P,
                rentalDuration: _,
            } = e,
            j = (0, m.e7)([M.default], () => M.default.getCurrentUser()),
            O = (0, eC.f)(a),
            { previewingVariantIndex: C } = O,
            w = (0, q.o)(a),
            I = (0, ex.N)(a, C),
            y = (0, eP.W)(a, w);
        s()(null != y, "Selected product should not be null");
        let { analyticsLocations: T } = (0, x.ZP)([...f, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ea.u9)(y.skuId);
        let S = (0, ej.kc)(o),
            A = (0, k.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != j && (0, L.Z)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let E = i.useMemo(() => (0, K.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            F.default.track(eS.rMx.OPEN_MODAL, {
                type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: T,
                sku_id: y.skuId,
                product_type: E,
            }),
                y.items.forEach(V.oK);
        }, [p, T, y.skuId, y.items, E]);
        let N = (0, D.r9)(),
            R = t === v.Dvm.EXITING,
            B = (0, e_.t0)(a),
            Z = null == B ? void 0 : B.amount,
            U = i.useMemo(() => ((0, K.x6)(y) ? y.items.length : 0), [y]),
            { activeSlide: G, isTransitioning: H } = (0, et.b)({
                slideCount: U,
                intervalMs: 5000,
            });
        return null == j
            ? null
            : (0, r.jsx)(x.Gt, {
                  value: T,
                  children: (0, r.jsxs)(v.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eR.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: v.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(v.hzk, {
                              "data-migration-pending": !0,
                              className: eR.modalContent,
                              children: [
                                  (0, r.jsx)(eM, {
                                      user: j,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: O,
                                      selectedVariantIndex: w,
                                      shouldCheckoutWithOrbs: h,
                                      activeBundleSlide: G,
                                      isRental: P,
                                      rentalDuration: _,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          eR.previewContainer,
                                          y.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? eR.fractionalNitroPreviewContainer
                                              : y.type === c.Z.AVATAR_DECORATION
                                                ? eR.collectiblePreviewsContainerWithChat
                                                : eR.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(S, ")") },
                                      children: [
                                          (0, eT.o0)(a.skuId)
                                              ? a.skuId === eT.Vt.ORB_PROFILE_BADGE
                                                  ? N || R
                                                      ? null
                                                      : (0, r.jsx)(ep.M, { user: j })
                                                  : a.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.q, {})
                                                    : (0, r.jsx)(ef.b, {
                                                          product: a,
                                                          className: eR.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eH, {
                                                    user: j,
                                                    product: null != I ? I : y,
                                                    activeBundleSlide: G,
                                                    isTransitioning: H,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eR.pdpControls,
                                              children: [
                                                  A &&
                                                      (0, r.jsx)(eg.a, {
                                                          product: a,
                                                          selectedVariantIndex: w,
                                                          className: eR.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(er.n, {
                                                      skuId: y.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": eN.intl.string(eN.t.cpT0Cq),
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
                          null != Z &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(v.mzw, {
                                      "data-migration-pending": !0,
                                      className: eR.modalFooter,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eR.modalFooterBackgroundImg,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eR.modalFooterContentContainer,
                                              children: [
                                                  (0, r.jsx)(v.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eR.modalFooterText,
                                                      children: eN.intl.format(eN.t["78ph4b"], {
                                                          discountOfferAmount: Z,
                                                      }),
                                                  }),
                                                  (null == B ? void 0 : B.expiresAt) != null &&
                                                      (0, r.jsx)(ei.R, { endDate: B.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
