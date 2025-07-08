(n.d(t, { default: () => eU }), n(388685), n(314940), n(953529));
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
    h = n(481060),
    v = n(809206),
    b = n(727637),
    P = n(410030),
    x = n(100527),
    g = n(906732),
    C = n(570908),
    j = n(786761),
    _ = n(3148),
    w = n(739566),
    O = n(753206),
    I = n(4242),
    k = n(333867),
    y = n(767714),
    E = n(678135),
    N = n(876917),
    S = n(643879),
    T = n(484459),
    L = n(822857),
    R = n(960919),
    Z = n(275388),
    A = n(25990),
    B = n(594174),
    D = n(626135),
    M = n(63063),
    z = n(74538),
    F = n(937615),
    U = n(335131),
    H = n(1870),
    G = n(429368),
    V = n(884697),
    W = n(72462),
    q = n(228624),
    K = n(635552),
    Y = n(83479),
    X = n(290175),
    J = n(905357),
    Q = n(724994),
    $ = n(328456),
    ee = n(390698),
    et = n(141011),
    en = n(525518),
    er = n(426171),
    ei = n(224068),
    el = n(813083),
    ea = n(680942),
    eo = n(558060),
    es = n(539598),
    ec = n(237031),
    eu = n(372654),
    ed = n(38914),
    em = n(259673),
    ep = n(508925),
    ef = n(953405),
    eh = n(453713),
    ev = n(616066),
    eb = n(22267),
    eP = n(332246),
    ex = n(58201),
    eg = n(794324),
    eC = n(361110),
    ej = n(956472),
    e_ = n(832149),
    ew = n(215023),
    eO = n(981631),
    eI = n(474936),
    ek = n(231338),
    ey = n(388032),
    eE = n(785218);
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
function eS(e, t) {
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
let eT = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            o = (0, b.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: l ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: l ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
                    ref: a,
                    children: (0, r.jsx)(N.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: a,
                    className: eE.nameplatePreviewContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: eE.nameplatePreview,
                        nameplate: t,
                        isHighlighted: o,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: 'large'
                    })
                })
            )
            .otherwise(() => null);
    },
    eL = (e) => {
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
            className: eE.bundlePreviewContainer,
            children: (0, r.jsx)(h.MyZ, {
                activeSlide: String(l),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        a = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = '('.concat(i + 1, '/').concat(o, ')');
                    return (0, r.jsx)(
                        h.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)('div', {
                                className: eE.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eT, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(h.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eE.bundleSlideTitle,
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
    eR = (e) => {
        let { product: t, user: n } = e;
        return (0, V.x6)(t)
            ? (0, r.jsx)(eL, {
                  product: t,
                  user: n
              })
            : (0, ew.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(eT, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eZ = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eE.learnMoreLink,
                  children: ey.intl.format(ey.t.Q1scdH, { helpdeskArticle: M.Z.getArticleURL(eO.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eA = (e) => {
        let t,
            { product: n, user: l, category: o, shouldCheckoutWithOrbs: c, onClose: m, returnRef: b, previewingVariantIndexProps: x, selectedVariantIndex: C, tab: j } = e,
            { analyticsLocations: _ } = (0, g.ZP)(),
            w = z.ZP.canUseCollectibles(l),
            { previewingVariantIndex: O } = x,
            I = (0, eP.N)(n, O),
            E = (0, ex.W)(n, C);
        s()(null != E, 'Selected product should not be null');
        let N = (0, Q.L)(n),
            { isPurchased: S, isPartiallyOwnedBundle: T } = (0, Q.L)(E),
            { isDisabled: A, disabledReason: B } = (0, X.G)(E.skuId),
            D = (0, V.ne)({
                product: E,
                isPartiallyOwnedBundle: T,
                isPurchased: S
            }),
            M = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            G = (0, P.ZP)(),
            W = (0, f.wj)(G),
            et = (0, V.G1)(E),
            en = (0, V.ql)(E, eO.tuJ.DEFAULT),
            er = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: eu } = (0, $.Rj)(null != I ? I : E),
            ed = i.useMemo(() => (0, V.BH)(E, w), [E, w]),
            { handleUseNow: em, isApplying: ep } = (0, K.W)({
                product: E,
                onSuccess: m
            }),
            ev = (0, q.hv)('CollectiblesProductPreviewInfo'),
            eb = (0, J.T)(E),
            { enabled: eg } = (0, L.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eC,
                isOrbExclusive: eT,
                hasSufficientOrbs: eL
            } = (0, ej.Ip)({
                product: E,
                isPremiumUser: w,
                tab: j
            }),
            eA = i.useCallback(
                () =>
                    (0, k.Z)({
                        skuId: E.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: ev,
                        onClose: (e) => (e ? m() : (0, ek.dG)())
                    }),
                [_, m, E.skuId, ev]
            );
        i.useEffect(() => {
            if (null != eu) return ((0, v.cV)(eu), () => (0, v.cV)(void 0));
        }, [eu]);
        let eB = (e, t) => {
                let n = () => {
                        (0, Z.q)({
                            skuId: E.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, U.qg)({
                                    variantsReturnStyle: ev,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, e_.Z)({
                                        product: E,
                                        analyticsLocations: _,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: ew.o8.ORB
                                    }));
                            },
                            analyticsLocations: _
                        });
                    },
                    i = A ? ey.intl.string(ey.t.cTdr39) : ey.intl.string(ey.t.zqh7ZG),
                    l = !eL || A;
                return (0, r.jsx)(h.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: l,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zxk,
                            eS(eN({}, i), {
                                innerClassName: eE.button,
                                look: h.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: l,
                                color: t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                                children: ey.intl.format(ey.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(R.Z, { shouldUseThemeColor: l })
                                })
                            })
                        )
                });
            },
            eD = (e, t) => {
                let n = !et && !er && !u.tq && !eT && D,
                    i = t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                    l = (0, V.x6)(E) ? ey.intl.string(ey.t.V1AWw8) : E.type === d.Z.PROFILE_EFFECT ? ey.intl.string(ey.t.kAeDcH) : E.type === d.Z.NAMEPLATE ? ey.intl.string(ey.t.H3vhqa) : ey.intl.string(ey.t.AQ0Ven),
                    a = eg ? ey.intl.formatToPlainString(ey.t['cNSL/v'], { price: (0, F.T4)(e.amount, e.currency) }) : l;
                return (0, r.jsxs)('div', {
                    className: eE.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            className: eE.primaryButton,
                            innerClassName: eE.button,
                            look: h.zxk.Looks.FILLED,
                            onClick: eA,
                            color: i,
                            children: a
                        }),
                        n &&
                            (0, r.jsx)(ea.Z, {
                                product: E,
                                onSuccess: m,
                                color: i
                            })
                    ]
                });
            },
            eM = (0, Y.G)(E);
        return (0, r.jsxs)('div', {
            className: eE.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eE.titleContainer,
                    children: (0, r.jsx)(el.Z, {
                        category: o,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eR, {
                    product: null != I ? I : E,
                    user: l
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    product: E,
                                    isDarkText: !W,
                                    isOrbExclusive: eT
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eE.headingWithItemTypePill,
                                    children: eb
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eM
                                }),
                                (0, r.jsx)(eZ, { skuId: E.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: T
                                      })
                                    : et
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eE.priceTag,
                                            children: ey.intl.string(ey.t.rt69oq)
                                        })
                                      : eg
                                        ? (0, r.jsx)(ef.a, {
                                              prices: eC,
                                              product: E,
                                              isPremiumUser: w,
                                              discount: ed,
                                              hasSufficientOrbs: eL,
                                              isProductDisabled: A
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eE.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(eo.Z, {
                                                      product: E,
                                                      discount: ed,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs'
                                                  }),
                                                  w ? null : (0, r.jsx)(es.Z, { product: E })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(eh.P, {
                                selectedVariantIndex: C,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: x,
                                className: eE.variantsSwitch
                            })
                        }),
                        null !== B &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eE.disabledReason,
                                children: B
                            }),
                        (0, r.jsx)('div', {
                            className: eE.buttonsContainer,
                            children:
                                !et || w || er
                                    ? D
                                        ? S
                                            ? (0, r.jsx)(h.zxk, {
                                                  className: eE.button,
                                                  look: h.zxk.Looks.FILLED,
                                                  onClick: em,
                                                  submitting: ep,
                                                  children: ey.intl.string(ey.t.MAS7uL)
                                              })
                                            : et
                                              ? (0, r.jsx)(h.zxk, {
                                                    className: eE.button,
                                                    look: h.zxk.Looks.FILLED,
                                                    submitting: M,
                                                    submittingStartedLabel: ey.intl.string(ey.t['TYw+9v']),
                                                    submittingFinishedLabel: ey.intl.string(ey.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, U.fK)(E.skuId),
                                                            m(),
                                                            (0, e_.Z)({
                                                                product: E,
                                                                analyticsLocations: _,
                                                                purchaseType: ew.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    children: ey.intl.string(ey.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eC.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === ek.pK.DISCORD_ORB ? eB(e, n) : eD(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = ey.intl.string(ey.t.sEAnVF)),
                                      (0, r.jsx)(y.Z, {
                                          subscriptionTier: eI.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: ec.v,
                                          onSubscribeModalClose: () => {
                                              (0, ec.T)({
                                                  product: E,
                                                  category: o,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: b,
                                                  analyticsLocations: _
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(h.Text, {
                            className: a()(eE.disclaimer, !W && eE.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !S ? ey.intl.string(ey.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eB = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eE.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: h.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: a()(eE.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsxs)('div', {
            className: eE.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eB, {
                    user: i.mallow,
                    innerClassName: eE.userBlue
                }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eE.namplateRightPanePreviewSectionGroup,
                    children: [ey.intl.string(ey.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eB, {
                    user: i.phibi,
                    innerClassName: eE.userPink
                }),
                (0, r.jsx)('div', {
                    className: eE.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: eE.nameplatePreview,
                        innerClassName: eE.userPink,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eB, {
                    user: i.locke,
                    innerClassName: eE.userPink
                }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eE.namplateRightPanePreviewSectionGroup,
                    children: [ey.intl.string(ey.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eB, {
                    user: i.boom,
                    innerClassName: eE.userGreen
                }),
                (0, r.jsx)(eB, {
                    user: i.cherry,
                    innerClassName: eE.userGreen
                })
            ]
        });
    },
    eM = (e) => {
        let { product: t, user: n } = e,
            i = z.ZP.canUsePremiumProfileCustomization(n),
            l = (0, p.cj)([A.Z], () => A.Z.getAllPending()),
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
            s = (0, S.SD)({
                userId: n.id,
                image: a
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, $.Rj)(t),
            h = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eE.previewsContainerInner : eE.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  E.Z,
                                  eS(eN({}, o), {
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
                              c && (0, r.jsx)(eF, { user: n })
                          ]
                      })
        });
    },
    ez = (e) => {
        let { author: t } = e;
        return (0, j.e5)(
            eS(
                eN(
                    {},
                    (0, _.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ey.intl.string(ey.t.d5YwKy)
                    })
                ),
                {
                    state: eO.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eF = (e) => {
        let { user: t } = e,
            n = ez({ author: t });
        return (0, r.jsx)(h.Rny, {
            children: (0, r.jsxs)(h.Zbd, {
                className: eE.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        O.Z,
                        {
                            className: eE.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: eE.mockInput,
                        children: [
                            (0, r.jsx)(h.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eE.mockInputButton
                            }),
                            (0, r.jsx)(h.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eE.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eU = (e) => {
        let { transitionState: t, onClose: n, product: l, category: a, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: v } = e,
            b = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            P = (0, eC.f)(l),
            { previewingVariantIndex: C } = P,
            j = (0, p.e7)([H.Z], () => H.Z.purchases),
            _ = (0, G.o)(l, j),
            w = (0, eP.N)(l, C),
            O = (0, ex.W)(l, _);
        s()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, g.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.u9)(O.skuId);
        let k = (0, W.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: y, logo: E } = (0, eg.OR)(a, l);
        i.useEffect(() => {
            null != b && (0, T.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let N = i.useMemo(() => (0, V.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            (D.default.track(eO.rMx.OPEN_MODAL, {
                type: eO.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: I,
                sku_id: O.skuId,
                product_type: N
            }),
                O.items.forEach(U.oK));
        }, [c, I, O.skuId, O.items, N]);
        let S = (0, Z.r)(),
            L = t === h.Dvm.EXITING;
        if (null == b) return null;
        let R = (0, ew.ZS)(a.skuId);
        return (0, r.jsx)(g.Gt, {
            value: I,
            children: (0, r.jsx)(h.Y0X, {
                hideShadow: !0,
                className: eE.modalRoot,
                returnRef: o,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(h.hzk, {
                    className: eE.modalContent,
                    children: [
                        (0, r.jsx)(eA, {
                            user: b,
                            product: l,
                            category: a,
                            onClose: n,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: f,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : O.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    asset: y,
                                    size: (0, eu.ML)(540),
                                    className: eE.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, ew.o0)(l.skuId)
                                    ? l.skuId === ew.Vt.ORB_PROFILE_BADGE
                                        ? S || L
                                            ? null
                                            : (0, r.jsx)(em.M, { user: b })
                                        : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(ed.q, {})
                                          : (0, r.jsx)(ep.b, {
                                                product: l,
                                                className: eE.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: b,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eE.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eE.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eE.titleImage,
                                                style: null == R ? void 0 : R.pdpLogoStyle,
                                                src: E,
                                                alt: a.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eE.headerButtonContainer,
                                            children: [
                                                k &&
                                                    (0, r.jsx)(en.B, {
                                                        skuId: O.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(h.olH, {
                                                    onClick: n,
                                                    className: eE.modalCloseButton,
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
