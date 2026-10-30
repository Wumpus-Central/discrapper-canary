n.d(t, { A: () => d });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(900002),
    o = n(113278);
function d(e) {
    let { children: t, "aria-label": n, className: l, position: d, delay: u, lineClamp: c = 1, ...m } = e,
        x = s.useRef(null),
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
                let { onMouseEnter: s, onMouseLeave: r } = n;
                return (0, i.jsx)("div", {
                    className: a()(l, { [o.j]: 1 === c, [o.E]: c > 1 }),
                    ref: x,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = x;
                        null == e ||
                            (c > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === c && e.offsetWidth >= e.scrollWidth) ||
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
