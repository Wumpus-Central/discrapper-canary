var l = r(477900),
    n = r(582128),
    s = r(503698),
    a = r.n(s),
    c = r(399667),
    i = r(819648),
    o = r(881245);
r.d(
    t,
    {},
    {
        A: function (e) {
            let { character: t, size: r, className: s } = e,
                d = n.useMemo(() => (0, i.vF)(t, r), [t, r]),
                h = n.useMemo(() => (0, c.O)(t), [t]),
                u = n.useRef(new Set()),
                [p, g] = n.useState(!1);
            function v(e) {
                (u.current.add(e), d.every((e) => u.current.has(e)) && g(!0));
            }
            return (
                n.useLayoutEffect(() => {
                    let e = d.filter((e) => u.current.has(e));
                    ((u.current = new Set(e)), g(e.length === d.length));
                }, [d]),
                (0, l.jsx)("div", {
                    role: "img",
                    "aria-label": h,
                    className: a()(o.GG, { [o.Kc]: p }, s),
                    children: d.map((e) =>
                        (0, l.jsx)(
                            "img",
                            {
                                src: e,
                                alt: "",
                                draggable: !1,
                                className: o.qd,
                                onLoad: () => v(e),
                                onError: () => v(e),
                            },
                            e,
                        ),
                    ),
                })
            );
        },
    },
);
