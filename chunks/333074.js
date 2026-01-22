n.d(t, {
    E: () => s,
}),
    n(896048),
    n(114821),
    n(339614);
var r = n(64700),
    i = n(96337),
    a = n(518977);

function s() {
    return r.useMemo(() => {
        let e = new Map(
                i.A.flatMap((e) => {
                    let { alpha2: t, phoneCountryCodes: n } = e,
                        r = (0, a.Gw)(t);
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
                let [t, { name: n, alpha2: r }] = e;
                return {
                    value: t,
                    label: n,
                    alpha2: r,
                };
            });
        return {
            countriesMap: e,
            countryCodeOptions: t,
        };
    }, []);
}
