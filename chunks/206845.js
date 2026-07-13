e.d(n, { A: () => M });
var i = e(627968),
    s = e(64700),
    r = e(735438),
    l = e(451988),
    a = e(781696),
    u = e(568602),
    o = e(174459),
    c = e(957565),
    g = e(927813),
    p = e(652215),
    E = e(375708);
let d = g.A.Millis.SECOND,
    h = 2 * d,
    S = g.A.Millis.HALF_SECOND,
    f = [
        () => E.intl.string(E.t.MSaeTe),
        () => E.intl.string(E.t.UmrCw7),
        () => E.intl.string(E.t.gKE0Jq),
        () => E.intl.string(E.t["4DSKbi"]),
        () => E.intl.string(E.t["+8ENdT"]),
        () => E.intl.string(E.t.GlWHv8),
        () => E.intl.string(E.t.hIzxU9),
        () => E.intl.string(E.t["26uMPL"]),
        () => E.intl.string(E.t.uFs7R2),
        () => E.intl.string(E.t.bLXdcY),
        () => E.intl.string(E.t.gPg9fS),
    ];
function M(t) {
    let { text: n, copyValue: e, children: g, onCopy: E, "aria-label": M, delay: A = S, dataMeticulousIgnore: C } = t,
        [b, k] = s.useState(0),
        [w, x] = s.useState(!1),
        [L, R] = s.useState(!1),
        [T] = s.useState(() => new l.Ep()),
        [m] = s.useState(() => new l.Ep());
    if (
        (s.useEffect(
            () => () => {
                T.stop(), m.stop();
            },
            [T, m],
        ),
        !c.p5)
    )
        return (0, i.jsx)(i.Fragment, { children: g({}) });
    let D = b >= f.length - 1,
        I = w ? a.oM.GREEN : a.oM.PRIMARY;
    return (0, i.jsx)(a.ST, {
        text: (function () {
            if (!w) return n;
            let t = (0, r.clamp)(b - 1, 0, f.length - 1),
                e = f[t] ?? f[0];
            return (0, i.jsx)(u.b, { isShaking: D, children: e() });
        })(),
        delay: A,
        "aria-label": M,
        dataMeticulousIgnore: C,
        color: I,
        forceOpen: L,
        onAnimationRest: function (t, n) {
            !L && w && n.phase === p.lLE.LEAVE && x(!1);
        },
        children: (t) => {
            let { onClick: n, onMouseEnter: i, ...s } = t;
            return g({
                ...s,
                onClick: () => {
                    n?.(),
                        E?.(),
                        (0, c.C)(e),
                        o.default.track(p.HAw.TEXT_COPIED),
                        L || k(b + 1),
                        R(!0),
                        x(!0),
                        T.start(d, () => R(!1)),
                        m.start(h, () => k(0));
                },
                onMouseEnter: () => {
                    w ? (T.stop(), R(!1)) : i?.();
                },
            });
        },
    });
}
