n.d(t, { A: () => u });
var r = n(64700),
    a = n(17928),
    i = n(228366),
    o = n(323082),
    l = n(495544),
    s = n(615405),
    d = n(295405);
function u() {
    let e = (0, a.bG)([d.A], () => d.A.getDefaultBillingCountryCode()),
        t = (0, a.bG)([s.A], () => s.A.ipLocation),
        n = (0, a.bG)([l.default], () => l.default.isAuthenticated());
    return (
        r.useEffect(() => {
            i.h.wait(() => {
                !n || s.A.isPaymentSourceFetching || d.A.hasFetchedPaymentSources || o.$o();
            });
        }, [n]),
        r.useEffect(() => {
            n && !s.A.ipLocationLoaded && o.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
