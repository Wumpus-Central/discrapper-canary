"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(537808);
let u = 500;
function c(e) {
    let { children: t, "aria-label": n, className: a, position: c, delay: d, ..._ } = e,
        f = i.useRef(null),
        p = n ?? ("string" == typeof t && t);
    return (0, r.jsx)(o.STz, {
        ..._,
        position: c ?? "top",
        delay: d ?? u,
        text: t,
        "aria-label": p,
        children: (n) => {
            let { onMouseEnter: i, onMouseLeave: o } = n;
            return (0, r.jsx)("div", {
                className: s()(a, l.j),
                ref: f,
                "aria-hidden": e["aria-hidden"],
                onMouseEnter: () => {
                    let { current: e } = f;
                    null != e && e.offsetWidth < e.scrollWidth && i?.();
                },
                onMouseLeave: o,
                children: t,
            });
        },
    });
}
