n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(176299),
    c = n(512847),
    u = n(350810),
    d = n(612226),
    p = n(714338),
    f = n(607070),
    h = n(317858),
    m = n(635395),
    g = n(5560),
    _ = n(451478),
    b = n(585483),
    E = n(145604),
    O = n(718813),
    I = n(981631),
    v = n(3484);
let y = i.memo(function () {
    let e = (0, u.Z)(),
        t = i.useRef(null),
        n = i.useCallback((e) => {
            let { duration: n, intensity: r } = e;
            if (f.Z.useReducedMotion || !_.Z.isFocused()) return;
            let { current: i } = t;
            a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r);
        }, []);
    return (
        i.useEffect(() => (p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable()), []),
        i.useEffect(
            () => (
                b.S.subscribe(I.CkL.SHAKE_APP, n),
                () => {
                    b.S.unsubscribe(I.CkL.SHAKE_APP, n);
                }
            ),
            [n],
        ),
        (0, h.Z)(),
        (0, r.jsxs)(s.F0h, {
            ref: t,
            className: v.app,
            children: [
                (0, r.jsx)(O.Z, {
                    className: v.layers,
                    children: (0, r.jsx)(o.Z, {}),
                }),
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(g.Z, {}),
                !e && (0, r.jsx)(s.c43, {}),
            ],
        })
    );
});
