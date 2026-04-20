n.d(t, { a: () => u });
var i = n(311907),
    s = n(546605),
    l = n(419954),
    r = n(287809),
    a = n(780964),
    o = n(863612),
    d = n(985018);
let c = (0, l.E2)(a.X.BILLING_STORE_COUNTRY, { Component: o.A, useSearchTerms: () => [d.intl.string(d.t["3pIjBH"])] }),
    u = (0, l.zZ)(a.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, s.vg)("StoreCountrySetting")),
                (t = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => d.intl.string(d.t["3pIjBH"]),
        buildLayout: () => [c],
    });
