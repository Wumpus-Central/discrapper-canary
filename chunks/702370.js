(n.d(t, { default: () => ez }), n(388685), n(314940), n(953529));
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
    p = n(399606),
    f = n(780384),
    h = n(481060),
    v = n(809206),
    b = n(727637),
    P = n(410030),
    x = n(100527),
    g = n(906732),
    C = n(570908),
    _ = n(786761),
    j = n(3148),
    w = n(739566),
    I = n(753206),
    k = n(333867),
    O = n(767714),
    E = n(678135),
    S = n(876917),
    N = n(643879),
    T = n(484459),
    y = n(822857),
    L = n(960919),
    R = n(275388),
    Z = n(25990),
    A = n(594174),
    B = n(626135),
    D = n(63063),
    M = n(74538),
    U = n(937615),
    z = n(335131),
    F = n(1870),
    H = n(429368),
    G = n(884697),
    V = n(72462),
    W = n(228624),
    K = n(635552),
    q = n(83479),
    Y = n(290175),
    Q = n(905357),
    X = n(724994),
    J = n(328456),
    $ = n(390698),
    ee = n(141011),
    et = n(525518),
    en = n(426171),
    er = n(224068),
    ei = n(813083),
    ea = n(680942),
    el = n(558060),
    es = n(237031),
    eo = n(372654),
    ec = n(38914),
    eu = n(259673),
    ed = n(508925),
    em = n(953405),
    ep = n(453713),
    ef = n(616066),
    eh = n(22267),
    ev = n(332246),
    eb = n(58201),
    eP = n(794324),
    ex = n(361110),
    eg = n(956472),
    eC = n(832149),
    e_ = n(215023),
    ej = n(981631),
    ew = n(474936),
    eI = n(231338),
    ek = n(388032),
    eO = n(785218);
