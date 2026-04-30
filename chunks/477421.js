n.d(t, { A: () => _ });
var o = n(64700),
    r = n(17928),
    a = n(228366),
    i = n(323082),
    l = n(495544),
    u = n(615405),
    s = n(295405);
function _() {
    let e = (0, r.bG)([s.A], () => s.A.getDefaultBillingCountryCode()),
        t = (0, r.bG)([u.A], () => u.A.ipLocation),
        n = (0, r.bG)([l.default], () => l.default.isAuthenticated());
    return (
        o.useEffect(() => {
            a.h.wait(() => {
                !n || u.A.isPaymentSourceFetching || s.A.hasFetchedPaymentSources || i.$o();
            });
        }, [n]),
        o.useEffect(() => {
            n && !u.A.ipLocationLoaded && i.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
