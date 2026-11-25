var l = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(664343),
    o = t(113278);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { children: n, "aria-label": t, className: a, position: u, delay: c, lineClamp: d = 1, ...m } = e,
                x = s.useRef(null),
                h = t ?? ("string" == typeof n && n),
                p = {};
            return (
                null != d && d > 1 && (p = { lineClamp: d, WebkitLineClamp: d }),
                (0, l.jsx)(r.ST, {
                    ...m,
                    position: u ?? "top",
                    delay: c ?? 500,
                    text: n,
                    "aria-label": h,
                    children: (t) => {
                        let { onMouseEnter: s, onMouseLeave: r } = t;
                        return (0, l.jsx)("div", {
                            className: i()(a, { [o.j]: 1 === d, [o.E]: d > 1 }),
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
                            style: p,
                            children: n,
                        });
                    },
                })
            );
        },
    },
);
