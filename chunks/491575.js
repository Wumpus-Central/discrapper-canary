n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(481060),
    s = n(176299),
    c = n(512847),
    u = n(612226),
    d = n(714338),
    p = n(607070),
    h = n(317858),
    f = n(635395),
    g = n(5560),
    m = n(451478),
    b = n(585483),
    _ = n(145604),
    E = n(718813),
    O = n(981631),
    N = n(273034);
let y = i.memo(function () {
    let e = i.useRef(null),
        t = i.useCallback((t) => {
            let { duration: n, intensity: r } = t;
            if (p.Z.useReducedMotion || !m.Z.isFocused()) return;
            let { current: i } = e;
            a()(null != i, 'Shakeable is shaken when not mounted'), i.shake(n, r);
        }, []);
    return (
        i.useEffect(() => (d.Z.setLayout(u.ZP), d.Z.enable(), () => d.Z.disable()), []),
        i.useEffect(
            () => (
                b.S.subscribe(O.CkL.SHAKE_APP, t),
                () => {
                    b.S.unsubscribe(O.CkL.SHAKE_APP, t);
                }
            ),
            [t]
        ),
        (0, h.Z)(),
        (0, r.jsxs)(o.F0h, {
            ref: e,
            className: N.app,
            children: [
                (0, r.jsx)(E.Z, {
                    className: N.layers,
                    children: (0, r.jsx)(s.Z, {})
                }),
                (0, r.jsx)(f.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(_.Z, {}),
                (0, r.jsx)(g.Z, {}),
                (0, r.jsx)(o.c43, {})
            ]
        })
    );
});
