n.d(t, { default: () => eD }), n(47120), n(627341), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    f = n(780384),
    p = n(481060),
    v = n(809206),
    b = n(727637),
    h = n(410030),
    g = n(100527),
    x = n(906732),
    P = n(570908),
    j = n(786761),
    C = n(3148),
    O = n(739566),
    y = n(753206),
    w = n(333867),
    _ = n(197115),
    N = n(921813),
    k = n(876917),
    I = n(643879),
    S = n(484459),
    E = n(43747),
    L = n(822857),
    T = n(82856),
    Z = n(960919),
    A = n(25990),
    R = n(594174),
    B = n(626135),
    W = n(74538),
    D = n(937615),
    F = n(335131),
    z = n(1870),
    M = n(429368),
    H = n(884697),
    U = n(72462),
    V = n(228624),
    G = n(188584),
    K = n(635552),
    q = n(905357),
    Y = n(724994),
    X = n(328456),
    J = n(390698),
    Q = n(141011),
    $ = n(525518),
    ee = n(426171),
    et = n(224068),
    en = n(813083),
    er = n(823941),
    ei = n(680942),
    ea = n(558060),
    el = n(237031),
    eo = n(372654),
    es = n(259673),
    ec = n(508925),
    eu = n(755419),
    ed = n(410937),
    em = n(385797),
    ef = n(453713),
    ep = n(616066),
    ev = n(22267),
    eb = n(332246),
    eh = n(58201),
    eg = n(361110),
    ex = n(956472),
    eP = n(832149),
    ej = n(215023),
    eC = n(981631),
    eO = n(474936),
    ey = n(231338),
    ew = n(388032),
    e_ = n(885611);
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
let eI = {
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
    eS = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, b.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
                    children: (0, r.jsx)(ep.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: l,
                    className: e_.nameplatePreviewContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: e_.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: o
                    })
                })
            )
            .otherwise(() => null);
    },
    eE = (e) => {
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
            className: e_.bundlePreviewContainer,
            children: (0, r.jsx)(p.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = '('.concat(i + 1, '/').concat(o, ')');
                    return (0, r.jsx)(
                        p.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)('div', {
                                className: e_.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eS, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(p.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: e_.bundleSlideTitle,
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
        return (0, H.x6)(t)
            ? (0, r.jsx)(eE, {
                  product: t,
                  user: n
              })
            : (0, eu.o0)(t.skuId)
              ? (0, r.jsx)(ec.b, { product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eS, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eT = (e) => {
        var t, n;
        let { product: a, user: o, category: c, shouldCheckoutWithOrbs: b, onClose: g, returnRef: P, previewingVariantIndexProps: j, selectedVariantIndex: C, tab: O } = e,
            { analyticsLocations: y } = (0, x.ZP)(),
            N = W.ZP.canUseCollectibles(o),
            { previewingVariantIndex: k } = j,
            I = (0, eb.N)(a, k),
            S = (0, eh.W)(a, C);
        s()(null != S, 'Selected product should not be null');
        let A = (0, Y.L)(a),
            { isPurchased: R, isPartiallyOwnedBundle: B } = (0, Y.L)(S),
            M = (0, m.e7)([z.Z], () => z.Z.purchases),
            U = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            Q = (0, h.ZP)(),
            $ = (0, f.wj)(Q),
            ee = (0, H.G1)(S),
            er = (0, H.ql)(S, eC.tuJ.DEFAULT),
            eo = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: es } = (0, X.R)(null != I ? I : S),
            ec = i.useMemo(() => (0, H.BH)(S, N), [S, N]),
            { handleUseNow: eu, isApplying: ep } = (0, K.W)({
                product: S,
                onSuccess: g
            }),
            ev = (0, V.hv)('CollectiblesProductPreviewInfo'),
            eg = (0, q.T)(S),
            { enabled: ej } = (0, L.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: eN, checkoutEligiblePrices: ek } = (0, ex.Ip)({
                product: S,
                isPremiumUser: N,
                tab: O
            }),
            eI = ej && b,
            { redeemVirtualCurrency: eS, isSubmitting: eE, error: eT } = (0, E.f)(),
            { balance: eZ } = (0, E.A)(),
            eA = i.useCallback(
                () =>
                    (0, w.Z)({
                        skuId: S.skuId,
                        analyticsLocations: y,
                        variantsReturnStyle: ev,
                        onClose: (e) => (e ? g() : (0, ey.dG)())
                    }),
                [y, g, S.skuId, ev]
            );
        i.useEffect(() => {
            if (null != es) return (0, v.cV)(es), () => (0, v.cV)(void 0);
        }, [es]);
        let eR = (e) =>
                (0, r.jsx)(_.Z, {
                    subscriptionTier: eO.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: el.v,
                    onSubscribeModalClose: () => {
                        (0, el.T)({
                            product: S,
                            category: c,
                            shouldCheckoutWithOrbs: b,
                            returnRef: P,
                            analyticsLocations: y
                        });
                    }
                }),
            { firstAvatarDecoration: eB, firstProfileEffect: eW } = (0, G.k)(S),
            eD =
                S.type === d.Z.BUNDLE
                    ? ew.NW.formatToPlainString(ew.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eB ? void 0 : eB.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : ''
                      })
                    : S.summary;
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
                (0, r.jsx)(eL, {
                    product: null != I ? I : S,
                    user: o
                }),
                (0, r.jsxs)('div', {
                    children: [
                        null == eT
                            ? null
                            : (0, r.jsxs)('div', {
                                  className: e_.errorMessageLine,
                                  children: [
                                      (0, r.jsx)(p.P4T, {
                                          size: 'xs',
                                          color: 'white'
                                      }),
                                      (0, r.jsx)(p.Text, {
                                          variant: 'text-xs/medium',
                                          children: eT.message
                                      })
                                  ]
                              }),
                        (0, r.jsxs)('div', {
                            className: e_.description,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    product: S,
                                    isDarkText: !$
                                }),
                                (0, r.jsx)(p.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: e_.headingWithItemTypePill,
                                    children: eg
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    children: eD
                                }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(J.U, {
                                          className: e_.priceTag,
                                          isPartiallyPurchased: B
                                      })
                                    : ee
                                      ? (0, r.jsx)(p.Text, {
                                            variant: 'text-md/semibold',
                                            className: e_.priceTag,
                                            children: ew.NW.string(ew.t.rt69oq)
                                        })
                                      : ej
                                        ? eI
                                            ? (0, r.jsx)(ed.Z, { orbPrice: ek[0] })
                                            : (0, r.jsx)(em.Z, {
                                                  displayPrices: eN,
                                                  isPremiumUser: N,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, r.jsx)(ea.Z, {
                                              product: S,
                                              discount: ec,
                                              isPremiumUser: N,
                                              className: N ? e_.priceTag : e_.priceTagContainer,
                                              nitroUpsell: !N
                                          })
                            ]
                        }),
                        (0, r.jsx)(ef.P, {
                            variantGroupProduct: a,
                            previewingVariantIndexProps: j,
                            className: e_.variantsSwitch,
                            purchases: M
                        }),
                        (0, r.jsx)('div', {
                            className: e_.buttonsContainer,
                            children: (0, r.jsxs)('div', {
                                className: e_.primaryButtons,
                                children: [
                                    (() => {
                                        if (ee && !N && !eo) return eR(ew.NW.string(ew.t.sEAnVF));
                                        if (R)
                                            return (0, r.jsx)(p.zxk, {
                                                className: e_.button,
                                                look: p.zxk.Looks.FILLED,
                                                onClick: eu,
                                                submitting: ep,
                                                children: ew.NW.string(ew.t.MAS7uL)
                                            });
                                        if (B) return null;
                                        if (ee)
                                            return (0, r.jsx)(p.zxk, {
                                                className: e_.button,
                                                look: p.zxk.Looks.FILLED,
                                                submitting: U,
                                                submittingStartedLabel: ew.NW.string(ew.t['TYw+9v']),
                                                submittingFinishedLabel: ew.NW.string(ew.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, F.fK)(S.skuId),
                                                        g(),
                                                        (0, eP.Z)({
                                                            product: S,
                                                            analyticsLocations: y
                                                        });
                                                },
                                                children: ew.NW.string(ew.t.zp6caG)
                                            });
                                        let e = eI && (null == eZ || 0 === ek.length || eZ < ek[0].amount);
                                        return (0, r.jsx)(p.zxk, {
                                            className: l()(e_.button, { [e_.enabledButton]: !e }),
                                            innerClassName: e_.buttonInner,
                                            look: p.zxk.Looks.FILLED,
                                            submitting: eE,
                                            disabled: e,
                                            onClick: () => {
                                                eI
                                                    ? eS(S.skuId, (e) => {
                                                          var t;
                                                          g(!0),
                                                              (0, F.qg)({
                                                                  variantsReturnStyle: ev,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, eP.Z)({
                                                                  product: S,
                                                                  analyticsLocations: y,
                                                                  onCloseCallback: () => {
                                                                      (0, T.vp)();
                                                                  },
                                                                  itemConsumed: null === (t = e[0]) || void 0 === t ? void 0 : t.consumed
                                                              });
                                                      })
                                                    : eA();
                                            },
                                            children: eI
                                                ? ew.NW.format(ew.t.kAgx5O, {
                                                      orbPrice: ek.length > 0 ? ek[0].amount : 1 / 0,
                                                      orbIconHook: () => (0, r.jsx)(Z.Z, {})
                                                  })
                                                : (0, H.x6)(S)
                                                  ? ew.NW.string(ew.t.V1AWw8)
                                                  : S.type === d.Z.PROFILE_EFFECT
                                                    ? ew.NW.string(ew.t.kAeDcH)
                                                    : ew.NW.string(ew.t.AQ0Ven)
                                        });
                                    })(),
                                    !ee &&
                                        !eo &&
                                        !u.tq &&
                                        (0, r.jsx)(ei.Z, {
                                            product: S,
                                            onSuccess: g,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !eI || ek.length <= 1
                            ? null
                            : (0, r.jsx)(p.P3F, {
                                  onClick: eA,
                                  className: e_.payWithFiatLink,
                                  children: (0, r.jsx)(p.Text, {
                                      variant: 'text-xxs/normal',
                                      className: e_.payWithFiatLinkText,
                                      children: ew.NW.format(ew.t.hDiZtL, { price: (0, D.T4)(ek[1].amount, ek[1].currency) })
                                  })
                              }),
                        (0, r.jsx)(p.Text, {
                            className: l()(e_.disclaimer, !$ && e_.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: R ? null : ee ? ew.NW.string(ew.t.O2K0xM) : (0, H.x6)(S) ? ew.NW.string(ew.t.Ifvd7O) : S.type === d.Z.PROFILE_EFFECT ? ew.NW.string(ew.t.pxunjo) : ew.NW.string(ew.t.IA8coq)
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
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(p.qEK, {
                    src: t.avatarSrc,
                    size: p.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: p.Skl.ONLINE
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
            l = (0, b.Z)(a);
        return (0, r.jsxs)('div', {
            className: e_.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eZ, { user: eI.mallow }),
                (0, r.jsxs)(p.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [ew.NW.string(ew.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eZ, { user: eI.phibi }),
                (0, r.jsx)('div', {
                    ref: a,
                    className: e_.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ev.Z, {
                        className: e_.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: l
                    })
                }),
                (0, r.jsx)(eZ, { user: eI.locke }),
                (0, r.jsxs)(p.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [ew.NW.string(ew.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eZ, { user: eI.boom }),
                (0, r.jsx)(eZ, { user: eI.cherry })
            ]
        });
    },
    eR = (e) => {
        let { product: t, user: n } = e,
            i = W.ZP.canUsePremiumProfileCustomization(n),
            a = (0, m.cj)([A.Z], () => A.Z.getAllPending()),
            { pendingAvatarV2: l } = a,
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
            })(a, ['pendingAvatarV2']),
            s = (0, I.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: p } = (0, X.R)(t),
            v = null != p;
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
                                  N.Z,
                                  ek(eN({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: f,
                                      pendingProfileEffectId: null == p ? void 0 : p.id,
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
    eB = (e) => {
        let { author: t } = e;
        return (0, j.e5)(
            ek(
                eN(
                    {},
                    (0, C.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ew.NW.string(ew.t.d5YwKy)
                    })
                ),
                {
                    state: eC.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eW = (e) => {
        let { user: t } = e,
            n = eB({ author: t });
        return (0, r.jsx)(p.Rny, {
            children: (0, r.jsxs)(p.Zbd, {
                className: e_.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        y.Z,
                        {
                            className: e_.mockMessage,
                            author: (0, O.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: e_.mockInput,
                        children: [
                            (0, r.jsx)(p.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: e_.mockInputButton
                            }),
                            (0, r.jsx)(p.EO4, {
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
        let { transitionState: n, onClose: a, product: l, category: o, returnRef: c, analyticsSource: u, analyticsLocations: f, shouldCheckoutWithOrbs: v, tab: b } = e,
            h = (0, m.e7)([R.default], () => R.default.getCurrentUser()),
            P = (0, eg.f)(l),
            { previewingVariantIndex: j } = P,
            C = (0, m.e7)([z.Z], () => z.Z.purchases),
            O = (0, M.o)(l, C),
            y = (0, eb.N)(l, j),
            w = (0, eh.W)(l, O);
        s()(null != w, 'Selected product should not be null');
        let { analyticsLocations: _ } = (0, x.ZP)([...f, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ee.u9)(w.skuId);
        let [N] = w.items,
            k = (0, U.s)('CollectiblesShopProductDetailsModal');
        if (
            (i.useEffect(() => {
                null != h && (0, S.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            i.useEffect(() => {
                let e = (null == N ? void 0 : N.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                B.default.track(eC.rMx.OPEN_MODAL, {
                    type: eC.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: u,
                    location_stack: _,
                    sku_id: w.skuId,
                    product_type: e
                }),
                    w.items.map(F.oK);
            }, [u, _, null == N ? void 0 : N.type, w.skuId, w.items]),
            null == h)
        )
            return null;
        let I = (0, ej.ZS)(o.skuId),
            E = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                a(), e || (0, T.vp)();
            };
        return (0, r.jsx)(x.Gt, {
            value: _,
            children: (0, r.jsx)(p.Y0X, {
                hideShadow: !0,
                className: e_.modalRoot,
                returnRef: c,
                transitionState: n,
                size: p.CgR.DYNAMIC,
                children: (0, r.jsxs)(p.hzk, {
                    className: e_.modalContent,
                    children: [
                        (0, r.jsx)(eT, {
                            user: h,
                            product: l,
                            category: o,
                            onClose: E,
                            previewingVariantIndexProps: P,
                            selectedVariantIndex: O,
                            shouldCheckoutWithOrbs: v,
                            tab: b
                        }),
                        (0, r.jsxs)('div', {
                            className: w.type === d.Z.AVATAR_DECORATION ? e_.collectiblePreviewsContainerWithChat : e_.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(Q.Z, {
                                    asset: null !== (t = o.pdpBg) && void 0 !== t ? t : l.banner,
                                    size: (0, eo.ML)(540),
                                    className: e_.categoryBanner,
                                    categoryBannerOverride: I
                                }),
                                (0, eu.o0)(l.skuId)
                                    ? l.skuId === eu.xJ
                                        ? (0, r.jsx)(es.M, { user: h })
                                        : (0, r.jsx)(ec.b, {
                                              product: l,
                                              className: e_.externalProductProfilePreview
                                          })
                                    : (0, r.jsx)(eR, {
                                          user: h,
                                          product: null != y ? y : w
                                      }),
                                (0, r.jsxs)('div', {
                                    className: e_.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: e_.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: e_.titleImage,
                                                style: null == I ? void 0 : I.pdpLogoStyle,
                                                src: (0, H.uV)(o.logo, { size: er.n }),
                                                alt: o.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: e_.headerButtonContainer,
                                            children: [
                                                k &&
                                                    (0, r.jsx)($.B, {
                                                        skuId: w.skuId,
                                                        tab: b
                                                    }),
                                                (0, r.jsx)(p.olH, {
                                                    onClick: () => E(),
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
