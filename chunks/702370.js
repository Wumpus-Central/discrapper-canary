n.d(t, { default: () => eL }), n(47120), n(627341), n(266796);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    f = n(780384),
    p = n(481060),
    h = n(809206);
n(276264);
var x = n(727637),
    v = n(410030),
    b = n(100527),
    C = n(906732);
n(570908);
var g = n(786761),
    P = n(3148),
    _ = n(739566),
    N = n(753206),
    j = n(333867),
    I = n(197115),
    k = n(921813),
    w = n(876917),
    T = n(484459),
    L = n(43747),
    y = n(822857),
    O = n(960919),
    E = n(25990),
    S = n(594174),
    Z = n(626135),
    A = n(74538),
    W = n(937615),
    B = n(335131),
    R = n(1870),
    D = n(429368),
    F = n(884697),
    z = n(72462),
    M = n(228624),
    V = n(188584),
    H = n(635552),
    U = n(905357),
    K = n(724994),
    q = n(328456),
    G = n(390698),
    Y = n(141011),
    Q = n(525518),
    X = n(426171),
    J = n(224068),
    $ = n(813083),
    ee = n(823941),
    et = n(680942),
    en = n(558060),
    ei = n(237031),
    er = n(372654),
    ea = n(410937),
    el = n(385797),
    es = n(453713),
    eo = n(616066),
    ec = n(332246),
    eu = n(58201),
    ed = n(361110),
    em = n(956472),
    ef = n(832149),
    ep = n(215023),
    eh = n(981631),
    ex = n(474936),
    ev = n(231338),
    eb = n(388032),
    eC = n(453803);
