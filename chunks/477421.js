"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(753390),
    o = n(495544),
    l = n(615405),
    u = n(295405);
function c() {
    let e = (0, r.bG)([u.A], () => u.A.getDefaultBillingCountryCode()),
        t = (0, r.bG)([l.A], () => l.A.ipLocation),
        n = (0, r.bG)([o.default], () => o.default.isAuthenticated());
    return (
        i.useEffect(() => {
            s.h.wait(() => {
                !n || l.A.isPaymentSourceFetching || u.A.hasFetchedPaymentSources || a.$o();
            });
        }, [n]),
        i.useEffect(() => {
            n && !l.A.ipLocationLoaded && a.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
