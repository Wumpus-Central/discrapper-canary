n.d(t, { default: () => eR }), n(47120), n(627341), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(979554),
    m = n(399606),
    p = n(780384),
    f = n(481060),
    v = n(809206),
    h = n(727637),
    x = n(410030),
    b = n(100527),
    P = n(906732),
    g = n(570908),
    C = n(786761),
    j = n(3148),
    w = n(739566),
    N = n(753206),
    _ = n(333867),
    I = n(197115),
    k = n(921813),
    T = n(876917),
    y = n(643879),
    S = n(484459),
    O = n(43747),
    E = n(822857),
    L = n(960919),
    A = n(25990),
    Z = n(594174),
    W = n(626135),
    R = n(74538),
    B = n(937615),
    D = n(335131),
    F = n(1870),
    z = n(429368),
    M = n(884697),
    V = n(72462),
    H = n(228624),
    U = n(188584),
    G = n(635552),
    K = n(905357),
    q = n(724994),
    Y = n(328456),
    X = n(390698),
    Q = n(141011),
    J = n(525518),
    $ = n(426171),
    ee = n(224068),
    et = n(813083),
    en = n(823941),
    er = n(680942),
    ei = n(558060),
    ea = n(237031),
    es = n(372654),
    el = n(508925),
    eo = n(755419),
    ec = n(410937),
    ed = n(385797),
    eu = n(453713),
    em = n(616066),
    ep = n(22267),
    ef = n(332246),
    ev = n(58201),
    eh = n(361110),
    ex = n(956472),
    eb = n(832149),
    eP = n(215023),
    eg = n(981631),
    eC = n(474936),
    ej = n(231338),
    ew = n(388032),
    eN = n(453803);
