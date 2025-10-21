n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(481060),
    s = n(176299),
    c = n(512847),
    u = n(350810),
    d = n(612226),
    p = n(714338),
    f = n(607070),
    h = n(317858),
    g = n(635395),
    m = n(5560),
    b = n(451478),
    _ = n(585483),
    E = n(145604),
    O = n(718813),
    v = n(981631),
    y = n(776457);
let I = i.memo(function () {
    let e = (0, u.Z)(),
        t = i.useRef(null),
        n = i.useCallback((e) => {
            let { duration: n, intensity: r } = e;
            if (f.Z.useReducedMotion || !b.Z.isFocused()) return;
            let { current: i } = t;
            a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r);
        }, []);
    return (
        i.useEffect(() => (p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable()), []),
        i.useEffect(
            () => (
                _.S.subscribe(v.CkL.SHAKE_APP, n),
                () => {
                    _.S.unsubscribe(v.CkL.SHAKE_APP, n);
                }
            ),
            [n],
        ),
        (0, h.Z)(),
        (0, r.jsxs)(o.F0h, {
            ref: t,
            className: y.app,
            children: [
                (0, r.jsx)(O.Z, {
                    className: y.layers,
                    children: (0, r.jsx)(s.Z, {}),
                }),
                (0, r.jsx)(g.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(m.Z, {}),
                !e && (0, r.jsx)(o.c43, {}),
            ],
        })
    );
});
