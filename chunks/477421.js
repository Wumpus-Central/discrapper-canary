n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(384904),
    o = n(961350),
    l = n(615405),
    c = n(295405);
function u() {
    let e = (0, i.bG)([c.A], () => c.A.getDefaultBillingCountryCode()),
        t = (0, i.bG)([l.A], () => l.A.ipLocation),
        n = (0, i.bG)([o.default], () => o.default.isAuthenticated());
    return (
        r.useEffect(() => {
            a.h.wait(() => {
                !n || l.A.isPaymentSourceFetching || c.A.hasFetchedPaymentSources || s.$o();
            });
        }, [n]),
        r.useEffect(() => {
            n && !l.A.ipLocationLoaded && s.jZ();
        }, [t, n]),
        {
            defaultBillingCountryCode: e,
            ipCountryCode: null == t ? void 0 : t.countryCode,
            ipSubdivisionCode: null == t ? void 0 : t.subdivisionCode,
        }
    );
}
