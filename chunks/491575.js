n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(481060),
    o = n(176299),
    d = n(512847),
    c = n(612226),
    u = n(714338),
    h = n(607070),
    m = n(317858),
    p = n(635395),
    g = n(5560),
    _ = n(451478),
    f = n(585483),
    E = n(145604),
    I = n(718813),
    C = n(981631),
    N = n(823355);
let v = l.memo(function () {
    let e = l.useRef(null),
        t = l.useCallback((t) => {
            let { duration: n, intensity: i } = t;
            if (h.Z.useReducedMotion || !_.Z.isFocused()) return;
            let { current: l } = e;
            a()(null != l, 'Shakeable is shaken when not mounted'), l.shake(n, i);
        }, []);
    return (
        l.useEffect(() => (u.Z.setLayout(c.ZP), u.Z.enable(), () => u.Z.disable()), []),
        l.useEffect(
            () => (
                f.S.subscribe(C.CkL.SHAKE_APP, t),
                () => {
                    f.S.unsubscribe(C.CkL.SHAKE_APP, t);
                }
            ),
            [t]
        ),
        (0, m.Z)(),
        (0, i.jsxs)(s.F0h, {
            ref: e,
            className: N.app,
            children: [
                (0, i.jsx)(I.Z, {
                    className: N.layers,
                    children: (0, i.jsx)(o.Z, {})
                }),
                (0, i.jsx)(p.Z, {}),
                (0, i.jsx)(d.Z, {}),
                (0, i.jsx)(E.Z, {}),
                (0, i.jsx)(g.Z, {}),
                (0, i.jsx)(s.c43, {})
            ]
        })
    );
});
