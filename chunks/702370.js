n.d(t, { default: () => eH }), n(388685), n(314940), n(953529);
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
    f = n(311570),
    p = n(399606),
    v = n(780384),
    h = n(481060),
    P = n(809206),
    b = n(727637),
    g = n(410030),
    x = n(100527),
    j = n(906732),
    O = n(570908),
    _ = n(786761),
    w = n(3148),
    C = n(739566),
    y = n(753206),
    I = n(4242),
    S = n(333867),
    T = n(767714),
    E = n(678135),
    k = n(876917),
    N = n(643879),
    Z = n(484459),
    R = n(822857),
    A = n(960919),
    L = n(275388),
    B = n(25990),
    D = n(594174),
    M = n(626135),
    U = n(63063),
    H = n(74538),
    F = n(937615),
    z = n(335131),
    G = n(1870),
    W = n(429368),
    V = n(884697),
    q = n(635552),
    K = n(83479),
    X = n(290175),
    Y = n(724994),
    J = n(328456),
    Q = n(390698),
    $ = n(141011),
    ee = n(525518),
    et = n(426171),
    en = n(224068),
    er = n(813083),
    ei = n(680942),
    ea = n(558060),
    el = n(539598),
    eo = n(237031),
    es = n(372654),
    ec = n(38914),
    eu = n(259673),
    ed = n(508925),
    em = n(953405),
    ef = n(453713),
    ep = n(616066),
    ev = n(22267),
    eh = n(332246),
    eP = n(58201),
    eb = n(794324),
    eg = n(10694),
    ex = n(361110),
    ej = n(29121),
    eO = n(956472),
    e_ = n(832149),
    ew = n(215023),
    eC = n(981631),
    ey = n(474936),
    eI = n(231338),
    eS = n(388032),
    eT = n(188336);
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
                    className: a ? eT.bundleAvatarPreviewContainer : eT.avatarPreviewContainer,
                    children: (0, r.jsx)(ep.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: a ? eT.bundlePfxPreviewContainer : eT.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: l,
                    className: eT.nameplatePreviewContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: eT.nameplatePreview,
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
            className: eT.bundlePreviewContainer,
            children: (0, r.jsx)(h.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(o, ")");
                    return (0, r.jsx)(
                        h.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eT.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eT.bundleSlideTitle,
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
    eR = (e) => {
        let { product: t, user: n } = e;
        return (0, V.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n,
              })
            : (0, ew.o0)(t.skuId)
              ? (0, r.jsx)(ed.b, {
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
    eA = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: eT.learnMoreLink,
                  children: eS.intl.format(eS.t.Q1scdH, {
                      helpdeskArticle: U.Z.getArticleURL(eC.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eL = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: m,
                previewingVariantIndexProps: b,
                selectedVariantIndex: x,
                tab: O,
            } = e,
            { analyticsLocations: _ } = (0, j.ZP)(),
            w = H.ZP.canUseCollectibles(n),
            { previewingVariantIndex: C } = b,
            y = (0, eh.N)(t, C),
            I = (0, eP.W)(t, x);
        s()(null != I, "Selected product should not be null");
        let E = (0, Y.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: N } = (0, Y.L)(I),
            { isDisabled: Z, disabledReason: B } = (0, X.G)(I.skuId),
            D = (0, V.ne)({
                product: I,
                isPartiallyOwnedBundle: N,
                isPurchased: k,
            }),
            M = (0, p.e7)([G.Z], () => G.Z.isClaiming === (null == I ? void 0 : I.skuId)),
            U = (0, g.ZP)(),
            W = (0, v.wj)(U),
            $ = (0, V.G1)(I),
            ee = (0, V.ql)(I, eC.tuJ.DEFAULT),
            et = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: es } = (0, J.Rj)(null != y ? y : I),
            ec = i.useMemo(() => (0, V.BH)(I, w), [I, w]),
            { handleUseNow: eu, isApplying: ed } = (0, q.W)({
                product: I,
                onSuccess: c,
            }),
            ep = (0, ej.To)(I),
            { enabled: ev } = (0, R.WX)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, eg.I)(t),
            ex = null != eb,
            {
                checkoutEligiblePrices: eN,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eL,
            } = (0, eO.Ip)({
                product: I,
                isPremiumUser: w,
                tab: O,
                hasDiscountOffer: ex,
            }),
            eB = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: I.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: f.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eI.dG)()),
                    }),
                [_, c, I.skuId],
            );
        i.useEffect(() => {
            if (null != es) return (0, P.cV)(es), () => (0, P.cV)(void 0);
        }, [es]);
        let eD = (0, K.G)(I);
        return (0, r.jsxs)("div", {
            className: eT.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eT.titleContainer,
                    children: (0, r.jsx)(er.Z, {
                        category: a,
                        display: "modal",
                    }),
                }),
                (0, r.jsx)(eR, {
                    product: null != y ? y : I,
                    user: n,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eT.description,
                            children: [
                                (0, r.jsx)(en.Z, {
                                    product: I,
                                    isDarkText: !W,
                                    isOrbExclusive: eZ,
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eT.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    children: eD,
                                }),
                                (0, r.jsx)(eA, { skuId: I.skuId }),
                                E.isPurchased || E.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: eT.priceTag,
                                          isPartiallyPurchased: N,
                                      })
                                    : $
                                      ? (0, r.jsx)(h.Text, {
                                            variant: "text-md/semibold",
                                            className: eT.priceTag,
                                            children: eS.intl.string(eS.t.rt69oq),
                                        })
                                      : ev
                                        ? (0, r.jsx)(em.a, {
                                              prices: eN,
                                              product: I,
                                              isPremiumUser: w,
                                              discount: ec,
                                              hasSufficientOrbs: eL,
                                              isProductDisabled: Z,
                                              discountOfferAmount: eb,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eT.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(ea.Z, {
                                                      product: I,
                                                      discount: ec,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eb,
                                                  }),
                                                  w || ex ? null : (0, r.jsx)(el.Z, { product: I }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(ef.P, {
                                selectedVariantIndex: x,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: b,
                                className: eT.variantsSwitch,
                            }),
                        }),
                        null !== B &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: eT.disabledReason,
                                children: B,
                            }),
                        (0, r.jsx)("div", {
                            className: eT.buttonsContainer,
                            children: (() => {
                                if ($ && !w && !et) {
                                    let e;
                                    return (
                                        (e = eS.intl.string(eS.t.sEAnVF)),
                                        (0, r.jsx)(T.Z, {
                                            subscriptionTier: ey.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eo.v,
                                            onSubscribeModalClose: () => {
                                                (0, eo.T)({
                                                    product: I,
                                                    category: a,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: _,
                                                });
                                            },
                                        })
                                    );
                                }
                                return D
                                    ? k
                                        ? (0, r.jsx)(h.zxk, {
                                              variant: "primary",
                                              onClick: eu,
                                              loading: ed,
                                              text: eS.intl.string(eS.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(h.zxk, {
                                                loading: M,
                                                loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
                                                loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(I.skuId),
                                                        c(),
                                                        (0, e_.Z)({
                                                            product: I,
                                                            analyticsLocations: _,
                                                            purchaseType: ew.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eS.intl.string(eS.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eN.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eI.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, L.qA)({
                                                                        skuId: I.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: f.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, e_.Z)({
                                                                                    product: I,
                                                                                    analyticsLocations: _,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: ew.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: _,
                                                                    });
                                                                },
                                                                i = Z
                                                                    ? eS.intl.string(eS.t.cTdr39)
                                                                    : eS.intl.string(eS.t.zqh7ZG),
                                                                a = !eL || Z,
                                                                l = eS.intl.formatToPlainString(eS.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                o = a ? "".concat(l, ", ").concat(i) : l;
                                                            return (0, r.jsx)(h.ua7, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (i) =>
                                                                    (0, r.jsx)(
                                                                        h.zxk,
                                                                        ek(eE({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: a,
                                                                            "aria-label": o,
                                                                            text: eS.intl.format(eS.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(A.Z, {
                                                                                        className: eT.orbIconAligned,
                                                                                        shouldUseThemeColor: a && !t,
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let i = !$ && !et && !u.tq && !eZ && D,
                                                        a = (0, V.x6)(I)
                                                            ? eS.intl.string(eS.t.V1AWw8)
                                                            : I.type === d.Z.PROFILE_EFFECT
                                                              ? eS.intl.string(eS.t.kAeDcH)
                                                              : I.type === d.Z.NAMEPLATE
                                                                ? eS.intl.string(eS.t.H3vhqa)
                                                                : eS.intl.string(eS.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (a = eS.intl.formatToPlainString(eS.t["5U5RBw"], {
                                                                  discountOfferAmount: eb,
                                                              }))
                                                            : ev &&
                                                              (a = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
                                                                  price: (0, F.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)("div", {
                                                            className: eT.checkoutButtonsRow,
                                                            children: [
                                                                (0, r.jsx)(h.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: a,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(ei.Z, {
                                                                        primary: n,
                                                                        product: I,
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
                            className: l()(eT.disclaimer, !W && eT.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !k ? eS.intl.string(eS.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eB = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eT.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(O.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: h.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eT.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: eT.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eB, {
                        user: i.mallow,
                        innerClassName: eT.userBlue,
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eT.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eB, {
                        user: i.phibi,
                        innerClassName: eT.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eT.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(ev.Z, {
                            className: eT.nameplatePreview,
                            innerClassName: eT.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eB, {
                        user: i.locke,
                        innerClassName: eT.userPink,
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eT.namplateRightPanePreviewSectionGroup,
                        children: [eS.intl.string(eS.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eB, {
                        user: i.boom,
                        innerClassName: eT.userGreen,
                    }),
                    (0, r.jsx)(eB, {
                        user: i.cherry,
                        innerClassName: eT.userGreen,
                    }),
                ],
            }),
        });
    },
    eM = (e) => {
        let { product: t, user: n } = e,
            i = H.ZP.canUsePremiumProfileCustomization(n),
            a = (0, p.cj)([B.Z], () => B.Z.getAllPending()),
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
            s = (0, N.SD)({
                userId: n.id,
                image: l,
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, J.Rj)(t),
            v = null != f;
        return (0, r.jsx)("div", {
            className:
                (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION
                    ? eT.previewsContainerInner
                    : eT.profileEffectPreviewsContainerInner,
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
                                  ek(eE({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !v,
                                      hideCustomStatus: !0,
                                      hideBioSection: c,
                                      hideViewFullProfileButton: !0,
                                      interactive: !1,
                                  }),
                              ),
                              c && (0, r.jsx)(eU, { user: n }),
                          ],
                      }),
        });
    },
    eU = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, _.e5)(
                    ek(
                        eE(
                            {},
                            (0, w.ZP)({
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
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvL"]),
            children: (0, r.jsx)(h.Rny, {
                children: (0, r.jsxs)(h.Zbd, {
                    className: eT.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            y.Z,
                            {
                                className: eT.mockMessage,
                                author: (0, C.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eT.mockInput,
                            children: [
                                (0, r.jsx)(h.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eT.mockInputButton,
                                }),
                                (0, r.jsx)(h.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eT.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eH = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: l,
                returnRef: o,
                analyticsSource: c,
                analyticsLocations: u,
                shouldCheckoutWithOrbs: f,
                tab: v,
            } = e,
            P = (0, p.e7)([D.default], () => D.default.getCurrentUser()),
            b = (0, ex.f)(a),
            { previewingVariantIndex: g } = b,
            O = (0, p.e7)([G.Z], () => G.Z.purchases),
            _ = (0, W.o)(a, O),
            w = (0, eh.N)(a, g),
            C = (0, eP.W)(a, _);
        s()(null != C, "Selected product should not be null");
        let { analyticsLocations: y } = (0, j.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, et.u9)(C.skuId);
        let { pdpBackground: I, logo: S } = (0, eb.OR)(l);
        i.useEffect(() => {
            null != P && (0, Z.Z)(P.id, P.getAvatarURL(void 0, 80));
        }, [P]);
        let T = i.useMemo(() => (0, V.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eC.rMx.OPEN_MODAL, {
                type: eC.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: y,
                sku_id: C.skuId,
                product_type: T,
            }),
                C.items.forEach(z.oK);
        }, [c, y, C.skuId, C.items, T]);
        let E = (0, L.r9)(),
            k = t === h.Dvm.EXITING;
        if (null == P) return null;
        let N = (0, ew.ZS)(l.skuId);
        return (0, r.jsx)(j.Gt, {
            value: y,
            children: (0, r.jsx)(h.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eT.modalRoot,
                returnRef: o,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: (0, r.jsxs)(h.hzk, {
                    "data-migration-pending": !0,
                    className: eT.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: P,
                            product: a,
                            category: l,
                            onClose: n,
                            previewingVariantIndexProps: b,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: f,
                            tab: v,
                        }),
                        (0, r.jsxs)("div", {
                            className:
                                C.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                    ? eT.fractionalNitroPreviewContainer
                                    : C.type === d.Z.AVATAR_DECORATION
                                      ? eT.collectiblePreviewsContainerWithChat
                                      : eT.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)($.Z, {
                                    asset: I,
                                    size: (0, es.ML)(540),
                                    className: eT.categoryBanner,
                                    categoryBannerOverride: N,
                                }),
                                (0, ew.o0)(a.skuId)
                                    ? a.skuId === ew.Vt.ORB_PROFILE_BADGE
                                        ? E || k
                                            ? null
                                            : (0, r.jsx)(eu.M, { user: P })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(ec.q, {})
                                          : (0, r.jsx)(ed.b, {
                                                product: a,
                                                className: eT.externalProductProfilePreview,
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: P,
                                          product: null != w ? w : C,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: eT.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: eT.titleImageContainer,
                                            children: (0, r.jsx)("img", {
                                                className: eT.titleImage,
                                                style: null == N ? void 0 : N.pdpLogoStyle,
                                                src: S,
                                                alt: l.name,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: eT.headerButtonContainer,
                                            children: [
                                                (0, r.jsx)(ee.n, {
                                                    skuId: C.skuId,
                                                    tab: v,
                                                }),
                                                (0, r.jsx)(h.hU, {
                                                    "aria-label": eS.intl.string(eS.t.cpT0Cg),
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
                    ],
                }),
            }),
        });
    };