function e_(e) {
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
function eI(e, t) {
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
let ek = {
        mallow: {
            name: ew.NW.string(ew.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: ew.NW.string(ew.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: ew.NW.string(ew.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: ew.NW.string(ew.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: ew.NW.string(ew.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    eT = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            s = i.useRef(null),
            l = (0, h.Z)(s);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eN.bundleAvatarPreviewContainer : eN.avatarPreviewContainer,
                    children: (0, r.jsx)(em.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eN.bundlePfxPreviewContainer : eN.pfxPreviewContainer,
                    ref: s,
                    children: (0, r.jsx)(T.Z, {
                        profileEffectId: t.id,
                        isHovering: l,
                        removeSetHeight: !0
                    })
                })
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: s,
                    className: eN.nameplatePreviewContainer,
                    children: (0, r.jsx)(ep.Z, {
                        className: eN.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: l
                    })
                })
            )
            .otherwise(() => null);
    },
    ey = (e) => {
        let { product: t, user: n } = e,
            [a, s] = i.useState(0);
        i.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && s((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let l = t.items.length;
        return (0, r.jsx)('div', {
            className: eN.bundlePreviewContainer,
            children: (0, r.jsx)(f.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = '('.concat(i + 1, '/').concat(l, ')');
                    return (0, r.jsx)(
                        f.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)('div', {
                                className: eN.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eT, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eN.bundleSlideTitle,
                                        children: [null == s ? void 0 : s.name, ' ', o]
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
    eS = (e) => {
        let { product: t, user: n } = e;
        return (0, M.x6)(t)
            ? (0, r.jsx)(ey, {
                  product: t,
                  user: n
              })
            : (0, eo.o)(t.skuId)
              ? (0, r.jsx)(el.b, { product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eT, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eO = (e) => {
        var t, n, a;
        let { product: l, user: c, category: h, onClose: b, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: j, tab: w } = e,
            { analyticsLocations: N } = (0, P.ZP)(),
            k = R.ZP.canUseCollectibles(c),
            { previewingVariantIndex: T } = C,
            y = (0, ef.N)(l, T),
            S = (0, ev.W)(l, j);
        o()(null != S, 'Selected product should not be null');
        let A = (0, q.L)(l),
            { isPurchased: Z, isPartiallyOwnedBundle: W } = (0, q.L)(S),
            z = (0, m.e7)([F.Z], () => F.Z.purchases),
            V = (0, m.e7)([F.Z], () => F.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            Q = (0, x.ZP)(),
            J = (0, p.wj)(Q),
            $ = (0, M.G1)(S),
            en = (0, M.ql)(S, eg.tuJ.DEFAULT),
            es = (null == en ? void 0 : en.amount) === 0,
            { firstAvatarDecoration: el } = (0, Y.R)(null != y ? y : S),
            eo = i.useMemo(() => (0, M.BH)(S, k), [S, k]),
            { handleUseNow: em, isApplying: ep } = (0, G.W)({
                product: S,
                onSuccess: b
            }),
            eh = (0, H.hv)('CollectiblesProductPreviewInfo'),
            eP = (0, K.T)(S),
            { enabled: e_ } = (0, E.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: eI, checkoutEligiblePrices: ek } = (0, ex.I)({
                product: S,
                isPremiumUser: k,
                tab: w
            }),
            eT = e_ && (null === (t = ek[0]) || void 0 === t ? void 0 : t.currency) === ej.pK.DISCORD_ORB,
            { redeemVirtualCurrency: ey, isSubmitting: eO, error: eE } = (0, O.f)(),
            { balance: eL } = (0, O.A)(),
            eA = i.useCallback(
                () =>
                    (0, _.Z)({
                        skuId: S.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: eh,
                        onClose: (e) => (e ? b() : (0, ej.dG)())
                    }),
                [N, b, S.skuId, eh]
            );
        i.useEffect(() => {
            if (null != el) return (0, v.cV)(el), () => (0, v.cV)(void 0);
        }, [el]);
        let eZ = (e) =>
                (0, r.jsx)(I.Z, {
                    subscriptionTier: eC.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: ea.v,
                    onSubscribeModalClose: () => {
                        (0, ea.T)({
                            product: S,
                            category: h,
                            returnRef: g,
                            analyticsLocations: N
                        });
                    }
                }),
            { firstAvatarDecoration: eW, firstProfileEffect: eR } = (0, U.k)(S),
            eB =
                S.type === u.Z.BUNDLE
                    ? ew.NW.formatToPlainString(ew.t['jM8/7+'], {
                          avatarDecorationName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : '',
                          profileEffectName: null !== (a = null == eR ? void 0 : eR.name) && void 0 !== a ? a : ''
                      })
                    : S.summary;
        return (0, r.jsxs)('div', {
            className: eN.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eN.titleContainer,
                    children: (0, r.jsx)(et.Z, {
                        category: h,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eS, {
                    product: null != y ? y : S,
                    user: c
                }),
                (0, r.jsxs)('div', {
                    children: [
                        null == eE
                            ? null
                            : (0, r.jsxs)('div', {
                                  className: eN.errorMessageLine,
                                  children: [
                                      (0, r.jsx)(f.P4T, {
                                          size: 'xs',
                                          color: 'white'
                                      }),
                                      (0, r.jsx)(f.Text, {
                                          variant: 'text-xs/medium',
                                          children: eE.message
                                      })
                                  ]
                              }),
                        (0, r.jsxs)('div', {
                            className: eN.description,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    product: S,
                                    isDarkText: !J
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eN.headingWithItemTypePill,
                                    children: eP
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eB
                                }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(X.U, {
                                          className: eN.priceTag,
                                          isPartiallyPurchased: W
                                      })
                                    : $
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: eN.priceTag,
                                            children: ew.NW.string(ew.t.rt69oq)
                                        })
                                      : e_
                                        ? eT
                                            ? (0, r.jsx)(ec.Z, { orbPrice: ek[0] })
                                            : (0, r.jsx)(ed.Z, {
                                                  displayPrices: eI,
                                                  isPremiumUser: k,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, r.jsx)(ei.Z, {
                                              product: S,
                                              discount: eo,
                                              isPremiumUser: k,
                                              className: k ? eN.priceTag : eN.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, r.jsx)(eu.P, {
                            variantGroupProduct: l,
                            previewingVariantIndexProps: C,
                            className: eN.variantsSwitch,
                            purchases: z
                        }),
                        (0, r.jsx)('div', {
                            className: eN.buttonsContainer,
                            children: (0, r.jsxs)('div', {
                                className: eN.primaryButtons,
                                children: [
                                    (() => {
                                        if ($ && !k && !es) return eZ(ew.NW.string(ew.t.sEAnVF));
                                        if (Z)
                                            return (0, r.jsx)(f.zxk, {
                                                className: eN.button,
                                                look: f.zxk.Looks.FILLED,
                                                onClick: em,
                                                submitting: ep,
                                                children: ew.NW.string(ew.t.MAS7uL)
                                            });
                                        if (W) return null;
                                        if ($)
                                            return (0, r.jsx)(f.zxk, {
                                                className: eN.button,
                                                look: f.zxk.Looks.FILLED,
                                                submitting: V,
                                                submittingStartedLabel: ew.NW.string(ew.t['TYw+9v']),
                                                submittingFinishedLabel: ew.NW.string(ew.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, D.fK)(S.skuId),
                                                        b(),
                                                        (0, eb.Z)({
                                                            product: S,
                                                            analyticsLocations: N
                                                        });
                                                },
                                                children: ew.NW.string(ew.t.zp6caG)
                                            });
                                        let e = eT && (null == eL || eL < ek[0].amount);
                                        return (0, r.jsx)(f.zxk, {
                                            className: s()(eN.button, { [eN.enabledButton]: !e }),
                                            innerClassName: eN.buttonInner,
                                            look: f.zxk.Looks.FILLED,
                                            submitting: eO,
                                            disabled: e,
                                            onClick: () => {
                                                eT
                                                    ? ey(S.skuId, () => {
                                                          b(),
                                                              (0, D.qg)({
                                                                  variantsReturnStyle: eh,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, eb.Z)({
                                                                  product: S,
                                                                  analyticsLocations: N
                                                              });
                                                      })
                                                    : eA();
                                            },
                                            children: eT
                                                ? ew.NW.format(ew.t.kAgx5O, {
                                                      orbPrice: ek[0].amount,
                                                      orbIconHook: () => (0, r.jsx)(L.Z, {})
                                                  })
                                                : (0, M.x6)(S)
                                                  ? ew.NW.string(ew.t.V1AWw8)
                                                  : S.type === u.Z.PROFILE_EFFECT
                                                    ? ew.NW.string(ew.t.kAeDcH)
                                                    : ew.NW.string(ew.t.AQ0Ven)
                                        });
                                    })(),
                                    !$ &&
                                        !es &&
                                        !d.tq &&
                                        (0, r.jsx)(er.Z, {
                                            product: S,
                                            onSuccess: b,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !eT || ek.length <= 1
                            ? null
                            : (0, r.jsx)(f.P3F, {
                                  onClick: eA,
                                  className: eN.payWithFiatLink,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: 'text-xxs/normal',
                                      className: eN.payWithFiatLinkText,
                                      children: ew.NW.format(ew.t.hDiZtL, { price: (0, B.T4)(ek[1].amount, ek[1].currency) })
                                  })
                              }),
                        (0, r.jsx)(f.Text, {
                            className: s()(eN.disclaimer, !J && eN.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: Z ? null : $ ? ew.NW.string(ew.t.O2K0xM) : (0, M.x6)(S) ? ew.NW.string(ew.t.Ifvd7O) : S.type === u.Z.PROFILE_EFFECT ? ew.NW.string(ew.t.pxunjo) : ew.NW.string(ew.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eE = (e) => {
        let { user: t } = e;
        return (0, r.jsx)('div', {
            className: eN.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(g.Z, {
                avatar: (0, r.jsx)(f.qEK, {
                    src: t.avatarSrc,
                    size: f.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: f.Skl.ONLINE
                }),
                name: t.name,
                selected: !1,
                innerClassName: eN.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eL = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: eN.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eE, { user: ek.mallow }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [ew.NW.string(ew.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eE, { user: ek.phibi }),
                (0, r.jsx)('div', {
                    className: eN.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ep.Z, {
                        className: eN.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0
                    })
                }),
                (0, r.jsx)(eE, { user: ek.locke }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [ew.NW.string(ew.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eE, { user: ek.boom }),
                (0, r.jsx)(eE, { user: ek.cherry })
            ]
        });
    },
    eA = (e) => {
        let { product: t, user: n } = e,
            i = R.ZP.canUsePremiumProfileCustomization(n),
            a = (0, m.cj)([A.Z], () => A.Z.getAllPending()),
            { pendingAvatarV2: s } = a,
            l = (function (e, t) {
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
            })(a, ['pendingAvatarV2']),
            o = (0, y.SD)({
                userId: n.id,
                image: s
            }),
            c = t.type === u.Z.AVATAR_DECORATION,
            [d] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: f } = (0, Y.R)(t),
            v = null != f;
        return (0, r.jsx)('div', {
            className: (null == d ? void 0 : d.type) === u.Z.AVATAR_DECORATION ? eN.previewsContainerInner : eN.profileEffectPreviewsContainerInner,
            children:
                (null == d ? void 0 : d.type) === u.Z.NAMEPLATE
                    ? (0, r.jsx)(eL, {
                          user: n,
                          nameplate: d
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  k.Z,
                                  eI(e_({}, l), {
                                      pendingAvatar: o,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: p,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !v,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: c
                                  })
                              ),
                              c && (0, r.jsx)(eW, { user: n })
                          ]
                      })
        });
    },
    eZ = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            eI(
                e_(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ew.NW.string(ew.t.d5YwKy)
                    })
                ),
                {
                    state: eg.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eW = (e) => {
        let { user: t } = e,
            n = eZ({ author: t });
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsxs)(f.Zbd, {
                className: eN.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        N.Z,
                        {
                            className: eN.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: eN.mockInput,
                        children: [
                            (0, r.jsx)(f.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eN.mockInputButton
                            }),
                            (0, r.jsx)(f.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eN.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eR = (e) => {
        var t;
        let { transitionState: n, onClose: a, product: s, category: l, returnRef: c, analyticsSource: d, analyticsLocations: p, tab: v } = e,
            h = (0, m.e7)([Z.default], () => Z.default.getCurrentUser()),
            x = (0, eh.f)(s),
            { previewingVariantIndex: g } = x,
            C = (0, m.e7)([F.Z], () => F.Z.purchases),
            j = (0, z.o)(s, C),
            w = (0, ef.N)(s, g),
            N = (0, ev.W)(s, j);
        o()(null != N, 'Selected product should not be null');
        let { analyticsLocations: _ } = (0, P.ZP)([...p, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, $.u9)(N.skuId);
        let [I] = N.items,
            k = (0, V.s)('CollectiblesShopProductDetailsModal');
        if (
            (i.useEffect(() => {
                null != h && (0, S.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            i.useEffect(() => {
                let e = (null == I ? void 0 : I.type) === u.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                W.default.track(eg.rMx.OPEN_MODAL, {
                    type: eg.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: d,
                    location_stack: _,
                    sku_id: N.skuId,
                    product_type: e
                }),
                    N.items.map(D.oK);
            }, [d, _, null == I ? void 0 : I.type, N.skuId, N.items]),
            null == h)
        )
            return null;
        let T = (0, eP.ZS)(l.skuId);
        return (0, r.jsx)(P.Gt, {
            value: _,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: eN.modalRoot,
                returnRef: c,
                transitionState: n,
                size: f.CgR.DYNAMIC,
                children: (0, r.jsxs)(f.hzk, {
                    className: eN.modalContent,
                    children: [
                        (0, r.jsx)(eO, {
                            user: h,
                            product: s,
                            category: l,
                            onClose: a,
                            previewingVariantIndexProps: x,
                            selectedVariantIndex: j,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: N.type === u.Z.AVATAR_DECORATION ? eN.collectiblePreviewsContainerWithChat : eN.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(Q.Z, {
                                    asset: null !== (t = l.pdpBg) && void 0 !== t ? t : s.banner,
                                    size: (0, es.ML)(540),
                                    className: eN.categoryBanner,
                                    categoryBannerOverride: T
                                }),
                                (0, eo.o)(s.skuId)
                                    ? (0, r.jsx)(el.b, {
                                          product: s,
                                          className: eN.externalProductProfilePreview
                                      })
                                    : (0, r.jsx)(eA, {
                                          user: h,
                                          product: null != w ? w : N
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eN.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eN.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eN.titleImage,
                                                style: null == T ? void 0 : T.pdpLogoStyle,
                                                src: (0, M.uV)(l.logo, { size: en.n }),
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eN.headerButtonContainer,
                                            children: [
                                                k && (0, r.jsx)(J.B, { skuId: N.skuId }),
                                                (0, r.jsx)(f.olH, {
                                                    onClick: a,
                                                    className: eN.modalCloseButton,
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
