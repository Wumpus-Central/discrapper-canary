n.d(t, {
    A: () => d,
}),
    n(747238),
    n(896048);
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(96337),
    r = n(397927),
    u = n(333074),
    E = n(985018),
    c = n(250640);
let d = function (e) {
    let { className: t, submitting: n, errorMessage: a, onChange: d } = e,
        h = s.useRef(null),
        { countriesMap: R, countryCodeOptions: I } = (0, u.E)(),
        [p, _] = s.useState(() => {
            let e = o.A.find((e) => "United States" === e.name);
            return "".concat(e.alpha2, "-").concat(e.phoneCountryCode);
        }),
        [f, g] = s.useState(() => {
            let [e, t] = o.A.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return null != t ? t : "";
        }),
        C = s.useCallback(
            (e, t) => {
                var n;
                let l = null == (n = R.get(e)) ? void 0 : n.code;
                null == d || d("".concat(l).concat(t));
            },
            [R, d],
        ),
        m = s.useCallback(
            (e) => {
                var t;
                _(e), null == (t = h.current) || t.focus(), C(e, f);
            },
            [f, C],
        ),
        b = s.useCallback(
            (e) => {
                g(e), C(p, e);
            },
            [p, C],
        ),
        A = R.get(p);
    return (0, l.jsx)("fieldset", {
        children: (0, l.jsxs)("div", {
            className: i()(c.B, t),
            children: [
                (0, l.jsx)(r.D0$, {
                    label: E.intl.string(E.t["k+bvrB"]),
                    children: (0, l.jsx)(r.ZiE, {
                        selectionMode: "single",
                        value: null != p ? p : void 0,
                        onSelectionChange: m,
                        options: I,
                        formatOption: (e) => {
                            let { value: t, label: n, alpha2: l } = e;
                            return {
                                id: t,
                                value: t,
                                label: n,
                                leading: String.fromCodePoint(
                                    ...(null != l ? l : "")
                                        .toUpperCase()
                                        .split("")
                                        .map((e) => 127397 + e.charCodeAt(0)),
                                ),
                            };
                        },
                        disabled: n,
                    }),
                }),
                (0, l.jsx)(r.ksK, {
                    label: E.intl.string(E.t["64bX0M"]),
                    error: a,
                    leading: null == A ? void 0 : A.code,
                    type: "tel",
                    onChange: b,
                    autoFocus: !0,
                    inputRef: h,
                    disabled: n,
                    value: f,
                }),
            ],
        }),
    });
};
