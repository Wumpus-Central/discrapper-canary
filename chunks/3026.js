t.d(n, { A: () => d });
var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(900002),
    o = t(113278);
function d(e) {
    let { children: n, "aria-label": t, className: l, position: d, delay: c, lineClamp: u = 1, ...m } = e,
        h = i.useRef(null),
        x = t ?? ("string" == typeof n && n),
        j = {};
    return (
        null != u && u > 1 && (j = { lineClamp: u, WebkitLineClamp: u }),
        (0, s.jsx)(r.ST, {
            ...m,
            position: d ?? "top",
            delay: c ?? 500,
            text: n,
            "aria-label": x,
            children: (t) => {
                let { onMouseEnter: i, onMouseLeave: r } = t;
                return (0, s.jsx)("div", {
                    className: a()(l, { [o.j]: 1 === u, [o.E]: u > 1 }),
                    ref: h,
                    "aria-hidden": e["aria-hidden"],
                    onMouseEnter: () => {
                        let { current: e } = h;
                        null == e ||
                            (u > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                            (1 === u && e.offsetWidth >= e.scrollWidth) ||
                            i?.();
                    },
                    onMouseLeave: r,
                    style: j,
                    children: n,
                });
            },
        })
    );
}
