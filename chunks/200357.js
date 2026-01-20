n.d(t, { Z: () => p }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(481060),
    c = n(277139),
    u = n(388032),
    d = n(76359);
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
        { countriesMap: h, countryCodeOptions: m } = (0, c.b)(),
        [g, E] = i.useState(() => {
            let e = s.Z.find((e) => "United States" === e.name);
            return "".concat(e.alpha2, "-").concat(e.phoneCountryCode);
        }),
        [b, y] = i.useState(() => {
            let [e, t] = s.Z.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
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
        v = i.useCallback(
            (e) => {
                var t;
                E(e), null == (t = _.current) || t.focus(), O(e, b);
            },
            [b, O],
        ),
        S = i.useCallback(
            (e) => {
                y(e), O(g, e);
            },
            [g, O],
        ),
        I = h.get(g);
    return (0, r.jsx)("fieldset", {
        children: (0, r.jsxs)("div", {
            className: o()(d.phoneField, t),
            children: [
                (0, r.jsx)(l.gNt, {
                    label: u.intl.string(u.t["k+bvrB"]),
                    children: (0, r.jsx)(l.VcW, {
                        selectionMode: "single",
                        value: null != g ? g : void 0,
                        onSelectionChange: v,
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
                (0, r.jsx)(l.oil, {
                    label: u.intl.string(u.t["64bX0M"]),
                    error: a,
                    leading: null == I ? void 0 : I.code,
                    type: "tel",
                    onChange: S,
                    autoFocus: !0,
                    inputRef: _,
                    disabled: n,
                    value: b,
                }),
            ],
        }),
    });
};
