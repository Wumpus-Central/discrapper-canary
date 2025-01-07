t.d(n, {
    Dd: function () {
        return O;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    s = t(481060),
    a = t(493773),
    r = t(100527),
    o = t(906732),
    d = t(335131),
    c = t(628952),
    u = t(225657),
    h = t(600164),
    x = t(109213),
    f = t(927699),
    C = t(987716),
    m = t(311821),
    g = t(251660),
    p = t(594174),
    S = t(855775),
    j = t(626135),
    v = t(937615),
    E = t(987209),
    I = t(563132),
    T = t(409813),
    N = t(614277),
    _ = t(981631),
    M = t(474936),
    y = t(388032),
    Z = t(463313),
    A = t(461405);
let O = {
    key: T.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(k, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => y.intl.string(y.t['W685+f'])
    }
};
function P(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: a = !1, loading: r = !1 } = e,
        { hasPaymentSources: o } = (0, I.usePaymentContext)(),
        d = o ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Button, {
                onClick: () => n(d),
                disabled: a,
                submitting: r,
                children: y.intl.string(y.t.XiOHRU)
            }),
            l ? (0, i.jsx)(m.Z, { onClick: t }) : null
        ]
    });
}
function k(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: r = '', setCustomGiftMessage: o, giftRecipientError: m, setGiftRecipientError: T, validatingGiftRecipient: O, giftRecipient: k, recommendedGiftSkuIds: L, giftingOrigin: G, setValidatingGiftRecipient: D } = (0, E.wD)(),
        { selectedSkuId: R, setSelectedSkuId: B, selectedSkuPricePreview: F, paymentSourceId: w, skuPricePreviewsById: H } = (0, I.usePaymentContext)(),
        W = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        { enabled: U, giftRecommendationAlgorithm: Y } = x.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        K = U && G === M.Wt.DM_CHANNEL,
        V = Y === x.u.POPULAR ? y.intl.string(y.t.Kwgrrq) : y.intl.string(y.t.r1huYW),
        q = async (e, n) => {
            D(!0), null != m && T(), !(await (0, d.B1)(e.id, n)) && T(y.intl.string(y.t['4kgVqa'])), D(!1);
        };
    (0, a.Z)(() => {
        null != R && null != k && (j.default.track(_.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: R }), q(k, R));
    });
    let z = (e) => {
            j.default.track(_.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != k && q(k, e), B(e);
        },
        J = (e) => {
            let n = H[e],
                t = null;
            if (null != n) {
                var l;
                t = null != w && null !== (l = n[w]) && void 0 !== l ? l : n[S.c];
            }
            if (null == t) return;
            let s = (0, v.T4)(t.amount, t.currency);
            return (0, i.jsx)(
                c.Z,
                {
                    skuId: e,
                    price: s,
                    isSelected: e === R,
                    onSelect: (e) => z(e),
                    className: Z.recommendedGiftPreview
                },
                e
            );
        },
        Q = () =>
            (0, i.jsx)(f.Z, {
                sectionTitle: y.intl.string(y.t.B3miEx),
                onTextChange: (e) => (null == o ? void 0 : o(e)),
                pendingText: r,
                currentText: r,
                disableThemedBackground: !0,
                className: Z.customGiftMessageWrapper,
                innerClassName: Z.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.C3, {
                children: (0, i.jsxs)('div', {
                    className: Z.stepBody,
                    children: [
                        K
                            ? (0, i.jsxs)('div', {
                                  className: Z.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: Z.selectGiftTitle,
                                          children: V.toLocaleUpperCase()
                                      }),
                                      L.map((e) => J(e)),
                                      (0, i.jsx)(b, { handleClose: t })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: Z.bodyColumnMiddle,
                                  children: (0, i.jsx)(C.q, { isShopGift: !0 })
                              }),
                        (() => {
                            if (K)
                                return (0, i.jsxs)('div', {
                                    className: Z.bodyColumnRight,
                                    children: [
                                        (0, i.jsx)(g.s, { giftRecipient: k }),
                                        (0, i.jsx)(C.q, {
                                            isShopGift: !0,
                                            className: A.adjustedGiftMainAnimation,
                                            optionsContainerClassName: A.adjustedGiftBoxOptionContainer
                                        }),
                                        Q()
                                    ]
                                });
                            let e = null != F ? (0, v.T4)(F.amount, F.currency) : void 0;
                            return (0, i.jsxs)('div', {
                                className: Z.bodyColumnRight,
                                children: [
                                    (0, i.jsx)(u.Z, {
                                        selectedSkuId: R,
                                        className: Z.sendTo,
                                        validateSelectedGift: q
                                    }),
                                    Q(),
                                    null != e &&
                                        (0, i.jsx)(c.Z, {
                                            skuId: R,
                                            price: e,
                                            className: Z.giftPreview,
                                            isSelected: !0,
                                            shouldDisplayHeader: !0
                                        })
                                ]
                            });
                        })()
                    ]
                })
            }),
            (0, i.jsx)(N.O3, {
                children: (0, i.jsx)(s.ModalFooter, {
                    justify: h.Z.Justify.BETWEEN,
                    align: h.Z.Align.CENTER,
                    children: (0, i.jsx)(P, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != m || null == k || k.id === (null == W ? void 0 : W.id) || r.length > M.$n,
                        loading: O
                    })
                })
            })
        ]
    });
}
function b(e) {
    let { handleClose: n } = e,
        { analyticsLocations: t } = (0, o.ZP)(r.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(s.Clickable, {
        onClick: function () {
            n(),
                (0, s.closeAllModals)(),
                (0, d.mK)({
                    openInLayer: !1,
                    analyticsLocations: t,
                    analyticsSource: r.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
                });
        },
        children: (0, i.jsxs)('div', {
            className: Z.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: Z.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: Z.shopIcon,
                            children: (0, i.jsx)(s.ShopIcon, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: y.intl.string(y.t['1+Co8P'])
                                }),
                                (0, i.jsx)(s.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: y.intl.string(y.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(s.ArrowLargeRightIcon, {
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
