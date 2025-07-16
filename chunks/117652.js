n.d(t, { Dd: () => x });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(493773),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(628952),
    f = n(225657),
    _ = n(600164),
    p = n(109213),
    h = n(927699),
    m = n(987716),
    g = n(311821),
    E = n(251660),
    b = n(594174),
    y = n(855775),
    O = n(626135),
    v = n(937615),
    I = n(987209),
    T = n(563132),
    S = n(409813),
    A = n(27034),
    N = n(981631),
    C = n(474936),
    R = n(388032),
    P = n(997433),
    w = n(651427);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            }));
    }
    return e;
}
let x = {
    key: S.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(M, L({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => R.intl.string(R.t['W685+f'])
    }
};
function k(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, T.JL)(),
        c = l ? S.h8.REVIEW : S.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.zx, {
                onClick: () => t(c),
                disabled: o,
                submitting: s,
                children: R.intl.string(R.t.XiOHRU)
            }),
            i ? (0, r.jsx)(g.Z, { onClick: n }) : null
        ]
    });
}
function M(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: a = '', setCustomGiftMessage: l, giftRecipientError: c, setGiftRecipientError: g, validatingGiftRecipient: S, giftRecipient: D, recommendedGiftSkuIds: L, giftingOrigin: x, setValidatingGiftRecipient: M } = (0, I.wD)(),
        { selectedSkuId: U, setSelectedSkuId: G, selectedSkuPricePreview: B, paymentSourceId: V, skuPricePreviewsById: F } = (0, T.JL)(),
        Z = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
        { enabled: H, giftRecommendationAlgorithm: Y } = p.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        W = H && x === C.Wt.DM_CHANNEL,
        K = Y === p.u.POPULAR ? R.intl.string(R.t.Kwgrrq) : R.intl.string(R.t.r1huYW),
        z = async (e, t) => {
            (M(!0), null != c && g(), (await (0, u.B1)(e.id, t)) || g(R.intl.string(R.t['4kgVqa'])), M(!1));
        };
    (0, s.ZP)(() => {
        null != U && null != D && (O.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: U }), z(D, U));
    });
    let q = (e) => {
            (O.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != D && z(D, e), G(e));
        },
        X = (e) => {
            let t = F[e],
                n = null;
            if (null != t) {
                var i;
                n = null != V && null != (i = t[V]) ? i : t[y.c];
            }
            if (null == n) return;
            let a = (0, v.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === U,
                    onSelect: (e) => q(e),
                    className: P.recommendedGiftPreview
                },
                e
            );
        },
        Q = () =>
            (0, r.jsx)(h.Z, {
                sectionTitle: R.intl.string(R.t.B3miEx),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: a,
                currentText: a,
                disableThemedBackground: !0,
                className: P.customGiftMessageWrapper,
                innerClassName: P.customGiftMessage
            }),
        J = () =>
            W
                ? (0, r.jsxs)('div', {
                      className: P.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/bold',
                              color: 'header-secondary',
                              className: P.selectGiftTitle,
                              children: K.toLocaleUpperCase()
                          }),
                          L.map((e) => X(e)),
                          (0, r.jsx)(j, { handleClose: n })
                      ]
                  })
                : (0, r.jsx)('div', {
                      className: P.bodyColumnMiddle,
                      children: (0, r.jsx)(m.q, { isShopGift: !0 })
                  }),
        $ = () => {
            if (W)
                return (0, r.jsxs)('div', {
                    className: P.bodyColumnRight,
                    children: [
                        (0, r.jsx)(E.s, { giftRecipient: D }),
                        (0, r.jsx)(m.q, {
                            isShopGift: !0,
                            className: w.adjustedGiftMainAnimation,
                            optionsContainerClassName: w.adjustedGiftBoxOptionContainer
                        }),
                        Q()
                    ]
                });
            let e = null != B ? (0, v.T4)(B.amount, B.currency) : void 0;
            return (0, r.jsxs)('div', {
                className: P.bodyColumnRight,
                children: [
                    (0, r.jsx)(f.Z, {
                        selectedSkuId: U,
                        className: P.sendTo,
                        validateSelectedGift: z
                    }),
                    Q(),
                    null != e &&
                        (0, r.jsx)(d.Z, {
                            skuId: U,
                            price: e,
                            className: P.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0
                        })
                ]
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.C3, {
                children: (0, r.jsxs)('div', {
                    className: P.stepBody,
                    children: [J(), $()]
                })
            }),
            (0, r.jsx)(A.O3, {
                children: (0, r.jsx)(o.mzw, {
                    justify: _.Z.Justify.BETWEEN,
                    align: _.Z.Align.CENTER,
                    children: (0, r.jsx)(k, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != c || null == D || D.id === (null == Z ? void 0 : Z.id) || a.length > C.$n,
                        loading: S
                    })
                })
            })
        ]
    });
}
function j(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, c.ZP)(l.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function i() {
        (t(),
            (0, o.pTH)(),
            (0, u.mK)({
                openInLayer: !1,
                analyticsLocations: n,
                analyticsSource: l.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
            }));
    }
    return (0, r.jsx)(o.P3F, {
        onClick: i,
        children: (0, r.jsxs)('div', {
            className: P.navigateToShopButton,
            children: [
                (0, r.jsxs)('div', {
                    className: P.navigateToShopBody,
                    children: [
                        (0, r.jsx)('div', {
                            className: P.shopIcon,
                            children: (0, r.jsx)(o.EOn, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: P.navigateToShopTextWrapper,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: R.intl.string(R.t['1+Co8P'])
                                }),
                                (0, r.jsx)(o.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: R.intl.string(R.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(o.d4D, {
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
