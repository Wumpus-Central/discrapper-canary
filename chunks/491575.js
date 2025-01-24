var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(176299),
    c = n(512847),
    d = n(612226),
    u = n(714338),
    h = n(607070),
    m = n(317858),
    p = n(635395),
    g = n(5560),
    f = n(451478),
    _ = n(585483),
    E = n(145604),
    I = n(718813),
    C = n(981631),
    v = n(224239);
t.Z = r.memo(function () {
    let e = r.useRef(null),
        t = r.useCallback((t) => {
            let { duration: n, intensity: i } = t;
            if (h.Z.useReducedMotion || !f.Z.isFocused()) return;
            let { current: r } = e;
            a()(null != r, 'Shakeable is shaken when not mounted'), r.shake(n, i);
        }, []);
    return (
        r.useEffect(() => (u.Z.setLayout(d.ZP), u.Z.enable(), () => u.Z.disable()), []),
        r.useEffect(
            () => (
                _.S.subscribe(C.CkL.SHAKE_APP, t),
                () => {
                    _.S.unsubscribe(C.CkL.SHAKE_APP, t);
                }
            ),
            [t]
        ),
        (0, m.Z)(),
        (0, i.jsxs)(s.Shakeable, {
            ref: e,
            className: v.app,
            children: [
                (0, i.jsx)(I.Z, {
                    className: v.layers,
                    children: (0, i.jsx)(o.Z, {})
                }),
                (0, i.jsx)(p.Z, {}),
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)(E.Z, {}),
                (0, i.jsx)(g.Z, {}),
                (0, i.jsx)(s.DnDKeyboardHelpBar, {})
            ]
        })
    );
});
