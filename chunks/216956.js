"use strict";
n.d(t, { K: () => f, z: () => p });
var r = n(760029),
    i = n(772856),
    a = n(201092);
function o(e, t = -1 / 0, n = 1 / 0) {
    return Math.min(Math.max(e, t), n);
}
var s = n(192734),
    l = n(429966),
    u = n(59344),
    c = n(685369),
    d = n(582128);
let f = (0, d.createContext)(null),
    p = (0, d.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, f);
        let { value: n = 0, minValue: p = 0, maxValue: h = 100, isIndeterminate: m = !1 } = e;
        n = o(n, p, h);
        let [g, v] = (0, r._E)(!e["aria-label"] && !e["aria-labelledby"]),
            { progressBarProps: y, labelProps: b } = (function (e) {
                let {
                        value: t = 0,
                        minValue: n = 0,
                        maxValue: r = 100,
                        valueLabel: i,
                        isIndeterminate: f,
                        formatOptions: p = { style: "percent" },
                    } = e,
                    h = (0, a.$)(e, { labelable: !0 }),
                    { labelProps: m, fieldProps: g } = (0, l.M)({ ...e, labelElementType: "span" }),
                    v = ((t = o(t, n, r)) - n) / (r - n),
                    y = (function (e = {}) {
                        let { locale: t } = (0, u.Y)();
                        return (0, d.useMemo)(() => new (0, c.K)(t, e), [t, e]);
                    })(p);
                if (!f && !i) {
                    let e = "percent" === p.style ? v : t;
                    i = y.format(e);
                }
                return {
                    progressBarProps: (0, s.v)(h, {
                        ...g,
                        "aria-valuenow": f ? void 0 : t,
                        "aria-valuemin": n,
                        "aria-valuemax": r,
                        "aria-valuetext": f ? void 0 : i,
                        role: "progressbar",
                    }),
                    labelProps: m,
                };
            })({ ...e, label: v }),
            _ = m ? void 0 : ((n - p) / (h - p)) * 100,
            w = (0, r.Sl)({
                ...e,
                defaultClassName: "react-aria-ProgressBar",
                values: { percentage: _, valueText: y["aria-valuetext"], isIndeterminate: m },
            }),
            x = (0, a.$)(e, { global: !0 });
        return d.createElement(
            "div",
            { ...(0, s.v)(x, w, y), ref: t, slot: e.slot || void 0 },
            d.createElement(i.I.Provider, { value: { ...b, ref: g, elementType: "span" } }, w.children),
        );
    });
