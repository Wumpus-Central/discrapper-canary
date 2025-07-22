(n.d(t, { Q: () => c }), n(388685), n(539854));
var r = n(987032),
    i = n(981631);
let a = [i.HeQ.CARD, i.HeQ.PAYPAL],
    o = new Set(['DE', 'BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'CH', 'SI', 'IE', 'LV', 'MT', 'FR', 'SK', 'FI', 'GR', 'PT', 'LU', 'LT', 'CY', 'NO', 'NL', 'ES', 'BE', 'AT', 'IT']),
    s = new Map([
        [i.HeQ.SOFORT, new Set([])],
        [i.HeQ.PRZELEWY24, new Set(['ALL', 'PL'])],
        [i.HeQ.GIROPAY, new Set(['ALL', 'DE'])],
        [i.HeQ.PAYSAFE_CARD, new Set(['ALL', ...o])],
        [i.HeQ.GCASH, new Set(['ALL', 'PH'])],
        [i.HeQ.GRABPAY_MY, new Set(['ALL', 'MY'])],
        [i.HeQ.MOMO_WALLET, new Set(['ALL', 'VN'])],
        [i.HeQ.VENMO, new Set(['ALL', 'US'])],
        [i.HeQ.KAKAOPAY, new Set(['ALL', 'KR'])],
        [i.HeQ.GOPAY_WALLET, new Set(['ALL', 'ID'])],
        [i.HeQ.BANCONTACT, new Set(['ALL', 'BE'])],
        [i.HeQ.EPS, new Set(['ALL', 'AT'])],
        [i.HeQ.IDEAL, new Set(['ALL', 'NL'])],
        [i.HeQ.CASH_APP, new Set(['ALL', 'US'])]
    ]),
    l = new Map([[i.HeQ.PAYSAFE_CARD, new Set(['DE'])]]);
function c(e) {
    let { ipCountryCode: t, location: n } = e,
        { enabledPaymentTypes: i, forceCountryCode: o, validCountryCodes: c } = r.ZP.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }),
        u = null != t ? t : 'ALL';
    c.length > 0 && null != o && null != t && (u = c.includes(t) ? t : o);
    let d = new Set(),
        _ = [];
    return (
        s.forEach((e, t) => {
            i.includes(t) && (e.has(u) ? d.add(t) : _.push(t));
        }),
        l.forEach((e, t) => {
            e.has(u) && d.add(t);
        }),
        {
            countryPaymentMethods: [...a, ...Array.from(d)],
            remainingPaymentMethods: _
        }
    );
}
