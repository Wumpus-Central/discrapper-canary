n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(397927),
    o = n(143991),
    d = n(942857),
    c = n(915967),
    u = n(775121),
    A = n(775602),
    h = n(926441),
    _ = n(327866),
    m = n(959278),
    p = n(575486),
    g = n(531685),
    E = n(203982),
    f = n(249477),
    I = n(507060),
    C = n(652215),
    N = n(92854);
let T = r.memo(function () {
    let e = (0, d.A)(),
        t = r.useRef(null),
        n = r.useCallback((e) => {
            let { duration: n, intensity: i } = e;
            if (A.A.useReducedMotion || !g.A.isFocused()) return;
            let { current: r } = t;
            l()(null != r, "Shakeable is shaken when not mounted"), r.shake(n, i);
        }, []);
    return (
        r.useEffect(() => (u.A.setLayout(c.Ay), u.A.enable(), () => u.A.disable()), []),
        r.useEffect(
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
            className: N.y,
            children: [
                (0, i.jsx)(I.A, { className: N.Z, children: (0, i.jsx)(m.A, {}) }),
                (0, i.jsx)(_.A, {}),
                (0, i.jsx)(o.A, {}),
                (0, i.jsx)(f.A, {}),
                (0, i.jsx)(p.A, {}),
                !e && (0, i.jsx)(s.Smm, {}),
            ],
        })
    );
});
