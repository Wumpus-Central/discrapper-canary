n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    u = n(981631),
    m = n(388032);
let g = d.Z.Millis.SECOND,
    p = 2 * g,
    h = d.Z.Millis.HALF_SECOND,
    f = [() => m.NW.string(m.t.MSaeTU), () => m.NW.string(m.t.UmrCw8), () => m.NW.string(m.t.gKE0Ji), () => m.NW.string(m.t['4DSKbm']), () => m.NW.string(m.t['+8ENdX']), () => m.NW.string(m.t.GlWHv7), () => m.NW.string(m.t.hIzxU1), () => m.NW.string(m.t['26uMPD']), () => m.NW.string(m.t.uFs7R0), () => m.NW.string(m.t.bLXdcX), () => m.NW.string(m.t.gPg9fX)];
function b(e) {
    let { text: t, copyValue: n, children: d, onCopy: m, 'aria-label': b, delay: N = h } = e,
        [x, _] = i.useState(0),
        [E, j] = i.useState(!1),
        [C, O] = i.useState(!1),
        [v] = i.useState(() => new a.V7()),
        [S] = i.useState(() => new a.V7());
    if (
        (i.useEffect(
            () => () => {
                v.stop(), S.stop();
            },
            [v, S]
        ),
        !c.wS)
    )
        return (0, r.jsx)(r.Fragment, { children: d({}) });
    let T = x >= f.length - 1,
        I = T ? l.FGA.RED : l.FGA.GREEN,
        y = E ? I : l.FGA.PRIMARY,
        A = () => {
            null == m || m(), (0, c.JG)(n), o.default.track(u.rMx.TEXT_COPIED), C || _(x + 1), O(!0), j(!0), v.start(g, () => O(!1)), S.start(p, () => _(0));
        };
    return (0, r.jsx)(l.ua7, {
        text: (() => {
            var e;
            if (!E) return t;
            let n = (0, s.clamp)(x - 1, 0, f.length - 1),
                i = null !== (e = f[n]) && void 0 !== e ? e : f[0];
            return (0, r.jsx)(l.UkV, {
                isShaking: T,
                children: i()
            });
        })(),
        delay: N,
        'aria-label': b,
        color: y,
        forceOpen: C,
        onAnimationRest: (e, t) => {
            !C && E && t.phase === u.UkZ.LEAVE && j(!1);
        },
        children: (e) => {
            var t,
                n,
                { onClick: r, onMouseEnter: i } = e;
            return d(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {},
                    (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['onClick', 'onMouseEnter'])
                )),
                (n = n =
                    {
                        onClick: () => {
                            null == r || r(), A();
                        },
                        onMouseEnter: () => {
                            if (!E) {
                                null == i || i();
                                return;
                            }
                            v.stop(), O(!1);
                        }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
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
