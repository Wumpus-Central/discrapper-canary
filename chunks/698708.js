n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(881052),
    s = n(128069),
    l = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    _ = n(388032);
function f(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: f } = e,
        { currencies: p, paymentError: h, purchaseError: m, purchasePreviewError: g, setSelectedPlanNotification: E } = (0, c.JL)(),
        b = null;
    null != g ? (b = g) : null != h && null == (0, u.ly)(h) ? (b = h) : null != m ? (b = m) : null != t && (b = t);
    let y = p.length > 1,
        O = null != b ? b.message : '';
    if (null != b && b instanceof o.HF && (b.code === s.SM.CARD_DECLINED && y && (O += ' '.concat(_.intl.string(_.t.iWvwQU))), b.code === s.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = _.intl.string(_.t.ypuSd3)), b.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = _.intl.string(_.t.mXMmWF)), b.code === s.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = _.intl.string(_.t.mC1Fj4)), b.code === s.SM.INVALID_BILLING_ADDRESS)) {
        let e = _.intl.format(_.t.BPDKoK, { helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        O = (0, r.jsxs)(r.Fragment, {
            children: [_.intl.string(_.t['yVIm/P']), ' ', e]
        });
    }
    return (i.useEffect(() => {
        null != b && E(null);
    }, [b, E]),
    null == b)
        ? null
        : (0, r.jsx)('div', {
              className: f,
              children: (0, r.jsx)(a.kzN, {
                  ref: n,
                  children: O
              })
          });
}
