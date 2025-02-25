n.d(t, { Z: () => S }), n(230036), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(710845),
    c = n(168232),
    u = n(48541),
    d = n(522954);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = new l.Z('BalanceCounter'),
    h = (0, c.dU)(void 0) === u.C.PRODUCTION,
    m = {
        jump: 1,
        duration: 1
    },
    g = 3000,
    E = {
        POSITIVE: [
            {
                delta: 200,
                duration: 1000,
                tickConfig: p({}, m)
            },
            {
                delta: 500,
                duration: 2000,
                tickConfig: p({}, m)
            }
        ].sort((e, t) => e.delta - t.delta),
        NEGATIVE: [
            {
                delta: 1000,
                duration: 1000,
                tickConfig: p({}, m)
            },
            {
                delta: 4000,
                duration: 2000,
                tickConfig: p({}, m)
            }
        ].sort((e, t) => e.delta - t.delta)
    },
    v = {
        POSITIVE: E.POSITIVE[E.POSITIVE.length - 1],
        NEGATIVE: E.NEGATIVE[E.NEGATIVE.length - 1]
    };
function b(e, t) {
    return e > t
        ? {
              jump: Math.ceil((2 * e) / t),
              duration: 1
          }
        : {
              jump: 1,
              duration: Math.floor(t / e)
          };
}
(function () {
    for (let e of Object.keys(E)) {
        let t = 0,
            n = 0;
        for (let r of E[e]) {
            let e = Math.abs(r.delta - n),
                i = Math.abs(r.duration - t);
            (r.tickConfig = b(e, i)), (t = r.duration), (n = r.delta);
        }
    }
})(),
    h ||
        _.log('Initializing data structures for BalanceCounter speed and tick configurations: ', {
            MAX_ANIMATION_DURATION_MS: g,
            ANIMATION_THRESHOLDS: E
        });
let y = (e, t, n, r) => {
        let i = Math.abs(r - n),
            o = E[t],
            a = v[t];
        if (i > a.delta) return b(i, g - a.duration);
        for (let e of o) if (i <= e.delta) return e.tickConfig;
        return {
            jump: 1,
            duration: 1
        };
    },
    O = (e) => (null === e ? 0 : ''.concat(e).length),
    S = (e) => {
        let { value: t, className: n } = e,
            [o, l] = (0, i.useState)(null),
            c = (0, i.useRef)(null),
            u = (0, i.useRef)(null),
            f = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === t) return;
            let e = null !== u.current ? t - u.current : t;
            f.current = {
                lastChangedAt: Date.now(),
                totalDelta: Math.abs(e),
                changeType: e > 0 ? 'POSITIVE' : 'NEGATIVE'
            };
        }, [t]),
            (0, i.useEffect)(() => {
                var e;
                if (null === t) {
                    null !== o && l(null);
                    return;
                }
                if (null === o || null === u.current) {
                    l(t), (u.current = t);
                    return;
                }
                if (o === t) {
                    if (!h && null !== f.current) {
                        let e = Date.now();
                        _.log('Balance Counter finished updating: ', {
                            time: e - f.current.lastChangedAt,
                            delta: o - u.current
                        });
                    }
                    u.current = t;
                    return;
                }
                if (null !== c.current) return;
                let { totalDelta: n, changeType: r } =
                        null !== (e = f.current) && void 0 !== e
                            ? e
                            : {
                                  totalDelta: Math.abs(t - u.current),
                                  changeType: t > u.current ? 'POSITIVE' : 'NEGATIVE'
                              },
                    { jump: i, duration: a } = y(n, r, t, o);
                c.current = setTimeout(() => {
                    (c.current = null), o < t ? l(o + i) : o > t && l(o - i);
                }, a);
            }, [o, t, l]);
        let p = null === t,
            m = null === o ? O(t) : O(o),
            g = p ? 0 : m;
        return (0, r.jsx)(s.Text, {
            variant: 'text-md/semibold',
            className: a()([d.balanceCounterText, n]),
            style: {
                width: 'calc('.concat(g, 'ch + ').concat(p ? '0px' : '8px', ')'),
                opacity: +!p
            },
            children: o
        });
    };
