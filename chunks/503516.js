"use strict";
n.d(t, { e: () => O });
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
    p = n(547065),
    h = n(871181),
    m = n(318007),
    g = n(285719),
    E = n(976860),
    A = n(287809),
    I = n(79387),
    T = n(954571),
    y = n(937008),
    S = n(156312),
    v = n(652215),
    C = n(788868),
    b = n(985018),
    N = n(931854),
    R = n(120459);
let O = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: o = "",
            setCustomGiftMessage: l,
            giftRecipientError: E,
            setGiftRecipientError: O,
            validatingGiftRecipient: w,
            giftRecipient: x,
            recommendedGiftSkuIds: P,
            giftingOrigin: M,
            setValidatingGiftRecipient: k,
        } = (0, y.Pv)(),
        {
            selectedSkuId: U,
            setSelectedSkuId: G,
            selectedSkuPricePreview: V,
            paymentSourceId: F,
            skuPricePreviewsById: B,
            skusById: j,
        } = (0, S.P5)(),
        H = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: Y, giftRecommendationAlgorithm: W } = p.P.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
        ),
        K = (0, f.A)(),
        z = Y && M === C.vQ.DM_CHANNEL,
        $ = W === p.J.POPULAR ? b.intl.string(b.t.Kwgrrr) : b.intl.string(b.t.r1huYR),
        q = async (e, t) => {
            k(!0), null != E && O(), (await (0, u.JJ)(e.id, t)) || O(b.intl.string(b.t["4kgVqQ"])), k(!1);
        };
    (0, s.Ay)(() => {
        null != U &&
            null != x &&
            (M !== C.vQ.DM_CHANNEL_WISHLIST &&
                T.default.track(v.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: U }),
            q(x, U));
    });
    let Z = (e) => {
            M !== C.vQ.DM_CHANNEL_WISHLIST &&
                T.default.track(v.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }),
                null != x && q(x, e),
                G(e);
        },
        Q = (e) => {
            let t = B[e],
                n = null;
            if ((null != t && (n = null != F ? (t[F] ?? t[I.B]) : t[I.B]), null != n))
                return (0, r.jsx)(
                    d.A,
                    {
                        skuId: e,
                        priceAmount: n.amount,
                        priceCurrency: n.currency,
                        isSelected: e === U,
                        onSelect: (e) => Z(e),
                        className: N.Cb,
                    },
                    e,
                );
        },
        X = () =>
            (0, r.jsx)(h.A, {
                onTextChange: (e) => l?.(e),
                pendingText: o,
                currentText: o,
                disableThemedBackground: !0,
                className: N.iX,
                innerClassName: N.pt,
            });
    return {
        renderLeftColumn: () =>
            z
                ? (0, r.jsxs)("div", {
                      className: N.mT,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/bold",
                              color: "text-default",
                              className: N.B7,
                              children: $.toLocaleUpperCase(),
                          }),
                          P.map((e) => Q(e)),
                          (0, r.jsx)(D, { handleClose: n }),
                      ],
                  })
                : (0, r.jsx)("div", { className: N.qL, children: (0, r.jsx)(m.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            if (z)
                return (0, r.jsxs)("div", {
                    className: N.Tc,
                    children: [
                        (0, r.jsx)(g.Z, { giftRecipient: x }),
                        (0, r.jsx)(m.t, { isShopGift: !0, className: R.mx, optionsContainerClassName: R.OZ }),
                        X(),
                    ],
                });
            let e = (0, c.pA)({
                selectedSkuPricePreview: V,
                paymentSourceId: F,
                selectedSkuId: U,
                skuPricePreviewsById: B,
                skusById: j,
            });
            return M === C.vQ.USER_PROFILE_WISHLIST || M === C.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      className: N.Tc,
                      children: [
                          (0, r.jsx)(g.Z, { giftRecipient: x }),
                          X(),
                          null != e &&
                              null != U &&
                              (0, r.jsx)(d.A, {
                                  skuId: U,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: N.uW,
                                  previewHeaderClassName: N.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: N.fi,
                              children: (0, r.jsx)(L, { handleClose: n, selectedSkuId: U }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: N.Tc,
                      children: [
                          (0, r.jsx)(_.A, {
                              selectedSkuId: U,
                              recipients: K,
                              className: N.uh,
                              validateSelectedGift: q,
                          }),
                          X(),
                          null != e &&
                              null != U &&
                              (0, r.jsx)(d.A, {
                                  skuId: U,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: N.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != E || null == x || x.id === H?.id || o.length > C.Jo,
        loading: w,
    };
};
function D(e) {
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
            className: N.D8,
            children: [
                (0, r.jsxs)("div", {
                    className: N.V1,
                    children: [
                        (0, r.jsx)("div", {
                            className: N.sV,
                            children: (0, r.jsx)(a.U1X, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: "var(--text-strong)",
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: N.Lc,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: "text-strong",
                                    variant: "text-md/semibold",
                                    children: b.intl.string(b.t["1+Co8G"]),
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: b.intl.string(b.t.nYn52B),
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
function L(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function s() {
        t(),
            (0, a.s7G)(),
            null == n
                ? (0, u.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                : (0, E.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
    }
    return (0, r.jsx)(a.QWc, { text: b.intl.string(b.t.J82mpK), onClick: s, textVariant: "text-sm/medium" });
}
