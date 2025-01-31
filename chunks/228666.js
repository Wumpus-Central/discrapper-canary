n.d(t, { P: () => p });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(464179);
n(600164);
var l = n(706454),
    u = n(351402),
    c = n(603421),
    d = n(981631),
    f = n(388032),
    _ = n(868069);
let p = (e) => {
    let t,
        { billingAddressInfo: n, billingError: p, onBillingAddressChange: h, paymentSourceType: m } = e,
        g = null != p && (null == p.code || (0, c.ly)(p) === c.Rg.ADDRESS),
        E = (0, a.e7)([l.default], () => l.default.locale);
    switch (m) {
        case d.HeQ.GIROPAY:
        case d.HeQ.PAYSAFE_CARD:
        case d.HeQ.GCASH:
        case d.HeQ.GRABPAY_MY:
        case d.HeQ.MOMO_WALLET:
        case d.HeQ.KAKAOPAY:
        case d.HeQ.GOPAY_WALLET:
        case d.HeQ.BANCONTACT:
            t = 'en-US' === E ? o.ZP.Layouts.MODAL_US_WITH_NAME : o.ZP.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case d.HeQ.VENMO:
        case d.HeQ.CASH_APP:
            t = o.ZP.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = 'en-US' === E ? o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL;
    }
    let v = (0, a.e7)([u.Z], () => u.Z.ipCountryCode);
    return (
        0 === n.country.length && (n.country = null != v ? v : ''),
        (0, i.jsxs)(r.Fragment, {
            children: [
                g
                    ? (0, i.jsx)(s.kzN, {
                          className: _.errorBlock,
                          children: f.intl.string(f.t.vZ8y7u)
                      })
                    : null,
                (0, i.jsx)(o.ZP, {
                    className: _.__invalid_formItem,
                    onBillingAddressChange: h,
                    error: p,
                    layout: t,
                    ...n
                })
            ]
        })
    );
};
