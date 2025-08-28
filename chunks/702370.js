n.d(t, { default: () => eq }), n(388685), n(314940), n(953529);
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
    b = n(481060),
    g = n(809206),
    h = n(727637),
    P = n(410030),
    x = n(607070),
    j = n(100527),
    O = n(906732),
    _ = n(570908),
    C = n(786761),
    y = n(3148),
    w = n(739566),
    T = n(753206),
    S = n(4242),
    E = n(333867),
    I = n(767714),
    N = n(678135),
    A = n(876917),
    k = n(643879),
    R = n(484459),
    L = n(822857),
    Z = n(960919),
    B = n(275388),
    D = n(25990),
    M = n(594174),
    U = n(626135),
    F = n(63063),
    G = n(74538),
    H = n(937615),
    z = n(335131),
    V = n(381585),
    W = n(1870),
    K = n(429368),
    q = n(884697),
    Y = n(635552),
    X = n(83479),
    J = n(290175),
    Q = n(724994),
    $ = n(328456),
    ee = n(330349),
    et = n(556971),
    en = n(390698),
    er = n(141011),
    ei = n(525518),
    el = n(168020),
    ea = n(426171),
    eo = n(224068),
    es = n(813083),
    ec = n(680942),
    eu = n(558060),
    ed = n(539598),
    em = n(237031),
    ef = n(372654),
    ep = n(38914),
    ev = n(259673),
    eb = n(508925),
    eg = n(953405),
    eh = n(453713),
    eP = n(325834),
    ex = n(616066),
    ej = n(22267),
    eO = n(332246),
    e_ = n(58201),
    eC = n(445794),
    ey = n(794324),
    ew = n(361110),
    eT = n(29121),
    eS = n(956472),
    eE = n(832149),
    eI = n(642909),
    eN = n(215023),
    eA = n(981631),
    ek = n(474936),
    eR = n(231338),
    eL = n(388032),
    eZ = n(188336);
