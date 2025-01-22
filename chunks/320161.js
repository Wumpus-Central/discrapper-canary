n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    a = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    m = n(388032);
let g = d.Z.Millis.SECOND,
    h = 2 * g,
    p = d.Z.Millis.HALF_SECOND,
    x = [() => m.intl.string(m.t.MSaeTU), () => m.intl.string(m.t.UmrCw8), () => m.intl.string(m.t.gKE0Ji), () => m.intl.string(m.t['4DSKbm']), () => m.intl.string(m.t['+8ENdX']), () => m.intl.string(m.t.GlWHv7), () => m.intl.string(m.t.hIzxU1), () => m.intl.string(m.t['26uMPD']), () => m.intl.string(m.t.uFs7R0), () => m.intl.string(m.t.bLXdcX), () => m.intl.string(m.t.gPg9fX)];
function f(e) {
    let { text: t, copyValue: n, children: d, onCopy: m, 'aria-label': f, delay: E = p } = e,
        [_, C] = r.useState(0),
        [T, S] = r.useState(!1),
        [b, I] = r.useState(!1),
        [N] = r.useState(() => new a.V7()),
        [v] = r.useState(() => new a.V7());
    if (
        (r.useEffect(
            () => () => {
                N.stop(), v.stop();
            },
            [N, v]
        ),
        !c.wS)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let A = _ >= x.length - 1,
        j = A ? l.TooltipColors.RED : l.TooltipColors.GREEN,
        O = T ? j : l.TooltipColors.PRIMARY,
        R = () => {
            null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), !b && C(_ + 1), I(!0), S(!0), N.start(g, () => I(!1)), v.start(h, () => C(0));
        };
    return (0, i.jsx)(l.Tooltip, {
        text: (() => {
            var e;
            if (!T) return t;
            let n = (0, s.clamp)(_ - 1, 0, x.length - 1),
                r = null !== (e = x[n]) && void 0 !== e ? e : x[0];
            return (0, i.jsx)(l.Shaker, {
                isShaking: A,
                children: r()
            });
        })(),
        delay: E,
        'aria-label': f,
        color: O,
        forceOpen: b,
        onAnimationRest: (e, t) => {
            !b && T && t.phase === u.UkZ.LEAVE && S(!1);
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
                    N.stop(), I(!1);
                }
            });
        }
    });
}
