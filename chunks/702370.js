n.d(t, { default: () => eZ }), n(47120), n(627341), n(266796);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(979554),
    m = n(399606),
    p = n(780384),
    v = n(481060),
    f = n(809206),
    h = n(727637),
    x = n(410030),
    b = n(100527),
    P = n(906732),
    g = n(570908),
    C = n(786761),
    N = n(3148),
    w = n(739566),
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
    ea = n(237031),
    er = n(372654),
    es = n(410937),
    el = n(385797),
    eo = n(453713),
    ec = n(616066),
    ed = n(22267),
    eu = n(332246),
    em = n(58201),
    ep = n(361110),
    ev = n(956472),
    ef = n(832149),
    eh = n(215023),
    ex = n(981631),
    eb = n(474936),
    eP = n(231338),
    eg = n(388032),
    eC = n(453803);
function eN(e) {
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
function ew(e, t) {
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
let ej = {
        mallow: {
            name: eg.NW.string(eg.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: eg.NW.string(eg.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: eg.NW.string(eg.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: eg.NW.string(eg.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: eg.NW.string(eg.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    e_ = (e) => {
        let { item: t, user: n, isBundleItem: r = !1 } = e,
            s = a.useRef(null),
            l = (0, h.Z)(s);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: r ? eC.bundleAvatarPreviewContainer : eC.avatarPreviewContainer,
                    children: (0, i.jsx)(ec.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: r ? eC.bundlePfxPreviewContainer : eC.pfxPreviewContainer,
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
                    className: eC.nameplatePreviewContainer,
                    children: (0, i.jsx)(ed.Z, {
                        className: eC.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: l
                    })
                })
            )
            .otherwise(() => null);
    },
    eI = (e) => {
        let { product: t, user: n } = e,
            [r, s] = a.useState(0);
        a.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && s((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let l = t.items.length;
        return (0, i.jsx)('div', {
            className: eC.bundlePreviewContainer,
            children: (0, i.jsx)(v.MyZ, {
                activeSlide: String(r),
                children: t.items.map((e, a) => {
                    let r = String(a),
                        s = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        o = '('.concat(a + 1, '/').concat(l, ')');
                    return (0, i.jsx)(
                        v.Mi4,
                        {
                            id: r,
                            children: (0, i.jsxs)('div', {
                                className: eC.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(e_, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eC.bundleSlideTitle,
                                        children: [null == s ? void 0 : s.name, ' ', o]
                                    })
                                ]
                            })
                        },
                        r
                    );
                })
            })
        });
    },
    ek = (e) => {
        let { product: t, user: n } = e;
        return (0, z.x6)(t)
            ? (0, i.jsx)(eI, {
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
    eT = (e) => {
        var t, n, r;
        let { product: l, user: c, category: h, onClose: b, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: N, tab: w } = e,
            { analyticsLocations: j } = (0, P.ZP)(),
            k = W.ZP.canUseCollectibles(c),
            { previewingVariantIndex: T } = C,
            S = (0, eu.N)(l, T),
            O = (0, em.W)(l, N);
        o()(null != O, 'Selected product should not be null');
        let Z = (0, K.L)(l),
            { isPurchased: A, isPartiallyOwnedBundle: F } = (0, K.L)(O),
            M = (0, m.e7)([D.Z], () => D.Z.purchases),
            X = (0, m.e7)([D.Z], () => D.Z.isClaiming === (null == O ? void 0 : O.skuId)),
            Q = (0, x.ZP)(),
            J = (0, p.wj)(Q),
            et = (0, z.G1)(O),
            er = (0, z.ql)(O, ex.tuJ.DEFAULT),
            ec = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: ed } = (0, q.R)(null != S ? S : O),
            ep = a.useMemo(() => (0, z.BH)(O, k), [O, k]),
            { handleUseNow: eh, isApplying: eN } = (0, U.W)({
                product: O,
                onSuccess: b
            }),
            ew = (0, H.hv)('CollectiblesProductPreviewInfo'),
            ej = (0, G.T)(O),
            { enabled: e_ } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: eI, checkoutEligiblePrices: eT } = (0, ev.I)({
                product: O,
                isPremiumUser: k,
                tab: w
            }),
            eS = e_ && (null === (t = eT[0]) || void 0 === t ? void 0 : t.currency) === eP.pK.DISCORD_ORB,
            { redeemVirtualCurrency: eL, isSubmitting: ey, error: eE } = (0, L.f)(),
            { balance: eO } = (0, L.A)(),
            eZ = a.useCallback(
                () =>
                    (0, _.Z)({
                        skuId: O.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: ew,
                        onClose: (e) => (e ? b() : (0, eP.dG)())
                    }),
                [j, b, O.skuId, ew]
            );
        a.useEffect(() => {
            if (null != ed) return (0, f.cV)(ed), () => (0, f.cV)(void 0);
        }, [ed]);
        let eA = (e) =>
                (0, i.jsx)(I.Z, {
                    subscriptionTier: eb.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: ea.v,
                    onSubscribeModalClose: () => {
                        (0, ea.T)({
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
                    ? eg.NW.formatToPlainString(eg.t['jM8/7+'], {
                          avatarDecorationName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : '',
                          profileEffectName: null !== (r = null == eR ? void 0 : eR.name) && void 0 !== r ? r : ''
                      })
                    : O.summary;
        return (0, i.jsxs)('div', {
            className: eC.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: eC.titleContainer,
                    children: (0, i.jsx)(ee.Z, {
                        category: h,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(ek, {
                    product: null != S ? S : O,
                    user: c
                }),
                (0, i.jsxs)('div', {
                    children: [
                        null == eE
                            ? null
                            : (0, i.jsxs)('div', {
                                  className: eC.errorMessageLine,
                                  children: [
                                      (0, i.jsx)(v.P4T, {
                                          size: 'xs',
                                          color: 'white'
                                      }),
                                      (0, i.jsx)(v.Text, {
                                          variant: 'text-xs/medium',
                                          children: eE.message
                                      })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eC.description,
                            children: [
                                (0, i.jsx)($.Z, {
                                    product: O,
                                    isDarkText: !J
                                }),
                                (0, i.jsx)(v.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eC.headingWithItemTypePill,
                                    children: ej
                                }),
                                (0, i.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: eB
                                }),
                                Z.isPurchased || Z.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(Y.U, {
                                          className: eC.priceTag,
                                          isPartiallyPurchased: F
                                      })
                                    : et
                                      ? (0, i.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: eC.priceTag,
                                            children: eg.NW.string(eg.t.rt69oq)
                                        })
                                      : e_
                                        ? eS
                                            ? (0, i.jsx)(es.Z, { orbPrice: eT[0] })
                                            : (0, i.jsx)(el.Z, {
                                                  displayPrices: eI,
                                                  isPremiumUser: k,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, i.jsx)(ei.Z, {
                                              product: O,
                                              discount: ep,
                                              isPremiumUser: k,
                                              className: k ? eC.priceTag : eC.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, i.jsx)(eo.P, {
                            variantGroupProduct: l,
                            previewingVariantIndexProps: C,
                            className: eC.variantsSwitch,
                            purchases: M
                        }),
                        (0, i.jsx)('div', {
                            className: eC.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: eC.primaryButtons,
                                children: [
                                    (() => {
                                        if (et && !k && !ec) return eA(eg.NW.string(eg.t.sEAnVF));
                                        if (A)
                                            return (0, i.jsx)(v.zxk, {
                                                className: eC.button,
                                                look: v.zxk.Looks.FILLED,
                                                onClick: eh,
                                                submitting: eN,
                                                children: eg.NW.string(eg.t.MAS7uL)
                                            });
                                        if (F) return null;
                                        if (et)
                                            return (0, i.jsx)(v.zxk, {
                                                className: eC.button,
                                                look: v.zxk.Looks.FILLED,
                                                submitting: X,
                                                submittingStartedLabel: eg.NW.string(eg.t['TYw+9v']),
                                                submittingFinishedLabel: eg.NW.string(eg.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, B.fK)(O.skuId),
                                                        b(),
                                                        (0, ef.Z)({
                                                            product: O,
                                                            analyticsLocations: j
                                                        });
                                                },
                                                children: eg.NW.string(eg.t.zp6caG)
                                            });
                                        let e = eS && (null == eO || eO < eT[0].amount);
                                        return (0, i.jsx)(v.zxk, {
                                            className: s()(eC.button, { [eC.enabledButton]: !e }),
                                            innerClassName: eC.buttonInner,
                                            look: v.zxk.Looks.FILLED,
                                            submitting: ey,
                                            disabled: e,
                                            onClick: () => {
                                                eS
                                                    ? eL(O.skuId, () => {
                                                          b(),
                                                              (0, B.qg)({
                                                                  variantsReturnStyle: ew,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, ef.Z)({
                                                                  product: O,
                                                                  analyticsLocations: j
                                                              });
                                                      })
                                                    : eZ();
                                            },
                                            children: eS
                                                ? eg.NW.format(eg.t.kAgx5O, {
                                                      orbPrice: eT[0].amount,
                                                      orbIconHook: () => (0, i.jsx)(E.Z, {})
                                                  })
                                                : (0, z.x6)(O)
                                                  ? eg.NW.string(eg.t.V1AWw8)
                                                  : O.type === u.Z.PROFILE_EFFECT
                                                    ? eg.NW.string(eg.t.kAeDcH)
                                                    : eg.NW.string(eg.t.AQ0Ven)
                                        });
                                    })(),
                                    !et &&
                                        !ec &&
                                        !d.tq &&
                                        (0, i.jsx)(en.Z, {
                                            product: O,
                                            onSuccess: b,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !eS || eT.length <= 1
                            ? null
                            : (0, i.jsx)(v.P3F, {
                                  onClick: eZ,
                                  className: eC.payWithFiatLink,
                                  children: (0, i.jsx)(v.Text, {
                                      variant: 'text-xxs/normal',
                                      className: eC.payWithFiatLinkText,
                                      children: eg.NW.format(eg.t.hDiZtL, { price: (0, R.T4)(eT[1].amount, eT[1].currency) })
                                  })
                              }),
                        (0, i.jsx)(v.Text, {
                            className: s()(eC.disclaimer, !J && eC.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: A ? null : et ? eg.NW.string(eg.t.O2K0xM) : (0, z.x6)(O) ? eg.NW.string(eg.t.Ifvd7O) : O.type === u.Z.PROFILE_EFFECT ? eg.NW.string(eg.t.pxunjo) : eg.NW.string(eg.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eS = (e) => {
        let { user: t } = e;
        return (0, i.jsx)('div', {
            className: eC.nameplateRightPanePreviewAvatarContainer,
            children: (0, i.jsx)(g.Z, {
                avatar: (0, i.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: v.Skl.ONLINE
                }),
                name: t.name,
                selected: !1,
                innerClassName: eC.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eL = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, i.jsxs)('div', {
            className: eC.nameplateRightPanePreviewContainer,
            children: [
                (0, i.jsx)(eS, { user: ej.mallow }),
                (0, i.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eC.namplateRightPanePreviewSectionGroup,
                    children: [eg.NW.string(eg.t['yzW/fX']), ' - 3']
                }),
                (0, i.jsx)(eS, { user: ej.phibi }),
                (0, i.jsx)('div', {
                    className: eC.nameplateRightPanePreviewAvatarContainer,
                    children: (0, i.jsx)(ed.Z, {
                        className: eC.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0
                    })
                }),
                (0, i.jsx)(eS, { user: ej.locke }),
                (0, i.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: eC.namplateRightPanePreviewSectionGroup,
                    children: [eg.NW.string(eg.t['NG43//']), ' - 12']
                }),
                (0, i.jsx)(eS, { user: ej.boom }),
                (0, i.jsx)(eS, { user: ej.cherry })
            ]
        });
    },
    ey = (e) => {
        let { product: t, user: n } = e,
            a = W.ZP.canUsePremiumProfileCustomization(n),
            r = (0, m.cj)([O.Z], () => O.Z.getAllPending()),
            s = t.type === u.Z.AVATAR_DECORATION,
            [l] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, q.R)(t),
            d = null != c;
        return (0, i.jsx)('div', {
            className: (null == l ? void 0 : l.type) === u.Z.AVATAR_DECORATION ? eC.previewsContainerInner : eC.profileEffectPreviewsContainerInner,
            children:
                (null == l ? void 0 : l.type) === u.Z.NAMEPLATE
                    ? (0, i.jsx)(eL, {
                          user: n,
                          nameplate: l
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  k.Z,
                                  ew(eN({}, r), {
                                      user: n,
                                      canUsePremiumCustomization: a,
                                      pendingAvatarDecoration: o,
                                      pendingProfileEffectId: null == c ? void 0 : c.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !d,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: s
                                  })
                              ),
                              s && (0, i.jsx)(eO, { user: n })
                          ]
                      })
        });
    },
    eE = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            ew(
                eN(
                    {},
                    (0, N.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eg.NW.string(eg.t.d5YwKy)
                    })
                ),
                {
                    state: ex.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eO = (e) => {
        let { user: t } = e,
            n = eE({ author: t });
        return (0, i.jsx)(v.Rny, {
            children: (0, i.jsxs)(v.Zbd, {
                className: eC.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        j.Z,
                        {
                            className: eC.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: eC.mockInput,
                        children: [
                            (0, i.jsx)(v.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eC.mockInputButton
                            }),
                            (0, i.jsx)(v.EO4, {
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
    eZ = (e) => {
        var t;
        let { transitionState: n, onClose: r, product: s, category: l, returnRef: c, analyticsSource: d, analyticsLocations: p, tab: f } = e,
            h = (0, m.e7)([Z.default], () => Z.default.getCurrentUser()),
            x = (0, ep.f)(s),
            { previewingVariantIndex: g } = x,
            C = (0, m.e7)([D.Z], () => D.Z.purchases),
            N = (0, F.o)(s, C),
            w = (0, eu.N)(s, g),
            j = (0, em.W)(s, N);
        o()(null != j, 'Selected product should not be null');
        let { analyticsLocations: _ } = (0, P.ZP)([...p, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, J.u9)(j.skuId);
        let [I] = j.items,
            k = (0, M.s)('CollectiblesShopProductDetailsModal');
        if (
            (a.useEffect(() => {
                null != h && (0, S.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            a.useEffect(() => {
                let e = (null == I ? void 0 : I.type) === u.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                A.default.track(ex.rMx.OPEN_MODAL, {
                    type: ex.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
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
        let T = (0, eh.ZS)(l.skuId);
        return (0, i.jsx)(P.Gt, {
            value: _,
            children: (0, i.jsx)(v.Y0X, {
                hideShadow: !0,
                className: eC.modalRoot,
                returnRef: c,
                transitionState: n,
                size: v.CgR.DYNAMIC,
                children: (0, i.jsxs)(v.hzk, {
                    className: eC.modalContent,
                    children: [
                        (0, i.jsx)(eT, {
                            user: h,
                            product: s,
                            category: l,
                            onClose: r,
                            previewingVariantIndexProps: x,
                            selectedVariantIndex: N,
                            tab: f
                        }),
                        (0, i.jsxs)('div', {
                            className: j.type === u.Z.AVATAR_DECORATION ? eC.collectiblePreviewsContainerWithChat : eC.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(X.Z, {
                                    asset: null !== (t = l.pdpBg) && void 0 !== t ? t : s.banner,
                                    size: (0, er.ML)(540),
                                    className: eC.categoryBanner,
                                    categoryBannerOverride: T
                                }),
                                (0, i.jsx)(ey, {
                                    user: h,
                                    product: null != w ? w : j
                                }),
                                (0, i.jsxs)('div', {
                                    className: eC.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: eC.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: eC.titleImage,
                                                style: null == T ? void 0 : T.pdpLogoStyle,
                                                src: (0, z.uV)(l.logo, { size: et.n }),
                                                alt: l.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: eC.headerButtonContainer,
                                            children: [
                                                k && (0, i.jsx)(Q.B, { skuId: j.skuId }),
                                                (0, i.jsx)(v.olH, {
                                                    onClick: r,
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
