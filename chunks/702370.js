(n.d(t, { default: () => eH }), n(388685), n(314940), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    p = n(399606),
    f = n(780384),
    h = n(755721),
    v = n(481060),
    b = n(809206),
    P = n(727637),
    x = n(410030),
    g = n(100527),
    C = n(906732),
    j = n(570908),
    _ = n(786761),
    w = n(3148),
    O = n(739566),
    I = n(753206),
    y = n(4242),
    E = n(333867),
    k = n(767714),
    N = n(678135),
    S = n(876917),
    T = n(643879),
    L = n(484459),
    R = n(822857),
    Z = n(960919),
    A = n(275388),
    B = n(25990),
    D = n(594174),
    M = n(626135),
    z = n(63063),
    F = n(74538),
    U = n(937615),
    H = n(335131),
    G = n(1870),
    V = n(429368),
    W = n(884697),
    q = n(72462),
    K = n(228624),
    Y = n(635552),
    X = n(83479),
    J = n(290175),
    Q = n(905357),
    $ = n(724994),
    ee = n(328456),
    et = n(390698),
    en = n(141011),
    er = n(525518),
    ei = n(426171),
    el = n(224068),
    ea = n(813083),
    eo = n(680942),
    es = n(558060),
    ec = n(539598),
    eu = n(237031),
    ed = n(372654),
    em = n(38914),
    ep = n(259673),
    ef = n(508925),
    eh = n(953405),
    ev = n(453713),
    eb = n(616066),
    eP = n(22267),
    ex = n(332246),
    eg = n(58201),
    eC = n(794324),
    ej = n(361110),
    e_ = n(956472),
    ew = n(832149),
    eO = n(215023),
    eI = n(981631),
    ey = n(474936),
    eE = n(231338),
    ek = n(388032),
    eN = n(785218);
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
function eT(e, t) {
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
let eL = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, P.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: l ? eN.bundleAvatarPreviewContainer : eN.avatarPreviewContainer,
                    children: (0, r.jsx)(eb.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: l ? eN.bundlePfxPreviewContainer : eN.pfxPreviewContainer,
                    ref: a,
                    children: (0, r.jsx)(S.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: a,
                    className: eN.nameplatePreviewContainer,
                    children: (0, r.jsx)(eP.Z, {
                        className: eN.nameplatePreview,
                        nameplate: t,
                        isHighlighted: o,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: 'large'
                    })
                })
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
        return (0, r.jsx)('div', {
            className: eN.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(l),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        a = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = '('.concat(i + 1, '/').concat(o, ')');
                    return (0, r.jsx)(
                        v.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)('div', {
                                className: eN.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eL, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eN.bundleSlideTitle,
                                        children: [null == a ? void 0 : a.name, ' ', s]
                                    })
                                ]
                            })
                        },
                        l
                    );
                })
            })
        });
    },
    eZ = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eR, {
                  product: t,
                  user: n
              })
            : (0, eO.o0)(t.skuId)
              ? (0, r.jsx)(ef.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(eL, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eA = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: 'text-sm/normal',
                  className: eN.learnMoreLink,
                  children: ek.intl.format(ek.t.Q1scdH, { helpdeskArticle: z.Z.getArticleURL(eI.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eB = (e) => {
        let t,
            { product: n, user: l, category: o, shouldCheckoutWithOrbs: c, onClose: m, returnRef: P, previewingVariantIndexProps: g, selectedVariantIndex: j, tab: _ } = e,
            { analyticsLocations: w } = (0, C.ZP)(),
            O = F.ZP.canUseCollectibles(l),
            { previewingVariantIndex: I } = g,
            y = (0, ex.N)(n, I),
            N = (0, eg.W)(n, j);
        s()(null != N, 'Selected product should not be null');
        let S = (0, $.L)(n),
            { isPurchased: T, isPartiallyOwnedBundle: L } = (0, $.L)(N),
            { isDisabled: B, disabledReason: D } = (0, J.G)(N.skuId),
            M = (0, W.ne)({
                product: N,
                isPartiallyOwnedBundle: L,
                isPurchased: T
            }),
            z = (0, p.e7)([G.Z], () => G.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            V = (0, x.ZP)(),
            q = (0, f.wj)(V),
            en = (0, W.G1)(N),
            er = (0, W.ql)(N, eI.tuJ.DEFAULT),
            ei = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: ed } = (0, ee.Rj)(null != y ? y : N),
            em = i.useMemo(() => (0, W.BH)(N, O), [N, O]),
            { handleUseNow: ep, isApplying: ef } = (0, Y.W)({
                product: N,
                onSuccess: m
            }),
            eb = (0, K.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, Q.T)(N),
            { enabled: eC } = (0, R.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: eL,
                hasSufficientOrbs: eR
            } = (0, e_.Ip)({
                product: N,
                isPremiumUser: O,
                tab: _
            }),
            eB = i.useCallback(
                () =>
                    (0, E.Z)({
                        skuId: N.skuId,
                        analyticsLocations: w,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? m() : (0, eE.dG)())
                    }),
                [w, m, N.skuId, eb]
            );
        i.useEffect(() => {
            if (null != ed) return ((0, b.cV)(ed), () => (0, b.cV)(void 0));
        }, [ed]);
        let eD = (e, t) => {
                let n = () => {
                        (0, A.q)({
                            skuId: N.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, H.qg)({
                                    variantsReturnStyle: eb,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, ew.Z)({
                                        product: N,
                                        analyticsLocations: w,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: eO.o8.ORB
                                    }));
                            },
                            analyticsLocations: w
                        });
                    },
                    i = B ? ek.intl.string(ek.t.cTdr39) : ek.intl.string(ek.t.zqh7ZG),
                    l = !eR || B;
                return (0, r.jsx)(v.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: l,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zx,
                            eT(eS({}, i), {
                                innerClassName: eN.button,
                                look: h.zx.Looks.FILLED,
                                onClick: n,
                                disabled: l,
                                color: t ? h.zx.Colors.BRAND : h.zx.Colors.PRIMARY,
                                children: ek.intl.format(ek.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(Z.Z, { shouldUseThemeColor: l })
                                })
                            })
                        )
                });
            },
            eM = (e, t) => {
                let n = !en && !ei && !u.tq && !eL && M,
                    i = t ? h.zx.Colors.BRAND : h.zx.Colors.PRIMARY,
                    l = (0, W.x6)(N) ? ek.intl.string(ek.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqa) : ek.intl.string(ek.t.AQ0Ven),
                    a = eC ? ek.intl.formatToPlainString(ek.t['cNSL/v'], { price: (0, U.T4)(e.amount, e.currency) }) : l;
                return (0, r.jsxs)('div', {
                    className: eN.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zx, {
                            className: eN.primaryButton,
                            innerClassName: eN.button,
                            look: h.zx.Looks.FILLED,
                            onClick: eB,
                            color: i,
                            children: a
                        }),
                        n &&
                            (0, r.jsx)(eo.Z, {
                                product: N,
                                onSuccess: m,
                                color: i
                            })
                    ]
                });
            },
            ez = (0, X.G)(N);
        return (0, r.jsxs)('div', {
            className: eN.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eN.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: o,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eZ, {
                    product: null != y ? y : N,
                    user: l
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eN.description,
                            children: [
                                (0, r.jsx)(el.Z, {
                                    product: N,
                                    isDarkText: !q,
                                    isOrbExclusive: eL
                                }),
                                (0, r.jsx)(v.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eN.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: ez
                                }),
                                (0, r.jsx)(eA, { skuId: N.skuId }),
                                S.isPurchased || S.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: eN.priceTag,
                                          isPartiallyPurchased: L
                                      })
                                    : en
                                      ? (0, r.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: eN.priceTag,
                                            children: ek.intl.string(ek.t.rt69oq)
                                        })
                                      : eC
                                        ? (0, r.jsx)(eh.a, {
                                              prices: ej,
                                              product: N,
                                              isPremiumUser: O,
                                              discount: em,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: B
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eN.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: N,
                                                      discount: em,
                                                      isPremiumUser: O,
                                                      hideStrikethroughPrice: !O,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs'
                                                  }),
                                                  O ? null : (0, r.jsx)(ec.Z, { product: N })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(v.Rny, {
                            children: (0, r.jsx)(ev.P, {
                                selectedVariantIndex: j,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: g,
                                className: eN.variantsSwitch
                            })
                        }),
                        null !== D &&
                            (0, r.jsx)(v.Text, {
                                variant: 'text-xs/normal',
                                className: eN.disabledReason,
                                children: D
                            }),
                        (0, r.jsx)('div', {
                            className: eN.buttonsContainer,
                            children:
                                !en || O || ei
                                    ? M
                                        ? T
                                            ? (0, r.jsx)(h.zx, {
                                                  className: eN.button,
                                                  look: h.zx.Looks.FILLED,
                                                  onClick: ep,
                                                  submitting: ef,
                                                  children: ek.intl.string(ek.t.MAS7uL)
                                              })
                                            : en
                                              ? (0, r.jsx)(h.zx, {
                                                    className: eN.button,
                                                    look: h.zx.Looks.FILLED,
                                                    submitting: z,
                                                    submittingStartedLabel: ek.intl.string(ek.t['TYw+9v']),
                                                    submittingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, H.fK)(N.skuId),
                                                            m(),
                                                            (0, ew.Z)({
                                                                product: N,
                                                                analyticsLocations: w,
                                                                purchaseType: eO.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    children: ek.intl.string(ek.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ej.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eE.pK.DISCORD_ORB ? eD(e, n) : eM(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = ek.intl.string(ek.t.sEAnVF)),
                                      (0, r.jsx)(k.Z, {
                                          subscriptionTier: ey.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: eu.v,
                                          onSubscribeModalClose: () => {
                                              (0, eu.T)({
                                                  product: N,
                                                  category: o,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: P,
                                                  analyticsLocations: w
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(v.Text, {
                            className: a()(eN.disclaimer, !q && eN.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: en && !T ? ek.intl.string(ek.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eD = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eN.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: v.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: a()(eN.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eM = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, y.w$)();
        return (0, r.jsxs)('div', {
            className: eN.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eD, {
                    user: i.mallow,
                    innerClassName: eN.userBlue
                }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [ek.intl.string(ek.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eD, {
                    user: i.phibi,
                    innerClassName: eN.userPink
                }),
                (0, r.jsx)('div', {
                    className: eN.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(eP.Z, {
                        className: eN.nameplatePreview,
                        innerClassName: eN.userPink,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eD, {
                    user: i.locke,
                    innerClassName: eN.userPink
                }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [ek.intl.string(ek.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eD, {
                    user: i.boom,
                    innerClassName: eN.userGreen
                }),
                (0, r.jsx)(eD, {
                    user: i.cherry,
                    innerClassName: eN.userGreen
                })
            ]
        });
    },
    ez = (e) => {
        let { product: t, user: n } = e,
            i = F.ZP.canUsePremiumProfileCustomization(n),
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
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(l, ['pendingAvatar']),
            s = (0, T.SD)({
                userId: n.id,
                image: a
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, ee.Rj)(t),
            h = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eN.previewsContainerInner : eN.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eM, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  N.Z,
                                  eT(eS({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !h,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: c
                                  })
                              ),
                              c && (0, r.jsx)(eU, { user: n })
                          ]
                      })
        });
    },
    eF = (e) => {
        let { author: t } = e;
        return (0, _.e5)(
            eT(
                eS(
                    {},
                    (0, w.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ek.intl.string(ek.t.d5YwKy)
                    })
                ),
                {
                    state: eI.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eU = (e) => {
        let { user: t } = e,
            n = eF({ author: t });
        return (0, r.jsx)(v.Rny, {
            children: (0, r.jsxs)(v.Zbd, {
                className: eN.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        I.Z,
                        {
                            className: eN.mockMessage,
                            author: (0, O.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: eN.mockInput,
                        children: [
                            (0, r.jsx)(v.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eN.mockInputButton
                            }),
                            (0, r.jsx)(v.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eN.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eH = (e) => {
        let { transitionState: t, onClose: n, product: l, category: a, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: h } = e,
            b = (0, p.e7)([D.default], () => D.default.getCurrentUser()),
            P = (0, ej.f)(l),
            { previewingVariantIndex: x } = P,
            j = (0, p.e7)([G.Z], () => G.Z.purchases),
            _ = (0, V.o)(l, j),
            w = (0, ex.N)(l, x),
            O = (0, eg.W)(l, _);
        s()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, C.ZP)([...u, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(O.skuId);
        let y = (0, q.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: k } = (0, eC.OR)(a, l);
        i.useEffect(() => {
            null != b && (0, L.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let N = i.useMemo(() => (0, W.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            (M.default.track(eI.rMx.OPEN_MODAL, {
                type: eI.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: I,
                sku_id: O.skuId,
                product_type: N
            }),
                O.items.forEach(H.oK));
        }, [c, I, O.skuId, O.items, N]);
        let S = (0, A.r)(),
            T = t === v.Dvm.EXITING;
        if (null == b) return null;
        let R = (0, eO.ZS)(a.skuId);
        return (0, r.jsx)(C.Gt, {
            value: I,
            children: (0, r.jsx)(v.Y0X, {
                hideShadow: !0,
                className: eN.modalRoot,
                returnRef: o,
                transitionState: t,
                size: v.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(v.hzk, {
                    className: eN.modalContent,
                    children: [
                        (0, r.jsx)(eB, {
                            user: b,
                            product: l,
                            category: a,
                            onClose: n,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: f,
                            tab: h
                        }),
                        (0, r.jsxs)('div', {
                            className: O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eN.fractionalNitroPreviewContainer : O.type === d.Z.AVATAR_DECORATION ? eN.collectiblePreviewsContainerWithChat : eN.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(en.Z, {
                                    asset: E,
                                    size: (0, ed.ML)(540),
                                    className: eN.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, eO.o0)(l.skuId)
                                    ? l.skuId === eO.Vt.ORB_PROFILE_BADGE
                                        ? S || T
                                            ? null
                                            : (0, r.jsx)(ep.M, { user: b })
                                        : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(em.q, {})
                                          : (0, r.jsx)(ef.b, {
                                                product: l,
                                                className: eN.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(ez, {
                                          user: b,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eN.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eN.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eN.titleImage,
                                                style: null == R ? void 0 : R.pdpLogoStyle,
                                                src: k,
                                                alt: a.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eN.headerButtonContainer,
                                            children: [
                                                y &&
                                                    (0, r.jsx)(er.B, {
                                                        skuId: O.skuId,
                                                        tab: h
                                                    }),
                                                (0, r.jsx)(v.olH, {
                                                    onClick: n,
                                                    className: eN.modalCloseButton,
                                                    withCircleBackground: !0
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
