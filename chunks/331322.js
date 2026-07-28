"use strict";
n.d(t, { B: () => c });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(359689),
    o = n.n(l),
    d = n(537157);
let c = r.forwardRef(function (e, t) {
        let {
            as: n = "div",
            gap: r = 8,
            direction: a = "vertical",
            align: l = "stretch",
            justify: o = "start",
            wrap: c = !1,
            padding: E = 0,
            fullWidth: A = !0,
            style: h,
            className: I,
            children: f,
            ...p
        } = e;
        return (0, i.jsx)(n, {
            ref: t,
            "data-align": l,
            "data-justify": o,
            "data-direction": a,
            "data-wrap": c,
            "data-full-width": A,
            className: s()(d.t, I),
            style: { ...h, gap: u(r), ..._(E) },
            ...p,
            children: f,
        });
    }),
    u = (e) => `var(--space-${e})`,
    _ = (e) =>
        "number" == typeof e || "string" == typeof e
            ? { padding: u(e) }
            : Object.entries(e).reduce((e, t) => {
                  let [n, i] = t;
                  return (e[`padding${o()(n)}`] = u(i)), e;
              }, {});
