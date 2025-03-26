n.d(t, { default: () => eM }), n(47120), n(627341), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(314794),
    p = n(399606),
    f = n(780384),
    v = n(481060),
    h = n(809206),
    b = n(727637),
    x = n(410030),
    P = n(100527),
    g = n(906732),
    C = n(570908),
    j = n(786761),
    w = n(3148),
    _ = n(739566),
    N = n(753206),
    I = n(333867),
    O = n(197115),
    k = n(921813),
    S = n(876917),
    E = n(643879),
    y = n(484459),
    T = n(822857),
    L = n(82856),
    Z = n(960919),
    A = n(275388),
    R = n(25990),
    B = n(594174),
    W = n(626135),
    D = n(74538),
    M = n(937615),
    z = n(335131),
    H = n(1870),
    U = n(429368),
    F = n(884697),
    V = n(72462),
    G = n(228624),
    K = n(188584),
    q = n(635552),
    Y = n(905357),
    X = n(724994),
    J = n(328456),
    Q = n(390698),
    $ = n(141011),
    ee = n(525518),
    et = n(426171),
    en = n(224068),
    er = n(813083),
    ei = n(680942),
    ea = n(558060),
    el = n(237031),
    eo = n(372654),
    es = n(38914),
    ec = n(259673),
    eu = n(508925),
    ed = n(755419),
    em = n(953405),
    ep = n(453713),
    ef = n(616066),
    ev = n(22267),
    eh = n(332246),
    eb = n(58201),
    ex = n(794324),
    eP = n(361110),
    eg = n(956472),
    eC = n(832149),
    ej = n(215023),
    ew = n(981631),
    e_ = n(474936),
    eN = n(231338),
    eI = n(388032),
    eO = n(885611);
