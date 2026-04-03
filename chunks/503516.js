"use strict";
n.d(t, { e: () => R });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(964486),
    o = n(793574),
    l = n(688810),
    u = n(979286),
    c = n(993408),
    d = n(482246),
    _ = n(734925),
    f = n(687033),
    p = n(871181),
    h = n(318007),
    m = n(285719),
    E = n(976860),
    g = n(287809),
    A = n(954571),
    I = n(937008),
    T = n(156312),
    S = n(987616),
    y = n(652215),
    v = n(788868),
    N = n(985018),
    C = n(204111);
let R = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: o,
            giftRecipientError: l,
            setGiftRecipientError: E,
            validatingGiftRecipient: R,
            giftRecipient: b,
            giftingOrigin: D,
            setValidatingGiftRecipient: L,
        } = (0, I.Pv)(),
        { selectedSkuId: w, paymentSourceId: M } = (0, T.P5)(),
        x = (0, S.Hf)(),
        P = (0, S.RR)(),
        k = (0, S.gU)(),
        U = (0, i.bG)([g.default], () => g.default.getCurrentUser()),
        G = (0, f.A)(),
        F = async (e, t) => {
            L(!0), null != l && E(), (await (0, u.JJ)(e.id, t)) || E(N.intl.string(N.t["4kgVqQ"])), L(!1);
        };
    (0, a.Ay)(() => {
        null != w &&
            null != b &&
            (D !== v.vQ.DM_CHANNEL_WISHLIST &&
                A.default.track(y.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: w }),
            F(b, w));
    });
    let V = () =>
        (0, r.jsx)(p.A, {
            onTextChange: (e) => o?.(e),
            pendingText: s,
            currentText: s,
            disableThemedBackground: !0,
            className: C.iX,
            innerClassName: C.pt,
        });
    return {
        renderLeftColumn: () => (0, r.jsx)("div", { className: C.qL, children: (0, r.jsx)(h.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            let e = (0, c.pA)({
                selectedSkuPricePreview: x,
                paymentSourceId: M,
                selectedSkuId: w,
                skuPricePreviewsById: P,
                skusById: k,
            });
            return D === v.vQ.USER_PROFILE_WISHLIST || D === v.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(m.Z, { giftRecipient: b }),
                          V(),
                          null != e &&
                              null != w &&
                              (0, r.jsx)(d.A, {
                                  skuId: w,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: C.uW,
                                  previewHeaderClassName: C.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: C.fi,
                              children: (0, r.jsx)(O, { handleClose: n, selectedSkuId: w }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(_.A, {
                              selectedSkuId: w,
                              recipients: G,
                              className: C.uh,
                              validateSelectedGift: F,
                          }),
                          V(),
                          null != e &&
                              null != w &&
                              (0, r.jsx)(d.A, {
                                  skuId: w,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: C.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != l || null == b || b.id === U?.id || s.length > v.Jo,
        loading: R,
    };
};
function O(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function a() {
        t(),
            (0, s.s7G)(),
            null == n
                ? (0, u.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                : (0, E.pX)(`${y.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
    }
    return (0, r.jsx)(s.QWc, { text: N.intl.string(N.t.J82mpK), onClick: a, textVariant: "text-sm/medium" });
}
