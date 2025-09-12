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
    let { className: t, submitting: n, errorMessage: a, onChange: p } = e,
        h = i.useRef(null),
        { countriesMap: m, countryCodeOptions: g } = (0, u.b)(),
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
                if (null != e) return _(null != (n = null == (t = m.get(e.value)) ? void 0 : t.alpha2) ? n : "");
            },
            [m],
        ),
        I = i.useCallback(
            (e, t) => {
                var n;
                let r = null == (n = m.get(e)) ? void 0 : n.code;
                null == p || p("".concat(r).concat(t));
            },
            [m, p],
        ),
        T = i.useCallback(
            (e) => {
                var t;
                b(e), null == (t = h.current) || t.focus(), I(e, y);
            },
            [y, I],
        ),
        S = i.useCallback(
            (e) => {
                O(e), I(E, e);
            },
            [E, I],
        ),
        A = m.get(E);
    return (0, r.jsx)("fieldset", {
        children: (0, r.jsxs)("div", {
            className: o()(f.phoneField, t),
            children: [
                (0, r.jsx)(l.N, {
                    label: d.intl.string(d.t["k+bvrK"]),
                    children: (0, r.jsx)(c.VcW, {
                        value: E,
                        onChange: T,
                        renderOptionPrefix: v,
                        options: g,
                        popoutWidth: 280,
                        isDisabled: n,
                    }),
                }),
                (0, r.jsx)(c.oil, {
                    label: d.intl.string(d.t["64bX0N"]),
                    error: a,
                    leading: null == A ? void 0 : A.code,
                    type: "tel",
                    onChange: S,
                    autoFocus: !0,
                    inputRef: h,
                    disabled: n,
                    value: y,
                }),
            ],
        }),
    });
};
