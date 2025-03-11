n.d(t, { Z: () => I }), n(230036), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(710845),
    c = n(168232),
    u = n(48541),
    d = n(677344);
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
function _(e) {
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
let p = new l.Z('BalanceCounter'),
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
                tickConfig: _({}, m)
            },
            {
                delta: 500,
                duration: 2000,
                tickConfig: _({}, m)
            }
        ].sort((e, t) => e.delta - t.delta),
        NEGATIVE: [
            {
                delta: 1000,
                duration: 1000,
                tickConfig: _({}, m)
            },
            {
                delta: 4000,
                duration: 2000,
                tickConfig: _({}, m)
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
        p.log('Initializing data structures for BalanceCounter speed and tick configurations: ', {
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
    I = (e) => {
        let { value: t, onValueChange: n, onValueReached: o, className: l } = e,
            [c, u] = (0, i.useState)(t),
            f = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            m = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === t) return;
            let e = null !== _.current ? t - _.current : t;
            0 !== e && null !== _.current && n(e),
                (m.current = {
                    lastChangedAt: Date.now(),
                    totalDelta: Math.abs(e),
                    changeType: e > 0 ? 'POSITIVE' : 'NEGATIVE'
                });
        }, [t, n]),
            (0, i.useEffect)(() => {
                var e;
                if (null === t) {
                    null !== c && u(null);
                    return;
                }
                if (null === c || null === _.current) {
                    u(t), (_.current = t);
                    return;
                }
                if (c === t) {
                    if (!h && null !== m.current) {
                        let e = Date.now();
                        p.log('Balance Counter finished updating: ', {
                            time: e - m.current.lastChangedAt,
                            delta: c - _.current
                        });
                    }
                    o(), (_.current = t);
                    return;
                }
                if (null !== f.current) return;
                let { totalDelta: n, changeType: r } =
                        null !== (e = m.current) && void 0 !== e
                            ? e
                            : {
                                  totalDelta: Math.abs(t - _.current),
                                  changeType: t > _.current ? 'POSITIVE' : 'NEGATIVE'
                              },
                    { jump: i, duration: a } = y(n, r, t, c);
                f.current = setTimeout(() => {
                    (f.current = null), c < t ? u(c + i) : c > t && u(c - i);
                }, a);
            }, [c, t, u, o]);
        let g = null === t,
            E = null === c ? O(t) : O(c),
            v = g ? 0 : E;
        return (0, r.jsx)(s.Text, {
            variant: 'text-md/semibold',
            className: a()(d.balanceCounterText, g ? void 0 : d.balanceCounterMargin, l),
            style: {
                width: 'calc('.concat(v, 'ch)'),
                opacity: +!g
            },
            children: c
        });
    };