function eg(e) {
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
function eP(e, t) {
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
eb.NW.string(eb.t.SbKDHh), eb.NW.string(eb.t['LMSo+P']), eb.NW.string(eb.t.g5Dump), eb.NW.string(eb.t.p5Z3Oj), eb.NW.string(eb.t.ncsliY);
let e_ = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = r.useRef(null),
            s = (0, x.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: a ? eC.bundleAvatarPreviewContainer : eC.avatarPreviewContainer,
                    children: (0, i.jsx)(eo.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: a ? eC.bundlePfxPreviewContainer : eC.pfxPreviewContainer,
                    ref: l,
                    children: (0, i.jsx)(w.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
                        removeSetHeight: !0
                    })
                })
            )
            .otherwise(() => null);
    },
    eN = (e) => {
        let { product: t, user: n } = e,
            [a, l] = r.useState(0);
        r.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && l((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let s = t.items.length;
        return (0, i.jsx)('div', {
            className: eC.bundlePreviewContainer,
            children: (0, i.jsx)(p.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, r) => {
                    let a = String(r),
                        l = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        o = '('.concat(r + 1, '/').concat(s, ')');
                    return (0, i.jsx)(
                        p.Mi4,
                        {
                            id: a,
                            children: (0, i.jsxs)('div', {
                                className: eC.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(e_, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(p.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eC.bundleSlideTitle,
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
    ej = (e) => {
        let { product: t, user: n } = e;
        return (0, F.x6)(t)
            ? (0, i.jsx)(eN, {
                  product: t,
                  user: n
              })
            : t.items.length > 0
              ? (0, i.jsx)(e_, {
                    item: t.items[0],
                    user: n
                })
              : null;
    },
    eI = (e) => {
        var t, n, a;
        let { product: s, user: c, category: x, onClose: b, returnRef: g, previewingVariantIndexProps: P, selectedVariantIndex: _, tab: N } = e,
            { analyticsLocations: k } = (0, C.ZP)(),
            w = A.ZP.canUseCollectibles(c),
            { previewingVariantIndex: T } = P,
            E = (0, ec.N)(s, T),
            S = (0, eu.W)(s, _);
        o()(null != S, 'Selected product should not be null');
        let Z = (0, K.L)(s),
            { isPurchased: D, isPartiallyOwnedBundle: z } = (0, K.L)(S),
            Y = (0, m.e7)([R.Z], () => R.Z.purchases),
            Q = (0, m.e7)([R.Z], () => R.Z.isClaiming === (null == S ? void 0 : S.skuId)),
            X = (0, v.ZP)(),
            ee = (0, f.wj)(X),
            er = (0, F.G1)(S),
            eo = (0, F.ql)(S, eh.tuJ.DEFAULT),
            ed = (null == eo ? void 0 : eo.amount) === 0,
            { firstAvatarDecoration: ep } = (0, q.R)(null != E ? E : S),
            eg = r.useMemo(() => (0, F.BH)(S, w), [S, w]),
            { handleUseNow: eP, isApplying: e_ } = (0, H.W)({
                product: S,
                onSuccess: b
            }),
            eN = (0, M.hv)('CollectiblesProductPreviewInfo'),
            eI = (0, U.T)(S),
            { enabled: ek } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: ew, checkoutEligiblePrices: eT } = (0, em.I)({
                product: S,
                isPremiumUser: w,
                tab: N
            }),
            eL = ek && (null === (t = eT[0]) || void 0 === t ? void 0 : t.currency) === ev.pK.DISCORD_ORB,
            { redeemVirtualCurrency: ey, isSubmitting: eO, error: eE } = (0, L.f)(),
            { balance: eS } = (0, L.A)(),
            eZ = r.useCallback(
                () =>
                    (0, j.Z)({
                        skuId: S.skuId,
                        analyticsLocations: k,
                        variantsReturnStyle: eN,
                        onClose: (e) => (e ? b() : (0, ev.dG)())
                    }),
                [k, b, S.skuId, eN]
            );
        r.useEffect(() => {
            if (null != ep) return (0, h.cV)(ep), () => (0, h.cV)(void 0);
        }, [ep]);
        let eA = (e) =>
                (0, i.jsx)(I.Z, {
                    subscriptionTier: ex.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: ei.v,
                    onSubscribeModalClose: () => {
                        (0, ei.T)({
                            product: S,
                            category: x,
                            returnRef: g,
                            analyticsLocations: k
                        });
                    }
                }),
            { firstAvatarDecoration: eW, firstProfileEffect: eB } = (0, V.k)(S),
            eR =
                S.type === d.Z.BUNDLE
                    ? eb.NW.formatToPlainString(eb.t['jM8/7+'], {
                          avatarDecorationName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : '',
                          profileEffectName: null !== (a = null == eB ? void 0 : eB.name) && void 0 !== a ? a : ''
                      })
                    : S.summary;
        return (0, i.jsxs)('div', {
            className: eC.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: eC.titleContainer,
                    children: (0, i.jsx)($.Z, {
                        category: x,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(ej, {
                    product: null != E ? E : S,
                    user: c
                }),
                (0, i.jsxs)('div', {
                    children: [
                        null == eE
                            ? null
                            : (0, i.jsxs)('div', {
                                  className: eC.errorMessageLine,
                                  children: [
                                      (0, i.jsx)(p.P4T, {
                                          size: 'xs',
                                          color: 'white'
                                      }),
                                      (0, i.jsx)(p.Text, {
                                          variant: 'text-xs/medium',
                                          children: eE.message
                                      })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eC.description,
                            children: [
                                (0, i.jsx)(J.Z, {
                                    product: S,
                                    isDarkText: !ee
                                }),
                                (0, i.jsx)(p.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eC.headingWithItemTypePill,
                                    children: eI
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    children: eR
                                }),
                                Z.isPurchased || Z.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(G.U, {
                                          className: eC.priceTag,
                                          isPartiallyPurchased: z
                                      })
                                    : er
                                      ? (0, i.jsx)(p.Text, {
                                            variant: 'text-md/semibold',
                                            className: eC.priceTag,
                                            children: eb.NW.string(eb.t.rt69oq)
                                        })
                                      : ek
                                        ? eL
                                            ? (0, i.jsx)(ea.Z, { orbPrice: eT[0] })
                                            : (0, i.jsx)(el.Z, {
                                                  displayPrices: ew,
                                                  isPremiumUser: w,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, i.jsx)(en.Z, {
                                              product: S,
                                              discount: eg,
                                              isPremiumUser: w,
                                              className: w ? eC.priceTag : eC.priceTagContainer,
                                              nitroUpsell: !w
                                          })
                            ]
                        }),
                        (0, i.jsx)(es.P, {
                            variantGroupProduct: s,
                            previewingVariantIndexProps: P,
                            className: eC.variantsSwitch,
                            purchases: Y
                        }),
                        (0, i.jsx)('div', {
                            className: eC.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: eC.primaryButtons,
                                children: [
                                    (() => {
                                        if (er && !w && !ed) return eA(eb.NW.string(eb.t.sEAnVF));
                                        if (D)
                                            return (0, i.jsx)(p.zxk, {
                                                className: eC.button,
                                                look: p.zxk.Looks.FILLED,
                                                onClick: eP,
                                                submitting: e_,
                                                children: eb.NW.string(eb.t.MAS7uL)
                                            });
                                        if (z) return null;
                                        if (er)
                                            return (0, i.jsx)(p.zxk, {
                                                className: eC.button,
                                                look: p.zxk.Looks.FILLED,
                                                submitting: Q,
                                                submittingStartedLabel: eb.NW.string(eb.t['TYw+9v']),
                                                submittingFinishedLabel: eb.NW.string(eb.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, B.fK)(S.skuId),
                                                        b(),
                                                        (0, ef.Z)({
                                                            product: S,
                                                            analyticsLocations: k
                                                        });
                                                },
                                                children: eb.NW.string(eb.t.zp6caG)
                                            });
                                        let e = eL && (null == eS || eS < eT[0].amount);
                                        return (0, i.jsx)(p.zxk, {
                                            className: l()(eC.button, { [eC.enabledButton]: !e }),
                                            innerClassName: eC.buttonInner,
                                            look: p.zxk.Looks.FILLED,
                                            submitting: eO,
                                            disabled: e,
                                            onClick: () => {
                                                eL
                                                    ? ey(S.skuId, () => {
                                                          b(),
                                                              (0, B.qg)({
                                                                  variantsReturnStyle: eN,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, ef.Z)({
                                                                  product: S,
                                                                  analyticsLocations: k
                                                              });
                                                      })
                                                    : eZ();
                                            },
                                            children: eL
                                                ? eb.NW.format(eb.t.kAgx5O, {
                                                      orbPrice: eT[0].amount,
                                                      orbIconHook: () => (0, i.jsx)(O.Z, {})
                                                  })
                                                : (0, F.x6)(S)
                                                  ? eb.NW.string(eb.t.V1AWw8)
                                                  : S.type === d.Z.PROFILE_EFFECT
                                                    ? eb.NW.string(eb.t.kAeDcH)
                                                    : eb.NW.string(eb.t.AQ0Ven)
                                        });
                                    })(),
                                    !er &&
                                        !ed &&
                                        !u.tq &&
                                        (0, i.jsx)(et.Z, {
                                            product: S,
                                            onSuccess: b,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !eL || eT.length <= 1
                            ? null
                            : (0, i.jsx)(p.P3F, {
                                  onClick: eZ,
                                  className: eC.payWithFiatLink,
                                  children: (0, i.jsx)(p.Text, {
                                      variant: 'text-xxs/normal',
                                      className: eC.payWithFiatLinkText,
                                      children: eb.NW.format(eb.t.hDiZtL, { price: (0, W.T4)(eT[1].amount, eT[1].currency) })
                                  })
                              }),
                        (0, i.jsx)(p.Text, {
                            className: l()(eC.disclaimer, !ee && eC.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: D ? null : er ? eb.NW.string(eb.t.O2K0xM) : (0, F.x6)(S) ? eb.NW.string(eb.t.Ifvd7O) : S.type === d.Z.PROFILE_EFFECT ? eb.NW.string(eb.t.pxunjo) : eb.NW.string(eb.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    ek = (e) => {
        let { product: t, user: n } = e,
            r = A.ZP.canUsePremiumProfileCustomization(n),
            a = (0, m.cj)([E.Z], () => E.Z.getAllPending()),
            l = t.type === d.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, q.R)(t),
            u = null != c;
        return (0, i.jsxs)('div', {
            className: (null == s ? void 0 : s.type) === d.Z.AVATAR_DECORATION ? eC.previewsContainerInner : eC.profileEffectPreviewsContainerInner,
            children: [
                (0, i.jsx)(
                    k.Z,
                    eP(eg({}, a), {
                        user: n,
                        canUsePremiumCustomization: r,
                        pendingAvatarDecoration: o,
                        pendingProfileEffectId: null == c ? void 0 : c.id,
                        disabledInputs: !0,
                        hideMessageInput: !u,
                        hideExampleButton: !0,
                        hideCustomStatus: !0,
                        hideBioSection: l
                    })
                ),
                l && (0, i.jsx)(eT, { user: n })
            ]
        });
    },
    ew = (e) => {
        let { author: t } = e;
        return (0, g.e5)(
            eP(
                eg(
                    {},
                    (0, P.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eb.NW.string(eb.t.d5YwKy)
                    })
                ),
                {
                    state: eh.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eT = (e) => {
        let { user: t } = e,
            n = ew({ author: t });
        return (0, i.jsx)(p.Rny, {
            children: (0, i.jsxs)(p.Zbd, {
                className: eC.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        N.Z,
                        {
                            className: eC.mockMessage,
                            author: (0, _.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: eC.mockInput,
                        children: [
                            (0, i.jsx)(p.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eC.mockInputButton
                            }),
                            (0, i.jsx)(p.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eC.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eL = (e) => {
        var t;
        let { transitionState: n, onClose: a, product: l, category: s, returnRef: c, analyticsSource: u, analyticsLocations: f, tab: h } = e,
            x = (0, m.e7)([S.default], () => S.default.getCurrentUser()),
            v = (0, ed.f)(l),
            { previewingVariantIndex: g } = v,
            P = (0, m.e7)([R.Z], () => R.Z.purchases),
            _ = (0, D.o)(l, P),
            N = (0, ec.N)(l, g),
            j = (0, eu.W)(l, _);
        o()(null != j, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, C.ZP)([...f, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, X.u9)(j.skuId);
        let [k] = j.items,
            w = (0, z.s)('CollectiblesShopProductDetailsModal');
        if (
            (r.useEffect(() => {
                null != x && (0, T.Z)(x.id, x.getAvatarURL(void 0, 80));
            }, [x]),
            r.useEffect(() => {
                let e = (null == k ? void 0 : k.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                Z.default.track(eh.rMx.OPEN_MODAL, {
                    type: eh.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: u,
                    location_stack: I,
                    sku_id: j.skuId,
                    product_type: e
                }),
                    j.items.map(B.oK);
            }, [u, I, null == k ? void 0 : k.type, j.skuId, j.items]),
            null == x)
        )
            return null;
        let L = (0, ep.ZS)(s.skuId);
        return (0, i.jsx)(C.Gt, {
            value: I,
            children: (0, i.jsx)(p.Y0X, {
                hideShadow: !0,
                className: eC.modalRoot,
                returnRef: c,
                transitionState: n,
                size: p.CgR.DYNAMIC,
                children: (0, i.jsxs)(p.hzk, {
                    className: eC.modalContent,
                    children: [
                        (0, i.jsx)(eI, {
                            user: x,
                            product: l,
                            category: s,
                            onClose: a,
                            previewingVariantIndexProps: v,
                            selectedVariantIndex: _,
                            tab: h
                        }),
                        (0, i.jsxs)('div', {
                            className: j.type === d.Z.AVATAR_DECORATION ? eC.collectiblePreviewsContainerWithChat : eC.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(Y.Z, {
                                    asset: null !== (t = s.pdpBg) && void 0 !== t ? t : l.banner,
                                    size: (0, er.ML)(540),
                                    className: eC.categoryBanner,
                                    categoryBannerOverride: L
                                }),
                                (0, i.jsx)(ek, {
                                    user: x,
                                    product: null != N ? N : j
                                }),
                                (0, i.jsxs)('div', {
                                    className: eC.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: eC.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: eC.titleImage,
                                                style: null == L ? void 0 : L.pdpLogoStyle,
                                                src: (0, F.uV)(s.logo, { size: ee.n }),
                                                alt: s.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: eC.headerButtonContainer,
                                            children: [
                                                w && (0, i.jsx)(Q.B, { skuId: j.skuId }),
                                                (0, i.jsx)(p.olH, {
                                                    onClick: a,
                                                    className: eC.modalCloseButton,
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
