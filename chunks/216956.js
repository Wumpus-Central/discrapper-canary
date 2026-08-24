"use strict";
r.d(t, { K: () => d, z: () => p });
var n = r(760029),
    i = r(772856),
    o = r(201092);
function a(e, t = -1 / 0, r = 1 / 0) {
    return Math.min(Math.max(e, t), r);
}
var s = r(192734),
    l = r(429966),
    u = r(59344),
    c = r(685369),
    f = r(582128);
let d = (0, f.createContext)(null),
    p = (0, f.forwardRef)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, d);
        let { value: r = 0, minValue: p = 0, maxValue: h = 100, isIndeterminate: m = !1 } = e;
        r = a(r, p, h);
        let [v, y] = (0, n._E)(!e["aria-label"] && !e["aria-labelledby"]),
            { progressBarProps: g, labelProps: b } = (function (e) {
                let {
                        value: t = 0,
                        minValue: r = 0,
                        maxValue: n = 100,
                        valueLabel: i,
                        isIndeterminate: d,
                        formatOptions: p = { style: "percent" },
                    } = e,
                    h = (0, o.$)(e, { labelable: !0 }),
                    { labelProps: m, fieldProps: v } = (0, l.M)({ ...e, labelElementType: "span" }),
                    y = ((t = a(t, r, n)) - r) / (n - r),
                    g = (function (e = {}) {
                        let { locale: t } = (0, u.Y)();
                        return (0, f.useMemo)(() => new (0, c.K)(t, e), [t, e]);
                    })(p);
                if (!d && !i) {
                    let e = "percent" === p.style ? y : t;
                    i = g.format(e);
                }
                return {
                    progressBarProps: (0, s.v)(h, {
                        ...v,
                        "aria-valuenow": d ? void 0 : t,
                        "aria-valuemin": r,
                        "aria-valuemax": n,
                        "aria-valuetext": d ? void 0 : i,
                        role: "progressbar",
                    }),
                    labelProps: m,
                };
            })({ ...e, label: y }),
            w = m ? void 0 : ((r - p) / (h - p)) * 100,
            _ = (0, n.Sl)({
                ...e,
                defaultClassName: "react-aria-ProgressBar",
                values: { percentage: w, valueText: g["aria-valuetext"], isIndeterminate: m },
            }),
            S = (0, o.$)(e, { global: !0 });
        return f.createElement(
            "div",
            { ...(0, s.v)(S, _, g), ref: t, slot: e.slot || void 0 },
            f.createElement(i.I.Provider, { value: { ...b, ref: v, elementType: "span" } }, _.children),
        );
    });
