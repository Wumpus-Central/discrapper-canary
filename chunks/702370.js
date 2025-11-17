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
    _ = n(104505),
    j = n(786761),
    O = n(3148),
    C = n(739566),
    w = n(753206),
    I = n(4242),
    y = n(566697),
    T = n(333867),
    S = n(767714),
    E = n(150039),
    A = n(678135),
    N = n(876917),
    R = n(643879),
    k = n(567400),
    L = n(484459),
    B = n(825102),
    Z = n(275388),
    U = n(25990),
    D = n(594174),
    M = n(626135),
    F = n(63063),
    G = n(74538),
    H = n(937615),
    z = n(335131),
    V = n(1870),
    W = n(429368),
    K = n(884697),
    q = n(635552),
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
    eE = n(231338),
    eA = n(388032),
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
            o = (0, _.X)(l),
            s = (0, K.x6)(n),
            { firstAvatarDecoration: u } = (0, Q.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? eN.bundleAvatarPreviewContainer : eN.avatarPreviewContainer,
                  children: (0, r.jsx)(eg.R, {
                      user: a,
                      item: t,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? eN.bundlePfxPreviewContainer : eN.pfxPreviewContainer,
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
                      className: eN.nameplatePreviewContainer,
                      children: (0, r.jsx)(y.Z, {
                          className: eN.nameplatePreview,
                          nameplate: t,
                          isHighlighted: o,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: u,
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
        return (0, K.x6)(t)
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
    eU = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: eN.learnMoreLink,
                  children: eA.intl.format(eA.t.Q1scdE, {
                      helpdeskArticle: F.Z.getArticleURL(eT.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eD = (e) => {
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
            } = e,
            { analyticsLocations: j } = (0, x.ZP)(),
            O = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: C } = b,
            w = (0, eb.N)(t, C),
            I = (0, ex.W)(t, P);
        s()(null != I, "Selected product should not be null");
        let y = (0, X.L)(t),
            { isPurchased: A, isPartiallyOwnedBundle: N } = (0, X.L)(I),
            { isDisabled: R, disabledReason: k } = (0, J.G)(I.skuId),
            L = (0, K.ne)({
                product: I,
                isPartiallyOwnedBundle: N,
                isPurchased: A,
            }),
            U = (0, m.e7)([V.Z], () => V.Z.isClaiming === (null == I ? void 0 : I.skuId)),
            D = (0, h.ZP)(),
            M = (0, f.wj)(D),
            F = (0, K.G1)(I),
            W = (0, K.ql)(I, eT.tuJ.DEFAULT),
            $ = (null == W ? void 0 : W.amount) === 0,
            { firstAvatarDecoration: ee } = (0, Q.Rj)(null != w ? w : I),
            en = i.useMemo(() => (0, K.BH)(I, O), [I, O]),
            { handleUseNow: er, isApplying: ei } = (0, q.W)({
                product: I,
                onSuccess: u,
            }),
            ed = (0, eC.To)(I),
            em = (0, ej.J)(I),
            { enabled: ep } = (0, B.WX)({ location: "collectibles_shop_product_details_modal" }),
            eh = (0, eP.Iw)(t),
            eg = null != eh,
            {
                checkoutEligiblePrices: e_,
                isOrbExclusive: eO,
                hasSufficientOrbs: eR,
            } = (0, ew.Ip)({
                product: I,
                isPremiumUser: O,
                hasDiscountOffer: eg,
            }),
            ek = i.useCallback(
                () =>
                    (0, T.Z)({
                        skuId: I.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eE.dG)()),
                    }),
                [j, u, I.skuId],
            );
        i.useEffect(() => {
            if (null != ee) return (0, E.PO)(ee), () => (0, E.PO)(void 0);
        }, [ee]);
        let eL = (0, Y.G)(I);
        return (0, r.jsxs)("div", {
            className: eN.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eN.titleContainer,
                    children: (0, r.jsx)(el.Z, { category: a }),
                }),
                (0, r.jsx)(eZ, {
                    product: null != w ? w : I,
                    user: n,
                    activeSlide: _,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eN.description,
                            children: [
                                (0, r.jsx)(ea.Z, {
                                    product: I,
                                    isDarkText: !M,
                                    isOrbExclusive: eO,
                                }),
                                (0, r.jsx)(v.Heading, {
                                    variant: "heading-xl/extrabold",
                                    className: eN.headingWithItemTypePill,
                                    children: ed,
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: "text-sm/normal",
                                    children: eL,
                                }),
                                (0, r.jsx)(eU, { skuId: I.skuId }),
                                y.isPurchased || y.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: eN.priceTag,
                                          isPartiallyPurchased: N,
                                      })
                                    : F
                                      ? (0, r.jsx)(v.Text, {
                                            variant: "text-md/semibold",
                                            className: eN.priceTag,
                                            children: eA.intl.string(eA.t.rt69oo),
                                        })
                                      : ep
                                        ? (0, r.jsx)(ef.a, {
                                              prices: e_,
                                              product: I,
                                              isPremiumUser: O,
                                              discount: en,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: R,
                                              discountOfferAmount: eh,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eN.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: I,
                                                      discount: en,
                                                      isPremiumUser: O,
                                                      hideStrikethroughPrice: !O || eg,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eh,
                                                  }),
                                                  O || eg ? null : (0, r.jsx)(ec.Z, { product: I }),
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
                        null !== k &&
                            (0, r.jsx)(v.Text, {
                                variant: "text-xs/normal",
                                className: eN.disabledReason,
                                children: k,
                            }),
                        (0, r.jsx)(v.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if (F && !O && !$) {
                                    let e;
                                    return (
                                        (e = eA.intl.string(eA.t.sEAnVH)),
                                        (0, r.jsx)(S.Z, {
                                            subscriptionTier: eS.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eu.v,
                                            onSubscribeModalClose: () => {
                                                (0, eu.T)({
                                                    product: I,
                                                    category: a,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: g,
                                                    analyticsLocations: j,
                                                });
                                            },
                                        })
                                    );
                                }
                                return L
                                    ? A
                                        ? (0, r.jsx)(v.Button, {
                                              variant: "primary",
                                              onClick: er,
                                              loading: ei,
                                              text: eA.intl.string(eA.t.MAS7uK),
                                              fullWidth: !0,
                                          })
                                        : F
                                          ? (0, r.jsx)(v.Button, {
                                                loading: U,
                                                loadingStartedLabel: eA.intl.string(eA.t["TYw+9s"]),
                                                loadingFinishedLabel: eA.intl.string(eA.t.Pg1UP5),
                                                onClick: async () => {
                                                    await (0, z.fK)(I.skuId),
                                                        u(),
                                                        (0, eI.Z)({
                                                            product: I,
                                                            analyticsLocations: j,
                                                            purchaseType: ey.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eA.intl.string(eA.t.zp6caO),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: e_.map((e, t) => {
                                                    let n,
                                                        i = 0 === t;
                                                    if (e.currency === eE.pK.DISCORD_ORB) {
                                                        let t = R
                                                                ? eA.intl.string(eA.t.cTdr3x)
                                                                : eA.intl.string(eA.t.zqh7ZM),
                                                            n = !eR || R,
                                                            a = eA.intl.formatToPlainString(eA.t["fNG/05"], {
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
                                                                        skuId: I.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: d.v.VARIANTS_GROUP,
                                                                            }),
                                                                                u(),
                                                                                (0, eI.Z)({
                                                                                    product: I,
                                                                                    analyticsLocations: j,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: ey.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: j,
                                                                    });
                                                                },
                                                                disabled: n,
                                                                "aria-label": l,
                                                                text: eA.intl.format(eA.t.kAgx5L, {
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
                                                        (n = (0, K.x6)(I)
                                                            ? eA.intl.string(eA.t.V1AWw0)
                                                            : I.type === c.Z.PROFILE_EFFECT
                                                              ? eA.intl.string(eA.t.kAeDcK)
                                                              : I.type === c.Z.NAMEPLATE
                                                                ? eA.intl.string(eA.t.H3vhqU)
                                                                : eA.intl.string(eA.t.AQ0Veg)),
                                                        eg
                                                            ? (n = eA.intl.formatToPlainString(eA.t["5U5RB5"], {
                                                                  discountOfferAmount: eh,
                                                              }))
                                                            : ep &&
                                                              (n = eA.intl.formatToPlainString(eA.t["cNSL/j"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(v.ButtonGroup, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(v.Button, {
                                                                    variant: i ? "primary" : "secondary",
                                                                    onClick: ek,
                                                                    text: n,
                                                                    fullWidth: !0,
                                                                }),
                                                                em &&
                                                                    (0, r.jsx)(eo.Z, {
                                                                        primary: i,
                                                                        product: I,
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
                            className: l()(eN.disclaimer, !M && eN.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: F && !A ? eA.intl.string(eA.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
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
            a = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: eN.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eA.intl.string(eA.t.SZeUdR),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eM, {
                        user: a.mallow,
                        innerClassName: eN.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eN.nameplateRightPanePreviewSectionGroup,
                        children: [eA.intl.string(eA.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.phibi,
                        innerClassName: eN.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eN.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(y.Z, {
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
                        children: [eA.intl.string(eA.t["NG43/6"]), " - 12"],
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
                return (0, j.e5)(
                    ek(
                        eR(
                            {},
                            (0, O.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eA.intl.string(eA.t.d5YwK5),
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
            "aria-label": eA.intl.string(eA.t["TN+ZvB"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: eN.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            w.Z,
                            {
                                className: eN.mockMessage,
                                author: (0, C.ZH)(n),
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
            } = e,
            P = (0, m.e7)([D.default], () => D.default.getCurrentUser()),
            _ = (0, eO.f)(a),
            { previewingVariantIndex: j } = _,
            O = (0, W.o)(a),
            C = (0, eb.N)(a, j),
            w = (0, ex.W)(a, O);
        s()(null != w, "Selected product should not be null");
        let { analyticsLocations: I } = (0, x.ZP)([...f, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(w.skuId);
        let y = (0, e_.kc)(o),
            T = (0, k.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != P && (0, L.Z)(P.id, P.getAvatarURL(void 0, 80));
        }, [P]);
        let S = i.useMemo(() => (0, K.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eT.rMx.OPEN_MODAL, {
                type: eT.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: I,
                sku_id: w.skuId,
                product_type: S,
            }),
                w.items.forEach(z.oK);
        }, [p, I, w.skuId, w.items, S]);
        let E = (0, Z.r9)(),
            A = t === v.Dvm.EXITING,
            N = (0, eP.t0)(a),
            R = null == N ? void 0 : N.amount,
            B = i.useMemo(() => ((0, K.x6)(w) ? w.items.length : 0), [w]),
            { activeSlide: U, isTransitioning: F } = (0, ee.b)({
                slideCount: B,
                intervalMs: 5000,
            });
        return null == P
            ? null
            : (0, r.jsx)(x.Gt, {
                  value: I,
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
                                  (0, r.jsx)(eD, {
                                      user: P,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: _,
                                      selectedVariantIndex: O,
                                      shouldCheckoutWithOrbs: h,
                                      activeBundleSlide: U,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          eN.previewContainer,
                                          w.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? eN.fractionalNitroPreviewContainer
                                              : w.type === c.Z.AVATAR_DECORATION
                                                ? eN.collectiblePreviewsContainerWithChat
                                                : eN.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(y, ")") },
                                      children: [
                                          (0, ey.o0)(a.skuId)
                                              ? a.skuId === ey.Vt.ORB_PROFILE_BADGE
                                                  ? E || A
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: P })
                                                  : a.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: a,
                                                          className: eN.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eG, {
                                                    user: P,
                                                    product: null != C ? C : w,
                                                    activeBundleSlide: U,
                                                    isTransitioning: F,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eN.pdpControls,
                                              children: [
                                                  T &&
                                                      (0, r.jsx)(eh.a, {
                                                          product: a,
                                                          selectedVariantIndex: O,
                                                          className: eN.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: w.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": eA.intl.string(eA.t.cpT0Cq),
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
                          null != R &&
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
                                                      children: eA.intl.format(eA.t["78ph4b"], {
                                                          discountOfferAmount: R,
                                                      }),
                                                  }),
                                                  (null == N ? void 0 : N.expiresAt) != null &&
                                                      (0, r.jsx)(er.R, { endDate: N.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
