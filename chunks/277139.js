n.d(t, { b: () => o }), n(388685), n(361932), n(187205);
var r = n(473749),
    i = n(217986),
    a = n(133080);
function o() {
    return r.useMemo(() => {
        let e = new Map(
                i.Z.flatMap((e) => {
                    let { alpha2: t, phoneCountryCodes: n } = e,
                        r = (0, a.q9)(t);
                    return n.map((e) => [
                        "".concat(t, "-").concat(e),
                        {
                            code: e,
                            alpha2: t,
                            name: r,
                        },
                    ]);
                }),
            ),
            t = Array.from(e.entries()).map((e) => {
                let [t, { name: n }] = e;
                return {
                    value: t,
                    label: n,
                };
            });
        return {
            countriesMap: e,
            countryCodeOptions: t,
        };
    }, []);
}
