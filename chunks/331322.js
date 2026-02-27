"use strict";
n.d(t, { B: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(855036),
    l = n.n(o),
    u = n(927556);
let c = i.forwardRef(function (e, t) {
        let {
            as: n = "div",
            gap: i = 8,
            direction: s = "vertical",
            align: o = "stretch",
            justify: l = "start",
            wrap: c = !1,
            padding: f = 0,
            fullWidth: p = !0,
            style: h,
            className: m,
            children: E,
            ...g
        } = e;
        return (0, r.jsx)(n, {
            ref: t,
            "data-align": o,
            "data-justify": l,
            "data-direction": s,
            "data-wrap": c,
            "data-full-width": p,
            className: a()(u.t, m),
            style: { ...h, gap: d(i), ..._(f) },
            ...g,
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
