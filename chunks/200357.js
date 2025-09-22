n.d(t, { Z: () => p }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(886025),
    c = n(481060),
    u = n(277139),
    d = n(388032),
    f = n(984392);
function _(e) {
    return String.fromCodePoint(
        ...e
            .toUpperCase()
            .split("")
            .map((e) => 127397 + e.charCodeAt(0)),
    );
}
let p = function (e) {
    let { className: t, submitting: n, errorMessage: a, onChange: p, layerContext: h } = e,
        m = i.useRef(null),
        { countriesMap: g, countryCodeOptions: E } = (0, u.b)(),
        [b, y] = i.useState(() => {
            let e = s.Z.find((e) => "United States" === e.name);
            return "".concat(e.alpha2, "-").concat(e.phoneCountryCode);
        }),
        [O, v] = i.useState(() => {
            let [e, t] = s.Z.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return null != t ? t : "";
        }),
        I = i.useCallback(
            (e) => {
                var t, n;
                if (null != e) return _(null != (n = null == (t = g.get(e.value)) ? void 0 : t.alpha2) ? n : "");
            },
            [g],
        ),
        T = i.useCallback(
            (e, t) => {
                var n;
                let r = null == (n = g.get(e)) ? void 0 : n.code;
                null == p || p("".concat(r).concat(t));
            },
            [g, p],
        ),
        S = i.useCallback(
            (e) => {
                var t;
                y(e), null == (t = m.current) || t.focus(), T(e, O);
            },
            [O, T],
        ),
        A = i.useCallback(
            (e) => {
                v(e), T(b, e);
            },
            [b, T],
        ),
        C = g.get(b);
    return (0, r.jsx)("fieldset", {
        children: (0, r.jsxs)("div", {
            className: o()(f.phoneField, t),
            children: [
                (0, r.jsx)(l.N, {
                    label: d.intl.string(d.t["k+bvrK"]),
                    children: (0, r.jsx)(c.VcW, {
                        value: b,
                        onChange: S,
                        renderOptionPrefix: I,
                        options: E,
                        popoutWidth: 280,
                        isDisabled: n,
                        popoutLayerContext: h,
                    }),
                }),
                (0, r.jsx)(c.oil, {
                    label: d.intl.string(d.t["64bX0N"]),
                    error: a,
                    leading: null == C ? void 0 : C.code,
                    type: "tel",
                    onChange: A,
                    autoFocus: !0,
                    inputRef: m,
                    disabled: n,
                    value: O,
                }),
            ],
        }),
    });
};
