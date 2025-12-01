n.d(t, { Dd: () => M });
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
    A = n(563132),
    C = n(409813),
    N = n(614277),
    P = n(981631),
    R = n(474936),
    w = n(388032),
    D = n(359739),
    x = n(611344);
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
    key: C.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(U, j({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => w.intl.string(w.t["W685+b"]),
    },
};
function k(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, A.JL)(),
        c = l ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS;
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
function U(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: l,
            giftRecipientError: E,
            setGiftRecipientError: y,
            validatingGiftRecipient: C,
            giftRecipient: L,
            recommendedGiftSkuIds: j,
            giftingOrigin: M,
            setValidatingGiftRecipient: U,
        } = (0, T.wD)(),
        {
            selectedSkuId: B,
            setSelectedSkuId: F,
            selectedSkuPricePreview: V,
            paymentSourceId: H,
            skuPricePreviewsById: Y,
            skusById: W,
        } = (0, A.JL)(),
        K = (0, i.e7)([O.default], () => O.default.getCurrentUser()),
        { enabled: z, giftRecommendationAlgorithm: q } = m.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        Q = (0, p.Z)({}),
        X = z && M === R.Wt.DM_CHANNEL,
        J = q === m.u.POPULAR ? w.intl.string(w.t.Kwgrrr) : w.intl.string(w.t.r1huYR),
        $ = async (e, t) => {
            U(!0), null != E && y(), (await (0, c.B1)(e.id, t)) || y(w.intl.string(w.t["4kgVqQ"])), U(!1);
        };
    (0, o.ZP)(() => {
        null != B &&
            null != L &&
            (M !== R.Wt.DM_CHANNEL_WISHLIST &&
                S.default.track(P.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: B }),
            $(L, B));
    });
    let ee = (e) => {
            M !== R.Wt.DM_CHANNEL_WISHLIST &&
                S.default.track(P.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }),
                null != L && $(L, e),
                F(e);
        },
        et = (e) => {
            let t = Y[e],
                n = null;
            if (null != t) {
                var i;
                n = null != H && null != (i = t[H]) ? i : t[v.c];
            }
            if (null == n) return;
            let a = (0, I.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === B,
                    onSelect: (e) => ee(e),
                    className: D.recommendedGiftPreview,
                },
                e,
            );
        },
        en = () =>
            (0, r.jsx)(h.Z, {
                sectionTitle: w.intl.string(w.t.B3miE8),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: D.customGiftMessageWrapper,
                innerClassName: D.customGiftMessage,
            }),
        er = () =>
            X
                ? (0, r.jsxs)("div", {
                      className: D.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "header-secondary",
                              className: D.selectGiftTitle,
                              children: J.toLocaleUpperCase(),
                          }),
                          j.map((e) => et(e)),
                          (0, r.jsx)(G, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: D.bodyColumnMiddle,
                      children: (0, r.jsx)(g.q, { isShopGift: !0 }),
                  }),
        ei = () => {
            if (X)
                return (0, r.jsxs)("div", {
                    className: D.bodyColumnRight,
                    children: [
                        (0, r.jsx)(b.s, { giftRecipient: L }),
                        (0, r.jsx)(g.q, {
                            isShopGift: !0,
                            className: x.adjustedGiftMainAnimation,
                            optionsContainerClassName: x.adjustedGiftBoxOptionContainer,
                        }),
                        en(),
                    ],
                });
            let e = (0, u.v5)({
                selectedSkuPricePreview: V,
                paymentSourceId: H,
                selectedSkuId: B,
                skuPricePreviewsById: Y,
                skusById: W,
                formatPrice: I.T4,
            });
            return M === R.Wt.USER_PROFILE_WISHLIST || M === R.Wt.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: D.bodyColumnRight,
                      children: [
                          (0, r.jsx)(b.s, { giftRecipient: L }),
                          en(),
                          null != e &&
                              null != B &&
                              (0, r.jsx)(d.Z, {
                                  skuId: B,
                                  price: e,
                                  className: D.wishlistGiftPreview,
                                  previewHeaderClassName: D.wishlistGiftPreviewHeader,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: D.wishlistGiftPreviewFooter,
                              children: (0, r.jsx)(Z, {
                                  handleClose: n,
                                  selectedSkuId: B,
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: D.bodyColumnRight,
                      children: [
                          (0, r.jsx)(f.Z, {
                              selectedSkuId: B,
                              recipients: Q,
                              className: D.sendTo,
                              validateSelectedGift: $,
                          }),
                          en(),
                          null != e &&
                              (0, r.jsx)(d.Z, {
                                  skuId: B,
                                  price: e,
                                  className: D.giftPreview,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.C3, {
                children: (0, r.jsxs)("div", {
                    className: D.stepBody,
                    children: [er(), ei()],
                }),
            }),
            (0, r.jsx)(N.O3, {
                children: (0, r.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: _.Z.Justify.BETWEEN,
                    align: _.Z.Align.CENTER,
                    children: (0, r.jsx)(k, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != E || null == L || L.id === (null == K ? void 0 : K.id) || s.length > R.$n,
                        loading: C,
                    }),
                }),
            }),
        ],
    });
}
function G(e) {
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
                                color: "var(--header-primary)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: D.navigateToShopTextWrapper,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "header-primary",
                                    variant: "text-md/semibold",
                                    children: w.intl.string(w.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "header-secondary",
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
                        color: "var(--header-primary)",
                    }),
                }),
            ],
        }),
    });
}
function Z(e) {
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
