"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(827734),
    o = n(397927),
    l = n(475743),
    u = n(775602),
    c = n(21161),
    d = n(430363),
    _ = n(659416),
    f = n(823854),
    h = n(989614);
let p = 4e3,
    g = 250,
    E = 4,
    A = 2;
function I(e) {
    let { userId: t, wrapperClassName: n, children: d } = e,
        I = (0, a.bG)([f.A], () => f.A.getProgressForUserId(t), [t]),
        T = (0, a.bG)([f.A], () => {
            let e = f.A.getTrackingEntryForUserId(t);
            return e?.presence?.phase === _.Ob.COMPLETED;
        }, [t]),
        y = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        S = (0, l.A)(I),
        v = (0, l.A)(T),
        { createMultipleConfettiAt: C } = i.useContext(c.x),
        b = (0, o.rdh)(s.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        N = (0, o.rdh)(s.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        R = (0, o.rdh)(s.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        O = i.useRef(0),
        D = i.useRef(null),
        L = Math.max(0, Math.min(1, I ?? 0)),
        w = L >= 1 ? R : N,
        x = i.useMemo(
            () => ({ backgroundImage: `conic-gradient(${w} ${Math.round(360 * L)}deg, ${b} 0deg)` }),
            [L, w, b],
        ),
        P = i.useMemo(
            () => ({
                size: { type: "static-random", minValue: E - A, maxValue: E + A },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        M = i.useCallback(() => {
            if (y) return;
            let e = D.current?.getBoundingClientRect();
            null != e && C(e.left + e.width / 2, e.top + e.height / 2, P, g);
        }, [P, C, y]);
    i.useEffect(() => {
        y || ((S ?? 0) < 1 && L >= 1 && M());
    }, [L, M, S, y]),
        i.useEffect(() => {
            y || !0 !== T || (!0 !== v && M());
        }, [M, T, v, y]);
    let k = i.useCallback(() => {
        if (y || L < 1) return;
        let e = Date.now();
        e - O.current < p || ((O.current = e), M());
    }, [L, M, y]);
    return (0, r.jsx)("div", {
        className: n,
        onMouseEnter: k,
        children: (0, r.jsxs)("div", {
            ref: D,
            className: h.R,
            children: [(0, r.jsx)("div", { className: h.h, style: x }), d],
        }),
    });
}
function T(e) {
    let { userId: t, wrapperClassName: n, children: i } = e,
        s = (0, d.Uk)("VoiceDareAvatarRing"),
        o = (0, a.bG)([f.A], () => f.A.hasVoiceDareForUserId(t), [t]);
    return s && o
        ? (0, r.jsx)(I, { userId: t, wrapperClassName: n, children: i })
        : (0, r.jsx)("div", { className: n, children: i });
}
