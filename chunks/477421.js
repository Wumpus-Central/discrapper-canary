n.d(t, { A: () => c });
var l = n(582128),
    i = n(17928),
    r = n(73153),
    s = n(277984),
    a = n(280450),
    o = n(615405),
    u = n(295405);
function c() {
    let e = (0, i.bG)([u.A], () => u.A.getDefaultBillingCountryCode()),
        t = (0, i.bG)([o.A], () => o.A.ipLocation),
        n = (0, i.bG)([a.default], () => a.default.isAuthenticated());
    return (
        l.useEffect(() => {
            r.h.wait(() => {
                !n || o.A.isPaymentSourceFetching || u.A.hasFetchedPaymentSources || s.$o();
            });
        }, [n]),
        l.useEffect(() => {
            n && !o.A.ipLocationLoaded && s.jZ();
        }, [t, n]),
        { defaultBillingCountryCode: e, ipCountryCode: t?.countryCode, ipSubdivisionCode: t?.subdivisionCode }
    );
}
