"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(281258);
let u = 500;
function c(e) {
    let { children: t, "aria-label": n, className: s, position: c, delay: d, lineClamp: _ = 1, ...f } = e,
        p = i.useRef(null),
        h = n ?? ("string" == typeof t && t),
        m = {};
    return (
        null != _ && _ > 1 && (m = { lineClamp: _, WebkitLineClamp: _ }),
        (0, r.jsx)(o.STz, {
            ...f,
            position: c ?? "top",
            delay: d ?? u,
            text: t,
            "aria-label": h,
            children: (n) => {
                let { onMouseEnter: i, onMouseLeave: o } = n;
                return (0, r.jsx)("div", {
                    className: a()(s, { [l.j]: 1 === _, [l.E]: _ > 1 }),
                    ref: p,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = p;
                        null == e ||
                            (_ > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === _ && e.offsetWidth >= e.scrollWidth) ||
                            i?.();
                    },
                    onMouseLeave: o,
                    style: m,
                    children: t,
                });
            },
        })
    );
}
