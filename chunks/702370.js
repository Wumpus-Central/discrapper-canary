(n.d(t, { default: () => eH }), n(388685), n(314940), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    f = n(399606),
    p = n(780384),
    h = n(481060),
    v = n(809206),
    P = n(727637),
    b = n(410030),
    g = n(100527),
    x = n(906732),
    j = n(570908),
    C = n(786761),
    _ = n(3148),
    O = n(739566),
    w = n(753206),
    I = n(4242),
    y = n(333867),
    E = n(767714),
    T = n(678135),
    S = n(876917),
    N = n(643879),
    k = n(484459),
    Z = n(822857),
    R = n(960919),
    A = n(275388),
    L = n(25990),
    B = n(594174),
    D = n(626135),
    M = n(63063),
    U = n(74538),
    F = n(937615),
    H = n(335131),
    z = n(1870),
    G = n(429368),
    W = n(884697),
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
    es = n(539598),
    eo = n(237031),
    ec = n(372654),
    eu = n(38914),
    ed = n(262786),
    em = n(259673),
    ef = n(508925),
    ep = n(953405),
    eh = n(453713),
    ev = n(616066),
    eP = n(22267),
    eb = n(332246),
    eg = n(58201),
    ex = n(794324),
    ej = n(361110),
    eC = n(956472),
    e_ = n(832149),
    eO = n(215023),
    ew = n(981631),
    eI = n(474936),
    ey = n(231338),
    eE = n(388032),
    eT = n(785218);
function eS(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            s = (0, P.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eT.bundleAvatarPreviewContainer : eT.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eT.bundlePfxPreviewContainer : eT.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(S.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: l,
                    className: eT.nameplatePreviewContainer,
                    children: (0, r.jsx)(eP.Z, {
                        className: eT.nameplatePreview,
                        nameplate: t,
                        isHighlighted: s,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: 'large'
                    })
                })
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
        let s = t.items.length;
        return (0, r.jsx)('div', {
            className: eT.bundlePreviewContainer,
            children: (0, r.jsx)(h.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = '('.concat(i + 1, '/').concat(s, ')');
                    return (0, r.jsx)(
                        h.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)('div', {
                                className: eT.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(ek, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(h.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eT.bundleSlideTitle,
                                        children: [null == l ? void 0 : l.name, ' ', o]
                                    })
                                ]
                            })
                        },
                        a
                    );
                })
            })
        });
    },
    eR = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n
              })
            : (0, eO.o0)(t.skuId)
              ? (0, r.jsx)(ef.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(ek, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eA = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eT.learnMoreLink,
                  children: eE.intl.format(eE.t.Q1scdH, { helpdeskArticle: M.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eL = (e) => {
        let t,
            { product: n, user: a, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: P, previewingVariantIndexProps: g, selectedVariantIndex: j, tab: C } = e,
            { analyticsLocations: _ } = (0, x.ZP)(),
            O = U.ZP.canUseCollectibles(a),
            { previewingVariantIndex: w } = g,
            I = (0, eb.N)(n, w),
            T = (0, eg.W)(n, j);
        o()(null != T, 'Selected product should not be null');
        let S = (0, J.L)(n),
            { isPurchased: N, isPartiallyOwnedBundle: k } = (0, J.L)(T),
            { isDisabled: L, disabledReason: B } = (0, X.G)(T.skuId),
            D = (0, W.ne)({
                product: T,
                isPartiallyOwnedBundle: k,
                isPurchased: N
            }),
            M = (0, f.e7)([z.Z], () => z.Z.isClaiming === (null == T ? void 0 : T.skuId)),
            G = (0, b.ZP)(),
            ee = (0, p.wj)(G),
            et = (0, W.G1)(T),
            en = (0, W.ql)(T, ew.tuJ.DEFAULT),
            ec = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: eu } = (0, Q.Rj)(null != I ? I : T),
            em = i.useMemo(() => (0, W.BH)(T, O), [T, O]),
            { handleUseNow: ef, isApplying: ev } = (0, q.W)({
                product: T,
                onSuccess: m
            }),
            eP = (0, V.hv)('CollectiblesProductPreviewInfo'),
            ex = (0, Y.T)(T),
            { enabled: ej } = (0, Z.WX)({ location: 'collectibles_shop_product_details_modal' }),
            ek = (0, ed._)(n.eligibleOffers),
            eZ = null != ek,
            {
                checkoutEligiblePrices: eL,
                isOrbExclusive: eB,
                hasSufficientOrbs: eD
            } = (0, eC.Ip)({
                product: T,
                isPremiumUser: O,
                tab: C,
                hasDiscountOffer: eZ
            }),
            eM = i.useCallback(
                () =>
                    (0, y.Z)({
                        skuId: T.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: eP,
                        onClose: (e) => (e ? m() : (0, ey.dG)())
                    }),
                [_, m, T.skuId, eP]
            );
        i.useEffect(() => {
            if (null != eu) return ((0, v.cV)(eu), () => (0, v.cV)(void 0));
        }, [eu]);
        let eU = (e, t) => {
                let n = () => {
                        (0, A.q)({
                            skuId: T.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, H.qg)({
                                    variantsReturnStyle: eP,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, e_.Z)({
                                        product: T,
                                        analyticsLocations: _,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: eO.o8.ORB
                                    }));
                            },
                            analyticsLocations: _
                        });
                    },
                    i = L ? eE.intl.string(eE.t.cTdr39) : eE.intl.string(eE.t.zqh7ZG),
                    a = !eD || L,
                    l = eE.intl.formatToPlainString(eE.t['fNG/09'], { orbPrice: e.amount }),
                    s = a ? ''.concat(l, ', ').concat(i) : l;
                return (0, r.jsx)(h.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zxk,
                            eN(eS({}, i), {
                                variant: t ? 'primary' : 'secondary',
                                onClick: n,
                                disabled: a,
                                'aria-label': s,
                                text: eE.intl.format(eE.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () =>
                                        (0, r.jsx)(R.Z, {
                                            className: eT.orbIconAligned,
                                            shouldUseThemeColor: a && !t
                                        })
                                }),
                                fullWidth: !0
                            })
                        )
                });
            },
            eF = (e, t) => {
                let n = !et && !ec && !u.tq && !eB && D,
                    i = (0, W.x6)(T) ? eE.intl.string(eE.t.V1AWw8) : T.type === d.Z.PROFILE_EFFECT ? eE.intl.string(eE.t.kAeDcH) : T.type === d.Z.NAMEPLATE ? eE.intl.string(eE.t.H3vhqa) : eE.intl.string(eE.t.AQ0Ven);
                return (
                    eZ ? (i = eE.intl.formatToPlainString(eE.t['5U5RBw'], { discountOfferAmount: ek })) : ej && (i = eE.intl.formatToPlainString(eE.t['cNSL/v'], { price: (0, F.T4)(e.amount, e.currency) })),
                    (0, r.jsxs)('div', {
                        className: eT.checkoutButtonsRow,
                        children: [
                            (0, r.jsx)(h.zxk, {
                                variant: t ? 'primary' : 'secondary',
                                onClick: eM,
                                text: i,
                                fullWidth: !0
                            }),
                            n &&
                                (0, r.jsx)(ea.Z, {
                                    primary: t,
                                    product: T,
                                    onSuccess: m
                                })
                        ]
                    })
                );
            },
            eH = (0, K.G)(T);
        return (0, r.jsxs)('div', {
            className: eT.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eT.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: s,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eR, {
                    product: null != I ? I : T,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eT.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: T,
                                    isDarkText: !ee,
                                    isOrbExclusive: eB
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eT.headingWithItemTypePill,
                                    children: ex
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eH
                                }),
                                (0, r.jsx)(eA, { skuId: T.skuId }),
                                S.isPurchased || S.isPartiallyOwnedBundle
                                    ? (0, r.jsx)($.U, {
                                          className: eT.priceTag,
                                          isPartiallyPurchased: k
                                      })
                                    : et
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eT.priceTag,
                                            children: eE.intl.string(eE.t.rt69oq)
                                        })
                                      : ej
                                        ? (0, r.jsx)(ep.a, {
                                              prices: eL,
                                              product: T,
                                              isPremiumUser: O,
                                              discount: em,
                                              hasSufficientOrbs: eD,
                                              isProductDisabled: L,
                                              discountOfferAmount: ek
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eT.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(el.Z, {
                                                      product: T,
                                                      discount: em,
                                                      isPremiumUser: O,
                                                      hideStrikethroughPrice: !O || eZ,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs',
                                                      discountOfferAmount: ek
                                                  }),
                                                  O || eZ ? null : (0, r.jsx)(es.Z, { product: T })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(eh.P, {
                                selectedVariantIndex: j,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: g,
                                className: eT.variantsSwitch
                            })
                        }),
                        null !== B &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eT.disabledReason,
                                children: B
                            }),
                        (0, r.jsx)('div', {
                            className: eT.buttonsContainer,
                            children:
                                !et || O || ec
                                    ? D
                                        ? N
                                            ? (0, r.jsx)(h.zxk, {
                                                  variant: 'primary',
                                                  onClick: ef,
                                                  loading: ev,
                                                  text: eE.intl.string(eE.t.MAS7uL),
                                                  fullWidth: !0
                                              })
                                            : et
                                              ? (0, r.jsx)(h.zxk, {
                                                    loading: M,
                                                    loadingStartedLabel: eE.intl.string(eE.t['TYw+9v']),
                                                    loadingFinishedLabel: eE.intl.string(eE.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, H.fK)(T.skuId),
                                                            m(),
                                                            (0, e_.Z)({
                                                                product: T,
                                                                analyticsLocations: _,
                                                                purchaseType: eO.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    text: eE.intl.string(eE.t.zp6caG),
                                                    fullWidth: !0
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eL.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === ey.pK.DISCORD_ORB ? eU(e, n) : eF(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = eE.intl.string(eE.t.sEAnVF)),
                                      (0, r.jsx)(E.Z, {
                                          subscriptionTier: eI.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: eo.v,
                                          onSubscribeModalClose: () => {
                                              (0, eo.T)({
                                                  product: T,
                                                  category: s,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: P,
                                                  analyticsLocations: _
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(h.Text, {
                            className: l()(eT.disclaimer, !ee && eT.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !N ? eE.intl.string(eE.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eB = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eT.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: h.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: l()(eT.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsx)('div', {
            className: eT.nameplateRightPanePreviewContainer,
            role: 'img',
            'aria-label': eE.intl.string(eE.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eB, {
                        user: i.mallow,
                        innerClassName: eT.userBlue
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: 'text-sm/semibold',
                        className: eT.namplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t['yzW/fX']), ' - 3']
                    }),
                    (0, r.jsx)(eB, {
                        user: i.phibi,
                        innerClassName: eT.userPink
                    }),
                    (0, r.jsx)('div', {
                        className: eT.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eP.Z, {
                            className: eT.nameplatePreview,
                            innerClassName: eT.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0
                        })
                    }),
                    (0, r.jsx)(eB, {
                        user: i.locke,
                        innerClassName: eT.userPink
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: 'text-sm/semibold',
                        className: eT.namplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t['NG43//']), ' - 12']
                    }),
                    (0, r.jsx)(eB, {
                        user: i.boom,
                        innerClassName: eT.userGreen
                    }),
                    (0, r.jsx)(eB, {
                        user: i.cherry,
                        innerClassName: eT.userGreen
                    })
                ]
            })
        });
    },
    eM = (e) => {
        let { product: t, user: n } = e,
            i = U.ZP.canUsePremiumProfileCustomization(n),
            a = (0, f.cj)([L.Z], () => L.Z.getAllPending()),
            { pendingAvatar: l } = a,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(a, ['pendingAvatar']),
            o = (0, N.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: p } = (0, Q.Rj)(t),
            h = null != p;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eT.previewsContainerInner : eT.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  T.Z,
                                  eN(eS({}, s), {
                                      pendingAvatar: o,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == p ? void 0 : p.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !h,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: c,
                                      interactive: !1
                                  })
                              ),
                              c && (0, r.jsx)(eF, { user: n })
                          ]
                      })
        });
    },
    eU = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            eN(
                eS(
                    {},
                    (0, _.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eE.intl.string(eE.t.d5YwKy)
                    })
                ),
                {
                    state: ew.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eF = (e) => {
        let { user: t } = e,
            n = eU({ author: t });
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': eE.intl.string(eE.t['TN+ZvL']),
            children: (0, r.jsx)(h.Rny, {
                children: (0, r.jsxs)(h.Zbd, {
                    className: eT.chatPreview,
                    outline: !0,
                    'aria-hidden': !0,
                    children: [
                        (0, r.jsx)(
                            w.Z,
                            {
                                className: eT.mockMessage,
                                author: (0, O.ZH)(n),
                                message: n
                            },
                            n.id
                        ),
                        (0, r.jsxs)('div', {
                            className: eT.mockInput,
                            children: [
                                (0, r.jsx)(h.oFk, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: eT.mockInputButton
                                }),
                                (0, r.jsx)(h.EO4, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: eT.mockInputButton
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    eH = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: v } = e,
            P = (0, f.e7)([B.default], () => B.default.getCurrentUser()),
            b = (0, ej.f)(a),
            { previewingVariantIndex: j } = b,
            C = (0, f.e7)([z.Z], () => z.Z.purchases),
            _ = (0, G.o)(a, C),
            O = (0, eb.N)(a, j),
            w = (0, eg.W)(a, _);
        o()(null != w, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, x.ZP)([...u, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(w.skuId);
        let { pdpBackground: y, logo: E } = (0, ex.OR)(l, a);
        i.useEffect(() => {
            null != P && (0, k.Z)(P.id, P.getAvatarURL(void 0, 80));
        }, [P]);
        let T = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            (D.default.track(ew.rMx.OPEN_MODAL, {
                type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: I,
                sku_id: w.skuId,
                product_type: T
            }),
                w.items.forEach(H.oK));
        }, [c, I, w.skuId, w.items, T]);
        let S = (0, A.r)(),
            N = t === h.Dvm.EXITING;
        if (null == P) return null;
        let Z = (0, eO.ZS)(l.skuId);
        return (0, r.jsx)(x.Gt, {
            value: I,
            children: (0, r.jsx)(h.Y0X, {
                'data-migration-pending': !0,
                hideShadow: !0,
                className: eT.modalRoot,
                returnRef: s,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(h.hzk, {
                    'data-migration-pending': !0,
                    className: eT.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: P,
                            product: a,
                            category: l,
                            onClose: n,
                            previewingVariantIndexProps: b,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: p,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: w.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eT.fractionalNitroPreviewContainer : w.type === d.Z.AVATAR_DECORATION ? eT.collectiblePreviewsContainerWithChat : eT.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    asset: y,
                                    size: (0, ec.ML)(540),
                                    className: eT.categoryBanner,
                                    categoryBannerOverride: Z
                                }),
                                (0, eO.o0)(a.skuId)
                                    ? a.skuId === eO.Vt.ORB_PROFILE_BADGE
                                        ? S || N
                                            ? null
                                            : (0, r.jsx)(em.M, { user: P })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(ef.b, {
                                                product: a,
                                                className: eT.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: P,
                                          product: null != O ? O : w
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eT.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eT.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eT.titleImage,
                                                style: null == Z ? void 0 : Z.pdpLogoStyle,
                                                src: E,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eT.headerButtonContainer,
                                            children: [
                                                (0, r.jsx)(et.n, {
                                                    skuId: w.skuId,
                                                    tab: v
                                                }),
                                                (0, r.jsx)(h.hU, {
                                                    'aria-label': eE.intl.string(eE.t.cpT0Cg),
                                                    onClick: n,
                                                    icon: h.Uz9,
                                                    variant: 'overlay-secondary',
                                                    size: 'sm'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
