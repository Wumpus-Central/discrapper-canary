"use strict";
n.d(t, { e: () => N });
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
    h = n(871181),
    p = n(318007),
    g = n(285719),
    E = n(976860),
    A = n(287809),
    I = n(954571),
    T = n(937008),
    y = n(156312),
    S = n(652215),
    v = n(788868),
    C = n(985018),
    b = n(931854);
let N = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: a = "",
            setCustomGiftMessage: o,
            giftRecipientError: l,
            setGiftRecipientError: E,
            validatingGiftRecipient: N,
            giftRecipient: O,
            giftingOrigin: D,
            setValidatingGiftRecipient: L,
        } = (0, T.Pv)(),
        {
            selectedSkuId: w,
            selectedSkuPricePreview: x,
            paymentSourceId: P,
            skuPricePreviewsById: M,
            skusById: k,
        } = (0, y.P5)(),
        U = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        G = (0, f.A)(),
        F = async (e, t) => {
            L(!0), null != l && E(), (await (0, u.JJ)(e.id, t)) || E(C.intl.string(C.t["4kgVqQ"])), L(!1);
        };
    (0, s.Ay)(() => {
        null != w &&
            null != O &&
            (D !== v.vQ.DM_CHANNEL_WISHLIST &&
                I.default.track(S.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: w }),
            F(O, w));
    });
    let V = () =>
        (0, r.jsx)(h.A, {
            onTextChange: (e) => o?.(e),
            pendingText: a,
            currentText: a,
            disableThemedBackground: !0,
            className: b.iX,
            innerClassName: b.pt,
        });
    return {
        renderLeftColumn: () => (0, r.jsx)("div", { className: b.qL, children: (0, r.jsx)(p.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            let e = (0, c.pA)({
                selectedSkuPricePreview: x,
                paymentSourceId: P,
                selectedSkuId: w,
                skuPricePreviewsById: M,
                skusById: k,
            });
            return D === v.vQ.USER_PROFILE_WISHLIST || D === v.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(g.Z, { giftRecipient: O }),
                          V(),
                          null != e &&
                              null != w &&
                              (0, r.jsx)(d.A, {
                                  skuId: w,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: b.uW,
                                  previewHeaderClassName: b.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: b.fi,
                              children: (0, r.jsx)(R, { handleClose: n, selectedSkuId: w }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(_.A, {
                              selectedSkuId: w,
                              recipients: G,
                              className: b.uh,
                              validateSelectedGift: F,
                          }),
                          V(),
                          null != e &&
                              null != w &&
                              (0, r.jsx)(d.A, {
                                  skuId: w,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: b.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != l || null == O || O.id === U?.id || a.length > v.Jo,
        loading: N,
    };
};
function R(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function s() {
        t(),
            (0, a.s7G)(),
            null == n
                ? (0, u.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                : (0, E.pX)(`${S.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
    }
    return (0, r.jsx)(a.QWc, { text: C.intl.string(C.t.J82mpK), onClick: s, textVariant: "text-sm/medium" });
}
