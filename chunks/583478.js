n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(110924),
    u = n(710845),
    d = n(168232),
    f = n(48541),
    _ = n(677344);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = new u.Z('BalanceCounter'),
    v = (0, d.dU)(void 0) === f.C.PRODUCTION,
    b = (e) => (null === e ? 0 : ''.concat(e.toFixed(0)).length),
    y = 33,
    O = 30,
    I = 100,
    S = 1000,
    T = (e, t) => {
        let n = t;
        return (
            e <= y ? (n = e * O) : e < I && (n = Math.min(S, t)),
            {
                duration: n,
                delay: t > n ? t - n : 0
            }
        );
    },
    N = (e, t, n) => (null === n ? Math.max(e, t) : Math.max(t, n)),
    A = (e) => {
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
            g = null !== (t = p.current) && void 0 !== t ? t : m,
            { duration: y, delay: O } = T(Math.abs(m - g), d),
            { number: I } = (0, l.q_F)({
                from: { number: null !== (n = p.current) && void 0 !== n ? n : m },
                number: m,
                config: {
                    mass: 1,
                    tension: 20,
                    friction: 10,
                    duration: y
                },
                delay: O,
                onStart: () => {
                    a(b(g));
                },
                onRest: () => {
                    if ((_(f + 1), u(), !v && null !== h.current && null !== p.current)) {
                        let e = Date.now();
                        E.log('Balance Counter finished updating: ', {
                            time: e - h.current.lastChangedAt,
                            delta: m - p.current
                        });
                    }
                    a(b(m)), (p.current = m);
                }
            }),
            S = b(Math.max(null != o ? o : 0, I.get()));
        return (0, r.jsx)(s.animated.div, {
            style: { width: 'calc('.concat(S, 'ch)') },
            children: I.to((e) => ''.concat(e.toFixed(0)))
        });
    },
    C = (e) => {
        var t,
            { value: n, className: o } = e,
            s = m(e, ['value', 'className']);
        let u = null === n,
            [d, f] = (0, i.useState)(null),
            p = (0, i.useMemo)(() => b(n), [n]),
            g = null !== (t = (0, c.Z)(p)) && void 0 !== t ? t : 0,
            E = (0, i.useMemo)(() => N(g, p, d), [g, p, d]),
            v = ''.concat(u ? 0 : E, 'ch');
        return (0, r.jsx)(l.Text, {
            variant: 'text-md/semibold',
            className: a()(_.balanceCounterText, u ? void 0 : _.balanceCounterMargin, o),
            style: {
                width: v,
                opacity: u ? '0' : 1
            },
            children: u
                ? null
                : (0, r.jsx)(
                      A,
                      h(
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
