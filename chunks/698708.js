n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(881052),
    s = n(128069),
    l = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    f = n(388032);
function _(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: _ } = e,
        { currencies: p, paymentError: h, purchaseError: m, purchasePreviewError: g, setSelectedPlanNotification: E } = (0, c.JL)(),
        b = null;
    null != g ? (b = g) : null != h && null == (0, u.ly)(h) ? (b = h) : null != m ? (b = m) : null != t && (b = t);
    let y = p.length > 1,
        O = null != b ? b.message : '';
    if (null != b && b instanceof a.HF && (b.code === s.SM.CARD_DECLINED && y && (O += ' '.concat(f.intl.string(f.t.iWvwQU))), b.code === s.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = f.intl.string(f.t.ypuSd3)), b.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = f.intl.string(f.t.mXMmWF)), b.code === s.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = f.intl.string(f.t.mC1Fj4)), b.code === s.SM.INVALID_BILLING_ADDRESS)) {
        let e = f.intl.format(f.t.BPDKoK, { helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        O = (0, r.jsxs)(r.Fragment, {
            children: [f.intl.string(f.t['yVIm/P']), ' ', e]
        });
    }
    return (i.useEffect(() => {
        null != b && E(null);
    }, [b, E]),
    null == b)
        ? null
        : (0, r.jsx)('div', {
              className: _,
              children: (0, r.jsx)(o.kzN, {
                  ref: n,
                  children: O
              })
          });
}
