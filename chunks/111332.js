n.d(t, { t: () => d });
var a = n(31144),
    o = n(248702),
    l = n(129028),
    r = ["BR", "CN", "FR", "DE", "IL", "IT", "MX", "ES", "GB", "US"],
    i = ["CM", "KE", "NG"],
    d = ({
        value: e,
        onChange: t,
        label: n,
        id: d = "country-selector",
        countryCodes: s = r,
        devOnlyCountryCodes: u = i,
        "data-testid": c,
    }) => {
        let { i18n: p } = (0, a.n)(),
            C = p.language || "en";
        return (0, o.v)("div", {
            class: "IncodeCountrySelector",
            children: (0, o.v)(l.t, {
                id: d,
                label: n,
                value: e,
                options: (0, o.d)(() => {
                    let e = new Intl.DisplayNames([C, "en"], { type: "region" });
                    return (
                        !(function () {
                            if (typeof window > "u") return !1;
                            let { hostname: e } = window.location;
                            return "localhost" === e || e.includes("stage") || e.includes("demo");
                        })()
                            ? [...s]
                            : [...s, ...u]
                    )
                        .map((t) => {
                            let n = e.of(t) ?? t;
                            return {
                                value: t,
                                label: `${[...t.toUpperCase()].map((e) => String.fromCodePoint(127462 + e.charCodeAt(0) - 65)).join("")} ${n}`,
                                ariaLabel: n,
                            };
                        })
                        .sort((e, t) => e.label.localeCompare(t.label, C));
                }, [s, u, C]),
                onChange: t,
                "data-testid": c,
            }),
        });
    };
