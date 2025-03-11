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
    h = n(809206),
    v = n(727637),
    b = n(410030),
    x = n(100527),
    P = n(906732),
    g = n(570908),
    C = n(786761),
    j = n(3148),
    w = n(739566),
    O = n(753206),
    I = n(333867),
    _ = n(197115),
    N = n(921813),
    k = n(876917),
    S = n(643879),
    y = n(484459),
    E = n(43747),
    T = n(822857),
    L = n(82856),
    Z = n(960919),
    A = n(25990),
    R = n(594174),
    B = n(626135),
    W = n(74538),
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
    X = n(724994),
    Y = n(328456),
    Q = n(390698),
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
    eh = n(332246),
    ev = n(58201),
    eb = n(794324),
    ex = n(361110),
    eP = n(956472),
    eg = n(832149),
    eC = n(215023),
    ej = n(981631),
    ew = n(474936),
    eO = n(231338),
    eI = n(388032),
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
    ey = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, v.Z)(l);
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
                    children: (0, r.jsx)(ef.Z, {
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
            ? (0, r.jsx)(eE, {
                  product: t,
                  user: n
              })
            : (0, ec.o0)(t.skuId)
              ? (0, r.jsx)(es.b, { product: t })
              : t.items.length > 0
                ? (0, r.jsx)(ey, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eL = (e) => {
        var t, n;
        let { product: a, user: o, category: c, shouldCheckoutWithOrbs: v, onClose: x, returnRef: g, previewingVariantIndexProps: C, selectedVariantIndex: j, tab: w } = e,
            { analyticsLocations: O } = (0, P.ZP)(),
            N = W.ZP.canUseCollectibles(o),
            { previewingVariantIndex: k } = C,
            S = (0, eh.N)(a, k),
            y = (0, ev.W)(a, j);
        s()(null != y, 'Selected product should not be null');
        let A = (0, X.L)(a),
            { isPurchased: R, isPartiallyOwnedBundle: B } = (0, X.L)(y),
            H = (0, m.e7)([M.Z], () => M.Z.purchases),
            U = (0, m.e7)([M.Z], () => M.Z.isClaiming === (null == y ? void 0 : y.skuId)),
            J = (0, b.ZP)(),
            $ = (0, p.wj)(J),
            ee = (0, z.G1)(y),
            el = (0, z.ql)(y, ej.tuJ.DEFAULT),
            eo = (null == el ? void 0 : el.amount) === 0,
            { firstAvatarDecoration: es } = (0, Y.R)(null != S ? S : y),
            ec = i.useMemo(() => (0, z.BH)(y, N), [y, N]),
            { handleUseNow: ep, isApplying: ef } = (0, K.W)({
                product: y,
                onSuccess: x
            }),
            eb = (0, V.hv)('CollectiblesProductPreviewInfo'),
            ex = (0, q.T)(y),
            { enabled: eC } = (0, T.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                displayPrices: eN,
                checkoutEligiblePrices: ek,
                isOrbExclusive: eS
            } = (0, eP.Ip)({
                product: y,
                isPremiumUser: N,
                tab: w
            }),
            ey = eC && v,
            { redeemVirtualCurrency: eE, isSubmitting: eL, error: eZ } = (0, E.f)(),
            { balance: eA } = (0, E.A)(),
            eR = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: y.skuId,
                        analyticsLocations: O,
                        variantsReturnStyle: eb,
                        onClose: (e) => (e ? x() : (0, eO.dG)())
                    }),
                [O, x, y.skuId, eb]
            );
        i.useEffect(() => {
            if (null != es) return (0, h.cV)(es), () => (0, h.cV)(void 0);
        }, [es]);
        let eB = (e) =>
                (0, r.jsx)(_.Z, {
                    subscriptionTier: ew.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: ea.v,
                    onSubscribeModalClose: () => {
                        (0, ea.T)({
                            product: y,
                            category: c,
                            shouldCheckoutWithOrbs: v,
                            returnRef: g,
                            analyticsLocations: O
                        });
                    }
                }),
            { firstAvatarDecoration: eW, firstProfileEffect: eD } = (0, G.k)(y),
            eF =
                y.type === d.Z.BUNDLE
                    ? eI.NW.formatToPlainString(eI.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eW ? void 0 : eW.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eD ? void 0 : eD.name) && void 0 !== n ? n : ''
                      })
                    : y.summary;
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
                (0, r.jsx)(eT, {
                    product: null != S ? S : y,
                    user: o
                }),
                (0, r.jsxs)('div', {
                    children: [
                        null == eZ
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
                                          children: eZ.message
                                      })
                                  ]
                              }),
                        (0, r.jsxs)('div', {
                            className: e_.description,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    product: y,
                                    isDarkText: !$
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: e_.headingWithItemTypePill,
                                    children: ex
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eF
                                }),
                                A.isPurchased || A.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: e_.priceTag,
                                          isPartiallyPurchased: B
                                      })
                                    : ee
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: e_.priceTag,
                                            children: eI.NW.string(eI.t.rt69oq)
                                        })
                                      : eC
                                        ? ey
                                            ? (0, r.jsx)(eu.Z, { orbPrice: ek[0] })
                                            : (0, r.jsx)(ed.Z, {
                                                  displayPrices: eN,
                                                  isPremiumUser: N,
                                                  showInsufficientOrbBalanceTooltip: !0
                                              })
                                        : (0, r.jsx)(ei.Z, {
                                              product: y,
                                              discount: ec,
                                              isPremiumUser: N,
                                              className: N ? e_.priceTag : e_.priceTagContainer,
                                              nitroUpsell: !N
                                          })
                            ]
                        }),
                        (0, r.jsx)(em.P, {
                            variantGroupProduct: a,
                            previewingVariantIndexProps: C,
                            className: e_.variantsSwitch,
                            purchases: H
                        }),
                        (0, r.jsx)('div', {
                            className: e_.buttonsContainer,
                            children: (0, r.jsxs)('div', {
                                className: e_.primaryButtons,
                                children: [
                                    (() => {
                                        if (ee && !N && !eo) return eB(eI.NW.string(eI.t.sEAnVF));
                                        if (R)
                                            return (0, r.jsx)(f.zxk, {
                                                className: e_.button,
                                                look: f.zxk.Looks.FILLED,
                                                onClick: ep,
                                                submitting: ef,
                                                children: eI.NW.string(eI.t.MAS7uL)
                                            });
                                        if (B) return null;
                                        if (ee)
                                            return (0, r.jsx)(f.zxk, {
                                                className: e_.button,
                                                look: f.zxk.Looks.FILLED,
                                                submitting: U,
                                                submittingStartedLabel: eI.NW.string(eI.t['TYw+9v']),
                                                submittingFinishedLabel: eI.NW.string(eI.t.Pg1UPz),
                                                onClick: async () => {
                                                    await (0, F.fK)(y.skuId),
                                                        x(),
                                                        (0, eg.Z)({
                                                            product: y,
                                                            analyticsLocations: O
                                                        });
                                                },
                                                children: eI.NW.string(eI.t.zp6caG)
                                            });
                                        let e = ey && (null == eA || 0 === ek.length || eA < ek[0].amount);
                                        return (0, r.jsx)(f.zxk, {
                                            className: l()(e_.button, { [e_.enabledButton]: !e }),
                                            innerClassName: e_.buttonInner,
                                            look: f.zxk.Looks.FILLED,
                                            submitting: eL,
                                            disabled: e,
                                            onClick: () => {
                                                ey
                                                    ? eE(y.skuId, (e) => {
                                                          var t;
                                                          x(!0),
                                                              (0, F.qg)({
                                                                  variantsReturnStyle: eb,
                                                                  location: 'collectible_checkout_with_orb'
                                                              }),
                                                              (0, eg.Z)({
                                                                  product: y,
                                                                  analyticsLocations: O,
                                                                  onCloseCallback: () => {
                                                                      (0, L.vp)();
                                                                  },
                                                                  itemConsumed: null === (t = e[0]) || void 0 === t ? void 0 : t.consumed
                                                              });
                                                      })
                                                    : eR();
                                            },
                                            children: ey
                                                ? eI.NW.format(eI.t.kAgx5O, {
                                                      orbPrice: ek.length > 0 ? ek[0].amount : 1 / 0,
                                                      orbIconHook: () => (0, r.jsx)(Z.Z, {})
                                                  })
                                                : (0, z.x6)(y)
                                                  ? eI.NW.string(eI.t.V1AWw8)
                                                  : y.type === d.Z.PROFILE_EFFECT
                                                    ? eI.NW.string(eI.t.kAeDcH)
                                                    : eI.NW.string(eI.t.AQ0Ven)
                                        });
                                    })(),
                                    !ee &&
                                        !eo &&
                                        !u.tq &&
                                        !eS &&
                                        (0, r.jsx)(er.Z, {
                                            product: y,
                                            onSuccess: x,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        !ey || ek.length <= 1
                            ? null
                            : (0, r.jsx)(f.P3F, {
                                  onClick: eR,
                                  className: e_.payWithFiatLink,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: 'text-xxs/normal',
                                      className: e_.payWithFiatLinkText,
                                      children: eI.NW.format(eI.t.hDiZtL, { price: (0, D.T4)(ek[1].amount, ek[1].currency) })
                                  })
                              }),
                        (0, r.jsx)(f.Text, {
                            className: l()(e_.disclaimer, !$ && e_.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: R ? null : ee ? eI.NW.string(eI.t.O2K0xM) : (0, z.x6)(y) ? eI.NW.string(eI.t.Ifvd7O) : y.type === d.Z.PROFILE_EFFECT ? eI.NW.string(eI.t.pxunjo) : eI.NW.string(eI.t.IA8coq)
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
            l = (0, v.Z)(a);
        return (0, r.jsxs)('div', {
            className: e_.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eZ, { user: eS.mallow }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eZ, { user: eS.phibi }),
                (0, r.jsx)('div', {
                    ref: a,
                    className: e_.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ef.Z, {
                        className: e_.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: l
                    })
                }),
                (0, r.jsx)(eZ, { user: eS.locke }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: e_.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eZ, { user: eS.boom }),
                (0, r.jsx)(eZ, { user: eS.cherry })
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
            s = (0, S.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: f } = (0, Y.R)(t),
            h = null != f;
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
                                      pendingAvatarDecoration: p,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !h,
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
        return (0, C.e5)(
            ek(
                eN(
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
    eW = (e) => {
        let { user: t } = e,
            n = eB({ author: t });
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsxs)(f.Zbd, {
                className: e_.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        O.Z,
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
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: h } = e,
            v = (0, m.e7)([R.default], () => R.default.getCurrentUser()),
            b = (0, ex.f)(a),
            { previewingVariantIndex: g } = b,
            C = (0, m.e7)([M.Z], () => M.Z.purchases),
            j = (0, H.o)(a, C),
            w = (0, eh.N)(a, g),
            O = (0, ev.W)(a, j);
        s()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, P.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ee.u9)(O.skuId);
        let [_] = O.items,
            N = (0, U.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: k, logo: S } = (0, eb.OR)(l, a);
        if (
            (i.useEffect(() => {
                null != v && (0, y.Z)(v.id, v.getAvatarURL(void 0, 80));
            }, [v]),
            i.useEffect(() => {
                let e = (null == _ ? void 0 : _.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                B.default.track(ej.rMx.OPEN_MODAL, {
                    type: ej.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: c,
                    location_stack: I,
                    sku_id: O.skuId,
                    product_type: e
                }),
                    O.items.map(F.oK);
            }, [c, I, null == _ ? void 0 : _.type, O.skuId, O.items]),
            null == v)
        )
            return null;
        let E = (0, eC.ZS)(l.skuId),
            T = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n(), e || (0, L.vp)();
            };
        return (0, r.jsx)(P.Gt, {
            value: I,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: e_.modalRoot,
                returnRef: o,
                transitionState: t,
                size: f.CgR.DYNAMIC,
                children: (0, r.jsxs)(f.hzk, {
                    className: e_.modalContent,
                    children: [
                        (0, r.jsx)(eL, {
                            user: v,
                            product: a,
                            category: l,
                            onClose: T,
                            previewingVariantIndexProps: b,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: p,
                            tab: h
                        }),
                        (0, r.jsxs)('div', {
                            className: O.type === d.Z.AVATAR_DECORATION ? e_.collectiblePreviewsContainerWithChat : e_.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(J.Z, {
                                    asset: k,
                                    size: (0, el.ML)(540),
                                    className: e_.categoryBanner,
                                    categoryBannerOverride: E
                                }),
                                (0, ec.o0)(a.skuId)
                                    ? a.skuId === ec.xJ
                                        ? (0, r.jsx)(eo.M, { user: v })
                                        : (0, r.jsx)(es.b, {
                                              product: a,
                                              className: e_.externalProductProfilePreview
                                          })
                                    : (0, r.jsx)(eR, {
                                          user: v,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: e_.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: e_.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: e_.titleImage,
                                                style: null == E ? void 0 : E.pdpLogoStyle,
                                                src: S,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: e_.headerButtonContainer,
                                            children: [
                                                N &&
                                                    (0, r.jsx)($.B, {
                                                        skuId: O.skuId,
                                                        tab: h
                                                    }),
                                                (0, r.jsx)(f.olH, {
                                                    onClick: () => T(),
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
