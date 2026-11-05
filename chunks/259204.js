var n = r(477900),
    a = r(582128),
    l = r(503698),
    s = r.n(l),
    c = r(835517),
    i = r(399667),
    o = r(819648),
    d = r(881245);
r.d(
    t,
    {},
    {
        A: function (e) {
            let { character: t, size: r, className: l } = e,
                h = a.useMemo(() => (0, o.vF)(t, Math.round(r * (0, c.A)())), [t, r]),
                u = a.useMemo(() => (0, i.O)(t), [t]),
                p = a.useRef(new Set()),
                [g, v] = a.useState(!1);
            function f(e) {
                (p.current.add(e), h.every((e) => p.current.has(e)) && v(!0));
            }
            return (
                a.useLayoutEffect(() => {
                    let e = h.filter((e) => p.current.has(e));
                    ((p.current = new Set(e)), v(e.length === h.length));
                }, [h]),
                (0, n.jsx)("div", {
                    role: "img",
                    "aria-label": u,
                    className: s()(d.GG, { [d.Kc]: g }, l),
                    children: h.map((e) =>
                        (0, n.jsx)(
                            "img",
                            {
                                src: e,
                                alt: "",
                                draggable: !1,
                                className: d.qd,
                                onLoad: () => f(e),
                                onError: () => f(e),
                            },
                            e,
                        ),
                    ),
                })
            );
        },
    },
);
