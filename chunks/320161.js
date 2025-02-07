n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n(846519),
    a = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    m = n(388032);
let h = d.Z.Millis.SECOND,
    g = 2 * h,
    _ = d.Z.Millis.HALF_SECOND,
    x = [() => m.intl.string(m.t.MSaeTU), () => m.intl.string(m.t.UmrCw8), () => m.intl.string(m.t.gKE0Ji), () => m.intl.string(m.t['4DSKbm']), () => m.intl.string(m.t['+8ENdX']), () => m.intl.string(m.t.GlWHv7), () => m.intl.string(m.t.hIzxU1), () => m.intl.string(m.t['26uMPD']), () => m.intl.string(m.t.uFs7R0), () => m.intl.string(m.t.bLXdcX), () => m.intl.string(m.t.gPg9fX)];
function p(e) {
    let { text: t, copyValue: n, children: d, onCopy: m, 'aria-label': p, delay: E = _ } = e,
        [C, f] = s.useState(0),
        [T, N] = s.useState(!1),
        [S, I] = s.useState(!1),
        [b] = s.useState(() => new l.V7()),
        [v] = s.useState(() => new l.V7());
    if (
        (s.useEffect(
            () => () => {
                b.stop(), v.stop();
            },
            [b, v]
        ),
        !c.wS)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let j = C >= x.length - 1,
        A = j ? a.FGA.RED : a.FGA.GREEN,
        O = T ? A : a.FGA.PRIMARY,
        R = () => {
            null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), S || f(C + 1), I(!0), N(!0), b.start(h, () => I(!1)), v.start(g, () => f(0));
        };
    return (0, i.jsx)(a.ua7, {
        text: (() => {
            var e;
            if (!T) return t;
            let n = (0, r.clamp)(C - 1, 0, x.length - 1),
                s = null !== (e = x[n]) && void 0 !== e ? e : x[0];
            return (0, i.jsx)(a.UkV, {
                isShaking: j,
                children: s()
            });
        })(),
        delay: E,
        'aria-label': p,
        color: O,
        forceOpen: S,
        onAnimationRest: (e, t) => {
            !S && T && t.phase === u.UkZ.LEAVE && N(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...i } = e;
            return d({
                ...i,
                onClick: () => {
                    null == t || t(), R();
                },
                onMouseEnter: () => {
                    if (!T) {
                        null == n || n();
                        return;
                    }
                    b.stop(), I(!1);
                }
            });
        }
    });
}
