n.d(t, { default: () => eD }), n(47120), n(627341), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    p = n(780384),
    f = n(481060),
    v = n(809206),
    h = n(727637),
    b = n(410030),
    x = n(100527),
    P = n(906732),
    g = n(570908),
    C = n(786761),
    j = n(3148),
    w = n(739566),
    N = n(753206),
    O = n(333867),
    _ = n(197115),
    I = n(921813),
    k = n(876917),
    y = n(643879),
    T = n(484459),
    S = n(43747),
    E = n(822857),
    L = n(82856),
    Z = n(960919),
    A = n(25990),
    W = n(594174),
    R = n(626135),
    B = n(74538),
    D = n(937615),
    F = n(335131),
    z = n(1870),
    M = n(429368),
    V = n(884697),
    H = n(72462),
    U = n(228624),
    G = n(188584),
    K = n(635552),
    q = n(905357),
    X = n(724994),
    Y = n(328456),
    J = n(390698),
    Q = n(141011),
    $ = n(525518),
    ee = n(426171),
    et = n(224068),
    en = n(813083),
    er = n(823941),
    ei = n(680942),
    ea = n(558060),
    es = n(237031),
    el = n(372654),
    eo = n(259673),
    ec = n(508925),
    eu = n(755419),
    ed = n(410937),
    em = n(385797),
    ep = n(453713),
    ef = n(616066),
    ev = n(22267),
    eh = n(332246),
    eb = n(58201),
    ex = n(361110),
    eP = n(956472),
    eg = n(832149),
    eC = n(215023),
    ej = n(981631),
    ew = n(474936),
    eN = n(231338),
    eO = n(388032),
    e_ = n(885611);
