n.d(t, { A: () => u });
var l = n(582128),
    i = n(17928),
    r = n(277984),
    s = n(280450),
    a = n(615405),
    o = n(295405);
function u() {
    let e = (0, i.bG)([o.A], () => o.A.getDefaultBillingCountryCode()),
        t = (0, i.bG)([a.A], () => a.A.ipLocation),
        n = (0, i.bG)([s.default], () => s.default.isAuthenticated());
    return (
        l.useEffect(() => {
            !n || a.A.isPaymentSourceFetching || o.A.hasFetchedPaymentSources || r.$o();
        }, [n]),
        l.useEffect(() => {
            n && !a.A.ipLocationLoaded && r.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
