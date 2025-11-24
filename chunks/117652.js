n.d(t, { Dd: () => j });
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
    _ = n(334636),
    p = n(600164),
    h = n(109213),
    m = n(927699),
    g = n(987716),
    E = n(311821),
    b = n(251660),
    y = n(703656),
    O = n(594174),
    v = n(855775),
    I = n(626135),
    T = n(937615),
    S = n(987209),
    A = n(563132),
    C = n(409813),
    N = n(614277),
    R = n(981631),
    P = n(474936),
    D = n(388032),
    w = n(359739),
    L = n(611344);
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
function M(e) {
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
let j = {
    key: C.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(U, M({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => D.intl.string(D.t["W685+b"]),
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
                text: D.intl.string(D.t.XiOHRX),
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
            giftRecipient: x,
            recommendedGiftSkuIds: M,
            giftingOrigin: j,
            setValidatingGiftRecipient: U,
        } = (0, S.wD)(),
        {
            selectedSkuId: Z,
            setSelectedSkuId: F,
            selectedSkuPricePreview: V,
            paymentSourceId: H,
            skuPricePreviewsById: Y,
            skusById: W,
        } = (0, A.JL)(),
        K = (0, i.e7)([O.default], () => O.default.getCurrentUser()),
        { enabled: z, giftRecommendationAlgorithm: q } = h.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        X = (0, _.Z)({}),
        Q = z && j === P.Wt.DM_CHANNEL,
        J = q === h.u.POPULAR ? D.intl.string(D.t.Kwgrrr) : D.intl.string(D.t.r1huYR),
        $ = async (e, t) => {
            U(!0), null != E && y(), (await (0, c.B1)(e.id, t)) || y(D.intl.string(D.t["4kgVqQ"])), U(!1);
        };
    (0, o.ZP)(() => {
        null != Z &&
            null != x &&
            (j !== P.Wt.DM_CHANNEL_WISHLIST &&
                I.default.track(R.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: Z }),
            $(x, Z));
    });
    let ee = (e) => {
            j !== P.Wt.DM_CHANNEL_WISHLIST &&
                I.default.track(R.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }),
                null != x && $(x, e),
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
            let a = (0, T.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === Z,
                    onSelect: (e) => ee(e),
                    className: w.recommendedGiftPreview,
                },
                e,
            );
        },
        en = () =>
            (0, r.jsx)(m.Z, {
                sectionTitle: D.intl.string(D.t.B3miE8),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: w.customGiftMessageWrapper,
                innerClassName: w.customGiftMessage,
            }),
        er = () =>
            Q
                ? (0, r.jsxs)("div", {
                      className: w.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "header-secondary",
                              className: w.selectGiftTitle,
                              children: J.toLocaleUpperCase(),
                          }),
                          M.map((e) => et(e)),
                          (0, r.jsx)(G, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: w.bodyColumnMiddle,
                      children: (0, r.jsx)(g.q, { isShopGift: !0 }),
                  }),
        ei = () => {
            if (Q)
                return (0, r.jsxs)("div", {
                    className: w.bodyColumnRight,
                    children: [
                        (0, r.jsx)(b.s, { giftRecipient: x }),
                        (0, r.jsx)(g.q, {
                            isShopGift: !0,
                            className: L.adjustedGiftMainAnimation,
                            optionsContainerClassName: L.adjustedGiftBoxOptionContainer,
                        }),
                        en(),
                    ],
                });
            let e = (0, u.v5)({
                selectedSkuPricePreview: V,
                paymentSourceId: H,
                selectedSkuId: Z,
                skuPricePreviewsById: Y,
                skusById: W,
                formatPrice: T.T4,
            });
            return j === P.Wt.USER_PROFILE_WISHLIST || j === P.Wt.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: w.bodyColumnRight,
                      children: [
                          (0, r.jsx)(b.s, { giftRecipient: x }),
                          en(),
                          null != e &&
                              null != Z &&
                              (0, r.jsx)(d.Z, {
                                  skuId: Z,
                                  price: e,
                                  className: w.wishlistGiftPreview,
                                  previewHeaderClassName: w.wishlistGiftPreviewHeader,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: w.wishlistGiftPreviewFooter,
                              children: (0, r.jsx)(B, {
                                  handleClose: n,
                                  selectedSkuId: Z,
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: w.bodyColumnRight,
                      children: [
                          (0, r.jsx)(f.Z, {
                              selectedSkuId: Z,
                              recipients: X,
                              className: w.sendTo,
                              validateSelectedGift: $,
                          }),
                          en(),
                          null != e &&
                              (0, r.jsx)(d.Z, {
                                  skuId: Z,
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
            (0, r.jsx)(N.C3, {
                children: (0, r.jsxs)("div", {
                    className: w.stepBody,
                    children: [er(), ei()],
                }),
            }),
            (0, r.jsx)(N.O3, {
                children: (0, r.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: p.Z.Justify.BETWEEN,
                    align: p.Z.Align.CENTER,
                    children: (0, r.jsx)(k, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != E || null == x || x.id === (null == K ? void 0 : K.id) || s.length > P.$n,
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
                                    children: D.intl.string(D.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-sm/medium",
                                    children: D.intl.string(D.t.nYn52B),
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
function B(e) {
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
                : (0, y.uL)("".concat(R.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n));
    }
    return (0, r.jsx)(a.Avr, {
        text: D.intl.string(D.t.J82mpK),
        onClick: o,
        textVariant: "text-sm/medium",
    });
}
