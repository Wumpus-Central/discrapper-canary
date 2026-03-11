l.d(e, { A: () => s });
var n = l(997101),
    a = l(311907),
    i = l(287809),
    r = l(295405);
function s() {
    let {
            storeCountryData: t,
            savedPostalCode: e,
            savedCountry: l,
        } = (0, a.cf)([r.A, i.default], () => {
            let t = r.A.defaultPaymentSource;
            return {
                storeCountryData: i.default.getCurrentUser()?.storeCountry ?? null,
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
            : null != l
              ? ((o = l), (d = n.M.EU_COUNTRIES.has(l)))
              : null != s && ((o = s), (d = n.M.EU_COUNTRIES.has(s))),
        { isEU: d, displayCountry: o, storeCountryData: t, savedPostalCode: e, savedCountry: l }
    );
}
