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
    var n;
    let {
        as: r = "div",
        gap: a = 8,
        direction: l = "vertical",
        align: c = "stretch",
        justify: _ = "start",
        wrap: E = !1,
        padding: A = 0,
        fullWidth: h = !0,
        style: I,
        className: f,
        children: p,
        ...T
    } = e;
    return (0, i.jsx)(r, {
        ref: t,
        "data-align": c,
        "data-justify": _,
        "data-direction": l,
        "data-wrap": E,
        "data-full-width": h,
        className: s()(d.t, f),
        style: {
            ...I,
            gap: u(a),
            ...("number" == typeof (n = A) || "string" == typeof n
                ? { padding: u(n) }
                : Object.entries(n).reduce((e, t) => {
                      let [n, i] = t;
                      return (e[`padding${o()(n)}`] = u(i)), e;
                  }, {})),
        },
        ...T,
        children: p,
    });
});
function u(e) {
    return `var(--space-${e})`;
}
