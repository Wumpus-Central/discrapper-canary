n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(827734),
    r = n(602853),
    o = n(475743),
    d = n(775602),
    c = n(21161),
    u = n(430363),
    h = n(659416),
    A = n(823854),
    _ = n(692593);
function m(e) {
    let { userId: t, wrapperClassName: n, children: u } = e,
        m = (0, s.bG)([A.A], () => A.A.getProgressForUserId(t), [t]),
        g = (0, s.bG)([A.A], () => {
            let e = A.A.getTrackingEntryForUserId(t);
            return e?.presence?.phase === h.Ob.COMPLETED;
        }, [t]),
        p = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        f = (0, o.A)(m),
        E = (0, o.A)(g),
        { createMultipleConfettiAt: x } = l.useContext(c.x),
        I = (0, r.r)(a.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        C = (0, r.r)(a.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        b = (0, r.r)(a.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        N = l.useRef(0),
        S = l.useRef(null),
        v = Math.max(0, Math.min(1, m ?? 0)),
        T = v >= 1 ? b : C,
        y = l.useMemo(
            () => ({ backgroundImage: `conic-gradient(${T} ${Math.round(360 * v)}deg, ${I} 0deg)` }),
            [v, T, I],
        ),
        R = l.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        j = l.useCallback(() => {
            if (p) return;
            let e = S.current?.getBoundingClientRect();
            null != e && x(e.left + e.width / 2, e.top + e.height / 2, R, 250);
        }, [R, x, p]);
    l.useEffect(() => {
        p || ((f ?? 0) < 1 && v >= 1 && j());
    }, [v, j, f, p]),
        l.useEffect(() => {
            p || !0 !== g || (!0 !== E && j());
        }, [j, g, E, p]);
    let L = l.useCallback(() => {
        if (p || v < 1) return;
        let e = Date.now();
        e - N.current < 4e3 || ((N.current = e), j());
    }, [v, j, p]);
    return (0, i.jsx)("div", {
        className: n,
        onMouseEnter: L,
        children: (0, i.jsxs)("div", {
            ref: S,
            className: _.R,
            children: [(0, i.jsx)("div", { className: _.h, style: y }), u],
        }),
    });
}
function g(e) {
    let { userId: t, wrapperClassName: n, children: l } = e,
        a = (0, u.Uk)("VoiceDareAvatarRing"),
        r = (0, s.bG)([A.A], () => A.A.hasVoiceDareForUserId(t), [t]);
    return a && r
        ? (0, i.jsx)(m, { userId: t, wrapperClassName: n, children: l })
        : (0, i.jsx)("div", { className: n, children: l });
}
