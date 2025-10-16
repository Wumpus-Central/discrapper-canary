n.d(t, { default: () => eW }), n(388685), n(314940), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(979554),
    d = n(314794),
    m = n(311570),
    p = n(399606),
    v = n(28664),
    f = n(780384),
    h = n(481060),
    b = n(809206),
    g = n(410030),
    _ = n(607070),
    x = n(100527),
    P = n(906732),
    j = n(570908),
    C = n(104505),
    O = n(786761),
    I = n(3148),
    w = n(739566),
    y = n(753206),
    T = n(4242),
    S = n(333867),
    E = n(767714),
    A = n(678135),
    N = n(876917),
    R = n(643879),
    k = n(567400),
    L = n(484459),
    B = n(825102),
    Z = n(275388),
    D = n(25990),
    U = n(594174),
    M = n(626135),
    F = n(63063),
    G = n(74538),
    H = n(937615),
    V = n(335131),
    z = n(1870),
    W = n(429368),
    q = n(884697),
    Y = n(635552),
    K = n(83479),
    J = n(290175),
    X = n(724994),
    Q = n(328456),
    $ = n(330349),
    ee = n(556971),
    et = n(390698),
    en = n(525518),
    er = n(168020),
    ei = n(426171),
    ea = n(224068),
    el = n(813083),
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
    eb = n(143941),
    eg = n(616066),
    e_ = n(22267),
    ex = n(332246),
    eP = n(58201),
    ej = n(445794),
    eC = n(794324),
    eO = n(694364),
    eI = n(361110),
    ew = n(29121),
    ey = n(956472),
    eT = n(832149),
    eS = n(215023),
    eE = n(981631),
    eA = n(474936),
    eN = n(231338),
    eR = n(388032),
    ek = n(188336);
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
            o = (0, C.X)(l);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)("div", {
                    className: a ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                    children: (0, r.jsx)(eg.R, {
                        user: n,
                        item: t,
                    }),
                }),
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)("div", {
                    className: a ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(N.Z, {
                        skuId: t.skuId,
                        isHighlighted: o,
                        removeSetHeight: !0,
                    }),
                }),
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)("div", {
                    ref: l,
                    className: ek.nameplatePreviewContainer,
                    children: (0, r.jsx)(e_.Z, {
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
    eD = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: ek.bundlePreviewContainer,
            children: (0, r.jsx)(h.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(a, ")");
                    return (0, r.jsx)(
                        h.Mi4,
                        {
                            id: l,
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
                        l,
                    );
                }),
            }),
        });
    },
    eU = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, q.x6)(t)
            ? (0, r.jsx)(eD, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eS.o0)(t.skuId)
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
        return t === d.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: ek.learnMoreLink,
                  children: eR.intl.format(eR.t.Q1scdH, {
                      helpdeskArticle: F.Z.getArticleURL(eE.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eF = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: c,
                returnRef: d,
                previewingVariantIndexProps: _,
                selectedVariantIndex: x,
                tab: j,
                activeBundleSlide: C,
                variantType: O,
            } = e,
            { analyticsLocations: I } = (0, P.ZP)(),
            w = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y } = _,
            T = (0, ex.N)(t, y),
            A = (0, eP.W)(t, x);
        s()(null != A, "Selected product should not be null");
        let N = (0, X.L)(t),
            { isPurchased: R, isPartiallyOwnedBundle: k } = (0, X.L)(A),
            { isDisabled: L, disabledReason: D } = (0, J.G)(A.skuId),
            U = (0, q.ne)({
                product: A,
                isPartiallyOwnedBundle: k,
                isPurchased: R,
            }),
            M = (0, p.e7)([z.Z], () => z.Z.isClaiming === (null == A ? void 0 : A.skuId)),
            F = (0, g.ZP)(),
            W = (0, f.wj)(F),
            $ = (0, q.G1)(A),
            ee = (0, q.ql)(A, eE.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, Q.Rj)(null != T ? T : A),
            ei = i.useMemo(() => (0, q.BH)(A, w), [A, w]),
            { handleUseNow: ed, isApplying: em } = (0, Y.W)({
                product: A,
                onSuccess: c,
            }),
            ep = (0, ew.To)(A),
            eb = (0, eO.J)(A),
            { enabled: eg } = (0, B.WX)({ location: "collectibles_shop_product_details_modal" }),
            e_ = (0, ej.Iw)(t),
            eC = null != e_,
            {
                checkoutEligiblePrices: eI,
                isOrbExclusive: eL,
                hasSufficientOrbs: eB,
            } = (0, ey.Ip)({
                product: A,
                isPremiumUser: w,
                tab: j,
                hasDiscountOffer: eC,
            }),
            eZ = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: A.skuId,
                        analyticsLocations: I,
                        variantsReturnStyle: m.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? c() : (0, eN.dG)()),
                    }),
                [I, c, A.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, b.cV)(er), () => (0, b.cV)(void 0);
        }, [er]);
        let eD = (0, K.G)(A);
        return (0, r.jsxs)("div", {
            className: ek.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: ek.titleContainer,
                    children: (0, r.jsx)(el.Z, {
                        category: a,
                        display: el.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eU, {
                    product: null != T ? T : A,
                    user: n,
                    activeSlide: C,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ek.description,
                            children: [
                                (0, r.jsx)(ea.Z, {
                                    product: A,
                                    isDarkText: !W,
                                    isOrbExclusive: eL,
                                }),
                                (0, r.jsx)(h.Heading, {
                                    variant: "heading-xl/extrabold",
                                    className: ek.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    children: eD,
                                }),
                                (0, r.jsx)(eM, { skuId: A.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: k,
                                      })
                                    : $
                                      ? (0, r.jsx)(h.Text, {
                                            variant: "text-md/semibold",
                                            className: ek.priceTag,
                                            children: eR.intl.string(eR.t.rt69oq),
                                        })
                                      : eg
                                        ? (0, r.jsx)(ev.a, {
                                              prices: eI,
                                              product: A,
                                              isPremiumUser: w,
                                              discount: ei,
                                              hasSufficientOrbs: eB,
                                              isProductDisabled: L,
                                              discountOfferAmount: e_,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ek.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: A,
                                                      discount: ei,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || eC,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: e_,
                                                  }),
                                                  w || eC ? null : (0, r.jsx)(ec.Z, { product: A }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(h.Rny, {
                            children:
                                O === eS.Ch.DEFAULT
                                    ? (0, r.jsx)(ef.P, {
                                          selectedVariantIndex: x,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: _,
                                          className: ek.variantsSwitch,
                                      })
                                    : (0, r.jsx)(eh.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: _,
                                          className: ek.variantsThumbnail,
                                          selectedVariantIndex: x,
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
                                        (e = eR.intl.string(eR.t.sEAnVF)),
                                        (0, r.jsx)(E.Z, {
                                            subscriptionTier: eA.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eu.v,
                                            onSubscribeModalClose: () => {
                                                (0, eu.T)({
                                                    product: A,
                                                    category: a,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: d,
                                                    analyticsLocations: I,
                                                    variantType: O,
                                                });
                                            },
                                        })
                                    );
                                }
                                return U
                                    ? R
                                        ? (0, r.jsx)(h.Button, {
                                              variant: "primary",
                                              onClick: ed,
                                              loading: em,
                                              text: eR.intl.string(eR.t.MAS7uL),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(h.Button, {
                                                loading: M,
                                                loadingStartedLabel: eR.intl.string(eR.t["TYw+9v"]),
                                                loadingFinishedLabel: eR.intl.string(eR.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, V.fK)(A.skuId),
                                                        c(),
                                                        (0, eT.Z)({
                                                            product: A,
                                                            analyticsLocations: I,
                                                            purchaseType: eS.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eR.intl.string(eR.t.zp6caG),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eI.map((e, t) => {
                                                    let n,
                                                        i = 0 === t;
                                                    if (e.currency === eN.pK.DISCORD_ORB) {
                                                        let t = L
                                                                ? eR.intl.string(eR.t.cTdr39)
                                                                : eR.intl.string(eR.t.zqh7ZG),
                                                            n = !eB || L,
                                                            a = eR.intl.formatToPlainString(eR.t["fNG/09"], {
                                                                orbPrice: e.amount,
                                                            }),
                                                            l = n ? "".concat(a, ", ").concat(t) : a;
                                                        return (0, r.jsx)(v.u, {
                                                            position: "top",
                                                            text: t,
                                                            shouldShow: n,
                                                            "aria-label": !1,
                                                            children: (0, r.jsx)(h.Button, {
                                                                variant: i ? "primary" : "secondary",
                                                                onClick: () => {
                                                                    (0, Z.qA)({
                                                                        skuId: A.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, V.qg)({
                                                                                variantsReturnStyle: m.v.VARIANTS_GROUP,
                                                                            }),
                                                                                c(),
                                                                                (0, eT.Z)({
                                                                                    product: A,
                                                                                    analyticsLocations: I,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eS.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: I,
                                                                    });
                                                                },
                                                                disabled: n,
                                                                "aria-label": l,
                                                                text: eR.intl.format(eR.t.kAgx5O, {
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
                                                        });
                                                    }
                                                    return (
                                                        (n = (0, q.x6)(A)
                                                            ? eR.intl.string(eR.t.V1AWw8)
                                                            : A.type === u.Z.PROFILE_EFFECT
                                                              ? eR.intl.string(eR.t.kAeDcH)
                                                              : A.type === u.Z.NAMEPLATE
                                                                ? eR.intl.string(eR.t.H3vhqa)
                                                                : eR.intl.string(eR.t.AQ0Ven)),
                                                        eC
                                                            ? (n = eR.intl.formatToPlainString(eR.t["5U5RBw"], {
                                                                  discountOfferAmount: e_,
                                                              }))
                                                            : eg &&
                                                              (n = eR.intl.formatToPlainString(eR.t["cNSL/v"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(h.ButtonGroup, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(h.Button, {
                                                                    variant: i ? "primary" : "secondary",
                                                                    onClick: eZ,
                                                                    text: n,
                                                                    fullWidth: !0,
                                                                }),
                                                                eb &&
                                                                    (0, r.jsx)(eo.Z, {
                                                                        primary: i,
                                                                        product: A,
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
                            className: l()(ek.disclaimer, !W && ek.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !R ? eR.intl.string(eR.t.nKdAlJ) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eG = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: h.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(ek.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eH = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, T.w$)();
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eR.intl.string(eR.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eG, {
                        user: i.mallow,
                        innerClassName: ek.userBlue,
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: ek.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["yzW/fX"]), " - 3"],
                    }),
                    (0, r.jsx)(eG, {
                        user: i.phibi,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: ek.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(e_.Z, {
                            className: ek.nameplatePreview,
                            innerClassName: ek.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                        }),
                    }),
                    (0, r.jsx)(eG, {
                        user: i.locke,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: ek.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["NG43//"]), " - 12"],
                    }),
                    (0, r.jsx)(eG, {
                        user: i.boom,
                        innerClassName: ek.userGreen,
                    }),
                    (0, r.jsx)(eG, {
                        user: i.cherry,
                        innerClassName: ek.userGreen,
                    }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, p.e7)([_.Z], () => _.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            c = (0, p.cj)([D.Z], () => D.Z.getAllPending()),
            { pendingAvatar: d } = c,
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
            v = (0, R.SD)({
                userId: n.id,
                image: d,
            }),
            f = t.type === u.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: b, firstProfileEffect: g, firstNameplate: x } = (0, Q.Rj)(t),
            P = null != g,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            A.Z,
                            eB(eL({}, m), {
                                pendingAvatar: v,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: b,
                                pendingProfileEffect: g,
                                disabledInputs: !0,
                                hideMessageInput: !P,
                                hideCustomStatus: !0,
                                hideBioSection: f,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        f && (0, r.jsx)(ez, { user: n }),
                    ],
                }),
            C = (e) =>
                (0, r.jsx)(eH, {
                    user: n,
                    nameplate: e,
                });
        if (t.type === u.Z.BUNDLE) {
            if (!(0, $.L)(t))
                return (0, r.jsx)("div", {
                    className: ek.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: ek.combinedPreviewContent,
                        children: j(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    c = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === u.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: l()(ek.nameplatePreviewContainerInner, a && c ? ek.sliding : ""),
                          children: C(n),
                      })
                    : (0, r.jsx)("div", {
                          className: l()(ek.profileEffectPreviewsContainerInner, a && c ? ek.sliding : ""),
                          children: j(),
                      });
            }
        }
        return null != x
            ? (0, r.jsx)("div", {
                  className: ek.nameplatePreviewContainerInner,
                  children: C(x),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === u.Z.AVATAR_DECORATION
                          ? ek.previewsContainerInner
                          : ek.profileEffectPreviewsContainerInner,
                  children: j(),
              });
    },
    ez = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, O.e5)(
                    eB(
                        eL(
                            {},
                            (0, I.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eR.intl.string(eR.t.d5YwKy),
                            }),
                        ),
                        {
                            state: eE.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eR.intl.string(eR.t["TN+ZvL"]),
            children: (0, r.jsx)(h.Rny, {
                children: (0, r.jsxs)(h.Zbd, {
                    className: ek.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            y.Z,
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
    eW = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: o,
                returnRef: c,
                analyticsSource: m,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: f,
                tab: b,
                variantType: g = eS.Ch.DEFAULT,
            } = e,
            _ = (0, p.e7)([U.default], () => U.default.getCurrentUser()),
            j = (0, eI.f)(a),
            { previewingVariantIndex: C } = j,
            O = (0, W.o)(a),
            I = (0, ex.N)(a, C),
            w = (0, eP.W)(a, O);
        s()(null != w, "Selected product should not be null");
        let { analyticsLocations: y } = (0, P.ZP)([...v, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(w.skuId);
        let T = (0, eC.kc)(o),
            S = (0, k.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != _ && (0, L.Z)(_.id, _.getAvatarURL(void 0, 80));
        }, [_]);
        let E = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eE.rMx.OPEN_MODAL, {
                type: eE.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: m,
                location_stack: y,
                sku_id: w.skuId,
                product_type: E,
            }),
                w.items.forEach(V.oK);
        }, [m, y, w.skuId, w.items, E]);
        let A = (0, Z.r9)(),
            N = t === h.Dvm.EXITING,
            R = (0, ej.t0)(a),
            B = null == R ? void 0 : R.amount,
            D = i.useMemo(() => ((0, q.x6)(w) ? w.items.length : 0), [w]),
            { activeSlide: F, isTransitioning: G } = (0, ee.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == _
            ? null
            : (0, r.jsx)(P.Gt, {
                  value: y,
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
                                  (0, r.jsx)(eF, {
                                      user: _,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: j,
                                      selectedVariantIndex: O,
                                      shouldCheckoutWithOrbs: f,
                                      tab: b,
                                      activeBundleSlide: F,
                                      variantType: g,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          ek.previewContainer,
                                          w.skuId === d.a.PREMIUM_TIER_2_3_DAY
                                              ? ek.fractionalNitroPreviewContainer
                                              : w.type === u.Z.AVATAR_DECORATION
                                                ? ek.collectiblePreviewsContainerWithChat
                                                : ek.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(T, ")") },
                                      children: [
                                          (0, eS.o0)(a.skuId)
                                              ? a.skuId === eS.Vt.ORB_PROFILE_BADGE
                                                  ? A || N
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: _ })
                                                  : a.skuId === d.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: a,
                                                          className: ek.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eV, {
                                                    user: _,
                                                    product: null != I ? I : w,
                                                    activeBundleSlide: F,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: ek.pdpControls,
                                              children: [
                                                  S &&
                                                      (0, r.jsx)(eb.a, {
                                                          product: a,
                                                          selectedVariantIndex: O,
                                                          className: ek.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: w.skuId,
                                                      tab: b,
                                                  }),
                                                  (0, r.jsx)(h.hU, {
                                                      "aria-label": eR.intl.string(eR.t.cpT0Cg),
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
                          null != B &&
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
                                                      children: eR.intl.format(eR.t["78ph4e"], {
                                                          discountOfferAmount: B,
                                                      }),
                                                  }),
                                                  (null == R ? void 0 : R.expiresAt) != null &&
                                                      (0, r.jsx)(er.R, { endDate: R.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
