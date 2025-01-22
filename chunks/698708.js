r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(881052),
    l = r(128069),
    u = r(63063),
    c = r(563132),
    d = r(409813),
    f = r(981631),
    p = r(388032);
function h(e) {
    let { planError: n, purchaseErrorBlockRef: r, className: h } = e,
        { currencies: _, paymentError: m, purchaseError: g, purchasePreviewError: E, setSelectedPlanNotification: v } = (0, c.usePaymentContext)(),
        y = null;
    null != E ? (y = E) : null != m && null == (0, d.ly)(m) ? (y = m) : null != g ? (y = g) : null != n && (y = n);
    let b = _.length > 1,
        I = null != y ? y.message : '';
    if (null != y && y instanceof s.HF && (y.code === l.SM.CARD_DECLINED && b && (I += ' '.concat(p.intl.string(p.t.iWvwQU))), y.code === l.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (I = p.intl.string(p.t.ypuSd3)), y.code === f.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (I = p.intl.string(p.t.mXMmWF)), y.code === l.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (I = p.intl.string(p.t.mC1Fj4)), y.code === l.SM.INVALID_BILLING_ADDRESS)) {
        let e = p.intl.format(p.t.BPDKoK, { helpdeskArticle: u.Z.getArticleURL(f.BhN.BILLING).concat(f.Bjg.INVALID_BILLING_ADDRESS) });
        I = (0, i.jsxs)(i.Fragment, {
            children: [p.intl.string(p.t['yVIm/P']), ' ', e]
        });
    }
    return (a.useEffect(() => {
        null != y && v(null);
    }, [y, v]),
    null == y)
        ? null
        : (0, i.jsx)('div', {
              className: h,
              children: (0, i.jsx)(o.FormErrorBlock, {
                  ref: r,
                  children: I
              })
          });
}
