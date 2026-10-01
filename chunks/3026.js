n.d(t, { A: () => u });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(900002),
    o = n(113278);
function u(e) {
    let { children: t, "aria-label": n, className: s, position: u, delay: d, lineClamp: c = 1, ...m } = e,
        x = i.useRef(null),
        h = n ?? ("string" == typeof t && t),
        j = {};
    return (
        null != c && c > 1 && (j = { lineClamp: c, WebkitLineClamp: c }),
        (0, l.jsx)(r.ST, {
            ...m,
            position: u ?? "top",
            delay: d ?? 500,
            text: t,
            "aria-label": h,
            children: (n) => {
                let { onMouseEnter: i, onMouseLeave: r } = n;
                return (0, l.jsx)("div", {
                    className: a()(s, { [o.j]: 1 === c, [o.E]: c > 1 }),
                    ref: x,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = x;
                        null == e ||
                            (c > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === c && e.offsetWidth >= e.scrollWidth) ||
                            i?.();
                    },
                    onMouseLeave: r,
                    style: j,
                    children: t,
                });
            },
        })
    );
}
