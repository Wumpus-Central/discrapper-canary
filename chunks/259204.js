r.d(o, { A: () => A });
var e = r(477900),
    C = r(582128),
    E = r(503698),
    c = r.n(E),
    d = r(835517),
    s = r(399667),
    _ = r(819648),
    n = r(881245);
function A(a) {
    let { character: o, size: r, className: E } = a,
        A = C.useMemo(() => (0, _.vF)(o, Math.round(r * (0, d.A)())), [o, r]),
        N = C.useMemo(() => (0, s.O)(o), [o]),
        R = C.useRef(new Set()),
        [O, t] = C.useState(!1);
    function l(a) {
        (R.current.add(a), A.every((a) => R.current.has(a)) && t(!0));
    }
    return (
        C.useLayoutEffect(() => {
            let a = A.filter((a) => R.current.has(a));
            ((R.current = new Set(a)), t(a.length === A.length));
        }, [A]),
        (0, e.jsx)("div", {
            role: "img",
            "aria-label": N,
            className: c()(n.GG, { [n.Kc]: O }, E),
            children: A.map((a) =>
                (0, e.jsx)(
                    "img",
                    { src: a, alt: "", draggable: !1, className: n.qd, onLoad: () => l(a), onError: () => l(a) },
                    a,
                ),
            ),
        })
    );
}
