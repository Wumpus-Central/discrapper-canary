"use strict";
n.d(t, { eI: () => M, gA: () => x });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(964486),
    o = n(793574),
    l = n(688810),
    u = n(979286),
    c = n(993408),
    d = n(482246),
    _ = n(734925),
    f = n(687033),
    p = n(235986),
    h = n(547065),
    m = n(871181),
    g = n(318007),
    E = n(683433),
    A = n(285719),
    I = n(976860),
    T = n(287809),
    y = n(79387),
    S = n(954571),
    v = n(937008),
    C = n(156312),
    b = n(166532),
    N = n(482132),
    R = n(652215),
    O = n(788868),
    D = n(985018),
    L = n(931854),
    w = n(120459);
let x = {
    key: b.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(k, { ...e }),
    options: { isLargeModal: !0, useBreadcrumbLabel: () => D.intl.string(D.t["W685+b"]) },
};
function P(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: s = !1, loading: o = !1 } = e,
        { hasPaymentSources: l } = (0, C.P5)(),
        u = l ? b.pn.REVIEW : b.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, { onClick: () => t(u), disabled: s, loading: o, text: D.intl.string(D.t.XiOHRX) }),
            i ? (0, r.jsx)(E.A, { onClick: n }) : null,
        ],
    });
}
let M = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: o = "",
            setCustomGiftMessage: l,
            giftRecipientError: p,
            setGiftRecipientError: E,
            validatingGiftRecipient: I,
            giftRecipient: b,
            recommendedGiftSkuIds: N,
            giftingOrigin: x,
            setValidatingGiftRecipient: P,
        } = (0, v.Pv)(),
        {
            selectedSkuId: M,
            setSelectedSkuId: k,
            selectedSkuPricePreview: V,
            paymentSourceId: F,
            skuPricePreviewsById: B,
            skusById: j,
        } = (0, C.P5)(),
        H = (0, i.bG)([T.default], () => T.default.getCurrentUser()),
        { enabled: Y, giftRecommendationAlgorithm: W } = h.P.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        K = (0, f.A)(),
        z = Y && x === O.vQ.DM_CHANNEL,
        $ = W === h.J.POPULAR ? D.intl.string(D.t.Kwgrrr) : D.intl.string(D.t.r1huYR),
        q = async (e, t) => {
            P(!0), null != p && E(), (await (0, u.JJ)(e.id, t)) || E(D.intl.string(D.t["4kgVqQ"])), P(!1);
        };
    (0, s.Ay)(() => {
        null != M &&
            null != b &&
            (x !== O.vQ.DM_CHANNEL_WISHLIST &&
                S.default.track(R.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: M }),
            q(b, M));
    });
    let Z = (e) => {
            x !== O.vQ.DM_CHANNEL_WISHLIST &&
                S.default.track(R.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }),
                null != b && q(b, e),
                k(e);
        },
        Q = (e) => {
            let t = B[e],
                n = null;
            if ((null != t && (n = null != F ? (t[F] ?? t[y.B]) : t[y.B]), null != n))
                return (0, r.jsx)(
                    d.A,
                    {
                        skuId: e,
                        priceAmount: n.amount,
                        priceCurrency: n.currency,
                        isSelected: e === M,
                        onSelect: (e) => Z(e),
                        className: L.Cb,
                    },
                    e,
                );
        },
        X = () =>
            (0, r.jsx)(m.A, {
                onTextChange: (e) => l?.(e),
                pendingText: o,
                currentText: o,
                disableThemedBackground: !0,
                className: L.iX,
                innerClassName: L.pt,
            });
    return {
        renderLeftColumn: () =>
            z
                ? (0, r.jsxs)("div", {
                      className: L.mT,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "text-default",
                              className: L.B7,
                              children: $.toLocaleUpperCase(),
                          }),
                          N.map((e) => Q(e)),
                          (0, r.jsx)(U, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", { className: L.qL, children: (0, r.jsx)(g.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            if (z)
                return (0, r.jsxs)("div", {
                    className: L.Tc,
                    children: [
                        (0, r.jsx)(A.Z, { giftRecipient: b }),
                        (0, r.jsx)(g.t, { isShopGift: !0, className: w.mx, optionsContainerClassName: w.OZ }),
                        X(),
                    ],
                });
            let e = (0, c.pA)({
                selectedSkuPricePreview: V,
                paymentSourceId: F,
                selectedSkuId: M,
                skuPricePreviewsById: B,
                skusById: j,
            });
            return x === O.vQ.USER_PROFILE_WISHLIST || x === O.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: L.Tc,
                      children: [
                          (0, r.jsx)(A.Z, { giftRecipient: b }),
                          X(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(d.A, {
                                  skuId: M,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: L.uW,
                                  previewHeaderClassName: L.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: L.fi,
                              children: (0, r.jsx)(G, { handleClose: n, selectedSkuId: M }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: L.Tc,
                      children: [
                          (0, r.jsx)(_.A, {
                              selectedSkuId: M,
                              recipients: K,
                              className: L.uh,
                              validateSelectedGift: q,
                          }),
                          X(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(d.A, {
                                  skuId: M,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: L.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != p || null == b || b.id === H?.id || o.length > O.Jo,
        loading: I,
    };
};
function k(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderLeftColumn: i,
            renderRightColumn: s,
            onStepChange: o,
            onBackClick: l,
            ctaDisabled: u,
            loading: c,
        } = M({ handleStepChange: t, handleClose: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.dZ, { children: (0, r.jsxs)("div", { className: L.Du, children: [i(), s()] }) }),
            (0, r.jsx)(N.UX, {
                children: (0, r.jsx)(a.jlY, {
                    "data-migration-pending": !0,
                    justify: p.A.Justify.BETWEEN,
                    align: p.A.Align.CENTER,
                    children: (0, r.jsx)(P, { onStepChange: o, onBackClick: l, disabled: u, loading: c }),
                }),
            }),
        ],
    });
}
function U(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function i() {
        t(),
            (0, a.s7G)(),
            (0, u.Cz)({ analyticsLocations: n, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL });
    }
    return (0, r.jsx)(a.DUT, {
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: L.D8,
            children: [
                (0, r.jsxs)("div", {
                    className: L.V1,
                    children: [
                        (0, r.jsx)("div", {
                            className: L.sV,
                            children: (0, r.jsx)(a.U1X, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--text-strong)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: L.Lc,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "text-strong",
                                    variant: "text-md/semibold",
                                    children: D.intl.string(D.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: D.intl.string(D.t.nYn52B),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.KS6, { size: "custom", width: 20, height: 20, color: "var(--text-strong)" }),
                }),
            ],
        }),
    });
}
function G(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function s() {
        t(),
            (0, a.s7G)(),
            null == n
                ? (0, u.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                : (0, I.pX)(`${R.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
    }
    return (0, r.jsx)(a.QWc, { text: D.intl.string(D.t.J82mpK), onClick: s, textVariant: "text-sm/medium" });
}
