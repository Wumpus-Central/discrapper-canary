n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(881052),
    o = n(128069),
    l = n(63063),
    u = n(563132),
    c = n(409813),
    d = n(981631),
    f = n(388032);
function _(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: _ } = e,
        { currencies: p, paymentError: h, purchaseError: m, purchasePreviewError: g, setSelectedPlanNotification: E } = (0, u.JL)(),
        v = null;
    null != g ? (v = g) : null != h && null == (0, c.ly)(h) ? (v = h) : null != m ? (v = m) : null != t && (v = t);
    let y = p.length > 1,
        I = null != v ? v.message : '';
    if (null != v && v instanceof s.HF && (v.code === o.SM.CARD_DECLINED && y && (I += ' '.concat(f.intl.string(f.t.iWvwQU))), v.code === o.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (I = f.intl.string(f.t.ypuSd3)), v.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (I = f.intl.string(f.t.mXMmWF)), v.code === o.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (I = f.intl.string(f.t.mC1Fj4)), v.code === o.SM.INVALID_BILLING_ADDRESS)) {
        let e = f.intl.format(f.t.BPDKoK, { helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        I = (0, i.jsxs)(i.Fragment, {
            children: [f.intl.string(f.t['yVIm/P']), ' ', e]
        });
    }
    return (r.useEffect(() => {
        null != v && E(null);
    }, [v, E]),
    null == v)
        ? null
        : (0, i.jsx)('div', {
              className: _,
              children: (0, i.jsx)(a.kzN, {
                  ref: n,
                  children: I
              })
          });
}
