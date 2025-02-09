n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    m = n(388032);
let g = d.Z.Millis.SECOND,
    _ = 2 * g,
    p = d.Z.Millis.HALF_SECOND,
    f = [() => m.intl.string(m.t.MSaeTU), () => m.intl.string(m.t.UmrCw8), () => m.intl.string(m.t.gKE0Ji), () => m.intl.string(m.t['4DSKbm']), () => m.intl.string(m.t['+8ENdX']), () => m.intl.string(m.t.GlWHv7), () => m.intl.string(m.t.hIzxU1), () => m.intl.string(m.t['26uMPD']), () => m.intl.string(m.t.uFs7R0), () => m.intl.string(m.t.bLXdcX), () => m.intl.string(m.t.gPg9fX)];
function h(e) {
    let { text: t, copyValue: n, children: d, onCopy: m, 'aria-label': h, delay: x = p } = e,
        [E, C] = r.useState(0),
        [b, v] = r.useState(!1),
        [T, N] = r.useState(!1),
        [I] = r.useState(() => new s.V7()),
        [R] = r.useState(() => new s.V7());
    if (
        (r.useEffect(
            () => () => {
                I.stop(), R.stop();
            },
            [I, R]
        ),
        !c.wS)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let j = E >= f.length - 1,
        S = j ? l.FGA.RED : l.FGA.GREEN,
        A = b ? S : l.FGA.PRIMARY,
        P = () => {
            null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), T || C(E + 1), N(!0), v(!0), I.start(g, () => N(!1)), R.start(_, () => C(0));
        };
    return (0, i.jsx)(l.ua7, {
        text: (() => {
            var e;
            if (!b) return t;
            let n = (0, a.clamp)(E - 1, 0, f.length - 1),
                r = null !== (e = f[n]) && void 0 !== e ? e : f[0];
            return (0, i.jsx)(l.UkV, {
                isShaking: j,
                children: r()
            });
        })(),
        delay: x,
        'aria-label': h,
        color: A,
        forceOpen: T,
        onAnimationRest: (e, t) => {
            !T && b && t.phase === u.UkZ.LEAVE && v(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...i } = e;
            return d({
                ...i,
                onClick: () => {
                    null == t || t(), P();
                },
                onMouseEnter: () => {
                    if (!b) {
                        null == n || n();
                        return;
                    }
                    I.stop(), N(!1);
                }
            });
        }
    });
}
