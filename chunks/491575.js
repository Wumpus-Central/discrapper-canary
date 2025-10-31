n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(512847),
    c = n(350810),
    u = n(612226),
    d = n(714338),
    p = n(607070),
    f = n(317858),
    m = n(635395),
    h = n(533934),
    g = n(5560),
    _ = n(451478),
    b = n(585483),
    E = n(145604),
    O = n(718813),
    I = n(981631),
    y = n(3484);
let v = i.memo(function () {
    let e = (0, c.Z)(),
        t = i.useRef(null),
        n = i.useCallback((e) => {
            let { duration: n, intensity: r } = e;
            if (p.Z.useReducedMotion || !_.Z.isFocused()) return;
            let { current: i } = t;
            a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r);
        }, []);
    return (
        i.useEffect(() => (d.Z.setLayout(u.ZP), d.Z.enable(), () => d.Z.disable()), []),
        i.useEffect(
            () => (
                b.S.subscribe(I.CkL.SHAKE_APP, n),
                () => {
                    b.S.unsubscribe(I.CkL.SHAKE_APP, n);
                }
            ),
            [n],
        ),
        (0, f.Z)(),
        (0, r.jsxs)(s.F0h, {
            ref: t,
            className: y.app,
            children: [
                (0, r.jsx)(O.Z, {
                    className: y.layers,
                    children: (0, r.jsx)(h.Z, {}),
                }),
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)(o.Z, {}),
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(g.Z, {}),
                !e && (0, r.jsx)(s.c43, {}),
            ],
        })
    );
});
