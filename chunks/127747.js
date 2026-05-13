"use strict";
n.d(t, { K: () => _, z: () => f });
var i = n(825913),
    r = n(129844),
    s = n(290424);
function a(e, t = -1 / 0, n = 1 / 0) {
    return Math.min(Math.max(e, t), n);
}
var o = n(318473),
    l = n(783786),
    u = n(402112),
    c = n(685369),
    d = n(64700);
let _ = (0, d.createContext)(null),
    f = (0, d.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, _);
        let { value: n = 0, minValue: f = 0, maxValue: h = 100, isIndeterminate: p = !1 } = e;
        n = a(n, f, h);
        let [E, m] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            { progressBarProps: g, labelProps: A } = (function (e) {
                let {
                        value: t = 0,
                        minValue: n = 0,
                        maxValue: i = 100,
                        valueLabel: r,
                        isIndeterminate: _,
                        formatOptions: f = { style: "percent" },
                    } = e,
                    h = (0, s.$)(e, { labelable: !0 }),
                    { labelProps: p, fieldProps: E } = (0, l.M)({ ...e, labelElementType: "span" }),
                    m = ((t = a(t, n, i)) - n) / (i - n),
                    g = (function (e = {}) {
                        let { locale: t } = (0, u.Y)();
                        return (0, d.useMemo)(() => new (0, c.K)(t, e), [t, e]);
                    })(f);
                if (!_ && !r) {
                    let e = "percent" === f.style ? m : t;
                    r = g.format(e);
                }
                return {
                    progressBarProps: (0, o.v)(h, {
                        ...E,
                        "aria-valuenow": _ ? void 0 : t,
                        "aria-valuemin": n,
                        "aria-valuemax": i,
                        "aria-valuetext": _ ? void 0 : r,
                        role: "progressbar",
                    }),
                    labelProps: p,
                };
            })({ ...e, label: m }),
            I = p ? void 0 : ((n - f) / (h - f)) * 100,
            T = (0, i.Sl)({
                ...e,
                defaultClassName: "react-aria-ProgressBar",
                values: { percentage: I, valueText: g["aria-valuetext"], isIndeterminate: p },
            }),
            S = (0, s.$)(e, { global: !0 });
        return d.createElement(
            "div",
            { ...(0, o.v)(S, T, g), ref: t, slot: e.slot || void 0 },
            d.createElement(r.I.Provider, { value: { ...A, ref: E, elementType: "span" } }, T.children),
        );
    });
