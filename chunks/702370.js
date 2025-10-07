n.d(t, { default: () => eW }), n(388685), n(314940), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    p = n(311570),
    v = n(399606),
    f = n(28664),
    h = n(780384),
    _ = n(481060),
    g = n(809206),
    b = n(410030),
    x = n(607070),
    P = n(100527),
    C = n(906732),
    I = n(570908),
    j = n(104505),
    w = n(786761),
    T = n(3148),
    O = n(739566),
    E = n(753206),
    S = n(4242),
    A = n(333867),
    N = n(767714),
    y = n(678135),
    k = n(876917),
    R = n(643879),
    L = n(567400),
    B = n(484459),
    Z = n(825102),
    U = n(275388),
    D = n(25990),
    F = n(594174),
    M = n(626135),
    H = n(63063),
    G = n(74538),
    z = n(937615),
    V = n(335131),
    W = n(1870),
    Y = n(429368),
    q = n(884697),
    K = n(635552),
    X = n(83479),
    J = n(290175),
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
    ev = n(508925),
    ef = n(953405),
    eh = n(453713),
    e_ = n(325834),
    eg = n(143941),
    eb = n(616066),
    ex = n(22267),
    eP = n(332246),
    eC = n(58201),
    eI = n(445794),
    ej = n(794324),
    ew = n(361110),
    eT = n(29121),
    eO = n(956472),
    eE = n(832149),
    eS = n(215023),
    eA = n(981631),
    eN = n(474936),
    ey = n(231338),
    ek = n(388032),
    eR = n(188336);
