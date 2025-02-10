n.d(t, { Dd: () => L });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(493773),
    o = n(100527),
    l = n(906732),
    u = n(335131),
    c = n(628952),
    d = n(225657),
    f = n(600164),
    _ = n(109213),
    p = n(927699),
    h = n(987716),
    m = n(311821),
    g = n(251660),
    E = n(594174),
    v = n(855775),
    y = n(626135),
    I = n(937615),
    T = n(987209),
    b = n(563132),
    S = n(409813),
    A = n(614277),
    N = n(981631),
    C = n(474936),
    R = n(388032),
    O = n(196236),
    D = n(355620);
let L = {
    key: S.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(P, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => R.intl.string(R.t['W685+f'])
    }
};
function x(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: s = !1, loading: o = !1 } = e,
        { hasPaymentSources: l } = (0, b.JL)(),
        u = l ? S.h8.REVIEW : S.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.zxk, {
                onClick: () => t(u),
                disabled: s,
                submitting: o,
                children: R.intl.string(R.t.XiOHRU)
            }),
            r ? (0, i.jsx)(m.Z, { onClick: n }) : null
        ]
    });
}
function P(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: o = '', setCustomGiftMessage: l, giftRecipientError: m, setGiftRecipientError: S, validatingGiftRecipient: L, giftRecipient: P, recommendedGiftSkuIds: M, giftingOrigin: k, setValidatingGiftRecipient: U } = (0, T.wD)(),
        { selectedSkuId: G, setSelectedSkuId: B, selectedSkuPricePreview: Z, paymentSourceId: F, skuPricePreviewsById: V } = (0, b.JL)(),
        j = (0, r.e7)([E.default], () => E.default.getCurrentUser()),
        { enabled: H, giftRecommendationAlgorithm: Y } = _.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        W = H && k === C.Wt.DM_CHANNEL,
        K = Y === _.u.POPULAR ? R.intl.string(R.t.Kwgrrq) : R.intl.string(R.t.r1huYW),
        z = async (e, t) => {
            U(!0), null != m && S(), (await (0, u.B1)(e.id, t)) || S(R.intl.string(R.t['4kgVqa'])), U(!1);
        };
    (0, s.ZP)(() => {
        null != G && null != P && (y.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: G }), z(P, G));
    });
    let q = (e) => {
            y.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != P && z(P, e), B(e);
        },
        Q = (e) => {
            let t = V[e],
                n = null;
            if (null != t) {
                var r;
                n = null != F && null !== (r = t[F]) && void 0 !== r ? r : t[v.c];
            }
            if (null == n) return;
            let a = (0, I.T4)(n.amount, n.currency);
            return (0, i.jsx)(
                c.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === G,
                    onSelect: (e) => q(e),
                    className: O.recommendedGiftPreview
                },
                e
            );
        },
        X = () =>
            (0, i.jsx)(p.Z, {
                sectionTitle: R.intl.string(R.t.B3miEx),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: o,
                currentText: o,
                disableThemedBackground: !0,
                className: O.customGiftMessageWrapper,
                innerClassName: O.customGiftMessage
            }),
        J = () =>
            W
                ? (0, i.jsxs)('div', {
                      className: O.bodyColumnLeft,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: 'text-xs/bold',
                              color: 'header-secondary',
                              className: O.selectGiftTitle,
                              children: K.toLocaleUpperCase()
                          }),
                          M.map((e) => Q(e)),
                          (0, i.jsx)(w, { handleClose: n })
                      ]
                  })
                : (0, i.jsx)('div', {
                      className: O.bodyColumnMiddle,
                      children: (0, i.jsx)(h.q, { isShopGift: !0 })
                  }),
        $ = () => {
            if (W)
                return (0, i.jsxs)('div', {
                    className: O.bodyColumnRight,
                    children: [
                        (0, i.jsx)(g.s, { giftRecipient: P }),
                        (0, i.jsx)(h.q, {
                            isShopGift: !0,
                            className: D.adjustedGiftMainAnimation,
                            optionsContainerClassName: D.adjustedGiftBoxOptionContainer
                        }),
                        X()
                    ]
                });
            let e = null != Z ? (0, I.T4)(Z.amount, Z.currency) : void 0;
            return (0, i.jsxs)('div', {
                className: O.bodyColumnRight,
                children: [
                    (0, i.jsx)(d.Z, {
                        selectedSkuId: G,
                        className: O.sendTo,
                        validateSelectedGift: z
                    }),
                    X(),
                    null != e &&
                        (0, i.jsx)(c.Z, {
                            skuId: G,
                            price: e,
                            className: O.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0
                        })
                ]
            });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.C3, {
                children: (0, i.jsxs)('div', {
                    className: O.stepBody,
                    children: [J(), $()]
                })
            }),
            (0, i.jsx)(A.O3, {
                children: (0, i.jsx)(a.mzw, {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    children: (0, i.jsx)(x, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != m || null == P || P.id === (null == j ? void 0 : j.id) || o.length > C.$n,
                        loading: L
                    })
                })
            })
        ]
    });
}
function w(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(o.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function r() {
        t(),
            (0, a.pTH)(),
            (0, u.mK)({
                openInLayer: !1,
                analyticsLocations: n,
                analyticsSource: o.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
            });
    }
    return (0, i.jsx)(a.P3F, {
        onClick: r,
        children: (0, i.jsxs)('div', {
            className: O.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: O.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: O.shopIcon,
                            children: (0, i.jsx)(a.EOn, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: O.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: R.intl.string(R.t['1+Co8P'])
                                }),
                                (0, i.jsx)(a.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: R.intl.string(R.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(a.d4D, {
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
