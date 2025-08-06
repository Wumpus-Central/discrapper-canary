n.d(t, { default: () => eF }), n(388685), n(314940), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    f = n(399606),
    p = n(780384),
    v = n(481060),
    h = n(809206),
    b = n(727637),
    P = n(410030),
    g = n(100527),
    x = n(906732),
    j = n(570908),
    O = n(786761),
    _ = n(3148),
    w = n(739566),
    C = n(753206),
    y = n(4242),
    I = n(333867),
    S = n(767714),
    E = n(678135),
    T = n(876917),
    k = n(643879),
    N = n(484459),
    Z = n(822857),
    A = n(960919),
    R = n(275388),
    L = n(25990),
    B = n(594174),
    D = n(626135),
    M = n(63063),
    U = n(74538),
    H = n(937615),
    F = n(335131),
    z = n(1870),
    W = n(429368),
    G = n(884697),
    V = n(228624),
    q = n(635552),
    K = n(83479),
    X = n(290175),
    Y = n(905357),
    J = n(724994),
    Q = n(328456),
    $ = n(390698),
    ee = n(141011),
    et = n(525518),
    en = n(426171),
    er = n(224068),
    ei = n(813083),
    ea = n(680942),
    el = n(558060),
    eo = n(539598),
    es = n(237031),
    ec = n(372654),
    eu = n(38914),
    ed = n(262786),
    em = n(259673),
    ef = n(508925),
    ep = n(953405),
    ev = n(453713),
    eh = n(616066),
    eb = n(22267),
    eP = n(332246),
    eg = n(58201),
    ex = n(794324),
    ej = n(361110),
    eO = n(956472),
    e_ = n(832149),
    ew = n(215023),
    eC = n(981631),
    ey = n(474936),
    eI = n(231338),
    eS = n(388032),
    eE = n(785218);
