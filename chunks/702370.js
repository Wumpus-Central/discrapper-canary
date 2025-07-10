(n.d(t, { default: () => eH }), n(388685), n(314940), n(953529));
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
    S = n(678135),
    N = n(876917),
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
    ea = n(224068),
    el = n(813083),
    eo = n(680942),
    es = n(558060),
    ec = n(539598),
    eu = n(237031),
    ed = n(372654),
    em = n(38914),
    ef = n(259673),
    ep = n(508925),
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
    eS = n(785218);
function eN(e) {
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
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, P.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eS.bundleAvatarPreviewContainer : eS.avatarPreviewContainer,
                    children: (0, r.jsx)(eb.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eS.bundlePfxPreviewContainer : eS.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(N.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: l,
                    className: eS.nameplatePreviewContainer,
                    children: (0, r.jsx)(eP.Z, {
                        className: eS.nameplatePreview,
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
        return (0, r.jsx)('div', {
            className: eS.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = '('.concat(i + 1, '/').concat(o, ')');
                    return (0, r.jsx)(
                        v.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)('div', {
                                className: eS.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eL, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eS.bundleSlideTitle,
                                        children: [null == l ? void 0 : l.name, ' ', s]
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
    eZ = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eR, {
                  product: t,
                  user: n
              })
            : (0, eO.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
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
                  className: eS.learnMoreLink,
                  children: ek.intl.format(ek.t.Q1scdH, { helpdeskArticle: z.Z.getArticleURL(eI.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eB = (e) => {
        let t,
            { product: n, user: a, category: o, shouldCheckoutWithOrbs: c, onClose: m, returnRef: P, previewingVariantIndexProps: g, selectedVariantIndex: j, tab: _ } = e,
            { analyticsLocations: w } = (0, C.ZP)(),
            O = F.ZP.canUseCollectibles(a),
            { previewingVariantIndex: I } = g,
            y = (0, ex.N)(n, I),
            S = (0, eg.W)(n, j);
        s()(null != S, 'Selected product should not be null');
        let N = (0, $.L)(n),
            { isPurchased: T, isPartiallyOwnedBundle: L } = (0, $.L)(S),
            { isDisabled: B, disabledReason: D } = (0, J.G)(S.skuId),
            M = (0, W.ne)({
                product: S,
                isPartiallyOwnedBundle: L,
                isPurchased: T
            }),
            z = (0, f.e7)([G.Z], () => G.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            V = (0, x.ZP)(),
            q = (0, p.wj)(V),
            en = (0, W.G1)(S),
            er = (0, W.ql)(S, eI.tuJ.DEFAULT),
            ei = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: ed } = (0, ee.Rj)(null != y ? y : S),
            em = i.useMemo(() => (0, W.BH)(S, O), [S, O]),
            { handleUseNow: ef, isApplying: ep } = (0, Y.W)({
                product: S,
                onSuccess: m
            }),
            eb = (0, K.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, Q.T)(S),
            { enabled: eC } = (0, R.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: eL,
                hasSufficientOrbs: eR
            } = (0, e_.Ip)({
                product: S,
                isPremiumUser: O,
                tab: _
            }),
            eB = i.useCallback(
                () =>
                    (0, E.Z)({
                        skuId: S.skuId,
                        analyticsLocations: w,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? m() : (0, eE.dG)())
                    }),
                [w, m, S.skuId, eb]
            );
        i.useEffect(() => {
            if (null != ed) return ((0, b.cV)(ed), () => (0, b.cV)(void 0));
        }, [ed]);
        let eD = (e, t) => {
                let n = () => {
                        (0, A.q)({
                            skuId: S.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, H.qg)({
                                    variantsReturnStyle: eb,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, ew.Z)({
                                        product: S,
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
                    a = !eR || B;
                return (0, r.jsx)(v.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zx,
                            eT(eN({}, i), {
                                innerClassName: eS.button,
                                look: h.zx.Looks.FILLED,
                                onClick: n,
                                disabled: a,
                                color: t ? h.zx.Colors.BRAND : h.zx.Colors.PRIMARY,
                                children: ek.intl.format(ek.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(Z.Z, { shouldUseThemeColor: a })
                                })
                            })
                        )
                });
            },
            eM = (e, t) => {
                let n = !en && !ei && !u.tq && !eL && M,
                    i = t ? h.zx.Colors.BRAND : h.zx.Colors.PRIMARY,
                    a = (0, W.x6)(S) ? ek.intl.string(ek.t.V1AWw8) : S.type === d.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcH) : S.type === d.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqa) : ek.intl.string(ek.t.AQ0Ven),
                    l = eC ? ek.intl.formatToPlainString(ek.t['cNSL/v'], { price: (0, U.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eS.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zx, {
                            className: eS.primaryButton,
                            innerClassName: eS.button,
                            look: h.zx.Looks.FILLED,
                            onClick: eB,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(eo.Z, {
                                product: S,
                                onSuccess: m,
                                color: i
                            })
                    ]
                });
            },
            ez = (0, X.G)(S);
        return (0, r.jsxs)('div', {
            className: eS.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eS.titleContainer,
                    children: (0, r.jsx)(el.Z, {
                        category: o,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eZ, {
                    product: null != y ? y : S,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eS.description,
                            children: [
                                (0, r.jsx)(ea.Z, {
                                    product: S,
                                    isDarkText: !q,
                                    isOrbExclusive: eL
                                }),
                                (0, r.jsx)(v.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eS.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: ez
                                }),
                                (0, r.jsx)(eA, { skuId: S.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(et.U, {
                                          className: eS.priceTag,
                                          isPartiallyPurchased: L
                                      })
                                    : en
                                      ? (0, r.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: eS.priceTag,
                                            children: ek.intl.string(ek.t.rt69oq)
                                        })
                                      : eC
                                        ? (0, r.jsx)(eh.a, {
                                              prices: ej,
                                              product: S,
                                              isPremiumUser: O,
                                              discount: em,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: B
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eS.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: S,
                                                      discount: em,
                                                      isPremiumUser: O,
                                                      hideStrikethroughPrice: !O,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs'
                                                  }),
                                                  O ? null : (0, r.jsx)(ec.Z, { product: S })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(v.Rny, {
                            children: (0, r.jsx)(ev.P, {
                                selectedVariantIndex: j,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: g,
                                className: eS.variantsSwitch
                            })
                        }),
                        null !== D &&
                            (0, r.jsx)(v.Text, {
                                variant: 'text-xs/normal',
                                className: eS.disabledReason,
                                children: D
                            }),
                        (0, r.jsx)('div', {
                            className: eS.buttonsContainer,
                            children:
                                !en || O || ei
                                    ? M
                                        ? T
                                            ? (0, r.jsx)(h.zx, {
                                                  className: eS.button,
                                                  look: h.zx.Looks.FILLED,
                                                  onClick: ef,
                                                  submitting: ep,
                                                  children: ek.intl.string(ek.t.MAS7uL)
                                              })
                                            : en
                                              ? (0, r.jsx)(h.zx, {
                                                    className: eS.button,
                                                    look: h.zx.Looks.FILLED,
                                                    submitting: z,
                                                    submittingStartedLabel: ek.intl.string(ek.t['TYw+9v']),
                                                    submittingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, H.fK)(S.skuId),
                                                            m(),
                                                            (0, ew.Z)({
                                                                product: S,
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
                                                  product: S,
                                                  category: o,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: P,
                                                  analyticsLocations: w
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(v.Text, {
                            className: l()(eS.disclaimer, !q && eS.disclaimerLight),
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
            className: eS.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: v.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: l()(eS.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eM = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, y.w$)();
        return (0, r.jsxs)('div', {
            className: eS.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eD, {
                    user: i.mallow,
                    innerClassName: eS.userBlue
                }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eS.namplateRightPanePreviewSectionGroup,
                    children: [ek.intl.string(ek.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eD, {
                    user: i.phibi,
                    innerClassName: eS.userPink
                }),
                (0, r.jsx)('div', {
                    className: eS.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(eP.Z, {
                        className: eS.nameplatePreview,
                        innerClassName: eS.userPink,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eD, {
                    user: i.locke,
                    innerClassName: eS.userPink
                }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eS.namplateRightPanePreviewSectionGroup,
                    children: [ek.intl.string(ek.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eD, {
                    user: i.boom,
                    innerClassName: eS.userGreen
                }),
                (0, r.jsx)(eD, {
                    user: i.cherry,
                    innerClassName: eS.userGreen
                })
            ]
        });
    },
    ez = (e) => {
        let { product: t, user: n } = e,
            i = F.ZP.canUsePremiumProfileCustomization(n),
            a = (0, f.cj)([B.Z], () => B.Z.getAllPending()),
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
                        for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(a, ['pendingAvatar']),
            s = (0, T.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: p } = (0, ee.Rj)(t),
            h = null != p;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eS.previewsContainerInner : eS.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eM, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  S.Z,
                                  eT(eN({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == p ? void 0 : p.id,
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
                eN(
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
                className: eS.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        I.Z,
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
                            (0, r.jsx)(v.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eS.mockInputButton
                            }),
                            (0, r.jsx)(v.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eS.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eH = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: h } = e,
            b = (0, f.e7)([D.default], () => D.default.getCurrentUser()),
            P = (0, ej.f)(a),
            { previewingVariantIndex: x } = P,
            j = (0, f.e7)([G.Z], () => G.Z.purchases),
            _ = (0, V.o)(a, j),
            w = (0, ex.N)(a, x),
            O = (0, eg.W)(a, _);
        s()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, C.ZP)([...u, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(O.skuId);
        let y = (0, q.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: k } = (0, eC.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, L.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let S = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            (M.default.track(eI.rMx.OPEN_MODAL, {
                type: eI.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: I,
                sku_id: O.skuId,
                product_type: S
            }),
                O.items.forEach(H.oK));
        }, [c, I, O.skuId, O.items, S]);
        let N = (0, A.r)(),
            T = t === v.Dvm.EXITING;
        if (null == b) return null;
        let R = (0, eO.ZS)(l.skuId);
        return (0, r.jsx)(C.Gt, {
            value: I,
            children: (0, r.jsx)(v.Y0X, {
                hideShadow: !0,
                className: eS.modalRoot,
                returnRef: o,
                transitionState: t,
                size: v.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(v.hzk, {
                    className: eS.modalContent,
                    children: [
                        (0, r.jsx)(eB, {
                            user: b,
                            product: a,
                            category: l,
                            onClose: n,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: p,
                            tab: h
                        }),
                        (0, r.jsxs)('div', {
                            className: O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eS.fractionalNitroPreviewContainer : O.type === d.Z.AVATAR_DECORATION ? eS.collectiblePreviewsContainerWithChat : eS.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(en.Z, {
                                    asset: E,
                                    size: (0, ed.ML)(540),
                                    className: eS.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, eO.o0)(a.skuId)
                                    ? a.skuId === eO.Vt.ORB_PROFILE_BADGE
                                        ? N || T
                                            ? null
                                            : (0, r.jsx)(ef.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(em.q, {})
                                          : (0, r.jsx)(ep.b, {
                                                product: a,
                                                className: eS.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(ez, {
                                          user: b,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eS.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eS.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eS.titleImage,
                                                style: null == R ? void 0 : R.pdpLogoStyle,
                                                src: k,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eS.headerButtonContainer,
                                            children: [
                                                y &&
                                                    (0, r.jsx)(er.B, {
                                                        skuId: O.skuId,
                                                        tab: h
                                                    }),
                                                (0, r.jsx)(v.olH, {
                                                    onClick: n,
                                                    className: eS.modalCloseButton,
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
