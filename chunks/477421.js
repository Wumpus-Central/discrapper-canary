n.d(t, { A: () => _ });
var o = n(64700),
    r = n(17928),
    i = n(228366),
    a = n(323082),
    l = n(495544),
    s = n(615405),
    u = n(295405);
function _() {
    let e = (0, r.bG)([u.A], () => u.A.getDefaultBillingCountryCode()),
        t = (0, r.bG)([s.A], () => s.A.ipLocation),
        n = (0, r.bG)([l.default], () => l.default.isAuthenticated());
    return (
        o.useEffect(() => {
            i.h.wait(() => {
                !n || s.A.isPaymentSourceFetching || u.A.hasFetchedPaymentSources || a.$o();
            });
        }, [n]),
        o.useEffect(() => {
            n && !s.A.ipLocationLoaded && a.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
