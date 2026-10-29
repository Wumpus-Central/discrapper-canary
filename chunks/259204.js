r.d(t, { A: () => u });
var s = r(477900),
    a = r(582128),
    l = r(503698),
    n = r.n(l),
    c = r(835517),
    i = r(399667),
    d = r(819648),
    o = r(881245);
function u(e) {
    let { character: t, size: r, className: l } = e,
        u = a.useMemo(() => (0, d.vF)(t, Math.round(r * (0, c.A)())), [t, r]),
        h = a.useMemo(() => (0, i.O)(t), [t]),
        g = a.useRef(new Set()),
        [p, v] = a.useState(!1);
    function f(e) {
        (g.current.add(e), u.every((e) => g.current.has(e)) && v(!0));
    }
    return (
        a.useLayoutEffect(() => {
            let e = u.filter((e) => g.current.has(e));
            ((g.current = new Set(e)), v(e.length === u.length));
        }, [u]),
        (0, s.jsx)("div", {
            role: "img",
            "aria-label": h,
            className: n()(o.GG, { [o.Kc]: p }, l),
            children: u.map((e) =>
                (0, s.jsx)(
                    "img",
                    { src: e, alt: "", draggable: !1, className: o.qd, onLoad: () => f(e), onError: () => f(e) },
                    e,
                ),
            ),
        })
    );
}
