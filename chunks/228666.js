r.d(n, {
    P: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(464179);
r(600164);
var u = r(706454),
    c = r(351402),
    d = r(603421),
    f = r(981631),
    p = r(388032),
    h = r(868069);
let _ = (e) => {
    let n,
        { billingAddressInfo: r, billingError: _, onBillingAddressChange: m, paymentSourceType: g } = e,
        E = null != _ && (null == _.code || (0, d.ly)(_) === d.Rg.ADDRESS),
        v = (0, o.e7)([u.default], () => u.default.locale);
    switch (g) {
        case f.HeQ.GIROPAY:
        case f.HeQ.PAYSAFE_CARD:
        case f.HeQ.GCASH:
        case f.HeQ.GRABPAY_MY:
        case f.HeQ.MOMO_WALLET:
        case f.HeQ.KAKAOPAY:
        case f.HeQ.GOPAY_WALLET:
        case f.HeQ.BANCONTACT:
            n = 'en-US' === v ? l.ZP.Layouts.MODAL_US_WITH_NAME : l.ZP.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case f.HeQ.VENMO:
        case f.HeQ.CASH_APP:
            n = l.ZP.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            n = 'en-US' === v ? l.ZP.Layouts.MODAL_US : l.ZP.Layouts.MODAL_INTL;
    }
    let y = (0, o.e7)([c.Z], () => c.Z.ipCountryCode);
    return (
        0 === r.country.length && (r.country = null != y ? y : ''),
        (0, i.jsxs)(a.Fragment, {
            children: [
                E
                    ? (0, i.jsx)(s.FormErrorBlock, {
                          className: h.errorBlock,
                          children: p.intl.string(p.t.vZ8y7u)
                      })
                    : null,
                (0, i.jsx)(l.ZP, {
                    className: h.__invalid_formItem,
                    onBillingAddressChange: m,
                    error: _,
                    layout: n,
                    ...r
                })
            ]
        })
    );
};
