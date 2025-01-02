n.d(t, {
    Z: function () {
        return m;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(881052),
    i = n(128069),
    o = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    p = n(388032);
function m(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: m } = e,
        { currencies: h, paymentError: A, purchaseError: E, purchasePreviewError: N, setSelectedPlanNotification: f } = (0, c.usePaymentContext)(),
        y = null;
    null != N ? (y = N) : null != A && null == (0, u.ly)(A) ? (y = A) : null != E ? (y = E) : null != t && (y = t);
    let _ = h.length > 1,
        P = null != y ? y.message : '';
    if (null != y && y instanceof s.HF && (y.code === i.SM.CARD_DECLINED && _ && (P += ' '.concat(p.intl.string(p.t.iWvwQU))), y.code === i.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (P = p.intl.string(p.t.ypuSd3)), y.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (P = p.intl.string(p.t.mXMmWF)), y.code === i.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (P = p.intl.string(p.t.mC1Fj4)), y.code === i.SM.INVALID_BILLING_ADDRESS)) {
        let e = p.intl.format(p.t.BPDKoK, { helpdeskArticle: o.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        P = (0, a.jsxs)(a.Fragment, {
            children: [p.intl.string(p.t['yVIm/P']), ' ', e]
        });
    }
    return (r.useEffect(() => {
        null != y && f(null);
    }, [y, f]),
    null == y)
        ? null
        : (0, a.jsx)('div', {
              className: m,
              children: (0, a.jsx)(l.FormErrorBlock, {
                  ref: n,
                  children: P
              })
          });
}
