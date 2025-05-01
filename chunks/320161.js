n.d(t, { Z: () => b }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    l = n(846519),
    a = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    m = n(388032);
let p = d.Z.Millis.SECOND,
    g = 2 * p,
    h = d.Z.Millis.HALF_SECOND,
    f = [() => m.intl.string(m.t.MSaeTU), () => m.intl.string(m.t.UmrCw8), () => m.intl.string(m.t.gKE0Ji), () => m.intl.string(m.t['4DSKbm']), () => m.intl.string(m.t['+8ENdX']), () => m.intl.string(m.t.GlWHv7), () => m.intl.string(m.t.hIzxU1), () => m.intl.string(m.t['26uMPD']), () => m.intl.string(m.t.uFs7R0), () => m.intl.string(m.t.bLXdcX), () => m.intl.string(m.t.gPg9fX)];
function b(e) {
    let { text: t, copyValue: n, children: d, onCopy: m, 'aria-label': b, delay: _ = h } = e,
        [x, E] = r.useState(0),
        [j, C] = r.useState(!1),
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
    let I = x >= f.length - 1,
        N = I ? a.FGA.RED : a.FGA.GREEN,
        y = j ? N : a.FGA.PRIMARY,
        A = () => {
            null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), O || E(x + 1), S(!0), C(!0), v.start(p, () => S(!1)), T.start(g, () => E(0));
        };
    return (0, i.jsx)(a.ua7, {
        text: (() => {
            var e;
            if (!j) return t;
            let n = (0, s.clamp)(x - 1, 0, f.length - 1),
                r = null != (e = f[n]) ? e : f[0];
            return (0, i.jsx)(a.UkV, {
                isShaking: I,
                children: r()
            });
        })(),
        delay: _,
        'aria-label': b,
        color: y,
        forceOpen: O,
        onAnimationRest: (e, t) => {
            !O && j && t.phase === u.UkZ.LEAVE && C(!1);
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
                            if (!j) {
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
