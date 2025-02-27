n.d(t, { default: () => eW }), n(47120), n(627341), n(266796);
var i = n(200651),
    r = n(192379),
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
    w = n(3148),
    N = n(739566),
    j = n(753206),
    _ = n(333867),
    I = n(197115),
    k = n(921813),
    T = n(876917),
    S = n(484459),
    L = n(43747),
    y = n(822857),
    E = n(960919),
    O = n(25990),
    Z = n(594174),
    A = n(626135),
    W = n(74538),
    R = n(937615),
    B = n(335131),
    D = n(1870),
    F = n(429368),
    z = n(884697),
    M = n(72462),
    H = n(228624),
    V = n(188584),
    U = n(635552),
    G = n(905357),
    K = n(724994),
    q = n(328456),
    Y = n(390698),
    X = n(141011),
    Q = n(525518),
    J = n(426171),
    $ = n(224068),
    ee = n(813083),
    et = n(823941),
    en = n(680942),
    ei = n(558060),
    er = n(237031),
    ea = n(372654),
    es = n(508925),
    el = n(755419),
    eo = n(410937),
    ec = n(385797),
    ed = n(453713),
    eu = n(616066),
    em = n(22267),
    ep = n(332246),
    ef = n(58201),
    ev = n(361110),
    eh = n(956472),
    ex = n(832149),
    eb = n(215023),
    eP = n(981631),
    eg = n(474936),
    eC = n(231338),
    ew = n(388032),
    eN = n(453803);
