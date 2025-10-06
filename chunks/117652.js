n.d(t, { Dd: () => x });
var r = n(951288);
n(647438);
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
    E = n(703656),
    b = n(594174),
    y = n(855775),
    O = n(626135),
    v = n(937615),
    I = n(987209),
    T = n(563132),
    S = n(409813),
    A = n(614277),
    C = n(981631),
    N = n(474936),
    R = n(388032),
    P = n(359739),
    w = n(611344);
function D(e, t, n) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
let x = {
    key: S.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(j, L({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => R.intl.string(R.t["W685+f"]),
    },
};
function M(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, T.JL)(),
        c = l ? S.h8.REVIEW : S.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.zxk, {
                onClick: () => t(c),
                disabled: o,
                loading: s,
                text: R.intl.string(R.t.XiOHRU),
            }),
            i ? (0, r.jsx)(m.Z, { onClick: n }) : null,
        ],
    });
}
function j(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: l,
            giftRecipientError: m,
            setGiftRecipientError: E,
            validatingGiftRecipient: S,
            giftRecipient: D,
            recommendedGiftSkuIds: L,
            giftingOrigin: x,
            setValidatingGiftRecipient: j,
        } = (0, I.wD)(),
        {
            selectedSkuId: G,
            setSelectedSkuId: B,
            selectedSkuPricePreview: Z,
            paymentSourceId: F,
            skuPricePreviewsById: V,
        } = (0, T.JL)(),
        H = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
        { enabled: Y, giftRecommendationAlgorithm: W } = _.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        K = Y && x === N.Wt.DM_CHANNEL,
        z = W === _.u.POPULAR ? R.intl.string(R.t.Kwgrrq) : R.intl.string(R.t.r1huYW),
        q = async (e, t) => {
            j(!0), null != m && E(), (await (0, c.B1)(e.id, t)) || E(R.intl.string(R.t["4kgVqa"])), j(!1);
        };
    (0, o.ZP)(() => {
        null != G &&
            null != D &&
            (O.default.track(C.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: G }), q(D, G));
    });
    let X = (e) => {
            O.default.track(C.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != D && q(D, e), B(e);
        },
        Q = (e) => {
            let t = V[e],
                n = null;
            if (null != t) {
                var i;
                n = null != F && null != (i = t[F]) ? i : t[y.c];
            }
            if (null == n) return;
            let a = (0, v.T4)(n.amount, n.currency);
            return (0, r.jsx)(
                u.Z,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === G,
                    onSelect: (e) => X(e),
                    className: P.recommendedGiftPreview,
                },
                e,
            );
        },
        J = () =>
            (0, r.jsx)(p.Z, {
                sectionTitle: R.intl.string(R.t.B3miEx),
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: P.customGiftMessageWrapper,
                innerClassName: P.customGiftMessage,
            }),
        $ = () =>
            K
                ? (0, r.jsxs)("div", {
                      className: P.bodyColumnLeft,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "header-secondary",
                              className: P.selectGiftTitle,
                              children: z.toLocaleUpperCase(),
                          }),
                          L.map((e) => Q(e)),
                          (0, r.jsx)(k, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: P.bodyColumnMiddle,
                      children: (0, r.jsx)(h.q, { isShopGift: !0 }),
                  }),
        ee = () => {
            if (K)
                return (0, r.jsxs)("div", {
                    className: P.bodyColumnRight,
                    children: [
                        (0, r.jsx)(g.s, { giftRecipient: D }),
                        (0, r.jsx)(h.q, {
                            isShopGift: !0,
                            className: w.adjustedGiftMainAnimation,
                            optionsContainerClassName: w.adjustedGiftBoxOptionContainer,
                        }),
                        J(),
                    ],
                });
            let e = null != Z ? (0, v.T4)(Z.amount, Z.currency) : void 0;
            return x === N.Wt.USER_PROFILE_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: P.bodyColumnRight,
                      children: [
                          (0, r.jsx)(g.s, { giftRecipient: D }),
                          J(),
                          null != e &&
                              null != G &&
                              (0, r.jsx)(u.Z, {
                                  skuId: G,
                                  price: e,
                                  className: P.giftPreview,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                          (0, r.jsx)(U, {
                              handleClose: n,
                              selectedSkuId: G,
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: P.bodyColumnRight,
                      children: [
                          (0, r.jsx)(d.Z, {
                              selectedSkuId: G,
                              className: P.sendTo,
                              validateSelectedGift: q,
                          }),
                          J(),
                          null != e &&
                              (0, r.jsx)(u.Z, {
                                  skuId: G,
                                  price: e,
                                  className: P.giftPreview,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.C3, {
                children: (0, r.jsxs)("div", {
                    className: P.stepBody,
                    children: [$(), ee()],
                }),
            }),
            (0, r.jsx)(A.O3, {
                children: (0, r.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    children: (0, r.jsx)(M, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != m || null == D || D.id === (null == H ? void 0 : H.id) || s.length > N.$n,
                        loading: S,
                    }),
                }),
            }),
        ],
    });
}
function k(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function i() {
        t(),
            (0, a.pTH)(),
            (0, c.mK)({
                openInLayer: !1,
                analyticsLocations: n,
                analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
            });
    }
    return (0, r.jsx)(a.P3F, {
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: P.navigateToShopButton,
            children: [
                (0, r.jsxs)("div", {
                    className: P.navigateToShopBody,
                    children: [
                        (0, r.jsx)("div", {
                            className: P.shopIcon,
                            children: (0, r.jsx)(a.EOn, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--header-primary)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: P.navigateToShopTextWrapper,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "header-primary",
                                    variant: "text-md/semibold",
                                    children: R.intl.string(R.t["1+Co8P"]),
                                }),
                                (0, r.jsx)(a.X6q, {
                                    color: "header-secondary",
                                    variant: "heading-sm/medium",
                                    children: R.intl.string(R.t.nYn52N),
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
function U(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function o() {
        t(),
            (0, a.pTH)(),
            null == n
                ? (0, c.mK)({
                      openInLayer: !1,
                      analyticsLocations: i,
                      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
                  })
                : (0, E.uL)("".concat(C.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n));
    }
    return (0, r.jsx)(a.Avr, {
        text: R.intl.string(R.t.J82mpK),
        onClick: o,
        textVariant: "text-sm/medium",
    });
}
