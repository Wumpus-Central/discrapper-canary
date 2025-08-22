n.d(t, { default: () => eF }), n(388685), n(314940), n(953529);
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
    f = n(311570),
    p = n(399606),
    v = n(780384),
    g = n(481060),
    b = n(809206),
    h = n(727637),
    P = n(410030),
    x = n(100527),
    j = n(906732),
    O = n(570908),
    _ = n(786761),
    C = n(3148),
    y = n(739566),
    w = n(753206),
    T = n(4242),
    S = n(333867),
    E = n(767714),
    I = n(678135),
    A = n(876917),
    N = n(643879),
    k = n(484459),
    R = n(822857),
    L = n(960919),
    Z = n(275388),
    B = n(25990),
    D = n(594174),
    M = n(626135),
    U = n(63063),
    G = n(74538),
    F = n(937615),
    H = n(335131),
    z = n(1870),
    V = n(429368),
    W = n(884697),
    K = n(635552),
    q = n(83479),
    Y = n(290175),
    X = n(724994),
    J = n(328456),
    Q = n(390698),
    $ = n(141011),
    ee = n(525518),
    et = n(168020),
    en = n(426171),
    er = n(224068),
    ei = n(813083),
    el = n(680942),
    ea = n(558060),
    eo = n(539598),
    es = n(237031),
    ec = n(372654),
    eu = n(38914),
    ed = n(259673),
    em = n(508925),
    ef = n(953405),
    ep = n(453713),
    ev = n(616066),
    eg = n(22267),
    eb = n(332246),
    eh = n(58201),
    eP = n(445794),
    ex = n(794324),
    ej = n(361110),
    eO = n(29121),
    e_ = n(956472),
    eC = n(832149),
    ey = n(215023),
    ew = n(981631),
    eT = n(474936),
    eS = n(231338),
    eE = n(388032),
    eI = n(188336);
