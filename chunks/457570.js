n.d(t, { A: () => u });
var s = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    o = n(96337),
    r = n(397927),
    E = n(333074),
    d = n(985018),
    c = n(250640);
let u = function (e) {
    let { className: t, submitting: n, errorMessage: i, onChange: u } = e,
        h = a.useRef(null),
        { countriesMap: R, countryCodeOptions: I } = (0, E.E)(),
        [p, _] = a.useState(() => {
            let e = o.A.find((e) => "United States" === e.name);
            return `${e.alpha2}-${e.phoneCountryCode}`;
        }),
        [f, g] = a.useState(() => {
            let [e, t] = o.A.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return t ?? "";
        }),
        C = a.useCallback(
            (e, t) => {
                let n = R.get(e)?.code;
                u?.(`${n}${t}`);
            },
            [R, u],
        ),
        m = a.useCallback(
            (e) => {
                _(e), h.current?.focus(), C(e, f);
            },
            [f, C],
        ),
        A = a.useCallback(
            (e) => {
                g(e), C(p, e);
            },
            [p, C],
        ),
        y = R.get(p);
    return (0, s.jsx)("fieldset", {
        children: (0, s.jsxs)("div", {
            className: l()(c.B, t),
            children: [
                (0, s.jsx)(r.D0$, {
                    label: d.intl.string(d.t["k+bvrB"]),
                    children: (0, s.jsx)(r.ZiE, {
                        selectionMode: "single",
                        value: p ?? void 0,
                        onSelectionChange: m,
                        options: I,
                        formatOption: (e) => {
                            let { value: t, label: n, alpha2: s } = e;
                            return {
                                id: t,
                                value: t,
                                label: n,
                                leading: String.fromCodePoint(
                                    ...(s ?? "")
                                        .toUpperCase()
                                        .split("")
                                        .map((e) => 127397 + e.charCodeAt(0)),
                                ),
                            };
                        },
                        disabled: n,
                    }),
                }),
                (0, s.jsx)(r.ksK, {
                    label: d.intl.string(d.t["64bX0M"]),
                    error: i,
                    leading: y?.code,
                    type: "tel",
                    onChange: A,
                    autoFocus: !0,
                    inputRef: h,
                    disabled: n,
                    value: f,
                }),
            ],
        }),
    });
};
