n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(827734),
    r = n(397927),
    o = n(475743),
    d = n(775602),
    c = n(21161),
    u = n(430363),
    h = n(659416),
    A = n(823854),
    g = n(989614);
function m(e) {
    let { userId: t, wrapperClassName: n, children: u } = e,
        m = (0, s.bG)([A.A], () => A.A.getProgressForUserId(t), [t]),
        p = (0, s.bG)([A.A], () => {
            let e = A.A.getTrackingEntryForUserId(t);
            return e?.presence?.phase === h.Ob.COMPLETED;
        }, [t]),
        _ = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        x = (0, o.A)(m),
        f = (0, o.A)(p),
        { createMultipleConfettiAt: E } = l.useContext(c.x),
        C = (0, r.rdh)(a.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        I = (0, r.rdh)(a.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        S = (0, r.rdh)(a.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        b = l.useRef(0),
        N = l.useRef(null),
        T = Math.max(0, Math.min(1, m ?? 0)),
        j = T >= 1 ? S : I,
        v = l.useMemo(
            () => ({ backgroundImage: `conic-gradient(${j} ${Math.round(360 * T)}deg, ${C} 0deg)` }),
            [T, j, C],
        ),
        y = l.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        R = l.useCallback(() => {
            if (_) return;
            let e = N.current?.getBoundingClientRect();
            null != e && E(e.left + e.width / 2, e.top + e.height / 2, y, 250);
        }, [y, E, _]);
    l.useEffect(() => {
        _ || ((x ?? 0) < 1 && T >= 1 && R());
    }, [T, R, x, _]),
        l.useEffect(() => {
            _ || !0 !== p || (!0 !== f && R());
        }, [R, p, f, _]);
    let O = l.useCallback(() => {
        if (_ || T < 1) return;
        let e = Date.now();
        e - b.current < 4e3 || ((b.current = e), R());
    }, [T, R, _]);
    return (0, i.jsx)("div", {
        className: n,
        onMouseEnter: O,
        children: (0, i.jsxs)("div", {
            ref: N,
            className: g.R,
            children: [(0, i.jsx)("div", { className: g.h, style: v }), u],
        }),
    });
}
function p(e) {
    let { userId: t, wrapperClassName: n, children: l } = e,
        a = (0, u.Uk)("VoiceDareAvatarRing"),
        r = (0, s.bG)([A.A], () => A.A.hasVoiceDareForUserId(t), [t]);
    return a && r
        ? (0, i.jsx)(m, { userId: t, wrapperClassName: n, children: l })
        : (0, i.jsx)("div", { className: n, children: l });
}
