n.d(t, {
    Dd: () => M,
    YX: () => U,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(493773),
    s = n(100527),
    l = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(628952),
    f = n(225657),
    p = n(334636),
    _ = n(600164),
    m = n(109213),
    h = n(927699),
    g = n(987716),
    E = n(311821),
    b = n(251660),
    y = n(703656),
    O = n(594174),
    v = n(855775),
    S = n(626135),
    I = n(937615),
    T = n(987209),
    C = n(563132),
    A = n(409813),
    N = n(614277),
    P = n(981631),
    R = n(474936),
    w = n(388032),
    D = n(503497),
    x = n(940909);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
let M = {
    key: A.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(G, j({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => w.intl.string(w.t["W685+b"]),
    },
};
function k(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, C.JL)(),
        c = l ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, {
                onClick: () => t(c),
                disabled: o,
                loading: s,
                text: w.intl.string(w.t.XiOHRX),
            }),
            i ? (0, r.jsx)(E.Z, { onClick: n }) : null,
        ],
    });
}
let U = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: l,
            giftRecipientError: _,
            setGiftRecipientError: E,
            validatingGiftRecipient: y,
            giftRecipient: A,
            recommendedGiftSkuIds: N,
            giftingOrigin: L,
            setValidatingGiftRecipient: j,
        } = (0, T.wD)(),
        {
            selectedSkuId: M,
            setSelectedSkuId: k,
            selectedSkuPricePreview: U,
            paymentSourceId: G,
            skuPricePreviewsById: B,
            skusById: V,
        } = (0, C.JL)(),
        H = (0, i.e7)([O.default], () => O.default.getCurrentUser()),
        { enabled: Y, giftRecommendationAlgorithm: W } = m.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        K = (0, p.Z)({}),
        z = Y && L === R.Wt.DM_CHANNEL,
        q = W === m.u.POPULAR ? w.intl.string(w.t.Kwgrrr) : w.intl.string(w.t.r1huYR),
        Q = async (e, t) => {
            j(!0), null != _ && E(), (await (0, c.B1)(e.id, t)) || E(w.intl.string(w.t["4kgVqQ"])), j(!1);
        };
    (0, o.ZP)(() => {
        null != M &&
            null != A &&
            (L !== R.Wt.DM_CHANNEL_WISHLIST &&
                S.default.track(P.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: M }),
            Q(A, M));
    });
    let X = (e) => {
            L !== R.Wt.DM_CHANNEL_WISHLIST &&
                S.default.track(P.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }),
                null != A && Q(A, e),
                k(e);
        },
        J = (e) => {
            let t = B[e],
                n = null;
            if (null != t) {
                var i;
                n = null != G && null != (i = t[G]) ? i : t[v.c];
            }
            if (null == n) return;
            let a = (0, I.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === M,
                    onSelect: (e) => X(e),
                    className: D.recommendedGiftPreview,
                },
                e,
            );
        },
        $ = () =>
            (0, r.jsx)(h.Z, {
                sectionTitle: w.intl.string(w.t.B3miE8),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: D.customGiftMessageWrapper,
                innerClassName: D.customGiftMessage,
            });
    return {
        renderLeftColumn: () =>
            z
                ? (0, r.jsxs)("div", {
                      className: D.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "text-default",
                              className: D.selectGiftTitle,
                              children: q.toLocaleUpperCase(),
                          }),
                          N.map((e) => J(e)),
                          (0, r.jsx)(Z, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: D.bodyColumnMiddle,
                      children: (0, r.jsx)(g.q, { isShopGift: !0 }),
                  }),
        renderRightColumn: () => {
            if (z)
                return (0, r.jsxs)("div", {
                    className: D.bodyColumnRight,
                    children: [
                        (0, r.jsx)(b.s, { giftRecipient: A }),
                        (0, r.jsx)(g.q, {
                            isShopGift: !0,
                            className: x.adjustedGiftMainAnimation,
                            optionsContainerClassName: x.adjustedGiftBoxOptionContainer,
                        }),
                        $(),
                    ],
                });
            let e = (0, u.v5)({
                selectedSkuPricePreview: U,
                paymentSourceId: G,
                selectedSkuId: M,
                skuPricePreviewsById: B,
                skusById: V,
                formatPrice: I.T4,
            });
            return L === R.Wt.USER_PROFILE_WISHLIST || L === R.Wt.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: D.bodyColumnRight,
                      children: [
                          (0, r.jsx)(b.s, { giftRecipient: A }),
                          $(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(d.Z, {
                                  skuId: M,
                                  price: e,
                                  className: D.wishlistGiftPreview,
                                  previewHeaderClassName: D.wishlistGiftPreviewHeader,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: D.wishlistGiftPreviewFooter,
                              children: (0, r.jsx)(F, {
                                  handleClose: n,
                                  selectedSkuId: M,
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: D.bodyColumnRight,
                      children: [
                          (0, r.jsx)(f.Z, {
                              selectedSkuId: M,
                              recipients: K,
                              className: D.sendTo,
                              validateSelectedGift: Q,
                          }),
                          $(),
                          null != e &&
                              (0, r.jsx)(d.Z, {
                                  skuId: M,
                                  price: e,
                                  className: D.giftPreview,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != _ || null == A || A.id === (null == H ? void 0 : H.id) || s.length > R.$n,
        loading: y,
    };
};
function G(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderLeftColumn: i,
            renderRightColumn: o,
            onStepChange: s,
            onBackClick: l,
            ctaDisabled: c,
            loading: u,
        } = U({
            handleStepChange: t,
            handleClose: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.C3, {
                children: (0, r.jsxs)("div", {
                    className: D.stepBody,
                    children: [i(), o()],
                }),
            }),
            (0, r.jsx)(N.O3, {
                children: (0, r.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: _.Z.Justify.BETWEEN,
                    align: _.Z.Align.CENTER,
                    children: (0, r.jsx)(k, {
                        onStepChange: s,
                        onBackClick: l,
                        disabled: c,
                        loading: u,
                    }),
                }),
            }),
        ],
    });
}
function Z(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function i() {
        t(),
            (0, a.pTH)(),
            (0, c.mK)({
                analyticsLocations: n,
                analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
            });
    }
    return (0, r.jsx)(a.P3F, {
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: D.navigateToShopButton,
            children: [
                (0, r.jsxs)("div", {
                    className: D.navigateToShopBody,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.shopIcon,
                            children: (0, r.jsx)(a.EOn, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--text-strong)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: D.navigateToShopTextWrapper,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "text-strong",
                                    variant: "text-md/semibold",
                                    children: w.intl.string(w.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: w.intl.string(w.t.nYn52B),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.d4D, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "var(--text-strong)",
                    }),
                }),
            ],
        }),
    });
}
function F(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function o() {
        t(),
            (0, a.pTH)(),
            null == n
                ? (0, c.mK)({
                      analyticsLocations: i,
                      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
                  })
                : (0, y.uL)("".concat(P.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n));
    }
    return (0, r.jsx)(a.Avr, {
        text: w.intl.string(w.t.J82mpK),
        onClick: o,
        textVariant: "text-sm/medium",
    });
}
