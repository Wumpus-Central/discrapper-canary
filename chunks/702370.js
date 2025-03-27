n.d(t, { default: () => ez }), n(47120), n(627341), n(266796);
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
    O = n(333867),
    I = n(197115),
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
    Y = n(290175),
    X = n(905357),
    J = n(724994),
    Q = n(328456),
    $ = n(390698),
    ee = n(141011),
    et = n(525518),
    en = n(426171),
    er = n(224068),
    ei = n(813083),
    ea = n(680942),
    el = n(558060),
    eo = n(237031),
    es = n(372654),
    ec = n(38914),
    eu = n(259673),
    ed = n(508925),
    em = n(755419),
    ep = n(953405),
    ef = n(453713),
    ev = n(616066),
    eh = n(22267),
    eb = n(332246),
    ex = n(58201),
    eP = n(794324),
    eg = n(361110),
    eC = n(956472),
    ej = n(832149),
    ew = n(215023),
    e_ = n(981631),
    eN = n(474936),
    eO = n(231338),
    eI = n(388032),
    ek = n(885611);
function eS(e) {
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
function eE(e, t) {
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
    eT = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, b.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                    children: (0, r.jsx)(ev.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
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
                    className: ek.nameplatePreviewContainer,
                    children: (0, r.jsx)(eh.Z, {
                        className: ek.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: o
                    })
                })
            )
            .otherwise(() => null);
    },
    eL = (e) => {
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
            className: ek.bundlePreviewContainer,
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
                                className: ek.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eT, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: ek.bundleSlideTitle,
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
    eZ = (e) => {
        let { product: t, user: n } = e;
        return (0, F.x6)(t)
            ? (0, r.jsx)(eL, {
                  product: t,
                  user: n
              })
            : (0, em.o0)(t.skuId)
              ? (0, r.jsx)(ed.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(eT, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eA = (e) => {
        var t, n;
        let a;
        let { product: o, user: c, category: m, shouldCheckoutWithOrbs: b, onClose: P, returnRef: C, previewingVariantIndexProps: j, selectedVariantIndex: w, tab: _ } = e,
            { analyticsLocations: N } = (0, g.ZP)(),
            k = D.ZP.canUseCollectibles(c),
            { previewingVariantIndex: S } = j,
            E = (0, eb.N)(o, S),
            y = (0, ex.W)(o, w);
        s()(null != y, 'Selected product should not be null');
        let R = (0, J.L)(o),
            { isPurchased: B, isPartiallyOwnedBundle: W } = (0, J.L)(y),
            { isDisabled: U, disabledReason: V } = (0, Y.G)(y.skuId),
            ee = (0, F.ne)({
                product: y,
                isPartiallyOwnedBundle: W,
                isPurchased: B
            }),
            et = (0, p.e7)([H.Z], () => H.Z.purchases),
            en = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == y ? void 0 : y.skuId)),
            es = (0, x.ZP)(),
            ec = (0, f.wj)(es),
            eu = (0, F.G1)(y),
            ed = (0, F.ql)(y, e_.tuJ.DEFAULT),
            em = (null == ed ? void 0 : ed.amount) === 0,
            { firstAvatarDecoration: ev } = (0, Q.R)(null != E ? E : y),
            eh = i.useMemo(() => (0, F.BH)(y, k), [y, k]),
            { handleUseNow: eP, isApplying: eg } = (0, q.W)({
                product: y,
                onSuccess: P
            }),
            ew = (0, G.hv)('CollectiblesProductPreviewInfo'),
            ey = (0, X.T)(y),
            { enabled: eT } = (0, T.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: eL,
                isOrbExclusive: eA,
                hasSufficientOrbs: eR
            } = (0, eC.Ip)({
                product: y,
                isPremiumUser: k,
                tab: _
            }),
            eB = i.useCallback(
                () =>
                    (0, O.Z)({
                        skuId: y.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: ew,
                        onClose: (e) => (e ? P() : (0, eO.dG)())
                    }),
                [N, P, y.skuId, ew]
            );
        i.useEffect(() => {
            if (null != ev) return (0, h.cV)(ev), () => (0, h.cV)(void 0);
        }, [ev]);
        let eW = (e, t) => {
                let n = () => {
                        (0, A.q)({
                            skuId: y.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                (0, z.qg)({
                                    variantsReturnStyle: ew,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    P({ keepBalancePillOverlayOpen: !0 }),
                                    (0, ej.Z)({
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
                    },
                    i = eR ? eI.NW.string(eI.t.cTdr39) : eI.NW.string(eI.t.zqh7ZG),
                    a = !eR || U;
                return (0, r.jsx)(v.ua7, {
                    position: 'top',
                    text: i,
                    shouldShow: a,
                    children: (i) =>
                        (0, r.jsx)(
                            v.zxk,
                            eE(eS({}, i), {
                                innerClassName: ek.button,
                                look: v.zxk.Looks.FILLED,
                                onClick: n,
                                disabled: a,
                                color: t ? v.zxk.Colors.BRAND : v.zxk.Colors.PRIMARY,
                                children: eI.NW.format(eI.t.kAgx5O, {
                                    orbPrice: e.amount,
                                    orbIconHook: () => (0, r.jsx)(Z.Z, {})
                                })
                            })
                        )
                });
            },
            eD = (e, t) => {
                let n = !eu && !em && !u.tq && !eA && ee && y.type !== d.Z.NAMEPLATE,
                    i = t ? v.zxk.Colors.BRAND : v.zxk.Colors.PRIMARY,
                    a = (0, F.x6)(y) ? eI.NW.string(eI.t.V1AWw8) : y.type === d.Z.PROFILE_EFFECT ? eI.NW.string(eI.t.kAeDcH) : y.type === d.Z.NAMEPLATE ? eI.NW.string(eI.t.H3vhqa) : eI.NW.string(eI.t.AQ0Ven),
                    l = eT ? eI.NW.formatToPlainString(eI.t['cNSL/v'], { price: (0, M.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: ek.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(v.zxk, {
                            className: ek.primaryButton,
                            innerClassName: ek.button,
                            look: v.zxk.Looks.FILLED,
                            onClick: eB,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(ea.Z, {
                                product: y,
                                onSuccess: P,
                                color: i
                            })
                    ]
                });
            },
            { firstAvatarDecoration: eM, firstProfileEffect: ez } = (0, K.k)(y),
            eH =
                y.type === d.Z.BUNDLE
                    ? eI.NW.formatToPlainString(eI.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eM ? void 0 : eM.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == ez ? void 0 : ez.name) && void 0 !== n ? n : ''
                      })
                    : y.summary;
        return (0, r.jsxs)('div', {
            className: ek.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: ek.titleContainer,
                    children: (0, r.jsx)(ei.Z, {
                        category: m,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(eZ, {
                    product: null != E ? E : y,
                    user: c
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: ek.description,
                            children: [
                                (0, r.jsx)(er.Z, {
                                    product: y,
                                    isDarkText: !ec,
                                    isOrbExclusive: eA
                                }),
                                (0, r.jsx)(v.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: ek.headingWithItemTypePill,
                                    children: ey
                                }),
                                (0, r.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: eH
                                }),
                                R.isPurchased || R.isPartiallyOwnedBundle
                                    ? (0, r.jsx)($.U, {
                                          className: ek.priceTag,
                                          isPartiallyPurchased: W
                                      })
                                    : eu
                                      ? (0, r.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: ek.priceTag,
                                            children: eI.NW.string(eI.t.rt69oq)
                                        })
                                      : eT
                                        ? (0, r.jsx)(ep.a, {
                                              prices: eL,
                                              product: y,
                                              isPremiumUser: k,
                                              discount: eh,
                                              hasSufficientOrbs: eR,
                                              isProductDisabled: U
                                          })
                                        : (0, r.jsx)(el.Z, {
                                              product: y,
                                              discount: eh,
                                              isPremiumUser: k,
                                              className: k ? ek.priceTag : ek.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, r.jsx)(ef.P, {
                            variantGroupProduct: o,
                            previewingVariantIndexProps: j,
                            className: ek.variantsSwitch,
                            purchases: et
                        }),
                        null !== V &&
                            (0, r.jsx)(v.Text, {
                                variant: 'text-xs/normal',
                                className: ek.disabledReason,
                                children: V
                            }),
                        (0, r.jsx)('div', {
                            className: ek.buttonsContainer,
                            children:
                                !eu || k || em
                                    ? ee
                                        ? B
                                            ? (0, r.jsx)(v.zxk, {
                                                  className: ek.button,
                                                  look: v.zxk.Looks.FILLED,
                                                  onClick: eP,
                                                  submitting: eg,
                                                  children: eI.NW.string(eI.t.MAS7uL)
                                              })
                                            : eu
                                              ? (0, r.jsx)(v.zxk, {
                                                    className: ek.button,
                                                    look: v.zxk.Looks.FILLED,
                                                    submitting: en,
                                                    submittingStartedLabel: eI.NW.string(eI.t['TYw+9v']),
                                                    submittingFinishedLabel: eI.NW.string(eI.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, z.fK)(y.skuId),
                                                            P(),
                                                            (0, ej.Z)({
                                                                product: y,
                                                                analyticsLocations: N
                                                            });
                                                    },
                                                    children: eI.NW.string(eI.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eL.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === eO.pK.DISCORD_ORB ? eW(e, n) : eD(e, n);
                                                    })
                                                })
                                        : null
                                    : ((a = eI.NW.string(eI.t.sEAnVF)),
                                      (0, r.jsx)(I.Z, {
                                          subscriptionTier: eN.Si.TIER_2,
                                          fullWidth: !0,
                                          buttonText: a,
                                          onClick: eo.v,
                                          onSubscribeModalClose: () => {
                                              (0, eo.T)({
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
                            className: l()(ek.disclaimer, !ec && ek.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: eu && !B ? eI.NW.string(eI.t.O2K0xM) : null
                        })
                    ]
                })
            ]
        });
    },
    eR = (e) => {
        let { user: t } = e;
        return (0, r.jsx)('div', {
            className: ek.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(C.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: v.Skl.ONLINE
                }),
                name: t.name,
                selected: !1,
                innerClassName: ek.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eB = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: ek.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eR, { user: ey.mallow }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: ek.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eR, { user: ey.phibi }),
                (0, r.jsx)('div', {
                    className: ek.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(eh.Z, {
                        className: ek.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eR, { user: ey.locke }),
                (0, r.jsxs)(v.Text, {
                    variant: 'text-sm/semibold',
                    className: ek.namplateRightPanePreviewSectionGroup,
                    children: [eI.NW.string(eI.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eR, { user: ey.boom }),
                (0, r.jsx)(eR, { user: ey.cherry })
            ]
        });
    },
    eW = (e) => {
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
            { firstAvatarDecoration: m, firstProfileEffect: f } = (0, Q.R)(t),
            v = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eB, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  k.Z,
                                  eE(eS({}, o), {
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
                              c && (0, r.jsx)(eM, { user: n })
                          ]
                      })
        });
    },
    eD = (e) => {
        let { author: t } = e;
        return (0, j.e5)(
            eE(
                eS(
                    {},
                    (0, w.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eI.NW.string(eI.t.d5YwKy)
                    })
                ),
                {
                    state: e_.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eM = (e) => {
        let { user: t } = e,
            n = eD({ author: t });
        return (0, r.jsx)(v.Rny, {
            children: (0, r.jsxs)(v.Zbd, {
                className: ek.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        N.Z,
                        {
                            className: ek.mockMessage,
                            author: (0, _.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: ek.mockInput,
                        children: [
                            (0, r.jsx)(v.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: ek.mockInputButton
                            }),
                            (0, r.jsx)(v.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: ek.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    ez = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: f, tab: h } = e,
            b = (0, p.e7)([B.default], () => B.default.getCurrentUser()),
            x = (0, eg.f)(a),
            { previewingVariantIndex: C } = x,
            j = (0, p.e7)([H.Z], () => H.Z.purchases),
            w = (0, U.o)(a, j),
            _ = (0, eb.N)(a, C),
            N = (0, ex.W)(a, w);
        s()(null != N, 'Selected product should not be null');
        let { analyticsLocations: O } = (0, g.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.u9)(N.skuId);
        let [I] = N.items,
            k = (0, V.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: S, logo: E } = (0, eP.OR)(l, a);
        i.useEffect(() => {
            null != b && (0, y.Z)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]),
            i.useEffect(() => {
                let e = (null == I ? void 0 : I.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                W.default.track(e_.rMx.OPEN_MODAL, {
                    type: e_.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: c,
                    location_stack: O,
                    sku_id: N.skuId,
                    product_type: e
                }),
                    N.items.map(z.oK);
            }, [c, O, null == I ? void 0 : I.type, N.skuId, N.items]);
        let T = (0, A.r)(),
            Z = t === v.Dvm.EXITING;
        if (null == b) return null;
        let R = (0, ew.ZS)(l.skuId),
            D = function () {
                let { keepBalancePillOverlayOpen: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(), e || (0, L.vp)();
            };
        return (0, r.jsx)(g.Gt, {
            value: O,
            children: (0, r.jsx)(v.Y0X, {
                hideShadow: !0,
                className: ek.modalRoot,
                returnRef: o,
                transitionState: t,
                size: v.CgR.DYNAMIC,
                children: (0, r.jsxs)(v.hzk, {
                    className: ek.modalContent,
                    children: [
                        (0, r.jsx)(eA, {
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
                            className: N.skuId === m.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : N.type === d.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(ee.Z, {
                                    asset: S,
                                    size: (0, es.ML)(540),
                                    className: ek.categoryBanner,
                                    categoryBannerOverride: R
                                }),
                                (0, em.o0)(a.skuId)
                                    ? a.skuId === ew.xJ
                                        ? T || Z
                                            ? null
                                            : (0, r.jsx)(eu.M, { user: b })
                                        : a.skuId === m.a.PREMIUM_TIER_2_3_DAY
                                          ? (0, r.jsx)(ec.q, {})
                                          : (0, r.jsx)(ed.b, {
                                                product: a,
                                                className: ek.externalProductProfilePreview
                                            })
                                    : (0, r.jsx)(eW, {
                                          user: b,
                                          product: null != _ ? _ : N
                                      }),
                                (0, r.jsxs)('div', {
                                    className: ek.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: ek.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: ek.titleImage,
                                                style: null == R ? void 0 : R.pdpLogoStyle,
                                                src: E,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: ek.headerButtonContainer,
                                            children: [
                                                k &&
                                                    (0, r.jsx)(et.B, {
                                                        skuId: N.skuId,
                                                        tab: h
                                                    }),
                                                (0, r.jsx)(v.olH, {
                                                    onClick: () => D(),
                                                    className: ek.modalCloseButton,
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
