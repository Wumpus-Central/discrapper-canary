n.d(t, { A: () => m });
var i,
    l = n(627968),
    s = n(64700),
    a = n(17928),
    r = n(661531),
    o = n(602853),
    c = n(475743),
    d = n(775602),
    u = n(21161),
    h = n(430363),
    _ =
        (((i = {})[(i.OFFERED = 0)] = "OFFERED"),
        (i[(i.ACCEPTED = 1)] = "ACCEPTED"),
        (i[(i.RUNNING = 2)] = "RUNNING"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.FAILED = 4)] = "FAILED"),
        (i[(i.CANCELLED = 5)] = "CANCELLED"),
        i),
    g = n(823854),
    f = n(692593);
function A(e) {
    let { userId: t, wrapperClassName: n, children: i } = e,
        h = (0, a.bG)([g.A], () => g.A.getProgressForUserId(t), [t]),
        A = (0, a.bG)([g.A], () => {
            let e = g.A.getTrackingEntryForUserId(t);
            return e?.presence?.phase === _.COMPLETED;
        }, [t]),
        m = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        v = (0, c.A)(h),
        p = (0, c.A)(A),
        { createMultipleConfettiAt: x } = s.useContext(u.x),
        b = (0, o.r)(r.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        I = (0, o.r)(r.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        E = (0, o.r)(r.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        C = s.useRef(0),
        D = s.useRef(null),
        y = Math.max(0, Math.min(1, h ?? 0)),
        N = y >= 1 ? E : I,
        j = s.useMemo(
            () => ({ backgroundImage: `conic-gradient(${N} ${Math.round(360 * y)}deg, ${b} 0deg)` }),
            [y, N, b],
        ),
        O = s.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        T = s.useCallback(() => {
            if (m) return;
            let e = D.current?.getBoundingClientRect();
            null != e && x(e.left + e.width / 2, e.top + e.height / 2, O, 250);
        }, [O, x, m]);
    s.useEffect(() => {
        m || ((v ?? 0) < 1 && y >= 1 && T());
    }, [y, T, v, m]),
        s.useEffect(() => {
            m || !0 !== A || (!0 !== p && T());
        }, [T, A, p, m]);
    let L = s.useCallback(() => {
        if (m || y < 1) return;
        let e = Date.now();
        e - C.current < 4e3 || ((C.current = e), T());
    }, [y, T, m]);
    return (0, l.jsx)("div", {
        className: n,
        onMouseEnter: L,
        children: (0, l.jsxs)("div", {
            ref: D,
            className: f.R,
            children: [(0, l.jsx)("div", { className: f.h, style: j }), i],
        }),
    });
}
function m(e) {
    let { userId: t, wrapperClassName: n, children: i } = e,
        s = (0, h.Uk)("VoiceDareAvatarRing"),
        r = (0, a.bG)([g.A], () => g.A.hasVoiceDareForUserId(t), [t]);
    return s && r
        ? (0, l.jsx)(A, { userId: t, wrapperClassName: n, children: i })
        : (0, l.jsx)("div", { className: n, children: i });
}
