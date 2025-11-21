n.d(t, { default: () => ez }), n(388685), n(953529);
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
    _ = n(786761),
    j = n(3148),
    O = n(739566),
    C = n(753206),
    w = n(4242),
    I = n(566697),
    y = n(333867),
    T = n(767714),
    S = n(150039),
    A = n(678135),
    E = n(876917),
    N = n(643879),
    R = n(567400),
    k = n(484459),
    L = n(706454),
    B = n(825102),
    Z = n(275388),
    D = n(25990),
    U = n(594174),
    M = n(626135),
    F = n(63063),
    G = n(74538),
    H = n(937615),
    z = n(335131),
    V = n(1870),
    W = n(429368),
    q = n(884697),
    K = n(635552),
    Y = n(83479),
    J = n(290175),
    X = n(724994),
    Q = n(328456),
    $ = n(330349),
    ee = n(556971),
    et = n(390698),
    en = n(525518),
    er = n(168020),
    ei = n(426171),
    ea = n(224068),
    el = n(813083),
    eo = n(680942),
    es = n(558060),
    ec = n(539598),
    eu = n(237031),
    ed = n(38914),
    em = n(259673),
    ep = n(508925),
    ef = n(953405),
    ev = n(453713),
    eh = n(143941),
    eg = n(616066),
    eb = n(332246),
    ex = n(58201),
    eP = n(445794),
    e_ = n(794324),
    ej = n(694364),
    eO = n(361110),
    eC = n(29121),
    ew = n(956472),
    eI = n(832149),
    ey = n(215023),
    eT = n(981631),
    eS = n(474936),
    eA = n(231338),
    eE = n(388032),
    eN = n(188336);
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
function ek(e, t) {
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
let eL = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            o = (0, q.x6)(n),
            { firstAvatarDecoration: s } = (0, Q.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: o ? eN.bundleAvatarPreviewContainer : eN.avatarPreviewContainer,
                  children: (0, r.jsx)(eg.R, {
                      user: a,
                      item: t,
                      isHighlighted: !0,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: o ? eN.bundlePfxPreviewContainer : eN.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(E.Z, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                    }),
                })
              : t.type === c.Z.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: eN.nameplatePreviewContainer,
                      children: (0, r.jsx)(I.Z, {
                          className: eN.nameplatePreview,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: s,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eB = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: eN.bundlePreviewContainer,
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
                                className: eN.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eL, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eN.bundleSlideTitle,
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
    eZ = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, q.x6)(t)
            ? (0, r.jsx)(eB, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, ey.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eL, {
                      item: t.items[0],
                      product: t,
                      user: n,
                  })
                : null;
    },
    eD = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: eN.learnMoreLink,
                  children: eE.intl.format(eE.t.Q1scdE, {
                      helpdeskArticle: F.Z.getArticleURL(eT.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eU = (e) => {
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
                rentalDuration: j,
            } = e,
            { analyticsLocations: O } = (0, x.ZP)(),
            C = (0, m.e7)([L.default], () => L.default.locale),
            w = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: I } = b,
            A = (0, eb.N)(t, I),
            E = (0, ex.W)(t, P);
        s()(null != E, "Selected product should not be null");
        let N = (0, X.L)(t),
            { isPurchased: R, isPartiallyOwnedBundle: k } = (0, X.L)(E),
            { isDisabled: D, disabledReason: U } = (0, J.G)(E.skuId),
            M = (0, q.ne)({
                product: E,
                isPartiallyOwnedBundle: k,
                isPurchased: R,
            }),
            F = (0, m.e7)([V.Z], () => V.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            W = (0, h.ZP)(),
            $ = (0, f.wj)(W),
            ee = (0, q.G1)(E),
            en = (0, q.ql)(E, eT.tuJ.DEFAULT),
            er = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: ei } = (0, Q.Rj)(null != A ? A : E),
            ed = i.useMemo(() => (0, q.BH)(E, w), [E, w]),
            { handleUseNow: em, isApplying: ep } = (0, K.W)({
                product: E,
                onSuccess: u,
            }),
            eh = (0, eC.To)(E),
            eg = (0, ej.J)(E),
            { enabled: e_ } = (0, B.WX)({ location: "collectibles_shop_product_details_modal" }),
            eO = (0, Y.G)(E, !1, j),
            eR = (0, eP.Iw)(t),
            ek = null != eR,
            {
                checkoutEligiblePrices: eL,
                isOrbExclusive: eB,
                hasSufficientOrbs: eU,
            } = (0, ew.Ip)({
                product: E,
                isPremiumUser: w,
                hasDiscountOffer: ek,
                isRental: null != j,
            }),
            eM = i.useCallback(
                () =>
                    (0, y.Z)({
                        skuId: E.skuId,
                        analyticsLocations: O,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eA.dG)()),
                    }),
                [O, u, E.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != ei) return (0, S.PO)(ei), () => (0, S.PO)(void 0);
            }, [ei]),
            (0, r.jsxs)("div", {
                className: eN.collectibleInfoContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: eN.titleContainer,
                        children: (0, r.jsx)(el.Z, { category: a }),
                    }),
                    (0, r.jsx)(eZ, {
                        product: null != A ? A : E,
                        user: n,
                        activeSlide: _,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eN.description,
                                children: [
                                    (0, r.jsx)(ea.Z, {
                                        product: E,
                                        isDarkText: !$,
                                        isOrbExclusive: eB,
                                        rentalDuration: j,
                                    }),
                                    (0, r.jsx)(v.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eN.headingWithItemTypePill,
                                        children: eh,
                                    }),
                                    (0, r.jsx)(v.Text, {
                                        variant: "text-sm/normal",
                                        children: eO,
                                    }),
                                    (0, r.jsx)(eD, { skuId: E.skuId }),
                                    N.isPurchased || N.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(et.U, {
                                              className: eN.priceTag,
                                              isPartiallyPurchased: k,
                                          })
                                        : ee
                                          ? (0, r.jsx)(v.Text, {
                                                variant: "text-md/semibold",
                                                className: eN.priceTag,
                                                children: eE.intl.string(eE.t.rt69oo),
                                            })
                                          : e_
                                            ? (0, r.jsx)(ef.a, {
                                                  prices: eL,
                                                  product: E,
                                                  isPremiumUser: w,
                                                  discount: ed,
                                                  hasSufficientOrbs: eU,
                                                  isProductDisabled: D,
                                                  discountOfferAmount: eR,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eN.priceTagContainer,
                                                  children: [
                                                      (0, r.jsx)(es.Z, {
                                                          product: E,
                                                          discount: ed,
                                                          isPremiumUser: w,
                                                          hideStrikethroughPrice: !w || ek,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eR,
                                                      }),
                                                      w || ek ? null : (0, r.jsx)(ec.Z, { product: E }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, r.jsx)(v.Rny, {
                                children: (0, r.jsx)(ev.P, {
                                    selectedVariantIndex: P,
                                    variantGroupProduct: t,
                                    previewingVariantIndexProps: b,
                                    className: eN.variantsSwitch,
                                }),
                            }),
                            null !== U &&
                                (0, r.jsx)(v.Text, {
                                    variant: "text-xs/normal",
                                    className: eN.disabledReason,
                                    children: U,
                                }),
                            (0, r.jsx)(v.Kqy, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ee && !w && !er) {
                                        let e;
                                        return (
                                            (e = eE.intl.string(eE.t.sEAnVH)),
                                            (0, r.jsx)(T.Z, {
                                                subscriptionTier: eS.Si.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eu.v,
                                                onSubscribeModalClose: () => {
                                                    (0, eu.T)({
                                                        product: E,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: o,
                                                        returnRef: g,
                                                        analyticsLocations: O,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return M
                                        ? R
                                            ? (0, r.jsx)(v.Button, {
                                                  variant: "primary",
                                                  onClick: em,
                                                  loading: ep,
                                                  text: eE.intl.string(eE.t.MAS7uK),
                                                  fullWidth: !0,
                                              })
                                            : ee
                                              ? (0, r.jsx)(v.Button, {
                                                    loading: F,
                                                    loadingStartedLabel: eE.intl.string(eE.t["TYw+9s"]),
                                                    loadingFinishedLabel: eE.intl.string(eE.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, z.fK)(E.skuId),
                                                            u(),
                                                            (0, eI.Z)({
                                                                product: E,
                                                                analyticsLocations: O,
                                                                purchaseType: ey.o8.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eE.intl.string(eE.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eL.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === eA.pK.DISCORD_ORB) {
                                                            if (null != j) {
                                                                let e = D
                                                                        ? eE.intl.string(eE.t.cTdr3x)
                                                                        : eE.intl.string(eE.t.zqh7ZM),
                                                                    t = !eU || D,
                                                                    n = eE.intl.formatToPlainString(eE.t.DlNs2T, {
                                                                        orbPrice: ey.As,
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
                                                                            (0, Z.qA)({
                                                                                skuId: E.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    var t, n;
                                                                                    let { entitlements: r } = e;
                                                                                    (0, z.qg)({
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
                                                                                              ).toLocaleDateString(C, {
                                                                                                  minute: "numeric",
                                                                                                  hour: "numeric",
                                                                                                  day: "numeric",
                                                                                                  month: "long",
                                                                                                  year: "numeric",
                                                                                              })
                                                                                            : void 0;
                                                                                    (0, eI.Z)({
                                                                                        product: E,
                                                                                        analyticsLocations: O,
                                                                                        itemConsumed:
                                                                                            null == (n = r[0])
                                                                                                ? void 0
                                                                                                : n.consumed,
                                                                                        purchaseType: ey.o8.ORB,
                                                                                        rentalDuration: j,
                                                                                        rentalExpiresAt: i,
                                                                                    });
                                                                                },
                                                                                analyticsLocations: O,
                                                                                isRental: !0,
                                                                            });
                                                                        },
                                                                        disabled: t,
                                                                        "aria-label": a,
                                                                        text: eE.intl.format(eE.t["4NKuqc"], {
                                                                            orbPrice: ey.As,
                                                                            orbIconHook: () =>
                                                                                (0, r.jsx)(v.aQr, {
                                                                                    className: eN.orbIconAligned,
                                                                                    size: "sm",
                                                                                    color: "currentColor",
                                                                                }),
                                                                        }),
                                                                        fullWidth: !0,
                                                                    }),
                                                                });
                                                            }
                                                            let t = D
                                                                    ? eE.intl.string(eE.t.cTdr3x)
                                                                    : eE.intl.string(eE.t.zqh7ZM),
                                                                n = !eU || D,
                                                                a = eE.intl.formatToPlainString(eE.t["fNG/05"], {
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
                                                                        (0, Z.qA)({
                                                                            skuId: E.skuId,
                                                                            onCheckoutSuccess: (e) => {
                                                                                var t;
                                                                                let { entitlements: n } = e;
                                                                                (0, z.qg)({
                                                                                    variantsReturnStyle:
                                                                                        d.v.VARIANTS_GROUP,
                                                                                }),
                                                                                    u(),
                                                                                    (0, eI.Z)({
                                                                                        product: E,
                                                                                        analyticsLocations: O,
                                                                                        itemConsumed:
                                                                                            null == (t = n[0])
                                                                                                ? void 0
                                                                                                : t.consumed,
                                                                                        purchaseType: ey.o8.ORB,
                                                                                    });
                                                                            },
                                                                            analyticsLocations: O,
                                                                        });
                                                                    },
                                                                    disabled: n,
                                                                    "aria-label": l,
                                                                    text: eE.intl.format(eE.t.kAgx5L, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(v.aQr, {
                                                                                className: eN.orbIconAligned,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            });
                                                        }
                                                        return (
                                                            (n = (0, q.x6)(E)
                                                                ? eE.intl.string(eE.t.V1AWw0)
                                                                : E.type === c.Z.PROFILE_EFFECT
                                                                  ? eE.intl.string(eE.t.kAeDcK)
                                                                  : E.type === c.Z.NAMEPLATE
                                                                    ? eE.intl.string(eE.t.H3vhqU)
                                                                    : eE.intl.string(eE.t.AQ0Veg)),
                                                            ek
                                                                ? (n = eE.intl.formatToPlainString(eE.t["5U5RB5"], {
                                                                      discountOfferAmount: eR,
                                                                  }))
                                                                : e_ &&
                                                                  (n = eE.intl.formatToPlainString(eE.t["cNSL/j"], {
                                                                      price: (0, H.T4)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(v.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(v.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eM,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eg &&
                                                                        (0, r.jsx)(eo.Z, {
                                                                            primary: i,
                                                                            product: E,
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
                                className: l()(eN.disclaimer, !$ && eN.disclaimerLight),
                                variant: "text-xxs/normal",
                                children: ee && !R ? eE.intl.string(eE.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eN.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eN.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eF = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, w.w$)();
        return (0, r.jsx)("div", {
            className: eN.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eE.intl.string(eE.t.SZeUdR),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eM, {
                        user: a.mallow,
                        innerClassName: eN.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eN.nameplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.phibi,
                        innerClassName: eN.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eN.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(I.Z, {
                            className: eN.nameplatePreview,
                            innerClassName: eN.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eM, {
                        user: a.locke,
                        innerClassName: eN.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eN.nameplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.boom,
                        innerClassName: eN.userGreen,
                    }),
                    (0, r.jsx)(eM, {
                        user: a.cherry,
                        innerClassName: eN.userGreen,
                    }),
                ],
            }),
        });
    },
    eG = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            u = (0, m.cj)([D.Z], () => D.Z.getAllPending()),
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
            f = (0, N.SD)({
                userId: n.id,
                image: d,
            }),
            v = t.type === c.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: b, firstProfileEffect: x, firstNameplate: P } = (0, Q.Rj)(t),
            _ = null != x,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            A.Z,
                            ek(eR({}, p), {
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
                        v && (0, r.jsx)(eH, { user: n }),
                    ],
                }),
            O = (e) =>
                (0, r.jsx)(eF, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: b,
                });
        if (t.type === c.Z.BUNDLE) {
            if (!(0, $.L)(t))
                return (0, r.jsx)("div", {
                    className: eN.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eN.combinedPreviewContent,
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
                          className: l()(eN.nameplatePreviewContainerInner, a && u ? eN.sliding : ""),
                          children: O(n),
                      })
                    : (0, r.jsx)("div", {
                          className: l()(eN.profileEffectPreviewsContainerInner, a && u ? eN.sliding : ""),
                          children: j(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: eN.nameplatePreviewContainerInner,
                  children: O(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === c.Z.AVATAR_DECORATION
                          ? eN.previewsContainerInner
                          : eN.profileEffectPreviewsContainerInner,
                  children: j(),
              });
    },
    eH = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, _.e5)(
                    ek(
                        eR(
                            {},
                            (0, j.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eE.intl.string(eE.t.d5YwK5),
                            }),
                        ),
                        {
                            state: eT.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eE.intl.string(eE.t["TN+ZvB"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: eN.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            C.Z,
                            {
                                className: eN.mockMessage,
                                author: (0, O.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eN.mockInput,
                            children: [
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eN.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eN.mockInputButton,
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
                product: a,
                category: o,
                returnRef: d,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: h,
                tab: g,
                rentalDuration: P,
            } = e,
            _ = (0, m.e7)([U.default], () => U.default.getCurrentUser()),
            j = (0, eO.f)(a),
            { previewingVariantIndex: O } = j,
            C = (0, W.o)(a),
            w = (0, eb.N)(a, O),
            I = (0, ex.W)(a, C);
        s()(null != I, "Selected product should not be null");
        let { analyticsLocations: y } = (0, x.ZP)([...f, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(I.skuId);
        let T = (0, e_.kc)(o),
            S = (0, R.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != _ && (0, k.Z)(_.id, _.getAvatarURL(void 0, 80));
        }, [_]);
        let A = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eT.rMx.OPEN_MODAL, {
                type: eT.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: y,
                sku_id: I.skuId,
                product_type: A,
            }),
                I.items.forEach(z.oK);
        }, [p, y, I.skuId, I.items, A]);
        let E = (0, Z.r9)(),
            N = t === v.Dvm.EXITING,
            L = (0, eP.t0)(a),
            B = null == L ? void 0 : L.amount,
            D = i.useMemo(() => ((0, q.x6)(I) ? I.items.length : 0), [I]),
            { activeSlide: F, isTransitioning: G } = (0, ee.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == _
            ? null
            : (0, r.jsx)(x.Gt, {
                  value: y,
                  children: (0, r.jsxs)(v.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eN.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: v.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(v.hzk, {
                              "data-migration-pending": !0,
                              className: eN.modalContent,
                              children: [
                                  (0, r.jsx)(eU, {
                                      user: _,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: j,
                                      selectedVariantIndex: C,
                                      shouldCheckoutWithOrbs: h,
                                      activeBundleSlide: F,
                                      rentalDuration: P,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          eN.previewContainer,
                                          I.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? eN.fractionalNitroPreviewContainer
                                              : I.type === c.Z.AVATAR_DECORATION
                                                ? eN.collectiblePreviewsContainerWithChat
                                                : eN.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(T, ")") },
                                      children: [
                                          (0, ey.o0)(a.skuId)
                                              ? a.skuId === ey.Vt.ORB_PROFILE_BADGE
                                                  ? E || N
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: _ })
                                                  : a.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: a,
                                                          className: eN.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eG, {
                                                    user: _,
                                                    product: null != w ? w : I,
                                                    activeBundleSlide: F,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eN.pdpControls,
                                              children: [
                                                  S &&
                                                      (0, r.jsx)(eh.a, {
                                                          product: a,
                                                          selectedVariantIndex: C,
                                                          className: eN.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: I.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": eE.intl.string(eE.t.cpT0Cq),
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
                          null != B &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(v.mzw, {
                                      "data-migration-pending": !0,
                                      className: eN.modalFooter,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eN.modalFooterBackgroundImg,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eN.modalFooterContentContainer,
                                              children: [
                                                  (0, r.jsx)(v.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eN.modalFooterText,
                                                      children: eE.intl.format(eE.t["78ph4b"], {
                                                          discountOfferAmount: B,
                                                      }),
                                                  }),
                                                  (null == L ? void 0 : L.expiresAt) != null &&
                                                      (0, r.jsx)(er.R, { endDate: L.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