function eI(e) {
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
let ey = {
        mallow: {
            name: eO.NW.string(eO.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: eO.NW.string(eO.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: eO.NW.string(eO.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: eO.NW.string(eO.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: eO.NW.string(eO.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    eT = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            s = i.useRef(null),
            l = (0, h.Z)(s);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
                    children: (0, r.jsx)(ef.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
                    ref: s,
                    children: (0, r.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: l,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: s,
                    className: e_.nameplatePreviewContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: e_.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: l
                    })
                })
            )
            .otherwise(() => null);
    },
    eS = (e) => {
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
            className: e_.bundlePreviewContainer,
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
                                className: e_.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eT, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: e_.bundleSlideTitle,
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
    eE = (e) => {
        let { product: t, user: n } = e;
        return (0, V.x6)(t)
            ? (0, r.jsx)(eS, {
                  product: t,
                  user: n
              })
            : (0, eu.o0)(t.skuId)
              ? (0, r.jsx)(ec.b, { product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eT, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eL = (e) => {
        var t, n;
        let { product: a, user: l, category: c, shouldCheckoutWithOrbs: h, onClose: x, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: j, tab: w } = e,
            { analyticsLocations: N } = (0, P.ZP)(),
            I = B.ZP.canUseCollectibles(l),
            { previewingVariantIndex: k } = C,
            y = (0, eh.N)(a, k),
            T = (0, eb.W)(a, j);
        o()(null != T, 'Selected product should not be null');
        let A = (0, X.L)(a),
            { isPurchased: W, isPartiallyOwnedBundle: R } = (0, X.L)(T),
            M = (0, m.e7)([z.Z], () => z.Z.purchases),
            H = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == T ? void 0 : T.skuId)),
            Q = (0, b.ZP)(),
            $ = (0, p.wj)(Q),
            ee = (0, V.G1)(T),
            er = (0, V.ql)(T, ej.tuJ.DEFAULT),
            el = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: eo } = (0, Y.R)(null != y ? y : T),
            ec = i.useMemo(() => (0, V.BH)(T, I), [T, I]),
            { handleUseNow: eu, isApplying: ef } = (0, K.W)({
                product: T,
                onSuccess: x
            }),
            ev = (0, U.hv)('CollectiblesProductPreviewInfo'),
            ex = (0, q.T)(T),
            { enabled: eC } = (0, E.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: eI, checkoutEligiblePrices: ek } = (0, eP.Ip)({
                product: T,
                isPremiumUser: I,
                tab: w
            }),
            ey = eC && h,
            { redeemVirtualCurrency: eT, isSubmitting: eS, error: eL } = (0, S.f)(),
            { balance: eZ } = (0, S.A)(),
            eA = i.useCallback(
                () =>
                    (0, O.Z)({
                        skuId: T.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: ev,
                        onClose: (e) => (e ? x() : (0, eN.dG)())
                    }),
                [N, x, T.skuId, ev]
            );
        i.useEffect(() => {
            if (null != eo) return (0, v.cV)(eo), () => (0, v.cV)(void 0);
        }, [eo]);
        let eW = (e) =>
                (0, r.jsx)(_.Z, {
                    subscriptionTier: ew.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: es.v,
                    onSubscribeModalClose: () => {
                        (0, es.T)({
                            product: T,
                            category: c,
                            shouldCheckoutWithOrbs: h,
                            returnRef: g,
                            analyticsLocations: N
                        });
                    }
                }),
            { firstAvatarDecoration: eR, firstProfileEffect: eB } = (0, G.k)(T),
            eD =
                T.type === d.Z.BUNDLE
                    ? eO.NW.formatToPlainString(eO.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eR ? void 0 : eR.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eB ? void 0 : eB.name) && void 0 !== n ? n : ''
                      })
                    : T.summary;
        return (0, r.jsxs)('div', {
            className: e_.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: e_.titleContainer,
                    children: (0, r.jsx)(en.Z, {
                        category: c,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eE, {
                    product: null != y ? y : T,
                    user: l
                }),
                (0, r.jsxs)('div', {
                    children: [
                        null == eL
                            ? null
                            : (0, r.jsxs)('div', {
                                  className: e_.errorMessageLine,
                                  children: [
                                      (0, r.jsx)(f.P4T, {
                                          size: 'xs',
                                          color: 'white'
                                      }),
                                      (0, r.jsx)(f.Text, {
                                          variant: 'text-xs/medium',
                                          children: eL.message
                                      })
                                  ]
                              }),
                        (0, r.jsxs)('div', {
                            className: e_.description,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    product: T,
                                    isDarkText: !$
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: e_.headingWithItemTypePill,
                                    children: ex
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eD
                                }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(J.U, {
                                          className: e_.priceTag,
                                          isPartiallyPurchased: R
                                      })
                                    : ee
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: e_.priceTag,
                                            children: eO.NW.string(eO.t.rt69oq)
                                        })
                                      : eC
                                        ? ey
                                            ? (0, r.jsx)(ed.Z, { orbPrice: ek[0] })
                                            : (0, r.jsx)(em.Z, {
                                                  displayPrices: eI,
                                                  isPremiumUser: I,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, r.jsx)(ea.Z, {
                                              product: T,
                                              discount: ec,
                                              isPremiumUser: I,
                                              className: I ? e_.priceTag : e_.priceTagContainer,
                                              nitroUpsell: !I
                                          })
                            ]
                        }),
                        (0, r.jsx)(ep.P, {
                            variantGroupProduct: a,
                            previewingVariantIndexProps: C,
                            className: e_.variantsSwitch,
                            purchases: M
                        }),
                        (0, r.jsx)('div', {
                            className: e_.buttonsContainer,
                            children: (0, r.jsxs)('div', {
                                className: e_.primaryButtons,
                                children: [
                                    (() => {
                                        if (ee && !I && !el) return eW(eO.NW.string(eO.t.sEAnVF));
                                        if (W)
                                            return (0, r.jsx)(f.zxk, {
                                                className: e_.button,
                                                look: f.zxk.Looks.FILLED,
                                                onClick: eu,
                                                submitting: ef,
                                                children: eO.NW.string(eO.t.MAS7uL)
                                            });
                                        if (R) return null;
                                        if (ee)
                                            return (0, r.jsx)(f.zxk, {
                                                className: e_.button,
                                                look: f.zxk.Looks.FILLED,
                                                submitting: H,
                                                submittingStartedLabel: eO.NW.string(eO.t['TYw+9v']),
                                                submittingFinishedLabel: eO.NW.string(eO.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, F.fK)(T.skuId),
                                                        x(),
                                                        (0, eg.Z)({
                                                            product: T,
                                                            analyticsLocations: N
                                                        });
                                                },
                                                children: eO.NW.string(eO.t.zp6caG)
                                            });
                                        let e = ey && (null == eZ || ek.length > 0 || eZ < ek[0].amount);
                                        return (0, r.jsx)(f.zxk, {
                                            className: s()(e_.button, { [e_.enabledButton]: !e }),
                                            innerClassName: e_.buttonInner,
                                            look: f.zxk.Looks.FILLED,
                                            submitting: eS,
                                            disabled: e,
                                            onClick: () => {
                                                ey
                                                    ? eT(T.skuId, () => {
                                                          x(!0),
                                                              (0, F.qg)({
                                                                  variantsReturnStyle: ev,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, eg.Z)({
                                                                  product: T,
                                                                  analyticsLocations: N,
                                                                  onCloseCallback: () => {
                                                                      (0, L.vp)();
                                                                  }
                                                              });
                                                      })
                                                    : eA();
                                            },
                                            children: ey
                                                ? eO.NW.format(eO.t.kAgx5O, {
                                                      orbPrice: ek.length > 0 ? ek[0].amount : 1 / 0,
                                                      orbIconHook: () => (0, r.jsx)(Z.Z, {})
                                                  })
                                                : (0, V.x6)(T)
                                                  ? eO.NW.string(eO.t.V1AWw8)
                                                  : T.type === d.Z.PROFILE_EFFECT
                                                    ? eO.NW.string(eO.t.kAeDcH)
                                                    : eO.NW.string(eO.t.AQ0Ven)
                                        });
                                    })(),
                                    !ee &&
                                        !el &&
                                        !u.tq &&
                                        (0, r.jsx)(ei.Z, {
                                            product: T,
                                            onSuccess: x,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !ey || ek.length <= 1
                            ? null
                            : (0, r.jsx)(f.P3F, {
                                  onClick: eA,
                                  className: e_.payWithFiatLink,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: 'text-xxs/normal',
                                      className: e_.payWithFiatLinkText,
                                      children: eO.NW.format(eO.t.hDiZtL, { price: (0, D.T4)(ek[1].amount, ek[1].currency) })
                                  })
                              }),
                        (0, r.jsx)(f.Text, {
                            className: s()(e_.disclaimer, !$ && e_.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: W ? null : ee ? eO.NW.string(eO.t.O2K0xM) : (0, V.x6)(T) ? eO.NW.string(eO.t.Ifvd7O) : T.type === d.Z.PROFILE_EFFECT ? eO.NW.string(eO.t.pxunjo) : eO.NW.string(eO.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eZ = (e) => {
        let { user: t } = e;
        return (0, r.jsx)('div', {
            className: e_.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(g.Z, {
                avatar: (0, r.jsx)(f.qEK, {
                    src: t.avatarSrc,
                    size: f.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: f.Skl.ONLINE
                }),
                name: t.name,
                selected: !1,
                innerClassName: e_.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eA = (e) => {
        let { user: t, nameplate: n } = e,
            a = i.useRef(null),
            s = (0, h.Z)(a);
        return (0, r.jsxs)('div', {
            className: e_.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eZ, { user: ey.mallow }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [eO.NW.string(eO.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eZ, { user: ey.phibi }),
                (0, r.jsx)('div', {
                    ref: a,
                    className: e_.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: e_.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: s
                    })
                }),
                (0, r.jsx)(eZ, { user: ey.locke }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [eO.NW.string(eO.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eZ, { user: ey.boom }),
                (0, r.jsx)(eZ, { user: ey.cherry })
            ]
        });
    },
    eW = (e) => {
        let { product: t, user: n } = e,
            i = B.ZP.canUsePremiumProfileCustomization(n),
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
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: f } = (0, Y.R)(t),
            v = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? e_.previewsContainerInner : e_.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eA, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  I.Z,
                                  ek(eI({}, l), {
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
                              c && (0, r.jsx)(eB, { user: n })
                          ]
                      })
        });
    },
    eR = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            ek(
                eI(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eO.NW.string(eO.t.d5YwKy)
                    })
                ),
                {
                    state: ej.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eB = (e) => {
        let { user: t } = e,
            n = eR({ author: t });
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsxs)(f.Zbd, {
                className: e_.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        N.Z,
                        {
                            className: e_.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: e_.mockInput,
                        children: [
                            (0, r.jsx)(f.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: e_.mockInputButton
                            }),
                            (0, r.jsx)(f.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: e_.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eD = (e) => {
        var t;
        let { transitionState: n, onClose: a, product: s, category: l, returnRef: c, analyticsSource: u, analyticsLocations: p, shouldCheckoutWithOrbs: v, tab: h } = e,
            b = (0, m.e7)([W.default], () => W.default.getCurrentUser()),
            g = (0, ex.f)(s),
            { previewingVariantIndex: C } = g,
            j = (0, m.e7)([z.Z], () => z.Z.purchases),
            w = (0, M.o)(s, j),
            N = (0, eh.N)(s, C),
            O = (0, eb.W)(s, w);
        o()(null != O, 'Selected product should not be null');
        let { analyticsLocations: _ } = (0, P.ZP)([...p, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ee.u9)(O.skuId);
        let [I] = O.items,
            k = (0, H.s)('CollectiblesShopProductDetailsModal');
        if (
            (i.useEffect(() => {
                null != b && (0, T.Z)(b.id, b.getAvatarURL(void 0, 80));
            }, [b]),
            i.useEffect(() => {
                let e = (null == I ? void 0 : I.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                R.default.track(ej.rMx.OPEN_MODAL, {
                    type: ej.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: u,
                    location_stack: _,
                    sku_id: O.skuId,
                    product_type: e
                }),
                    O.items.map(F.oK);
            }, [u, _, null == I ? void 0 : I.type, O.skuId, O.items]),
            null == b)
        )
            return null;
        let y = (0, eC.ZS)(l.skuId),
            S = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                a(), e || (0, L.vp)();
            };
        return (0, r.jsx)(P.Gt, {
            value: _,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: e_.modalRoot,
                returnRef: c,
                transitionState: n,
                size: f.CgR.DYNAMIC,
                children: (0, r.jsxs)(f.hzk, {
                    className: e_.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: b,
                            product: s,
                            category: l,
                            onClose: S,
                            previewingVariantIndexProps: g,
                            selectedVariantIndex: w,
                            shouldCheckoutWithOrbs: v,
                            tab: h
                        }),
                        (0, r.jsxs)('div', {
                            className: O.type === d.Z.AVATAR_DECORATION ? e_.collectiblePreviewsContainerWithChat : e_.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(Q.Z, {
                                    asset: null !== (t = l.pdpBg) && void 0 !== t ? t : s.banner,
                                    size: (0, el.ML)(540),
                                    className: e_.categoryBanner,
                                    categoryBannerOverride: y
                                }),
                                (0, eu.o0)(s.skuId)
                                    ? s.skuId === eu.xJ
                                        ? (0, r.jsx)(eo.M, { user: b })
                                        : (0, r.jsx)(ec.b, {
                                              product: s,
                                              className: e_.externalProductProfilePreview
                                          })
                                    : (0, r.jsx)(eW, {
                                          user: b,
                                          product: null != N ? N : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: e_.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: e_.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: e_.titleImage,
                                                style: null == y ? void 0 : y.pdpLogoStyle,
                                                src: (0, V.uV)(l.logo, { size: er.n }),
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: e_.headerButtonContainer,
                                            children: [
                                                k &&
                                                    (0, r.jsx)($.B, {
                                                        skuId: O.skuId,
                                                        tab: h
                                                    }),
                                                (0, r.jsx)(f.olH, {
                                                    onClick: () => S(),
                                                    className: e_.modalCloseButton,
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
