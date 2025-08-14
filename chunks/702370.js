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
    g = n(809206),
    b = n(727637),
    P = n(410030),
    x = n(100527),
    j = n(906732),
    _ = n(570908),
    O = n(786761),
    C = n(3148),
    w = n(739566),
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
    F = n(63063),
    U = n(74538),
    H = n(937615),
    z = n(335131),
    G = n(1870),
    V = n(429368),
    W = n(884697),
    q = n(635552),
    K = n(83479),
    X = n(290175),
    Y = n(724994),
    J = n(328456),
    Q = n(390698),
    $ = n(141011),
    ee = n(525518),
    et = n(168020),
    en = n(426171),
    er = n(224068),
    ei = n(813083),
    ea = n(680942),
    el = n(558060),
    eo = n(539598),
    es = n(237031),
    ec = n(372654),
    eu = n(38914),
    ed = n(259673),
    em = n(508925),
    ef = n(953405),
    ep = n(453713),
    ev = n(616066),
    eh = n(22267),
    eg = n(332246),
    eb = n(58201),
    eP = n(445794),
    ex = n(794324),
    ej = n(361110),
    e_ = n(29121),
    eO = n(956472),
    eC = n(832149),
    ew = n(215023),
    ey = n(981631),
    eI = n(474936),
    eS = n(231338),
    eT = n(388032),
    eE = n(188336);
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
function eN(e, t) {
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
            o = (0, b.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: a ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: a ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
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
                    className: eE.nameplatePreviewContainer,
                    children: (0, r.jsx)(eh.Z, {
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
    eR = (e) => {
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
                                className: eE.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eZ, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(h.Text, {
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
        return (0, W.x6)(t)
            ? (0, r.jsx)(eR, {
                  product: t,
                  user: n,
              })
            : (0, ew.o0)(t.skuId)
              ? (0, r.jsx)(em.b, {
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
    eL = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: eE.learnMoreLink,
                  children: eT.intl.format(eT.t.Q1scdH, {
                      helpdeskArticle: F.Z.getArticleURL(ey.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eB = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: m,
                previewingVariantIndexProps: b,
                selectedVariantIndex: x,
                tab: _,
            } = e,
            { analyticsLocations: O } = (0, j.ZP)(),
            C = U.ZP.canUseCollectibles(n),
            { previewingVariantIndex: w } = b,
            y = (0, eg.N)(t, w),
            I = (0, eb.W)(t, x);
        s()(null != I, "Selected product should not be null");
        let E = (0, Y.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: N } = (0, Y.L)(I),
            { isDisabled: Z, disabledReason: B } = (0, X.G)(I.skuId),
            D = (0, W.ne)({
                product: I,
                isPartiallyOwnedBundle: N,
                isPurchased: k,
            }),
            M = (0, p.e7)([G.Z], () => G.Z.isClaiming === (null == I ? void 0 : I.skuId)),
            F = (0, P.ZP)(),
            V = (0, v.wj)(F),
            $ = (0, W.G1)(I),
            ee = (0, W.ql)(I, ey.tuJ.DEFAULT),
            et = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: en } = (0, J.Rj)(null != y ? y : I),
            ec = i.useMemo(() => (0, W.BH)(I, C), [I, C]),
            { handleUseNow: eu, isApplying: ed } = (0, q.W)({
                product: I,
                onSuccess: c,
            }),
            em = (0, e_.To)(I),
            { enabled: ev } = (0, R.WX)({ location: "collectibles_shop_product_details_modal" }),
            eh = (0, eP.I)(t),
            ex = null != eh,
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eR,
            } = (0, eO.Ip)({
                product: I,
                isPremiumUser: C,
                tab: _,
                hasDiscountOffer: ex,
            }),
            eB = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: I.skuId,
                        analyticsLocations: O,
                        variantsReturnStyle: f.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eS.dG)()),
                    }),
                [O, c, I.skuId],
            );
        i.useEffect(() => {
            if (null != en) return (0, g.cV)(en), () => (0, g.cV)(void 0);
        }, [en]);
        let eD = (0, K.G)(I);
        return (0, r.jsxs)("div", {
            className: eE.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eE.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: a,
                        display: "modal",
                    }),
                }),
                (0, r.jsx)(eA, {
                    product: null != y ? y : I,
                    user: n,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: I,
                                    isDarkText: !V,
                                    isOrbExclusive: eZ,
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eE.headingWithItemTypePill,
                                    children: em,
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    children: eD,
                                }),
                                (0, r.jsx)(eL, { skuId: I.skuId }),
                                E.isPurchased || E.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: N,
                                      })
                                    : $
                                      ? (0, r.jsx)(h.Text, {
                                            variant: "text-md/semibold",
                                            className: eE.priceTag,
                                            children: eT.intl.string(eT.t.rt69oq),
                                        })
                                      : ev
                                        ? (0, r.jsx)(ef.a, {
                                              prices: ej,
                                              product: I,
                                              isPremiumUser: C,
                                              discount: ec,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: Z,
                                              discountOfferAmount: eh,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eE.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(el.Z, {
                                                      product: I,
                                                      discount: ec,
                                                      isPremiumUser: C,
                                                      hideStrikethroughPrice: !C || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eh,
                                                  }),
                                                  C || ex ? null : (0, r.jsx)(eo.Z, { product: I }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(ep.P, {
                                selectedVariantIndex: x,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: b,
                                className: eE.variantsSwitch,
                            }),
                        }),
                        null !== B &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: eE.disabledReason,
                                children: B,
                            }),
                        (0, r.jsx)("div", {
                            className: eE.buttonsContainer,
                            children: (() => {
                                if ($ && !C && !et) {
                                    let e;
                                    return (
                                        (e = eT.intl.string(eT.t.sEAnVF)),
                                        (0, r.jsx)(T.Z, {
                                            subscriptionTier: eI.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: es.v,
                                            onSubscribeModalClose: () => {
                                                (0, es.T)({
                                                    product: I,
                                                    category: a,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: O,
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
                                              text: eT.intl.string(eT.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(h.zxk, {
                                                loading: M,
                                                loadingStartedLabel: eT.intl.string(eT.t["TYw+9v"]),
                                                loadingFinishedLabel: eT.intl.string(eT.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(I.skuId),
                                                        c(),
                                                        (0, eC.Z)({
                                                            product: I,
                                                            analyticsLocations: O,
                                                            purchaseType: ew.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eT.intl.string(eT.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ej.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eS.pK.DISCORD_ORB)
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
                                                                                (0, eC.Z)({
                                                                                    product: I,
                                                                                    analyticsLocations: O,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: ew.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: O,
                                                                    });
                                                                },
                                                                i = Z
                                                                    ? eT.intl.string(eT.t.cTdr39)
                                                                    : eT.intl.string(eT.t.zqh7ZG),
                                                                a = !eR || Z,
                                                                l = eT.intl.formatToPlainString(eT.t["fNG/09"], {
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
                                                                        eN(ek({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: a,
                                                                            "aria-label": o,
                                                                            text: eT.intl.format(eT.t.kAgx5O, {
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
                                                        })(e, n);
                                                    let i = !$ && !et && !u.tq && !eZ && D,
                                                        a = (0, W.x6)(I)
                                                            ? eT.intl.string(eT.t.V1AWw8)
                                                            : I.type === d.Z.PROFILE_EFFECT
                                                              ? eT.intl.string(eT.t.kAeDcH)
                                                              : I.type === d.Z.NAMEPLATE
                                                                ? eT.intl.string(eT.t.H3vhqa)
                                                                : eT.intl.string(eT.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (a = eT.intl.formatToPlainString(eT.t["5U5RBw"], {
                                                                  discountOfferAmount: eh,
                                                              }))
                                                            : ev &&
                                                              (a = eT.intl.formatToPlainString(eT.t["cNSL/v"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)("div", {
                                                            className: eE.checkoutButtonsRow,
                                                            children: [
                                                                (0, r.jsx)(h.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: a,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(ea.Z, {
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
                            className: l()(eE.disclaimer, !V && eE.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !k ? eT.intl.string(eT.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eD = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eE.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(_.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: h.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eE.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eM = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: eE.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eT.intl.string(eT.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eD, {
                        user: i.mallow,
                        innerClassName: eE.userBlue,
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eE.namplateRightPanePreviewSectionGroup,
                        children: [eT.intl.string(eT.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eD, {
                        user: i.phibi,
                        innerClassName: eE.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eE.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eh.Z, {
                            className: eE.nameplatePreview,
                            innerClassName: eE.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eD, {
                        user: i.locke,
                        innerClassName: eE.userPink,
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eE.namplateRightPanePreviewSectionGroup,
                        children: [eT.intl.string(eT.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eD, {
                        user: i.boom,
                        innerClassName: eE.userGreen,
                    }),
                    (0, r.jsx)(eD, {
                        user: i.cherry,
                        innerClassName: eE.userGreen,
                    }),
                ],
            }),
        });
    },
    eF = (e) => {
        let { product: t, user: n } = e,
            i = U.ZP.canUsePremiumProfileCustomization(n),
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
                    ? eE.previewsContainerInner
                    : eE.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eM, {
                          user: n,
                          nameplate: u,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  E.Z,
                                  eN(ek({}, o), {
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
                return (0, O.e5)(
                    eN(
                        ek(
                            {},
                            (0, C.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eT.intl.string(eT.t.d5YwKy),
                            }),
                        ),
                        {
                            state: ey.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eT.intl.string(eT.t["TN+ZvL"]),
            children: (0, r.jsx)(h.Rny, {
                children: (0, r.jsxs)(h.Zbd, {
                    className: eE.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            y.Z,
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
                                (0, r.jsx)(h.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eE.mockInputButton,
                                }),
                                (0, r.jsx)(h.EO4, {
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
            g = (0, p.e7)([D.default], () => D.default.getCurrentUser()),
            b = (0, ej.f)(a),
            { previewingVariantIndex: P } = b,
            _ = (0, p.e7)([G.Z], () => G.Z.purchases),
            O = (0, V.o)(a, _),
            C = (0, eg.N)(a, P),
            w = (0, eb.W)(a, O);
        s()(null != w, "Selected product should not be null");
        let { analyticsLocations: y } = (0, j.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(w.skuId);
        let { pdpBackground: I, logo: S } = (0, ex.OR)(l);
        i.useEffect(() => {
            null != g && (0, Z.Z)(g.id, g.getAvatarURL(void 0, 80));
        }, [g]);
        let T = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(ey.rMx.OPEN_MODAL, {
                type: ey.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: y,
                sku_id: w.skuId,
                product_type: T,
            }),
                w.items.forEach(z.oK);
        }, [c, y, w.skuId, w.items, T]);
        let E = (0, L.r9)(),
            k = t === h.Dvm.EXITING,
            N = (0, eP.t)(a),
            R = null == N ? void 0 : N.amount;
        if (null == g) return null;
        let A = (0, ew.ZS)(l.skuId);
        return (0, r.jsx)(j.Gt, {
            value: y,
            children: (0, r.jsxs)(h.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eE.modalRoot,
                returnRef: o,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(h.hzk, {
                        "data-migration-pending": !0,
                        className: eE.modalContent,
                        children: [
                            (0, r.jsx)(eB, {
                                user: g,
                                product: a,
                                category: l,
                                onClose: n,
                                previewingVariantIndexProps: b,
                                selectedVariantIndex: O,
                                shouldCheckoutWithOrbs: f,
                                tab: v,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    w.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? eE.fractionalNitroPreviewContainer
                                        : w.type === d.Z.AVATAR_DECORATION
                                          ? eE.collectiblePreviewsContainerWithChat
                                          : eE.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)($.Z, {
                                        asset: I,
                                        size: (0, ec.ML)(540),
                                        className: eE.categoryBanner,
                                        categoryBannerOverride: A,
                                    }),
                                    (0, ew.o0)(a.skuId)
                                        ? a.skuId === ew.Vt.ORB_PROFILE_BADGE
                                            ? E || k
                                                ? null
                                                : (0, r.jsx)(ed.M, { user: g })
                                            : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(eu.q, {})
                                              : (0, r.jsx)(em.b, {
                                                    product: a,
                                                    className: eE.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eF, {
                                              user: g,
                                              product: null != C ? C : w,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: eE.profilePreviewHeader,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: eE.titleImageContainer,
                                                children: (0, r.jsx)("img", {
                                                    className: eE.titleImage,
                                                    style: null == A ? void 0 : A.pdpLogoStyle,
                                                    src: S,
                                                    alt: l.name,
                                                }),
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: eE.headerButtonContainer,
                                                children: [
                                                    (0, r.jsx)(ee.n, {
                                                        skuId: w.skuId,
                                                        tab: v,
                                                    }),
                                                    (0, r.jsx)(h.hU, {
                                                        "aria-label": eT.intl.string(eT.t.cpT0Cg),
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
                    null != R &&
                        (0, r.jsxs)(h.mzw, {
                            className: eE.modalFooter,
                            children: [
                                (0, r.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                    alt: "",
                                    className: eE.modalFooterBackgroundImg,
                                }),
                                (0, r.jsxs)("div", {
                                    className: eE.modalFooterContentContainer,
                                    children: [
                                        (0, r.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            className: eE.modalFooterText,
                                            children: eT.intl.format(eT.t["5KE2fX"], { discountOfferAmount: R }),
                                        }),
                                        (null == N ? void 0 : N.expiresAt) != null &&
                                            (0, r.jsx)(et.R, { endDate: N.expiresAt }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
        });
    };
