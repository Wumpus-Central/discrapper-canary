r.d(E, { A: () => e });
var C = r(477900),
    o = r(582128),
    N = r(503698),
    a = r.n(N),
    O = r(835517),
    A = r(399667),
    R = r(819648),
    s = r(881245);
function e(_) {
    let { character: E, size: r, className: N } = _,
        e = o.useMemo(() => (0, R.vF)(E, Math.round(r * (0, O.A)())), [E, r]),
        T = o.useMemo(() => (0, A.O)(E), [E]),
        I = o.useRef(new Set()),
        [P, l] = o.useState(!1);
    function n(_) {
        (I.current.add(_), e.every((_) => I.current.has(_)) && l(!0));
    }
    return (
        o.useLayoutEffect(() => {
            let _ = e.filter((_) => I.current.has(_));
            ((I.current = new Set(_)), l(_.length === e.length));
        }, [e]),
        (0, C.jsx)("div", {
            role: "img",
            "aria-label": T,
            className: a()(s.GG, { [s.Kc]: P }, N),
            children: e.map((_) =>
                (0, C.jsx)(
                    "img",
                    { src: _, alt: "", draggable: !1, className: s.qd, onLoad: () => n(_), onError: () => n(_) },
                    _,
                ),
            ),
        })
    );
}
