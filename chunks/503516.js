n.d(t, { e: () => v });
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(192308),
    s = n(123292),
    a = n(964486),
    o = n(793574),
    u = n(688810),
    d = n(427675),
    c = n(94420),
    C = n(979286),
    p = n(993408),
    m = n(482246),
    E = n(734925),
    A = n(687033),
    h = n(871181),
    f = n(318007),
    _ = n(285719),
    g = n(976860),
    T = n(287809),
    x = n(954571),
    S = n(937008),
    I = n(156312),
    O = n(652215),
    y = n(788868),
    N = n(985018),
    R = n(353791);
let v = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: s,
            giftRecipientError: o,
            setGiftRecipientError: u,
            validatingGiftRecipient: g,
            giftRecipient: v,
            giftingOrigin: b,
            setValidatingGiftRecipient: L,
        } = (0, S.Pv)(),
        k = (0, c.t4)((e) => e.selectedSkuId),
        { paymentSourceId: j } = (0, I.P5)(),
        U = (0, d.Hf)(),
        M = (0, d.RR)(),
        w = (0, d.gU)(),
        F = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        D = (0, A.A)(),
        H = async (e, t) => {
            L(!0), null != o && u(), (await (0, C.JJ)(e.id, t)) || u(N.intl.string(N.t["4kgVqQ"])), L(!1);
        };
    (0, a.Ay)(() => {
        null != k &&
            null != v &&
            (b !== y.vQ.DM_CHANNEL_WISHLIST &&
                x.default.track(O.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: k }),
            H(v, k));
    });
    let G = () =>
        (0, l.jsx)(h.A, {
            onTextChange: (e) => s?.(e),
            pendingText: i,
            currentText: i,
            disableThemedBackground: !0,
            className: R.iX,
            innerClassName: R.pt,
        });
    return {
        renderLeftColumn: () => (0, l.jsx)("div", { className: R.qL, children: (0, l.jsx)(f.t, { isShopGift: !0 }) }),
        renderRightColumn: () => {
            let e = (0, p.pA)({
                selectedSkuPricePreview: U,
                paymentSourceId: j,
                selectedSkuId: k,
                skuPricePreviewsById: M,
                skusById: w,
            });
            return b === y.vQ.USER_PROFILE_WISHLIST || b === y.vQ.DM_CHANNEL_WISHLIST
                ? (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(_.Z, { giftRecipient: v }),
                          G(),
                          null != e &&
                              null != k &&
                              (0, l.jsx)(m.A, {
                                  skuId: k,
                                  priceAmount: e.amount,
                                  priceCurrency: e.currency,
                                  className: R.uW,
                                  previewHeaderClassName: R.vX,
                                  isSelected: !0,
                                  shouldDisplayHeader: !0,
                                  hideProfilePreview: !0,
                              }),
                          (0, l.jsx)("div", {
                              className: R.fi,
                              children: (0, l.jsx)(P, { handleClose: n, selectedSkuId: k }),
                          }),
                      ],
                  })
                : (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(E.A, {
                              selectedSkuId: k,
                              recipients: D,
                              className: R.uh,
                              validateSelectedGift: H,
                          }),
                          G(),
                          null != e &&
                              null != k &&
                              (0, l.jsx)(m.A, {
                                  skuId: k,
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
        ctaDisabled: null != o || null == v || v.id === F?.id || i.length > y.Jo,
        loading: g,
    };
};
function P(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: r } = (0, u.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, l.jsx)(s.Q, {
        text: N.intl.string(N.t.J82mpK),
        onClick: function () {
            t(),
                (0, i.closeAllModals)(),
                null == n
                    ? (0, C.Cz)({ analyticsLocations: r, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, g.pX)(`${O.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
