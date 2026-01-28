n.d(t, {
    eI: () => k,
    gA: () => M,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(964486),
    s = n(793574),
    l = n(688810),
    c = n(979286),
    u = n(993408),
    d = n(482246),
    f = n(734925),
    p = n(687033),
    _ = n(235986),
    h = n(547065),
    m = n(871181),
    g = n(318007),
    E = n(683433),
    y = n(285719),
    b = n(976860),
    O = n(287809),
    v = n(79387),
    A = n(954571),
    I = n(937008),
    S = n(156312),
    T = n(166532),
    C = n(482132),
    N = n(652215),
    w = n(788868),
    R = n(985018),
    P = n(931854),
    D = n(120459);

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

function x(e) {
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
    key: T.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(U, x({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => R.intl.string(R.t["W685+b"]),
    },
};

function j(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: o = !1, loading: s = !1 } = e,
        { hasPaymentSources: l } = (0, S.P5)(),
        c = l ? T.pn.REVIEW : T.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, {
                onClick: () => t(c),
                disabled: o,
                loading: s,
                text: R.intl.string(R.t.XiOHRX),
            }),
            i
                ? (0, r.jsx)(E.A, {
                      onClick: n,
                  })
                : null,
        ],
    });
}
let k = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: l,
            giftRecipientError: _,
            setGiftRecipientError: E,
            validatingGiftRecipient: b,
            giftRecipient: T,
            recommendedGiftSkuIds: C,
            giftingOrigin: L,
            setValidatingGiftRecipient: x,
        } = (0, I.Pv)(),
        {
            selectedSkuId: M,
            setSelectedSkuId: j,
            selectedSkuPricePreview: k,
            paymentSourceId: U,
            skuPricePreviewsById: V,
            skusById: B,
        } = (0, S.P5)(),
        H = (0, i.bG)([O.default], () => O.default.getCurrentUser()),
        { enabled: Y, giftRecommendationAlgorithm: W } = h.P.useExperiment(
            {
                location: "CollectiblesPaymentModalGiftCustomizationStep",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        K = (0, p.A)(),
        z = Y && L === w.vQ.DM_CHANNEL,
        q = W === h.J.POPULAR ? R.intl.string(R.t.Kwgrrr) : R.intl.string(R.t.r1huYR),
        Z = async (e, t) => {
            x(!0), null != _ && E(), (await (0, c.JJ)(e.id, t)) || E(R.intl.string(R.t["4kgVqQ"])), x(!1);
        };
    (0, o.Ay)(() => {
        null != M &&
            null != T &&
            (L !== w.vQ.DM_CHANNEL_WISHLIST &&
                A.default.track(N.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
                    sku_id: M,
                }),
            Z(T, M));
    });
    let Q = (e) => {
            L !== w.vQ.DM_CHANNEL_WISHLIST &&
                A.default.track(N.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
                    sku_id: e,
                }),
                null != T && Z(T, e),
                j(e);
        },
        X = (e) => {
            let t = V[e],
                n = null;
            if (null != t) {
                var i;
                n = null != U && null != (i = t[U]) ? i : t[v.B];
            }
            if (null != n)
                return (0, r.jsx)(
                    d.A,
                    {
                        skuId: e,
                        priceAmount: n.amount,
                        priceCurrency: n.currency,
                        isSelected: e === M,
                        onSelect: (e) => Q(e),
                        className: P.Cb,
                    },
                    e,
                );
        },
        J = () =>
            (0, r.jsx)(m.A, {
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: P.iX,
                innerClassName: P.pt,
            });
    return {
        renderLeftColumn: () =>
            z
                ? (0, r.jsxs)("div", {
                      className: P.mT,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "text-default",
                              className: P.B7,
                              children: q.toLocaleUpperCase(),
                          }),
                          C.map((e) => X(e)),
                          (0, r.jsx)(G, {
                              handleClose: n,
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: P.qL,
                      children: (0, r.jsx)(g.t, {
                          isShopGift: !0,
                      }),
                  }),
        renderRightColumn: () => {
            if (z)
                return (0, r.jsxs)("div", {
                    className: P.Tc,
                    children: [
                        (0, r.jsx)(y.Z, {
                            giftRecipient: T,
                        }),
                        (0, r.jsx)(g.t, {
                            isShopGift: !0,
                            className: D.mx,
                            optionsContainerClassName: D.OZ,
                        }),
                        J(),
                    ],
                });
            let e = (0, u.pA)({
                selectedSkuPricePreview: k,
                paymentSourceId: U,
                selectedSkuId: M,
                skuPricePreviewsById: V,
                skusById: B,
            });
            return L === w.vQ.USER_PROFILE_WISHLIST || L === w.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: P.Tc,
                      children: [
                          (0, r.jsx)(y.Z, {
                              giftRecipient: T,
                          }),
                          J(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(d.A, {
                                  skuId: M,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: P.uW,
                                  previewHeaderClassName: P.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: P.fi,
                              children: (0, r.jsx)(F, {
                                  handleClose: n,
                                  selectedSkuId: M,
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: P.Tc,
                      children: [
                          (0, r.jsx)(f.A, {
                              selectedSkuId: M,
                              recipients: K,
                              className: P.uh,
                              validateSelectedGift: Z,
                          }),
                          J(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(d.A, {
                                  skuId: M,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: P.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != _ || null == T || T.id === (null == H ? void 0 : H.id) || s.length > w.Jo,
        loading: b,
    };
};

function U(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderLeftColumn: i,
            renderRightColumn: o,
            onStepChange: s,
            onBackClick: l,
            ctaDisabled: c,
            loading: u,
        } = k({
            handleStepChange: t,
            handleClose: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.dZ, {
                children: (0, r.jsxs)("div", {
                    className: P.Du,
                    children: [i(), o()],
                }),
            }),
            (0, r.jsx)(C.UX, {
                children: (0, r.jsx)(a.jlY, {
                    "data-migration-pending": !0,
                    justify: _.A.Justify.BETWEEN,
                    align: _.A.Align.CENTER,
                    children: (0, r.jsx)(j, {
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

function G(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.Ay)(s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

    function i() {
        t(),
            (0, a.s7G)(),
            (0, c.Cz)({
                analyticsLocations: n,
                analyticsSource: s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
            });
    }
    return (0, r.jsx)(a.DUT, {
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: P.D8,
            children: [
                (0, r.jsxs)("div", {
                    className: P.V1,
                    children: [
                        (0, r.jsx)("div", {
                            className: P.sV,
                            children: (0, r.jsx)(a.U1X, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--text-strong)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: P.Lc,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "text-strong",
                                    variant: "text-md/semibold",
                                    children: R.intl.string(R.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: R.intl.string(R.t.nYn52B),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.KS6, {
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
        { analyticsLocations: i } = (0, l.Ay)(s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

    function o() {
        t(),
            (0, a.s7G)(),
            null == n
                ? (0, c.Cz)({
                      analyticsLocations: i,
                      analyticsSource: s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
                  })
                : (0, b.pX)("".concat(N.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n));
    }
    return (0, r.jsx)(a.QWc, {
        text: R.intl.string(R.t.J82mpK),
        onClick: o,
        textVariant: "text-sm/medium",
    });
}
