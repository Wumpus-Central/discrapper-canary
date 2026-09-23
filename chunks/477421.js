n.d(t, { A: () => u });
var i = n(582128),
    l = n(17928),
    s = n(228366),
    r = n(277984),
    a = n(280450),
    o = n(615405),
    c = n(295405);
function u() {
    let e = (0, l.bG)([c.A], () => c.A.getDefaultBillingCountryCode()),
        t = (0, l.bG)([o.A], () => o.A.ipLocation),
        n = (0, l.bG)([a.default], () => a.default.isAuthenticated());
    return (
        i.useEffect(() => {
            s.h.wait(() => {
                !n || o.A.isPaymentSourceFetching || c.A.hasFetchedPaymentSources || r.$o();
            });
        }, [n]),
        i.useEffect(() => {
            n && !o.A.ipLocationLoaded && r.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
