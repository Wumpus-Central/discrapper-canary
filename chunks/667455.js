t.d(e, { A: () => s });
var n = t(997101),
    a = t(17928),
    r = t(287809),
    u = t(295405);
function s() {
    let {
            storeCountryData: l,
            savedPostalCode: e,
            savedCountry: t,
        } = (0, a.cf)([u.A, r.default], () => {
            let l = u.A.defaultPaymentSource;
            return {
                storeCountryData: r.default.getCurrentUser()?.storeCountry ?? null,
                savedPostalCode: l?.billingAddress.postalCode ?? null,
                savedCountry: l?.billingAddress.country ?? null,
            };
        }),
        s = l?.country ?? null,
        i = l?.setAt != null,
        d = null,
        o = !1;
    return (
        null != s && i
            ? ((d = s), (o = n.M.EURO_CURRENCY_COUNTRIES.has(s)))
            : null != t
              ? ((d = t), (o = n.M.EURO_CURRENCY_COUNTRIES.has(t)))
              : null != s && ((d = s), (o = n.M.EURO_CURRENCY_COUNTRIES.has(s))),
        { isEU: o, displayCountry: d, storeCountryData: l, savedPostalCode: e, savedCountry: t }
    );
}