function eL(e) {
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
let eZ = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, j.X)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: a ? eR.bundleAvatarPreviewContainer : eR.avatarPreviewContainer,
                    children: (0, r.jsx)(eb.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: a ? eR.bundlePfxPreviewContainer : eR.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(k.Z, {
                        skuId: t.skuId,
                        isHighlighted: o,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: l,
                    className: eR.nameplatePreviewContainer,
                    children: (0, r.jsx)(ex.Z, {
                        className: eR.nameplatePreview,
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
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: eR.bundlePreviewContainer,
            children: (0, r.jsx)(_.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(a, ")");
                    return (0, r.jsx)(
                        _.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: eR.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eZ, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(_.Text, {
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
        return (0, q.x6)(t)
            ? (0, r.jsx)(eU, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eS.o0)(t.skuId)
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
    eF = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  className: eR.learnMoreLink,
                  children: ek.intl.format(ek.t.Q1scdH, {
                      helpdeskArticle: H.Z.getArticleURL(eA.BhN.FRACTIONAL_PREMIUM_ABOUT),
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
                onClose: c,
                returnRef: m,
                previewingVariantIndexProps: x,
                selectedVariantIndex: P,
                tab: I,
                activeBundleSlide: j,
                variantType: w,
            } = e,
            { analyticsLocations: T } = (0, C.ZP)(),
            O = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: E } = x,
            S = (0, eP.N)(t, E),
            y = (0, eC.W)(t, P);
        s()(null != y, "Selected product should not be null");
        let k = (0, Q.L)(t),
            { isPurchased: R, isPartiallyOwnedBundle: L } = (0, Q.L)(y),
            { isDisabled: B, disabledReason: D } = (0, J.G)(y.skuId),
            F = (0, q.ne)({
                product: y,
                isPartiallyOwnedBundle: L,
                isPurchased: R,
            }),
            M = (0, v.e7)([W.Z], () => W.Z.isClaiming === (null == y ? void 0 : y.skuId)),
            H = (0, b.ZP)(),
            Y = (0, h.wj)(H),
            ee = (0, q.G1)(y),
            et = (0, q.ql)(y, eA.tuJ.DEFAULT),
            er = (null == et ? void 0 : et.amount) === 0,
            { firstAvatarDecoration: ei } = (0, $.Rj)(null != S ? S : y),
            ea = i.useMemo(() => (0, q.BH)(y, O), [y, O]),
            { handleUseNow: em, isApplying: ep } = (0, K.W)({
                product: y,
                onSuccess: c,
            }),
            ev = (0, eT.To)(y),
            { enabled: eg } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, eI.Iw)(t),
            ex = null != eb,
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: ew,
                hasSufficientOrbs: eL,
            } = (0, eO.Ip)({
                product: y,
                isPremiumUser: O,
                tab: I,
                hasDiscountOffer: ex,
            }),
            eB = i.useCallback(
                () =>
                    (0, A.Z)({
                        skuId: y.skuId,
                        analyticsLocations: T,
                        variantsReturnStyle: p.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, ey.dG)()),
                    }),
                [T, c, y.skuId],
            );
        i.useEffect(() => {
            if (null != ei) return (0, g.cV)(ei), () => (0, g.cV)(void 0);
        }, [ei]);
        let eZ = (0, X.G)(y);
        return (0, r.jsxs)("div", {
            className: eR.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eR.titleContainer,
                    children: (0, r.jsx)(eo.Z, {
                        category: a,
                        display: eo.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eD, {
                    product: null != S ? S : y,
                    user: n,
                    activeSlide: j,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eR.description,
                            children: [
                                (0, r.jsx)(el.Z, {
                                    product: y,
                                    isDarkText: !Y,
                                    isOrbExclusive: ew,
                                }),
                                (0, r.jsx)(_.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eR.headingWithItemTypePill,
                                    children: ev,
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-sm/normal",
                                    children: eZ,
                                }),
                                (0, r.jsx)(eF, { skuId: y.skuId }),
                                k.isPurchased || k.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(en.U, {
                                          className: eR.priceTag,
                                          isPartiallyPurchased: L,
                                      })
                                    : ee
                                      ? (0, r.jsx)(_.Text, {
                                            variant: "text-md/semibold",
                                            className: eR.priceTag,
                                            children: ek.intl.string(ek.t.rt69oq),
                                        })
                                      : eg
                                        ? (0, r.jsx)(ef.a, {
                                              prices: ej,
                                              product: y,
                                              isPremiumUser: O,
                                              discount: ea,
                                              hasSufficientOrbs: eL,
                                              isProductDisabled: B,
                                              discountOfferAmount: eb,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eR.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(ec.Z, {
                                                      product: y,
                                                      discount: ea,
                                                      isPremiumUser: O,
                                                      hideStrikethroughPrice: !O || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eb,
                                                  }),
                                                  O || ex ? null : (0, r.jsx)(eu.Z, { product: y }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(_.Rny, {
                            children:
                                w === eS.Ch.DEFAULT
                                    ? (0, r.jsx)(eh.P, {
                                          selectedVariantIndex: P,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: x,
                                          className: eR.variantsSwitch,
                                      })
                                    : (0, r.jsx)(e_.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: x,
                                          className: eR.variantsThumbnail,
                                          selectedVariantIndex: P,
                                      }),
                        }),
                        null !== D &&
                            (0, r.jsx)(_.Text, {
                                variant: "text-xs/normal",
                                className: eR.disabledReason,
                                children: D,
                            }),
                        (0, r.jsx)(_.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if (ee && !O && !er) {
                                    let e;
                                    return (
                                        (e = ek.intl.string(ek.t.sEAnVF)),
                                        (0, r.jsx)(N.Z, {
                                            subscriptionTier: eN.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: ed.v,
                                            onSubscribeModalClose: () => {
                                                (0, ed.T)({
                                                    product: y,
                                                    category: a,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: T,
                                                    variantType: w,
                                                });
                                            },
                                        })
                                    );
                                }
                                return F
                                    ? R
                                        ? (0, r.jsx)(_.zxk, {
                                              variant: "primary",
                                              onClick: em,
                                              loading: ep,
                                              text: ek.intl.string(ek.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : ee
                                          ? (0, r.jsx)(_.zxk, {
                                                loading: M,
                                                loadingStartedLabel: ek.intl.string(ek.t["TYw+9v"]),
                                                loadingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, V.fK)(y.skuId),
                                                        c(),
                                                        (0, eE.Z)({
                                                            product: y,
                                                            analyticsLocations: T,
                                                            purchaseType: eS.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: ek.intl.string(ek.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ej.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === ey.pK.DISCORD_ORB) {
                                                        let t = B
                                                                ? ek.intl.string(ek.t.cTdr39)
                                                                : ek.intl.string(ek.t.zqh7ZG),
                                                            i = !eL || B,
                                                            a = ek.intl.formatToPlainString(ek.t["fNG/09"], {
                                                                orbPrice: e.amount,
                                                            }),
                                                            l = i ? "".concat(a, ", ").concat(t) : a;
                                                        return (0, r.jsx)(f.u, {
                                                            position: "top",
                                                            text: t,
                                                            shouldShow: i,
                                                            "aria-label": !1,
                                                            children: (0, r.jsx)(_.zxk, {
                                                                variant: n ? "primary" : "secondary",
                                                                onClick: () => {
                                                                    (0, U.qA)({
                                                                        skuId: y.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, V.qg)({
                                                                                variantsReturnStyle: p.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eE.Z)({
                                                                                    product: y,
                                                                                    analyticsLocations: T,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eS.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: T,
                                                                    });
                                                                },
                                                                disabled: i,
                                                                "aria-label": l,
                                                                text: ek.intl.format(ek.t.kAgx5O, {
                                                                    orbPrice: e.amount,
                                                                    orbIconHook: () =>
                                                                        (0, r.jsx)(_.aQr, {
                                                                            className: eR.orbIconAligned,
                                                                            size: "sm",
                                                                            color: "currentColor",
                                                                        }),
                                                                }),
                                                                fullWidth: !0,
                                                            }),
                                                        });
                                                    }
                                                    let i = !ee && !er && !u.tq && !ew && F,
                                                        a = (0, q.x6)(y)
                                                            ? ek.intl.string(ek.t.V1AWw8)
                                                            : y.type === d.Z.PROFILE_EFFECT
                                                              ? ek.intl.string(ek.t.kAeDcH)
                                                              : y.type === d.Z.NAMEPLATE
                                                                ? ek.intl.string(ek.t.H3vhqa)
                                                                : ek.intl.string(ek.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (a = ek.intl.formatToPlainString(ek.t["5U5RBw"], {
                                                                  discountOfferAmount: eb,
                                                              }))
                                                            : eg &&
                                                              (a = ek.intl.formatToPlainString(ek.t["cNSL/v"], {
                                                                  price: (0, z.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(_.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(_.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: a,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(es.Z, {
                                                                        primary: n,
                                                                        product: y,
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
                        (0, r.jsx)(_.Text, {
                            className: l()(eR.disclaimer, !Y && eR.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: ee && !R ? ek.intl.string(ek.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eH = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eR.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(I.Z, {
                avatar: (0, r.jsx)(_.qEK, {
                    src: t.avatarSrc,
                    size: _.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: _.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eR.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, S.w$)();
        return (0, r.jsx)("div", {
            className: eR.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": ek.intl.string(ek.t.SZeUdX),
            children: (0, r.jsxs)(_.Rny, {
                children: [
                    (0, r.jsx)(eH, {
                        user: i.mallow,
                        innerClassName: eR.userBlue,
                    }),
                    (0, r.jsxs)(_.Text, {
                        variant: "text-sm/semibold",
                        className: eR.nameplateRightPanePreviewSectionGroup,
                        children: [ek.intl.string(ek.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eH, {
                        user: i.phibi,
                        innerClassName: eR.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eR.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(ex.Z, {
                            className: eR.nameplatePreview,
                            innerClassName: eR.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                        }),
                    }),
                    (0, r.jsx)(eH, {
                        user: i.locke,
                        innerClassName: eR.userPink,
                    }),
                    (0, r.jsxs)(_.Text, {
                        variant: "text-sm/semibold",
                        className: eR.nameplateRightPanePreviewSectionGroup,
                        children: [ek.intl.string(ek.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eH, {
                        user: i.boom,
                        innerClassName: eR.userGreen,
                    }),
                    (0, r.jsx)(eH, {
                        user: i.cherry,
                        innerClassName: eR.userGreen,
                    }),
                ],
            }),
        });
    },
    ez = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, v.e7)([x.Z], () => x.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            c = (0, v.cj)([D.Z], () => D.Z.getAllPending()),
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
            })(c, ["pendingAvatar"]),
            p = (0, R.SD)({
                userId: n.id,
                image: u,
            }),
            f = t.type === d.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: _, firstProfileEffect: g, firstNameplate: b } = (0, $.Rj)(t),
            P = null != g,
            C = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            y.Z,
                            eB(eL({}, m), {
                                pendingAvatar: p,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: _,
                                pendingProfileEffect: g,
                                disabledInputs: !0,
                                hideMessageInput: !P,
                                hideCustomStatus: !0,
                                hideBioSection: f,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        f && (0, r.jsx)(eV, { user: n }),
                    ],
                }),
            I = (e) =>
                (0, r.jsx)(eG, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === d.Z.BUNDLE) {
            if (!(0, ee.L)(t))
                return (0, r.jsx)("div", {
                    className: eR.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eR.combinedPreviewContent,
                        children: C(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    c = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === d.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: l()(eR.nameplatePreviewContainerInner, a && c ? eR.sliding : ""),
                          children: I(n),
                      })
                    : (0, r.jsx)("div", {
                          className: l()(eR.profileEffectPreviewsContainerInner, a && c ? eR.sliding : ""),
                          children: C(),
                      });
            }
        }
        return null != b
            ? (0, r.jsx)("div", {
                  className: eR.nameplatePreviewContainerInner,
                  children: I(b),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === d.Z.AVATAR_DECORATION
                          ? eR.previewsContainerInner
                          : eR.profileEffectPreviewsContainerInner,
                  children: C(),
              });
    },
    eV = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, w.e5)(
                    eB(
                        eL(
                            {},
                            (0, T.ZP)({
                                author: t,
                                channelId: "1337",
                                content: ek.intl.string(ek.t.d5YwKy),
                            }),
                        ),
                        {
                            state: eA.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ek.intl.string(ek.t["TN+ZvL"]),
            children: (0, r.jsx)(_.Rny, {
                children: (0, r.jsxs)(_.Zbd, {
                    className: eR.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            E.Z,
                            {
                                className: eR.mockMessage,
                                author: (0, O.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eR.mockInput,
                            children: [
                                (0, r.jsx)(_.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eR.mockInputButton,
                                }),
                                (0, r.jsx)(_.EO4, {
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
    eW = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: o,
                returnRef: c,
                analyticsSource: u,
                analyticsLocations: p,
                shouldCheckoutWithOrbs: f,
                tab: h,
                variantType: g = eS.Ch.DEFAULT,
            } = e,
            b = (0, v.e7)([F.default], () => F.default.getCurrentUser()),
            x = (0, ew.f)(a),
            { previewingVariantIndex: I } = x,
            j = (0, v.e7)([W.Z], () => W.Z.purchases),
            w = (0, Y.o)(a, j),
            T = (0, eP.N)(a, I),
            O = (0, eC.W)(a, w);
        s()(null != O, "Selected product should not be null");
        let { analyticsLocations: E } = (0, C.ZP)([...p, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ea.u9)(O.skuId);
        let S = (0, ej.kc)(o),
            A = (0, L.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != b && (0, B.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let N = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eA.rMx.OPEN_MODAL, {
                type: eA.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: u,
                location_stack: E,
                sku_id: O.skuId,
                product_type: N,
            }),
                O.items.forEach(V.oK);
        }, [u, E, O.skuId, O.items, N]);
        let y = (0, U.r9)(),
            k = t === _.Dvm.EXITING,
            R = (0, eI.t0)(a),
            Z = null == R ? void 0 : R.amount,
            D = i.useMemo(() => ((0, q.x6)(O) ? O.items.length : 0), [O]),
            { activeSlide: H, isTransitioning: G } = (0, et.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == b
            ? null
            : (0, r.jsx)(C.Gt, {
                  value: E,
                  children: (0, r.jsxs)(_.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eR.modalRoot,
                      returnRef: c,
                      transitionState: t,
                      size: _.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(_.hzk, {
                              "data-migration-pending": !0,
                              className: eR.modalContent,
                              children: [
                                  (0, r.jsx)(eM, {
                                      user: b,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: x,
                                      selectedVariantIndex: w,
                                      shouldCheckoutWithOrbs: f,
                                      tab: h,
                                      activeBundleSlide: H,
                                      variantType: g,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          eR.previewContainer,
                                          O.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? eR.fractionalNitroPreviewContainer
                                              : O.type === d.Z.AVATAR_DECORATION
                                                ? eR.collectiblePreviewsContainerWithChat
                                                : eR.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(S, ")") },
                                      children: [
                                          (0, eS.o0)(a.skuId)
                                              ? a.skuId === eS.Vt.ORB_PROFILE_BADGE
                                                  ? y || k
                                                      ? null
                                                      : (0, r.jsx)(ep.M, { user: b })
                                                  : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.q, {})
                                                    : (0, r.jsx)(ev.b, {
                                                          product: a,
                                                          className: eR.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(ez, {
                                                    user: b,
                                                    product: null != T ? T : O,
                                                    activeBundleSlide: H,
                                                    isTransitioning: G,
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
                                                      skuId: O.skuId,
                                                      tab: h,
                                                  }),
                                                  (0, r.jsx)(_.hU, {
                                                      "aria-label": ek.intl.string(ek.t.cpT0Cg),
                                                      onClick: n,
                                                      icon: _.Uz9,
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
                                  children: (0, r.jsxs)(_.mzw, {
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
                                                  (0, r.jsx)(_.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eR.modalFooterText,
                                                      children: ek.intl.format(ek.t["78ph4e"], {
                                                          discountOfferAmount: Z,
                                                      }),
                                                  }),
                                                  (null == R ? void 0 : R.expiresAt) != null &&
                                                      (0, r.jsx)(ei.R, { endDate: R.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
