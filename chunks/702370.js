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
    v = n(399606),
    f = n(780384),
    h = n(481060),
    g = n(809206),
    P = n(727637),
    x = n(410030),
    b = n(607070),
    j = n(100527),
    C = n(906732),
    _ = n(570908),
    O = n(786761),
    T = n(3148),
    w = n(739566),
    E = n(753206),
    I = n(4242),
    S = n(333867),
    y = n(767714),
    N = n(678135),
    A = n(876917),
    k = n(643879),
    R = n(959840),
    L = n(484459),
    Z = n(825102),
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
    q = n(884697),
    K = n(635552),
    Y = n(83479),
    X = n(290175),
    J = n(724994),
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
    ev = n(953405),
    ef = n(453713),
    eh = n(325834),
    eg = n(143941),
    eP = n(616066),
    ex = n(22267),
    eb = n(332246),
    ej = n(58201),
    eC = n(445794),
    e_ = n(794324),
    eO = n(361110),
    eT = n(29121),
    ew = n(956472),
    eE = n(832149),
    eI = n(215023),
    eS = n(981631),
    ey = n(474936),
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
            o = (0, P.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: l ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                    children: (0, r.jsx)(eP.R, {
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
                    children: (0, r.jsx)(ex.Z, {
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
            children: (0, r.jsx)(h.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        h.Mi4,
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
                                    (0, r.jsxs)(h.Text, {
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
        return (0, q.x6)(t)
            ? (0, r.jsx)(eB, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eI.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
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
            ? (0, r.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: ek.learnMoreLink,
                  children: eA.intl.format(eA.t.Q1scdH, {
                      helpdeskArticle: F.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT),
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
                previewingVariantIndexProps: P,
                selectedVariantIndex: b,
                tab: j,
                activeBundleSlide: _,
                variantType: O,
            } = e,
            { analyticsLocations: T } = (0, C.ZP)(),
            w = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: E } = P,
            I = (0, eb.N)(t, E),
            N = (0, ej.W)(t, b);
        s()(null != N, "Selected product should not be null");
        let A = (0, J.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: R } = (0, J.L)(N),
            { isDisabled: L, disabledReason: D } = (0, X.G)(N.skuId),
            M = (0, q.ne)({
                product: N,
                isPartiallyOwnedBundle: R,
                isPurchased: k,
            }),
            U = (0, v.e7)([V.Z], () => V.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            F = (0, x.ZP)(),
            W = (0, f.wj)(F),
            $ = (0, q.G1)(N),
            ee = (0, q.ql)(N, eS.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, Q.Rj)(null != I ? I : N),
            ei = i.useMemo(() => (0, q.BH)(N, w), [N, w]),
            { handleUseNow: ed, isApplying: em } = (0, K.W)({
                product: N,
                onSuccess: c,
            }),
            ep = (0, eT.To)(N),
            { enabled: eg } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            eP = (0, eC.Iw)(t),
            ex = null != eP,
            {
                checkoutEligiblePrices: e_,
                isOrbExclusive: eO,
                hasSufficientOrbs: eZ,
            } = (0, ew.Ip)({
                product: N,
                isPremiumUser: w,
                tab: j,
                hasDiscountOffer: ex,
            }),
            eB = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: N.skuId,
                        analyticsLocations: T,
                        variantsReturnStyle: p.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eN.dG)()),
                    }),
                [T, c, N.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, g.cV)(er), () => (0, g.cV)(void 0);
        }, [er]);
        let eU = (0, Y.G)(N);
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
                    product: null != I ? I : N,
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
                                    isDarkText: !W,
                                    isOrbExclusive: eO,
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: ek.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    children: eU,
                                }),
                                (0, r.jsx)(eM, { skuId: N.skuId }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: R,
                                      })
                                    : $
                                      ? (0, r.jsx)(h.Text, {
                                            variant: "text-md/semibold",
                                            className: ek.priceTag,
                                            children: eA.intl.string(eA.t.rt69oq),
                                        })
                                      : eg
                                        ? (0, r.jsx)(ev.a, {
                                              prices: e_,
                                              product: N,
                                              isPremiumUser: w,
                                              discount: ei,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: L,
                                              discountOfferAmount: eP,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ek.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: N,
                                                      discount: ei,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eP,
                                                  }),
                                                  w || ex ? null : (0, r.jsx)(ec.Z, { product: N }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(h.Rny, {
                            children:
                                O === eI.Ch.DEFAULT
                                    ? (0, r.jsx)(ef.P, {
                                          selectedVariantIndex: b,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: P,
                                          className: ek.variantsSwitch,
                                      })
                                    : (0, r.jsx)(eh.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: P,
                                          className: ek.variantsThumbnail,
                                          selectedVariantIndex: b,
                                      }),
                        }),
                        null !== D &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: ek.disabledReason,
                                children: D,
                            }),
                        (0, r.jsx)(h.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if ($ && !w && !en) {
                                    let e;
                                    return (
                                        (e = eA.intl.string(eA.t.sEAnVF)),
                                        (0, r.jsx)(y.Z, {
                                            subscriptionTier: ey.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eu.v,
                                            onSubscribeModalClose: () => {
                                                (0, eu.T)({
                                                    product: N,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: T,
                                                    variantType: O,
                                                });
                                            },
                                        })
                                    );
                                }
                                return M
                                    ? k
                                        ? (0, r.jsx)(h.zxk, {
                                              variant: "primary",
                                              onClick: ed,
                                              loading: em,
                                              text: eA.intl.string(eA.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(h.zxk, {
                                                loading: U,
                                                loadingStartedLabel: eA.intl.string(eA.t["TYw+9v"]),
                                                loadingFinishedLabel: eA.intl.string(eA.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(N.skuId),
                                                        c(),
                                                        (0, eE.Z)({
                                                            product: N,
                                                            analyticsLocations: T,
                                                            purchaseType: eI.o8.PREMIUM_PURCHASE,
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
                                                                    (0, B.qA)({
                                                                        skuId: N.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: p.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eE.Z)({
                                                                                    product: N,
                                                                                    analyticsLocations: T,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eI.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: T,
                                                                    });
                                                                },
                                                                i = L
                                                                    ? eA.intl.string(eA.t.cTdr39)
                                                                    : eA.intl.string(eA.t.zqh7ZG),
                                                                l = !eZ || L,
                                                                a = eA.intl.formatToPlainString(eA.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                o = l ? "".concat(a, ", ").concat(i) : a;
                                                            return (0, r.jsx)(h.ua7, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (i) =>
                                                                    (0, r.jsx)(
                                                                        h.zxk,
                                                                        eL(eR({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: l,
                                                                            "aria-label": o,
                                                                            text: eA.intl.format(eA.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(h.aQr, {
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
                                                    let i = !$ && !en && !u.tq && !eO && M && !(0, q.iP)(e.currency),
                                                        l = (0, q.x6)(N)
                                                            ? eA.intl.string(eA.t.V1AWw8)
                                                            : N.type === d.Z.PROFILE_EFFECT
                                                              ? eA.intl.string(eA.t.kAeDcH)
                                                              : N.type === d.Z.NAMEPLATE
                                                                ? eA.intl.string(eA.t.H3vhqa)
                                                                : eA.intl.string(eA.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (l = eA.intl.formatToPlainString(eA.t["5U5RBw"], {
                                                                  discountOfferAmount: eP,
                                                              }))
                                                            : eg &&
                                                              (l = eA.intl.formatToPlainString(eA.t["cNSL/v"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(h.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(h.zxk, {
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
                        (0, r.jsx)(h.Text, {
                            className: a()(ek.disclaimer, !W && ek.disclaimerLight),
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
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: h.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(ek.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eA.intl.string(eA.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eF, {
                        user: i.mallow,
                        innerClassName: ek.userBlue,
                    }),
                    (0, r.jsxs)(h.Text, {
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
                        children: (0, r.jsx)(ex.Z, {
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
                    (0, r.jsxs)(h.Text, {
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
            o = (0, v.e7)([b.Z], () => b.Z.useReducedMotion),
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
            f = t.type === d.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: P, firstNameplate: x } = (0, Q.Rj)(t),
            j = null != P,
            C = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            N.Z,
                            eL(eR({}, m), {
                                pendingAvatar: p,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: g,
                                pendingProfileEffectId: null == P ? void 0 : P.id,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: f,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        f && (0, r.jsx)(ez, { user: n }),
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
                          className: a()(ek.nameplatePreviewContainerInner, l && c ? ek.sliding : ""),
                          children: _(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(ek.profileEffectPreviewsContainerInner, l && c ? ek.sliding : ""),
                          children: C(),
                      });
            }
        }
        return null != x
            ? (0, r.jsx)("div", {
                  className: ek.nameplatePreviewContainerInner,
                  children: _(x),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === d.Z.AVATAR_DECORATION
                          ? ek.previewsContainerInner
                          : ek.profileEffectPreviewsContainerInner,
                  children: C(),
              });
    },
    ez = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, O.e5)(
                    eL(
                        eR(
                            {},
                            (0, T.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eA.intl.string(eA.t.d5YwKy),
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
            "aria-label": eA.intl.string(eA.t["TN+ZvL"]),
            children: (0, r.jsx)(h.Rny, {
                children: (0, r.jsxs)(h.Zbd, {
                    className: ek.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            E.Z,
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
                                (0, r.jsx)(h.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ek.mockInputButton,
                                }),
                                (0, r.jsx)(h.EO4, {
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
                category: o,
                returnRef: c,
                analyticsSource: u,
                analyticsLocations: p,
                shouldCheckoutWithOrbs: f,
                tab: g,
                variantType: P = eI.Ch.DEFAULT,
            } = e,
            x = (0, v.e7)([M.default], () => M.default.getCurrentUser()),
            b = (0, eO.f)(l),
            { previewingVariantIndex: _ } = b,
            O = (0, v.e7)([V.Z], () => V.Z.purchases),
            T = (0, W.o)(l, O),
            w = (0, eb.N)(l, _),
            E = (0, ej.W)(l, T);
        s()(null != E, "Selected product should not be null");
        let { analyticsLocations: I } = (0, C.ZP)([...p, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(E.skuId);
        let S = (0, e_.kc)(o),
            y = (0, R.O)({ location: "CollectiblesShopProductDetailsModal" }),
            { isPurchased: N } = (0, J.L)(E),
            A = y && !N && !(0, q.x6)(E);
        i.useEffect(() => {
            null != x && (0, L.Z)(x.id, x.getAvatarURL(void 0, 80));
        }, [x]);
        let k = i.useMemo(() => (0, q.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            U.default.track(eS.rMx.OPEN_MODAL, {
                type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: u,
                location_stack: I,
                sku_id: E.skuId,
                product_type: k,
            }),
                E.items.forEach(z.oK);
        }, [u, I, E.skuId, E.items, k]);
        let Z = (0, B.r9)(),
            D = t === h.Dvm.EXITING,
            F = (0, eC.t0)(l),
            G = null == F ? void 0 : F.amount,
            H = i.useMemo(() => ((0, q.x6)(E) ? E.items.length : 0), [E]),
            { activeSlide: K, isTransitioning: Y } = (0, ee.b)({
                slideCount: H,
                intervalMs: 5000,
            });
        return null == x
            ? null
            : (0, r.jsx)(C.Gt, {
                  value: I,
                  children: (0, r.jsxs)(h.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: ek.modalRoot,
                      returnRef: c,
                      transitionState: t,
                      size: h.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(h.hzk, {
                              "data-migration-pending": !0,
                              className: ek.modalContent,
                              children: [
                                  (0, r.jsx)(eU, {
                                      user: x,
                                      product: l,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: b,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: f,
                                      tab: g,
                                      activeBundleSlide: K,
                                      variantType: P,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          ek.previewContainer,
                                          E.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? ek.fractionalNitroPreviewContainer
                                              : E.type === d.Z.AVATAR_DECORATION
                                                ? ek.collectiblePreviewsContainerWithChat
                                                : ek.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(S, ")") },
                                      children: [
                                          (0, eI.o0)(l.skuId)
                                              ? l.skuId === eI.Vt.ORB_PROFILE_BADGE
                                                  ? Z || D
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: x })
                                                  : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: l,
                                                          className: ek.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eH, {
                                                    user: x,
                                                    product: null != w ? w : E,
                                                    activeBundleSlide: K,
                                                    isTransitioning: Y,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: ek.pdpControls,
                                              children: [
                                                  A &&
                                                      (0, r.jsx)(eg.s, {
                                                          skuId: E.skuId,
                                                          className: ek.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: E.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(h.hU, {
                                                      "aria-label": eA.intl.string(eA.t.cpT0Cg),
                                                      onClick: n,
                                                      icon: h.Uz9,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          null != G &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(h.mzw, {
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
                                                  (0, r.jsx)(h.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: ek.modalFooterText,
                                                      children: eA.intl.format(eA.t["78ph4e"], {
                                                          discountOfferAmount: G,
                                                      }),
                                                  }),
                                                  (null == F ? void 0 : F.expiresAt) != null &&
                                                      (0, r.jsx)(er.R, { endDate: F.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
