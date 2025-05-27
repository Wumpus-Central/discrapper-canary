r.d(t, { Z: () => _ }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(120356),
    i = r.n(l),
    o = r(714673),
    u = r(481060),
    c = r(110924),
    s = r(710845),
    d = r(168232),
    b = r(976845),
    f = r(48541),
    h = r(718486);
let O = new s.Z('BalanceCounter'),
    y = (0, d.dU)(void 0) === f.C.PRODUCTION,
    p = (e) => (null === e ? 0 : ''.concat(e.toFixed(0)).length),
    m = (e, t) => {
        let r = e > 0,
            n = t * b.eg[r ? 'EARN' : 'SPEND'];
        return {
            duration: n,
            delay: r ? t - n : 0
        };
    },
    C = (e, t, r) => (null === r ? Math.max(e, t) : Math.max(t, r)),
    g = (e) => {
        var t, r;
        let { value: l, onSetDigitCount: i, onValueChange: c, onValueReached: s, targetTotalCounterTime: d = 3000 } = e,
            [b, f] = (0, a.useState)(0),
            h = (0, a.useRef)(null),
            C = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === l) return;
            if (null === h.current) {
                h.current = l;
                return;
            }
            let e = null !== h.current ? l - h.current : l;
            0 !== e && null !== h.current && c(e),
                (C.current = {
                    lastChangedAt: Date.now(),
                    totalDelta: Math.abs(e)
                });
        }, [l, c]);
        let g = null != l ? l : 0,
            _ = null != (t = h.current) ? t : g,
            { duration: E, delay: R } = m(g - _, d),
            { number: j } = (0, u.q_F)({
                from: { number: null != (r = h.current) ? r : g },
                number: g,
                config: {
                    mass: 1,
                    tension: 20,
                    friction: 10,
                    duration: E
                },
                delay: R,
                onStart: () => {
                    i(p(_));
                },
                onRest: () => {
                    if ((f(b + 1), s(), !y && null !== C.current && null !== h.current)) {
                        let e = Date.now();
                        O.log('Balance Counter finished updating: ', {
                            time: e - C.current.lastChangedAt,
                            delta: g - h.current
                        });
                    }
                    i(p(g)), (h.current = g);
                }
            }),
            v = p(Math.max(null != l ? l : 0, j.get()));
        return (0, n.jsx)(o.animated.div, {
            style: { width: 'calc('.concat(v, 'ch)') },
            children: j.to((e) => ''.concat(e.toFixed(0)))
        });
    },
    _ = (e) => {
        var t,
            { value: r, className: l } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            a = {},
                            l = Object.keys(e);
                        for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                }
                return a;
            })(e, ['value', 'className']);
        let s = null === r,
            [d, b] = (0, a.useState)(null),
            f = (0, a.useMemo)(() => p(r), [r]),
            O = null != (t = (0, c.Z)(f)) ? t : 0,
            y = (0, a.useMemo)(() => C(O, f, d), [O, f, d]);
        return (0, n.jsx)(u.Text, {
            variant: 'text-md/semibold',
            className: i()(h.balanceCounterText, s ? void 0 : h.balanceCounterMargin, l),
            style: {
                width: ''.concat(s ? 0 : y, 'ch'),
                opacity: s ? '0' : 1
            },
            children: s
                ? null
                : (0, n.jsx)(
                      g,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })(
                          {
                              onSetDigitCount: (e) => {
                                  e !== d && b(e);
                              },
                              value: r
                          },
                          o
                      )
                  )
        });
    };