function eB(e) {
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
function eD(e, t) {
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
let eM = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, h.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: l ? eZ.bundleAvatarPreviewContainer : eZ.avatarPreviewContainer,
                    children: (0, r.jsx)(ex.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: l ? eZ.bundlePfxPreviewContainer : eZ.pfxPreviewContainer,
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
                    className: eZ.nameplatePreviewContainer,
                    children: (0, r.jsx)(ej.Z, {
                        className: eZ.nameplatePreview,
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
            l = t.items.length;
        return (0, r.jsx)("div", {
            className: eZ.bundlePreviewContainer,
            children: (0, r.jsx)(b.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        b.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eZ.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eM, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0,
                                    }),
                                    (0, r.jsxs)(b.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eZ.bundleSlideTitle,
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
    eF = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, q.x6)(t)
            ? (0, r.jsx)(eU, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eN.o0)(t.skuId)
              ? (0, r.jsx)(eb.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eM, {
                      item: t.items[0],
                      user: n,
                  })
                : null;
    },
    eG = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(b.Text, {
                  variant: "text-sm/normal",
                  className: eZ.learnMoreLink,
                  children: eL.intl.format(eL.t.Q1scdH, {
                      helpdeskArticle: F.Z.getArticleURL(eA.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eH = (e) => {
        let {
                product: t,
                user: n,
                category: l,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: m,
                previewingVariantIndexProps: h,
                selectedVariantIndex: x,
                tab: j,
                activeBundleSlide: _,
                variantType: C,
            } = e,
            { analyticsLocations: y } = (0, O.ZP)(),
            w = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: T } = h,
            S = (0, eO.N)(t, T),
            N = (0, e_.W)(t, x);
        s()(null != N, "Selected product should not be null");
        let A = (0, Q.L)(t),
            { isPurchased: k, isPartiallyOwnedBundle: R } = (0, Q.L)(N),
            { isDisabled: D, disabledReason: M } = (0, J.G)(N.skuId),
            U = (0, q.ne)({
                product: N,
                isPartiallyOwnedBundle: R,
                isPurchased: k,
            }),
            F = (0, p.e7)([W.Z], () => W.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            V = (0, P.ZP)(),
            K = (0, v.wj)(V),
            ee = (0, q.G1)(N),
            et = (0, q.ql)(N, eA.tuJ.DEFAULT),
            er = (null == et ? void 0 : et.amount) === 0,
            { firstAvatarDecoration: ei } = (0, $.Rj)(null != S ? S : N),
            el = i.useMemo(() => (0, q.BH)(N, w), [N, w]),
            { handleUseNow: ea, isApplying: ef } = (0, Y.W)({
                product: N,
                onSuccess: c,
            }),
            ep = (0, eT.To)(N),
            { enabled: ev } = (0, L.WX)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, eC.Iw)(t),
            ex = null != eb,
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: ey,
                hasSufficientOrbs: ew,
            } = (0, eS.Ip)({
                product: N,
                isPremiumUser: w,
                tab: j,
                hasDiscountOffer: ex,
            }),
            eI = i.useCallback(
                () =>
                    (0, E.Z)({
                        skuId: N.skuId,
                        analyticsLocations: y,
                        variantsReturnStyle: f.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eR.dG)()),
                    }),
                [y, c, N.skuId],
            );
        i.useEffect(() => {
            if (null != ei) return (0, g.cV)(ei), () => (0, g.cV)(void 0);
        }, [ei]);
        let eM = (0, X.G)(N);
        return (0, r.jsxs)("div", {
            className: eZ.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eZ.titleContainer,
                    children: (0, r.jsx)(es.Z, {
                        category: l,
                        display: es.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eF, {
                    product: null != S ? S : N,
                    user: n,
                    activeSlide: _,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eZ.description,
                            children: [
                                (0, r.jsx)(eo.Z, {
                                    product: N,
                                    isDarkText: !K,
                                    isOrbExclusive: ey,
                                }),
                                (0, r.jsx)(b.X6q, {
                                    variant: "heading-xl/extrabold",
                                    className: eZ.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(b.Text, {
                                    variant: "text-sm/normal",
                                    children: eM,
                                }),
                                (0, r.jsx)(eG, { skuId: N.skuId }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(en.U, {
                                          className: eZ.priceTag,
                                          isPartiallyPurchased: R,
                                      })
                                    : ee
                                      ? (0, r.jsx)(b.Text, {
                                            variant: "text-md/semibold",
                                            className: eZ.priceTag,
                                            children: eL.intl.string(eL.t.rt69oq),
                                        })
                                      : ev
                                        ? (0, r.jsx)(eg.a, {
                                              prices: ej,
                                              product: N,
                                              isPremiumUser: w,
                                              discount: el,
                                              hasSufficientOrbs: ew,
                                              isProductDisabled: D,
                                              discountOfferAmount: eb,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eZ.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(eu.Z, {
                                                      product: N,
                                                      discount: el,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || ex,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: eb,
                                                  }),
                                                  w || ex ? null : (0, r.jsx)(ed.Z, { product: N }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(b.Rny, {
                            children:
                                C === eN.Ch.DEFAULT
                                    ? (0, r.jsx)(eh.P, {
                                          selectedVariantIndex: x,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: h,
                                          className: eZ.variantsSwitch,
                                      })
                                    : (0, r.jsx)(eP.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: h,
                                          className: eZ.variantsThumbnail,
                                          selectedVariantIndex: x,
                                      }),
                        }),
                        null !== M &&
                            (0, r.jsx)(b.Text, {
                                variant: "text-xs/normal",
                                className: eZ.disabledReason,
                                children: M,
                            }),
                        (0, r.jsx)(b.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if (ee && !w && !er) {
                                    let e;
                                    return (
                                        (e = eL.intl.string(eL.t.sEAnVF)),
                                        (0, r.jsx)(I.Z, {
                                            subscriptionTier: ek.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: em.v,
                                            onSubscribeModalClose: () => {
                                                (0, em.T)({
                                                    product: N,
                                                    category: l,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: m,
                                                    analyticsLocations: y,
                                                });
                                            },
                                        })
                                    );
                                }
                                return U
                                    ? k
                                        ? (0, r.jsx)(b.zxk, {
                                              variant: "primary",
                                              onClick: ea,
                                              loading: ef,
                                              text: eL.intl.string(eL.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : ee
                                          ? (0, r.jsx)(b.zxk, {
                                                loading: F,
                                                loadingStartedLabel: eL.intl.string(eL.t["TYw+9v"]),
                                                loadingFinishedLabel: eL.intl.string(eL.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, z.fK)(N.skuId),
                                                        c(),
                                                        (0, eE.Z)({
                                                            product: N,
                                                            analyticsLocations: y,
                                                            purchaseType: eN.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eL.intl.string(eL.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ej.map((e, t) => {
                                                    let n = 0 === t;
                                                    if (e.currency === eR.pK.DISCORD_ORB)
                                                        return ((e, t) => {
                                                            let n = () => {
                                                                    (0, B.qA)({
                                                                        skuId: N.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, z.qg)({
                                                                                variantsReturnStyle: f.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eE.Z)({
                                                                                    product: N,
                                                                                    analyticsLocations: y,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eN.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: y,
                                                                    });
                                                                },
                                                                i = D
                                                                    ? eL.intl.string(eL.t.cTdr39)
                                                                    : eL.intl.string(eL.t.zqh7ZG),
                                                                l = !ew || D,
                                                                a = eL.intl.formatToPlainString(eL.t["fNG/09"], {
                                                                    orbPrice: e.amount,
                                                                }),
                                                                o = l ? "".concat(a, ", ").concat(i) : a;
                                                            return (0, r.jsx)(b.ua7, {
                                                                position: "top",
                                                                text: i,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (i) =>
                                                                    (0, r.jsx)(
                                                                        b.zxk,
                                                                        eD(eB({}, i), {
                                                                            variant: t ? "primary" : "secondary",
                                                                            onClick: n,
                                                                            disabled: l,
                                                                            "aria-label": o,
                                                                            text: eL.intl.format(eL.t.kAgx5O, {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(Z.Z, {
                                                                                        className: eZ.orbIconAligned,
                                                                                        shouldUseThemeColor: l && !t,
                                                                                    }),
                                                                            }),
                                                                            fullWidth: !0,
                                                                        }),
                                                                    ),
                                                            });
                                                        })(e, n);
                                                    let i = !ee && !er && !u.tq && !ey && U,
                                                        l = (0, q.x6)(N)
                                                            ? eL.intl.string(eL.t.V1AWw8)
                                                            : N.type === d.Z.PROFILE_EFFECT
                                                              ? eL.intl.string(eL.t.kAeDcH)
                                                              : N.type === d.Z.NAMEPLATE
                                                                ? eL.intl.string(eL.t.H3vhqa)
                                                                : eL.intl.string(eL.t.AQ0Ven);
                                                    return (
                                                        ex
                                                            ? (l = eL.intl.formatToPlainString(eL.t["5U5RBw"], {
                                                                  discountOfferAmount: eb,
                                                              }))
                                                            : ev &&
                                                              (l = eL.intl.formatToPlainString(eL.t["cNSL/v"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(b.hE2, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(b.zxk, {
                                                                    variant: n ? "primary" : "secondary",
                                                                    onClick: eI,
                                                                    text: l,
                                                                    fullWidth: !0,
                                                                }),
                                                                i &&
                                                                    (0, r.jsx)(ec.Z, {
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
                        (0, r.jsx)(b.Text, {
                            className: a()(eZ.disclaimer, !K && eZ.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: ee && !k ? eL.intl.string(eL.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    ez = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eZ.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(_.Z, {
                avatar: (0, r.jsx)(b.qEK, {
                    src: t.avatarSrc,
                    size: b.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: b.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eZ.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eV = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, S.w$)();
        return (0, r.jsx)("div", {
            className: eZ.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eL.intl.string(eL.t.SZeUdX),
            children: (0, r.jsxs)(b.Rny, {
                children: [
                    (0, r.jsx)(ez, {
                        user: i.mallow,
                        innerClassName: eZ.userBlue,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: eZ.nameplateRightPanePreviewSectionGroup,
                        children: [eL.intl.string(eL.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(ez, {
                        user: i.phibi,
                        innerClassName: eZ.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eZ.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(ej.Z, {
                            className: eZ.nameplatePreview,
                            innerClassName: eZ.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                        }),
                    }),
                    (0, r.jsx)(ez, {
                        user: i.locke,
                        innerClassName: eZ.userPink,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: eZ.nameplateRightPanePreviewSectionGroup,
                        children: [eL.intl.string(eL.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(ez, {
                        user: i.boom,
                        innerClassName: eZ.userGreen,
                    }),
                    (0, r.jsx)(ez, {
                        user: i.cherry,
                        innerClassName: eZ.userGreen,
                    }),
                ],
            }),
        });
    },
    eW = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, p.e7)([x.Z], () => x.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            c = (0, p.cj)([D.Z], () => D.Z.getAllPending()),
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
            f = (0, k.SD)({
                userId: n.id,
                image: u,
            }),
            v = t.type === d.Z.AVATAR_DECORATION,
            [b] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: h, firstNameplate: P } = (0, $.Rj)(t),
            j = null != h,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            N.Z,
                            eD(eB({}, m), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: g,
                                pendingProfileEffectId: null == h ? void 0 : h.id,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideViewFullProfileButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(eK, { user: n }),
                    ],
                }),
            _ = (e) =>
                (0, r.jsx)(eV, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === d.Z.BUNDLE) {
            if (!(0, ee.L)(t))
                return (0, r.jsx)("div", {
                    className: eZ.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eZ.combinedPreviewContent,
                        children: O(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    c = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === d.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: a()(eZ.nameplatePreviewContainerInner, l && c ? eZ.sliding : ""),
                          children: _(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(eZ.profileEffectPreviewsContainerInner, l && c ? eZ.sliding : ""),
                          children: O(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: eZ.nameplatePreviewContainerInner,
                  children: _(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == b ? void 0 : b.type) === d.Z.AVATAR_DECORATION
                          ? eZ.previewsContainerInner
                          : eZ.profileEffectPreviewsContainerInner,
                  children: O(),
              });
    },
    eK = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.e5)(
                    eD(
                        eB(
                            {},
                            (0, y.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eL.intl.string(eL.t.d5YwKy),
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
            "aria-label": eL.intl.string(eL.t["TN+ZvL"]),
            children: (0, r.jsx)(b.Rny, {
                children: (0, r.jsxs)(b.Zbd, {
                    className: eZ.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            T.Z,
                            {
                                className: eZ.mockMessage,
                                author: (0, w.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eZ.mockInput,
                            children: [
                                (0, r.jsx)(b.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eZ.mockInputButton,
                                }),
                                (0, r.jsx)(b.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eZ.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eq = (e) => {
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
            g = (0, p.e7)([M.default], () => M.default.getCurrentUser()),
            h = (0, V.sp)(),
            P =
                (0, eI.G)("CollectiblesShopProductDetailsModal") && (null == h ? void 0 : h.pageSection) === "top 4"
                    ? eN.Ch.THUMBNAIL
                    : eN.Ch.DEFAULT,
            x = (0, ew.f)(l),
            { previewingVariantIndex: _ } = x,
            C = (0, p.e7)([W.Z], () => W.Z.purchases),
            y = (0, K.o)(l, C),
            w = (0, eO.N)(l, _),
            T = (0, e_.W)(l, y);
        s()(null != T, "Selected product should not be null");
        let { analyticsLocations: S } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ea.u9)(T.skuId);
        let E = (0, ey.kc)(a);
        i.useEffect(() => {
            null != g && (0, R.Z)(g.id, g.getAvatarURL(void 0, 80));
        }, [g]);
        let I = i.useMemo(() => (0, q.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            U.default.track(eA.rMx.OPEN_MODAL, {
                type: eA.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: S,
                sku_id: T.skuId,
                product_type: I,
            }),
                T.items.forEach(z.oK);
        }, [c, S, T.skuId, T.items, I]);
        let N = (0, B.r9)(),
            A = t === b.Dvm.EXITING,
            k = (0, eC.t0)(l),
            L = null == k ? void 0 : k.amount,
            Z = i.useMemo(() => ((0, q.x6)(T) ? T.items.length : 0), [T]),
            { activeSlide: D, isTransitioning: F } = (0, et.b)({
                slideCount: Z,
                intervalMs: 5000,
            });
        if (null == g) return null;
        let G = (0, eN.ZS)(a.skuId);
        return (0, r.jsx)(O.Gt, {
            value: S,
            children: (0, r.jsxs)(b.Y0X, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eZ.modalRoot,
                returnRef: o,
                transitionState: t,
                size: b.CgR.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [
                    (0, r.jsxs)(b.hzk, {
                        "data-migration-pending": !0,
                        className: eZ.modalContent,
                        children: [
                            (0, r.jsx)(eH, {
                                user: g,
                                product: l,
                                category: a,
                                onClose: n,
                                previewingVariantIndexProps: x,
                                selectedVariantIndex: y,
                                shouldCheckoutWithOrbs: f,
                                tab: v,
                                activeBundleSlide: D,
                                variantType: P,
                            }),
                            (0, r.jsxs)("div", {
                                className:
                                    T.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                        ? eZ.fractionalNitroPreviewContainer
                                        : T.type === d.Z.AVATAR_DECORATION
                                          ? eZ.collectiblePreviewsContainerWithChat
                                          : eZ.collectiblePreviewsContainerNoChat,
                                children: [
                                    (0, r.jsx)(er.Z, {
                                        asset: E,
                                        size: (0, ef.ML)(540),
                                        className: eZ.categoryBanner,
                                        categoryBannerOverride: G,
                                    }),
                                    (0, eN.o0)(l.skuId)
                                        ? l.skuId === eN.Vt.ORB_PROFILE_BADGE
                                            ? N || A
                                                ? null
                                                : (0, r.jsx)(ev.M, { user: g })
                                            : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                              ? (0, r.jsx)(ep.q, {})
                                              : (0, r.jsx)(eb.b, {
                                                    product: l,
                                                    className: eZ.externalProductProfilePreview,
                                                })
                                        : (0, r.jsx)(eW, {
                                              user: g,
                                              product: null != w ? w : T,
                                              activeBundleSlide: D,
                                              isTransitioning: F,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: eZ.pdpControls,
                                        children: [
                                            (0, r.jsx)(ei.n, {
                                                skuId: T.skuId,
                                                tab: v,
                                            }),
                                            (0, r.jsx)(b.hU, {
                                                "aria-label": eL.intl.string(eL.t.cpT0Cg),
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
                    null != L &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)(b.mzw, {
                                "data-migration-pending": !0,
                                className: eZ.modalFooter,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                        alt: "",
                                        className: eZ.modalFooterBackgroundImg,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: eZ.modalFooterContentContainer,
                                        children: [
                                            (0, r.jsx)(b.Text, {
                                                variant: "text-sm/semibold",
                                                className: eZ.modalFooterText,
                                                children: eL.intl.format(eL.t["78ph4e"], { discountOfferAmount: L }),
                                            }),
                                            (null == k ? void 0 : k.expiresAt) != null &&
                                                (0, r.jsx)(el.R, { endDate: k.expiresAt }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        });
    };
