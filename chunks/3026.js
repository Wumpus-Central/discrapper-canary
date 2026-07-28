"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(900002),
    o = n(380181);
function d(e) {
    let { children: t, "aria-label": n, className: a, position: d, delay: c, lineClamp: u = 1, ..._ } = e,
        E = r.useRef(null),
        A = n ?? ("string" == typeof t && t),
        h = {};
    return (
        null != u && u > 1 && (h = { lineClamp: u, WebkitLineClamp: u }),
        (0, i.jsx)(l.ST, {
            ..._,
            position: d ?? "top",
            delay: c ?? 500,
            text: t,
            "aria-label": A,
            children: (n) => {
                let { onMouseEnter: r, onMouseLeave: l } = n;
                return (0, i.jsx)("div", {
                    className: s()(a, { [o.j]: 1 === u, [o.E]: u > 1 }),
                    ref: E,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = E;
                        null == e ||
                            (u > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === u && e.offsetWidth >= e.scrollWidth) ||
                            r?.();
                    },
                    onMouseLeave: l,
                    style: h,
                    children: t,
                });
            },
        })
    );
}
