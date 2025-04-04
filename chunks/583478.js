n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(110924),
    u = n(710845),
    d = n(168232),
    f = n(976845),
    _ = n(48541),
    p = n(718486);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = new u.Z('BalanceCounter'),
    y = (0, d.dU)(void 0) === _.C.PRODUCTION,
    v = (e) => (null === e ? 0 : ''.concat(e.toFixed(0)).length),
    O = (e, t) => {
        let n = e > 0,
            r = t * f.eg[n ? 'EARN' : 'SPEND'],
            i = n ? t - r : 0;
        return {
            duration: r,
            delay: i
        };
    },
    I = (e, t, n) => (null === n ? Math.max(e, t) : Math.max(t, n)),
    S = (e) => {
        var t, n;
        let { value: o, onSetDigitCount: a, onValueChange: c, onValueReached: u, targetTotalCounterTime: d = 3000 } = e,
            [f, _] = (0, i.useState)(0),
            p = (0, i.useRef)(null),
            h = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === o) return;
            if (null === p.current) {
                p.current = o;
                return;
            }
            let e = null !== p.current ? o - p.current : o;
            0 !== e && null !== p.current && c(e),
                (h.current = {
                    lastChangedAt: Date.now(),
                    totalDelta: Math.abs(e)
                });
        }, [o, c]);
        let m = null != o ? o : 0,
            g = null != (t = p.current) ? t : m,
            { duration: E, delay: I } = O(m - g, d),
            { number: S } = (0, l.q_F)({
                from: { number: null != (n = p.current) ? n : m },
                number: m,
                config: {
                    mass: 1,
                    tension: 20,
                    friction: 10,
                    duration: E
                },
                delay: I,
                onStart: () => {
                    a(v(g));
                },
                onRest: () => {
                    if ((_(f + 1), u(), !y && null !== h.current && null !== p.current)) {
                        let e = Date.now();
                        b.log('Balance Counter finished updating: ', {
                            time: e - h.current.lastChangedAt,
                            delta: m - p.current
                        });
                    }
                    a(v(m)), (p.current = m);
                }
            }),
            T = v(Math.max(null != o ? o : 0, S.get()));
        return (0, r.jsx)(s.animated.div, {
            style: { width: 'calc('.concat(T, 'ch)') },
            children: S.to((e) => ''.concat(e.toFixed(0)))
        });
    },
    T = (e) => {
        var t,
            { value: n, className: o } = e,
            s = g(e, ['value', 'className']);
        let u = null === n,
            [d, f] = (0, i.useState)(null),
            _ = (0, i.useMemo)(() => v(n), [n]),
            h = null != (t = (0, c.Z)(_)) ? t : 0,
            E = (0, i.useMemo)(() => I(h, _, d), [h, _, d]),
            b = ''.concat(u ? 0 : E, 'ch');
        return (0, r.jsx)(l.Text, {
            variant: 'text-md/semibold',
            className: a()(p.balanceCounterText, u ? void 0 : p.balanceCounterMargin, o),
            style: {
                width: b,
                opacity: u ? '0' : 1
            },
            children: u
                ? null
                : (0, r.jsx)(
                      S,
                      m(
                          {
                              onSetDigitCount: (e) => {
                                  e !== d && f(e);
                              },
                              value: n
                          },
                          s
                      )
                  )
        });
    };
