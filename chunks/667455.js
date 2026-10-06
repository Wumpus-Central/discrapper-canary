t.d(e, { A: () => u });
var n = t(997101),
    a = t(17928),
    r = t(287809),
    s = t(295405);
function u() {
    let {
            storeCountryData: l,
            savedPostalCode: e,
            savedCountry: t,
        } = (0, a.cf)([s.A, r.default], () => {
            let l = s.A.defaultPaymentSource;
            return {
                storeCountryData: r.default.getCurrentUser()?.storeCountry ?? null,
                savedPostalCode: l?.billingAddress.postalCode ?? null,
                savedCountry: l?.billingAddress.country ?? null,
            };
        }),
        u = l?.country ?? null,
        i = l?.setAt != null,
        o = null,
        d = !1;
    return (
        null != u && i
            ? ((o = u), (d = n.M.EURO_CURRENCY_COUNTRIES.has(u)))
            : null != t
              ? ((o = t), (d = n.M.EURO_CURRENCY_COUNTRIES.has(t)))
              : null != u && ((o = u), (d = n.M.EURO_CURRENCY_COUNTRIES.has(u))),
        { isEU: d, displayCountry: o, storeCountryData: l, savedPostalCode: e, savedCountry: t }
    );
}
