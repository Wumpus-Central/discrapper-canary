a.d(t, { t: () => s });
var n = a(529058),
    o = a(287822),
    r = a(843641),
    l = ["BR", "CN", "FR", "DE", "IL", "IT", "MX", "ES", "GB", "US"],
    i = ["CM", "KE", "NG"],
    s = ({
        value: e,
        onChange: t,
        label: a,
        id: s = "country-selector",
        countryCodes: d = l,
        devOnlyCountryCodes: c = i,
        "data-testid": u,
    }) => {
        let { i18n: p } = (0, n.n)(),
            C = p.language || "en";
        return (0, o.v)("div", {
            class: "IncodeCountrySelector",
            children: (0, o.v)(r.t, {
                id: s,
                label: a,
                value: e,
                options: (0, o.d)(() => {
                    let e = new Intl.DisplayNames([C, "en"], { type: "region" });
                    return (
                        !(function () {
                            if ("u" < typeof window) return !1;
                            let { hostname: e } = window.location;
                            return "localhost" === e || e.includes("stage") || e.includes("demo");
                        })()
                            ? [...d]
                            : [...d, ...c]
                    )
                        .map((t) => {
                            let a = e.of(t) ?? t;
                            return {
                                value: t,
                                label: `${[...t.toUpperCase()].map((e) => String.fromCodePoint(127462 + e.charCodeAt(0) - 65)).join("")} ${a}`,
                                ariaLabel: a,
                            };
                        })
                        .sort((e, t) => e.label.localeCompare(t.label, C));
                }, [d, c, C]),
                onChange: t,
                "data-testid": u,
            }),
        });
    };
