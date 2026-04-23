"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(323082),
    o = n(961350),
    l = n(615405),
    u = n(295405);
function c() {
    let e = (0, i.bG)([u.A], () => u.A.getDefaultBillingCountryCode()),
        t = (0, i.bG)([l.A], () => l.A.ipLocation),
        n = (0, i.bG)([o.default], () => o.default.isAuthenticated());
    return (
        r.useEffect(() => {
            s.h.wait(() => {
                !n || l.A.isPaymentSourceFetching || u.A.hasFetchedPaymentSources || a.$o();
            });
        }, [n]),
        r.useEffect(() => {
            n && !l.A.ipLocationLoaded && a.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
