"use strict";
r.d(t, { K: () => d, z: () => p });
var n = r(407815),
    i = r(154370),
    o = r(961082),
    a = r(184093),
    s = r(66464),
    l = r(366632),
    u = r(329763),
    c = r(582128);
function f(e, t = -1 / 0, r = 1 / 0) {
    return Math.min(Math.max(e, t), r);
}
let d = (0, c.createContext)(null),
    p = (0, c.forwardRef)(function (e, t) {
        let r;
        [e, t] = (0, n.JT)(e, t, d);
        let { value: p = 0, minValue: h = 0, maxValue: m = 100, isIndeterminate: v = !1 } = e;
        p = f(p, h, m);
        let [y, g] = (0, n._E)(!e["aria-label"] && !e["aria-labelledby"]),
            { progressBarProps: b, labelProps: w } = (function (e) {
                let {
                        value: t = 0,
                        minValue: r = 0,
                        maxValue: n = 100,
                        valueLabel: i,
                        isIndeterminate: d,
                        formatOptions: p = { style: "percent" },
                    } = e,
                    h = (0, o.$)(e, { labelable: !0 }),
                    { labelProps: m, fieldProps: v } = (0, s.M)({ ...e, labelElementType: "span" });
                t = f(t, r, n);
                let y = n - r,
                    g = 0 === y ? 0 : (t - r) / y,
                    b = (function (e = {}) {
                        let { locale: t } = (0, l.Y)();
                        return (0, c.useMemo)(() => new (0, u.K)(t, e), [t, e]);
                    })(p);
                if (!d && !i) {
                    let e = "percent" === p.style ? g : t;
                    i = b.format(e);
                }
                return {
                    progressBarProps: (0, a.v)(h, {
                        ...v,
                        "aria-valuenow": d ? void 0 : t,
                        "aria-valuemin": r,
                        "aria-valuemax": n,
                        "aria-valuetext": d ? void 0 : i,
                        role: "progressbar",
                    }),
                    labelProps: m,
                };
            })({ ...e, label: g }),
            _ = m - h;
        v || (r = 0 === _ ? 0 : ((p - h) / _) * 100);
        let S = (0, n.Sl)({
                ...e,
                defaultClassName: "react-aria-ProgressBar",
                values: { percentage: r, valueText: b["aria-valuetext"], isIndeterminate: v },
            }),
            x = (0, o.$)(e, { global: !0 });
        return c.createElement(
            n.tT.div,
            { ...(0, a.v)(x, S, b), ref: t, slot: e.slot || void 0 },
            c.createElement(i.I.Provider, { value: { ...w, ref: y, elementType: "span" } }, S.children),
        );
    });
