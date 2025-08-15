n.d(t, { default: () => eU }), n(388685), n(314940), n(953529);
var r = n(255367),
    a = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(512722),
    s = n.n(c),
    l = n(278074),
    d = n(873546),
    u = n(979554),
    m = n(314794),
    p = n(311570),
    _ = n(399606),
    f = n(780384),
    g = n(481060),
    h = n(809206),
    b = n(727637),
    v = n(410030),
    x = n(100527),
    C = n(906732),
    P = n(570908),
    y = n(786761),
    j = n(3148),
    O = n(739566),
    w = n(753206),
    I = n(4242),
    T = n(333867),
    S = n(767714),
    k = n(678135),
    N = n(876917),
    E = n(643879),
    A = n(484459),
    Z = n(822857),
    R = n(960919),
    L = n(275388),
    M = n(25990),
    B = n(594174),
    D = n(626135),
    F = n(63063),
    H = n(74538),
    U = n(937615),
    z = n(335131),
    G = n(1870),
    V = n(429368),
    W = n(884697),
    q = n(635552),
    K = n(83479),
    Y = n(290175),
    X = n(724994),
    J = n(328456),
    Q = n(390698),
    $ = n(141011),
    ee = n(525518),
    et = n(168020),
    en = n(426171),
    er = n(224068),
    ea = n(813083),
    ei = n(680942),
    eo = n(558060),
    ec = n(539598),
    es = n(237031),
    el = n(372654),
    ed = n(38914),
    eu = n(259673),
    em = n(508925),
    ep = n(953405),
    e_ = n(453713),
    ef = n(616066),
    eg = n(22267),
    eh = n(332246),
    eb = n(58201),
    ev = n(445794),
    ex = n(794324),
    eC = n(361110),
    eP = n(29121),
    ey = n(956472),
    ej = n(832149),
    eO = n(215023),
    ew = n(981631),
    eI = n(474936),
    eT = n(231338),
    eS = n(388032),
    ek = n(188336);
