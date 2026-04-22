s.d(t, { A: () => f });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    o = s.n(a),
    i = s(96337),
    r = s(452027),
    d = s(783878),
    h = s(292666),
    u = s(333074),
    c = s(985018),
    p = s(348043);
let f = function (e) {
    let { className: t, submitting: s, errorMessage: a, onChange: f } = e,
        C = l.useRef(null),
        { countriesMap: g, countryCodeOptions: m } = (0, u.E)(),
        [y, b] = l.useState(() => {
            let e = i.A.find((e) => "United States" === e.name);
            return `${e.alpha2}-${e.phoneCountryCode}`;
        }),
        [x, A] = l.useState(() => {
            let [e, t] = i.A.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return t ?? "";
        }),
        k = l.useCallback(
            (e, t) => {
                let s = g.get(e)?.code;
                f?.(`${s}${t}`);
            },
            [g, f],
        ),
        v = l.useCallback(
            (e) => {
                b(e), C.current?.focus(), k(e, x);
            },
            [x, k],
        ),
        R = l.useCallback(
            (e) => {
                A(e), k(y, e);
            },
            [y, k],
        ),
        S = g.get(y);
    return (0, n.jsx)("fieldset", {
        children: (0, n.jsxs)("div", {
            className: o()(p.B, t),
            children: [
                (0, n.jsx)(r.D, {
                    label: c.intl.string(c.t["k+bvrB"]),
                    children: (0, n.jsx)(d.Z, {
                        selectionMode: "single",
                        value: y ?? void 0,
                        onSelectionChange: v,
                        options: m,
                        formatOption: (e) => {
                            let { value: t, label: s, alpha2: n } = e;
                            return {
                                id: t,
                                value: t,
                                label: s,
                                leading: String.fromCodePoint(
                                    ...(n ?? "")
                                        .toUpperCase()
                                        .split("")
                                        .map((e) => 127397 + e.charCodeAt(0)),
                                ),
                            };
                        },
                        disabled: s,
                    }),
                }),
                (0, n.jsx)(h.k, {
                    label: c.intl.string(c.t["64bX0M"]),
                    error: a,
                    leading: S?.code,
                    type: "tel",
                    onChange: R,
                    autoFocus: !0,
                    inputRef: C,
                    disabled: s,
                    value: x,
                }),
            ],
        }),
    });
};
