"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(451988),
    o = n(781696),
    l = n(568602),
    u = n(174459),
    c = n(957565),
    d = n(927813),
    _ = n(652215),
    f = n(375708);
let h = d.A.Millis.SECOND,
    p = 2 * h,
    E = d.A.Millis.HALF_SECOND,
    m = [
        () => f.intl.string(f.t.MSaeTe),
        () => f.intl.string(f.t.UmrCw7),
        () => f.intl.string(f.t.gKE0Jq),
        () => f.intl.string(f.t["4DSKbi"]),
        () => f.intl.string(f.t["+8ENdT"]),
        () => f.intl.string(f.t.GlWHv8),
        () => f.intl.string(f.t.hIzxU9),
        () => f.intl.string(f.t["26uMPL"]),
        () => f.intl.string(f.t.uFs7R2),
        () => f.intl.string(f.t.bLXdcY),
        () => f.intl.string(f.t.gPg9fS),
    ];
function g(e) {
    let { text: t, copyValue: n, children: d, onCopy: f, "aria-label": g, delay: A = E, dataMeticulousIgnore: I } = e,
        [T, S] = r.useState(0),
        [N, y] = r.useState(!1),
        [C, v] = r.useState(!1),
        [O] = r.useState(() => new a.Ep()),
        [R] = r.useState(() => new a.Ep());
    if (
        (r.useEffect(
            () => () => {
                O.stop(), R.stop();
            },
            [O, R],
        ),
        !c.p5)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let b = T >= m.length - 1,
        D = N ? o.oM.GREEN : o.oM.PRIMARY;
    return (0, i.jsx)(o.ST, {
        text: (() => {
            if (!N) return t;
            let e = (0, s.clamp)(T - 1, 0, m.length - 1),
                n = m[e] ?? m[0];
            return (0, i.jsx)(l.b, { isShaking: b, children: n() });
        })(),
        delay: A,
        "aria-label": g,
        dataMeticulousIgnore: I,
        color: D,
        forceOpen: C,
        onAnimationRest: (e, t) => {
            !C && N && t.phase === _.lLE.LEAVE && y(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: i, ...r } = e;
            return d({
                ...r,
                onClick: () => {
                    t?.(),
                        f?.(),
                        (0, c.C)(n),
                        u.default.track(_.HAw.TEXT_COPIED),
                        C || S(T + 1),
                        v(!0),
                        y(!0),
                        O.start(h, () => v(!1)),
                        R.start(p, () => S(0));
                },
                onMouseEnter: () => {
                    N ? (O.stop(), v(!1)) : i?.();
                },
            });
        },
    });
}
