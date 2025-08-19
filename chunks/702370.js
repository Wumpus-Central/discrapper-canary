n.d(t, { default: () => eG }), n(388685), n(314940), n(953529);
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
    b = n(481060),
    _ = n(809206),
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
    k = n(678135),
    E = n(876917),
    A = n(643879),
    N = n(484459),
    R = n(822857),
    Z = n(960919),
    L = n(275388),
    B = n(25990),
    M = n(594174),
    D = n(626135),
    H = n(63063),
    U = n(74538),
    G = n(937615),
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
    eb = n(22267),
    e_ = n(332246),
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
    ek = n(188336);
function eE(e) {
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
function eA(e, t) {
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
                    className: i ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                    children: (0, r.jsx)(ef.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: i ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
                    ref: o,
                    children: (0, r.jsx)(E.Z, {
                        profileEffectId: t.id,
                        isHovering: l,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: o,
                    className: ek.nameplatePreviewContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: ek.nameplatePreview,
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
            className: ek.bundlePreviewContainer,
            children: (0, r.jsx)(b.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, a) => {
                    let i = String(a),
                        o = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        c = "(".concat(a + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        b.Mi4,
                        {
                            id: i,
                            children: (0, r.jsxs)("div", {
                                className: ek.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(b.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ek.bundleSlideTitle,
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
    eZ = (e) => {
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
    eL = (e) => {
        let { skuId: t } = e;
        return t === p.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(b.Text, {
                  variant: "text-sm/normal",
                  className: ek.learnMoreLink,
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
            y = U.ZP.canUseCollectibles(n),
            { previewingVariantIndex: j } = v,
            T = (0, e_.N)(t, j),
            w = (0, ev.W)(t, P);
        c()(null != w, "Selected product should not be null");
        let k = (0, J.L)(t),
            { isPurchased: E, isPartiallyOwnedBundle: A } = (0, J.L)(w),
            { isDisabled: N, disabledReason: B } = (0, Y.G)(w.skuId),
            M = (0, W.ne)({
                product: w,
                isPartiallyOwnedBundle: A,
                isPurchased: E,
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
            eb = (0, eh.I)(t),
            eP = null != eb,
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
            if (null != en) return (0, _.cV)(en), () => (0, _.cV)(void 0);
        }, [en]);
        let eM = (0, q.G)(w);
        return (0, r.jsxs)("div", {
            className: ek.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: ek.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: i,
                        display: "modal",
                    }),
                }),
                (0, r.jsx)(eZ, {
                    product: null != T ? T : w,
                    user: n,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ek.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: w,
                                    isDarkText: !V,
                                    isOrbExclusive: eN,
                                }),
                                (0, r.jsx)(b.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: ek.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(b.Text, {
                                    variant: "text-sm/normal",
                                    children: eM,
                                }),
                                (0, r.jsx)(eL, { skuId: w.skuId }),
                                k.isPurchased || k.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: A,
                                      })
                                    : $
                                      ? (0, r.jsx)(b.Text, {
                                            variant: "text-md/semibold",
                                            className: ek.priceTag,
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
                                              discountOfferAmount: eb,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ek.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(eo.Z, {
                                                      product: w,
                                                      discount: es,
                                                      isPremiumUser: y,
                                                      hideStrikethroughPrice: !y || eP,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eb,
                                                  }),
                                                  y || eP ? null : (0, r.jsx)(el.Z, { product: w }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(b.Rny, {
                            children: (0, r.jsx)(eg.P, {
                                selectedVariantIndex: P,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: v,
                                className: ek.variantsSwitch,
                            }),
                        }),
                        null !== B &&
                            (0, r.jsx)(b.Text, {
                                variant: "text-xs/normal",
                                className: ek.disabledReason,
                                children: B,
                            }),
                        (0, r.jsx)("div", {
                            className: ek.buttonsContainer,
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
                                    ? E
                                        ? (0, r.jsx)(b.zxk, {
                                              variant: "primary",
                                              onClick: eu,
                                              loading: ed,
                                              text: eS.intl.string(eS.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(b.zxk, {
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
                                                                    (0, L.qA)({
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
                                                            return (0, r.jsx)(b.ua7, {
                                                                position: "top",
                                                                text: a,
                                                                shouldShow: i,
                                                                "aria-label": !1,
                                                                children: (a) =>
                                                                    (0, r.jsx)(
                                                                        b.zxk,
                                                                        eA(eE({}, a), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: i,
                                                                            "aria-label": l,
                                                                            text: eS.intl.format(eS.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(Z.Z, {
                                                                                        className: ek.orbIconAligned,
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
                                                                  discountOfferAmount: eb,
                                                              }))
                                                            : ef &&
                                                              (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
                                                                  price: (0, G.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)("div", {
                                                            className: ek.checkoutButtonsRow,
                                                            children: [
                                                                (0, r.jsx)(b.zxk, {
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
                        (0, r.jsx)(b.Text, {
                            className: o()(ek.disclaimer, !V && ek.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !E ? eS.intl.string(eS.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(b.qEK, {
                    src: t.avatarSrc,
                    size: b.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: b.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: o()(ek.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            a = (0, w.w$)();
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdX),
            children: (0, r.jsxs)(b.Rny, {
                children: [
                    (0, r.jsx)(eM, {
                        user: a.mallow,
                        innerClassName: ek.userBlue,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: ek.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.phibi,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: ek.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eb.Z, {
                            className: ek.nameplatePreview,
                            innerClassName: ek.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eM, {
                        user: a.locke,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: ek.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eM, {
                        user: a.boom,
                        innerClassName: ek.userGreen,
                    }),
                    (0, r.jsx)(eM, {
                        user: a.cherry,
                        innerClassName: ek.userGreen,
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { product: t, user: n } = e,
            a = U.ZP.canUsePremiumProfileCustomization(n),
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
            c = (0, A.SD)({
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
                    ? ek.previewsContainerInner
                    : ek.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: u,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  k.Z,
                                  eA(eE({}, l), {
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
                              s && (0, r.jsx)(eU, { user: n }),
                          ],
                      }),
        });
    },
    eU = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, O.e5)(
                    eA(
                        eE(
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
            children: (0, r.jsx)(b.Rny, {
                children: (0, r.jsxs)(b.Zbd, {
                    className: ek.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            T.Z,
                            {
                                className: ek.mockMessage,
                                author: (0, j.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: ek.mockInput,
                            children: [
                                (0, r.jsx)(b.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ek.mockInputButton,
                                }),
                                (0, r.jsx)(b.EO4, {
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
    eG = (e) => {
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
            _ = (0, g.e7)([M.default], () => M.default.getCurrentUser()),
            v = (0, ex.f)(i),
            { previewingVariantIndex: h } = v,
            C = (0, g.e7)([F.Z], () => F.Z.purchases),
            O = (0, V.o)(i, C),
            y = (0, e_.N)(i, h),
            j = (0, ev.W)(i, O);
        c()(null != j, "Selected product should not be null");
        let { analyticsLocations: T } = (0, x.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(j.skuId);
        let w = (0, eP.kc)(o);
        a.useEffect(() => {
            null != _ && (0, N.Z)(_.id, _.getAvatarURL(void 0, 80));
        }, [_]);
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
        let S = (0, L.r9)(),
            k = t === b.Dvm.EXITING,
            E = (0, eh.t)(i),
            A = null == E ? void 0 : E.amount;
        if (null == _) return null;
        let R = (0, ej.ZS)(o.skuId);
        return (0, r.jsx)(x.Gt, {
            value: T,
            children: (0, r.jsxs)(b.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: ek.modalRoot,
                returnRef: l,
                transitionState: t,
                size: b.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(b.hzk, {
                        "data-migration-pending": !0,
                        className: ek.modalContent,
                        children: [
                            (0, r.jsx)(eB, {
                                user: _,
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
                                        ? ek.fractionalNitroPreviewContainer
                                        : j.type === d.Z.AVATAR_DECORATION
                                          ? ek.collectiblePreviewsContainerWithChat
                                          : ek.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)($.Z, {
                                        asset: w,
                                        size: (0, es.ML)(540),
                                        className: ek.categoryBanner,
                                        categoryBannerOverride: R,
                                    }),
                                    (0, ej.o0)(i.skuId)
                                        ? i.skuId === ej.Vt.ORB_PROFILE_BADGE
                                            ? S || k
                                                ? null
                                                : (0, r.jsx)(ed.M, { user: _ })
                                            : i.skuId === p.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(eu.q, {})
                                              : (0, r.jsx)(ep.b, {
                                                    product: i,
                                                    className: ek.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eH, {
                                              user: _,
                                              product: null != y ? y : j,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: ek.pdpControls,
                                        children: [
                                            (0, r.jsx)(ee.n, {
                                                skuId: j.skuId,
                                                tab: f,
                                            }),
                                            (0, r.jsx)(b.hU, {
                                                "aria-label": eS.intl.string(eS.t.cpT0Cg),
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
                    null != A &&
                        (0, r.jsxs)(b.mzw, {
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
                                        (0, r.jsx)(b.Text, {
                                            variant: "text-sm/semibold",
                                            className: ek.modalFooterText,
                                            children: eS.intl.format(eS.t["78ph4e"], { discountOfferAmount: A }),
                                        }),
                                        (null == E ? void 0 : E.expiresAt) != null &&
                                            (0, r.jsx)(et.R, { endDate: E.expiresAt }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
        });
    };
