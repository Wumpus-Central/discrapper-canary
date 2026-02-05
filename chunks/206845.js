"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(451988),
    o = n(397927),
    l = n(954571),
    u = n(957565),
    c = n(927813),
    d = n(652215),
    _ = n(985018);
let f = c.A.Millis.SECOND,
    p = 2 * f,
    h = c.A.Millis.HALF_SECOND,
    m = [
        () => _.intl.string(_.t.MSaeTe),
        () => _.intl.string(_.t.UmrCw7),
        () => _.intl.string(_.t.gKE0Jq),
        () => _.intl.string(_.t["4DSKbi"]),
        () => _.intl.string(_.t["+8ENdT"]),
        () => _.intl.string(_.t.GlWHv8),
        () => _.intl.string(_.t.hIzxU9),
        () => _.intl.string(_.t["26uMPL"]),
        () => _.intl.string(_.t.uFs7R2),
        () => _.intl.string(_.t.bLXdcY),
        () => _.intl.string(_.t.gPg9fS),
    ];
function g(e) {
    let { text: t, copyValue: n, children: c, onCopy: _, "aria-label": g, delay: E = h, dataMeticulousIgnore: A } = e,
        [I, T] = i.useState(0),
        [y, S] = i.useState(!1),
        [v, C] = i.useState(!1),
        [b] = i.useState(() => new s.Ep()),
        [N] = i.useState(() => new s.Ep());
    if (
        (i.useEffect(
            () => () => {
                b.stop(), N.stop();
            },
            [b, N],
        ),
        !u.p5)
    )
        return (0, r.jsx)(r.Fragment, { children: c({}) });
    let R = I >= m.length - 1,
        O = R ? o.oMw.RED : o.oMw.GREEN,
        D = y ? O : o.oMw.PRIMARY,
        L = () => {
            if (!y) return t;
            let e = (0, a.clamp)(I - 1, 0, m.length - 1),
                n = m[e] ?? m[0];
            return (0, r.jsx)(o.bfh, { isShaking: R, children: n() });
        },
        w = (e, t) => {
            !v && y && t.phase === d.lLE.LEAVE && S(!1);
        },
        x = () => {
            _?.(),
                (0, u.C)(n),
                l.default.track(d.HAw.TEXT_COPIED),
                v || T(I + 1),
                C(!0),
                S(!0),
                b.start(f, () => C(!1)),
                N.start(p, () => T(0));
        };
    return (0, r.jsx)(o.STz, {
        text: L(),
        delay: E,
        "aria-label": g,
        dataMeticulousIgnore: A,
        color: D,
        forceOpen: v,
        onAnimationRest: w,
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...r } = e;
            return c({
                ...r,
                onClick: () => {
                    t?.(), x();
                },
                onMouseEnter: () => {
                    y ? (b.stop(), C(!1)) : n?.();
                },
            });
        },
    });
}
