(n.d(t, { default: () => ez }), n(388685), n(314940), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    p = n(399606),
    h = n(780384),
    f = n(481060),
    v = n(809206),
    P = n(727637),
    x = n(410030),
    b = n(100527),
    g = n(906732),
    C = n(570908),
    _ = n(786761),
    j = n(3148),
    w = n(739566),
    I = n(753206),
    k = n(4242),
    O = n(333867),
    E = n(767714),
    N = n(678135),
    T = n(876917),
    S = n(643879),
    y = n(484459),
    L = n(822857),
    R = n(960919),
    Z = n(275388),
    A = n(25990),
    B = n(594174),
    D = n(626135),
    M = n(63063),
    U = n(74538),
    z = n(937615),
    F = n(335131),
    H = n(1870),
    G = n(429368),
    V = n(884697),
    W = n(72462),
    q = n(228624),
    K = n(635552),
    Y = n(83479),
    Q = n(290175),
    X = n(905357),
    J = n(724994),
    $ = n(328456),
    ee = n(390698),
    et = n(141011),
    en = n(525518),
    er = n(426171),
    ei = n(224068),
    el = n(813083),
    ea = n(680942),
    es = n(558060),
    eo = n(237031),
    ec = n(372654),
    eu = n(38914),
    ed = n(259673),
    em = n(508925),
    ep = n(953405),
    eh = n(453713),
    ef = n(616066),
    ev = n(22267),
    eP = n(332246),
    ex = n(58201),
    eb = n(794324),
    eg = n(361110),
    eC = n(956472),
    e_ = n(832149),
    ej = n(215023),
    ew = n(981631),
    eI = n(474936),
    ek = n(231338),
    eO = n(388032),
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
let eS = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            a = i.useRef(null),
            s = (0, P.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: l ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                    children: (0, r.jsx)(ef.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: l ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
                    ref: a,
                    children: (0, r.jsx)(T.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: a,
                    className: eE.nameplatePreviewContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: eE.nameplatePreview,
                        nameplate: t,
                        isHighlighted: s,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: 'large'
                    })
                })
            )
            .otherwise(() => null);
    },
    ey = (e) => {
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
        let s = t.items.length;
        return (0, r.jsx)('div', {
            className: eE.bundlePreviewContainer,
            children: (0, r.jsx)(f.MyZ, {
                activeSlide: String(l),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        a = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = '('.concat(i + 1, '/').concat(s, ')');
                    return (0, r.jsx)(
                        f.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)('div', {
                                className: eE.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eS, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eE.bundleSlideTitle,
                                        children: [null == a ? void 0 : a.name, ' ', o]
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
    eL = (e) => {
        let { product: t, user: n } = e;
        return (0, V.x6)(t)
            ? (0, r.jsx)(ey, {
                  product: t,
                  user: n
              })
            : (0, ej.o0)(t.skuId)
              ? (0, r.jsx)(em.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(eS, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eR = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(f.Text, {
                  variant: 'text-sm/normal',
                  className: eE.learnMoreLink,
                  children: eO.intl.format(eO.t.Q1scdH, { helpdeskArticle: M.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eZ = (e) => {
        let t,
            { product: n, user: l, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: P, previewingVariantIndexProps: b, selectedVariantIndex: C, tab: _ } = e,
            { analyticsLocations: j } = (0, g.ZP)(),
            w = U.ZP.canUseCollectibles(l),
            { previewingVariantIndex: I } = b,
            k = (0, eP.N)(n, I),
            N = (0, ex.W)(n, C);
        o()(null != N, 'Selected product should not be null');
        let T = (0, J.L)(n),
            { isPurchased: S, isPartiallyOwnedBundle: y } = (0, J.L)(N),
            { isDisabled: A, disabledReason: B } = (0, Q.G)(N.skuId),
            D = (0, V.ne)({
                product: N,
                isPartiallyOwnedBundle: y,
                isPurchased: S
            }),
            M = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            G = (0, x.ZP)(),
            W = (0, h.wj)(G),
            et = (0, V.G1)(N),
            en = (0, V.ql)(N, ew.tuJ.DEFAULT),
            er = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: ec } = (0, $.Rj)(null != k ? k : N),
            eu = i.useMemo(() => (0, V.BH)(N, w), [N, w]),
            { handleUseNow: ed, isApplying: em } = (0, K.W)({
                product: N,
                onSuccess: m
            }),
            ef = (0, q.hv)('CollectiblesProductPreviewInfo'),
            ev = (0, X.T)(N),
            { enabled: eb } = (0, L.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eg,
                isOrbExclusive: eS,
                hasSufficientOrbs: ey
            } = (0, eC.Ip)({
                product: N,
                isPremiumUser: w,
                tab: _
            }),
            eZ = i.useCallback(
                () =>
                    (0, O.Z)({
                        skuId: N.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: ef,
                        onClose: (e) => (e ? m() : (0, ek.dG)())
                    }),
                [j, m, N.skuId, ef]
            );
        i.useEffect(() => {
            if (null != ec) return ((0, v.cV)(ec), () => (0, v.cV)(void 0));
        }, [ec]);
        let eA = (e, t) => {
                let n = () => {
                        (0, Z.q)({
                            skuId: N.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, F.qg)({
                                    variantsReturnStyle: ef,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, e_.Z)({
                                        product: N,
                                        analyticsLocations: j,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: ej.o8.ORB
                                    }));
                            },
                            analyticsLocations: j
                        });
                    },
                    i = A ? eO.intl.string(eO.t.cTdr39) : eO.intl.string(eO.t.zqh7ZG),
                    l = !ey || A;
                return (0, r.jsx)(f.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: l,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            f.zxk,
                            eT(eN({}, i), {
                                innerClassName: eE.button,
                                look: f.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: l,
                                color: t ? f.zxk.Colors.BRAND : f.zxk.Colors.PRIMARY,
                                children: eO.intl.format(eO.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(R.Z, { shouldUseThemeColor: l })
                                })
                            })
                        )
                });
            },
            eB = (e, t) => {
                let n = !et && !er && !u.tq && !eS && D,
                    i = t ? f.zxk.Colors.BRAND : f.zxk.Colors.PRIMARY,
                    l = (0, V.x6)(N) ? eO.intl.string(eO.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eO.intl.string(eO.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eO.intl.string(eO.t.H3vhqa) : eO.intl.string(eO.t.AQ0Ven),
                    a = eb ? eO.intl.formatToPlainString(eO.t['cNSL/v'], { price: (0, z.T4)(e.amount, e.currency) }) : l;
                return (0, r.jsxs)('div', {
                    className: eE.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(f.zxk, {
                            className: eE.primaryButton,
                            innerClassName: eE.button,
                            look: f.zxk.Looks.FILLED,
                            onClick: eZ,
                            color: i,
                            children: a
                        }),
                        n &&
                            (0, r.jsx)(ea.Z, {
                                product: N,
                                onSuccess: m,
                                color: i
                            })
                    ]
                });
            },
            eD = (0, Y.G)(N);
        return (0, r.jsxs)('div', {
            className: eE.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eE.titleContainer,
                    children: (0, r.jsx)(el.Z, {
                        category: s,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eL, {
                    product: null != k ? k : N,
                    user: l
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    product: N,
                                    isDarkText: !W,
                                    isOrbExclusive: eS
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eE.headingWithItemTypePill,
                                    children: ev
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eD
                                }),
                                (0, r.jsx)(eR, { skuId: N.skuId }),
                                T.isPurchased || T.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: y
                                      })
                                    : et
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: eE.priceTag,
                                            children: eO.intl.string(eO.t.rt69oq)
                                        })
                                      : eb
                                        ? (0, r.jsx)(ep.a, {
                                              prices: eg,
                                              product: N,
                                              isPremiumUser: w,
                                              discount: eu,
                                              hasSufficientOrbs: ey,
                                              isProductDisabled: A
                                          })
                                        : (0, r.jsx)(es.Z, {
                                              product: N,
                                              discount: eu,
                                              isPremiumUser: w,
                                              className: w ? eE.priceTag : eE.priceTagContainer,
                                              nitroUpsell: !w
                                          })
                            ]
                        }),
                        (0, r.jsx)(f.Rny, {
                            children: (0, r.jsx)(eh.P, {
                                selectedVariantIndex: C,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: b,
                                className: eE.variantsSwitch
                            })
                        }),
                        null !== B &&
                            (0, r.jsx)(f.Text, {
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
                                            ? (0, r.jsx)(f.zxk, {
                                                  className: eE.button,
                                                  look: f.zxk.Looks.FILLED,
                                                  onClick: ed,
                                                  submitting: em,
                                                  children: eO.intl.string(eO.t.MAS7uL)
                                              })
                                            : et
                                              ? (0, r.jsx)(f.zxk, {
                                                    className: eE.button,
                                                    look: f.zxk.Looks.FILLED,
                                                    submitting: M,
                                                    submittingStartedLabel: eO.intl.string(eO.t['TYw+9v']),
                                                    submittingFinishedLabel: eO.intl.string(eO.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, F.fK)(N.skuId),
                                                            m(),
                                                            (0, e_.Z)({
                                                                product: N,
                                                                analyticsLocations: j,
                                                                purchaseType: ej.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    children: eO.intl.string(eO.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eg.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === ek.pK.DISCORD_ORB ? eA(e, n) : eB(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = eO.intl.string(eO.t.sEAnVF)),
                                      (0, r.jsx)(E.Z, {
                                          subscriptionTier: eI.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: eo.v,
                                          onSubscribeModalClose: () => {
                                              (0, eo.T)({
                                                  product: N,
                                                  category: s,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: P,
                                                  analyticsLocations: j
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(f.Text, {
                            className: a()(eE.disclaimer, !W && eE.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !S ? eO.intl.string(eO.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eA = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eE.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(f.qEK, {
                    src: t.avatarSrc,
                    size: f.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: f.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: a()(eE.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eB = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, k.w$)();
        return (0, r.jsxs)('div', {
            className: eE.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eA, {
                    user: i.mallow,
                    innerClassName: eE.userBlue
                }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eE.namplateRightPanePreviewSectionGroup,
                    children: [eO.intl.string(eO.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eA, {
                    user: i.phibi,
                    innerClassName: eE.userPink
                }),
                (0, r.jsx)('div', {
                    className: eE.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: eE.nameplatePreview,
                        innerClassName: eE.userPink,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eA, {
                    user: i.locke,
                    innerClassName: eE.userPink
                }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eE.namplateRightPanePreviewSectionGroup,
                    children: [eO.intl.string(eO.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eA, {
                    user: i.boom,
                    innerClassName: eE.userGreen
                }),
                (0, r.jsx)(eA, {
                    user: i.cherry,
                    innerClassName: eE.userGreen
                })
            ]
        });
    },
    eD = (e) => {
        let { product: t, user: n } = e,
            i = U.ZP.canUsePremiumProfileCustomization(n),
            l = (0, p.cj)([A.Z], () => A.Z.getAllPending()),
            { pendingAvatar: a } = l,
            s = (function (e, t) {
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
            o = (0, S.SD)({
                userId: n.id,
                image: a
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: h } = (0, $.Rj)(t),
            f = null != h;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eE.previewsContainerInner : eE.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eB, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  N.Z,
                                  eT(eN({}, s), {
                                      pendingAvatar: o,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == h ? void 0 : h.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !f,
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
    eM = (e) => {
        let { author: t } = e;
        return (0, _.e5)(
            eT(
                eN(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eO.intl.string(eO.t.d5YwKy)
                    })
                ),
                {
                    state: ew.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eU = (e) => {
        let { user: t } = e,
            n = eM({ author: t });
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsxs)(f.Zbd, {
                className: eE.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        I.Z,
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
                            (0, r.jsx)(f.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eE.mockInputButton
                            }),
                            (0, r.jsx)(f.EO4, {
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
    ez = (e) => {
        let { transitionState: t, onClose: n, product: l, category: a, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: h, tab: v } = e,
            P = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            x = (0, eg.f)(l),
            { previewingVariantIndex: C } = x,
            _ = (0, p.e7)([H.Z], () => H.Z.purchases),
            j = (0, G.o)(l, _),
            w = (0, eP.N)(l, C),
            I = (0, ex.W)(l, j);
        o()(null != I, 'Selected product should not be null');
        let { analyticsLocations: k } = (0, g.ZP)([...u, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.u9)(I.skuId);
        let O = (0, W.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: N } = (0, eb.OR)(a, l);
        i.useEffect(() => {
            null != P && (0, y.Z)(P.id, P.getAvatarURL(void 0, 80));
        }, [P]);
        let T = i.useMemo(() => (0, V.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            (D.default.track(ew.rMx.OPEN_MODAL, {
                type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: k,
                sku_id: I.skuId,
                product_type: T
            }),
                I.items.forEach(F.oK));
        }, [c, k, I.skuId, I.items, T]);
        let S = (0, Z.r)(),
            L = t === f.Dvm.EXITING;
        if (null == P) return null;
        let R = (0, ej.ZS)(a.skuId);
        return (0, r.jsx)(g.Gt, {
            value: k,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: eE.modalRoot,
                returnRef: s,
                transitionState: t,
                size: f.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(f.hzk, {
                    className: eE.modalContent,
                    children: [
                        (0, r.jsx)(eZ, {
                            user: P,
                            product: l,
                            category: a,
                            onClose: n,
                            previewingVariantIndexProps: x,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: h,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: I.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : I.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    asset: E,
                                    size: (0, ec.ML)(540),
                                    className: eE.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, ej.o0)(l.skuId)
                                    ? l.skuId === ej.Vt.ORB_PROFILE_BADGE
                                        ? S || L
                                            ? null
                                            : (0, r.jsx)(ed.M, { user: P })
                                        : l.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(em.b, {
                                                product: l,
                                                className: eE.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eD, {
                                          user: P,
                                          product: null != w ? w : I
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eE.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eE.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eE.titleImage,
                                                style: null == R ? void 0 : R.pdpLogoStyle,
                                                src: N,
                                                alt: a.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eE.headerButtonContainer,
                                            children: [
                                                O &&
                                                    (0, r.jsx)(en.B, {
                                                        skuId: I.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(f.olH, {
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
