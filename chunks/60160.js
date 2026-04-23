n.d(t, { a: () => c });
var i = n(311907),
    s = n(546605),
    l = n(419954),
    a = n(287809),
    r = n(780964),
    o = n(863612),
    d = n(985018);
let u = (0, l.E2)(r.X.BILLING_STORE_COUNTRY, { Component: o.A, useSearchTerms: () => [d.intl.string(d.t["3pIjBH"])] }),
    c = (0, l.zZ)(r.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, s.vg)("StoreCountrySetting")),
                (t = (0, i.bG)([a.default], () => a.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => d.intl.string(d.t["3pIjBH"]),
        buildLayout: () => [u],
    });
