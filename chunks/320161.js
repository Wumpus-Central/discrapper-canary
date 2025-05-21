n.d(t, { Z: () => b }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(392711),
    l = n(846519),
    a = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    g = n(388032);
let m = d.Z.Millis.SECOND,
    p = 2 * m,
    h = d.Z.Millis.HALF_SECOND,
    f = [() => g.intl.string(g.t.MSaeTU), () => g.intl.string(g.t.UmrCw8), () => g.intl.string(g.t.gKE0Ji), () => g.intl.string(g.t['4DSKbm']), () => g.intl.string(g.t['+8ENdX']), () => g.intl.string(g.t.GlWHv7), () => g.intl.string(g.t.hIzxU1), () => g.intl.string(g.t['26uMPD']), () => g.intl.string(g.t.uFs7R0), () => g.intl.string(g.t.bLXdcX), () => g.intl.string(g.t.gPg9fX)];
function b(e) {
    let { text: t, copyValue: n, children: d, onCopy: g, 'aria-label': b, delay: _ = h } = e,
        [x, E] = r.useState(0),
        [C, j] = r.useState(!1),
        [O, S] = r.useState(!1),
        [v] = r.useState(() => new l.V7()),
        [T] = r.useState(() => new l.V7());
    if (
        (r.useEffect(
            () => () => {
                v.stop(), T.stop();
            },
            [v, T]
        ),
        !c.wS)
    )
        return (0, i.jsx)(i.Fragment, { children: d({}) });
    let N = x >= f.length - 1,
        I = N ? a.FGA.RED : a.FGA.GREEN,
        y = C ? I : a.FGA.PRIMARY,
        A = () => {
            null == g || g(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), O || E(x + 1), S(!0), j(!0), v.start(m, () => S(!1)), T.start(p, () => E(0));
        };
    return (0, i.jsx)(a.ua7, {
        text: (() => {
            var e;
            if (!C) return t;
            let n = (0, s.clamp)(x - 1, 0, f.length - 1),
                r = null != (e = f[n]) ? e : f[0];
            return (0, i.jsx)(a.UkV, {
                isShaking: N,
                children: r()
            });
        })(),
        delay: _,
        'aria-label': b,
        color: y,
        forceOpen: O,
        onAnimationRest: (e, t) => {
            !O && C && t.phase === u.UkZ.LEAVE && j(!1);
        },
        children: (e) => {
            var t,
                n,
                { onClick: i, onMouseEnter: r } = e;
            return d(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {},
                    (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    s = Object.keys(e);
                                for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                        }
                        return r;
                    })(e, ['onClick', 'onMouseEnter'])
                )),
                (n = n =
                    {
                        onClick: () => {
                            null == i || i(), A();
                        },
                        onMouseEnter: () => {
                            if (!C) {
                                null == r || r();
                                return;
                            }
                            v.stop(), S(!1);
                        }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
    });
}
