s.d(r, { A: () => R });
var t,
    a = s(627968),
    n = s(64700),
    c = s(17928),
    u = s(661531),
    i = s(602853),
    l = s(475743),
    o = s(775602),
    E = s(21161),
    d = s(430363),
    A =
        (((t = {})[(t.OFFERED = 0)] = "OFFERED"),
        (t[(t.ACCEPTED = 1)] = "ACCEPTED"),
        (t[(t.RUNNING = 2)] = "RUNNING"),
        (t[(t.COMPLETED = 3)] = "COMPLETED"),
        (t[(t.FAILED = 4)] = "FAILED"),
        (t[(t.CANCELLED = 5)] = "CANCELLED"),
        t),
    C = s(823854),
    h = s(692593);
function N(e) {
    let { userId: r, wrapperClassName: s, children: t } = e,
        d = (0, c.bG)([C.A], () => C.A.getProgressForUserId(r), [r]),
        N = (0, c.bG)([C.A], () => {
            let e = C.A.getTrackingEntryForUserId(r);
            return e?.presence?.phase === A.COMPLETED;
        }, [r]),
        R = (0, c.bG)([o.Ay], () => o.Ay.useReducedMotion),
        D = (0, l.A)(d),
        m = (0, l.A)(N),
        { createMultipleConfettiAt: x } = n.useContext(E.x),
        p = (0, i.r)(u.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        I = (0, i.r)(u.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        T = (0, i.r)(u.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        g = n.useRef(0),
        f = n.useRef(null),
        O = Math.max(0, Math.min(1, d ?? 0)),
        F = O >= 1 ? T : I,
        L = n.useMemo(
            () => ({ backgroundImage: `conic-gradient(${F} ${Math.round(360 * O)}deg, ${p} 0deg)` }),
            [O, F, p],
        ),
        M = n.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        V = n.useCallback(() => {
            if (R) return;
            let e = f.current?.getBoundingClientRect();
            null != e && x(e.left + e.width / 2, e.top + e.height / 2, M, 250);
        }, [M, x, R]);
    n.useEffect(() => {
        R || ((D ?? 0) < 1 && O >= 1 && V());
    }, [O, V, D, R]),
        n.useEffect(() => {
            R || !0 !== N || (!0 !== m && V());
        }, [V, N, m, R]);
    let b = n.useCallback(() => {
        if (R || O < 1) return;
        let e = Date.now();
        e - g.current < 4e3 || ((g.current = e), V());
    }, [O, V, R]);
    return (0, a.jsx)("div", {
        className: s,
        onMouseEnter: b,
        children: (0, a.jsxs)("div", {
            ref: f,
            className: h.R,
            children: [(0, a.jsx)("div", { className: h.h, style: L }), t],
        }),
    });
}
function R(e) {
    let { userId: r, wrapperClassName: s, children: t } = e,
        n = (0, d.Uk)("VoiceDareAvatarRing"),
        u = (0, c.bG)([C.A], () => C.A.hasVoiceDareForUserId(r), [r]);
    return n && u
        ? (0, a.jsx)(N, { userId: r, wrapperClassName: s, children: t })
        : (0, a.jsx)("div", { className: s, children: t });
}
