(n.d(t, {
    default: () => el,
    e: () => er
}),
    n(388685),
    n(314940));
var r = n(255367),
    i = n(73800),
    a = n(505266),
    o = n(512722),
    s = n.n(o),
    l = n(278074),
    c = n(979554),
    u = n(314794),
    d = n(399606),
    f = n(481060),
    _ = n(37234),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(1585),
    E = n(333867),
    b = n(717401),
    y = n(286961),
    O = n(300284),
    v = n(642619),
    I = n(110560),
    T = n(824393),
    S = n(350327),
    A = n(507808),
    N = n(594174),
    C = n(626135),
    R = n(585483),
    P = n(597688),
    w = n(1870),
    D = n(429368),
    L = n(884697),
    x = n(587792),
    M = n(228624),
    k = n(635552),
    j = n(905357),
    U = n(328456),
    G = n(624377),
    B = n(530618),
    V = n(141011),
    F = n(669636),
    Z = n(372654),
    H = n(197831),
    Y = n(755419),
    W = n(58201),
    K = n(794324),
    z = n(302800),
    q = n(215023),
    X = n(981631),
    Q = n(474936),
    J = n(427487),
    $ = n(388032),
    ee = n(854402);
let et = 880,
    en = (e) => (null != e ? $.intl.format($.t['4kp0AA'], { itemName: e }) : null),
    er = (e) => {
        let { product: t, onClose: n, confettiTarget: a, confettiCanvas: o, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: _, overrideDescription: g, selectedVariantIndex: E, shouldShowPromotionalExperience: O, itemConsumed: v = !0, purchaseType: I = q.o8.FIAT } = e,
            S = (0, x.o)('CollectiblesCollectedModal'),
            A = (0, W.W)(t, E),
            C = (0, d.e7)([N.default], () => {
                var e, t;
                return null != (t = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            R = i.useMemo(() => {
                if (!S) return;
                let e = A.type === c.Z.AVATAR_DECORATION ? (0, z.R9)(A.skuId, C) : null;
                return null != e ? P.Z.getProduct(e) : void 0;
            }, [S, A.skuId, A.type, C]),
            { confettiColors: w } = (0, G.Z)(A.styles),
            D = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            L = i.useRef(null),
            { analyticsLocations: M } = (0, m.ZP)([...l, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: k } = (0, K.Ac)(A),
            j = (0, y.Z)();
        function U() {
            var e;
            if (A.skuId === u.a.PREMIUM_TIER_2_3_DAY) {
                let e = $.intl.formatToPlainString($.t['Cz1G9/'], { days: 3 });
                return v
                    ? (0, r.jsx)(T.j, {
                          duration: e,
                          onClose: n
                      })
                    : (0, r.jsx)(T.h, {
                          duration: e,
                          onClose: n
                      });
            }
            let t = (0, b.Tl)(null == j || null == (e = j.planSelection) ? void 0 : e.gradientConfig);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: ee.bannerContainer,
                        children: [
                            O
                                ? (0, r.jsx)('div', {
                                      className: ee.promotionalBanner,
                                      style: t
                                  })
                                : (0, r.jsx)(V.Z, {
                                      asset: k,
                                      size: (0, Z.ML)(et),
                                      className: ee.decorationBanner,
                                      categoryBannerOverride: (0, q.ZS)(A.categorySkuId)
                                  }),
                            (0, r.jsx)(F.default, {
                                product: A,
                                pairedProduct: R,
                                reducedMotion: D
                            })
                        ]
                    }),
                    (0, r.jsx)(ea, {
                        product: A,
                        pairedProduct: R,
                        onClose: n,
                        analyticsLocations: M,
                        overrideTitle: _,
                        overrideDescription: g,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: O,
                        purchaseType: I
                    }),
                    (0, r.jsx)(f.olH, {
                        onClick: n,
                        className: ee.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(m.Gt, {
            value: M,
            children: [
                (0, r.jsx)('div', {
                    className: ee.modalInner,
                    ref: L,
                    children: U()
                }),
                !s &&
                    !D &&
                    (0, r.jsx)(B.Z, {
                        confettiTarget: null != a ? a : L.current,
                        confettiCanvas: o,
                        sprites: (0, Z.vK)(A.categorySkuId),
                        colors: null == w ? void 0 : w.map((e) => e.toHexString())
                    })
            ]
        });
    },
    ei = 600,
    ea = (e) => {
        var t;
        let { product: n, pairedProduct: a, onClose: o, analyticsLocations: s, overrideTitle: u, overrideDescription: d, shouldShowPromotionalExperience: _ } = e,
            p = (0, M.ed)('CollectiblesCollectedModal'),
            h = (0, j.k)(n),
            m = (0, j.k)(a),
            g = null != a,
            E = (0, y.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: O, isApplying: v } = (0, k.W)({
                product: n,
                onSuccess: o,
                onError: o
            }),
            { firstAvatarDecoration: T, firstProfileEffect: N } = (0, U.Rj)(n),
            C = (0, L.x6)(n) ? null != T && null != N : null != T || null != N || n.type === c.Z.NAMEPLATE;
        i.useEffect(() => {
            q.Vt.ORB_PROFILE_BADGE === n.skuId && (0, S.Ls)([(0, Y.X)()], ei);
        }, [n.skuId]);
        let P = i.useMemo(
                () =>
                    null != u
                        ? u
                        : q.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? $.intl.string(J.default.nvaTQk)
                          : g
                            ? $.intl.format(new Date() < q.a$ ? $.t.BhGU09 : $.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !_
                              ? $.intl.string($.t.IMffmp)
                              : $.intl.format($.t.YNaxMj, { itemName: h }),
                [u, n.skuId, g, p, _, h, m]
            ),
            w = i.useMemo(
                () =>
                    null != d
                        ? d
                        : q.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? $.intl.string(J.default.UnPGio)
                          : g
                            ? $.intl.format(new Date() < q.a$ ? $.t['1jBC0t'] : $.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, l.EQ)(null == n ? void 0 : n.type)
                                  .with(c.Z.BUNDLE, () => {
                                      let { itemOneName: e, itemTwoName: t } = (0, U.Ws)(n);
                                      return $.intl.format($.t.fXw44e, {
                                          itemOneName: e,
                                          itemTwoName: t
                                      });
                                  })
                                  .with(c.Z.AVATAR_DECORATION, () => (_ && null != b ? b : en(h)))
                                  .otherwise(() => en(h)),
                [d, n, g, h, m, _, b]
            ),
            D = i.useMemo(
                () =>
                    q.Vt.ORB_PROFILE_BADGE === n.skuId
                        ? (0, r.jsxs)(f.hE2, {
                              fullWidth: !0,
                              children: [
                                  (0, r.jsx)(f.zxk, {
                                      variant: 'primary',
                                      text: $.intl.string(J.default.yfwZu7),
                                      onClick: () => {
                                          (o(), R.S.dispatch(X.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                                      }
                                  }),
                                  (0, r.jsx)(f.zxk, {
                                      variant: 'secondary',
                                      text: $.intl.string($.t['H57f4+']),
                                      onClick: () => {
                                          (o(),
                                              (0, A.Y)({
                                                  pageType: X.ZY5.SHOP_ORBS_TAB,
                                                  sectionType: X.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                                  ctaObject: X.qAy.CTA_TO_QUEST_HOME
                                              }),
                                              (0, I.navigateToQuestHome)());
                                      }
                                  })
                              ]
                          })
                        : null,
                [o, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: ee.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: ee.collectedTextContainer,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-lg/bold',
                            children: P
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            children: w
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: ee.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(eo, {
                                  onClose: o,
                                  product: a,
                                  analyticsLocations: s
                              })
                            : null != D
                              ? D
                              : (0, r.jsx)(es, {
                                    product: n,
                                    onClose: o,
                                    isPrimary: C,
                                    analyticsLocations: s
                                }),
                        C
                            ? (0, r.jsx)(f.zxk, {
                                  variant: 'primary',
                                  text: $.intl.string($.t.MAS7uL),
                                  onClick: O,
                                  loading: v
                              })
                            : null
                    ]
                })
            ]
        });
    },
    eo = (e) => {
        let { onClose: t, product: n, analyticsLocations: a } = e,
            o = (0, M.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, E.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: Q.Wt.SHOP_PAGE,
                            analyticsLocations: a,
                            variantsReturnStyle: o,
                            onClose: (e) => {
                                e && t();
                            }
                        }));
                },
                [n.skuId, a, o, t]
            );
        return (0, r.jsx)(f.zxk, {
            variant: 'secondary',
            onClick: s,
            text: $.intl.string($.t.ouo4FB),
            icon: f.OgN
        });
    },
    es = (e) => {
        let { product: t, onClose: n, isPrimary: a, analyticsLocations: o, text: l } = e,
            u = (0, O.Z)({ analyticsLocations: o }),
            [d] = t.items,
            p = i.useCallback(() => {
                if ((n(), (0, _.xf)(), u(), t.type === c.Z.AVATAR_DECORATION)) {
                    (s()(d.type === c.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, g.ps)({
                            initialSelectedDecoration: d,
                            analyticsLocations: o
                        }));
                    return;
                }
                t.type === c.Z.PROFILE_EFFECT &&
                    (0, v.H)({
                        initialSelectedEffectId: d.id,
                        analyticsLocations: o
                    });
            }, [n, u, t.type, d, o]);
        return (0, r.jsx)(f.zxk, {
            variant: a ? 'secondary' : 'primary',
            fullWidth: !0,
            text: null != l ? l : $.intl.string($.t['2p2aY2']),
            onClick: p
        });
    },
    el = (e) => {
        let { transitionState: t, product: n, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: _, purchaseType: p = q.o8.FIAT } = e,
            g = (0, d.e7)([w.Z], () => w.Z.purchases),
            E = (0, D.o)(n, g),
            b = (0, W.W)(n, E),
            y = i.useRef(new a.qA()),
            [O, v] = i.useState(null),
            I = (0, z.UY)({
                purchaseType: p,
                skuId: b.skuId
            }),
            { analyticsLocations: T } = (0, m.ZP)([...s, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            S = i.useMemo(() => (0, L.jm)(b.type, b.skuId), [b.type, b.skuId]);
        return (
            i.useEffect(() => {
                C.default.track(X.rMx.OPEN_MODAL, {
                    type: X.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: T,
                    sku_id: b.skuId,
                    product_type: S
                });
            }, [T, b.skuId, b.items, S]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.O_, {
                        ref: v,
                        className: ee.confettiCanvas,
                        environment: y.current
                    }),
                    (0, r.jsx)(H.i, { options: I }),
                    (0, r.jsx)(f.Y0X, {
                        hideShadow: !0,
                        transitionState: t,
                        size: f.CgR.DYNAMIC,
                        className: ee.modalRoot,
                        parentComponent: 'CollectiblesCollectedModal',
                        children: (0, r.jsx)(f.hzk, {
                            className: ee.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(er, {
                                product: b,
                                onClose: o,
                                confettiCanvas: O,
                                hideConfetti: null != I,
                                analyticsLocations: T,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: E,
                                shouldShowPromotionalExperience: u,
                                itemConsumed: _,
                                purchaseType: p
                            })
                        })
                    })
                ]
            })
        );
    };
