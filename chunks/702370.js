n.d(t, { default: () => eU }), n(388685), n(314940), n(953529);
var r = n(951288),
    a = n(647438),
    i = n(120356),
    o = n.n(i),
    l = n(512722),
    c = n.n(l),
    s = n(278074),
    u = n(873546),
    d = n(979554),
    p = n(314794),
    m = n(311570),
    g = n(399606),
    f = n(780384),
    _ = n(481060),
    b = n(809206),
    v = n(727637),
    h = n(410030),
    P = n(100527),
    x = n(906732),
    C = n(570908),
    O = n(786761),
    y = n(3148),
    j = n(739566),
    T = n(753206),
    w = n(4242),
    I = n(333867),
    S = n(767714),
    A = n(678135),
    k = n(876917),
    E = n(643879),
    N = n(484459),
    R = n(822857),
    L = n(960919),
    Z = n(275388),
    B = n(25990),
    M = n(594174),
    D = n(626135),
    H = n(63063),
    G = n(74538),
    U = n(937615),
    z = n(335131),
    F = n(1870),
    V = n(429368),
    W = n(884697),
    K = n(635552),
    q = n(83479),
    Y = n(290175),
    J = n(724994),
    X = n(328456),
    Q = n(390698),
    $ = n(141011),
    ee = n(525518),
    et = n(168020),
    en = n(426171),
    er = n(224068),
    ea = n(813083),
    ei = n(680942),
    eo = n(558060),
    el = n(539598),
    ec = n(237031),
    es = n(372654),
    eu = n(38914),
    ed = n(259673),
    ep = n(508925),
    em = n(953405),
    eg = n(453713),
    ef = n(616066),
    e_ = n(22267),
    eb = n(332246),
    ev = n(58201),
    eh = n(445794),
    eP = n(794324),
    ex = n(361110),
    eC = n(29121),
    eO = n(956472),
    ey = n(832149),
    ej = n(215023),
    eT = n(981631),
    ew = n(474936),
    eI = n(231338),
    eS = n(388032),
    eA = n(188336);
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
function eE(e, t) {
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
let eN = (e) => {
        let { item: t, user: n, isBundleItem: i = !1 } = e,
            o = a.useRef(null),
            l = (0, v.Z)(o);
        return (0, s.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: i ? eA.bundleAvatarPreviewContainer : eA.avatarPreviewContainer,
                    children: (0, r.jsx)(ef.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: i ? eA.bundlePfxPreviewContainer : eA.pfxPreviewContainer,
                    ref: o,
                    children: (0, r.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: l,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: o,
                    className: eA.nameplatePreviewContainer,
                    children: (0, r.jsx)(e_.Z, {
                        className: eA.nameplatePreview,
                        nameplate: t,
                        isHighlighted: l,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "large",
                    }),
                }),
            )
            .otherwise(() => null);
    },
    eR = (e) => {
        let { product: t, user: n } = e,
            [i, o] = a.useState(0);
        a.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && o((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let l = t.items.length;
        return (0, r.jsx)("div", {
            className: eA.bundlePreviewContainer,
            children: (0, r.jsx)(_.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, a) => {
                    let i = String(a),
                        o = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        c = "(".concat(a + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        _.Mi4,
                        {
                            id: i,
                            children: (0, r.jsxs)("div", {
                                className: eA.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(_.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eA.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        i,
                    );
                }),
            }),
        });
    },
    eL = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eR, {
                  product: t,
                  user: n,
              })
            : (0, ej.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eN, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eZ = (e) => {
        let { skuId: t } = e;
        return t === p.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  className: eA.learnMoreLink,
                  children: eS.intl.format(eS.t.Q1scdH, {
                      helpdeskArticle: H.Z.getArticleURL(eT.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eB = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: l,
                onClose: s,
                returnRef: p,
                previewingVariantIndexProps: v,
                selectedVariantIndex: P,
                tab: C,
            } = e,
            { analyticsLocations: O } = (0, x.ZP)(),
            y = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: j } = v,
            T = (0, eb.N)(t, j),
            w = (0, ev.W)(t, P);
        c()(null != w, "Selected product should not be null");
        let A = (0, J.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: E } = (0, J.L)(w),
            { isDisabled: N, disabledReason: B } = (0, Y.G)(w.skuId),
            M = (0, W.ne)({
                product: w,
                isPartiallyOwnedBundle: E,
                isPurchased: k,
            }),
            D = (0, g.e7)([F.Z], () => F.Z.isClaiming === (null == w ? void 0 : w.skuId)),
            H = (0, h.ZP)(),
            V = (0, f.wj)(H),
            $ = (0, W.G1)(w),
            ee = (0, W.ql)(w, eT.tuJ.DEFAULT),
            et = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: en } = (0, X.Rj)(null != T ? T : w),
            es = a.useMemo(() => (0, W.BH)(w, y), [w, y]),
            { handleUseNow: eu, isApplying: ed } = (0, K.W)({
                product: w,
                onSuccess: s,
            }),
            ep = (0, eC.To)(w),
            { enabled: ef } = (0, R.WX)({ location: "collectibles_shop_product_details_modal" }),
            e_ = (0, eh.I)(t),
            eP = null != e_,
            {
                checkoutEligiblePrices: ex,
                isOrbExclusive: eN,
                hasSufficientOrbs: eR,
            } = (0, eO.Ip)({
                product: w,
                isPremiumUser: y,
                tab: C,
                hasDiscountOffer: eP,
            }),
            eB = a.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: w.skuId,
                        analyticsLocations: O,
                        variantsReturnStyle: m.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? s() : (0, eI.dG)()),
                    }),
                [O, s, w.skuId],
            );
        a.useEffect(() => {
            if (null != en) return (0, b.cV)(en), () => (0, b.cV)(void 0);
        }, [en]);
        let eM = (0, q.G)(w);
        return (0, r.jsxs)("div", {
            className: eA.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eA.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: i,
                        display: ea.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eL, {
                    product: null != T ? T : w,
                    user: n,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eA.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: w,
                                    isDarkText: !V,
                                    isOrbExclusive: eN,
                                }),
                                (0, r.jsx)(_.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eA.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-sm/normal",
                                    children: eM,
                                }),
                                (0, r.jsx)(eZ, { skuId: w.skuId }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: eA.priceTag,
                                          isPartiallyPurchased: E,
                                      })
                                    : $
                                      ? (0, r.jsx)(_.Text, {
                                            variant: "text-md/semibold",
                                            className: eA.priceTag,
                                            children: eS.intl.string(eS.t.rt69oq),
                                        })
                                      : ef
                                        ? (0, r.jsx)(em.a, {
                                              prices: ex,
                                              product: w,
                                              isPremiumUser: y,
                                              discount: es,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: N,
                                              discountOfferAmount: e_,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eA.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(eo.Z, {
                                                      product: w,
                                                      discount: es,
                                                      isPremiumUser: y,
                                                      hideStrikethroughPrice: !y || eP,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: e_,
                                                  }),
                                                  y || eP ? null : (0, r.jsx)(el.Z, { product: w }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(_.Rny, {
                            children: (0, r.jsx)(eg.P, {
                                selectedVariantIndex: P,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: v,
                                className: eA.variantsSwitch,
                            }),
                        }),
                        null !== B &&
                            (0, r.jsx)(_.Text, {
                                variant: "text-xs/normal",
                                className: eA.disabledReason,
                                children: B,
                            }),
                        (0, r.jsx)("div", {
                            className: eA.buttonsContainer,
                            children: (() => {
                                if ($ && !y && !et) {
                                    let e;
                                    return (
                                        (e = eS.intl.string(eS.t.sEAnVF)),
                                        (0, r.jsx)(S.Z, {
                                            subscriptionTier: ew.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: ec.v,
                                            onSubscribeModalClose: () => {
                                                (0, ec.T)({
                                                    product: w,
                                                    category: i,
                                                    shouldCheckoutWithOrbs: l,
                                                    returnRef: p,
                                                    analyticsLocations: O,
                                                });
                                            },
                                        })
                                    );
                                }
                                return M
                                    ? k
                                        ? (0, r.jsx)(_.zxk, {
                                              variant: "primary",
                                              onClick: eu,
                                              loading: ed,
                                              text: eS.intl.string(eS.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(_.zxk, {
                                                loading: D,
                                                loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
                                                loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(w.skuId),
                                                        s(),
                                                        (0, ey.Z)({
                                                            product: w,
                                                            analyticsLocations: O,
                                                            purchaseType: ej.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eS.intl.string(eS.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ex.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eI.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, Z.qA)({
                                                                        skuId: w.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: m.v.VARIANTS_GROUP,
                                                                            }),
                                                                                s(),
                                                                                (0, ey.Z)({
                                                                                    product: w,
                                                                                    analyticsLocations: O,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: ej.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: O,
                                                                    });
                                                                },
                                                                a = N
                                                                    ? eS.intl.string(eS.t.cTdr39)
                                                                    : eS.intl.string(eS.t.zqh7ZG),
                                                                i = !eR || N,
                                                                o = eS.intl.formatToPlainString(eS.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                l = i ? "".concat(o, ", ").concat(a) : o;
                                                            return (0, r.jsx)(_.ua7, {
                                                                position: "top",
                                                                text: a,
                                                                shouldShow: i,
                                                                "aria-label": !1,
                                                                children: (a) =>
                                                                    (0, r.jsx)(
                                                                        _.zxk,
                                                                        eE(ek({}, a), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: i,
                                                                            "aria-label": l,
                                                                            text: eS.intl.format(eS.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(L.Z, {
                                                                                        className: eA.orbIconAligned,
                                                                                        shouldUseThemeColor: i && !t,
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let a = !$ && !et && !u.tq && !eN && M,
                                                        i = (0, W.x6)(w)
                                                            ? eS.intl.string(eS.t.V1AWw8)
                                                            : w.type === d.Z.PROFILE_EFFECT
                                                              ? eS.intl.string(eS.t.kAeDcH)
                                                              : w.type === d.Z.NAMEPLATE
                                                                ? eS.intl.string(eS.t.H3vhqa)
                                                                : eS.intl.string(eS.t.AQ0Ven);
                                                    return (
                                                        eP
                                                            ? (i = eS.intl.formatToPlainString(eS.t["5U5RBw"], {
                                                                  discountOfferAmount: e_,
                                                              }))
                                                            : ef &&
                                                              (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
                                                                  price: (0, U.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)("div", {
                                                            className: eA.checkoutButtonsRow,
                                                            children: [
                                                                (0, r.jsx)(_.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: i,
                                                                    fullWidth: !0,
                                                                }),
                                                                a &&
                                                                    (0, r.jsx)(ei.Z, {
                                                                        primary: n,
                                                                        product: w,
                                                                        onSuccess: s,
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
                            className: o()(eA.disclaimer, !V && eA.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !k ? eS.intl.string(eS.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eA.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(_.qEK, {
                    src: t.avatarSrc,
                    size: _.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: _.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: o()(eA.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            a = (0, w.w$)();
        return (0, r.jsx)("div", {
            className: eA.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdX),
            children: (0, r.jsxs)(_.Rny, {
                children: [
                    (0, r.jsx)(eM, {
                        user: a.mallow,
                        innerClassName: eA.userBlue,
                    }),
                    (0, r.jsxs)(_.Text, {
                        variant: "text-sm/semibold",
                        className: eA.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.phibi,
                        innerClassName: eA.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eA.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(e_.Z, {
                            className: eA.nameplatePreview,
                            innerClassName: eA.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eM, {
                        user: a.locke,
                        innerClassName: eA.userPink,
                    }),
                    (0, r.jsxs)(_.Text, {
                        variant: "text-sm/semibold",
                        className: eA.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.boom,
                        innerClassName: eA.userGreen,
                    }),
                    (0, r.jsx)(eM, {
                        user: a.cherry,
                        innerClassName: eA.userGreen,
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { product: t, user: n } = e,
            a = G.ZP.canUsePremiumProfileCustomization(n),
            i = (0, g.cj)([B.Z], () => B.Z.getAllPending()),
            { pendingAvatar: o } = i,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                }
                return a;
            })(i, ["pendingAvatar"]),
            c = (0, E.SD)({
                userId: n.id,
                image: o,
            }),
            s = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: m } = (0, X.Rj)(t),
            f = null != m;
        return (0, r.jsx)("div", {
            className:
                (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION
                    ? eA.previewsContainerInner
                    : eA.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: u,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  A.Z,
                                  eE(ek({}, l), {
                                      pendingAvatar: c,
                                      user: n,
                                      canUsePremiumCustomization: a,
                                      pendingAvatarDecoration: p,
                                      pendingProfileEffectId: null == m ? void 0 : m.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !f,
                                      hideCustomStatus: !0,
                                      hideBioSection: s,
                                      hideViewFullProfileButton: !0,
                                      interactive: !1,
                                  }),
                              ),
                              s && (0, r.jsx)(eG, { user: n }),
                          ],
                      }),
        });
    },
    eG = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, O.e5)(
                    eE(
                        ek(
                            {},
                            (0, y.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eS.intl.string(eS.t.d5YwKy),
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
            "aria-label": eS.intl.string(eS.t["TN+ZvL"]),
            children: (0, r.jsx)(_.Rny, {
                children: (0, r.jsxs)(_.Zbd, {
                    className: eA.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            T.Z,
                            {
                                className: eA.mockMessage,
                                author: (0, j.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eA.mockInput,
                            children: [
                                (0, r.jsx)(_.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eA.mockInputButton,
                                }),
                                (0, r.jsx)(_.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eA.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eU = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: o,
                returnRef: l,
                analyticsSource: s,
                analyticsLocations: u,
                shouldCheckoutWithOrbs: m,
                tab: f,
            } = e,
            b = (0, g.e7)([M.default], () => M.default.getCurrentUser()),
            v = (0, ex.f)(i),
            { previewingVariantIndex: h } = v,
            C = (0, g.e7)([F.Z], () => F.Z.purchases),
            O = (0, V.o)(i, C),
            y = (0, eb.N)(i, h),
            j = (0, ev.W)(i, O);
        c()(null != j, "Selected product should not be null");
        let { analyticsLocations: T } = (0, x.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(j.skuId);
        let w = (0, eP.kc)(o);
        a.useEffect(() => {
            null != b && (0, N.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let I = a.useMemo(() => (0, W.jm)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            D.default.track(eT.rMx.OPEN_MODAL, {
                type: eT.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: s,
                location_stack: T,
                sku_id: j.skuId,
                product_type: I,
            }),
                j.items.forEach(z.oK);
        }, [s, T, j.skuId, j.items, I]);
        let S = (0, Z.r9)(),
            A = t === _.Dvm.EXITING,
            k = (0, eh.t)(i),
            E = null == k ? void 0 : k.amount;
        if (null == b) return null;
        let R = (0, ej.ZS)(o.skuId);
        return (0, r.jsx)(x.Gt, {
            value: T,
            children: (0, r.jsxs)(_.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eA.modalRoot,
                returnRef: l,
                transitionState: t,
                size: _.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(_.hzk, {
                        "data-migration-pending": !0,
                        className: eA.modalContent,
                        children: [
                            (0, r.jsx)(eB, {
                                user: b,
                                product: i,
                                category: o,
                                onClose: n,
                                previewingVariantIndexProps: v,
                                selectedVariantIndex: O,
                                shouldCheckoutWithOrbs: m,
                                tab: f,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    j.skuId === p.a.PREMIUM_TIER_2_3_DAY
                                        ? eA.fractionalNitroPreviewContainer
                                        : j.type === d.Z.AVATAR_DECORATION
                                          ? eA.collectiblePreviewsContainerWithChat
                                          : eA.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)($.Z, {
                                        asset: w,
                                        size: (0, es.ML)(540),
                                        className: eA.categoryBanner,
                                        categoryBannerOverride: R,
                                    }),
                                    (0, ej.o0)(i.skuId)
                                        ? i.skuId === ej.Vt.ORB_PROFILE_BADGE
                                            ? S || A
                                                ? null
                                                : (0, r.jsx)(ed.M, { user: b })
                                            : i.skuId === p.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(eu.q, {})
                                              : (0, r.jsx)(ep.b, {
                                                    product: i,
                                                    className: eA.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eH, {
                                              user: b,
                                              product: null != y ? y : j,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: eA.pdpControls,
                                        children: [
                                            (0, r.jsx)(ee.n, {
                                                skuId: j.skuId,
                                                tab: f,
                                            }),
                                            (0, r.jsx)(_.hU, {
                                                "aria-label": eS.intl.string(eS.t.cpT0Cg),
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
                    null != E &&
                        (0, r.jsxs)(_.mzw, {
                            className: eA.modalFooter,
                            children: [
                                (0, r.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                    alt: "",
                                    className: eA.modalFooterBackgroundImg,
                                }),
                                (0, r.jsxs)("div", {
                                    className: eA.modalFooterContentContainer,
                                    children: [
                                        (0, r.jsx)(_.Text, {
                                            variant: "text-sm/semibold",
                                            className: eA.modalFooterText,
                                            children: eS.intl.format(eS.t["78ph4e"], { discountOfferAmount: E }),
                                        }),
                                        (null == k ? void 0 : k.expiresAt) != null &&
                                            (0, r.jsx)(et.R, { endDate: k.expiresAt }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
        });
    };
