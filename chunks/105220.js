n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(397927),
    o = n(143991),
    c = n(942857),
    u = n(915967),
    d = n(775121),
    p = n(775602),
    f = n(926441),
    h = n(327866),
    A = n(959278),
    g = n(575486),
    m = n(531685),
    b = n(203982),
    _ = n(249477),
    E = n(507060),
    O = n(652215),
    y = n(92854);
let I = i.memo(function () {
    let e = (0, c.A)(),
        t = i.useRef(null),
        n = i.useCallback((e) => {
            let { duration: n, intensity: r } = e;
            if (p.A.useReducedMotion || !m.A.isFocused()) return;
            let { current: i } = t;
            a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r);
        }, []);
    return (
        i.useEffect(() => (d.A.setLayout(u.Ay), d.A.enable(), () => d.A.disable()), []),
        i.useEffect(
            () => (
                b._.subscribe(O.jej.SHAKE_APP, n),
                () => {
                    b._.unsubscribe(O.jej.SHAKE_APP, n);
                }
            ),
            [n],
        ),
        (0, f.A)(),
        (0, r.jsxs)(s.x0k, {
            ref: t,
            className: y.y,
            children: [
                (0, r.jsx)(E.A, {
                    className: y.Z,
                    children: (0, r.jsx)(A.A, {}),
                }),
                (0, r.jsx)(h.A, {}),
                (0, r.jsx)(o.A, {}),
                (0, r.jsx)(_.A, {}),
                (0, r.jsx)(g.A, {}),
                !e && (0, r.jsx)(s.Smm, {}),
            ],
        })
    );
});
