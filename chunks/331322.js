"use strict";
n.d(t, { B: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(855036),
    l = n.n(o),
    u = n(76462);
let c = i.forwardRef(function (e, t) {
        let {
            as: n = "div",
            gap: i = 8,
            direction: a = "vertical",
            align: o = "stretch",
            justify: l = "start",
            wrap: c = !1,
            padding: f = 0,
            fullWidth: h = !0,
            style: p,
            className: g,
            children: E,
            ...A
        } = e;
        return (0, r.jsx)(n, {
            ref: t,
            "data-align": o,
            "data-justify": l,
            "data-direction": a,
            "data-wrap": c,
            "data-full-width": h,
            className: s()(u.t, g),
            style: { ...p, gap: d(i), ..._(f) },
            ...A,
            children: E,
        });
    }),
    d = (e) => `var(--space-${e})`,
    _ = (e) =>
        "number" == typeof e || "string" == typeof e
            ? { padding: d(e) }
            : Object.entries(e).reduce((e, t) => {
                  let [n, r] = t;
                  return (e[`padding${l()(n)}`] = d(r)), e;
              }, {});