function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
    ek = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            s = r.useRef(null),
            l = (0, h.Z)(s);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: a ? eN.bundleAvatarPreviewContainer : eN.avatarPreviewContainer,
                    children: (0, i.jsx)(eu.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: a ? eN.bundlePfxPreviewContainer : eN.pfxPreviewContainer,
                    ref: s,
                    children: (0, i.jsx)(T.Z, {
                        profileEffectId: t.id,
                        isHovering: l,
                        removeSetHeight: !0
                    })
                })
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, i.jsx)('div', {
                    ref: s,
                    className: eN.nameplatePreviewContainer,
                    children: (0, i.jsx)(em.Z, {
                        className: eN.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: l
                    })
                })
            )
            .otherwise(() => null);
    },
    eT = (e) => {
        let { product: t, user: n } = e,
            [a, s] = r.useState(0);
        r.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && s((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let l = t.items.length;
        return (0, i.jsx)('div', {
            className: eN.bundlePreviewContainer,
            children: (0, i.jsx)(f.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, r) => {
                    let a = String(r),
                        s = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        o = '('.concat(r + 1, '/').concat(l, ')');
                    return (0, i.jsx)(
                        f.Mi4,
                        {
                            id: a,
                            children: (0, i.jsxs)('div', {
                                className: eN.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(ek, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(f.Text, {
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
        return (0, z.x6)(t)
            ? (0, i.jsx)(eT, {
                  product: t,
                  user: n
              })
            : (0, el.o)(t.skuId)
              ? (0, i.jsx)(es.b, { product: t })
              : t.items.length > 0
                ? (0, i.jsx)(ek, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eL = (e) => {
        var t, n, a;
        let { product: l, user: c, category: h, onClose: b, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: w, tab: N } = e,
            { analyticsLocations: j } = (0, P.ZP)(),
            k = W.ZP.canUseCollectibles(c),
            { previewingVariantIndex: T } = C,
            S = (0, ep.N)(l, T),
            O = (0, ef.W)(l, w);
        o()(null != O, 'Selected product should not be null');
        let Z = (0, K.L)(l),
            { isPurchased: A, isPartiallyOwnedBundle: F } = (0, K.L)(O),
            M = (0, m.e7)([D.Z], () => D.Z.purchases),
            X = (0, m.e7)([D.Z], () => D.Z.isClaiming === (null == O ? void 0 : O.skuId)),
            Q = (0, x.ZP)(),
            J = (0, p.wj)(Q),
            et = (0, z.G1)(O),
            ea = (0, z.ql)(O, eP.tuJ.DEFAULT),
            es = (null == ea ? void 0 : ea.amount) === 0,
            { firstAvatarDecoration: el } = (0, q.R)(null != S ? S : O),
            eu = r.useMemo(() => (0, z.BH)(O, k), [O, k]),
            { handleUseNow: em, isApplying: ev } = (0, U.W)({
                product: O,
                onSuccess: b
            }),
            eb = (0, H.hv)('CollectiblesProductPreviewInfo'),
            ej = (0, G.T)(O),
            { enabled: e_ } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: eI, checkoutEligiblePrices: ek } = (0, eh.I)({
                product: O,
                isPremiumUser: k,
                tab: N
            }),
            eT = e_ && (null === (t = ek[0]) || void 0 === t ? void 0 : t.currency) === eC.pK.DISCORD_ORB,
            { redeemVirtualCurrency: eL, isSubmitting: ey, error: eE } = (0, L.f)(),
            { balance: eO } = (0, L.A)(),
            eZ = r.useCallback(
                () =>
                    (0, _.Z)({
                        skuId: O.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? b() : (0, eC.dG)())
                    }),
                [j, b, O.skuId, eb]
            );
        r.useEffect(() => {
            if (null != el) return (0, v.cV)(el), () => (0, v.cV)(void 0);
        }, [el]);
        let eA = (e) =>
                (0, i.jsx)(I.Z, {
                    subscriptionTier: eg.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: er.v,
                    onSubscribeModalClose: () => {
                        (0, er.T)({
                            product: O,
                            category: h,
                            returnRef: g,
                            analyticsLocations: j
                        });
                    }
                }),
            { firstAvatarDecoration: eW, firstProfileEffect: eR } = (0, V.k)(O),
            eB =
                O.type === u.Z.BUNDLE
                    ? ew.NW.formatToPlainString(ew.t['jM8/7+'], {
                          avatarDecorationName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : '',
                          profileEffectName: null !== (a = null == eR ? void 0 : eR.name) && void 0 !== a ? a : ''
                      })
                    : O.summary;
        return (0, i.jsxs)('div', {
            className: eN.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: eN.titleContainer,
                    children: (0, i.jsx)(ee.Z, {
                        category: h,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(eS, {
                    product: null != S ? S : O,
                    user: c
                }),
                (0, i.jsxs)('div', {
                    children: [
                        null == eE
                            ? null
                            : (0, i.jsxs)('div', {
                                  className: eN.errorMessageLine,
                                  children: [
                                      (0, i.jsx)(f.P4T, {
                                          size: 'xs',
                                          color: 'white'
                                      }),
                                      (0, i.jsx)(f.Text, {
                                          variant: 'text-xs/medium',
                                          children: eE.message
                                      })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eN.description,
                            children: [
                                (0, i.jsx)($.Z, {
                                    product: O,
                                    isDarkText: !J
                                }),
                                (0, i.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eN.headingWithItemTypePill,
                                    children: ej
                                }),
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eB
                                }),
                                Z.isPurchased || Z.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(Y.U, {
                                          className: eN.priceTag,
                                          isPartiallyPurchased: F
                                      })
                                    : et
                                      ? (0, i.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: eN.priceTag,
                                            children: ew.NW.string(ew.t.rt69oq)
                                        })
                                      : e_
                                        ? eT
                                            ? (0, i.jsx)(eo.Z, { orbPrice: ek[0] })
                                            : (0, i.jsx)(ec.Z, {
                                                  displayPrices: eI,
                                                  isPremiumUser: k,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, i.jsx)(ei.Z, {
                                              product: O,
                                              discount: eu,
                                              isPremiumUser: k,
                                              className: k ? eN.priceTag : eN.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, i.jsx)(ed.P, {
                            variantGroupProduct: l,
                            previewingVariantIndexProps: C,
                            className: eN.variantsSwitch,
                            purchases: M
                        }),
                        (0, i.jsx)('div', {
                            className: eN.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: eN.primaryButtons,
                                children: [
                                    (() => {
                                        if (et && !k && !es) return eA(ew.NW.string(ew.t.sEAnVF));
                                        if (A)
                                            return (0, i.jsx)(f.zxk, {
                                                className: eN.button,
                                                look: f.zxk.Looks.FILLED,
                                                onClick: em,
                                                submitting: ev,
                                                children: ew.NW.string(ew.t.MAS7uL)
                                            });
                                        if (F) return null;
                                        if (et)
                                            return (0, i.jsx)(f.zxk, {
                                                className: eN.button,
                                                look: f.zxk.Looks.FILLED,
                                                submitting: X,
                                                submittingStartedLabel: ew.NW.string(ew.t['TYw+9v']),
                                                submittingFinishedLabel: ew.NW.string(ew.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, B.fK)(O.skuId),
                                                        b(),
                                                        (0, ex.Z)({
                                                            product: O,
                                                            analyticsLocations: j
                                                        });
                                                },
                                                children: ew.NW.string(ew.t.zp6caG)
                                            });
                                        let e = eT && (null == eO || eO < ek[0].amount);
                                        return (0, i.jsx)(f.zxk, {
                                            className: s()(eN.button, { [eN.enabledButton]: !e }),
                                            innerClassName: eN.buttonInner,
                                            look: f.zxk.Looks.FILLED,
                                            submitting: ey,
                                            disabled: e,
                                            onClick: () => {
                                                eT
                                                    ? eL(O.skuId, () => {
                                                          b(),
                                                              (0, B.qg)({
                                                                  variantsReturnStyle: eb,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, ex.Z)({
                                                                  product: O,
                                                                  analyticsLocations: j
                                                              });
                                                      })
                                                    : eZ();
                                            },
                                            children: eT
                                                ? ew.NW.format(ew.t.kAgx5O, {
                                                      orbPrice: ek[0].amount,
                                                      orbIconHook: () => (0, i.jsx)(E.Z, {})
                                                  })
                                                : (0, z.x6)(O)
                                                  ? ew.NW.string(ew.t.V1AWw8)
                                                  : O.type === u.Z.PROFILE_EFFECT
                                                    ? ew.NW.string(ew.t.kAeDcH)
                                                    : ew.NW.string(ew.t.AQ0Ven)
                                        });
                                    })(),
                                    !et &&
                                        !es &&
                                        !d.tq &&
                                        (0, i.jsx)(en.Z, {
                                            product: O,
                                            onSuccess: b,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !eT || ek.length <= 1
                            ? null
                            : (0, i.jsx)(f.P3F, {
                                  onClick: eZ,
                                  className: eN.payWithFiatLink,
                                  children: (0, i.jsx)(f.Text, {
                                      variant: 'text-xxs/normal',
                                      className: eN.payWithFiatLinkText,
                                      children: ew.NW.format(ew.t.hDiZtL, { price: (0, R.T4)(ek[1].amount, ek[1].currency) })
                                  })
                              }),
                        (0, i.jsx)(f.Text, {
                            className: s()(eN.disclaimer, !J && eN.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: A ? null : et ? ew.NW.string(ew.t.O2K0xM) : (0, z.x6)(O) ? ew.NW.string(ew.t.Ifvd7O) : O.type === u.Z.PROFILE_EFFECT ? ew.NW.string(ew.t.pxunjo) : ew.NW.string(ew.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    ey = (e) => {
        let { user: t } = e;
        return (0, i.jsx)('div', {
            className: eN.nameplateRightPanePreviewAvatarContainer,
            children: (0, i.jsx)(g.Z, {
                avatar: (0, i.jsx)(f.qEK, {
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
    eE = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, i.jsxs)('div', {
            className: eN.nameplateRightPanePreviewContainer,
            children: [
                (0, i.jsx)(ey, { user: eI.mallow }),
                (0, i.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [ew.NW.string(ew.t['yzW/fX']), ' - 3']
                }),
                (0, i.jsx)(ey, { user: eI.phibi }),
                (0, i.jsx)('div', {
                    className: eN.nameplateRightPanePreviewAvatarContainer,
                    children: (0, i.jsx)(em.Z, {
                        className: eN.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0
                    })
                }),
                (0, i.jsx)(ey, { user: eI.locke }),
                (0, i.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [ew.NW.string(ew.t['NG43//']), ' - 12']
                }),
                (0, i.jsx)(ey, { user: eI.boom }),
                (0, i.jsx)(ey, { user: eI.cherry })
            ]
        });
    },
    eO = (e) => {
        let { product: t, user: n } = e,
            r = W.ZP.canUsePremiumProfileCustomization(n),
            a = (0, m.cj)([O.Z], () => O.Z.getAllPending()),
            s = t.type === u.Z.AVATAR_DECORATION,
            [l] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, q.R)(t),
            d = null != c;
        return (0, i.jsx)('div', {
            className: (null == l ? void 0 : l.type) === u.Z.AVATAR_DECORATION ? eN.previewsContainerInner : eN.profileEffectPreviewsContainerInner,
            children:
                (null == l ? void 0 : l.type) === u.Z.NAMEPLATE
                    ? (0, i.jsx)(eE, {
                          user: n,
                          nameplate: l
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  k.Z,
                                  e_(ej({}, a), {
                                      user: n,
                                      canUsePremiumCustomization: r,
                                      pendingAvatarDecoration: o,
                                      pendingProfileEffectId: null == c ? void 0 : c.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !d,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: s
                                  })
                              ),
                              s && (0, i.jsx)(eA, { user: n })
                          ]
                      })
        });
    },
    eZ = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            e_(
                ej(
                    {},
                    (0, w.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ew.NW.string(ew.t.d5YwKy)
                    })
                ),
                {
                    state: eP.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eA = (e) => {
        let { user: t } = e,
            n = eZ({ author: t });
        return (0, i.jsx)(f.Rny, {
            children: (0, i.jsxs)(f.Zbd, {
                className: eN.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        j.Z,
                        {
                            className: eN.mockMessage,
                            author: (0, N.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: eN.mockInput,
                        children: [
                            (0, i.jsx)(f.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eN.mockInputButton
                            }),
                            (0, i.jsx)(f.EO4, {
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
    eW = (e) => {
        var t;
        let { transitionState: n, onClose: a, product: s, category: l, returnRef: c, analyticsSource: d, analyticsLocations: p, tab: v } = e,
            h = (0, m.e7)([Z.default], () => Z.default.getCurrentUser()),
            x = (0, ev.f)(s),
            { previewingVariantIndex: g } = x,
            C = (0, m.e7)([D.Z], () => D.Z.purchases),
            w = (0, F.o)(s, C),
            N = (0, ep.N)(s, g),
            j = (0, ef.W)(s, w);
        o()(null != j, 'Selected product should not be null');
        let { analyticsLocations: _ } = (0, P.ZP)([...p, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, J.u9)(j.skuId);
        let [I] = j.items,
            k = (0, M.s)('CollectiblesShopProductDetailsModal');
        if (
            (r.useEffect(() => {
                null != h && (0, S.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            r.useEffect(() => {
                let e = (null == I ? void 0 : I.type) === u.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                A.default.track(eP.rMx.OPEN_MODAL, {
                    type: eP.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: d,
                    location_stack: _,
                    sku_id: j.skuId,
                    product_type: e
                }),
                    j.items.map(B.oK);
            }, [d, _, null == I ? void 0 : I.type, j.skuId, j.items]),
            null == h)
        )
            return null;
        let T = (0, eb.ZS)(l.skuId);
        return (0, i.jsx)(P.Gt, {
            value: _,
            children: (0, i.jsx)(f.Y0X, {
                hideShadow: !0,
                className: eN.modalRoot,
                returnRef: c,
                transitionState: n,
                size: f.CgR.DYNAMIC,
                children: (0, i.jsxs)(f.hzk, {
                    className: eN.modalContent,
                    children: [
                        (0, i.jsx)(eL, {
                            user: h,
                            product: s,
                            category: l,
                            onClose: a,
                            previewingVariantIndexProps: x,
                            selectedVariantIndex: w,
                            tab: v
                        }),
                        (0, i.jsxs)('div', {
                            className: j.type === u.Z.AVATAR_DECORATION ? eN.collectiblePreviewsContainerWithChat : eN.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(X.Z, {
                                    asset: null !== (t = l.pdpBg) && void 0 !== t ? t : s.banner,
                                    size: (0, ea.ML)(540),
                                    className: eN.categoryBanner,
                                    categoryBannerOverride: T
                                }),
                                (0, el.o)(s.skuId)
                                    ? (0, i.jsx)(es.b, {
                                          product: s,
                                          className: eN.externalProductProfilePreview
                                      })
                                    : (0, i.jsx)(eO, {
                                          user: h,
                                          product: null != N ? N : j
                                      }),
                                (0, i.jsxs)('div', {
                                    className: eN.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: eN.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: eN.titleImage,
                                                style: null == T ? void 0 : T.pdpLogoStyle,
                                                src: (0, z.uV)(l.logo, { size: et.n }),
                                                alt: l.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: eN.headerButtonContainer,
                                            children: [
                                                k && (0, i.jsx)(Q.B, { skuId: j.skuId }),
                                                (0, i.jsx)(f.olH, {
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
