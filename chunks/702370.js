(n.d(t, { default: () => ez }), n(388685), n(314940), n(953529));
var r = n(255367),
    a = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(512722),
    s = n.n(c),
    l = n(278074),
    u = n(873546),
    d = n(979554),
    p = n(314794),
    m = n(399606),
    _ = n(780384),
    f = n(481060),
    g = n(809206),
    b = n(727637),
    h = n(410030),
    v = n(100527),
    P = n(906732),
    C = n(570908),
    x = n(786761),
    y = n(3148),
    O = n(739566),
    j = n(753206),
    w = n(4242),
    I = n(333867),
    T = n(767714),
    S = n(678135),
    k = n(876917),
    E = n(643879),
    N = n(484459),
    A = n(822857),
    Z = n(960919),
    R = n(275388),
    L = n(25990),
    M = n(594174),
    B = n(626135),
    D = n(63063),
    H = n(74538),
    U = n(937615),
    z = n(335131),
    F = n(1870),
    G = n(429368),
    W = n(884697),
    V = n(228624),
    q = n(635552),
    K = n(83479),
    Y = n(290175),
    J = n(905357),
    X = n(724994),
    Q = n(328456),
    $ = n(390698),
    ee = n(141011),
    et = n(525518),
    en = n(426171),
    er = n(224068),
    ea = n(813083),
    ei = n(680942),
    eo = n(558060),
    ec = n(539598),
    es = n(237031),
    el = n(372654),
    eu = n(38914),
    ed = n(262786),
    ep = n(259673),
    em = n(508925),
    e_ = n(953405),
    ef = n(453713),
    eg = n(616066),
    eb = n(22267),
    eh = n(332246),
    ev = n(58201),
    eP = n(794324),
    eC = n(361110),
    ex = n(956472),
    ey = n(832149),
    eO = n(215023),
    ej = n(981631),
    ew = n(474936),
    eI = n(231338),
    eT = n(388032),
    eS = n(785218);
