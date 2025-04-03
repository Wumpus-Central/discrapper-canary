n.d(t, { default: () => eH }), n(47120), n(627341), n(266796);
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
    x = n(410030),
    P = n(100527),
    g = n(906732),
    C = n(570908),
    j = n(786761),
    _ = n(3148),
    w = n(739566),
    N = n(753206),
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
    q = n(188584),
    Y = n(635552),
    X = n(290175),
    Q = n(905357),
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
    ex = n(332246),
    eP = n(58201),
    eg = n(794324),
    eC = n(361110),
    ej = n(956472),
    e_ = n(832149),
    ew = n(215023),
    eN = n(981631),
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
                  variant: 'text-xxs/normal',
                  className: eE.learnMoreLink,
                  children: ek.NW.format(ek.t.Q1scdH, { helpdeskArticle: D.Z.getArticleURL(eN.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              })
            : null;
    },
    eB = (e) => {
        var t, n;
        let a,
            { product: s, user: c, category: m, shouldCheckoutWithOrbs: b, onClose: P, returnRef: C, previewingVariantIndexProps: j, selectedVariantIndex: _, tab: w } = e,
            { analyticsLocations: N } = (0, g.ZP)(),
            k = M.ZP.canUseCollectibles(c),
            { previewingVariantIndex: E } = j,
            S = (0, ex.N)(s, E),
            T = (0, eP.W)(s, _);
        o()(null != T, 'Selected product should not be null');
        let A = (0, J.L)(s),
            { isPurchased: B, isPartiallyOwnedBundle: W } = (0, J.L)(T),
            { isDisabled: D, disabledReason: F } = (0, X.G)(T.skuId),
            G = (0, V.ne)({
                product: T,
                isPartiallyOwnedBundle: W,
                isPurchased: B
            }),
            et = (0, p.e7)([H.Z], () => H.Z.purchases),
            en = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == T ? void 0 : T.skuId)),
            er = (0, x.ZP)(),
            ec = (0, f.wj)(er),
            eu = (0, V.G1)(T),
            ed = (0, V.ql)(T, eN.tuJ.DEFAULT),
            em = (null == ed ? void 0 : ed.amount) === 0,
            { firstAvatarDecoration: ep } = (0, $.R)(null != S ? S : T),
            ev = i.useMemo(() => (0, V.BH)(T, k), [T, k]),
            { handleUseNow: eb, isApplying: eg } = (0, Y.W)({
                product: T,
                onSuccess: P
            }),
            eC = (0, K.hv)('CollectiblesProductPreviewInfo'),
            ey = (0, Q.T)(T),
            { enabled: eL } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eZ,
                isOrbExclusive: eB,
                hasSufficientOrbs: eW
            } = (0, ej.Ip)({
                product: T,
                isPremiumUser: k,
                tab: w
            }),
            eD = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: T.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: eC,
                        onClose: (e) => (e ? P() : (0, eO.dG)())
                    }),
                [N, P, T.skuId, eC]
            );
        i.useEffect(() => {
            if (null != ep) return (0, v.cV)(ep), () => (0, v.cV)(void 0);
        }, [ep]);
        let eM = (e, t) => {
                let n = () => {
                        (0, R.q)({
                            skuId: T.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                (0, z.qg)({
                                    variantsReturnStyle: eC,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    P({ keepBalancePillOverlayOpen: !0 }),
                                    (0, e_.Z)({
                                        product: T,
                                        analyticsLocations: N,
                                        onCloseCallback: () => {
                                            (0, L.vp)();
                                        },
                                        itemConsumed: null == (t = n[0]) ? void 0 : t.consumed,
                                        purchaseType: ew.o8.ORB
                                    });
                            },
                            analyticsLocations: N
                        });
                    },
                    i = D ? ek.NW.string(ek.t.cTdr39) : ek.NW.string(ek.t.zqh7ZG),
                    a = !eW || D;
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
            eU = (e, t) => {
                let n = !eu && !em && !u.tq && !eB && G && T.type !== d.Z.NAMEPLATE,
                    i = t ? h.zxk.Colors.BRAND : h.zxk.Colors.PRIMARY,
                    a = (0, V.x6)(T) ? ek.NW.string(ek.t.V1AWw8) : T.type === d.Z.PROFILE_EFFECT ? ek.NW.string(ek.t.kAeDcH) : T.type === d.Z.NAMEPLATE ? ek.NW.string(ek.t.H3vhqa) : ek.NW.string(ek.t.AQ0Ven),
                    l = eL ? ek.NW.formatToPlainString(ek.t['cNSL/v'], { price: (0, U.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eE.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            className: eE.primaryButton,
                            innerClassName: eE.button,
                            look: h.zxk.Looks.FILLED,
                            onClick: eD,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(el.Z, {
                                product: T,
                                onSuccess: P,
                                color: i
                            })
                    ]
                });
            },
            { firstAvatarDecoration: ez, firstProfileEffect: eH } = (0, q.k)(T),
            eF =
                T.type === d.Z.BUNDLE
                    ? ek.NW.formatToPlainString(ek.t['jM8/7+'], {
                          avatarDecorationName: null != (t = null == ez ? void 0 : ez.name) ? t : '',
                          profileEffectName: null != (n = null == eH ? void 0 : eH.name) ? n : ''
                      })
                    : T.summary;
        return (0, r.jsxs)('div', {
            className: eE.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eE.titleContainer,
                    children: (0, r.jsx)(ea.Z, {
                        category: m,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eR, {
                    product: null != S ? S : T,
                    user: c
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eE.description,
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    product: T,
                                    isDarkText: !ec,
                                    isOrbExclusive: eB
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eE.headingWithItemTypePill,
                                    children: ey
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eF
                                }),
                                (0, r.jsx)(eA, { skuId: T.skuId }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(ee.U, {
                                          className: eE.priceTag,
                                          isPartiallyPurchased: W
                                      })
                                    : eu
                                      ? (0, r.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: eE.priceTag,
                                            children: ek.NW.string(ek.t.rt69oq)
                                        })
                                      : eL
                                        ? (0, r.jsx)(ef.a, {
                                              prices: eZ,
                                              product: T,
                                              isPremiumUser: k,
                                              discount: ev,
                                              hasSufficientOrbs: eW,
                                              isProductDisabled: D
                                          })
                                        : (0, r.jsx)(es.Z, {
                                              product: T,
                                              discount: ev,
                                              isPremiumUser: k,
                                              className: k ? eE.priceTag : eE.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, r.jsx)(eh.P, {
                            variantGroupProduct: s,
                            previewingVariantIndexProps: j,
                            className: eE.variantsSwitch,
                            purchases: et
                        }),
                        null !== F &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-xs/normal',
                                className: eE.disabledReason,
                                children: F
                            }),
                        (0, r.jsx)('div', {
                            className: eE.buttonsContainer,
                            children:
                                !eu || k || em
                                    ? G
                                        ? B
                                            ? (0, r.jsx)(h.zxk, {
                                                  className: eE.button,
                                                  look: h.zxk.Looks.FILLED,
                                                  onClick: eb,
                                                  submitting: eg,
                                                  children: ek.NW.string(ek.t.MAS7uL)
                                              })
                                            : eu
                                              ? (0, r.jsx)(h.zxk, {
                                                    className: eE.button,
                                                    look: h.zxk.Looks.FILLED,
                                                    submitting: en,
                                                    submittingStartedLabel: ek.NW.string(ek.t['TYw+9v']),
                                                    submittingFinishedLabel: ek.NW.string(ek.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, z.fK)(T.skuId),
                                                            P(),
                                                            (0, e_.Z)({
                                                                product: T,
                                                                analyticsLocations: N,
                                                                purchaseType: ew.o8.PREMIUM_PURCHASE
                                                            });
                                                    },
                                                    children: ek.NW.string(ek.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eZ.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eO.pK.DISCORD_ORB ? eM(e, n) : eU(e, n);
                                                    })
                                                })
                                        : null
                                    : ((a = ek.NW.string(ek.t.sEAnVF)),
                                      (0, r.jsx)(O.Z, {
                                          subscriptionTier: eI.Si.TIER_2,
                                          fullWidth: !0,
                                          buttonText: a,
                                          onClick: eo.v,
                                          onSubscribeModalClose: () => {
                                              (0, eo.T)({
                                                  product: T,
                                                  category: m,
                                                  shouldCheckoutWithOrbs: b,
                                                  returnRef: C,
                                                  analyticsLocations: N
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(h.Text, {
                            className: l()(eE.disclaimer, !ec && eE.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: eu && !B ? ek.NW.string(ek.t.O2K0xM) : null
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
                selected: !1,
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
                    state: eN.yb.SENT,
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
                        N.Z,
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
    eH = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: s, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: v } = e,
            b = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            x = (0, eC.f)(a),
            { previewingVariantIndex: C } = x,
            j = (0, p.e7)([H.Z], () => H.Z.purchases),
            _ = (0, F.o)(a, j),
            w = (0, ex.N)(a, C),
            N = (0, eP.W)(a, _);
        o()(null != N, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, g.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.u9)(N.skuId);
        let [O] = N.items,
            k = (0, G.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: E, logo: S } = (0, eg.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, T.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]),
            i.useEffect(() => {
                let e = (null == O ? void 0 : O.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                W.default.track(eN.rMx.OPEN_MODAL, {
                    type: eN.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: c,
                    location_stack: I,
                    sku_id: N.skuId,
                    product_type: e
                }),
                    N.items.map(z.oK);
            }, [c, I, null == O ? void 0 : O.type, N.skuId, N.items]);
        let y = (0, R.r)(),
            Z = t === h.Dvm.EXITING;
        if (null == b) return null;
        let A = (0, ew.ZS)(l.skuId),
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
                            previewingVariantIndexProps: x,
                            selectedVariantIndex: _,
                            shouldCheckoutWithOrbs: f,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: N.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : N.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    asset: E,
                                    size: (0, ec.ML)(540),
                                    className: eE.categoryBanner,
                                    categoryBannerOverride: A
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
                                                className: eE.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eM, {
                                          user: b,
                                          product: null != w ? w : N
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eE.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eE.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eE.titleImage,
                                                style: null == A ? void 0 : A.pdpLogoStyle,
                                                src: S,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eE.headerButtonContainer,
                                            children: [
                                                k &&
                                                    (0, r.jsx)(en.B, {
                                                        skuId: N.skuId,
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
