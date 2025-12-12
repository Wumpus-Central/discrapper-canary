n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(512847),
    c = n(350810),
    u = n(612226),
    d = n(714338),
    p = n(607070),
    f = n(317858),
    g = n(635395),
    h = n(533934),
    m = n(5560),
    _ = n(451478),
    b = n(585483),
    E = n(145604),
    O = n(718813),
    v = n(981631),
    y = n(3484);
let I = i.memo(function () {
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
                b.S.subscribe(v.CkL.SHAKE_APP, n),
                () => {
                    b.S.unsubscribe(v.CkL.SHAKE_APP, n);
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
                (0, r.jsx)(g.Z, {}),
                (0, r.jsx)(o.Z, {}),
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(m.Z, {}),
                !e && (0, r.jsx)(s.c43, {}),
            ],
        })
    );
});
