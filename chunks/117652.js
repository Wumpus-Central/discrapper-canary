r.d(n, {
    Dd: function () {
        return x;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(493773),
    l = r(100527),
    u = r(906732),
    c = r(335131),
    d = r(628952),
    f = r(225657),
    p = r(600164),
    h = r(109213),
    _ = r(927699),
    m = r(987716),
    g = r(311821),
    E = r(251660),
    v = r(594174),
    y = r(855775),
    b = r(626135),
    I = r(937615),
    T = r(987209),
    S = r(563132),
    A = r(409813),
    C = r(614277),
    N = r(981631),
    R = r(474936),
    O = r(388032),
    D = r(463313),
    L = r(461405);
let x = {
    key: A.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(P, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => O.intl.string(O.t['W685+f'])
    }
};
function w(e) {
    let { onStepChange: n, onBackClick: r, showBackButton: a = !1, disabled: s = !1, loading: l = !1 } = e,
        { hasPaymentSources: u } = (0, S.usePaymentContext)(),
        c = u ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Button, {
                onClick: () => n(c),
                disabled: s,
                submitting: l,
                children: O.intl.string(O.t.XiOHRU)
            }),
            a ? (0, i.jsx)(g.Z, { onClick: r }) : null
        ]
    });
}
function P(e) {
    let { handleStepChange: n, handleClose: r } = e,
        { customGiftMessage: l = '', setCustomGiftMessage: u, giftRecipientError: g, setGiftRecipientError: A, validatingGiftRecipient: x, giftRecipient: P, recommendedGiftSkuIds: k, giftingOrigin: U, setValidatingGiftRecipient: B } = (0, T.wD)(),
        { selectedSkuId: G, setSelectedSkuId: Z, selectedSkuPricePreview: F, paymentSourceId: V, skuPricePreviewsById: j } = (0, S.usePaymentContext)(),
        H = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
        { enabled: Y, giftRecommendationAlgorithm: W } = h.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        K = Y && U === R.Wt.DM_CHANNEL,
        z = W === h.u.POPULAR ? O.intl.string(O.t.Kwgrrq) : O.intl.string(O.t.r1huYW),
        q = async (e, n) => {
            B(!0), null != g && A(), !(await (0, c.B1)(e.id, n)) && A(O.intl.string(O.t['4kgVqa'])), B(!1);
        };
    (0, s.Z)(() => {
        null != G && null != P && (b.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: G }), q(P, G));
    });
    let Q = (e) => {
            b.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != P && q(P, e), Z(e);
        },
        X = (e) => {
            let n = j[e],
                r = null;
            if (null != n) {
                var a;
                r = null != V && null !== (a = n[V]) && void 0 !== a ? a : n[y.c];
            }
            if (null == r) return;
            let o = (0, I.T4)(r.amount, r.currency);
            return (0, i.jsx)(
                d.Z,
                {
                    skuId: e,
                    price: o,
                    isSelected: e === G,
                    onSelect: (e) => Q(e),
                    className: D.recommendedGiftPreview
                },
                e
            );
        },
        J = () =>
            (0, i.jsx)(_.Z, {
                sectionTitle: O.intl.string(O.t.B3miEx),
                onTextChange: (e) => (null == u ? void 0 : u(e)),
                pendingText: l,
                currentText: l,
                disableThemedBackground: !0,
                className: D.customGiftMessageWrapper,
                innerClassName: D.customGiftMessage
            }),
        $ = () =>
            K
                ? (0, i.jsxs)('div', {
                      className: D.bodyColumnLeft,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/bold',
                              color: 'header-secondary',
                              className: D.selectGiftTitle,
                              children: z.toLocaleUpperCase()
                          }),
                          k.map((e) => X(e)),
                          (0, i.jsx)(M, { handleClose: r })
                      ]
                  })
                : (0, i.jsx)('div', {
                      className: D.bodyColumnMiddle,
                      children: (0, i.jsx)(m.q, { isShopGift: !0 })
                  }),
        ee = () => {
            if (K)
                return (0, i.jsxs)('div', {
                    className: D.bodyColumnRight,
                    children: [
                        (0, i.jsx)(E.s, { giftRecipient: P }),
                        (0, i.jsx)(m.q, {
                            isShopGift: !0,
                            className: L.adjustedGiftMainAnimation,
                            optionsContainerClassName: L.adjustedGiftBoxOptionContainer
                        }),
                        J()
                    ]
                });
            let e = null != F ? (0, I.T4)(F.amount, F.currency) : void 0;
            return (0, i.jsxs)('div', {
                className: D.bodyColumnRight,
                children: [
                    (0, i.jsx)(f.Z, {
                        selectedSkuId: G,
                        className: D.sendTo,
                        validateSelectedGift: q
                    }),
                    J(),
                    null != e &&
                        (0, i.jsx)(d.Z, {
                            skuId: G,
                            price: e,
                            className: D.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0
                        })
                ]
            });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.C3, {
                children: (0, i.jsxs)('div', {
                    className: D.stepBody,
                    children: [$(), ee()]
                })
            }),
            (0, i.jsx)(C.O3, {
                children: (0, i.jsx)(o.ModalFooter, {
                    justify: p.Z.Justify.BETWEEN,
                    align: p.Z.Align.CENTER,
                    children: (0, i.jsx)(w, {
                        onStepChange: n,
                        onBackClick: r,
                        disabled: null != g || null == P || P.id === (null == H ? void 0 : H.id) || l.length > R.$n,
                        loading: x
                    })
                })
            })
        ]
    });
}
function M(e) {
    let { handleClose: n } = e,
        { analyticsLocations: r } = (0, u.ZP)(l.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function a() {
        n(),
            (0, o.closeAllModals)(),
            (0, c.mK)({
                openInLayer: !1,
                analyticsLocations: r,
                analyticsSource: l.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
            });
    }
    return (0, i.jsx)(o.Clickable, {
        onClick: a,
        children: (0, i.jsxs)('div', {
            className: D.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: D.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: D.shopIcon,
                            children: (0, i.jsx)(o.ShopIcon, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: D.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: O.intl.string(O.t['1+Co8P'])
                                }),
                                (0, i.jsx)(o.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: O.intl.string(O.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(o.ArrowLargeRightIcon, {
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
