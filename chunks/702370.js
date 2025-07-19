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
    x = n(100527),
    g = n(906732),
    j = n(570908),
    C = n(786761),
    _ = n(3148),
    w = n(739566),
    O = n(753206),
    I = n(4242),
    y = n(333867),
    E = n(767714),
    S = n(678135),
    T = n(876917),
    k = n(643879),
    N = n(484459),
    Z = n(822857),
    R = n(960919),
    L = n(275388),
    A = n(25990),
    B = n(594174),
    D = n(626135),
    M = n(63063),
    U = n(74538),
    F = n(937615),
    H = n(335131),
    z = n(1870),
    G = n(429368),
    W = n(884697),
    V = n(72462),
    q = n(228624),
    K = n(635552),
    X = n(83479),
    Y = n(290175),
    J = n(905357),
    Q = n(724994),
    $ = n(328456),
    ee = n(390698),
    et = n(141011),
    en = n(525518),
    er = n(426171),
    ei = n(224068),
    ea = n(813083),
    el = n(680942),
    es = n(558060),
    eo = n(539598),
    ec = n(237031),
    eu = n(372654),
    ed = n(38914),
    em = n(259673),
    ef = n(508925),
    ep = n(953405),
    eh = n(453713),
    ev = n(616066),
    eP = n(22267),
    eb = n(332246),
    ex = n(58201),
    eg = n(794324),
    ej = n(361110),
    eC = n(956472),
    e_ = n(832149),
    ew = n(215023),
    eO = n(981631),
    eI = n(474936),
    ey = n(231338),
    eE = n(388032),
    eS = n(785218);
