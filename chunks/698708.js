n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(881052),
    s = n(128069),
    l = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    f = n(388032);
function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: p } = e,
        {
            currencies: _,
            paymentError: m,
            purchaseError: h,
            purchasePreviewError: g,
            setSelectedPlanNotification: E,
        } = (0, c.JL)(),
        b = null;
    null != g ? (b = g) : null != m && null == (0, u.ly)(m) ? (b = m) : null != h ? (b = h) : null != t && (b = t);
    let y = _.length > 1,
        O = null != b ? b.message : "";
    if (
        null != b &&
        b instanceof o.HF &&
        (b.code === s.SM.CARD_DECLINED && y && (O += " ".concat(f.intl.string(f.t.iWvwQS))),
        b.code === s.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = f.intl.string(f.t.ypuSd8)),
        b.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = f.intl.string(f.t.mXMmWE)),
        b.code === s.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = f.intl.string(f.t.mC1Fjz)),
        b.code === s.SM.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS),
        });
        O = (0, r.jsxs)(r.Fragment, {
            children: [f.intl.string(f.t["yVIm/G"]), " ", e],
        });
    }
    return (i.useEffect(() => {
        null != b && E(null);
    }, [b, E]),
    null == b)
        ? null
        : (0, r.jsx)("div", {
              ref: n,
              className: p,
              children: (0, r.jsx)(a.M14, {
                  type: "critical",
                  children: O,
              }),
          });
}
