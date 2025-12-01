n.d(t, { Z: () => p }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(481060),
    c = n(277139),
    u = n(388032),
    d = n(984392);
function f(e) {
    return String.fromCodePoint(
        ...e
            .toUpperCase()
            .split("")
            .map((e) => 127397 + e.charCodeAt(0)),
    );
}
let p = function (e) {
    let { className: t, submitting: n, errorMessage: a, onChange: p, layerContext: _ } = e,
        m = i.useRef(null),
        { countriesMap: h, countryCodeOptions: g } = (0, c.b)(),
        [E, b] = i.useState(() => {
            let e = s.Z.find((e) => "United States" === e.name);
            return "".concat(e.alpha2, "-").concat(e.phoneCountryCode);
        }),
        [y, O] = i.useState(() => {
            let [e, t] = s.Z.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return null != t ? t : "";
        }),
        v = i.useCallback(
            (e) => {
                var t, n;
                if (null != e) return f(null != (n = null == (t = h.get(e.value)) ? void 0 : t.alpha2) ? n : "");
            },
            [h],
        ),
        S = i.useCallback(
            (e, t) => {
                var n;
                let r = null == (n = h.get(e)) ? void 0 : n.code;
                null == p || p("".concat(r).concat(t));
            },
            [h, p],
        ),
        I = i.useCallback(
            (e) => {
                var t;
                b(e), null == (t = m.current) || t.focus(), S(e, y);
            },
            [y, S],
        ),
        T = i.useCallback(
            (e) => {
                O(e), S(E, e);
            },
            [E, S],
        ),
        A = h.get(E);
    return (0, r.jsx)("fieldset", {
        children: (0, r.jsxs)("div", {
            className: o()(d.phoneField, t),
            children: [
                (0, r.jsx)(l.gNt, {
                    label: u.intl.string(u.t["k+bvrB"]),
                    children: (0, r.jsx)(l.VcW, {
                        value: E,
                        onChange: I,
                        renderOptionPrefix: v,
                        options: g,
                        popoutWidth: 280,
                        isDisabled: n,
                        popoutLayerContext: _,
                    }),
                }),
                (0, r.jsx)(l.oil, {
                    label: u.intl.string(u.t["64bX0M"]),
                    error: a,
                    leading: null == A ? void 0 : A.code,
                    type: "tel",
                    onChange: T,
                    autoFocus: !0,
                    inputRef: m,
                    disabled: n,
                    value: y,
                }),
            ],
        }),
    });
};
