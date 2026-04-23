a.d(t, { A: () => f });
var l = a(627968),
    r = a(64700),
    n = a(735438),
    s = a(451988),
    i = a(781696),
    d = a(568602),
    o = a(954571),
    c = a(957565),
    u = a(927813),
    h = a(652215),
    m = a(985018);
let x = u.A.Millis.SECOND,
    b = 2 * x,
    p = u.A.Millis.HALF_SECOND,
    g = [
        () => m.intl.string(m.t.MSaeTe),
        () => m.intl.string(m.t.UmrCw7),
        () => m.intl.string(m.t.gKE0Jq),
        () => m.intl.string(m.t["4DSKbi"]),
        () => m.intl.string(m.t["+8ENdT"]),
        () => m.intl.string(m.t.GlWHv8),
        () => m.intl.string(m.t.hIzxU9),
        () => m.intl.string(m.t["26uMPL"]),
        () => m.intl.string(m.t.uFs7R2),
        () => m.intl.string(m.t.bLXdcY),
        () => m.intl.string(m.t.gPg9fS),
    ];
function f(e) {
    let { text: t, copyValue: a, children: u, onCopy: m, "aria-label": f, delay: v = p, dataMeticulousIgnore: j } = e,
        [_, y] = r.useState(0),
        [A, S] = r.useState(!1),
        [E, k] = r.useState(!1),
        [I] = r.useState(() => new s.Ep()),
        [C] = r.useState(() => new s.Ep());
    if (
        (r.useEffect(
            () => () => {
                I.stop(), C.stop();
            },
            [I, C],
        ),
        !c.p5)
    )
        return (0, l.jsx)(l.Fragment, { children: u({}) });
    let w = _ >= g.length - 1,
        T = A ? i.oM.GREEN : i.oM.PRIMARY;
    return (0, l.jsx)(i.ST, {
        text: (() => {
            if (!A) return t;
            let e = (0, n.clamp)(_ - 1, 0, g.length - 1),
                a = g[e] ?? g[0];
            return (0, l.jsx)(d.b, { isShaking: w, children: a() });
        })(),
        delay: v,
        "aria-label": f,
        dataMeticulousIgnore: j,
        color: T,
        forceOpen: E,
        onAnimationRest: (e, t) => {
            !E && A && t.phase === h.lLE.LEAVE && S(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: l, ...r } = e;
            return u({
                ...r,
                onClick: () => {
                    t?.(),
                        m?.(),
                        (0, c.C)(a),
                        o.default.track(h.HAw.TEXT_COPIED),
                        E || y(_ + 1),
                        k(!0),
                        S(!0),
                        I.start(x, () => k(!1)),
                        C.start(b, () => y(0));
                },
                onMouseEnter: () => {
                    A ? (I.stop(), k(!1)) : l?.();
                },
            });
        },
    });
}
