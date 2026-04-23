e.d(l, { A: () => s });
var n = e(997101),
    a = e(17928),
    r = e(287809),
    i = e(295405);
function s() {
    let {
            storeCountryData: t,
            savedPostalCode: l,
            savedCountry: e,
        } = (0, a.cf)([i.A, r.default], () => {
            let t = i.A.defaultPaymentSource;
            return {
                storeCountryData: r.default.getCurrentUser()?.storeCountry ?? null,
                savedPostalCode: t?.billingAddress.postalCode ?? null,
                savedCountry: t?.billingAddress.country ?? null,
            };
        }),
        s = t?.country ?? null,
        u = t?.setAt != null,
        o = null,
        d = !1;
    return (
        null != s && u
            ? ((o = s), (d = n.M.EU_COUNTRIES.has(s)))
            : null != e
              ? ((o = e), (d = n.M.EU_COUNTRIES.has(e)))
              : null != s && ((o = s), (d = n.M.EU_COUNTRIES.has(s))),
        { isEU: d, displayCountry: o, storeCountryData: t, savedPostalCode: l, savedCountry: e }
    );
}
