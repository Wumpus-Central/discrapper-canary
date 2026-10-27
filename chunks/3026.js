n.d(t, { A: () => c });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(900002),
    o = n(113278);
function c(e) {
    let { children: t, "aria-label": n, className: l, position: c, delay: d, lineClamp: u = 1, ...m } = e,
        x = s.useRef(null),
        h = n ?? ("string" == typeof t && t),
        j = {};
    return (
        null != u && u > 1 && (j = { lineClamp: u, WebkitLineClamp: u }),
        (0, i.jsx)(r.ST, {
            ...m,
            position: c ?? "top",
            delay: d ?? 500,
            text: t,
            "aria-label": h,
            children: (n) => {
                let { onMouseEnter: s, onMouseLeave: r } = n;
                return (0, i.jsx)("div", {
                    className: a()(l, { [o.j]: 1 === u, [o.E]: u > 1 }),
                    ref: x,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = x;
                        null == e ||
                            (u > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === u && e.offsetWidth >= e.scrollWidth) ||
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
