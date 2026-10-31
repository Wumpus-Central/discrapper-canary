n.d(t, { A: () => d });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(900002),
    o = n(113278);
function d(e) {
    let { children: t, "aria-label": n, className: s, position: d, delay: u, lineClamp: c = 1, ...m } = e,
        x = l.useRef(null),
        h = n ?? ("string" == typeof t && t),
        j = {};
    return (
        null != c && c > 1 && (j = { lineClamp: c, WebkitLineClamp: c }),
        (0, i.jsx)(r.ST, {
            ...m,
            position: d ?? "top",
            delay: u ?? 500,
            text: t,
            "aria-label": h,
            children: (n) => {
                let { onMouseEnter: l, onMouseLeave: r } = n;
                return (0, i.jsx)("div", {
                    className: a()(s, { [o.j]: 1 === c, [o.E]: c > 1 }),
                    ref: x,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = x;
                        null == e ||
                            (c > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === c && e.offsetWidth >= e.scrollWidth) ||
                            l?.();
                    },
                    onMouseLeave: r,
                    style: j,
                    children: t,
                });
            },
        })
    );
}
