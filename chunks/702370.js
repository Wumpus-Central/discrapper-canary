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
    O = n(753206),
    I = n(333867),
    N = n(197115),
    _ = n(921813),
    k = n(876917),
    S = n(643879),
    E = n(484459),
    y = n(43747),
    T = n(822857),
    L = n(82856),
    Z = n(960919),
    A = n(25990),
    R = n(594174),
    W = n(626135),
    B = n(74538),
    D = n(937615),
    F = n(335131),
    M = n(1870),
    H = n(429368),
    z = n(884697),
    U = n(72462),
    V = n(228624),
    G = n(188584),
    K = n(635552),
    q = n(905357),
    Q = n(724994),
    X = n(328456),
    Y = n(390698),
    J = n(141011),
    $ = n(525518),
    ee = n(426171),
    et = n(224068),
    en = n(813083),
    er = n(680942),
    ei = n(558060),
    ea = n(237031),
    el = n(372654),
    eo = n(259673),
    es = n(508925),
    ec = n(755419),
    eu = n(410937),
    ed = n(385797),
    em = n(453713),
    ep = n(616066),
    ef = n(22267),
    ev = n(332246),
    eh = n(58201),
    eb = n(794324),
    ex = n(361110),
    eP = n(956472),
    eg = n(832149),
    eC = n(215023),
    ej = n(981631),
    ew = n(474936),
    eO = n(231338),
    eI = n(388032),
    eN = n(885611);
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
let eS = {
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
    eE = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, h.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eN.bundleAvatarPreviewContainer : eN.avatarPreviewContainer,
                    children: (0, r.jsx)(ep.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eN.bundlePfxPreviewContainer : eN.pfxPreviewContainer,
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
                    className: eN.nameplatePreviewContainer,
                    children: (0, r.jsx)(ef.Z, {
                        className: eN.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: o
                    })
                })
            )
            .otherwise(() => null);
    },
    ey = (e) => {
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
            className: eN.bundlePreviewContainer,
            children: (0, r.jsx)(f.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = '('.concat(i + 1, '/').concat(o, ')');
                    return (0, r.jsx)(
                        f.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)('div', {
                                className: eN.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eE, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eN.bundleSlideTitle,
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
    eT = (e) => {
        let { product: t, user: n } = e;
        return (0, z.x6)(t)
            ? (0, r.jsx)(ey, {
                  product: t,
                  user: n
              })
            : (0, ec.o0)(t.skuId)
              ? (0, r.jsx)(es.b, { product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eE, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eL = (e) => {
        var t, n;
        let { product: a, user: o, category: c, shouldCheckoutWithOrbs: h, onClose: x, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: j, tab: w } = e,
            { analyticsLocations: O } = (0, P.ZP)(),
            _ = B.ZP.canUseCollectibles(o),
            { previewingVariantIndex: k } = C,
            S = (0, ev.N)(a, k),
            E = (0, eh.W)(a, j);
        s()(null != E, 'Selected product should not be null');
        let A = (0, Q.L)(a),
            { isPurchased: R, isPartiallyOwnedBundle: W } = (0, Q.L)(E),
            H = (0, m.e7)([M.Z], () => M.Z.purchases),
            U = (0, m.e7)([M.Z], () => M.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            J = (0, b.ZP)(),
            $ = (0, p.wj)(J),
            ee = (0, z.G1)(E),
            el = (0, z.ql)(E, ej.tuJ.DEFAULT),
            eo = (null == el ? void 0 : el.amount) === 0,
            { firstAvatarDecoration: es } = (0, X.R)(null != S ? S : E),
            ec = i.useMemo(() => (0, z.BH)(E, _), [E, _]),
            { handleUseNow: ep, isApplying: ef } = (0, K.W)({
                product: E,
                onSuccess: x
            }),
            eb = (0, V.hv)('CollectiblesProductPreviewInfo'),
            ex = (0, q.T)(E),
            { enabled: eC } = (0, T.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                displayPrices: e_,
                checkoutEligiblePrices: ek,
                isOrbExclusive: eS
            } = (0, eP.Ip)({
                product: E,
                isPremiumUser: _,
                tab: w
            }),
            eE = eC && h,
            { redeemVirtualCurrency: ey, isSubmitting: eL, error: eZ } = (0, y.f)(),
            { balance: eA } = (0, y.A)(),
            eR = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: E.skuId,
                        analyticsLocations: O,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? x() : (0, eO.dG)())
                    }),
                [O, x, E.skuId, eb]
            );
        i.useEffect(() => {
            if (null != es) return (0, v.cV)(es), () => (0, v.cV)(void 0);
        }, [es]);
        let eW = (e) =>
                (0, r.jsx)(N.Z, {
                    subscriptionTier: ew.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: ea.v,
                    onSubscribeModalClose: () => {
                        (0, ea.T)({
                            product: E,
                            category: c,
                            shouldCheckoutWithOrbs: h,
                            returnRef: g,
                            analyticsLocations: O
                        });
                    }
                }),
            { firstAvatarDecoration: eB, firstProfileEffect: eD } = (0, G.k)(E),
            eF =
                E.type === d.Z.BUNDLE
                    ? eI.NW.formatToPlainString(eI.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eB ? void 0 : eB.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eD ? void 0 : eD.name) && void 0 !== n ? n : ''
                      })
                    : E.summary;
        return (0, r.jsxs)('div', {
            className: eN.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eN.titleContainer,
                    children: (0, r.jsx)(en.Z, {
                        category: c,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eT, {
                    product: null != S ? S : E,
                    user: o
                }),
                (0, r.jsxs)('div', {
                    children: [
                        null == eZ
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
                                          children: eZ.message
                                      })
                                  ]
                              }),
                        (0, r.jsxs)('div', {
                            className: eN.description,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    product: E,
                                    isDarkText: !$,
                                    isOrbExclusive: eS
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eN.headingWithItemTypePill,
                                    children: ex
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eF
                                }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Y.U, {
                                          className: eN.priceTag,
                                          isPartiallyPurchased: W
                                      })
                                    : ee
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: eN.priceTag,
                                            children: eI.NW.string(eI.t.rt69oq)
                                        })
                                      : eC
                                        ? eE
                                            ? (0, r.jsx)(eu.Z, { orbPrice: ek[0] })
                                            : (0, r.jsx)(ed.Z, {
                                                  displayPrices: e_,
                                                  isPremiumUser: _,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, r.jsx)(ei.Z, {
                                              product: E,
                                              discount: ec,
                                              isPremiumUser: _,
                                              className: _ ? eN.priceTag : eN.priceTagContainer,
                                              nitroUpsell: !_
                                          })
                            ]
                        }),
                        (0, r.jsx)(em.P, {
                            variantGroupProduct: a,
                            previewingVariantIndexProps: C,
                            className: eN.variantsSwitch,
                            purchases: H
                        }),
                        (0, r.jsx)('div', {
                            className: eN.buttonsContainer,
                            children: (0, r.jsxs)('div', {
                                className: eN.primaryButtons,
                                children: [
                                    (() => {
                                        if (ee && !_ && !eo) return eW(eI.NW.string(eI.t.sEAnVF));
                                        if (R)
                                            return (0, r.jsx)(f.zxk, {
                                                className: eN.button,
                                                look: f.zxk.Looks.FILLED,
                                                onClick: ep,
                                                submitting: ef,
                                                children: eI.NW.string(eI.t.MAS7uL)
                                            });
                                        if (W) return null;
                                        if (ee)
                                            return (0, r.jsx)(f.zxk, {
                                                className: eN.button,
                                                look: f.zxk.Looks.FILLED,
                                                submitting: U,
                                                submittingStartedLabel: eI.NW.string(eI.t['TYw+9v']),
                                                submittingFinishedLabel: eI.NW.string(eI.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, F.fK)(E.skuId),
                                                        x(),
                                                        (0, eg.Z)({
                                                            product: E,
                                                            analyticsLocations: O
                                                        });
                                                },
                                                children: eI.NW.string(eI.t.zp6caG)
                                            });
                                        let e = eE && (null == eA || 0 === ek.length || eA < ek[0].amount);
                                        return (0, r.jsx)(f.zxk, {
                                            className: l()(eN.button, { [eN.enabledButton]: !e }),
                                            innerClassName: eN.buttonInner,
                                            look: f.zxk.Looks.FILLED,
                                            submitting: eL,
                                            disabled: e,
                                            onClick: () => {
                                                eE
                                                    ? ey(E.skuId, (e) => {
                                                          var t;
                                                          x(!0),
                                                              (0, F.qg)({
                                                                  variantsReturnStyle: eb,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, eg.Z)({
                                                                  product: E,
                                                                  analyticsLocations: O,
                                                                  onCloseCallback: () => {
                                                                      (0, L.vp)();
                                                                  },
                                                                  itemConsumed: null === (t = e[0]) || void 0 === t ? void 0 : t.consumed
                                                              });
                                                      })
                                                    : eR();
                                            },
                                            children: eE
                                                ? eI.NW.format(eI.t.kAgx5O, {
                                                      orbPrice: ek.length > 0 ? ek[0].amount : 1 / 0,
                                                      orbIconHook: () => (0, r.jsx)(Z.Z, {})
                                                  })
                                                : (0, z.x6)(E)
                                                  ? eI.NW.string(eI.t.V1AWw8)
                                                  : E.type === d.Z.PROFILE_EFFECT
                                                    ? eI.NW.string(eI.t.kAeDcH)
                                                    : eI.NW.string(eI.t.AQ0Ven)
                                        });
                                    })(),
                                    !ee &&
                                        !eo &&
                                        !u.tq &&
                                        !eS &&
                                        E.type !== d.Z.NAMEPLATE &&
                                        (0, r.jsx)(er.Z, {
                                            product: E,
                                            onSuccess: x,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !eE || ek.length <= 1
                            ? null
                            : (0, r.jsx)(f.P3F, {
                                  onClick: eR,
                                  className: eN.payWithFiatLink,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: 'text-xxs/normal',
                                      className: eN.payWithFiatLinkText,
                                      children: eI.NW.format(eI.t.hDiZtL, { price: (0, D.T4)(ek[1].amount, ek[1].currency) })
                                  })
                              }),
                        (0, r.jsx)(f.Text, {
                            className: l()(eN.disclaimer, !$ && eN.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: R ? null : ee ? eI.NW.string(eI.t.O2K0xM) : (0, z.x6)(E) ? eI.NW.string(eI.t.Ifvd7O) : E.type === d.Z.PROFILE_EFFECT ? eI.NW.string(eI.t.pxunjo) : eI.NW.string(eI.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eZ = (e) => {
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
    eA = (e) => {
        let { user: t, nameplate: n } = e,
            a = i.useRef(null),
            l = (0, h.Z)(a);
        return (0, r.jsxs)('div', {
            className: eN.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eZ, { user: eS.mallow }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eZ, { user: eS.phibi }),
                (0, r.jsx)('div', {
                    ref: a,
                    className: eN.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ef.Z, {
                        className: eN.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: l
                    })
                }),
                (0, r.jsx)(eZ, { user: eS.locke }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eN.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eZ, { user: eS.boom }),
                (0, r.jsx)(eZ, { user: eS.cherry })
            ]
        });
    },
    eR = (e) => {
        let { product: t, user: n } = e,
            i = B.ZP.canUsePremiumProfileCustomization(n),
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
            s = (0, S.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: f } = (0, X.R)(t),
            v = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eN.previewsContainerInner : eN.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eA, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  _.Z,
                                  ek(e_({}, o), {
                                      pendingAvatar: s,
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
    eW = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            ek(
                e_(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eI.NW.string(eI.t.d5YwKy)
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
            n = eW({ author: t });
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsxs)(f.Zbd, {
                className: eN.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        O.Z,
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
    eD = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: v } = e,
            h = (0, m.e7)([R.default], () => R.default.getCurrentUser()),
            b = (0, ex.f)(a),
            { previewingVariantIndex: g } = b,
            C = (0, m.e7)([M.Z], () => M.Z.purchases),
            j = (0, H.o)(a, C),
            w = (0, ev.N)(a, g),
            O = (0, eh.W)(a, j);
        s()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, P.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ee.u9)(O.skuId);
        let [N] = O.items,
            _ = (0, U.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: k, logo: S } = (0, eb.OR)(l, a);
        if (
            (i.useEffect(() => {
                null != h && (0, E.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            i.useEffect(() => {
                let e = (null == N ? void 0 : N.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                W.default.track(ej.rMx.OPEN_MODAL, {
                    type: ej.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: c,
                    location_stack: I,
                    sku_id: O.skuId,
                    product_type: e
                }),
                    O.items.map(F.oK);
            }, [c, I, null == N ? void 0 : N.type, O.skuId, O.items]),
            null == h)
        )
            return null;
        let y = (0, eC.ZS)(l.skuId),
            T = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n(), e || (0, L.vp)();
            };
        return (0, r.jsx)(P.Gt, {
            value: I,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: eN.modalRoot,
                returnRef: o,
                transitionState: t,
                size: f.CgR.DYNAMIC,
                children: (0, r.jsxs)(f.hzk, {
                    className: eN.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: h,
                            product: a,
                            category: l,
                            onClose: T,
                            previewingVariantIndexProps: b,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: p,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: O.type === d.Z.AVATAR_DECORATION ? eN.collectiblePreviewsContainerWithChat : eN.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(J.Z, {
                                    asset: k,
                                    size: (0, el.ML)(540),
                                    className: eN.categoryBanner,
                                    categoryBannerOverride: y
                                }),
                                (0, ec.o0)(a.skuId)
                                    ? a.skuId === ec.xJ
                                        ? (0, r.jsx)(eo.M, { user: h })
                                        : (0, r.jsx)(es.b, {
                                              product: a,
                                              className: eN.externalProductProfilePreview
                                          })
                                    : (0, r.jsx)(eR, {
                                          user: h,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eN.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eN.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eN.titleImage,
                                                style: null == y ? void 0 : y.pdpLogoStyle,
                                                src: S,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eN.headerButtonContainer,
                                            children: [
                                                _ &&
                                                    (0, r.jsx)($.B, {
                                                        skuId: O.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(f.olH, {
                                                    onClick: () => T(),
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
