n.d(t, { default: () => ez }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(979554),
    u = n(314794),
    d = n(311570),
    m = n(399606),
    p = n(28664),
    v = n(780384),
    f = n(481060),
    h = n(809206),
    g = n(410030),
    b = n(607070),
    _ = n(100527),
    x = n(906732),
    P = n(570908),
    j = n(104505),
    O = n(786761),
    C = n(3148),
    I = n(739566),
    w = n(753206),
    y = n(4242),
    T = n(566697),
    S = n(333867),
    A = n(767714),
    E = n(678135),
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
    K = n(884697),
    q = n(635552),
    Y = n(83479),
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
    eg = n(143941),
    eb = n(616066),
    e_ = n(332246),
    ex = n(58201),
    eP = n(445794),
    ej = n(794324),
    eO = n(694364),
    eC = n(361110),
    eI = n(29121),
    ew = n(956472),
    ey = n(832149),
    eT = n(215023),
    eS = n(981631),
    eA = n(474936),
    eE = n(231338),
    eN = n(388032),
    eR = n(188336);
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
let eB = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            o = (0, j.X)(l),
            s = (0, K.x6)(n),
            { firstAvatarDecoration: u } = (0, Q.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? eR.bundleAvatarPreviewContainer : eR.avatarPreviewContainer,
                  children: (0, r.jsx)(eb.R, {
                      user: a,
                      item: t,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? eR.bundlePfxPreviewContainer : eR.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(N.Z, {
                        skuId: t.skuId,
                        isHighlighted: o,
                        removeSetHeight: !0,
                    }),
                })
              : t.type === c.Z.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: eR.nameplatePreviewContainer,
                      children: (0, r.jsx)(T.Z, {
                          className: eR.nameplatePreview,
                          nameplate: t,
                          isHighlighted: o,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: u,
                      }),
                  })
                : null;
    },
    eZ = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: eR.bundlePreviewContainer,
            children: (0, r.jsx)(f.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(a, ")");
                    return (0, r.jsx)(
                        f.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: eR.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eB, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eR.bundleSlideTitle,
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
    eD = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, K.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eT.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eB, {
                      item: t.items[0],
                      product: t,
                      user: n,
                  })
                : null;
    },
    eU = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  className: eR.learnMoreLink,
                  children: eN.intl.format(eN.t.Q1scdE, {
                      helpdeskArticle: F.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: u,
                returnRef: b,
                previewingVariantIndexProps: _,
                selectedVariantIndex: P,
                tab: j,
                activeBundleSlide: O,
                variantType: C,
            } = e,
            { analyticsLocations: I } = (0, x.ZP)(),
            w = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y } = _,
            T = (0, e_.N)(t, y),
            E = (0, ex.W)(t, P);
        s()(null != E, "Selected product should not be null");
        let N = (0, X.L)(t),
            { isPurchased: R, isPartiallyOwnedBundle: k } = (0, X.L)(E),
            { isDisabled: L, disabledReason: D } = (0, J.G)(E.skuId),
            U = (0, K.ne)({
                product: E,
                isPartiallyOwnedBundle: k,
                isPurchased: R,
            }),
            M = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            F = (0, g.ZP)(),
            W = (0, v.wj)(F),
            $ = (0, K.G1)(E),
            ee = (0, K.ql)(E, eS.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, Q.Rj)(null != T ? T : E),
            ei = i.useMemo(() => (0, K.BH)(E, w), [E, w]),
            { handleUseNow: ed, isApplying: em } = (0, q.W)({
                product: E,
                onSuccess: u,
            }),
            ep = (0, eI.To)(E),
            eg = (0, eO.J)(E),
            { enabled: eb } = (0, B.WX)({ location: "collectibles_shop_product_details_modal" }),
            ej = (0, eP.Iw)(t),
            eC = null != ej,
            {
                checkoutEligiblePrices: ek,
                isOrbExclusive: eL,
                hasSufficientOrbs: eB,
            } = (0, ew.Ip)({
                product: E,
                isPremiumUser: w,
                tab: j,
                hasDiscountOffer: eC,
            }),
            eZ = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: E.skuId,
                        analyticsLocations: I,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eE.dG)()),
                    }),
                [I, u, E.skuId],
            );
        i.useEffect(() => {
            if (null != er) return (0, h.cV)(er), () => (0, h.cV)(void 0);
        }, [er]);
        let eM = (0, Y.G)(E);
        return (0, r.jsxs)("div", {
            className: eR.collectibleInfoContainer,
            children: [
                (0, r.jsx)("div", {
                    className: eR.titleContainer,
                    children: (0, r.jsx)(el.Z, {
                        category: a,
                        display: el.k.MODAL,
                    }),
                }),
                (0, r.jsx)(eD, {
                    product: null != T ? T : E,
                    user: n,
                    activeSlide: O,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eR.description,
                            children: [
                                (0, r.jsx)(ea.Z, {
                                    product: E,
                                    isDarkText: !W,
                                    isOrbExclusive: eL,
                                }),
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-xl/extrabold",
                                    className: eR.headingWithItemTypePill,
                                    children: ep,
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: eM,
                                }),
                                (0, r.jsx)(eU, { skuId: E.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: eR.priceTag,
                                          isPartiallyPurchased: k,
                                      })
                                    : $
                                      ? (0, r.jsx)(f.Text, {
                                            variant: "text-md/semibold",
                                            className: eR.priceTag,
                                            children: eN.intl.string(eN.t.rt69oo),
                                        })
                                      : eb
                                        ? (0, r.jsx)(ev.a, {
                                              prices: ek,
                                              product: E,
                                              isPremiumUser: w,
                                              discount: ei,
                                              hasSufficientOrbs: eB,
                                              isProductDisabled: L,
                                              discountOfferAmount: ej,
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: eR.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: E,
                                                      discount: ei,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w || eC,
                                                      nitroIconType: "tooltip",
                                                      nitroIconSize: "xs",
                                                      discountOfferAmount: ej,
                                                  }),
                                                  w || eC ? null : (0, r.jsx)(ec.Z, { product: E }),
                                              ],
                                          }),
                            ],
                        }),
                        (0, r.jsx)(f.Rny, {
                            children:
                                C === eT.Ch.DEFAULT
                                    ? (0, r.jsx)(ef.P, {
                                          selectedVariantIndex: P,
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: _,
                                          className: eR.variantsSwitch,
                                      })
                                    : (0, r.jsx)(eh.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: _,
                                          className: eR.variantsThumbnail,
                                          selectedVariantIndex: P,
                                      }),
                        }),
                        null !== D &&
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                className: eR.disabledReason,
                                children: D,
                            }),
                        (0, r.jsx)(f.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: (() => {
                                if ($ && !w && !en) {
                                    let e;
                                    return (
                                        (e = eN.intl.string(eN.t.sEAnVH)),
                                        (0, r.jsx)(A.Z, {
                                            subscriptionTier: eA.Si.TIER_2,
                                            fullWidth: !0,
                                            textOptions: { textOverride: e },
                                            onClick: eu.v,
                                            onSubscribeModalClose: () => {
                                                (0, eu.T)({
                                                    product: E,
                                                    category: a,
                                                    shouldCheckoutWithOrbs: o,
                                                    returnRef: b,
                                                    analyticsLocations: I,
                                                    variantType: C,
                                                });
                                            },
                                        })
                                    );
                                }
                                return U
                                    ? R
                                        ? (0, r.jsx)(f.Button, {
                                              variant: "primary",
                                              onClick: ed,
                                              loading: em,
                                              text: eN.intl.string(eN.t.MAS7uK),
                                              fullWidth: !0,
                                          })
                                        : $
                                          ? (0, r.jsx)(f.Button, {
                                                loading: M,
                                                loadingStartedLabel: eN.intl.string(eN.t["TYw+9s"]),
                                                loadingFinishedLabel: eN.intl.string(eN.t.Pg1UP5),
                                                onClick: async () => {
                                                    await (0, V.fK)(E.skuId),
                                                        u(),
                                                        (0, ey.Z)({
                                                            product: E,
                                                            analyticsLocations: I,
                                                            purchaseType: eT.o8.PREMIUM_PURCHASE,
                                                        });
                                                },
                                                text: eN.intl.string(eN.t.zp6caO),
                                                fullWidth: !0,
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ek.map((e, t) => {
                                                    let n,
                                                        i = 0 === t;
                                                    if (e.currency === eE.pK.DISCORD_ORB) {
                                                        let t = L
                                                                ? eN.intl.string(eN.t.cTdr3x)
                                                                : eN.intl.string(eN.t.zqh7ZM),
                                                            n = !eB || L,
                                                            a = eN.intl.formatToPlainString(eN.t["fNG/05"], {
                                                                orbPrice: e.amount,
                                                            }),
                                                            l = n ? "".concat(a, ", ").concat(t) : a;
                                                        return (0, r.jsx)(p.u, {
                                                            position: "top",
                                                            text: t,
                                                            shouldShow: n,
                                                            "aria-label": !1,
                                                            children: (0, r.jsx)(f.Button, {
                                                                variant: i ? "primary" : "secondary",
                                                                onClick: () => {
                                                                    (0, Z.qA)({
                                                                        skuId: E.skuId,
                                                                        onCheckoutSuccess: (e) => {
                                                                            var t;
                                                                            let { entitlements: n } = e;
                                                                            (0, V.qg)({
                                                                                variantsReturnStyle: d.v.VARIANTS_GROUP,
                                                                            }),
                                                                                u(),
                                                                                (0, ey.Z)({
                                                                                    product: E,
                                                                                    analyticsLocations: I,
                                                                                    itemConsumed:
                                                                                        null == (t = n[0])
                                                                                            ? void 0
                                                                                            : t.consumed,
                                                                                    purchaseType: eT.o8.ORB,
                                                                                });
                                                                        },
                                                                        analyticsLocations: I,
                                                                    });
                                                                },
                                                                disabled: n,
                                                                "aria-label": l,
                                                                text: eN.intl.format(eN.t.kAgx5L, {
                                                                    orbPrice: e.amount,
                                                                    orbIconHook: () =>
                                                                        (0, r.jsx)(f.aQr, {
                                                                            className: eR.orbIconAligned,
                                                                            size: "sm",
                                                                            color: "currentColor",
                                                                        }),
                                                                }),
                                                                fullWidth: !0,
                                                            }),
                                                        });
                                                    }
                                                    return (
                                                        (n = (0, K.x6)(E)
                                                            ? eN.intl.string(eN.t.V1AWw0)
                                                            : E.type === c.Z.PROFILE_EFFECT
                                                              ? eN.intl.string(eN.t.kAeDcK)
                                                              : E.type === c.Z.NAMEPLATE
                                                                ? eN.intl.string(eN.t.H3vhqU)
                                                                : eN.intl.string(eN.t.AQ0Veg)),
                                                        eC
                                                            ? (n = eN.intl.formatToPlainString(eN.t["5U5RB5"], {
                                                                  discountOfferAmount: ej,
                                                              }))
                                                            : eb &&
                                                              (n = eN.intl.formatToPlainString(eN.t["cNSL/j"], {
                                                                  price: (0, H.T4)(e.amount, e.currency),
                                                              })),
                                                        (0, r.jsxs)(f.ButtonGroup, {
                                                            wrap: !1,
                                                            fullWidth: !0,
                                                            children: [
                                                                (0, r.jsx)(f.Button, {
                                                                    variant: i ? "primary" : "secondary",
                                                                    onClick: eZ,
                                                                    text: n,
                                                                    fullWidth: !0,
                                                                }),
                                                                eg &&
                                                                    (0, r.jsx)(eo.Z, {
                                                                        primary: i,
                                                                        product: E,
                                                                        onSuccess: u,
                                                                    }),
                                                            ],
                                                        })
                                                    );
                                                }),
                                            })
                                    : null;
                            })(),
                        }),
                        (0, r.jsx)(f.Text, {
                            className: l()(eR.disclaimer, !W && eR.disclaimerLight),
                            variant: "text-xxs/normal",
                            children: $ && !R ? eN.intl.string(eN.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    eF = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eR.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(f.qEK, {
                    src: t.avatarSrc,
                    size: f.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: f.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eR.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, y.w$)();
        return (0, r.jsx)("div", {
            className: eR.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eN.intl.string(eN.t.SZeUdR),
            children: (0, r.jsxs)(f.Rny, {
                children: [
                    (0, r.jsx)(eF, {
                        user: a.mallow,
                        innerClassName: eR.userBlue,
                    }),
                    (0, r.jsxs)(f.Text, {
                        variant: "text-sm/semibold",
                        className: eR.nameplateRightPanePreviewSectionGroup,
                        children: [eN.intl.string(eN.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eF, {
                        user: a.phibi,
                        innerClassName: eR.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eR.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(T.Z, {
                            className: eR.nameplatePreview,
                            innerClassName: eR.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eF, {
                        user: a.locke,
                        innerClassName: eR.userPink,
                    }),
                    (0, r.jsxs)(f.Text, {
                        variant: "text-sm/semibold",
                        className: eR.nameplateRightPanePreviewSectionGroup,
                        children: [eN.intl.string(eN.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eF, {
                        user: a.boom,
                        innerClassName: eR.userGreen,
                    }),
                    (0, r.jsx)(eF, {
                        user: a.cherry,
                        innerClassName: eR.userGreen,
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, m.e7)([b.Z], () => b.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            u = (0, m.cj)([D.Z], () => D.Z.getAllPending()),
            { pendingAvatar: d } = u,
            p = (function (e, t) {
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
            })(u, ["pendingAvatar"]),
            v = (0, R.SD)({
                userId: n.id,
                image: d,
            }),
            f = t.type === c.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: _, firstNameplate: x } = (0, Q.Rj)(t),
            P = null != _,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            E.Z,
                            eL(ek({}, p), {
                                pendingAvatar: v,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: g,
                                pendingProfileEffect: _,
                                disabledInputs: !0,
                                hideMessageInput: !P,
                                hideCustomStatus: !0,
                                hideBioSection: f,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        f && (0, r.jsx)(eV, { user: n }),
                    ],
                }),
            O = (e) =>
                (0, r.jsx)(eG, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: g,
                });
        if (t.type === c.Z.BUNDLE) {
            if (!(0, $.L)(t))
                return (0, r.jsx)("div", {
                    className: eR.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eR.combinedPreviewContent,
                        children: j(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    u = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === c.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: l()(eR.nameplatePreviewContainerInner, a && u ? eR.sliding : ""),
                          children: O(n),
                      })
                    : (0, r.jsx)("div", {
                          className: l()(eR.profileEffectPreviewsContainerInner, a && u ? eR.sliding : ""),
                          children: j(),
                      });
            }
        }
        return null != x
            ? (0, r.jsx)("div", {
                  className: eR.nameplatePreviewContainerInner,
                  children: O(x),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === c.Z.AVATAR_DECORATION
                          ? eR.previewsContainerInner
                          : eR.profileEffectPreviewsContainerInner,
                  children: j(),
              });
    },
    eV = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, O.e5)(
                    eL(
                        ek(
                            {},
                            (0, C.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eN.intl.string(eN.t.d5YwK5),
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
            "aria-label": eN.intl.string(eN.t["TN+ZvB"]),
            children: (0, r.jsx)(f.Rny, {
                children: (0, r.jsxs)(f.Zbd, {
                    className: eR.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            w.Z,
                            {
                                className: eR.mockMessage,
                                author: (0, I.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eR.mockInput,
                            children: [
                                (0, r.jsx)(f.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eR.mockInputButton,
                                }),
                                (0, r.jsx)(f.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eR.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ez = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: o,
                returnRef: d,
                analyticsSource: p,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: h,
                tab: g,
                variantType: b = eT.Ch.DEFAULT,
            } = e,
            P = (0, m.e7)([U.default], () => U.default.getCurrentUser()),
            j = (0, eC.f)(a),
            { previewingVariantIndex: O } = j,
            C = (0, W.o)(a),
            I = (0, e_.N)(a, O),
            w = (0, ex.W)(a, C);
        s()(null != w, "Selected product should not be null");
        let { analyticsLocations: y } = (0, x.ZP)([...v, _.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(w.skuId);
        let T = (0, ej.kc)(o),
            S = (0, k.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != P && (0, L.Z)(P.id, P.getAvatarURL(void 0, 80));
        }, [P]);
        let A = i.useMemo(() => (0, K.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eS.rMx.OPEN_MODAL, {
                type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: y,
                sku_id: w.skuId,
                product_type: A,
            }),
                w.items.forEach(V.oK);
        }, [p, y, w.skuId, w.items, A]);
        let E = (0, Z.r9)(),
            N = t === f.Dvm.EXITING,
            R = (0, eP.t0)(a),
            B = null == R ? void 0 : R.amount,
            D = i.useMemo(() => ((0, K.x6)(w) ? w.items.length : 0), [w]),
            { activeSlide: F, isTransitioning: G } = (0, ee.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == P
            ? null
            : (0, r.jsx)(x.Gt, {
                  value: y,
                  children: (0, r.jsxs)(f.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eR.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: f.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(f.hzk, {
                              "data-migration-pending": !0,
                              className: eR.modalContent,
                              children: [
                                  (0, r.jsx)(eM, {
                                      user: P,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: j,
                                      selectedVariantIndex: C,
                                      shouldCheckoutWithOrbs: h,
                                      tab: g,
                                      activeBundleSlide: F,
                                      variantType: b,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          eR.previewContainer,
                                          w.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? eR.fractionalNitroPreviewContainer
                                              : w.type === c.Z.AVATAR_DECORATION
                                                ? eR.collectiblePreviewsContainerWithChat
                                                : eR.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(T, ")") },
                                      children: [
                                          (0, eT.o0)(a.skuId)
                                              ? a.skuId === eT.Vt.ORB_PROFILE_BADGE
                                                  ? E || N
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: P })
                                                  : a.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: a,
                                                          className: eR.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eH, {
                                                    user: P,
                                                    product: null != I ? I : w,
                                                    activeBundleSlide: F,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eR.pdpControls,
                                              children: [
                                                  S &&
                                                      (0, r.jsx)(eg.a, {
                                                          product: a,
                                                          selectedVariantIndex: C,
                                                          className: eR.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: w.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(f.hU, {
                                                      "aria-label": eN.intl.string(eN.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: f.Uz9,
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
                                  children: (0, r.jsxs)(f.mzw, {
                                      "data-migration-pending": !0,
                                      className: eR.modalFooter,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eR.modalFooterBackgroundImg,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eR.modalFooterContentContainer,
                                              children: [
                                                  (0, r.jsx)(f.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eR.modalFooterText,
                                                      children: eN.intl.format(eN.t["78ph4b"], {
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
