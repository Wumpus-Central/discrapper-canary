n.d(t, { default: () => eF }), n(388685), n(314940), n(953529);
var r = n(200651),
    i = n(192379),
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
    O = n(197115),
    E = n(678135),
    S = n(876917),
    N = n(643879),
    T = n(484459),
    y = n(822857),
    L = n(82856),
    Z = n(960919),
    A = n(275388),
    R = n(25990),
    B = n(594174),
    D = n(626135),
    M = n(63063),
    U = n(74538),
    z = n(937615),
    H = n(335131),
    F = n(1870),
    G = n(429368),
    V = n(884697),
    W = n(72462),
    K = n(228624),
    q = n(635552),
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
    ea = n(813083),
    el = n(680942),
    es = n(558060),
    eo = n(237031),
    ec = n(372654),
    eu = n(38914),
    ed = n(259673),
    em = n(508925),
    ep = n(755419),
    ef = n(953405),
    eh = n(453713),
    ev = n(616066),
    eb = n(22267),
    eP = n(332246),
    ex = n(58201),
    eg = n(794324),
    eC = n(361110),
    e_ = n(956472),
    ej = n(832149),
    ew = n(215023),
    eI = n(981631),
    ek = n(474936),
    eO = n(231338),
    eE = n(388032),
    eS = n(785218);
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
let ey = {
        mallow: {
            name: eE.intl.string(eE.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: eE.intl.string(eE.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: eE.intl.string(eE.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: eE.intl.string(eE.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: eE.intl.string(eE.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    eL = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            s = (0, b.Z)(l);
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
                    className: eS.nameplatePreviewContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: eS.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: s
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
                                    (0, r.jsx)(eL, {
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
    eA = (e) => {
        let { product: t, user: n } = e;
        return (0, V.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n
              })
            : (0, ep.o0)(t.skuId)
              ? (0, r.jsx)(em.b, {
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
    eR = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eS.learnMoreLink,
                  children: eE.intl.format(eE.t.Q1scdH, { helpdeskArticle: M.Z.getArticleURL(eI.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eB = (e) => {
        let t,
            { product: n, user: a, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: b, previewingVariantIndexProps: x, selectedVariantIndex: C, tab: _ } = e,
            { analyticsLocations: j } = (0, g.ZP)(),
            w = U.ZP.canUseCollectibles(a),
            { previewingVariantIndex: I } = x,
            E = (0, eP.N)(n, I),
            S = (0, ex.W)(n, C);
        o()(null != S, 'Selected product should not be null');
        let N = (0, J.L)(n),
            { isPurchased: T, isPartiallyOwnedBundle: R } = (0, J.L)(S),
            { isDisabled: B, disabledReason: D } = (0, Q.G)(S.skuId),
            M = (0, V.ne)({
                product: S,
                isPartiallyOwnedBundle: R,
                isPurchased: T
            }),
            G = (0, p.e7)([F.Z], () => F.Z.purchases),
            W = (0, p.e7)([F.Z], () => F.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            et = (0, P.ZP)(),
            en = (0, f.wj)(et),
            er = (0, V.G1)(S),
            ec = (0, V.ql)(S, eI.tuJ.DEFAULT),
            eu = (null == ec ? void 0 : ec.amount) === 0,
            { firstAvatarDecoration: ed } = (0, $.Rj)(null != E ? E : S),
            em = i.useMemo(() => (0, V.BH)(S, w), [S, w]),
            { handleUseNow: ep, isApplying: ev } = (0, q.W)({
                product: S,
                onSuccess: m
            }),
            eb = (0, K.hv)('CollectiblesProductPreviewInfo'),
            eg = (0, X.T)(S),
            { enabled: eC } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: ey,
                isOrbExclusive: eL,
                hasSufficientOrbs: eZ
            } = (0, e_.Ip)({
                product: S,
                isPremiumUser: w,
                tab: _
            }),
            eB = i.useCallback(
                () =>
                    (0, k.Z)({
                        skuId: S.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? m() : (0, eO.dG)())
                    }),
                [j, m, S.skuId, eb]
            );
        i.useEffect(() => {
            if (null != ed) return (0, v.cV)(ed), () => (0, v.cV)(void 0);
        }, [ed]);
        let eD = (e, t) => {
                let n = () => {
                        (0, A.q)({
                            skuId: S.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                (0, H.qg)({
                                    variantsReturnStyle: eb,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m({ keepBalancePillOverlayOpen: !0 }),
                                    (0, ej.Z)({
                                        product: S,
                                        analyticsLocations: j,
                                        onCloseCallback: () => {
                                            (0, L.vp)();
                                        },
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: ew.o8.ORB
                                    });
                            },
                            analyticsLocations: j
                        });
                    },
                    i = B ? eE.intl.string(eE.t.cTdr39) : eE.intl.string(eE.t.zqh7ZG),
                    a = !eZ || B;
                return (0, r.jsx)(h.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zxk,
                            eT(eN({}, i), {
                                innerClassName: eS.button,
                                look: h.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: a,
                                color: t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                                children: eE.intl.format(eE.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(Z.Z, { shouldUseThemeColor: a })
                                })
                            })
                        )
                });
            },
            eM = (e, t) => {
                let n = !er && !eu && !u.tq && !eL && M && S.type !== d.Z.NAMEPLATE,
                    i = t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                    a = (0, V.x6)(S) ? eE.intl.string(eE.t.V1AWw8) : S.type === d.Z.PROFILE_EFFECT ? eE.intl.string(eE.t.kAeDcH) : S.type === d.Z.NAMEPLATE ? eE.intl.string(eE.t.H3vhqa) : eE.intl.string(eE.t.AQ0Ven),
                    l = eC ? eE.intl.formatToPlainString(eE.t['cNSL/v'], { price: (0, z.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eS.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            className: eS.primaryButton,
                            innerClassName: eS.button,
                            look: h.zxk.Looks.FILLED,
                            onClick: eB,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(el.Z, {
                                product: S,
                                onSuccess: m,
                                color: i
                            })
                    ]
                });
            },
            eU = (0, Y.G)(S);
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
                (0, r.jsx)(eA, {
                    product: null != E ? E : S,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eS.description,
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    product: S,
                                    isDarkText: !en,
                                    isOrbExclusive: eL
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eS.headingWithItemTypePill,
                                    children: eg
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eU
                                }),
                                (0, r.jsx)(eR, { skuId: S.skuId }),
                                N.isPurchased || N.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: eS.priceTag,
                                          isPartiallyPurchased: R
                                      })
                                    : er
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eS.priceTag,
                                            children: eE.intl.string(eE.t.rt69oq)
                                        })
                                      : eC
                                        ? (0, r.jsx)(ef.a, {
                                              prices: ey,
                                              product: S,
                                              isPremiumUser: w,
                                              discount: em,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: B
                                          })
                                        : (0, r.jsx)(es.Z, {
                                              product: S,
                                              discount: em,
                                              isPremiumUser: w,
                                              className: w ? eS.priceTag : eS.priceTagContainer,
                                              nitroUpsell: !w
                                          })
                            ]
                        }),
                        (0, r.jsx)(eh.P, {
                            variantGroupProduct: n,
                            previewingVariantIndexProps: x,
                            className: eS.variantsSwitch,
                            purchases: G
                        }),
                        null !== D &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eS.disabledReason,
                                children: D
                            }),
                        (0, r.jsx)('div', {
                            className: eS.buttonsContainer,
                            children:
                                !er || w || eu
                                    ? M
                                        ? T
                                            ? (0, r.jsx)(h.zxk, {
                                                  className: eS.button,
                                                  look: h.zxk.Looks.FILLED,
                                                  onClick: ep,
                                                  submitting: ev,
                                                  children: eE.intl.string(eE.t.MAS7uL)
                                              })
                                            : er
                                              ? (0, r.jsx)(h.zxk, {
                                                    className: eS.button,
                                                    look: h.zxk.Looks.FILLED,
                                                    submitting: W,
                                                    submittingStartedLabel: eE.intl.string(eE.t['TYw+9v']),
                                                    submittingFinishedLabel: eE.intl.string(eE.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, H.fK)(S.skuId),
                                                            m(),
                                                            (0, ej.Z)({
                                                                product: S,
                                                                analyticsLocations: j,
                                                                purchaseType: ew.o8.PREMIUM_PURCHASE
                                                            });
                                                    },
                                                    children: eE.intl.string(eE.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ey.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eO.pK.DISCORD_ORB ? eD(e, n) : eM(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = eE.intl.string(eE.t.sEAnVF)),
                                      (0, r.jsx)(O.Z, {
                                          subscriptionTier: ek.Si.TIER_2,
                                          fullWidth: !0,
                                          buttonText: t,
                                          onClick: eo.v,
                                          onSubscribeModalClose: () => {
                                              (0, eo.T)({
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
                            className: l()(eS.disclaimer, !en && eS.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: er && !T ? eE.intl.string(eE.t.nKdAlJ) : null
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
            children: (0, r.jsx)(C.Z, {
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
    eM = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: eS.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eD, {
                    user: ey.mallow,
                    innerClassName: eS.userBlue
                }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eS.namplateRightPanePreviewSectionGroup,
                    children: [eE.intl.string(eE.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eD, {
                    user: ey.phibi,
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
                (0, r.jsx)(eD, {
                    user: ey.locke,
                    innerClassName: eS.userPink
                }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eS.namplateRightPanePreviewSectionGroup,
                    children: [eE.intl.string(eE.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eD, {
                    user: ey.boom,
                    innerClassName: eS.userGreen
                }),
                (0, r.jsx)(eD, {
                    user: ey.cherry,
                    innerClassName: eS.userGreen
                })
            ]
        });
    },
    eU = (e) => {
        let { product: t, user: n } = e,
            i = U.ZP.canUsePremiumProfileCustomization(n),
            a = (0, p.cj)([R.Z], () => R.Z.getAllPending()),
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
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(a, ['pendingAvatar']),
            o = (0, N.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, $.Rj)(t),
            h = null != f;
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
                                  E.Z,
                                  eT(eN({}, s), {
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
                              c && (0, r.jsx)(eH, { user: n })
                          ]
                      })
        });
    },
    ez = (e) => {
        let { author: t } = e;
        return (0, _.e5)(
            eT(
                eN(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eE.intl.string(eE.t.d5YwKy)
                    })
                ),
                {
                    state: eI.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eH = (e) => {
        let { user: t } = e,
            n = ez({ author: t });
        return (0, r.jsx)(h.Rny, {
            children: (0, r.jsxs)(h.Zbd, {
                className: eS.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        I.Z,
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
        });
    },
    eF = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: v } = e,
            b = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            P = (0, eC.f)(a),
            { previewingVariantIndex: C } = P,
            _ = (0, p.e7)([F.Z], () => F.Z.purchases),
            j = (0, G.o)(a, _),
            w = (0, eP.N)(a, C),
            I = (0, ex.W)(a, j);
        o()(null != I, 'Selected product should not be null');
        let { analyticsLocations: k } = (0, g.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.u9)(I.skuId);
        let O = (0, W.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: S } = (0, eg.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, T.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let N = i.useMemo(() => (0, V.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            D.default.track(eI.rMx.OPEN_MODAL, {
                type: eI.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: k,
                sku_id: I.skuId,
                product_type: N
            }),
                I.items.forEach(H.oK);
        }, [c, k, I.skuId, I.items, N]);
        let y = (0, A.r)(),
            Z = t === h.Dvm.EXITING;
        if (null == b) return null;
        let R = (0, ew.ZS)(l.skuId),
            M = function () {
                let { keepBalancePillOverlayOpen: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(), e || (0, L.vp)();
            };
        return (0, r.jsx)(g.Gt, {
            value: k,
            children: (0, r.jsx)(h.Y0X, {
                hideShadow: !0,
                className: eS.modalRoot,
                returnRef: s,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                children: (0, r.jsxs)(h.hzk, {
                    className: eS.modalContent,
                    children: [
                        (0, r.jsx)(eB, {
                            user: b,
                            product: a,
                            category: l,
                            onClose: M,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: f,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: I.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eS.fractionalNitroPreviewContainer : I.type === d.Z.AVATAR_DECORATION ? eS.collectiblePreviewsContainerWithChat : eS.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    asset: E,
                                    size: (0, ec.ML)(540),
                                    className: eS.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, ep.o0)(a.skuId)
                                    ? a.skuId === ew.Vt.ORB_PROFILE_BADGE
                                        ? y || Z
                                            ? null
                                            : (0, r.jsx)(ed.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(em.b, {
                                                product: a,
                                                className: eS.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eU, {
                                          user: b,
                                          product: null != w ? w : I
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
                                                O &&
                                                    (0, r.jsx)(en.B, {
                                                        skuId: I.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(h.olH, {
                                                    onClick: () => M(),
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
