"use strict";
r.d(t, { K: () => p, z: () => d });
var n = r(760029),
    o = r(772856),
    i = r(201092);
function a(e, t = -1 / 0, r = 1 / 0) {
    return Math.min(Math.max(e, t), r);
}
var s = r(192734),
    l = r(429966),
    u = r(59344),
    c = r(685369),
    f = r(582128);
let p = (0, f.createContext)(null),
    d = (0, f.forwardRef)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, p);
        let { value: r = 0, minValue: d = 0, maxValue: h = 100, isIndeterminate: m = !1 } = e;
        r = a(r, d, h);
        let [v, y] = (0, n._E)(!e["aria-label"] && !e["aria-labelledby"]),
            { progressBarProps: g, labelProps: b } = (function (e) {
                let {
                        value: t = 0,
                        minValue: r = 0,
                        maxValue: n = 100,
                        valueLabel: o,
                        isIndeterminate: p,
                        formatOptions: d = { style: "percent" },
                    } = e,
                    h = (0, i.$)(e, { labelable: !0 }),
                    { labelProps: m, fieldProps: v } = (0, l.M)({ ...e, labelElementType: "span" }),
                    y = ((t = a(t, r, n)) - r) / (n - r),
                    g = (function (e = {}) {
                        let { locale: t } = (0, u.Y)();
                        return (0, f.useMemo)(() => new (0, c.K)(t, e), [t, e]);
                    })(d);
                if (!p && !o) {
                    let e = "percent" === d.style ? y : t;
                    o = g.format(e);
                }
                return {
                    progressBarProps: (0, s.v)(h, {
                        ...v,
                        "aria-valuenow": p ? void 0 : t,
                        "aria-valuemin": r,
                        "aria-valuemax": n,
                        "aria-valuetext": p ? void 0 : o,
                        role: "progressbar",
                    }),
                    labelProps: m,
                };
            })({ ...e, label: y }),
            w = m ? void 0 : ((r - d) / (h - d)) * 100,
            _ = (0, n.Sl)({
                ...e,
                defaultClassName: "react-aria-ProgressBar",
                values: { percentage: w, valueText: g["aria-valuetext"], isIndeterminate: m },
            }),
            S = (0, i.$)(e, { global: !0 });
        return f.createElement(
            "div",
            { ...(0, s.v)(S, _, g), ref: t, slot: e.slot || void 0 },
            f.createElement(o.I.Provider, { value: { ...b, ref: v, elementType: "span" } }, _.children),
        );
    });