function eT(e) {
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
function ek(e, t) {
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
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            s = (0, P.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eS.bundleAvatarPreviewContainer : eS.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eS.bundlePfxPreviewContainer : eS.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(T.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
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
            className: eS.bundlePreviewContainer,
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
                                className: eS.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(h.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eS.bundleSlideTitle,
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
            : (0, ew.o0)(t.skuId)
              ? (0, r.jsx)(ef.b, {
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
    eL = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eS.learnMoreLink,
                  children: eE.intl.format(eE.t.Q1scdH, { helpdeskArticle: M.Z.getArticleURL(eO.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eA = (e) => {
        let t,
            { product: n, user: a, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: P, previewingVariantIndexProps: x, selectedVariantIndex: j, tab: C } = e,
            { analyticsLocations: _ } = (0, g.ZP)(),
            w = U.ZP.canUseCollectibles(a),
            { previewingVariantIndex: O } = x,
            I = (0, eb.N)(n, O),
            S = (0, ex.W)(n, j);
        o()(null != S, 'Selected product should not be null');
        let T = (0, Q.L)(n),
            { isPurchased: k, isPartiallyOwnedBundle: N } = (0, Q.L)(S),
            { isDisabled: A, disabledReason: B } = (0, Y.G)(S.skuId),
            D = (0, W.ne)({
                product: S,
                isPartiallyOwnedBundle: N,
                isPurchased: k
            }),
            M = (0, f.e7)([z.Z], () => z.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            G = (0, b.ZP)(),
            V = (0, p.wj)(G),
            et = (0, W.G1)(S),
            en = (0, W.ql)(S, eO.tuJ.DEFAULT),
            er = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: eu } = (0, $.Rj)(null != I ? I : S),
            ed = i.useMemo(() => (0, W.BH)(S, w), [S, w]),
            { handleUseNow: em, isApplying: ef } = (0, K.W)({
                product: S,
                onSuccess: m
            }),
            ev = (0, q.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, J.T)(S),
            { enabled: eg } = (0, Z.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: ej,
                isOrbExclusive: eN,
                hasSufficientOrbs: eZ
            } = (0, eC.Ip)({
                product: S,
                isPremiumUser: w,
                tab: C
            }),
            eA = i.useCallback(
                () =>
                    (0, y.Z)({
                        skuId: S.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: ev,
                        onClose: (e) => (e ? m() : (0, ey.dG)())
                    }),
                [_, m, S.skuId, ev]
            );
        i.useEffect(() => {
            if (null != eu) return ((0, v.cV)(eu), () => (0, v.cV)(void 0));
        }, [eu]);
        let eB = (e, t) => {
                let n = () => {
                        (0, L.q)({
                            skuId: S.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, H.qg)({
                                    variantsReturnStyle: ev,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, e_.Z)({
                                        product: S,
                                        analyticsLocations: _,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: ew.o8.ORB
                                    }));
                            },
                            analyticsLocations: _
                        });
                    },
                    i = A ? eE.intl.string(eE.t.cTdr39) : eE.intl.string(eE.t.zqh7ZG),
                    a = !eZ || A,
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
                            ek(eT({}, i), {
                                variant: t ? 'primary' : 'secondary',
                                onClick: n,
                                disabled: a,
                                'aria-label': s,
                                text: eE.intl.format(eE.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () =>
                                        (0, r.jsx)(R.Z, {
                                            className: eS.orbIconAligned,
                                            shouldUseThemeColor: a
                                        })
                                }),
                                fullWidth: !0
                            })
                        )
                });
            },
            eD = (e, t) => {
                let n = !et && !er && !u.tq && !eN && D,
                    i = (0, W.x6)(S) ? eE.intl.string(eE.t.V1AWw8) : S.type === d.Z.PROFILE_EFFECT ? eE.intl.string(eE.t.kAeDcH) : S.type === d.Z.NAMEPLATE ? eE.intl.string(eE.t.H3vhqa) : eE.intl.string(eE.t.AQ0Ven),
                    a = eg ? eE.intl.formatToPlainString(eE.t['cNSL/v'], { price: (0, F.T4)(e.amount, e.currency) }) : i;
                return (0, r.jsxs)('div', {
                    className: eS.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            variant: t ? 'primary' : 'secondary',
                            onClick: eA,
                            text: a,
                            fullWidth: !0
                        }),
                        n &&
                            (0, r.jsx)(el.Z, {
                                product: S,
                                onSuccess: m
                            })
                    ]
                });
            },
            eM = (0, X.G)(S);
        return (0, r.jsxs)('div', {
            className: eS.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eS.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: s,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eR, {
                    product: null != I ? I : S,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eS.description,
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    product: S,
                                    isDarkText: !V,
                                    isOrbExclusive: eN
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eS.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eM
                                }),
                                (0, r.jsx)(eL, { skuId: S.skuId }),
                                T.isPurchased || T.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: eS.priceTag,
                                          isPartiallyPurchased: N
                                      })
                                    : et
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eS.priceTag,
                                            children: eE.intl.string(eE.t.rt69oq)
                                        })
                                      : eg
                                        ? (0, r.jsx)(ep.a, {
                                              prices: ej,
                                              product: S,
                                              isPremiumUser: w,
                                              discount: ed,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: A
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eS.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(es.Z, {
                                                      product: S,
                                                      discount: ed,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs'
                                                  }),
                                                  w ? null : (0, r.jsx)(eo.Z, { product: S })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(eh.P, {
                                selectedVariantIndex: j,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: x,
                                className: eS.variantsSwitch
                            })
                        }),
                        null !== B &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eS.disabledReason,
                                children: B
                            }),
                        (0, r.jsx)('div', {
                            className: eS.buttonsContainer,
                            children:
                                !et || w || er
                                    ? D
                                        ? k
                                            ? (0, r.jsx)(h.zxk, {
                                                  variant: 'primary',
                                                  onClick: em,
                                                  loading: ef,
                                                  text: eE.intl.string(eE.t.MAS7uL),
                                                  fullWidth: !0
                                              })
                                            : et
                                              ? (0, r.jsx)(h.zxk, {
                                                    loading: M,
                                                    loadingStartedLabel: eE.intl.string(eE.t['TYw+9v']),
                                                    loadingFinishedLabel: eE.intl.string(eE.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, H.fK)(S.skuId),
                                                            m(),
                                                            (0, e_.Z)({
                                                                product: S,
                                                                analyticsLocations: _,
                                                                purchaseType: ew.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    text: eE.intl.string(eE.t.zp6caG),
                                                    fullWidth: !0
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ej.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === ey.pK.DISCORD_ORB ? eB(e, n) : eD(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = eE.intl.string(eE.t.sEAnVF)),
                                      (0, r.jsx)(E.Z, {
                                          subscriptionTier: eI.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: ec.v,
                                          onSubscribeModalClose: () => {
                                              (0, ec.T)({
                                                  product: S,
                                                  category: s,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: P,
                                                  analyticsLocations: _
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(h.Text, {
                            className: l()(eS.disclaimer, !V && eS.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !k ? eE.intl.string(eE.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eB = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eS.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: h.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: l()(eS.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsx)('div', {
            className: eS.nameplateRightPanePreviewContainer,
            role: 'img',
            'aria-label': eE.intl.string(eE.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eB, {
                        user: i.mallow,
                        innerClassName: eS.userBlue
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: 'text-sm/semibold',
                        className: eS.namplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t['yzW/fX']), ' - 3']
                    }),
                    (0, r.jsx)(eB, {
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
                    (0, r.jsx)(eB, {
                        user: i.locke,
                        innerClassName: eS.userPink
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: 'text-sm/semibold',
                        className: eS.namplateRightPanePreviewSectionGroup,
                        children: [eE.intl.string(eE.t['NG43//']), ' - 12']
                    }),
                    (0, r.jsx)(eB, {
                        user: i.boom,
                        innerClassName: eS.userGreen
                    }),
                    (0, r.jsx)(eB, {
                        user: i.cherry,
                        innerClassName: eS.userGreen
                    })
                ]
            })
        });
    },
    eM = (e) => {
        let { product: t, user: n } = e,
            i = U.ZP.canUsePremiumProfileCustomization(n),
            a = (0, f.cj)([A.Z], () => A.Z.getAllPending()),
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
            o = (0, k.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: p } = (0, $.Rj)(t),
            h = null != p;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eS.previewsContainerInner : eS.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eD, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  S.Z,
                                  ek(eT({}, s), {
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
            ek(
                eT(
                    {},
                    (0, _.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eE.intl.string(eE.t.d5YwKy)
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
            n = eU({ author: t });
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': eE.intl.string(eE.t['TN+ZvL']),
            children: (0, r.jsx)(h.Rny, {
                children: (0, r.jsxs)(h.Zbd, {
                    className: eS.chatPreview,
                    outline: !0,
                    'aria-hidden': !0,
                    children: [
                        (0, r.jsx)(
                            O.Z,
                            {
                                className: eS.mockMessage,
                                author: (0, w.ZH)(n),
                                message: n
                            },
                            n.id
                        ),
                        (0, r.jsxs)('div', {
                            className: eS.mockInput,
                            children: [
                                (0, r.jsx)(h.oFk, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: eS.mockInputButton
                                }),
                                (0, r.jsx)(h.EO4, {
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
    eH = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: v } = e,
            P = (0, f.e7)([B.default], () => B.default.getCurrentUser()),
            b = (0, ej.f)(a),
            { previewingVariantIndex: j } = b,
            C = (0, f.e7)([z.Z], () => z.Z.purchases),
            _ = (0, G.o)(a, C),
            w = (0, eb.N)(a, j),
            O = (0, ex.W)(a, _);
        o()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, g.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.u9)(O.skuId);
        let y = (0, V.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: S } = (0, eg.OR)(l, a);
        i.useEffect(() => {
            null != P && (0, N.Z)(P.id, P.getAvatarURL(void 0, 80));
        }, [P]);
        let T = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            (D.default.track(eO.rMx.OPEN_MODAL, {
                type: eO.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: I,
                sku_id: O.skuId,
                product_type: T
            }),
                O.items.forEach(H.oK));
        }, [c, I, O.skuId, O.items, T]);
        let k = (0, L.r)(),
            Z = t === h.Dvm.EXITING;
        if (null == P) return null;
        let R = (0, ew.ZS)(l.skuId);
        return (0, r.jsx)(g.Gt, {
            value: I,
            children: (0, r.jsx)(h.Y0X, {
                hideShadow: !0,
                className: eS.modalRoot,
                returnRef: s,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(h.hzk, {
                    className: eS.modalContent,
                    children: [
                        (0, r.jsx)(eA, {
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
                            className: O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eS.fractionalNitroPreviewContainer : O.type === d.Z.AVATAR_DECORATION ? eS.collectiblePreviewsContainerWithChat : eS.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    asset: E,
                                    size: (0, eu.ML)(540),
                                    className: eS.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, ew.o0)(a.skuId)
                                    ? a.skuId === ew.Vt.ORB_PROFILE_BADGE
                                        ? k || Z
                                            ? null
                                            : (0, r.jsx)(em.M, { user: P })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(ed.q, {})
                                          : (0, r.jsx)(ef.b, {
                                                product: a,
                                                className: eS.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: P,
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
                                                src: S,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eS.headerButtonContainer,
                                            children: [
                                                y &&
                                                    (0, r.jsx)(en.n, {
                                                        skuId: O.skuId,
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
