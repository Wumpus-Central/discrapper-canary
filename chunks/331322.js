"use strict";
n.d(t, { B: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(855036),
    l = n.n(o),
    u = n(927556);
let c = i.forwardRef(function (e, t) {
        let {
            as: n = "div",
            gap: i = 8,
            direction: a = "vertical",
            align: o = "stretch",
            justify: l = "start",
            wrap: c = !1,
            padding: f = 0,
            fullWidth: p = !0,
            style: h,
            className: m,
            children: g,
            ...E
        } = e;
        return (0, r.jsx)(n, {
            ref: t,
            "data-align": o,
            "data-justify": l,
            "data-direction": a,
            "data-wrap": c,
            "data-full-width": p,
            className: s()(u.t, m),
            style: { ...h, gap: d(i), ..._(f) },
            ...E,
            children: g,
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
