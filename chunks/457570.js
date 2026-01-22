n.d(t, {
    A: () => p,
}),
    n(747238),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(96337),
    l = n(397927),
    c = n(333074),
    u = n(985018),
    d = n(250640);

function f(e) {
    return String.fromCodePoint(
        ...e
            .toUpperCase()
            .split("")
            .map((e) => 127397 + e.charCodeAt(0)),
    );
}
let p = function (e) {
    let { className: t, submitting: n, errorMessage: a, onChange: p } = e,
        _ = i.useRef(null),
        { countriesMap: h, countryCodeOptions: m } = (0, c.E)(),
        [g, E] = i.useState(() => {
            let e = o.A.find((e) => "United States" === e.name);
            return "".concat(e.alpha2, "-").concat(e.phoneCountryCode);
        }),
        [b, y] = i.useState(() => {
            let [e, t] = o.A.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return null != t ? t : "";
        }),
        O = i.useCallback(
            (e, t) => {
                var n;
                let r = null == (n = h.get(e)) ? void 0 : n.code;
                null == p || p("".concat(r).concat(t));
            },
            [h, p],
        ),
        A = i.useCallback(
            (e) => {
                var t;
                E(e), null == (t = _.current) || t.focus(), O(e, b);
            },
            [b, O],
        ),
        v = i.useCallback(
            (e) => {
                y(e), O(g, e);
            },
            [g, O],
        ),
        S = h.get(g);
    return (0, r.jsx)("fieldset", {
        children: (0, r.jsxs)("div", {
            className: s()(d.B, t),
            children: [
                (0, r.jsx)(l.D0$, {
                    label: u.intl.string(u.t["k+bvrB"]),
                    children: (0, r.jsx)(l.ZiE, {
                        selectionMode: "single",
                        value: null != g ? g : void 0,
                        onSelectionChange: A,
                        options: m,
                        formatOption: (e) => {
                            let { value: t, label: n, alpha2: r } = e;
                            return {
                                id: t,
                                value: t,
                                label: n,
                                leading: f(null != r ? r : ""),
                            };
                        },
                        disabled: n,
                    }),
                }),
                (0, r.jsx)(l.ksK, {
                    label: u.intl.string(u.t["64bX0M"]),
                    error: a,
                    leading: null == S ? void 0 : S.code,
                    type: "tel",
                    onChange: v,
                    autoFocus: !0,
                    inputRef: _,
                    disabled: n,
                    value: b,
                }),
            ],
        }),
    });
};
