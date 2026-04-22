n.d(t, { A: () => N });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(719974),
    o = n(447453),
    d = n(143991),
    u = n(942857),
    c = n(915967),
    A = n(775121),
    h = n(775602),
    _ = n(926441),
    E = n(327866),
    p = n(959278),
    m = n(575486),
    g = n(531685),
    I = n(203982),
    C = n(249477),
    f = n(507060),
    T = n(652215),
    S = n(107715);
let N = r.memo(function () {
    let e = (0, u.A)(),
        t = r.useRef(null),
        n = r.useCallback((e) => {
            let { duration: n, intensity: i } = e;
            if (h.A.useReducedMotion || !g.A.isFocused()) return;
            let { current: r } = t;
            l()(null != r, "Shakeable is shaken when not mounted"), r.shake(n, i);
        }, []);
    return (
        r.useEffect(() => (A.A.setLayout(c.Ay), A.A.enable(), () => A.A.disable()), []),
        r.useEffect(
            () => (
                I._.subscribe(T.jej.SHAKE_APP, n),
                () => {
                    I._.unsubscribe(T.jej.SHAKE_APP, n);
                }
            ),
            [n],
        ),
        (0, _.A)(),
        (0, i.jsxs)(s.x, {
            ref: t,
            className: S.y,
            children: [
                (0, i.jsx)(f.A, { className: S.Z, children: (0, i.jsx)(p.A, {}) }),
                (0, i.jsx)(E.A, {}),
                (0, i.jsx)(d.A, {}),
                (0, i.jsx)(C.A, {}),
                (0, i.jsx)(m.A, {}),
                !e && (0, i.jsx)(o.S, {}),
            ],
        })
    );
});
