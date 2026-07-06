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
    h = n(375708);
let f = d.A.Millis.SECOND,
    E = 2 * f,
    p = d.A.Millis.HALF_SECOND,
    m = [
        () => h.intl.string(h.t.MSaeTe),
        () => h.intl.string(h.t.UmrCw7),
        () => h.intl.string(h.t.gKE0Jq),
        () => h.intl.string(h.t["4DSKbi"]),
        () => h.intl.string(h.t["+8ENdT"]),
        () => h.intl.string(h.t.GlWHv8),
        () => h.intl.string(h.t.hIzxU9),
        () => h.intl.string(h.t["26uMPL"]),
        () => h.intl.string(h.t.uFs7R2),
        () => h.intl.string(h.t.bLXdcY),
        () => h.intl.string(h.t.gPg9fS),
    ];
function g(e) {
    let { text: t, copyValue: n, children: d, onCopy: h, "aria-label": g, delay: A = p, dataMeticulousIgnore: I } = e,
        [T, S] = r.useState(0),
        [N, C] = r.useState(!1),
        [y, O] = r.useState(!1),
        [R] = r.useState(() => new a.Ep()),
        [v] = r.useState(() => new a.Ep());
    if (
        (r.useEffect(
            () => () => {
                R.stop(), v.stop();
            },
            [R, v],
        ),
        !c.p5)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let b = T >= m.length - 1,
        L = N ? o.oM.GREEN : o.oM.PRIMARY;
    return (0, i.jsx)(o.ST, {
        text: (function () {
            if (!N) return t;
            let e = (0, s.clamp)(T - 1, 0, m.length - 1),
                n = m[e] ?? m[0];
            return (0, i.jsx)(l.b, { isShaking: b, children: n() });
        })(),
        delay: A,
        "aria-label": g,
        dataMeticulousIgnore: I,
        color: L,
        forceOpen: y,
        onAnimationRest: function (e, t) {
            !y && N && t.phase === _.lLE.LEAVE && C(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: i, ...r } = e;
            return d({
                ...r,
                onClick: () => {
                    t?.(),
                        h?.(),
                        (0, c.C)(n),
                        u.default.track(_.HAw.TEXT_COPIED),
                        y || S(T + 1),
                        O(!0),
                        C(!0),
                        R.start(f, () => O(!1)),
                        v.start(E, () => S(0));
                },
                onMouseEnter: () => {
                    N ? (R.stop(), O(!1)) : i?.();
                },
            });
        },
    });
}
