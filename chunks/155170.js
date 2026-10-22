r.d(t, { K: () => f, z: () => p });
var n = r(407815),
    i = r(154370),
    o = r(961082),
    a = r(184093),
    s = r(66464),
    l = r(501907),
    u = r(753154),
    c = r(582128);
let f = (0, c.createContext)(null),
    p = (0, c.forwardRef)(function (e, t) {
        let r;
        [e, t] = (0, n.JT)(e, t, f);
        let { value: p = 0, minValue: d = 0, maxValue: h = 100, isIndeterminate: m = !1 } = e;
        p = (0, u.qE)(p, d, h);
        let [v, y] = (0, n._E)(!e["aria-label"] && !e["aria-labelledby"]),
            { progressBarProps: g, labelProps: b } = (function (e) {
                let {
                        value: t = 0,
                        minValue: r = 0,
                        maxValue: n = 100,
                        valueLabel: i,
                        isIndeterminate: c,
                        formatOptions: f = { style: "percent" },
                    } = e,
                    p = (0, o.$)(e, { labelable: !0 }),
                    { labelProps: d, fieldProps: h } = (0, s.M)({ ...e, labelElementType: "span" });
                t = (0, u.qE)(t, r, n);
                let m = n - r,
                    v = 0 === m ? 0 : (t - r) / m,
                    y = (0, l.J)(f);
                if (!c && !i) {
                    let e = "percent" === f.style ? v : t;
                    i = y.format(e);
                }
                return {
                    progressBarProps: (0, a.v)(p, {
                        ...h,
                        "aria-valuenow": c ? void 0 : t,
                        "aria-valuemin": r,
                        "aria-valuemax": n,
                        "aria-valuetext": c ? void 0 : i,
                        role: "progressbar",
                    }),
                    labelProps: d,
                };
            })({ ...e, label: y }),
            w = h - d;
        m || (r = 0 === w ? 0 : ((p - d) / w) * 100);
        let _ = (0, n.Sl)({
                ...e,
                defaultClassName: "react-aria-ProgressBar",
                values: { percentage: r, valueText: g["aria-valuetext"], isIndeterminate: m },
            }),
            S = (0, o.$)(e, { global: !0 });
        return c.createElement(
            n.tT.div,
            { ...(0, a.v)(S, _, g), ref: t, slot: e.slot || void 0 },
            c.createElement(i.I.Provider, { value: { ...b, ref: v, elementType: "span" } }, _.children),
        );
    });
