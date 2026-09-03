n.d(t, { A: () => u });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(900002),
    o = n(113278);
function u(e) {
    let { children: t, "aria-label": n, className: s, position: u, delay: c, lineClamp: d = 1, ...h } = e,
        m = i.useRef(null),
        f = n ?? ("string" == typeof t && t),
        p = {};
    return (
        null != d && d > 1 && (p = { lineClamp: d, WebkitLineClamp: d }),
        (0, l.jsx)(a.ST, {
            ...h,
            position: u ?? "top",
            delay: c ?? 500,
            text: t,
            "aria-label": f,
            children: (n) => {
                let { onMouseEnter: i, onMouseLeave: a } = n;
                return (0, l.jsx)("div", {
                    className: r()(s, { [o.j]: 1 === d, [o.E]: d > 1 }),
                    ref: m,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = m;
                        null == e ||
                            (d > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === d && e.offsetWidth >= e.scrollWidth) ||
                            i?.();
                    },
                    onMouseLeave: a,
                    style: p,
                    children: t,
                });
            },
        })
    );
}
