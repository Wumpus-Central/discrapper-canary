n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    g = n(388032);
let m = d.Z.Millis.SECOND,
    f = 2 * m,
    p = d.Z.Millis.HALF_SECOND,
    _ = [() => g.intl.string(g.t.MSaeTU), () => g.intl.string(g.t.UmrCw8), () => g.intl.string(g.t.gKE0Ji), () => g.intl.string(g.t['4DSKbm']), () => g.intl.string(g.t['+8ENdX']), () => g.intl.string(g.t.GlWHv7), () => g.intl.string(g.t.hIzxU1), () => g.intl.string(g.t['26uMPD']), () => g.intl.string(g.t.uFs7R0), () => g.intl.string(g.t.bLXdcX), () => g.intl.string(g.t.gPg9fX)];
function h(e) {
    let { text: t, copyValue: n, children: d, onCopy: g, 'aria-label': h, delay: x = p } = e,
        [E, b] = r.useState(0),
        [C, v] = r.useState(!1),
        [T, N] = r.useState(!1),
        [I] = r.useState(() => new s.V7()),
        [S] = r.useState(() => new s.V7());
    if (
        (r.useEffect(
            () => () => {
                I.stop(), S.stop();
            },
            [I, S]
        ),
        !c.wS)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let R = E >= _.length - 1,
        j = R ? l.TooltipColors.RED : l.TooltipColors.GREEN,
        A = C ? j : l.TooltipColors.PRIMARY,
        P = () => {
            null == g || g(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), !T && b(E + 1), N(!0), v(!0), I.start(m, () => N(!1)), S.start(f, () => b(0));
        };
    return (0, i.jsx)(l.Tooltip, {
        text: (() => {
            var e;
            if (!C) return t;
            let n = (0, a.clamp)(E - 1, 0, _.length - 1),
                r = null !== (e = _[n]) && void 0 !== e ? e : _[0];
            return (0, i.jsx)(l.Shaker, {
                isShaking: R,
                children: r()
            });
        })(),
        delay: x,
        'aria-label': h,
        color: A,
        forceOpen: T,
        onAnimationRest: (e, t) => {
            !T && C && t.phase === u.UkZ.LEAVE && v(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...i } = e;
            return d({
                ...i,
                onClick: () => {
                    null == t || t(), P();
                },
                onMouseEnter: () => {
                    if (!C) {
                        null == n || n();
                        return;
                    }
                    I.stop(), N(!1);
                }
            });
        }
    });
}
