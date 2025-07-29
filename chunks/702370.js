(n.d(t, { default: () => eF }), n(388685), n(314940), n(953529));
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
    ed = n(259673),
    em = n(508925),
    ef = n(953405),
    ep = n(453713),
    eh = n(616066),
    ev = n(22267),
    eP = n(332246),
    eb = n(58201),
    ex = n(794324),
    eg = n(361110),
    ej = n(956472),
    eC = n(832149),
    e_ = n(215023),
    ew = n(981631),
    eO = n(474936),
    eI = n(231338),
    ey = n(388032),
    eE = n(785218);
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
let eN = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            s = (0, P.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                    children: (0, r.jsx)(eh.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
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
    ek = (e) => {
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
            className: eE.bundlePreviewContainer,
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
                                className: eE.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eN, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(h.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eE.bundleSlideTitle,
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
    eZ = (e) => {
        let { product: t, user: n } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(ek, {
                  product: t,
                  user: n
              })
            : (0, e_.o0)(t.skuId)
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
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eE.learnMoreLink,
                  children: ey.intl.format(ey.t.Q1scdH, { helpdeskArticle: M.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eA = (e) => {
        let t,
            { product: n, user: a, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: P, previewingVariantIndexProps: x, selectedVariantIndex: j, tab: C } = e,
            { analyticsLocations: _ } = (0, g.ZP)(),
            w = U.ZP.canUseCollectibles(a),
            { previewingVariantIndex: O } = x,
            I = (0, eP.N)(n, O),
            T = (0, eb.W)(n, j);
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
            ed = i.useMemo(() => (0, W.BH)(T, w), [T, w]),
            { handleUseNow: em, isApplying: eh } = (0, q.W)({
                product: T,
                onSuccess: m
            }),
            ev = (0, V.hv)('CollectiblesProductPreviewInfo'),
            ex = (0, Y.T)(T),
            { enabled: eg } = (0, Z.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eN,
                isOrbExclusive: ek,
                hasSufficientOrbs: eA
            } = (0, ej.Ip)({
                product: T,
                isPremiumUser: w,
                tab: C
            }),
            eL = i.useCallback(
                () =>
                    (0, y.Z)({
                        skuId: T.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: ev,
                        onClose: (e) => (e ? m() : (0, eI.dG)())
                    }),
                [_, m, T.skuId, ev]
            );
        i.useEffect(() => {
            if (null != eu) return ((0, v.cV)(eu), () => (0, v.cV)(void 0));
        }, [eu]);
        let eB = (e, t) => {
                let n = () => {
                        (0, A.q)({
                            skuId: T.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, H.qg)({
                                    variantsReturnStyle: ev,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, eC.Z)({
                                        product: T,
                                        analyticsLocations: _,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: e_.o8.ORB
                                    }));
                            },
                            analyticsLocations: _
                        });
                    },
                    i = L ? ey.intl.string(ey.t.cTdr39) : ey.intl.string(ey.t.zqh7ZG),
                    a = !eA || L,
                    l = ey.intl.formatToPlainString(ey.t['fNG/09'], { orbPrice: e.amount }),
                    s = a ? ''.concat(l, ', ').concat(i) : l;
                return (0, r.jsx)(h.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zxk,
                            eS(eT({}, i), {
                                variant: t ? 'primary' : 'secondary',
                                onClick: n,
                                disabled: a,
                                'aria-label': s,
                                text: ey.intl.format(ey.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () =>
                                        (0, r.jsx)(R.Z, {
                                            className: eE.orbIconAligned,
                                            shouldUseThemeColor: a
                                        })
                                }),
                                fullWidth: !0
                            })
                        )
                });
            },
            eD = (e, t) => {
                let n = !et && !ec && !u.tq && !ek && D,
                    i = (0, W.x6)(T) ? ey.intl.string(ey.t.V1AWw8) : T.type === d.Z.PROFILE_EFFECT ? ey.intl.string(ey.t.kAeDcH) : T.type === d.Z.NAMEPLATE ? ey.intl.string(ey.t.H3vhqa) : ey.intl.string(ey.t.AQ0Ven),
                    a = eg ? ey.intl.formatToPlainString(ey.t['cNSL/v'], { price: (0, F.T4)(e.amount, e.currency) }) : i;
                return (0, r.jsxs)('div', {
                    className: eE.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            variant: t ? 'primary' : 'secondary',
                            onClick: eL,
                            text: a,
                            fullWidth: !0
                        }),
                        n &&
                            (0, r.jsx)(ea.Z, {
                                primary: t,
                                product: T,
                                onSuccess: m
                            })
                    ]
                });
            },
            eM = (0, K.G)(T);
        return (0, r.jsxs)('div', {
            className: eE.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eE.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: s,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eZ, {
                    product: null != I ? I : T,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: T,
                                    isDarkText: !ee,
                                    isOrbExclusive: ek
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eE.headingWithItemTypePill,
                                    children: ex
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eM
                                }),
                                (0, r.jsx)(eR, { skuId: T.skuId }),
                                S.isPurchased || S.isPartiallyOwnedBundle
                                    ? (0, r.jsx)($.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: k
                                      })
                                    : et
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eE.priceTag,
                                            children: ey.intl.string(ey.t.rt69oq)
                                        })
                                      : eg
                                        ? (0, r.jsx)(ef.a, {
                                              prices: eN,
                                              product: T,
                                              isPremiumUser: w,
                                              discount: ed,
                                              hasSufficientOrbs: eA,
                                              isProductDisabled: L
                                          })
                                        : (0, r.jsxs)('div', {
                                              className: eE.priceTagContainer,
                                              children: [
                                                  (0, r.jsx)(el.Z, {
                                                      product: T,
                                                      discount: ed,
                                                      isPremiumUser: w,
                                                      hideStrikethroughPrice: !w,
                                                      nitroIconType: 'tooltip',
                                                      nitroIconSize: 'xs'
                                                  }),
                                                  w ? null : (0, r.jsx)(es.Z, { product: T })
                                              ]
                                          })
                            ]
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(ep.P, {
                                selectedVariantIndex: j,
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
                                !et || w || ec
                                    ? D
                                        ? N
                                            ? (0, r.jsx)(h.zxk, {
                                                  variant: 'primary',
                                                  onClick: em,
                                                  loading: eh,
                                                  text: ey.intl.string(ey.t.MAS7uL),
                                                  fullWidth: !0
                                              })
                                            : et
                                              ? (0, r.jsx)(h.zxk, {
                                                    loading: M,
                                                    loadingStartedLabel: ey.intl.string(ey.t['TYw+9v']),
                                                    loadingFinishedLabel: ey.intl.string(ey.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, H.fK)(T.skuId),
                                                            m(),
                                                            (0, eC.Z)({
                                                                product: T,
                                                                analyticsLocations: _,
                                                                purchaseType: e_.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    text: ey.intl.string(ey.t.zp6caG),
                                                    fullWidth: !0
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eN.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eI.pK.DISCORD_ORB ? eB(e, n) : eD(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = ey.intl.string(ey.t.sEAnVF)),
                                      (0, r.jsx)(E.Z, {
                                          subscriptionTier: eO.Si.TIER_2,
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
                            className: l()(eE.disclaimer, !ee && eE.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !N ? ey.intl.string(ey.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eL = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eE.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(j.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: h.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: l()(eE.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eB = (e) => {
        let { user: t, nameplate: n } = e,
            i = (0, I.w$)();
        return (0, r.jsx)('div', {
            className: eE.nameplateRightPanePreviewContainer,
            role: 'img',
            'aria-label': ey.intl.string(ey.t.SZeUdX),
            children: (0, r.jsxs)(h.Rny, {
                children: [
                    (0, r.jsx)(eL, {
                        user: i.mallow,
                        innerClassName: eE.userBlue
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: 'text-sm/semibold',
                        className: eE.namplateRightPanePreviewSectionGroup,
                        children: [ey.intl.string(ey.t['yzW/fX']), ' - 3']
                    }),
                    (0, r.jsx)(eL, {
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
                    (0, r.jsx)(eL, {
                        user: i.locke,
                        innerClassName: eE.userPink
                    }),
                    (0, r.jsxs)(h.Text, {
                        variant: 'text-sm/semibold',
                        className: eE.namplateRightPanePreviewSectionGroup,
                        children: [ey.intl.string(ey.t['NG43//']), ' - 12']
                    }),
                    (0, r.jsx)(eL, {
                        user: i.boom,
                        innerClassName: eE.userGreen
                    }),
                    (0, r.jsx)(eL, {
                        user: i.cherry,
                        innerClassName: eE.userGreen
                    })
                ]
            })
        });
    },
    eD = (e) => {
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
                                  T.Z,
                                  eS(eT({}, s), {
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
                              c && (0, r.jsx)(eU, { user: n })
                          ]
                      })
        });
    },
    eM = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            eS(
                eT(
                    {},
                    (0, _.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ey.intl.string(ey.t.d5YwKy)
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
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': ey.intl.string(ey.t['TN+ZvL']),
            children: (0, r.jsx)(h.Rny, {
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
            })
        });
    },
    eF = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: v } = e,
            P = (0, f.e7)([B.default], () => B.default.getCurrentUser()),
            b = (0, eg.f)(a),
            { previewingVariantIndex: j } = b,
            C = (0, f.e7)([z.Z], () => z.Z.purchases),
            _ = (0, G.o)(a, C),
            w = (0, eP.N)(a, j),
            O = (0, eb.W)(a, _);
        o()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, g.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(O.skuId);
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
                sku_id: O.skuId,
                product_type: T
            }),
                O.items.forEach(H.oK));
        }, [c, I, O.skuId, O.items, T]);
        let S = (0, A.r)(),
            N = t === h.Dvm.EXITING;
        if (null == P) return null;
        let Z = (0, e_.ZS)(l.skuId);
        return (0, r.jsx)(g.Gt, {
            value: I,
            children: (0, r.jsx)(h.Y0X, {
                hideShadow: !0,
                className: eE.modalRoot,
                returnRef: s,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(h.hzk, {
                    className: eE.modalContent,
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
                            className: O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : O.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    asset: y,
                                    size: (0, ec.ML)(540),
                                    className: eE.categoryBanner,
                                    categoryBannerOverride: Z
                                }),
                                (0, e_.o0)(a.skuId)
                                    ? a.skuId === e_.Vt.ORB_PROFILE_BADGE
                                        ? S || N
                                            ? null
                                            : (0, r.jsx)(ed.M, { user: P })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(em.b, {
                                                product: a,
                                                className: eE.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eD, {
                                          user: P,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eE.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eE.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eE.titleImage,
                                                style: null == Z ? void 0 : Z.pdpLogoStyle,
                                                src: E,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eE.headerButtonContainer,
                                            children: [
                                                (0, r.jsx)(et.n, {
                                                    skuId: O.skuId,
                                                    tab: v
                                                }),
                                                (0, r.jsx)(h.hU, {
                                                    'aria-label': ey.intl.string(ey.t.cpT0Cg),
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
