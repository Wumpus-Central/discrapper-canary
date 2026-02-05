n.d(t, { E: () => l });
var s = n(64700),
    a = n(96337),
    i = n(518977);
function l() {
    return s.useMemo(() => {
        let e = new Map(
                a.A.flatMap((e) => {
                    let { alpha2: t, phoneCountryCodes: n } = e,
                        s = (0, i.Gw)(t);
                    return n.map((e) => [`${t}-${e}`, { code: e, alpha2: t, name: s }]);
                }),
            ),
            t = Array.from(e.entries()).map((e) => {
                let [t, { name: n, alpha2: s }] = e;
                return { value: t, label: n, alpha2: s };
            });
        return { countriesMap: e, countryCodeOptions: t };
    }, []);
}