function ek(e) {
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
let eE = {
        mallow: {
            name: eI.NW.string(eI.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: eI.NW.string(eI.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: eI.NW.string(eI.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: eI.NW.string(eI.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: eI.NW.string(eI.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    ey = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, b.Z)(l);
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
                        isHovering: o,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: l,
                    className: eO.nameplatePreviewContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: eO.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: o
                    })
                })
            )
            .otherwise(() => null);
    },
    eT = (e) => {
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
            className: eO.bundlePreviewContainer,
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
                                className: eO.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(ey, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eO.bundleSlideTitle,
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
    eL = (e) => {
        let { product: t, user: n } = e;
        return (0, F.x6)(t)
            ? (0, r.jsx)(eT, {
                  product: t,
                  user: n
              })
            : (0, ed.o0)(t.skuId)
              ? (0, r.jsx)(eu.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(ey, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eZ = (e) => {
        var t, n;
        let a;
        let { product: o, user: c, category: m, shouldCheckoutWithOrbs: b, onClose: P, returnRef: C, previewingVariantIndexProps: j, selectedVariantIndex: w, tab: _ } = e,
            { analyticsLocations: N } = (0, g.ZP)(),
            k = D.ZP.canUseCollectibles(c),
            { previewingVariantIndex: S } = j,
            E = (0, eh.N)(o, S),
            y = (0, eb.W)(o, w);
        s()(null != y, 'Selected product should not be null');
        let R = (0, X.L)(o),
            { isPurchased: B, isPartiallyOwnedBundle: W } = (0, X.L)(y),
            U = (0, F.ne)({
                product: y,
                isPartiallyOwnedBundle: W,
                isPurchased: B
            }),
            V = (0, p.e7)([H.Z], () => H.Z.purchases),
            $ = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == y ? void 0 : y.skuId)),
            ee = (0, x.ZP)(),
            et = (0, f.wj)(ee),
            eo = (0, F.G1)(y),
            es = (0, F.ql)(y, ew.tuJ.DEFAULT),
            ec = (null == es ? void 0 : es.amount) === 0,
            { firstAvatarDecoration: eu } = (0, J.R)(null != E ? E : y),
            ed = i.useMemo(() => (0, F.BH)(y, k), [y, k]),
            { handleUseNow: ef, isApplying: ev } = (0, q.W)({
                product: y,
                onSuccess: P
            }),
            ex = (0, G.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, Y.T)(y),
            { enabled: ej } = (0, T.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eE,
                isOrbExclusive: ey,
                hasSufficientOrbs: eT
            } = (0, eg.Ip)({
                product: y,
                isPremiumUser: k,
                tab: _
            }),
            eZ = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: y.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: ex,
                        onClose: (e) => (e ? P() : (0, eN.dG)())
                    }),
                [N, P, y.skuId, ex]
            );
        i.useEffect(() => {
            if (null != eu) return (0, h.cV)(eu), () => (0, h.cV)(void 0);
        }, [eu]);
        let eA = (e, t) => {
                let n = () => {
                    (0, A.q)({
                        skuId: y.skuId,
                        onCheckoutSuccess: (e) => {
                            var t;
                            let { entitlements: n } = e;
                            (0, z.qg)({
                                variantsReturnStyle: ex,
                                location: 'collectible_checkout_with_orb'
                            }),
                                P({ keepBalancePillOverlayOpen: !0 }),
                                (0, eC.Z)({
                                    product: y,
                                    analyticsLocations: N,
                                    onCloseCallback: () => {
                                        (0, L.vp)();
                                    },
                                    itemConsumed: null === (t = n[0]) || void 0 === t ? void 0 : t.consumed
                                });
                        },
                        analyticsLocations: N
                    });
                };
                return (0, r.jsx)(v.ua7, {
                    position: 'top',
                    text: eI.NW.string(eI.t.zqh7ZG),
                    shouldShow: !eT,
                    children: (i) =>
                        (0, r.jsx)(
                            v.zxk,
                            eS(ek({}, i), {
                                innerClassName: eO.button,
                                look: v.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: !eT,
                                color: t ? v.zxk.Colors.BRAND : v.zxk.Colors.PRIMARY,
                                children: eI.NW.format(eI.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(Z.Z, {})
                                })
                            })
                        )
                });
            },
            eR = (e, t) => {
                let n = !eo && !ec && !u.tq && !ey && U && y.type !== d.Z.NAMEPLATE,
                    i = t ? v.zxk.Colors.BRAND : v.zxk.Colors.PRIMARY,
                    a = (0, F.x6)(y) ? eI.NW.string(eI.t.V1AWw8) : y.type === d.Z.PROFILE_EFFECT ? eI.NW.string(eI.t.kAeDcH) : y.type === d.Z.NAMEPLATE ? eI.NW.string(eI.t.H3vhqa) : eI.NW.string(eI.t.AQ0Ven),
                    l = ej ? eI.NW.formatToPlainString(eI.t['cNSL/v'], { price: (0, M.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eO.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(v.zxk, {
                            className: eO.primaryButton,
                            innerClassName: eO.button,
                            look: v.zxk.Looks.FILLED,
                            onClick: eZ,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(ei.Z, {
                                product: y,
                                onSuccess: P,
                                color: i
                            })
                    ]
                });
            },
            { firstAvatarDecoration: eB, firstProfileEffect: eW } = (0, K.k)(y),
            eD =
                y.type === d.Z.BUNDLE
                    ? eI.NW.formatToPlainString(eI.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eB ? void 0 : eB.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : ''
                      })
                    : y.summary;
        return (0, r.jsxs)('div', {
            className: eO.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eO.titleContainer,
                    children: (0, r.jsx)(er.Z, {
                        category: m,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eL, {
                    product: null != E ? E : y,
                    user: c
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eO.description,
                            children: [
                                (0, r.jsx)(en.Z, {
                                    product: y,
                                    isDarkText: !et,
                                    isOrbExclusive: ey
                                }),
                                (0, r.jsx)(v.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eO.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: eD
                                }),
                                R.isPurchased || R.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: eO.priceTag,
                                          isPartiallyPurchased: W
                                      })
                                    : eo
                                      ? (0, r.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: eO.priceTag,
                                            children: eI.NW.string(eI.t.rt69oq)
                                        })
                                      : ej
                                        ? (0, r.jsx)(em.a, {
                                              prices: eE,
                                              product: y,
                                              isPremiumUser: k,
                                              discount: ed
                                          })
                                        : (0, r.jsx)(ea.Z, {
                                              product: y,
                                              discount: ed,
                                              isPremiumUser: k,
                                              className: k ? eO.priceTag : eO.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, r.jsx)(ep.P, {
                            variantGroupProduct: o,
                            previewingVariantIndexProps: j,
                            className: eO.variantsSwitch,
                            purchases: V
                        }),
                        (0, r.jsx)('div', {
                            className: eO.buttonsContainer,
                            children:
                                !eo || k || ec
                                    ? U
                                        ? B
                                            ? (0, r.jsx)(v.zxk, {
                                                  className: eO.button,
                                                  look: v.zxk.Looks.FILLED,
                                                  onClick: ef,
                                                  submitting: ev,
                                                  children: eI.NW.string(eI.t.MAS7uL)
                                              })
                                            : eo
                                              ? (0, r.jsx)(v.zxk, {
                                                    className: eO.button,
                                                    look: v.zxk.Looks.FILLED,
                                                    submitting: $,
                                                    submittingStartedLabel: eI.NW.string(eI.t['TYw+9v']),
                                                    submittingFinishedLabel: eI.NW.string(eI.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, z.fK)(y.skuId),
                                                            P(),
                                                            (0, eC.Z)({
                                                                product: y,
                                                                analyticsLocations: N
                                                            });
                                                    },
                                                    children: eI.NW.string(eI.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eE.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eN.pK.DISCORD_ORB ? eA(e, n) : eR(e, n);
                                                    })
                                                })
                                        : null
                                    : ((a = eI.NW.string(eI.t.sEAnVF)),
                                      (0, r.jsx)(O.Z, {
                                          subscriptionTier: e_.Si.TIER_2,
                                          fullWidth: !0,
                                          buttonText: a,
                                          onClick: el.v,
                                          onSubscribeModalClose: () => {
                                              (0, el.T)({
                                                  product: y,
                                                  category: m,
                                                  shouldCheckoutWithOrbs: b,
                                                  returnRef: C,
                                                  analyticsLocations: N
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(v.Text, {
                            className: l()(eO.disclaimer, !et && eO.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: eo && !B ? eI.NW.string(eI.t.O2K0xM) : null
                        })
                    ]
                })
            ]
        });
    },
    eA = (e) => {
        let { user: t } = e;
        return (0, r.jsx)('div', {
            className: eO.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: v.Skl.ONLINE
                }),
                name: t.name,
                selected: !1,
                innerClassName: eO.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eR = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: eO.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eA, { user: eE.mallow }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eO.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eA, { user: eE.phibi }),
                (0, r.jsx)('div', {
                    className: eO.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: eO.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eA, { user: eE.locke }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eO.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eA, { user: eE.boom }),
                (0, r.jsx)(eA, { user: eE.cherry })
            ]
        });
    },
    eB = (e) => {
        let { product: t, user: n } = e,
            i = D.ZP.canUsePremiumProfileCustomization(n),
            a = (0, p.cj)([R.Z], () => R.Z.getAllPending()),
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
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(a, ['pendingAvatar']),
            s = (0, E.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, J.R)(t),
            v = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eO.previewsContainerInner : eO.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eR, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  k.Z,
                                  eS(ek({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: m,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !v,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: c
                                  })
                              ),
                              c && (0, r.jsx)(eD, { user: n })
                          ]
                      })
        });
    },
    eW = (e) => {
        let { author: t } = e;
        return (0, j.e5)(
            eS(
                ek(
                    {},
                    (0, w.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eI.NW.string(eI.t.d5YwKy)
                    })
                ),
                {
                    state: ew.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eD = (e) => {
        let { user: t } = e,
            n = eW({ author: t });
        return (0, r.jsx)(v.Rny, {
            children: (0, r.jsxs)(v.Zbd, {
                className: eO.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        N.Z,
                        {
                            className: eO.mockMessage,
                            author: (0, _.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: eO.mockInput,
                        children: [
                            (0, r.jsx)(v.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eO.mockInputButton
                            }),
                            (0, r.jsx)(v.EO4, {
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
    eM = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: h } = e,
            b = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            x = (0, eP.f)(a),
            { previewingVariantIndex: C } = x,
            j = (0, p.e7)([H.Z], () => H.Z.purchases),
            w = (0, U.o)(a, j),
            _ = (0, eh.N)(a, C),
            N = (0, eb.W)(a, w);
        s()(null != N, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, g.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, et.u9)(N.skuId);
        let [O] = N.items,
            k = (0, V.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: S, logo: E } = (0, ex.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, y.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]),
            i.useEffect(() => {
                let e = (null == O ? void 0 : O.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                W.default.track(ew.rMx.OPEN_MODAL, {
                    type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: c,
                    location_stack: I,
                    sku_id: N.skuId,
                    product_type: e
                }),
                    N.items.map(z.oK);
            }, [c, I, null == O ? void 0 : O.type, N.skuId, N.items]);
        let T = (0, A.r)(),
            Z = t === v.Dvm.EXITING;
        if (null == b) return null;
        let R = (0, ej.ZS)(l.skuId),
            D = function () {
                let { keepBalancePillOverlayOpen: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(), e || (0, L.vp)();
            };
        return (0, r.jsx)(g.Gt, {
            value: I,
            children: (0, r.jsx)(v.Y0X, {
                hideShadow: !0,
                className: eO.modalRoot,
                returnRef: o,
                transitionState: t,
                size: v.CgR.DYNAMIC,
                children: (0, r.jsxs)(v.hzk, {
                    className: eO.modalContent,
                    children: [
                        (0, r.jsx)(eZ, {
                            user: b,
                            product: a,
                            category: l,
                            onClose: D,
                            previewingVariantIndexProps: x,
                            selectedVariantIndex: w,
                            shouldCheckoutWithOrbs: f,
                            tab: h
                        }),
                        (0, r.jsxs)('div', {
                            className: N.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eO.fractionalNitroPreviewContainer : N.type === d.Z.AVATAR_DECORATION ? eO.collectiblePreviewsContainerWithChat : eO.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)($.Z, {
                                    asset: S,
                                    size: (0, eo.ML)(540),
                                    className: eO.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, ed.o0)(a.skuId)
                                    ? a.skuId === ej.xJ
                                        ? T || Z
                                            ? null
                                            : (0, r.jsx)(ec.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(es.q, {})
                                          : (0, r.jsx)(eu.b, {
                                                product: a,
                                                className: eO.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eB, {
                                          user: b,
                                          product: null != _ ? _ : N
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eO.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eO.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eO.titleImage,
                                                style: null == R ? void 0 : R.pdpLogoStyle,
                                                src: E,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eO.headerButtonContainer,
                                            children: [
                                                k &&
                                                    (0, r.jsx)(ee.B, {
                                                        skuId: N.skuId,
                                                        tab: h
                                                    }),
                                                (0, r.jsx)(v.olH, {
                                                    onClick: () => D(),
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