function eT(e) {
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
let eN = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, b.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: a ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                    children: (0, r.jsx)(eh.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: a ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(T.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: l,
                    className: eE.nameplatePreviewContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: eE.nameplatePreview,
                        nameplate: t,
                        isHighlighted: o,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "large",
                    }),
                }),
            )
            .otherwise(() => null);
    },
    eZ = (e) => {
        let { product: t, user: n } = e,
            [a, l] = i.useState(0);
        i.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && l((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let o = t.items.length;
        return (0, r.jsx)("div", {
            className: eE.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(o, ")");
                    return (0, r.jsx)(
                        v.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eE.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eE.bundleSlideTitle,
                                        children: [null == l ? void 0 : l.name, " ", s],
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
    eA = (e) => {
        let { product: t, user: n } = e;
        return (0, G.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n,
              })
            : (0, ew.o0)(t.skuId)
              ? (0, r.jsx)(ef.b, {
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
    eR = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: eE.learnMoreLink,
                  children: eS.intl.format(eS.t.Q1scdH, {
                      helpdeskArticle: M.Z.getArticleURL(eC.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eL = (e) => {
        let t,
            {
                product: n,
                user: a,
                category: o,
                shouldCheckoutWithOrbs: c,
                onClose: m,
                returnRef: b,
                previewingVariantIndexProps: g,
                selectedVariantIndex: j,
                tab: O,
            } = e,
            { analyticsLocations: _ } = (0, x.ZP)(),
            w = U.ZP.canUseCollectibles(a),
            { previewingVariantIndex: C } = g,
            y = (0, eP.N)(n, C),
            E = (0, eg.W)(n, j);
        s()(null != E, "Selected product should not be null");
        let T = (0, J.L)(n),
            { isPurchased: k, isPartiallyOwnedBundle: N } = (0, J.L)(E),
            { isDisabled: L, disabledReason: B } = (0, X.G)(E.skuId),
            D = (0, G.ne)({
                product: E,
                isPartiallyOwnedBundle: N,
                isPurchased: k,
            }),
            M = (0, f.e7)([z.Z], () => z.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            W = (0, P.ZP)(),
            ee = (0, p.wj)(W),
            et = (0, G.G1)(E),
            en = (0, G.ql)(E, eC.tuJ.DEFAULT),
            ec = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: eu } = (0, Q.Rj)(null != y ? y : E),
            em = i.useMemo(() => (0, G.BH)(E, w), [E, w]),
            { handleUseNow: ef, isApplying: eh } = (0, q.W)({
                product: E,
                onSuccess: m,
            }),
            eb = (0, V.hv)("CollectiblesProductPreviewInfo"),
            ex = (0, Y.T)(E),
            { enabled: ej } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            eN = (0, ed._)(n.eligibleOffers),
            eZ = null != eN,
            {
                checkoutEligiblePrices: eL,
                isOrbExclusive: eB,
                hasSufficientOrbs: eD,
            } = (0, eO.Ip)({
                product: E,
                isPremiumUser: w,
                tab: O,
                hasDiscountOffer: eZ,
            }),
            eM = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: E.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? m() : (0, eI.dG)()),
                    }),
                [_, m, E.skuId, eb],
            );
        i.useEffect(() => {
            if (null != eu) return (0, h.cV)(eu), () => (0, h.cV)(void 0);
        }, [eu]);
        let eU = (e, t) => {
                let n = () => {
                        (0, R.qA)({
                            skuId: E.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                (0, F.qg)({
                                    variantsReturnStyle: eb,
                                    location: "collectible_checkout_with_orb",
                                }),
                                    m(),
                                    (0, e_.Z)({
                                        product: E,
                                        analyticsLocations: _,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: ew.o8.ORB,
                                    });
                            },
                            analyticsLocations: _,
                        });
                    },
                    i = L ? eS.intl.string(eS.t.cTdr39) : eS.intl.string(eS.t.zqh7ZG),
                    a = !eD || L,
                    l = eS.intl.formatToPlainString(eS.t["fNG/09"], { orbPrice: e.amount }),
                    o = a ? "".concat(l, ", ").concat(i) : l;
                return (0, r.jsx)(v.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: a,
                    "aria-label": !1,
                    children: (i) =>
                        (0, r.jsx)(
                            v.zxk,
                            ek(eT({}, i), {
                                variant: t ? "primary" : "secondary",
                                onClick: n,
                                disabled: a,
                                "aria-label": o,
                                text: eS.intl.format(eS.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () =>
                                        (0, r.jsx)(A.Z, {
                                            className: eE.orbIconAligned,
                                            shouldUseThemeColor: a && !t,
                                        }),
                                }),
                                fullWidth: !0,
                            }),
                        ),
                });
            },
            eH = (e, t) => {
                let n = !et && !ec && !u.tq && !eB && D,
                    i = (0, G.x6)(E)
                        ? eS.intl.string(eS.t.V1AWw8)
                        : E.type === d.Z.PROFILE_EFFECT
                          ? eS.intl.string(eS.t.kAeDcH)
                          : E.type === d.Z.NAMEPLATE
                            ? eS.intl.string(eS.t.H3vhqa)
                            : eS.intl.string(eS.t.AQ0Ven);
                return (
                    eZ
                        ? (i = eS.intl.formatToPlainString(eS.t["5U5RBw"], { discountOfferAmount: eN }))
                        : ej &&
                          (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], { price: (0, H.T4)(e.amount, e.currency) })),
                    (0, r.jsxs)("div", {
                        className: eE.checkoutButtonsRow,
                        children: [
                            (0, r.jsx)(v.zxk, {
                                variant: t ? "primary" : "secondary",
                                onClick: eM,
                                text: i,
                                fullWidth: !0,
                            }),
                            n &&
                                (0, r.jsx)(ea.Z, {
                                    primary: t,
                                    product: E,
                                    onSuccess: m,
                                }),
                        ],
                    })
                );
            },
            eF = (0, K.G)(E);
        return (0, r.jsxs)("div", {
            className: eE.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eE.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: o,
                        display: "modal",
                    }),
                }),
                (0, r.jsx)(eA, {
                    product: null != y ? y : E,
                    user: a,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: E,
                                    isDarkText: !ee,
                                    isOrbExclusive: eB,
                                }),
                                (0, r.jsx)(v.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eE.headingWithItemTypePill,
                                    children: ex,
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: "text-sm/normal",
                                    children: eF,
                                }),
                                (0, r.jsx)(eR, { skuId: E.skuId }),
                                T.isPurchased || T.isPartiallyOwnedBundle
                                    ? (0, r.jsx)($.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: N,
                                      })
                                    : et
                                      ? (0, r.jsx)(v.Text, {
                                            variant: "text-md/semibold",
                                            className: eE.priceTag,
                                            children: eS.intl.string(eS.t.rt69oq),
                                        })
                                      : ej
                                        ? (0, r.jsx)(ep.a, {
                                              prices: eL,
                                              product: E,
                                              isPremiumUser: w,
                                              discount: em,
                                              hasSufficientOrbs: eD,
                                              isProductDisabled: L,
                                              discountOfferAmount: eN,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eE.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(el.Z, {
                                                      product: E,
                                                      discount: em,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || eZ,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eN,
                                                  }),
                                                  w || eZ ? null : (0, r.jsx)(eo.Z, { product: E }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(v.Rny, {
                            children: (0, r.jsx)(ev.P, {
                                selectedVariantIndex: j,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: g,
                                className: eE.variantsSwitch,
                            }),
                        }),
                        null !== B &&
                            (0, r.jsx)(v.Text, {
                                variant: "text-xs/normal",
                                className: eE.disabledReason,
                                children: B,
                            }),
                        (0, r.jsx)("div", {
                            className: eE.buttonsContainer,
                            children:
                                !et || w || ec
                                    ? D
                                        ? k
                                            ? (0, r.jsx)(v.zxk, {
                                                  variant: "primary",
                                                  onClick: ef,
                                                  loading: eh,
                                                  text: eS.intl.string(eS.t.MAS7uL),
                                                  fullWidth: !0,
                                              })
                                            : et
                                              ? (0, r.jsx)(v.zxk, {
                                                    loading: M,
                                                    loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
                                                    loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, F.fK)(E.skuId),
                                                            m(),
                                                            (0, e_.Z)({
                                                                product: E,
                                                                analyticsLocations: _,
                                                                purchaseType: ew.o8.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eS.intl.string(eS.t.zp6caG),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eL.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eI.pK.DISCORD_ORB ? eU(e, n) : eH(e, n);
                                                    }),
                                                })
                                        : null
                                    : ((t = eS.intl.string(eS.t.sEAnVF)),
                                      (0, r.jsx)(S.Z, {
                                          subscriptionTier: ey.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: es.v,
                                          onSubscribeModalClose: () => {
                                              (0, es.T)({
                                                  product: E,
                                                  category: o,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: b,
                                                  analyticsLocations: _,
                                              });
                                          },
                                      })),
                        }),
                        (0, r.jsx)(v.Text, {
                            className: l()(eE.disclaimer, !ee && eE.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: et && !k ? eS.intl.string(eS.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eB = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eE.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eE.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, y.w$)();
        return (0, r.jsx)("div", {
            className: eE.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdX),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eB, {
                        user: i.mallow,
                        innerClassName: eE.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eE.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eB, {
                        user: i.phibi,
                        innerClassName: eE.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eE.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eb.Z, {
                            className: eE.nameplatePreview,
                            innerClassName: eE.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eB, {
                        user: i.locke,
                        innerClassName: eE.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eE.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eB, {
                        user: i.boom,
                        innerClassName: eE.userGreen,
                    }),
                    (0, r.jsx)(eB, {
                        user: i.cherry,
                        innerClassName: eE.userGreen,
                    }),
                ],
            }),
        });
    },
    eM = (e) => {
        let { product: t, user: n } = e,
            i = U.ZP.canUsePremiumProfileCustomization(n),
            a = (0, f.cj)([L.Z], () => L.Z.getAllPending()),
            { pendingAvatar: l } = a,
            o = (function (e, t) {
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
            })(a, ["pendingAvatar"]),
            s = (0, k.SD)({
                userId: n.id,
                image: l,
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: p } = (0, Q.Rj)(t),
            v = null != p;
        return (0, r.jsx)("div", {
            className:
                (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION
                    ? eE.previewsContainerInner
                    : eE.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: u,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  E.Z,
                                  ek(eT({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == p ? void 0 : p.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !v,
                                      hideCustomStatus: !0,
                                      hideBioSection: c,
                                      hideViewFullProfileButton: !0,
                                      interactive: !1,
                                  }),
                              ),
                              c && (0, r.jsx)(eH, { user: n }),
                          ],
                      }),
        });
    },
    eU = (e) => {
        let { author: t } = e;
        return (0, O.e5)(
            ek(
                eT(
                    {},
                    (0, _.ZP)({
                        author: t,
                        channelId: "1337",
                        content: eS.intl.string(eS.t.d5YwKy),
                    }),
                ),
                {
                    state: eC.yb.SENT,
                    id: "0",
                },
            ),
        );
    },
    eH = (e) => {
        let { user: t } = e,
            n = eU({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvL"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: eE.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            C.Z,
                            {
                                className: eE.mockMessage,
                                author: (0, w.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eE.mockInput,
                            children: [
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eE.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eE.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eF = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: l,
                returnRef: o,
                analyticsSource: c,
                analyticsLocations: u,
                shouldCheckoutWithOrbs: p,
                tab: h,
            } = e,
            b = (0, f.e7)([B.default], () => B.default.getCurrentUser()),
            P = (0, ej.f)(a),
            { previewingVariantIndex: j } = P,
            O = (0, f.e7)([z.Z], () => z.Z.purchases),
            _ = (0, W.o)(a, O),
            w = (0, eP.N)(a, j),
            C = (0, eg.W)(a, _);
        s()(null != C, "Selected product should not be null");
        let { analyticsLocations: y } = (0, x.ZP)([...u, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(C.skuId);
        let { pdpBackground: I, logo: S } = (0, ex.OR)(l);
        i.useEffect(() => {
            null != b && (0, N.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let E = i.useMemo(() => (0, G.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            D.default.track(eC.rMx.OPEN_MODAL, {
                type: eC.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: y,
                sku_id: C.skuId,
                product_type: E,
            }),
                C.items.forEach(F.oK);
        }, [c, y, C.skuId, C.items, E]);
        let T = (0, R.r9)(),
            k = t === v.Dvm.EXITING;
        if (null == b) return null;
        let Z = (0, ew.ZS)(l.skuId);
        return (0, r.jsx)(x.Gt, {
            value: y,
            children: (0, r.jsx)(v.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eE.modalRoot,
                returnRef: o,
                transitionState: t,
                size: v.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: (0, r.jsxs)(v.hzk, {
                    "data-migration-pending": !0,
                    className: eE.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: b,
                            product: a,
                            category: l,
                            onClose: n,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: p,
                            tab: h,
                        }),
                        (0, r.jsxs)("div", {
                            className:
                                C.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                    ? eE.fractionalNitroPreviewContainer
                                    : C.type === d.Z.AVATAR_DECORATION
                                      ? eE.collectiblePreviewsContainerWithChat
                                      : eE.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    asset: I,
                                    size: (0, ec.ML)(540),
                                    className: eE.categoryBanner,
                                    categoryBannerOverride: Z,
                                }),
                                (0, ew.o0)(a.skuId)
                                    ? a.skuId === ew.Vt.ORB_PROFILE_BADGE
                                        ? T || k
                                            ? null
                                            : (0, r.jsx)(em.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(ef.b, {
                                                product: a,
                                                className: eE.externalProductProfilePreview,
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: b,
                                          product: null != w ? w : C,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: eE.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: eE.titleImageContainer,
                                            children: (0, r.jsx)("img", {
                                                className: eE.titleImage,
                                                style: null == Z ? void 0 : Z.pdpLogoStyle,
                                                src: S,
                                                alt: l.name,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: eE.headerButtonContainer,
                                            children: [
                                                (0, r.jsx)(et.n, {
                                                    skuId: C.skuId,
                                                    tab: h,
                                                }),
                                                (0, r.jsx)(v.hU, {
                                                    "aria-label": eS.intl.string(eS.t.cpT0Cg),
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
                    ],
                }),
            }),
        });
    };
