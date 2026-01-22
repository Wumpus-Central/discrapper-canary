n.d(t, {
    eI: () => U,
    gA: () => M,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(964486),
    o = n(793574),
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
    b = n(285719),
    y = n(976860),
    O = n(287809),
    A = n(79387),
    v = n(954571),
    S = n(580630),
    I = n(937008),
    T = n(156312),
    C = n(166532),
    N = n(482132),
    R = n(652215),
    w = n(788868),
    P = n(985018),
    D = n(931854),
    x = n(120459);
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
    key: C.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(G, j({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => P.intl.string(P.t["W685+b"]),
    },
};
function k(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: s = !1, loading: o = !1 } = e,
        { hasPaymentSources: l } = (0, T.P5)(),
        c = l ? C.pn.REVIEW : C.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, {
                onClick: () => t(c),
                disabled: s,
                loading: o,
                text: P.intl.string(P.t.XiOHRX),
            }),
            i ? (0, r.jsx)(E.A, { onClick: n }) : null,
        ],
    });
}
let U = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: o = "",
            setCustomGiftMessage: l,
            giftRecipientError: _,
            setGiftRecipientError: E,
            validatingGiftRecipient: y,
            giftRecipient: C,
            recommendedGiftSkuIds: N,
            giftingOrigin: L,
            setValidatingGiftRecipient: j,
        } = (0, I.Pv)(),
        {
            selectedSkuId: M,
            setSelectedSkuId: k,
            selectedSkuPricePreview: U,
            paymentSourceId: G,
            skuPricePreviewsById: B,
            skusById: H,
        } = (0, T.P5)(),
        Y = (0, i.bG)([O.default], () => O.default.getCurrentUser()),
        { enabled: W, giftRecommendationAlgorithm: K } = h.P.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        z = (0, p.A)(),
        q = W && L === w.vQ.DM_CHANNEL,
        X = K === h.J.POPULAR ? P.intl.string(P.t.Kwgrrr) : P.intl.string(P.t.r1huYR),
        Z = async (e, t) => {
            j(!0), null != _ && E(), (await (0, c.JJ)(e.id, t)) || E(P.intl.string(P.t["4kgVqQ"])), j(!1);
        };
    (0, s.Ay)(() => {
        null != M &&
            null != C &&
            (L !== w.vQ.DM_CHANNEL_WISHLIST &&
                v.default.track(R.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: M }),
            Z(C, M));
    });
    let Q = (e) => {
            L !== w.vQ.DM_CHANNEL_WISHLIST &&
                v.default.track(R.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }),
                null != C && Z(C, e),
                k(e);
        },
        $ = (e) => {
            let t = B[e],
                n = null;
            if (null != t) {
                var i;
                n = null != G && null != (i = t[G]) ? i : t[A.B];
            }
            if (null == n) return;
            let a = (0, S.$g)(n.amount, n.currency);
            return (0, r.jsx)(
                d.A,
                {
                    skuId: e,
                    price: a,
                    isSelected: e === M,
                    onSelect: (e) => Q(e),
                    className: D.Cb,
                },
                e,
            );
        },
        J = () =>
            (0, r.jsx)(m.A, {
                onTextChange: (e) => (null == l ? void 0 : l(e)),
                pendingText: o,
                currentText: o,
                disableThemedBackground: !0,
                className: D.iX,
                innerClassName: D.pt,
            });
    return {
        renderLeftColumn: () =>
            q
                ? (0, r.jsxs)("div", {
                      className: D.mT,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "text-default",
                              className: D.B7,
                              children: X.toLocaleUpperCase(),
                          }),
                          N.map((e) => $(e)),
                          (0, r.jsx)(V, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: D.qL,
                      children: (0, r.jsx)(g.t, { isShopGift: !0 }),
                  }),
        renderRightColumn: () => {
            if (q)
                return (0, r.jsxs)("div", {
                    className: D.Tc,
                    children: [
                        (0, r.jsx)(b.Z, { giftRecipient: C }),
                        (0, r.jsx)(g.t, {
                            isShopGift: !0,
                            className: x.mx,
                            optionsContainerClassName: x.OZ,
                        }),
                        J(),
                    ],
                });
            let e = (0, u.Ee)({
                selectedSkuPricePreview: U,
                paymentSourceId: G,
                selectedSkuId: M,
                skuPricePreviewsById: B,
                skusById: H,
                formatPrice: S.$g,
            });
            return L === w.vQ.USER_PROFILE_WISHLIST || L === w.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: D.Tc,
                      children: [
                          (0, r.jsx)(b.Z, { giftRecipient: C }),
                          J(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(d.A, {
                                  skuId: M,
                                  price: e,
                                  className: D.uW,
                                  previewHeaderClassName: D.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: D.fi,
                              children: (0, r.jsx)(F, {
                                  handleClose: n,
                                  selectedSkuId: M,
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: D.Tc,
                      children: [
                          (0, r.jsx)(f.A, {
                              selectedSkuId: M,
                              recipients: z,
                              className: D.uh,
                              validateSelectedGift: Z,
                          }),
                          J(),
                          null != e &&
                              (0, r.jsx)(d.A, {
                                  skuId: M,
                                  price: e,
                                  className: D.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != _ || null == C || C.id === (null == Y ? void 0 : Y.id) || o.length > w.Jo,
        loading: y,
    };
};
function G(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderLeftColumn: i,
            renderRightColumn: s,
            onStepChange: o,
            onBackClick: l,
            ctaDisabled: c,
            loading: u,
        } = U({
            handleStepChange: t,
            handleClose: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.dZ, {
                children: (0, r.jsxs)("div", {
                    className: D.Du,
                    children: [i(), s()],
                }),
            }),
            (0, r.jsx)(N.UX, {
                children: (0, r.jsx)(a.jlY, {
                    "data-migration-pending": !0,
                    justify: _.A.Justify.BETWEEN,
                    align: _.A.Align.CENTER,
                    children: (0, r.jsx)(k, {
                        onStepChange: o,
                        onBackClick: l,
                        disabled: c,
                        loading: u,
                    }),
                }),
            }),
        ],
    });
}
function V(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function i() {
        t(),
            (0, a.s7G)(),
            (0, c.Cz)({
                analyticsLocations: n,
                analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
            });
    }
    return (0, r.jsx)(a.DUT, {
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: D.D8,
            children: [
                (0, r.jsxs)("div", {
                    className: D.V1,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.sV,
                            children: (0, r.jsx)(a.U1X, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--text-strong)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: D.Lc,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "text-strong",
                                    variant: "text-md/semibold",
                                    children: P.intl.string(P.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: P.intl.string(P.t.nYn52B),
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
        { analyticsLocations: i } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function s() {
        t(),
            (0, a.s7G)(),
            null == n
                ? (0, c.Cz)({
                      analyticsLocations: i,
                      analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
                  })
                : (0, y.pX)("".concat(R.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n));
    }
    return (0, r.jsx)(a.QWc, {
        text: P.intl.string(P.t.J82mpK),
        onClick: s,
        textVariant: "text-sm/medium",
    });
}
