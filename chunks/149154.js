r.d(t, { K: () => f, z: () => d });
var n = r(980807),
    i = r(24322),
    o = r(892730),
    a = r(519837),
    s = r(514912),
    l = r(703443),
    u = r(594946),
    c = r(582128);
let f = (0, c.createContext)(null),
    d = (0, c.forwardRef)(function (e, t) {
        let r;
        [e, t] = (0, n.JT)(e, t, f);
        let { value: d = 0, minValue: p = 0, maxValue: h = 100, isIndeterminate: m = !1 } = e;
        d = (0, u.qE)(d, p, h);
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
                    d = (0, o.$)(e, { labelable: !0 }),
                    { labelProps: p, fieldProps: h } = (0, s.M)({ ...e, labelElementType: "span" });
                t = (0, u.qE)(t, r, n);
                let m = n - r,
                    v = 0 === m ? 0 : (t - r) / m,
                    y = (0, l.J)(f);
                if (!c && !i) {
                    let e = "percent" === f.style ? v : t;
                    i = y.format(e);
                }
                return {
                    progressBarProps: (0, a.v)(d, {
                        ...h,
                        "aria-valuenow": c ? void 0 : t,
                        "aria-valuemin": r,
                        "aria-valuemax": n,
                        "aria-valuetext": c ? void 0 : i,
                        role: "progressbar",
                    }),
                    labelProps: p,
                };
            })({ ...e, label: y }),
            w = h - p;
        m || (r = 0 === w ? 0 : ((d - p) / w) * 100);
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
