"use strict";
n.d(t, { e: () => O });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(964486),
    o = n(793574),
    l = n(688810),
    u = n(427675),
    c = n(94420),
    d = n(979286),
    _ = n(993408),
    f = n(482246),
    p = n(734925),
    h = n(687033),
    m = n(871181),
    E = n(318007),
    g = n(285719),
    A = n(976860),
    I = n(287809),
    T = n(954571),
    S = n(937008),
    y = n(156312),
    v = n(652215),
    N = n(788868),
    C = n(985018),
    R = n(353791);
let O = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: o,
            giftRecipientError: l,
            setGiftRecipientError: A,
            validatingGiftRecipient: O,
            giftRecipient: D,
            giftingOrigin: L,
            setValidatingGiftRecipient: w,
        } = (0, S.Pv)(),
        M = (0, c.t4)((e) => e.selectedSkuId),
        { paymentSourceId: P } = (0, y.P5)(),
        x = (0, u.Hf)(),
        k = (0, u.RR)(),
        U = (0, u.gU)(),
        G = (0, i.bG)([I.default], () => I.default.getCurrentUser()),
        F = (0, h.A)(),
        V = async (e, t) => {
            w(!0), null != l && A(), (await (0, d.JJ)(e.id, t)) || A(C.intl.string(C.t["4kgVqQ"])), w(!1);
        };
    (0, a.Ay)(() => {
        null != M &&
            null != D &&
            (L !== N.vQ.DM_CHANNEL_WISHLIST &&
                T.default.track(v.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: M }),
            V(D, M));
    });
    let B = () =>
        (0, r.jsx)(m.A, {
            onTextChange: (e) => o?.(e),
            pendingText: s,
            currentText: s,
            disableThemedBackground: !0,
            className: R.iX,
            innerClassName: R.pt,
        });
    return {
        renderLeftColumn: () => (0, r.jsx)("div", { className: R.qL, children: (0, r.jsx)(E.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            let e = (0, _.pA)({
                selectedSkuPricePreview: x,
                paymentSourceId: P,
                selectedSkuId: M,
                skuPricePreviewsById: k,
                skusById: U,
            });
            return L === N.vQ.USER_PROFILE_WISHLIST || L === N.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(g.Z, { giftRecipient: D }),
                          B(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(f.A, {
                                  skuId: M,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: R.uW,
                                  previewHeaderClassName: R.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, r.jsx)("div", {
                              className: R.fi,
                              children: (0, r.jsx)(b, { handleClose: n, selectedSkuId: M }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(p.A, {
                              selectedSkuId: M,
                              recipients: F,
                              className: R.uh,
                              validateSelectedGift: V,
                          }),
                          B(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(f.A, {
                                  skuId: M,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: R.Ng,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                              }),
                      ],
                  });
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != l || null == D || D.id === G?.id || s.length > N.Jo,
        loading: O,
    };
};
function b(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    function a() {
        t(),
            (0, s.s7G)(),
            null == n
                ? (0, d.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                : (0, A.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
    }
    return (0, r.jsx)(s.QWc, { text: C.intl.string(C.t.J82mpK), onClick: a, textVariant: "text-sm/medium" });
}
