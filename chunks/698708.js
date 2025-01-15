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
        { currencies: h, paymentError: A, purchaseError: E, purchasePreviewError: y, setSelectedPlanNotification: f } = (0, c.usePaymentContext)(),
        N = null;
    null != y ? (N = y) : null != A && null == (0, u.ly)(A) ? (N = A) : null != E ? (N = E) : null != t && (N = t);
    let P = h.length > 1,
        _ = null != N ? N.message : '';
    if (null != N && N instanceof s.HF && (N.code === i.SM.CARD_DECLINED && P && (_ += ' '.concat(p.intl.string(p.t.iWvwQU))), N.code === i.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (_ = p.intl.string(p.t.ypuSd3)), N.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (_ = p.intl.string(p.t.mXMmWF)), N.code === i.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (_ = p.intl.string(p.t.mC1Fj4)), N.code === i.SM.INVALID_BILLING_ADDRESS)) {
        let e = p.intl.format(p.t.BPDKoK, { helpdeskArticle: o.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        _ = (0, a.jsxs)(a.Fragment, {
            children: [p.intl.string(p.t['yVIm/P']), ' ', e]
        });
    }
    return (r.useEffect(() => {
        null != N && f(null);
    }, [N, f]),
    null == N)
        ? null
        : (0, a.jsx)('div', {
              className: m,
              children: (0, a.jsx)(l.FormErrorBlock, {
                  ref: n,
                  children: _
              })
          });
}