function eE(e) {
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
let eN = {
        mallow: {
            name: ek.intl.string(ek.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: ek.intl.string(ek.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: ek.intl.string(ek.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: ek.intl.string(ek.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: ek.intl.string(ek.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    eT = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            s = (0, b.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eO.bundleAvatarPreviewContainer : eO.avatarPreviewContainer,
                    children: (0, r.jsx)(ef.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eO.bundlePfxPreviewContainer : eO.pfxPreviewContainer,
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
                    className: eO.nameplatePreviewContainer,
                    children: (0, r.jsx)(eh.Z, {
                        className: eO.nameplatePreview,
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
            className: eO.bundlePreviewContainer,
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
                                className: eO.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eT, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(h.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eO.bundleSlideTitle,
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
    eL = (e) => {
        let { product: t, user: n } = e;
        return (0, G.x6)(t)
            ? (0, r.jsx)(ey, {
                  product: t,
                  user: n
              })
            : (0, e_.o0)(t.skuId)
              ? (0, r.jsx)(ed.b, {
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
    eR = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eO.learnMoreLink,
                  children: ek.intl.format(ek.t.Q1scdH, { helpdeskArticle: D.Z.getArticleURL(ej.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eZ = (e) => {
        let t,
            { product: n, user: a, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: b, previewingVariantIndexProps: x, selectedVariantIndex: C, tab: _ } = e,
            { analyticsLocations: j } = (0, g.ZP)(),
            w = M.ZP.canUseCollectibles(a),
            { previewingVariantIndex: I } = x,
            E = (0, ev.N)(n, I),
            S = (0, eb.W)(n, C);
        o()(null != S, 'Selected product should not be null');
        let N = (0, X.L)(n),
            { isPurchased: T, isPartiallyOwnedBundle: Z } = (0, X.L)(S),
            { isDisabled: A, disabledReason: B } = (0, Y.G)(S.skuId),
            D = (0, G.ne)({
                product: S,
                isPartiallyOwnedBundle: Z,
                isPurchased: T
            }),
            H = (0, p.e7)([F.Z], () => F.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            V = (0, P.ZP)(),
            ee = (0, f.wj)(V),
            et = (0, G.G1)(S),
            en = (0, G.ql)(S, ej.tuJ.DEFAULT),
            eo = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: ec } = (0, J.Rj)(null != E ? E : S),
            eu = i.useMemo(() => (0, G.BH)(S, w), [S, w]),
            { handleUseNow: ed, isApplying: ef } = (0, K.W)({
                product: S,
                onSuccess: m
            }),
            eh = (0, W.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, Q.T)(S),
            { enabled: ex } = (0, y.WX)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eN,
                isOrbExclusive: eT,
                hasSufficientOrbs: ey
            } = (0, eg.Ip)({
                product: S,
                isPremiumUser: w,
                tab: _
            }),
            eZ = i.useCallback(
                () =>
                    (0, k.Z)({
                        skuId: S.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: eh,
                        onClose: (e) => (e ? m() : (0, eI.dG)())
                    }),
                [j, m, S.skuId, eh]
            );
        i.useEffect(() => {
            if (null != ec) return ((0, v.cV)(ec), () => (0, v.cV)(void 0));
        }, [ec]);
        let eA = (e, t) => {
                let n = () => {
                        (0, R.q)({
                            skuId: S.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                ((0, z.qg)({
                                    variantsReturnStyle: eh,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m(),
                                    (0, eC.Z)({
                                        product: S,
                                        analyticsLocations: j,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: e_.o8.ORB
                                    }));
                            },
                            analyticsLocations: j
                        });
                    },
                    i = A ? ek.intl.string(ek.t.cTdr39) : ek.intl.string(ek.t.zqh7ZG),
                    a = !ey || A;
                return (0, r.jsx)(h.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    'aria-label': !1,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zxk,
                            eS(eE({}, i), {
                                innerClassName: eO.button,
                                look: h.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: a,
                                color: t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                                children: ek.intl.format(ek.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(L.Z, { shouldUseThemeColor: a })
                                })
                            })
                        )
                });
            },
            eB = (e, t) => {
                let n = !et && !eo && !u.tq && !eT && D,
                    i = t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                    a = (0, G.x6)(S) ? ek.intl.string(ek.t.V1AWw8) : S.type === d.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcH) : S.type === d.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqa) : ek.intl.string(ek.t.AQ0Ven),
                    l = ex ? ek.intl.formatToPlainString(ek.t['cNSL/v'], { price: (0, U.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eO.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            className: eO.primaryButton,
                            innerClassName: eO.button,
                            look: h.zxk.Looks.FILLED,
                            onClick: eZ,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(ea.Z, {
                                product: S,
                                onSuccess: m,
                                color: i
                            })
                    ]
                });
            },
            eD = (0, q.G)(S);
        return (0, r.jsxs)('div', {
            className: eO.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eO.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: s,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eL, {
                    product: null != E ? E : S,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eO.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: S,
                                    isDarkText: !ee,
                                    isOrbExclusive: eT
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eO.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eD
                                }),
                                (0, r.jsx)(eR, { skuId: S.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)($.U, {
                                          className: eO.priceTag,
                                          isPartiallyPurchased: Z
                                      })
                                    : et
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eO.priceTag,
                                            children: ek.intl.string(ek.t.rt69oq)
                                        })
                                      : ex
                                        ? (0, r.jsx)(em.a, {
                                              prices: eN,
                                              product: S,
                                              isPremiumUser: w,
                                              discount: eu,
                                              hasSufficientOrbs: ey,
                                              isProductDisabled: A
                                          })
                                        : (0, r.jsx)(el.Z, {
                                              product: S,
                                              discount: eu,
                                              isPremiumUser: w,
                                              className: w ? eO.priceTag : eO.priceTagContainer,
                                              nitroUpsell: !w
                                          })
                            ]
                        }),
                        (0, r.jsx)(h.Rny, {
                            children: (0, r.jsx)(ep.P, {
                                selectedVariantIndex: C,
                                variantGroupProduct: n,
                                previewingVariantIndexProps: x,
                                className: eO.variantsSwitch
                            })
                        }),
                        null !== B &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eO.disabledReason,
                                children: B
                            }),
                        (0, r.jsx)('div', {
                            className: eO.buttonsContainer,
                            children:
                                !et || w || eo
                                    ? D
                                        ? T
                                            ? (0, r.jsx)(h.zxk, {
                                                  className: eO.button,
                                                  look: h.zxk.Looks.FILLED,
                                                  onClick: ed,
                                                  submitting: ef,
                                                  children: ek.intl.string(ek.t.MAS7uL)
                                              })
                                            : et
                                              ? (0, r.jsx)(h.zxk, {
                                                    className: eO.button,
                                                    look: h.zxk.Looks.FILLED,
                                                    submitting: H,
                                                    submittingStartedLabel: ek.intl.string(ek.t['TYw+9v']),
                                                    submittingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
                                                    onClick: async () => {
                                                        (await (0, z.fK)(S.skuId),
                                                            m(),
                                                            (0, eC.Z)({
                                                                product: S,
                                                                analyticsLocations: j,
                                                                purchaseType: e_.o8.PREMIUM_PURCHASE
                                                            }));
                                                    },
                                                    children: ek.intl.string(ek.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eN.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eI.pK.DISCORD_ORB ? eA(e, n) : eB(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = ek.intl.string(ek.t.sEAnVF)),
                                      (0, r.jsx)(O.Z, {
                                          subscriptionTier: ew.Si.TIER_2,
                                          fullWidth: !0,
                                          textOptions: { textOverride: t },
                                          onClick: es.v,
                                          onSubscribeModalClose: () => {
                                              (0, es.T)({
                                                  product: S,
                                                  category: s,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: b,
                                                  analyticsLocations: j
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(h.Text, {
                            className: l()(eO.disclaimer, !ee && eO.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: et && !T ? ek.intl.string(ek.t.nKdAlJ) : null
                        })
                    ]
                })
            ]
        });
    },
    eA = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)('div', {
            className: eO.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(h.qEK, {
                    src: t.avatarSrc,
                    size: h.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: h.Skl.ONLINE
                }),
                name: t.name,
                innerClassName: l()(eO.nameplateRightPanePreviewAvatarInner, n)
            })
        });
    },
    eB = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: eO.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eA, {
                    user: eN.mallow,
                    innerClassName: eO.userBlue
                }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eO.namplateRightPanePreviewSectionGroup,
                    children: [ek.intl.string(ek.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eA, {
                    user: eN.phibi,
                    innerClassName: eO.userPink
                }),
                (0, r.jsx)('div', {
                    className: eO.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(eh.Z, {
                        className: eO.nameplatePreview,
                        innerClassName: eO.userPink,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eA, {
                    user: eN.locke,
                    innerClassName: eO.userPink
                }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eO.namplateRightPanePreviewSectionGroup,
                    children: [ek.intl.string(ek.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eA, {
                    user: eN.boom,
                    innerClassName: eO.userGreen
                }),
                (0, r.jsx)(eA, {
                    user: eN.cherry,
                    innerClassName: eO.userGreen
                })
            ]
        });
    },
    eD = (e) => {
        let { product: t, user: n } = e,
            i = M.ZP.canUsePremiumProfileCustomization(n),
            a = (0, p.cj)([Z.Z], () => Z.Z.getAllPending()),
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
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, J.Rj)(t),
            h = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eO.previewsContainerInner : eO.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eB, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  E.Z,
                                  eS(eE({}, s), {
                                      pendingAvatar: o,
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
    eM = (e) => {
        let { author: t } = e;
        return (0, _.e5)(
            eS(
                eE(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ek.intl.string(ek.t.d5YwKy)
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
            n = eM({ author: t });
        return (0, r.jsx)(h.Rny, {
            children: (0, r.jsxs)(h.Zbd, {
                className: eO.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        I.Z,
                        {
                            className: eO.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: eO.mockInput,
                        children: [
                            (0, r.jsx)(h.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eO.mockInputButton
                            }),
                            (0, r.jsx)(h.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eO.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    ez = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: v } = e,
            b = (0, p.e7)([A.default], () => A.default.getCurrentUser()),
            P = (0, ex.f)(a),
            { previewingVariantIndex: C } = P,
            _ = (0, p.e7)([F.Z], () => F.Z.purchases),
            j = (0, H.o)(a, _),
            w = (0, ev.N)(a, C),
            I = (0, eb.W)(a, j);
        o()(null != I, 'Selected product should not be null');
        let { analyticsLocations: k } = (0, g.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(I.skuId);
        let O = (0, V.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: S } = (0, eP.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, T.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let N = i.useMemo(() => (0, G.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            (B.default.track(ej.rMx.OPEN_MODAL, {
                type: ej.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: k,
                sku_id: I.skuId,
                product_type: N
            }),
                I.items.forEach(z.oK));
        }, [c, k, I.skuId, I.items, N]);
        let y = (0, R.r)(),
            L = t === h.Dvm.EXITING;
        if (null == b) return null;
        let Z = (0, e_.ZS)(l.skuId);
        return (0, r.jsx)(g.Gt, {
            value: k,
            children: (0, r.jsx)(h.Y0X, {
                hideShadow: !0,
                className: eO.modalRoot,
                returnRef: s,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                parentComponent: 'CollectiblesShopProductDetailsModal',
                children: (0, r.jsxs)(h.hzk, {
                    className: eO.modalContent,
                    children: [
                        (0, r.jsx)(eZ, {
                            user: b,
                            product: a,
                            category: l,
                            onClose: n,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: f,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: I.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eO.fractionalNitroPreviewContainer : I.type === d.Z.AVATAR_DECORATION ? eO.collectiblePreviewsContainerWithChat : eO.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    asset: E,
                                    size: (0, eo.ML)(540),
                                    className: eO.categoryBanner,
                                    categoryBannerOverride: Z
                                }),
                                (0, e_.o0)(a.skuId)
                                    ? a.skuId === e_.Vt.ORB_PROFILE_BADGE
                                        ? y || L
                                            ? null
                                            : (0, r.jsx)(eu.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(ec.q, {})
                                          : (0, r.jsx)(ed.b, {
                                                product: a,
                                                className: eO.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eD, {
                                          user: b,
                                          product: null != w ? w : I
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eO.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eO.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eO.titleImage,
                                                style: null == Z ? void 0 : Z.pdpLogoStyle,
                                                src: S,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eO.headerButtonContainer,
                                            children: [
                                                O &&
                                                    (0, r.jsx)(et.B, {
                                                        skuId: I.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(h.olH, {
                                                    onClick: n,
                                                    className: eO.modalCloseButton,
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