function eN(e) {
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
let eA = (e) => {
        let { item: t, user: n, isBundleItem: i = !1 } = e,
            o = a.useRef(null),
            c = (0, b.Z)(o);
        return (0, l.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: i ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                    children: (0, r.jsx)(ef.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: i ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
                    ref: o,
                    children: (0, r.jsx)(N.Z, {
                        profileEffectId: t.id,
                        isHovering: c,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: o,
                    className: ek.nameplatePreviewContainer,
                    children: (0, r.jsx)(eg.Z, {
                        className: ek.nameplatePreview,
                        nameplate: t,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "large",
                    }),
                }),
            )
            .otherwise(() => null);
    },
    eZ = (e) => {
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
        let c = t.items.length;
        return (0, r.jsx)("div", {
            className: ek.bundlePreviewContainer,
            children: (0, r.jsx)(g.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, a) => {
                    let i = String(a),
                        o = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        s = "(".concat(a + 1, "/").concat(c, ")");
                    return (0, r.jsx)(
                        g.Mi4,
                        {
                            id: i,
                            children: (0, r.jsxs)("div", {
                                className: ek.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eA, {
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
                        i,
                    );
                }),
            }),
        });
    },
    eR = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n,
              })
            : (0, eO.o0)(t.skuId)
              ? (0, r.jsx)(em.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eA, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eL = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  className: ek.learnMoreLink,
                  children: eS.intl.format(eS.t.Q1scdH, {
                      helpdeskArticle: F.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: c,
                onClose: l,
                returnRef: m,
                previewingVariantIndexProps: b,
                selectedVariantIndex: x,
                tab: P,
            } = e,
            { analyticsLocations: y } = (0, C.ZP)(),
            j = H.ZP.canUseCollectibles(n),
            { previewingVariantIndex: O } = b,
            w = (0, eh.N)(t, O),
            I = (0, eb.W)(t, x);
        s()(null != I, "Selected product should not be null");
        let k = (0, X.L)(t),
            { isPurchased: N, isPartiallyOwnedBundle: E } = (0, X.L)(I),
            { isDisabled: A, disabledReason: M } = (0, Y.G)(I.skuId),
            B = (0, W.ne)({
                product: I,
                isPartiallyOwnedBundle: E,
                isPurchased: N,
            }),
            D = (0, _.e7)([G.Z], () => G.Z.isClaiming === (null == I ? void 0 : I.skuId)),
            F = (0, v.ZP)(),
            V = (0, f.wj)(F),
            $ = (0, W.G1)(I),
            ee = (0, W.ql)(I, ew.tuJ.DEFAULT),
            et = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: en } = (0, J.Rj)(null != w ? w : I),
            el = a.useMemo(() => (0, W.BH)(I, j), [I, j]),
            { handleUseNow: ed, isApplying: eu } = (0, q.W)({
                product: I,
                onSuccess: l,
            }),
            em = (0, eP.To)(I),
            { enabled: ef } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            eg = (0, ev.I)(t),
            ex = null != eg,
            {
                checkoutEligiblePrices: eC,
                isOrbExclusive: eA,
                hasSufficientOrbs: eZ,
            } = (0, ey.Ip)({
                product: I,
                isPremiumUser: j,
                tab: P,
                hasDiscountOffer: ex,
            }),
            eM = a.useCallback(
                () =>
                    (0, T.Z)({
                        skuId: I.skuId,
                        analyticsLocations: y,
                        variantsReturnStyle: p.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? l() : (0, eT.dG)()),
                    }),
                [y, l, I.skuId],
            );
        a.useEffect(() => {
            if (null != en) return (0, h.cV)(en), () => (0, h.cV)(void 0);
        }, [en]);
        let eB = (0, K.G)(I);
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
                (0, r.jsx)(eR, {
                    product: null != w ? w : I,
                    user: n,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ek.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: I,
                                    isDarkText: !V,
                                    isOrbExclusive: eA,
                                }),
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: ek.headingWithItemTypePill,
                                    children: em,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: eB,
                                }),
                                (0, r.jsx)(eL, { skuId: I.skuId }),
                                k.isPurchased || k.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: E,
                                      })
                                    : $
                                      ? (0, r.jsx)(g.Text, {
                                            variant: "text-md/semibold",
                                            className: ek.priceTag,
                                            children: eS.intl.string(eS.t.rt69oq),
                                        })
                                      : ef
                                        ? (0, r.jsx)(ep.a, {
                                              prices: eC,
                                              product: I,
                                              isPremiumUser: j,
                                              discount: el,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: A,
                                              discountOfferAmount: eg,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ek.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(eo.Z, {
                                                      product: I,
                                                      discount: el,
                                                      isPremiumUser: j,
                                                      hideStrikethroughPrice: !j || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eg,
                                                  }),
                                                  j || ex ? null : (0, r.jsx)(ec.Z, { product: I }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(g.Rny, {
                            children: (0, r.jsx)(e_.P, {
                                selectedVariantIndex: x,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: b,
                                className: ek.variantsSwitch,
                            }),
                        }),
                        null !== M &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                className: ek.disabledReason,
                                children: M,
                            }),
                        (0, r.jsx)("div", {
                            className: ek.buttonsContainer,
                            children: (() => {
                                if ($ && !j && !et) {
                                    let e;
                                    return (
                                        (e = eS.intl.string(eS.t.sEAnVF)),
                                        (0, r.jsx)(S.Z, {
                                            subscriptionTier: eI.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: es.v,
                                            onSubscribeModalClose: () => {
                                                (0, es.T)({
                                                    product: I,
                                                    category: i,
                                                    shouldCheckoutWithOrbs: c,
                                                    returnRef: m,
                                                    analyticsLocations: y,
                                                });
                                            },
                                        })
                                    );
                                }
                                return B
                                    ? N
                                        ? (0, r.jsx)(g.zxk, {
                                              variant: "primary",
                                              onClick: ed,
                                              loading: eu,
                                              text: eS.intl.string(eS.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(g.zxk, {
                                                loading: D,
                                                loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
                                                loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(I.skuId),
                                                        l(),
                                                        (0, ej.Z)({
                                                            product: I,
                                                            analyticsLocations: y,
                                                            purchaseType: eO.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eS.intl.string(eS.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eC.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eT.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, L.qA)({
                                                                        skuId: I.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: p.v.VARIANTS_GROUP,
                                                                            }),
                                                                                l(),
                                                                                (0, ej.Z)({
                                                                                    product: I,
                                                                                    analyticsLocations: y,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eO.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: y,
                                                                    });
                                                                },
                                                                a = A
                                                                    ? eS.intl.string(eS.t.cTdr39)
                                                                    : eS.intl.string(eS.t.zqh7ZG),
                                                                i = !eZ || A,
                                                                o = eS.intl.formatToPlainString(eS.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                c = i ? "".concat(o, ", ").concat(a) : o;
                                                            return (0, r.jsx)(g.ua7, {
                                                                position: "top",
                                                                text: a,
                                                                shouldShow: i,
                                                                "aria-label": !1,
                                                                children: (a) =>
                                                                    (0, r.jsx)(
                                                                        g.zxk,
                                                                        eE(eN({}, a), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: i,
                                                                            "aria-label": c,
                                                                            text: eS.intl.format(eS.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(R.Z, {
                                                                                        className: ek.orbIconAligned,
                                                                                        shouldUseThemeColor: i && !t,
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let a = !$ && !et && !d.tq && !eA && B,
                                                        i = (0, W.x6)(I)
                                                            ? eS.intl.string(eS.t.V1AWw8)
                                                            : I.type === u.Z.PROFILE_EFFECT
                                                              ? eS.intl.string(eS.t.kAeDcH)
                                                              : I.type === u.Z.NAMEPLATE
                                                                ? eS.intl.string(eS.t.H3vhqa)
                                                                : eS.intl.string(eS.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (i = eS.intl.formatToPlainString(eS.t["5U5RBw"], {
                                                                  discountOfferAmount: eg,
                                                              }))
                                                            : ef &&
                                                              (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
                                                                  price: (0, U.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)("div", {
                                                            className: ek.checkoutButtonsRow,
                                                            children: [
                                                                (0, r.jsx)(g.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eM,
                                                                    text: i,
                                                                    fullWidth: !0,
                                                                }),
                                                                a &&
                                                                    (0, r.jsx)(ei.Z, {
                                                                        primary: n,
                                                                        product: I,
                                                                        onSuccess: l,
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
                            className: o()(ek.disclaimer, !V && ek.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !N ? eS.intl.string(eS.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eB = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(g.qEK, {
                    src: t.avatarSrc,
                    size: g.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: g.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: o()(ek.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            a = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdX),
            children: (0, r.jsxs)(g.Rny, {
                children: [
                    (0, r.jsx)(eB, {
                        user: a.mallow,
                        innerClassName: ek.userBlue,
                    }),
                    (0, r.jsxs)(g.Text, {
                        variant: "text-sm/semibold",
                        className: ek.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eB, {
                        user: a.phibi,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: ek.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eg.Z, {
                            className: ek.nameplatePreview,
                            innerClassName: ek.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eB, {
                        user: a.locke,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsxs)(g.Text, {
                        variant: "text-sm/semibold",
                        className: ek.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eB, {
                        user: a.boom,
                        innerClassName: ek.userGreen,
                    }),
                    (0, r.jsx)(eB, {
                        user: a.cherry,
                        innerClassName: ek.userGreen,
                    }),
                ],
            }),
        });
    },
    eF = (e) => {
        let { product: t, user: n } = e,
            a = H.ZP.canUsePremiumProfileCustomization(n),
            i = (0, _.cj)([M.Z], () => M.Z.getAllPending()),
            { pendingAvatar: o } = i,
            c = (function (e, t) {
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
            s = (0, E.SD)({
                userId: n.id,
                image: o,
            }),
            l = t.type === u.Z.AVATAR_DECORATION,
            [d] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: p } = (0, J.Rj)(t),
            f = null != p;
        return (0, r.jsx)("div", {
            className:
                (null == d ? void 0 : d.type) === u.Z.AVATAR_DECORATION
                    ? ek.previewsContainerInner
                    : ek.profileEffectPreviewsContainerInner,
            children:
                (null == d ? void 0 : d.type) === u.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: d,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  k.Z,
                                  eE(eN({}, c), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: a,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == p ? void 0 : p.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !f,
                                      hideCustomStatus: !0,
                                      hideBioSection: l,
                                      hideViewFullProfileButton: !0,
                                      interactive: !1,
                                  }),
                              ),
                              l && (0, r.jsx)(eH, { user: n }),
                          ],
                      }),
        });
    },
    eH = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, y.e5)(
                    eE(
                        eN(
                            {},
                            (0, j.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eS.intl.string(eS.t.d5YwKy),
                            }),
                        ),
                        {
                            state: ew.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvL"]),
            children: (0, r.jsx)(g.Rny, {
                children: (0, r.jsxs)(g.Zbd, {
                    className: ek.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            w.Z,
                            {
                                className: ek.mockMessage,
                                author: (0, O.ZH)(n),
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
    eU = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: o,
                returnRef: c,
                analyticsSource: l,
                analyticsLocations: d,
                shouldCheckoutWithOrbs: p,
                tab: f,
            } = e,
            h = (0, _.e7)([B.default], () => B.default.getCurrentUser()),
            b = (0, eC.f)(i),
            { previewingVariantIndex: v } = b,
            P = (0, _.e7)([G.Z], () => G.Z.purchases),
            y = (0, V.o)(i, P),
            j = (0, eh.N)(i, v),
            O = (0, eb.W)(i, y);
        s()(null != O, "Selected product should not be null");
        let { analyticsLocations: w } = (0, C.ZP)([...d, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(O.skuId);
        let { pdpBackground: I, logo: T } = (0, ex.OR)(o);
        a.useEffect(() => {
            null != h && (0, A.Z)(h.id, h.getAvatarURL(void 0, 80));
        }, [h]);
        let S = a.useMemo(() => (0, W.jm)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            D.default.track(ew.rMx.OPEN_MODAL, {
                type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: l,
                location_stack: w,
                sku_id: O.skuId,
                product_type: S,
            }),
                O.items.forEach(z.oK);
        }, [l, w, O.skuId, O.items, S]);
        let k = (0, L.r9)(),
            N = t === g.Dvm.EXITING,
            E = (0, ev.t)(i),
            Z = null == E ? void 0 : E.amount;
        if (null == h) return null;
        let R = (0, eO.ZS)(o.skuId);
        return (0, r.jsx)(C.Gt, {
            value: w,
            children: (0, r.jsxs)(g.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: ek.modalRoot,
                returnRef: c,
                transitionState: t,
                size: g.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(g.hzk, {
                        "data-migration-pending": !0,
                        className: ek.modalContent,
                        children: [
                            (0, r.jsx)(eM, {
                                user: h,
                                product: i,
                                category: o,
                                onClose: n,
                                previewingVariantIndexProps: b,
                                selectedVariantIndex: y,
                                shouldCheckoutWithOrbs: p,
                                tab: f,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    O.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? ek.fractionalNitroPreviewContainer
                                        : O.type === u.Z.AVATAR_DECORATION
                                          ? ek.collectiblePreviewsContainerWithChat
                                          : ek.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)($.Z, {
                                        asset: I,
                                        size: (0, el.ML)(540),
                                        className: ek.categoryBanner,
                                        categoryBannerOverride: R,
                                    }),
                                    (0, eO.o0)(i.skuId)
                                        ? i.skuId === eO.Vt.ORB_PROFILE_BADGE
                                            ? k || N
                                                ? null
                                                : (0, r.jsx)(eu.M, { user: h })
                                            : i.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(ed.q, {})
                                              : (0, r.jsx)(em.b, {
                                                    product: i,
                                                    className: ek.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eF, {
                                              user: h,
                                              product: null != j ? j : O,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: ek.profilePreviewHeader,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: ek.titleImageContainer,
                                                children: (0, r.jsx)("img", {
                                                    className: ek.titleImage,
                                                    style: null == R ? void 0 : R.pdpLogoStyle,
                                                    src: T,
                                                    alt: o.name,
                                                }),
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: ek.headerButtonContainer,
                                                children: [
                                                    (0, r.jsx)(ee.n, {
                                                        skuId: O.skuId,
                                                        tab: f,
                                                    }),
                                                    (0, r.jsx)(g.hU, {
                                                        "aria-label": eS.intl.string(eS.t.cpT0Cg),
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
                        ],
                    }),
                    null != Z &&
                        (0, r.jsxs)(g.mzw, {
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
                                            children: eS.intl.format(eS.t["5KE2fX"], { discountOfferAmount: Z }),
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
