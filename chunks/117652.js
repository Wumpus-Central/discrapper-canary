n.d(t, { Dd: () => M });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(493773),
    s = n(100527),
    l = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(628952),
    f = n(225657),
    _ = n(600164),
    p = n(109213),
    h = n(927699),
    m = n(987716),
    g = n(311821),
    E = n(251660),
    b = n(703656),
    y = n(594174),
    O = n(855775),
    v = n(626135),
    I = n(937615),
    T = n(987209),
    S = n(563132),
    A = n(409813),
    C = n(614277),
    N = n(981631),
    R = n(474936),
    P = n(388032),
    w = n(359739),
    D = n(611344);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let M = {
    key: A.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(k, L({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => P.intl.string(P.t["W685+b"]),
    },
};
function j(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, S.JL)(),
        c = l ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, {
                onClick: () => t(c),
                disabled: o,
                loading: s,
                text: P.intl.string(P.t.XiOHRX),
            }),
            i ? (0, r.jsx)(g.Z, { onClick: n }) : null,
        ],
    });
}
function k(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: l,
            giftRecipientError: g,
            setGiftRecipientError: b,
            validatingGiftRecipient: A,
            giftRecipient: x,
            recommendedGiftSkuIds: L,
            giftingOrigin: M,
            setValidatingGiftRecipient: k,
        } = (0, T.wD)(),
        {
            selectedSkuId: B,
            setSelectedSkuId: Z,
            selectedSkuPricePreview: F,
            paymentSourceId: V,
            skuPricePreviewsById: H,
            skusById: Y,
        } = (0, S.JL)(),
        W = (0, i.e7)([y.default], () => y.default.getCurrentUser()),
        { enabled: K, giftRecommendationAlgorithm: z } = p.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        q = K && M === R.Wt.DM_CHANNEL,
        X = z === p.u.POPULAR ? P.intl.string(P.t.Kwgrrr) : P.intl.string(P.t.r1huYR),
        Q = async (e, t) => {
            k(!0), null != g && b(), (await (0, c.B1)(e.id, t)) || b(P.intl.string(P.t["4kgVqQ"])), k(!1);
        };
    (0, o.ZP)(() => {
        null != B &&
            null != x &&
            (v.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: B }), Q(x, B));
    });
    let J = (e) => {
            v.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != x && Q(x, e), Z(e);
        },
        $ = (e) => {
            let t = H[e],
                n = null;
            if (null != t) {
                var i;
                n = null != V && null != (i = t[V]) ? i : t[O.c];
            }
            if (null == n) return;
            let a = (0, I.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === B,
                    onSelect: (e) => J(e),
                    className: w.recommendedGiftPreview,
                },
                e,
            );
        },
        ee = () =>
            (0, r.jsx)(h.Z, {
                sectionTitle: P.intl.string(P.t.B3miE8),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: w.customGiftMessageWrapper,
                innerClassName: w.customGiftMessage,
            }),
        et = () =>
            q
                ? (0, r.jsxs)("div", {
                      className: w.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "header-secondary",
                              className: w.selectGiftTitle,
                              children: X.toLocaleUpperCase(),
                          }),
                          L.map((e) => $(e)),
                          (0, r.jsx)(U, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: w.bodyColumnMiddle,
                      children: (0, r.jsx)(m.q, { isShopGift: !0 }),
                  }),
        en = () => {
            if (q)
                return (0, r.jsxs)("div", {
                    className: w.bodyColumnRight,
                    children: [
                        (0, r.jsx)(E.s, { giftRecipient: x }),
                        (0, r.jsx)(m.q, {
                            isShopGift: !0,
                            className: D.adjustedGiftMainAnimation,
                            optionsContainerClassName: D.adjustedGiftBoxOptionContainer,
                        }),
                        ee(),
                    ],
                });
            let e = (0, u.v5)({
                selectedSkuPricePreview: F,
                paymentSourceId: V,
                selectedSkuId: B,
                skuPricePreviewsById: H,
                skusById: Y,
                formatPrice: I.T4,
            });
            return M === R.Wt.USER_PROFILE_WISHLIST || M === R.Wt.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: w.bodyColumnRight,
                      children: [
                          (0, r.jsx)(E.s, { giftRecipient: x }),
                          ee(),
                          null != e &&
                              null != B &&
                              (0, r.jsx)(d.Z, {
                                  skuId: B,
                                  price: e,
                                  className: w.wishlistGiftPreview,
                                  previewHeaderClassName: w.wishlistGiftPreviewHeader,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: w.wishlistGiftPreviewFooter,
                              children: (0, r.jsx)(G, {
                                  handleClose: n,
                                  selectedSkuId: B,
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: w.bodyColumnRight,
                      children: [
                          (0, r.jsx)(f.Z, {
                              selectedSkuId: B,
                              className: w.sendTo,
                              validateSelectedGift: Q,
                          }),
                          ee(),
                          null != e &&
                              (0, r.jsx)(d.Z, {
                                  skuId: B,
                                  price: e,
                                  className: w.giftPreview,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.C3, {
                children: (0, r.jsxs)("div", {
                    className: w.stepBody,
                    children: [et(), en()],
                }),
            }),
            (0, r.jsx)(C.O3, {
                children: (0, r.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: _.Z.Justify.BETWEEN,
                    align: _.Z.Align.CENTER,
                    children: (0, r.jsx)(j, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != g || null == x || x.id === (null == W ? void 0 : W.id) || s.length > R.$n,
                        loading: A,
                    }),
                }),
            }),
        ],
    });
}
function U(e) {
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
            className: w.navigateToShopButton,
            children: [
                (0, r.jsxs)("div", {
                    className: w.navigateToShopBody,
                    children: [
                        (0, r.jsx)("div", {
                            className: w.shopIcon,
                            children: (0, r.jsx)(a.EOn, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--header-primary)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: w.navigateToShopTextWrapper,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "header-primary",
                                    variant: "text-md/semibold",
                                    children: P.intl.string(P.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-sm/medium",
                                    children: P.intl.string(P.t.nYn52B),
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
                        color: "var(--header-primary)",
                    }),
                }),
            ],
        }),
    });
}
function G(e) {
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
                : (0, b.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n));
    }
    return (0, r.jsx)(a.Avr, {
        text: P.intl.string(P.t.J82mpK),
        onClick: o,
        textVariant: "text-sm/medium",
    });
}
