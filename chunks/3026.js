n.d(t, { A: () => u });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(900002),
    o = n(113278);
function u(e) {
    let { children: t, "aria-label": n, className: i, position: u, delay: c, lineClamp: d = 1, ...m } = e,
        x = s.useRef(null),
        h = n ?? ("string" == typeof t && t),
        j = {};
    return (
        null != d && d > 1 && (j = { lineClamp: d, WebkitLineClamp: d }),
        (0, l.jsx)(r.ST, {
            ...m,
            position: u ?? "top",
            delay: c ?? 500,
            text: t,
            "aria-label": h,
            children: (n) => {
                let { onMouseEnter: s, onMouseLeave: r } = n;
                return (0, l.jsx)("div", {
                    className: a()(i, { [o.j]: 1 === d, [o.E]: d > 1 }),
                    ref: x,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = x;
                        null == e ||
                            (d > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === d && e.offsetWidth >= e.scrollWidth) ||
                            s?.();
                    },
                    onMouseLeave: r,
                    style: j,
                    children: t,
                });
            },
        })
    );
}
