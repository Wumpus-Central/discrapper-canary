n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(881052),
    s = n(128069),
    l = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    f = n(388032);
function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: p } = e,
        { currencies: _, paymentError: h, purchaseError: m, purchasePreviewError: g, setSelectedPlanNotification: E } = (0, c.JL)(),
        v = null;
    null != g ? (v = g) : null != h && null == (0, u.ly)(h) ? (v = h) : null != m ? (v = m) : null != t && (v = t);
    let b = _.length > 1,
        y = null != v ? v.message : '';
    if (null != v && v instanceof a.HF && (v.code === s.SM.CARD_DECLINED && b && (y += ' '.concat(f.NW.string(f.t.iWvwQU))), v.code === s.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = f.NW.string(f.t.ypuSd3)), v.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = f.NW.string(f.t.mXMmWF)), v.code === s.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = f.NW.string(f.t.mC1Fj4)), v.code === s.SM.INVALID_BILLING_ADDRESS)) {
        let e = f.NW.format(f.t.BPDKoK, { helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        y = (0, r.jsxs)(r.Fragment, {
            children: [f.NW.string(f.t['yVIm/P']), ' ', e]
        });
    }
    return (i.useEffect(() => {
        null != v && E(null);
    }, [v, E]),
    null == v)
        ? null
        : (0, r.jsx)('div', {
              className: p,
              children: (0, r.jsx)(o.kzN, {
                  ref: n,
                  children: y
              })
          });
}
