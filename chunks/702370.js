n.d(t, { default: () => eB }), n(47120), n(627341), n(266796);
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
    h = n(809206),
    v = n(727637),
    x = n(410030),
    b = n(100527),
    P = n(906732),
    g = n(570908),
    C = n(786761),
    w = n(3148),
    j = n(739566),
    N = n(753206),
    _ = n(333867),
    k = n(197115),
    I = n(921813),
    T = n(876917),
    y = n(643879),
    O = n(484459),
    S = n(43747),
    E = n(822857),
    L = n(82856),
    A = n(960919),
    Z = n(25990),
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
    Y = n(724994),
    X = n(328456),
    Q = n(390698),
    J = n(141011),
    $ = n(525518),
    ee = n(426171),
    et = n(224068),
    en = n(813083),
    er = n(823941),
    ei = n(680942),
    ea = n(558060),
    es = n(237031),
    el = n(372654),
    eo = n(508925),
    ec = n(755419),
    ed = n(410937),
    eu = n(385797),
    em = n(453713),
    ep = n(616066),
    ef = n(22267),
    eh = n(332246),
    ev = n(58201),
    ex = n(361110),
    eb = n(956472),
    eP = n(832149),
    eg = n(215023),
    eC = n(981631),
    ew = n(474936),
    ej = n(231338),
    eN = n(388032),
    e_ = n(885611);
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
let eT = {
        mallow: {
            name: eN.NW.string(eN.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: eN.NW.string(eN.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: eN.NW.string(eN.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: eN.NW.string(eN.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: eN.NW.string(eN.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    ey = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            s = i.useRef(null),
            l = (0, v.Z)(s);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
                    children: (0, r.jsx)(ep.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
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
                    className: e_.nameplatePreviewContainer,
                    children: (0, r.jsx)(ef.Z, {
                        className: e_.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: l
                    })
                })
            )
            .otherwise(() => null);
    },
    eO = (e) => {
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
                                    (0, r.jsx)(ey, {
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
    eS = (e) => {
        let { product: t, user: n } = e;
        return (0, V.x6)(t)
            ? (0, r.jsx)(eO, {
                  product: t,
                  user: n
              })
            : (0, ec.o)(t.skuId)
              ? (0, r.jsx)(eo.b, { product: t })
              : t.items.length > 0
                ? (0, r.jsx)(ey, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eE = (e) => {
        var t, n;
        let { product: a, user: l, category: c, shouldCheckoutWithOrbs: v, onClose: b, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: w, tab: j } = e,
            { analyticsLocations: N } = (0, P.ZP)(),
            I = B.ZP.canUseCollectibles(l),
            { previewingVariantIndex: T } = C,
            y = (0, eh.N)(a, T),
            O = (0, ev.W)(a, w);
        o()(null != O, 'Selected product should not be null');
        let Z = (0, Y.L)(a),
            { isPurchased: W, isPartiallyOwnedBundle: R } = (0, Y.L)(O),
            M = (0, m.e7)([z.Z], () => z.Z.purchases),
            H = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == O ? void 0 : O.skuId)),
            J = (0, x.ZP)(),
            $ = (0, p.wj)(J),
            ee = (0, V.G1)(O),
            er = (0, V.ql)(O, eC.tuJ.DEFAULT),
            el = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: eo } = (0, X.R)(null != y ? y : O),
            ec = i.useMemo(() => (0, V.BH)(O, I), [O, I]),
            { handleUseNow: ep, isApplying: ef } = (0, K.W)({
                product: O,
                onSuccess: b
            }),
            ex = (0, U.hv)('CollectiblesProductPreviewInfo'),
            eg = (0, q.T)(O),
            { enabled: ek } = (0, E.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: eI, checkoutEligiblePrices: eT } = (0, eb.Ip)({
                product: O,
                isPremiumUser: I,
                tab: j
            }),
            ey = ek && v,
            { redeemVirtualCurrency: eO, isSubmitting: eE, error: eL } = (0, S.f)(),
            { balance: eA } = (0, S.A)(),
            eZ = i.useCallback(
                () =>
                    (0, _.Z)({
                        skuId: O.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: ex,
                        onClose: (e) => (e ? b() : (0, ej.dG)())
                    }),
                [N, b, O.skuId, ex]
            );
        i.useEffect(() => {
            if (null != eo) return (0, h.cV)(eo), () => (0, h.cV)(void 0);
        }, [eo]);
        let eW = (e) =>
                (0, r.jsx)(k.Z, {
                    subscriptionTier: ew.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: es.v,
                    onSubscribeModalClose: () => {
                        (0, es.T)({
                            product: O,
                            category: c,
                            shouldCheckoutWithOrbs: v,
                            returnRef: g,
                            analyticsLocations: N
                        });
                    }
                }),
            { firstAvatarDecoration: eR, firstProfileEffect: eB } = (0, G.k)(O),
            eD =
                O.type === u.Z.BUNDLE
                    ? eN.NW.formatToPlainString(eN.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eR ? void 0 : eR.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eB ? void 0 : eB.name) && void 0 !== n ? n : ''
                      })
                    : O.summary;
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
                (0, r.jsx)(eS, {
                    product: null != y ? y : O,
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
                                    product: O,
                                    isDarkText: !$
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: e_.headingWithItemTypePill,
                                    children: eg
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eD
                                }),
                                Z.isPurchased || Z.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: e_.priceTag,
                                          isPartiallyPurchased: R
                                      })
                                    : ee
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: e_.priceTag,
                                            children: eN.NW.string(eN.t.rt69oq)
                                        })
                                      : ek
                                        ? ey
                                            ? (0, r.jsx)(ed.Z, { orbPrice: eT[0] })
                                            : (0, r.jsx)(eu.Z, {
                                                  displayPrices: eI,
                                                  isPremiumUser: I,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, r.jsx)(ea.Z, {
                                              product: O,
                                              discount: ec,
                                              isPremiumUser: I,
                                              className: I ? e_.priceTag : e_.priceTagContainer,
                                              nitroUpsell: !I
                                          })
                            ]
                        }),
                        (0, r.jsx)(em.P, {
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
                                        if (ee && !I && !el) return eW(eN.NW.string(eN.t.sEAnVF));
                                        if (W)
                                            return (0, r.jsx)(f.zxk, {
                                                className: e_.button,
                                                look: f.zxk.Looks.FILLED,
                                                onClick: ep,
                                                submitting: ef,
                                                children: eN.NW.string(eN.t.MAS7uL)
                                            });
                                        if (R) return null;
                                        if (ee)
                                            return (0, r.jsx)(f.zxk, {
                                                className: e_.button,
                                                look: f.zxk.Looks.FILLED,
                                                submitting: H,
                                                submittingStartedLabel: eN.NW.string(eN.t['TYw+9v']),
                                                submittingFinishedLabel: eN.NW.string(eN.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, F.fK)(O.skuId),
                                                        b(),
                                                        (0, eP.Z)({
                                                            product: O,
                                                            analyticsLocations: N
                                                        });
                                                },
                                                children: eN.NW.string(eN.t.zp6caG)
                                            });
                                        let e = ey && (null == eA || eA < eT[0].amount);
                                        return (0, r.jsx)(f.zxk, {
                                            className: s()(e_.button, { [e_.enabledButton]: !e }),
                                            innerClassName: e_.buttonInner,
                                            look: f.zxk.Looks.FILLED,
                                            submitting: eE,
                                            disabled: e,
                                            onClick: () => {
                                                ey
                                                    ? eO(O.skuId, () => {
                                                          b(!0),
                                                              (0, F.qg)({
                                                                  variantsReturnStyle: ex,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, eP.Z)({
                                                                  product: O,
                                                                  analyticsLocations: N,
                                                                  onCloseCallback: () => {
                                                                      (0, L.vp)();
                                                                  }
                                                              });
                                                      })
                                                    : eZ();
                                            },
                                            children: ey
                                                ? eN.NW.format(eN.t.kAgx5O, {
                                                      orbPrice: eT[0].amount,
                                                      orbIconHook: () => (0, r.jsx)(A.Z, {})
                                                  })
                                                : (0, V.x6)(O)
                                                  ? eN.NW.string(eN.t.V1AWw8)
                                                  : O.type === u.Z.PROFILE_EFFECT
                                                    ? eN.NW.string(eN.t.kAeDcH)
                                                    : eN.NW.string(eN.t.AQ0Ven)
                                        });
                                    })(),
                                    !ee &&
                                        !el &&
                                        !d.tq &&
                                        (0, r.jsx)(ei.Z, {
                                            product: O,
                                            onSuccess: b,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !ey || eT.length <= 1
                            ? null
                            : (0, r.jsx)(f.P3F, {
                                  onClick: eZ,
                                  className: e_.payWithFiatLink,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: 'text-xxs/normal',
                                      className: e_.payWithFiatLinkText,
                                      children: eN.NW.format(eN.t.hDiZtL, { price: (0, D.T4)(eT[1].amount, eT[1].currency) })
                                  })
                              }),
                        (0, r.jsx)(f.Text, {
                            className: s()(e_.disclaimer, !$ && e_.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: W ? null : ee ? eN.NW.string(eN.t.O2K0xM) : (0, V.x6)(O) ? eN.NW.string(eN.t.Ifvd7O) : O.type === u.Z.PROFILE_EFFECT ? eN.NW.string(eN.t.pxunjo) : eN.NW.string(eN.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eL = (e) => {
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
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: e_.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eL, { user: eT.mallow }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [eN.NW.string(eN.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eL, { user: eT.phibi }),
                (0, r.jsx)('div', {
                    className: e_.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ef.Z, {
                        className: e_.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0
                    })
                }),
                (0, r.jsx)(eL, { user: eT.locke }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [eN.NW.string(eN.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eL, { user: eT.boom }),
                (0, r.jsx)(eL, { user: eT.cherry })
            ]
        });
    },
    eZ = (e) => {
        let { product: t, user: n } = e,
            i = B.ZP.canUsePremiumProfileCustomization(n),
            a = (0, m.cj)([Z.Z], () => Z.Z.getAllPending()),
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
            { firstAvatarDecoration: p, firstProfileEffect: f } = (0, X.R)(t),
            h = null != f;
        return (0, r.jsx)('div', {
            className: (null == d ? void 0 : d.type) === u.Z.AVATAR_DECORATION ? e_.previewsContainerInner : e_.profileEffectPreviewsContainerInner,
            children:
                (null == d ? void 0 : d.type) === u.Z.NAMEPLATE
                    ? (0, r.jsx)(eA, {
                          user: n,
                          nameplate: d
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  I.Z,
                                  eI(ek({}, l), {
                                      pendingAvatar: o,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: p,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !h,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: c
                                  })
                              ),
                              c && (0, r.jsx)(eR, { user: n })
                          ]
                      })
        });
    },
    eW = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            eI(
                ek(
                    {},
                    (0, w.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eN.NW.string(eN.t.d5YwKy)
                    })
                ),
                {
                    state: eC.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eR = (e) => {
        let { user: t } = e,
            n = eW({ author: t });
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
                            author: (0, j.ZH)(n),
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
    eB = (e) => {
        var t;
        let { transitionState: n, onClose: a, product: s, category: l, returnRef: c, analyticsSource: d, analyticsLocations: p, shouldCheckoutWithOrbs: h, tab: v } = e,
            x = (0, m.e7)([W.default], () => W.default.getCurrentUser()),
            g = (0, ex.f)(s),
            { previewingVariantIndex: C } = g,
            w = (0, m.e7)([z.Z], () => z.Z.purchases),
            j = (0, M.o)(s, w),
            N = (0, eh.N)(s, C),
            _ = (0, ev.W)(s, j);
        o()(null != _, 'Selected product should not be null');
        let { analyticsLocations: k } = (0, P.ZP)([...p, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ee.u9)(_.skuId);
        let [I] = _.items,
            T = (0, H.s)('CollectiblesShopProductDetailsModal');
        if (
            (i.useEffect(() => {
                null != x && (0, O.Z)(x.id, x.getAvatarURL(void 0, 80));
            }, [x]),
            i.useEffect(() => {
                let e = (null == I ? void 0 : I.type) === u.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                R.default.track(eC.rMx.OPEN_MODAL, {
                    type: eC.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: d,
                    location_stack: k,
                    sku_id: _.skuId,
                    product_type: e
                }),
                    _.items.map(F.oK);
            }, [d, k, null == I ? void 0 : I.type, _.skuId, _.items]),
            null == x)
        )
            return null;
        let y = (0, eg.ZS)(l.skuId),
            S = async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                await a(), e || (0, L.vp)();
            };
        return (0, r.jsx)(P.Gt, {
            value: k,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: e_.modalRoot,
                returnRef: c,
                transitionState: n,
                size: f.CgR.DYNAMIC,
                children: (0, r.jsxs)(f.hzk, {
                    className: e_.modalContent,
                    children: [
                        (0, r.jsx)(eE, {
                            user: x,
                            product: s,
                            category: l,
                            onClose: S,
                            previewingVariantIndexProps: g,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: h,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: _.type === u.Z.AVATAR_DECORATION ? e_.collectiblePreviewsContainerWithChat : e_.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(J.Z, {
                                    asset: null !== (t = l.pdpBg) && void 0 !== t ? t : s.banner,
                                    size: (0, el.ML)(540),
                                    className: e_.categoryBanner,
                                    categoryBannerOverride: y
                                }),
                                (0, ec.o)(s.skuId)
                                    ? (0, r.jsx)(eo.b, {
                                          product: s,
                                          className: e_.externalProductProfilePreview
                                      })
                                    : (0, r.jsx)(eZ, {
                                          user: x,
                                          product: null != N ? N : _
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
                                                T && (0, r.jsx)($.B, { skuId: _.skuId }),
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
