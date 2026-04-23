s.d(t, { E: () => o });
var n = s(64700),
    l = s(96337),
    a = s(518977);
function o() {
    return n.useMemo(() => {
        let e = new Map(
                l.A.flatMap((e) => {
                    let { alpha2: t, phoneCountryCodes: s } = e,
                        n = (0, a.Gw)(t);
                    return s.map((e) => [`${t}-${e}`, { code: e, alpha2: t, name: n }]);
                }),
            ),
            t = Array.from(e.entries()).map((e) => {
                let [t, { name: s, alpha2: n }] = e;
                return { value: t, label: s, alpha2: n };
            });
        return { countriesMap: e, countryCodeOptions: t };
    }, []);
}
