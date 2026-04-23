"use strict";
n.d(t, { e: () => b });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(192308),
    a = n(123292),
    o = n(964486),
    l = n(793574),
    u = n(688810),
    c = n(427675),
    d = n(94420),
    _ = n(979286),
    f = n(993408),
    p = n(482246),
    h = n(734925),
    E = n(687033),
    m = n(871181),
    g = n(318007),
    A = n(285719),
    I = n(976860),
    T = n(287809),
    S = n(954571),
    y = n(937008),
    N = n(156312),
    v = n(652215),
    C = n(788868),
    O = n(985018),
    R = n(353791);
let b = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: s = "",
            setCustomGiftMessage: a,
            giftRecipientError: l,
            setGiftRecipientError: u,
            validatingGiftRecipient: I,
            giftRecipient: b,
            giftingOrigin: L,
            setValidatingGiftRecipient: w,
        } = (0, y.Pv)(),
        M = (0, d.t4)((e) => e.selectedSkuId),
        { paymentSourceId: P } = (0, N.P5)(),
        x = (0, c.Hf)(),
        k = (0, c.RR)(),
        U = (0, c.gU)(),
        G = (0, i.bG)([T.default], () => T.default.getCurrentUser()),
        F = (0, E.A)(),
        V = async (e, t) => {
            w(!0), null != l && u(), (await (0, _.JJ)(e.id, t)) || u(O.intl.string(O.t["4kgVqQ"])), w(!1);
        };
    (0, o.Ay)(() => {
        null != M &&
            null != b &&
            (L !== C.vQ.DM_CHANNEL_WISHLIST &&
                S.default.track(v.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: M }),
            V(b, M));
    });
    let B = () =>
        (0, r.jsx)(m.A, {
            onTextChange: (e) => a?.(e),
            pendingText: s,
            currentText: s,
            disableThemedBackground: !0,
            className: R.iX,
            innerClassName: R.pt,
        });
    return {
        renderLeftColumn: () => (0, r.jsx)("div", { className: R.qL, children: (0, r.jsx)(g.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            let e = (0, f.pA)({
                selectedSkuPricePreview: x,
                paymentSourceId: P,
                selectedSkuId: M,
                skuPricePreviewsById: k,
                skusById: U,
            });
            return L === C.vQ.USER_PROFILE_WISHLIST || L === C.vQ.DM_CHANNEL_WISHLIST
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(A.Z, { giftRecipient: b }),
                          B(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(p.A, {
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
                              children: (0, r.jsx)(D, { handleClose: n, selectedSkuId: M }),
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(h.A, {
                              selectedSkuId: M,
                              recipients: F,
                              className: R.uh,
                              validateSelectedGift: V,
                          }),
                          B(),
                          null != e &&
                              null != M &&
                              (0, r.jsx)(p.A, {
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
        ctaDisabled: null != l || null == b || b.id === G?.id || s.length > C.Jo,
        loading: I,
    };
};
function D(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, u.Ay)(l.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(a.Q, {
        text: O.intl.string(O.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, _.Cz)({ analyticsLocations: i, analyticsSource: l.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, I.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