function eA(e) {
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
let ek = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, h.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: l ? eI.bundleAvatarPreviewContainer : eI.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: l ? eI.bundlePfxPreviewContainer : eI.pfxPreviewContainer,
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
                    className: eI.nameplatePreviewContainer,
                    children: (0, r.jsx)(eg.Z, {
                        className: eI.nameplatePreview,
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
            [l, a] = i.useState(0);
        i.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && a((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let o = t.items.length;
        return (0, r.jsx)("div", {
            className: eI.bundlePreviewContainer,
            children: (0, r.jsx)(g.MyZ, {
                activeSlide: String(l),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        a = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(o, ")");
                    return (0, r.jsx)(
                        g.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: eI.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(ek, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(g.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eI.bundleSlideTitle,
                                        children: [null == a ? void 0 : a.name, " ", s],
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
    eL = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eR, {
                  product: t,
                  user: n,
              })
            : (0, ey.o0)(t.skuId)
              ? (0, r.jsx)(em.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(ek, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eZ = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  className: eI.learnMoreLink,
                  children: eE.intl.format(eE.t.Q1scdH, {
                      helpdeskArticle: U.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eB = (e) => {
        let {
                product: t,
                user: n,
                category: l,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: m,
                previewingVariantIndexProps: h,
                selectedVariantIndex: x,
                tab: O,
            } = e,
            { analyticsLocations: _ } = (0, j.ZP)(),
            C = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y } = h,
            w = (0, eb.N)(t, y),
            T = (0, eh.W)(t, x);
        s()(null != T, "Selected product should not be null");
        let I = (0, X.L)(t),
            { isPurchased: A, isPartiallyOwnedBundle: N } = (0, X.L)(T),
            { isDisabled: k, disabledReason: B } = (0, Y.G)(T.skuId),
            D = (0, W.ne)({
                product: T,
                isPartiallyOwnedBundle: N,
                isPurchased: A,
            }),
            M = (0, p.e7)([z.Z], () => z.Z.isClaiming === (null == T ? void 0 : T.skuId)),
            U = (0, P.ZP)(),
            V = (0, v.wj)(U),
            $ = (0, W.G1)(T),
            ee = (0, W.ql)(T, ew.tuJ.DEFAULT),
            et = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: en } = (0, J.Rj)(null != w ? w : T),
            ec = i.useMemo(() => (0, W.BH)(T, C), [T, C]),
            { handleUseNow: eu, isApplying: ed } = (0, K.W)({
                product: T,
                onSuccess: c,
            }),
            em = (0, eO.To)(T),
            { enabled: ev } = (0, R.WX)({ location: "collectibles_shop_product_details_modal" }),
            eg = (0, eP.Iw)(t),
            ex = null != eg,
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: ek,
                hasSufficientOrbs: eR,
            } = (0, e_.Ip)({
                product: T,
                isPremiumUser: C,
                tab: O,
                hasDiscountOffer: ex,
            }),
            eB = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: T.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: f.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eS.dG)()),
                    }),
                [_, c, T.skuId],
            );
        i.useEffect(() => {
            if (null != en) return (0, b.cV)(en), () => (0, b.cV)(void 0);
        }, [en]);
        let eD = (0, q.G)(T);
        return (0, r.jsxs)("div", {
            className: eI.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eI.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: l,
                        display: ei.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eL, {
                    product: null != w ? w : T,
                    user: n,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eI.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: T,
                                    isDarkText: !V,
                                    isOrbExclusive: ek,
                                }),
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eI.headingWithItemTypePill,
                                    children: em,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: eD,
                                }),
                                (0, r.jsx)(eZ, { skuId: T.skuId }),
                                I.isPurchased || I.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: eI.priceTag,
                                          isPartiallyPurchased: N,
                                      })
                                    : $
                                      ? (0, r.jsx)(g.Text, {
                                            variant: "text-md/semibold",
                                            className: eI.priceTag,
                                            children: eE.intl.string(eE.t.rt69oq),
                                        })
                                      : ev
                                        ? (0, r.jsx)(ef.a, {
                                              prices: ej,
                                              product: T,
                                              isPremiumUser: C,
                                              discount: ec,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: k,
                                              discountOfferAmount: eg,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eI.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(ea.Z, {
                                                      product: T,
                                                      discount: ec,
                                                      isPremiumUser: C,
                                                      hideStrikethroughPrice: !C || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eg,
                                                  }),
                                                  C || ex ? null : (0, r.jsx)(eo.Z, { product: T }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(g.Rny, {
                            children: (0, r.jsx)(ep.P, {
                                selectedVariantIndex: x,
                                variantGroupProduct: t,
                                previewingVariantIndexProps: h,
                                className: eI.variantsSwitch,
                            }),
                        }),
                        null !== B &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                className: eI.disabledReason,
                                children: B,
                            }),
                        (0, r.jsx)(g.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if ($ && !C && !et) {
                                    let e;
                                    return (
                                        (e = eE.intl.string(eE.t.sEAnVF)),
                                        (0, r.jsx)(E.Z, {
                                            subscriptionTier: eT.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: es.v,
                                            onSubscribeModalClose: () => {
                                                (0, es.T)({
                                                    product: T,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: _,
                                                });
                                            },
                                        })
                                    );
                                }
                                return D
                                    ? A
                                        ? (0, r.jsx)(g.zxk, {
                                              variant: "primary",
                                              onClick: eu,
                                              loading: ed,
                                              text: eE.intl.string(eE.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(g.zxk, {
                                                loading: M,
                                                loadingStartedLabel: eE.intl.string(eE.t["TYw+9v"]),
                                                loadingFinishedLabel: eE.intl.string(eE.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, H.fK)(T.skuId),
                                                        c(),
                                                        (0, eC.Z)({
                                                            product: T,
                                                            analyticsLocations: _,
                                                            purchaseType: ey.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eE.intl.string(eE.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ej.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eS.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, Z.qA)({
                                                                        skuId: T.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, H.qg)({
                                                                                variantsReturnStyle: f.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eC.Z)({
                                                                                    product: T,
                                                                                    analyticsLocations: _,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: ey.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: _,
                                                                    });
                                                                },
                                                                i = k
                                                                    ? eE.intl.string(eE.t.cTdr39)
                                                                    : eE.intl.string(eE.t.zqh7ZG),
                                                                l = !eR || k,
                                                                a = eE.intl.formatToPlainString(eE.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                o = l ? "".concat(a, ", ").concat(i) : a;
                                                            return (0, r.jsx)(g.ua7, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (i) =>
                                                                    (0, r.jsx)(
                                                                        g.zxk,
                                                                        eN(eA({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: l,
                                                                            "aria-label": o,
                                                                            text: eE.intl.format(eE.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(L.Z, {
                                                                                        className: eI.orbIconAligned,
                                                                                        shouldUseThemeColor: l && !t,
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let i = !$ && !et && !u.tq && !ek && D,
                                                        l = (0, W.x6)(T)
                                                            ? eE.intl.string(eE.t.V1AWw8)
                                                            : T.type === d.Z.PROFILE_EFFECT
                                                              ? eE.intl.string(eE.t.kAeDcH)
                                                              : T.type === d.Z.NAMEPLATE
                                                                ? eE.intl.string(eE.t.H3vhqa)
                                                                : eE.intl.string(eE.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (l = eE.intl.formatToPlainString(eE.t["5U5RBw"], {
                                                                  discountOfferAmount: eg,
                                                              }))
                                                            : ev &&
                                                              (l = eE.intl.formatToPlainString(eE.t["cNSL/v"], {
                                                                  price: (0, F.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(g.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(g.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eB,
                                                                    text: l,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(el.Z, {
                                                                        primary: n,
                                                                        product: T,
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
                        (0, r.jsx)(g.Text, {
                            className: a()(eI.disclaimer, !V && eI.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !A ? eE.intl.string(eE.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eD = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eI.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(O.Z, {
                avatar: (0, r.jsx)(g.qEK, {
                    src: t.avatarSrc,
                    size: g.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: g.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eI.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eM = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, T.w$)();
        return (0, r.jsx)("div", {
            className: eI.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eE.intl.string(eE.t.SZeUdX),
            children: (0, r.jsxs)(g.Rny, {
                children: [
                    (0, r.jsx)(eD, {
                        user: i.mallow,
                        innerClassName: eI.userBlue,
                    }),
                    (0, r.jsxs)(g.Text, {
                        variant: "text-sm/semibold",
                        className: eI.namplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eD, {
                        user: i.phibi,
                        innerClassName: eI.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eI.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eg.Z, {
                            className: eI.nameplatePreview,
                            innerClassName: eI.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                        }),
                    }),
                    (0, r.jsx)(eD, {
                        user: i.locke,
                        innerClassName: eI.userPink,
                    }),
                    (0, r.jsxs)(g.Text, {
                        variant: "text-sm/semibold",
                        className: eI.namplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eD, {
                        user: i.boom,
                        innerClassName: eI.userGreen,
                    }),
                    (0, r.jsx)(eD, {
                        user: i.cherry,
                        innerClassName: eI.userGreen,
                    }),
                ],
            }),
        });
    },
    eU = (e) => {
        let { product: t, user: n } = e,
            i = G.ZP.canUsePremiumProfileCustomization(n),
            l = (0, p.cj)([B.Z], () => B.Z.getAllPending()),
            { pendingAvatar: a } = l,
            o = (function (e, t) {
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
            })(l, ["pendingAvatar"]),
            s = (0, N.SD)({
                userId: n.id,
                image: a,
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, J.Rj)(t),
            v = null != f;
        return (0, r.jsx)("div", {
            className:
                (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION
                    ? eI.previewsContainerInner
                    : eI.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eM, {
                          user: n,
                          nameplate: u,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  I.Z,
                                  eN(eA({}, o), {
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
                              c && (0, r.jsx)(eG, { user: n }),
                          ],
                      }),
        });
    },
    eG = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, _.e5)(
                    eN(
                        eA(
                            {},
                            (0, C.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eE.intl.string(eE.t.d5YwKy),
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
            "aria-label": eE.intl.string(eE.t["TN+ZvL"]),
            children: (0, r.jsx)(g.Rny, {
                children: (0, r.jsxs)(g.Zbd, {
                    className: eI.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            w.Z,
                            {
                                className: eI.mockMessage,
                                author: (0, y.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eI.mockInput,
                            children: [
                                (0, r.jsx)(g.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eI.mockInputButton,
                                }),
                                (0, r.jsx)(g.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eI.mockInputButton,
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
                product: l,
                category: a,
                returnRef: o,
                analyticsSource: c,
                analyticsLocations: u,
                shouldCheckoutWithOrbs: f,
                tab: v,
            } = e,
            b = (0, p.e7)([D.default], () => D.default.getCurrentUser()),
            h = (0, ej.f)(l),
            { previewingVariantIndex: P } = h,
            O = (0, p.e7)([z.Z], () => z.Z.purchases),
            _ = (0, V.o)(l, O),
            C = (0, eb.N)(l, P),
            y = (0, eh.W)(l, _);
        s()(null != y, "Selected product should not be null");
        let { analyticsLocations: w } = (0, j.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(y.skuId);
        let T = (0, ex.kc)(a);
        i.useEffect(() => {
            null != b && (0, k.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let S = i.useMemo(() => (0, W.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            M.default.track(ew.rMx.OPEN_MODAL, {
                type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: w,
                sku_id: y.skuId,
                product_type: S,
            }),
                y.items.forEach(H.oK);
        }, [c, w, y.skuId, y.items, S]);
        let E = (0, Z.r9)(),
            I = t === g.Dvm.EXITING,
            A = (0, eP.t0)(l),
            N = null == A ? void 0 : A.amount;
        if (null == b) return null;
        let R = (0, ey.ZS)(a.skuId);
        return (0, r.jsx)(j.Gt, {
            value: w,
            children: (0, r.jsxs)(g.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eI.modalRoot,
                returnRef: o,
                transitionState: t,
                size: g.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(g.hzk, {
                        "data-migration-pending": !0,
                        className: eI.modalContent,
                        children: [
                            (0, r.jsx)(eB, {
                                user: b,
                                product: l,
                                category: a,
                                onClose: n,
                                previewingVariantIndexProps: h,
                                selectedVariantIndex: _,
                                shouldCheckoutWithOrbs: f,
                                tab: v,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    y.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? eI.fractionalNitroPreviewContainer
                                        : y.type === d.Z.AVATAR_DECORATION
                                          ? eI.collectiblePreviewsContainerWithChat
                                          : eI.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)($.Z, {
                                        asset: T,
                                        size: (0, ec.ML)(540),
                                        className: eI.categoryBanner,
                                        categoryBannerOverride: R,
                                    }),
                                    (0, ey.o0)(l.skuId)
                                        ? l.skuId === ey.Vt.ORB_PROFILE_BADGE
                                            ? E || I
                                                ? null
                                                : (0, r.jsx)(ed.M, { user: b })
                                            : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(eu.q, {})
                                              : (0, r.jsx)(em.b, {
                                                    product: l,
                                                    className: eI.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eU, {
                                              user: b,
                                              product: null != C ? C : y,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: eI.pdpControls,
                                        children: [
                                            (0, r.jsx)(ee.n, {
                                                skuId: y.skuId,
                                                tab: v,
                                            }),
                                            (0, r.jsx)(g.hU, {
                                                "aria-label": eE.intl.string(eE.t.cpT0Cg),
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
                    null != N &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)(g.mzw, {
                                "data-migration-pending": !0,
                                className: eI.modalFooter,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                        alt: "",
                                        className: eI.modalFooterBackgroundImg,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: eI.modalFooterContentContainer,
                                        children: [
                                            (0, r.jsx)(g.Text, {
                                                variant: "text-sm/semibold",
                                                className: eI.modalFooterText,
                                                children: eE.intl.format(eE.t["78ph4e"], { discountOfferAmount: N }),
                                            }),
                                            (null == A ? void 0 : A.expiresAt) != null &&
                                                (0, r.jsx)(et.R, { endDate: A.expiresAt }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        });
    };
