n.d(t, { Dd: () => L });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(493773),
    s = n(100527),
    l = n(906732),
    c = n(335131),
    u = n(628952),
    d = n(225657),
    f = n(600164),
    _ = n(109213),
    p = n(927699),
    h = n(987716),
    m = n(311821),
    g = n(251660),
    E = n(594174),
    b = n(855775),
    y = n(626135),
    O = n(937615),
    v = n(987209),
    I = n(563132),
    T = n(409813),
    S = n(27034),
    A = n(981631),
    N = n(474936),
    C = n(388032),
    w = n(997433),
    R = n(651427);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
let L = {
    key: T.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(k, D({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => C.intl.string(C.t['W685+f'])
    }
};
function x(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, I.JL)(),
        c = l ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.zxk, {
                onClick: () => t(c),
                disabled: o,
                loading: s,
                text: C.intl.string(C.t.XiOHRU)
            }),
            i ? (0, r.jsx)(m.Z, { onClick: n }) : null
        ]
    });
}
function k(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: s = '', setCustomGiftMessage: l, giftRecipientError: m, setGiftRecipientError: T, validatingGiftRecipient: P, giftRecipient: D, recommendedGiftSkuIds: L, giftingOrigin: k, setValidatingGiftRecipient: M } = (0, v.wD)(),
        { selectedSkuId: U, setSelectedSkuId: G, selectedSkuPricePreview: B, paymentSourceId: Z, skuPricePreviewsById: F } = (0, I.JL)(),
        V = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
        { enabled: H, giftRecommendationAlgorithm: Y } = _.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        W = H && k === N.Wt.DM_CHANNEL,
        K = Y === _.u.POPULAR ? C.intl.string(C.t.Kwgrrq) : C.intl.string(C.t.r1huYW),
        z = async (e, t) => {
            (M(!0), null != m && T(), (await (0, c.B1)(e.id, t)) || T(C.intl.string(C.t['4kgVqa'])), M(!1));
        };
    (0, o.ZP)(() => {
        null != U && null != D && (y.default.track(A.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: U }), z(D, U));
    });
    let q = (e) => {
            (y.default.track(A.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != D && z(D, e), G(e));
        },
        $ = (e) => {
            let t = F[e],
                n = null;
            if (null != t) {
                var i;
                n = null != Z && null != (i = t[Z]) ? i : t[b.c];
            }
            if (null == n) return;
            let a = (0, O.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                u.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === U,
                    onSelect: (e) => q(e),
                    className: w.recommendedGiftPreview
                },
                e
            );
        },
        X = () =>
            (0, r.jsx)(p.Z, {
                sectionTitle: C.intl.string(C.t.B3miEx),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: w.customGiftMessageWrapper,
                innerClassName: w.customGiftMessage
            }),
        Q = () =>
            W
                ? (0, r.jsxs)('div', {
                      className: w.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: 'text-xs/bold',
                              color: 'header-secondary',
                              className: w.selectGiftTitle,
                              children: K.toLocaleUpperCase()
                          }),
                          L.map((e) => $(e)),
                          (0, r.jsx)(j, { handleClose: n })
                      ]
                  })
                : (0, r.jsx)('div', {
                      className: w.bodyColumnMiddle,
                      children: (0, r.jsx)(h.q, { isShopGift: !0 })
                  }),
        J = () => {
            if (W)
                return (0, r.jsxs)('div', {
                    className: w.bodyColumnRight,
                    children: [
                        (0, r.jsx)(g.s, { giftRecipient: D }),
                        (0, r.jsx)(h.q, {
                            isShopGift: !0,
                            className: R.adjustedGiftMainAnimation,
                            optionsContainerClassName: R.adjustedGiftBoxOptionContainer
                        }),
                        X()
                    ]
                });
            let e = null != B ? (0, O.T4)(B.amount, B.currency) : void 0;
            return (0, r.jsxs)('div', {
                className: w.bodyColumnRight,
                children: [
                    (0, r.jsx)(d.Z, {
                        selectedSkuId: U,
                        className: w.sendTo,
                        validateSelectedGift: z
                    }),
                    X(),
                    null != e &&
                        (0, r.jsx)(u.Z, {
                            skuId: U,
                            price: e,
                            className: w.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0
                        })
                ]
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(S.C3, {
                children: (0, r.jsxs)('div', {
                    className: w.stepBody,
                    children: [Q(), J()]
                })
            }),
            (0, r.jsx)(S.O3, {
                children: (0, r.jsx)(a.mzw, {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    children: (0, r.jsx)(x, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != m || null == D || D.id === (null == V ? void 0 : V.id) || s.length > N.$n,
                        loading: P
                    })
                })
            })
        ]
    });
}
function j(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function i() {
        (t(),
            (0, a.pTH)(),
            (0, c.mK)({
                openInLayer: !1,
                analyticsLocations: n,
                analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
            }));
    }
    return (0, r.jsx)(a.P3F, {
        onClick: i,
        children: (0, r.jsxs)('div', {
            className: w.navigateToShopButton,
            children: [
                (0, r.jsxs)('div', {
                    className: w.navigateToShopBody,
                    children: [
                        (0, r.jsx)('div', {
                            className: w.shopIcon,
                            children: (0, r.jsx)(a.EOn, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: w.navigateToShopTextWrapper,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: C.intl.string(C.t['1+Co8P'])
                                }),
                                (0, r.jsx)(a.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: C.intl.string(C.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(a.d4D, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'var(--header-primary)'
                    })
                })
            ]
        })
    });
}
