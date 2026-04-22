"use strict";
a.d(t, { A: () => f });
var r = a(627968),
    l = a(64700),
    n = a(735438),
    i = a(451988),
    s = a(781696),
    o = a(568602),
    d = a(954571),
    c = a(957565),
    u = a(927813),
    h = a(652215),
    p = a(985018);
let _ = u.A.Millis.SECOND,
    m = 2 * _,
    b = u.A.Millis.HALF_SECOND,
    g = [
        () => p.intl.string(p.t.MSaeTe),
        () => p.intl.string(p.t.UmrCw7),
        () => p.intl.string(p.t.gKE0Jq),
        () => p.intl.string(p.t["4DSKbi"]),
        () => p.intl.string(p.t["+8ENdT"]),
        () => p.intl.string(p.t.GlWHv8),
        () => p.intl.string(p.t.hIzxU9),
        () => p.intl.string(p.t["26uMPL"]),
        () => p.intl.string(p.t.uFs7R2),
        () => p.intl.string(p.t.bLXdcY),
        () => p.intl.string(p.t.gPg9fS),
    ];
function f(e) {
    let { text: t, copyValue: a, children: u, onCopy: p, "aria-label": f, delay: x = b, dataMeticulousIgnore: v } = e,
        [A, E] = l.useState(0),
        [y, j] = l.useState(!1),
        [I, S] = l.useState(!1),
        [C] = l.useState(() => new i.Ep()),
        [T] = l.useState(() => new i.Ep());
    if (
        (l.useEffect(
            () => () => {
                C.stop(), T.stop();
            },
            [C, T],
        ),
        !c.p5)
    )
        return (0, r.jsx)(r.Fragment, { children: u({}) });
    let w = A >= g.length - 1,
        R = y ? s.oM.GREEN : s.oM.PRIMARY;
    return (0, r.jsx)(s.ST, {
        text: (() => {
            if (!y) return t;
            let e = (0, n.clamp)(A - 1, 0, g.length - 1),
                a = g[e] ?? g[0];
            return (0, r.jsx)(o.b, { isShaking: w, children: a() });
        })(),
        delay: x,
        "aria-label": f,
        dataMeticulousIgnore: v,
        color: R,
        forceOpen: I,
        onAnimationRest: (e, t) => {
            !I && y && t.phase === h.lLE.LEAVE && j(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: r, ...l } = e;
            return u({
                ...l,
                onClick: () => {
                    t?.(),
                        p?.(),
                        (0, c.C)(a),
                        d.default.track(h.HAw.TEXT_COPIED),
                        I || E(A + 1),
                        S(!0),
                        j(!0),
                        C.start(_, () => S(!1)),
                        T.start(m, () => E(0));
                },
                onMouseEnter: () => {
                    y ? (C.stop(), S(!1)) : r?.();
                },
            });
        },
    });
}
