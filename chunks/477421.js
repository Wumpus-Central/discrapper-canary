n.d(t, { A: () => c });
var i = n(582128),
    r = n(17928),
    a = n(228366),
    s = n(277984),
    l = n(280450),
    o = n(615405),
    d = n(295405);
function c() {
    let e = (0, r.bG)([d.A], () => d.A.getDefaultBillingCountryCode()),
        t = (0, r.bG)([o.A], () => o.A.ipLocation),
        n = (0, r.bG)([l.default], () => l.default.isAuthenticated());
    return (
        i.useEffect(() => {
            a.h.wait(() => {
                !n || o.A.isPaymentSourceFetching || d.A.hasFetchedPaymentSources || s.$o();
            });
        }, [n]),
        i.useEffect(() => {
            n && !o.A.ipLocationLoaded && s.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