function ek(e) {
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
let eN = (e) => {
        let { item: t, user: n, isBundleItem: i = !1 } = e,
            o = a.useRef(null),
            c = (0, b.Z)(o);
        return (0, l.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: i ? eS.bundleAvatarPreviewContainer : eS.avatarPreviewContainer,
                    children: (0, r.jsx)(eg.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: i ? eS.bundlePfxPreviewContainer : eS.pfxPreviewContainer,
                    ref: o,
                    children: (0, r.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: c,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: o,
                    className: eS.nameplatePreviewContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: eS.nameplatePreview,
                        nameplate: t,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: 'large'
                    })
                })
            )
            .otherwise(() => null);
    },
    eA = (e) => {
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
        return (0, r.jsx)('div', {
            className: eS.bundlePreviewContainer,
            children: (0, r.jsx)(f.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, a) => {
                    let i = String(a),
                        o = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        s = '('.concat(a + 1, '/').concat(c, ')');
                    return (0, r.jsx)(
                        f.Mi4,
                        {
                            id: i,
                            children: (0, r.jsxs)('div', {
                                className: eS.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eS.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, ' ', s]
                                    })
                                ]
                            })
                        },
                        i
                    );
                })
            })
        });
    },
    eZ = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eA, {
                  product: t,
                  user: n
              })
            : (0, eO.o0)(t.skuId)
              ? (0, r.jsx)(em.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(eN, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eR = (e) => {
        let { skuId: t } = e;
        return t === p.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(f.Text, {
                  variant: 'text-sm/normal',
                  className: eS.learnMoreLink,
                  children: eT.intl.format(eT.t.Q1scdH, { helpdeskArticle: D.Z.getArticleURL(ej.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eL = (e) => {
        let t,
            { product: n, user: i, category: c, shouldCheckoutWithOrbs: l, onClose: p, returnRef: b, previewingVariantIndexProps: v, selectedVariantIndex: C, tab: x } = e,
            { analyticsLocations: y } = (0, P.ZP)(),
            O = H.ZP.canUseCollectibles(i),
            { previewingVariantIndex: j } = v,
            w = (0, eh.N)(n, j),
            S = (0, ev.W)(n, C);
        s()(null != S, 'Selected product should not be null');
        let k = (0, X.L)(n),
            { isPurchased: E, isPartiallyOwnedBundle: N } = (0, X.L)(S),
            { isDisabled: L, disabledReason: M } = (0, Y.G)(S.skuId),
            B = (0, W.ne)({
                product: S,
                isPartiallyOwnedBundle: N,
                isPurchased: E
            }),
            D = (0, m.e7)([F.Z], () => F.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            G = (0, h.ZP)(),
            ee = (0, _.wj)(G),
            et = (0, W.G1)(S),
            en = (0, W.ql)(S, ej.tuJ.DEFAULT),
            el = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: eu } = (0, Q.Rj)(null != w ? w : S),
            ep = a.useMemo(() => (0, W.BH)(S, O), [S, O]),
            { handleUseNow: em, isApplying: eg } = (0, q.W)({
                product: S,
                onSuccess: p
            }),
            eb = (0, V.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, J.T)(S),
            { enabled: eC } = (0, A.WX)({ location: 'collectibles_shop_product_details_modal' }),
            eN = (0, ed._)(n.eligibleOffers),
            eA = null != eN,
            {
                checkoutEligiblePrices: eL,
                isOrbExclusive: eM,
                hasSufficientOrbs: eB
            } = (0, ex.Ip)({
                product: S,
                isPremiumUser: O,
                tab: x,
                hasDiscountOffer: eA
            }),
            eD = a.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: S.skuId,
                        analyticsLocations: y,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? p() : (0, eI.dG)())
                    }),
                [y, p, S.skuId, eb]
            );
        a.useEffect(() => {
            if (null != eu) return ((0, g.cV)(eu), () => (0, g.cV)(void 0));
        }, [eu]);
        let eH = (e, t) => {
                let n = () => {
                        (0, R.q)({
                            skuId: S.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, z.qg)({
                                    variantsReturnStyle: eb,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    p(),
                                    (0, ey.Z)({
                                        product: S,
                                        analyticsLocations: y,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: eO.o8.ORB
                                    }));
                            },
                            analyticsLocations: y
                        });
                    },
                    a = L ? eT.intl.string(eT.t.cTdr39) : eT.intl.string(eT.t.zqh7ZG),
                    i = !eB || L,
                    o = eT.intl.formatToPlainString(eT.t['fNG/09'], { orbPrice: e.amount }),
                    c = i ? ''.concat(o, ', ').concat(a) : o;
                return (0, r.jsx)(f.ua7, {
                    position: 'top',
                    text: a,
                    shouldShow: i,
                    'aria-label': !1,
                    children: (a) =>
                        (0, r.jsx)(
                            f.zxk,
                            eE(ek({}, a), {
                                variant: t ? 'primary' : 'secondary',
                                onClick: n,
                                disabled: i,
                                'aria-label': c,
                                text: eT.intl.format(eT.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () =>
                                        (0, r.jsx)(Z.Z, {
                                            className: eS.orbIconAligned,
                                            shouldUseThemeColor: i && !t
                                        })
                                }),
                                fullWidth: !0
                            })
                        )
                });
            },
            eU = (e, t) => {
                let n = !et && !el && !u.tq && !eM && B,
                    a = (0, W.x6)(S) ? eT.intl.string(eT.t.V1AWw8) : S.type === d.Z.PROFILE_EFFECT ? eT.intl.string(eT.t.kAeDcH) : S.type === d.Z.NAMEPLATE ? eT.intl.string(eT.t.H3vhqa) : eT.intl.string(eT.t.AQ0Ven);
                return (
                    eA ? (a = eT.intl.formatToPlainString(eT.t['5U5RBw'], { discountOfferAmount: eN })) : eC && (a = eT.intl.formatToPlainString(eT.t['cNSL/v'], { price: (0, U.T4)(e.amount, e.currency) })),
                    (0, r.jsxs)('div', {
                        className: eS.checkoutButtonsRow,
                        children: [
                            (0, r.jsx)(f.zxk, {
                                variant: t ? 'primary' : 'secondary',
                                onClick: eD,
                                text: a,
                                fullWidth: !0
                            }),
                            n &&
                                (0, r.jsx)(ei.Z, {
                                    primary: t,
                                    product: S,
                                    onSuccess: p
                                })
                        ]
                    })
                );
            },
            ez = (0, K.G)(S);
        return (0, r.jsxs)('div', {
            className: eS.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eS.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: c,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eZ, {
                    product: null != w ? w : S,
                    user: i
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eS.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: S,
                                    isDarkText: !ee,
                                    isOrbExclusive: eM
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eS.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: ez
                                }),
                                (0, r.jsx)(eR, { skuId: S.skuId }),
                                k.isPurchased || k.isPartiallyOwnedBundle
                                    ? (0, r.jsx)($.U, {
                                          className: eS.priceTag,
                                          isPartiallyPurchased: N
                                      })
                                    : et
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: eS.priceTag,
                                            children: eT.intl.string(eT.t.rt69oq)
                                        })
                                      : eC
                                        ? (0, r.jsx)(e_.a, {
                                              prices: eL,
                                              product: S,
                                              isPremiumUser: O,
                                              discount: ep,
                                              hasSufficientOrbs: eB,
                                              isProductDisabled: L,
                                              discountOfferAmount: eN
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eS.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(eo.Z, {
                                                      product: S,
                                                      discount: ep,
                                                      isPremiumUser: O,
                                                      hideStrikethroughPrice: !O || eA,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs',
                                                      discountOfferAmount: eN
                                                  }),
                                                  O || eA ? null : (0, r.jsx)(ec.Z, { product: S })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(f.Rny, {
                            children: (0, r.jsx)(ef.P, {
                                selectedVariantIndex: C,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: v,
                                className: eS.variantsSwitch
                            })
                        }),
                        null !== M &&
                            (0, r.jsx)(f.Text, {
                                variant: 'text-xs/normal',
                                className: eS.disabledReason,
                                children: M
                            }),
                        (0, r.jsx)('div', {
                            className: eS.buttonsContainer,
                            children:
                                !et || O || el
                                    ? B
                                        ? E
                                            ? (0, r.jsx)(f.zxk, {
                                                  variant: 'primary',
                                                  onClick: em,
                                                  loading: eg,
                                                  text: eT.intl.string(eT.t.MAS7uL),
                                                  fullWidth: !0
                                              })
                                            : et
                                              ? (0, r.jsx)(f.zxk, {
                                                    loading: D,
                                                    loadingStartedLabel: eT.intl.string(eT.t['TYw+9v']),
                                                    loadingFinishedLabel: eT.intl.string(eT.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, z.fK)(S.skuId),
                                                            p(),
                                                            (0, ey.Z)({
                                                                product: S,
                                                                analyticsLocations: y,
                                                                purchaseType: eO.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    text: eT.intl.string(eT.t.zp6caG),
                                                    fullWidth: !0
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eL.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eI.pK.DISCORD_ORB ? eH(e, n) : eU(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = eT.intl.string(eT.t.sEAnVF)),
                                      (0, r.jsx)(T.Z, {
                                          subscriptionTier: ew.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: es.v,
                                          onSubscribeModalClose: () => {
                                              (0, es.T)({
                                                  product: S,
                                                  category: c,
                                                  shouldCheckoutWithOrbs: l,
                                                  returnRef: b,
                                                  analyticsLocations: y
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(f.Text, {
                            className: o()(eS.disclaimer, !ee && eS.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !E ? eT.intl.string(eT.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eS.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(f.qEK, {
                    src: t.avatarSrc,
                    size: f.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: f.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: o()(eS.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eB = (e) => {
        let { user: t, nameplate: n } = e,
            a = (0, w.w$)();
        return (0, r.jsx)('div', {
            className: eS.nameplateRightPanePreviewContainer,
            role: 'img',
            'aria-label': eT.intl.string(eT.t.SZeUdX),
            children: (0, r.jsxs)(f.Rny, {
                children: [
                    (0, r.jsx)(eM, {
                        user: a.mallow,
                        innerClassName: eS.userBlue
                    }),
                    (0, r.jsxs)(f.Text, {
                        variant: 'text-sm/semibold',
                        className: eS.namplateRightPanePreviewSectionGroup,
                        children: [eT.intl.string(eT.t['yzW/fX']), ' - 3']
                    }),
                    (0, r.jsx)(eM, {
                        user: a.phibi,
                        innerClassName: eS.userPink
                    }),
                    (0, r.jsx)('div', {
                        className: eS.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(eb.Z, {
                            className: eS.nameplatePreview,
                            innerClassName: eS.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0
                        })
                    }),
                    (0, r.jsx)(eM, {
                        user: a.locke,
                        innerClassName: eS.userPink
                    }),
                    (0, r.jsxs)(f.Text, {
                        variant: 'text-sm/semibold',
                        className: eS.namplateRightPanePreviewSectionGroup,
                        children: [eT.intl.string(eT.t['NG43//']), ' - 12']
                    }),
                    (0, r.jsx)(eM, {
                        user: a.boom,
                        innerClassName: eS.userGreen
                    }),
                    (0, r.jsx)(eM, {
                        user: a.cherry,
                        innerClassName: eS.userGreen
                    })
                ]
            })
        });
    },
    eD = (e) => {
        let { product: t, user: n } = e,
            a = H.ZP.canUsePremiumProfileCustomization(n),
            i = (0, m.cj)([L.Z], () => L.Z.getAllPending()),
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
                        for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
                }
                return a;
            })(i, ['pendingAvatar']),
            s = (0, E.SD)({
                userId: n.id,
                image: o
            }),
            l = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: _ } = (0, Q.Rj)(t),
            f = null != _;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eS.previewsContainerInner : eS.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eB, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  S.Z,
                                  eE(ek({}, c), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: a,
                                      pendingAvatarDecoration: p,
                                      pendingProfileEffectId: null == _ ? void 0 : _.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !f,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: l,
                                      interactive: !1
                                  })
                              ),
                              l && (0, r.jsx)(eU, { user: n })
                          ]
                      })
        });
    },
    eH = (e) => {
        let { author: t } = e;
        return (0, x.e5)(
            eE(
                ek(
                    {},
                    (0, y.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eT.intl.string(eT.t.d5YwKy)
                    })
                ),
                {
                    state: ej.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eU = (e) => {
        let { user: t } = e,
            n = eH({ author: t });
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': eT.intl.string(eT.t['TN+ZvL']),
            children: (0, r.jsx)(f.Rny, {
                children: (0, r.jsxs)(f.Zbd, {
                    className: eS.chatPreview,
                    outline: !0,
                    'aria-hidden': !0,
                    children: [
                        (0, r.jsx)(
                            j.Z,
                            {
                                className: eS.mockMessage,
                                author: (0, O.ZH)(n),
                                message: n
                            },
                            n.id
                        ),
                        (0, r.jsxs)('div', {
                            className: eS.mockInput,
                            children: [
                                (0, r.jsx)(f.oFk, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: eS.mockInputButton
                                }),
                                (0, r.jsx)(f.EO4, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: eS.mockInputButton
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    ez = (e) => {
        let { transitionState: t, onClose: n, product: i, category: o, returnRef: c, analyticsSource: l, analyticsLocations: u, shouldCheckoutWithOrbs: _, tab: g } = e,
            b = (0, m.e7)([M.default], () => M.default.getCurrentUser()),
            h = (0, eC.f)(i),
            { previewingVariantIndex: C } = h,
            x = (0, m.e7)([F.Z], () => F.Z.purchases),
            y = (0, G.o)(i, x),
            O = (0, eh.N)(i, C),
            j = (0, ev.W)(i, y);
        s()(null != j, 'Selected product should not be null');
        let { analyticsLocations: w } = (0, P.ZP)([...u, v.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(j.skuId);
        let { pdpBackground: I, logo: T } = (0, eP.OR)(o, i);
        a.useEffect(() => {
            null != b && (0, N.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let S = a.useMemo(() => (0, W.jm)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            (B.default.track(ej.rMx.OPEN_MODAL, {
                type: ej.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: l,
                location_stack: w,
                sku_id: j.skuId,
                product_type: S
            }),
                j.items.forEach(z.oK));
        }, [l, w, j.skuId, j.items, S]);
        let k = (0, R.r)(),
            E = t === f.Dvm.EXITING;
        if (null == b) return null;
        let A = (0, eO.ZS)(o.skuId);
        return (0, r.jsx)(P.Gt, {
            value: w,
            children: (0, r.jsx)(f.Y0X, {
                'data-migration-pending': !0,
                hideShadow: !0,
                className: eS.modalRoot,
                returnRef: c,
                transitionState: t,
                size: f.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(f.hzk, {
                    'data-migration-pending': !0,
                    className: eS.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: b,
                            product: i,
                            category: o,
                            onClose: n,
                            previewingVariantIndexProps: h,
                            selectedVariantIndex: y,
                            shouldCheckoutWithOrbs: _,
                            tab: g
                        }),
                        (0, r.jsxs)('div', {
                            className: j.skuId === p.a.PREMIUM_TIER_2_3_DAY ? eS.fractionalNitroPreviewContainer : j.type === d.Z.AVATAR_DECORATION ? eS.collectiblePreviewsContainerWithChat : eS.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    asset: I,
                                    size: (0, el.ML)(540),
                                    className: eS.categoryBanner,
                                    categoryBannerOverride: A
                                }),
                                (0, eO.o0)(i.skuId)
                                    ? i.skuId === eO.Vt.ORB_PROFILE_BADGE
                                        ? k || E
                                            ? null
                                            : (0, r.jsx)(ep.M, { user: b })
                                        : i.skuId === p.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(em.b, {
                                                product: i,
                                                className: eS.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eD, {
                                          user: b,
                                          product: null != O ? O : j
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eS.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eS.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eS.titleImage,
                                                style: null == A ? void 0 : A.pdpLogoStyle,
                                                src: T,
                                                alt: o.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eS.headerButtonContainer,
                                            children: [
                                                (0, r.jsx)(et.n, {
                                                    skuId: j.skuId,
                                                    tab: g
                                                }),
                                                (0, r.jsx)(f.hU, {
                                                    'aria-label': eT.intl.string(eT.t.cpT0Cg),
                                                    onClick: n,
                                                    icon: f.Uz9,
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
