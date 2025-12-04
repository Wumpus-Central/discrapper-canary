n.d(t, { Z: () => _ }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(668339),
    c = n(481060),
    u = n(277139),
    d = n(388032),
    f = n(984392);
function p(e) {
    return String.fromCodePoint(
        ...e
            .toUpperCase()
            .split("")
            .map((e) => 127397 + e.charCodeAt(0)),
    );
}
let _ = function (e) {
    let { className: t, submitting: n, errorMessage: a, onChange: _, layerContext: m } = e,
        h = i.useRef(null),
        { countriesMap: g, countryCodeOptions: E } = (0, u.b)(),
        [b, y] = i.useState(() => {
            let e = s.Z.find((e) => "United States" === e.name);
            return "".concat(e.alpha2, "-").concat(e.phoneCountryCode);
        }),
        [O, v] = i.useState(() => {
            let [e, t] = s.Z.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return null != t ? t : "";
        }),
        S = i.useCallback(
            (e) => {
                var t, n;
                if (null != e) return p(null != (n = null == (t = g.get(e.value)) ? void 0 : t.alpha2) ? n : "");
            },
            [g],
        ),
        I = i.useCallback(
            (e, t) => {
                var n;
                let r = null == (n = g.get(e)) ? void 0 : n.code;
                null == _ || _("".concat(r).concat(t));
            },
            [g, _],
        ),
        T = i.useCallback(
            (e) => {
                var t;
                y(e), null == (t = h.current) || t.focus(), I(e, O);
            },
            [O, I],
        ),
        A = i.useCallback(
            (e) => {
                v(e), I(b, e);
            },
            [b, I],
        ),
        C = g.get(b);
    return (0, r.jsx)("fieldset", {
        children: (0, r.jsxs)("div", {
            className: o()(f.phoneField, t),
            children: [
                (0, r.jsx)(c.gNt, {
                    label: d.intl.string(d.t["k+bvrB"]),
                    children: (0, r.jsx)(l.d, {
                        value: b,
                        onChange: T,
                        renderOptionPrefix: S,
                        options: E,
                        popoutWidth: 280,
                        isDisabled: n,
                        popoutLayerContext: m,
                    }),
                }),
                (0, r.jsx)(c.oil, {
                    label: d.intl.string(d.t["64bX0M"]),
                    error: a,
                    leading: null == C ? void 0 : C.code,
                    type: "tel",
                    onChange: A,
                    autoFocus: !0,
                    inputRef: h,
                    disabled: n,
                    value: O,
                }),
            ],
        }),
    });
};
