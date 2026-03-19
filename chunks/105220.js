n.d(t, { A: () => N });
var i = n(627968),
    a = n(64700),
    r = n(284009),
    l = n.n(r),
    s = n(397927),
    o = n(143991),
    d = n(942857),
    c = n(915967),
    u = n(775121),
    A = n(775602),
    h = n(926441),
    _ = n(327866),
    m = n(959278),
    g = n(575486),
    p = n(531685),
    E = n(203982),
    I = n(249477),
    f = n(507060),
    C = n(652215),
    T = n(563760);
let N = a.memo(function () {
    let e = (0, d.A)(),
        t = a.useRef(null),
        n = a.useCallback((e) => {
            let { duration: n, intensity: i } = e;
            if (A.A.useReducedMotion || !p.A.isFocused()) return;
            let { current: a } = t;
            l()(null != a, "Shakeable is shaken when not mounted"), a.shake(n, i);
        }, []);
    return (
        a.useEffect(() => (u.A.setLayout(c.Ay), u.A.enable(), () => u.A.disable()), []),
        a.useEffect(
            () => (
                E._.subscribe(C.jej.SHAKE_APP, n),
                () => {
                    E._.unsubscribe(C.jej.SHAKE_APP, n);
                }
            ),
            [n],
        ),
        (0, h.A)(),
        (0, i.jsxs)(s.x0k, {
            ref: t,
            className: T.y,
            children: [
                (0, i.jsx)(f.A, { className: T.Z, children: (0, i.jsx)(m.A, {}) }),
                (0, i.jsx)(_.A, {}),
                (0, i.jsx)(o.A, {}),
                (0, i.jsx)(I.A, {}),
                (0, i.jsx)(g.A, {}),
                !e && (0, i.jsx)(s.Smm, {}),
            ],
        })
    );
});
