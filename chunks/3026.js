"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(781696),
    o = n(596333);
function c(e) {
    let { children: t, "aria-label": n, className: s, position: c, delay: u, lineClamp: d = 1, ...h } = e,
        m = l.useRef(null),
        p = n ?? ("string" == typeof t && t),
        f = {};
    return (
        null != d && d > 1 && (f = { lineClamp: d, WebkitLineClamp: d }),
        (0, i.jsx)(a.ST, {
            ...h,
            position: c ?? "top",
            delay: u ?? 500,
            text: t,
            "aria-label": p,
            children: (n) => {
                let { onMouseEnter: l, onMouseLeave: a } = n;
                return (0, i.jsx)("div", {
                    className: r()(s, { [o.j]: 1 === d, [o.E]: d > 1 }),
                    ref: m,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = m;
                        null == e ||
                            (d > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === d && e.offsetWidth >= e.scrollWidth) ||
                            l?.();
                    },
                    onMouseLeave: a,
                    style: f,
                    children: t,
                });
            },
        })
    );
}
