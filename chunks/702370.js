n.d(t, { default: () => eH }), n(388685), n(314940), n(953529);
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
    j = n(786761),
    _ = n(3148),
    N = n(739566),
    w = n(753206),
    I = n(333867),
    O = n(197115),
    k = n(921813),
    E = n(876917),
    S = n(643879),
    T = n(484459),
    y = n(822857),
    L = n(82856),
    Z = n(960919),
    R = n(275388),
    A = n(25990),
    B = n(594174),
    W = n(626135),
    D = n(63063),
    M = n(74538),
    U = n(937615),
    z = n(335131),
    H = n(1870),
    F = n(429368),
    V = n(884697),
    G = n(72462),
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
    ej = n(956472),
    e_ = n(832149),
    eN = n(215023),
    ew = n(981631),
    eI = n(474936),
    eO = n(231338),
    ek = n(388032),
    eE = n(785218);
function eS(e) {
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
            name: ek.NW.string(ek.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: ek.NW.string(ek.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: ek.NW.string(ek.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: ek.NW.string(ek.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: ek.NW.string(ek.t.ncsliY),
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
                    className: a ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(E.Z, {
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
                    children: (0, r.jsx)(eb.Z, {
                        className: eE.nameplatePreview,
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
                                    (0, r.jsx)(eL, {
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
    eR = (e) => {
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
    eA = (e) => {
        let { skuId: t } = e;
        return t === m.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: eE.learnMoreLink,
                  children: ek.NW.format(ek.t.Q1scdH, { helpdeskArticle: D.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eB = (e) => {
        let t,
            { product: n, user: a, category: s, shouldCheckoutWithOrbs: c, onClose: m, returnRef: b, previewingVariantIndexProps: x, selectedVariantIndex: C, tab: j } = e,
            { analyticsLocations: _ } = (0, g.ZP)(),
            N = M.ZP.canUseCollectibles(a),
            { previewingVariantIndex: w } = x,
            k = (0, eP.N)(n, w),
            E = (0, ex.W)(n, C);
        o()(null != E, 'Selected product should not be null');
        let S = (0, J.L)(n),
            { isPurchased: T, isPartiallyOwnedBundle: A } = (0, J.L)(E),
            { isDisabled: B, disabledReason: W } = (0, Q.G)(E.skuId),
            D = (0, V.ne)({
                product: E,
                isPartiallyOwnedBundle: A,
                isPurchased: T
            }),
            F = (0, p.e7)([H.Z], () => H.Z.purchases),
            G = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            et = (0, P.ZP)(),
            en = (0, f.wj)(et),
            er = (0, V.G1)(E),
            ec = (0, V.ql)(E, ew.tuJ.DEFAULT),
            eu = (null == ec ? void 0 : ec.amount) === 0,
            { firstAvatarDecoration: ed } = (0, $.R)(null != k ? k : E),
            em = i.useMemo(() => (0, V.BH)(E, N), [E, N]),
            { handleUseNow: ep, isApplying: ev } = (0, q.W)({
                product: E,
                onSuccess: m
            }),
            eb = (0, K.hv)('CollectiblesProductPreviewInfo'),
            eg = (0, X.T)(E),
            { enabled: eC } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: ey,
                isOrbExclusive: eL,
                hasSufficientOrbs: eZ
            } = (0, ej.Ip)({
                product: E,
                isPremiumUser: N,
                tab: j
            }),
            eB = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: E.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? m() : (0, eO.dG)())
                    }),
                [_, m, E.skuId, eb]
            );
        i.useEffect(() => {
            if (null != ed) return (0, v.cV)(ed), () => (0, v.cV)(void 0);
        }, [ed]);
        let eW = (e, t) => {
                let n = () => {
                        (0, R.q)({
                            skuId: E.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                (0, z.qg)({
                                    variantsReturnStyle: eb,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    m({ keepBalancePillOverlayOpen: !0 }),
                                    (0, e_.Z)({
                                        product: E,
                                        analyticsLocations: _,
                                        onCloseCallback: () => {
                                            (0, L.vp)();
                                        },
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: eN.o8.ORB
                                    });
                            },
                            analyticsLocations: _
                        });
                    },
                    i = B ? ek.NW.string(ek.t.cTdr39) : ek.NW.string(ek.t.zqh7ZG),
                    a = !eZ || B;
                return (0, r.jsx)(h.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    children: (i) =>
                        (0, r.jsx)(
                            h.zxk,
                            eT(eS({}, i), {
                                innerClassName: eE.button,
                                look: h.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: a,
                                color: t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                                children: ek.NW.format(ek.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(Z.Z, { shouldUseThemeColor: a })
                                })
                            })
                        )
                });
            },
            eD = (e, t) => {
                let n = !er && !eu && !u.tq && !eL && D && E.type !== d.Z.NAMEPLATE,
                    i = t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                    a = (0, V.x6)(E) ? ek.NW.string(ek.t.V1AWw8) : E.type === d.Z.PROFILE_EFFECT ? ek.NW.string(ek.t.kAeDcH) : E.type === d.Z.NAMEPLATE ? ek.NW.string(ek.t.H3vhqa) : ek.NW.string(ek.t.AQ0Ven),
                    l = eC ? ek.NW.formatToPlainString(ek.t['cNSL/v'], { price: (0, U.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eE.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            className: eE.primaryButton,
                            innerClassName: eE.button,
                            look: h.zxk.Looks.FILLED,
                            onClick: eB,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(el.Z, {
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
                    children: (0, r.jsx)(ea.Z, {
                        category: s,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eR, {
                    product: null != k ? k : E,
                    user: a
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    product: E,
                                    isDarkText: !en,
                                    isOrbExclusive: eL
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eE.headingWithItemTypePill,
                                    children: eg
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eM
                                }),
                                (0, r.jsx)(eA, { skuId: E.skuId }),
                                S.isPurchased || S.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: A
                                      })
                                    : er
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eE.priceTag,
                                            children: ek.NW.string(ek.t.rt69oq)
                                        })
                                      : eC
                                        ? (0, r.jsx)(ef.a, {
                                              prices: ey,
                                              product: E,
                                              isPremiumUser: N,
                                              discount: em,
                                              hasSufficientOrbs: eZ,
                                              isProductDisabled: B
                                          })
                                        : (0, r.jsx)(es.Z, {
                                              product: E,
                                              discount: em,
                                              isPremiumUser: N,
                                              className: N ? eE.priceTag : eE.priceTagContainer,
                                              nitroUpsell: !N
                                          })
                            ]
                        }),
                        (0, r.jsx)(eh.P, {
                            variantGroupProduct: n,
                            previewingVariantIndexProps: x,
                            className: eE.variantsSwitch,
                            purchases: F
                        }),
                        null !== W &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eE.disabledReason,
                                children: W
                            }),
                        (0, r.jsx)('div', {
                            className: eE.buttonsContainer,
                            children:
                                !er || N || eu
                                    ? D
                                        ? T
                                            ? (0, r.jsx)(h.zxk, {
                                                  className: eE.button,
                                                  look: h.zxk.Looks.FILLED,
                                                  onClick: ep,
                                                  submitting: ev,
                                                  children: ek.NW.string(ek.t.MAS7uL)
                                              })
                                            : er
                                              ? (0, r.jsx)(h.zxk, {
                                                    className: eE.button,
                                                    look: h.zxk.Looks.FILLED,
                                                    submitting: G,
                                                    submittingStartedLabel: ek.NW.string(ek.t['TYw+9v']),
                                                    submittingFinishedLabel: ek.NW.string(ek.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, z.fK)(E.skuId),
                                                            m(),
                                                            (0, e_.Z)({
                                                                product: E,
                                                                analyticsLocations: _,
                                                                purchaseType: eN.o8.PREMIUM_PURCHASE
                                                            });
                                                    },
                                                    children: ek.NW.string(ek.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ey.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eO.pK.DISCORD_ORB ? eW(e, n) : eD(e, n);
                                                    })
                                                })
                                        : null
                                    : ((t = ek.NW.string(ek.t.sEAnVF)),
                                      (0, r.jsx)(O.Z, {
                                          subscriptionTier: eI.Si.TIER_2,
                                          fullWidth: !0,
                                          buttonText: t,
                                          onClick: eo.v,
                                          onSubscribeModalClose: () => {
                                              (0, eo.T)({
                                                  product: E,
                                                  category: s,
                                                  shouldCheckoutWithOrbs: c,
                                                  returnRef: b,
                                                  analyticsLocations: _
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(h.Text, {
                            className: l()(eE.disclaimer, !en && eE.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: er && !T ? ek.NW.string(ek.t.O2K0xM) : null
                        })
                    ]
                })
            ]
        });
    },
    eW = (e) => {
        let { user: t } = e;
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
                innerClassName: eE.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: eE.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eW, { user: ey.mallow }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eE.namplateRightPanePreviewSectionGroup,
                    children: [ek.NW.string(ek.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eW, { user: ey.phibi }),
                (0, r.jsx)('div', {
                    className: eE.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(eb.Z, {
                        className: eE.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eW, { user: ey.locke }),
                (0, r.jsxs)(h.Text, {
                    variant: 'text-sm/semibold',
                    className: eE.namplateRightPanePreviewSectionGroup,
                    children: [ek.NW.string(ek.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eW, { user: ey.boom }),
                (0, r.jsx)(eW, { user: ey.cherry })
            ]
        });
    },
    eM = (e) => {
        let { product: t, user: n } = e,
            i = M.ZP.canUsePremiumProfileCustomization(n),
            a = (0, p.cj)([A.Z], () => A.Z.getAllPending()),
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
            o = (0, S.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, $.R)(t),
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
                                  k.Z,
                                  eT(eS({}, s), {
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
                              c && (0, r.jsx)(ez, { user: n })
                          ]
                      })
        });
    },
    eU = (e) => {
        let { author: t } = e;
        return (0, j.e5)(
            eT(
                eS(
                    {},
                    (0, _.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ek.NW.string(ek.t.d5YwKy)
                    })
                ),
                {
                    state: ew.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    ez = (e) => {
        let { user: t } = e,
            n = eU({ author: t });
        return (0, r.jsx)(h.Rny, {
            children: (0, r.jsxs)(h.Zbd, {
                className: eE.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        w.Z,
                        {
                            className: eE.mockMessage,
                            author: (0, N.ZH)(n),
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
    eH = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: v } = e,
            b = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            P = (0, eC.f)(a),
            { previewingVariantIndex: C } = P,
            j = (0, p.e7)([H.Z], () => H.Z.purchases),
            _ = (0, F.o)(a, j),
            N = (0, eP.N)(a, C),
            w = (0, ex.W)(a, _);
        o()(null != w, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, g.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.u9)(w.skuId);
        let O = (0, G.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: k, logo: E } = (0, eg.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, T.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let S = i.useMemo(() => (0, V.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            W.default.track(ew.rMx.OPEN_MODAL, {
                type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: c,
                location_stack: I,
                sku_id: w.skuId,
                product_type: S
            }),
                w.items.forEach(z.oK);
        }, [c, I, w.skuId, w.items, S]);
        let y = (0, R.r)(),
            Z = t === h.Dvm.EXITING;
        if (null == b) return null;
        let A = (0, eN.ZS)(l.skuId),
            D = function () {
                let { keepBalancePillOverlayOpen: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(), e || (0, L.vp)();
            };
        return (0, r.jsx)(g.Gt, {
            value: I,
            children: (0, r.jsx)(h.Y0X, {
                hideShadow: !0,
                className: eE.modalRoot,
                returnRef: s,
                transitionState: t,
                size: h.CgR.DYNAMIC,
                children: (0, r.jsxs)(h.hzk, {
                    className: eE.modalContent,
                    children: [
                        (0, r.jsx)(eB, {
                            user: b,
                            product: a,
                            category: l,
                            onClose: D,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: f,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: w.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : w.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    asset: k,
                                    size: (0, ec.ML)(540),
                                    className: eE.categoryBanner,
                                    categoryBannerOverride: A
                                }),
                                (0, ep.o0)(a.skuId)
                                    ? a.skuId === eN.Vt.ORB_PROFILE_BADGE
                                        ? y || Z
                                            ? null
                                            : (0, r.jsx)(ed.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(eu.q, {})
                                          : (0, r.jsx)(em.b, {
                                                product: a,
                                                className: eE.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: b,
                                          product: null != N ? N : w
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eE.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eE.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eE.titleImage,
                                                style: null == A ? void 0 : A.pdpLogoStyle,
                                                src: E,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eE.headerButtonContainer,
                                            children: [
                                                O &&
                                                    (0, r.jsx)(en.B, {
                                                        skuId: w.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(h.olH, {
                                                    onClick: () => D(),
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
