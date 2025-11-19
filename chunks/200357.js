n.d(t, { Z: () => _ }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(481060),
    c = n(277139),
    u = n(388032),
    d = n(577216);
function f(e) {
    return String.fromCodePoint(
        ...e
            .toUpperCase()
            .split("")
            .map((e) => 127397 + e.charCodeAt(0)),
    );
}
let _ = function (e) {
    let { className: t, submitting: n, errorMessage: a, onChange: _, layerContext: p } = e,
        h = i.useRef(null),
        { countriesMap: m, countryCodeOptions: g } = (0, c.b)(),
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
                if (null != e) return f(null != (n = null == (t = m.get(e.value)) ? void 0 : t.alpha2) ? n : "");
            },
            [m],
        ),
        I = i.useCallback(
            (e, t) => {
                var n;
                let r = null == (n = m.get(e)) ? void 0 : n.code;
                null == _ || _("".concat(r).concat(t));
            },
            [m, _],
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
            className: o()(d.phoneField, t),
            children: [
                (0, r.jsx)(l.gNt, {
                    label: u.intl.string(u.t["k+bvrB"]),
                    children: (0, r.jsx)(l.VcW, {
                        value: E,
                        onChange: T,
                        renderOptionPrefix: v,
                        options: g,
                        popoutWidth: 280,
                        isDisabled: n,
                        popoutLayerContext: p,
                    }),
                }),
                (0, r.jsx)(l.oil, {
                    label: u.intl.string(u.t["64bX0M"]),
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
