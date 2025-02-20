n.d(t, { Z: () => E }), n(230036), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(710845),
    c = n(168232),
    d = n(48541),
    u = n(522954);
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
}
let g = new o.Z('BalanceCounter'),
    p = (0, c.dU)(void 0) === d.C.PRODUCTION,
    h = {
        jump: 1,
        duration: 1
    },
    f = {
        POSITIVE: [
            {
                delta: 200,
                duration: 1000,
                tickConfig: m({}, h)
            },
            {
                delta: 500,
                duration: 2000,
                tickConfig: m({}, h)
            }
        ].sort((e, t) => e.delta - t.delta),
        NEGATIVE: [
            {
                delta: 1000,
                duration: 1000,
                tickConfig: m({}, h)
            },
            {
                delta: 4000,
                duration: 2000,
                tickConfig: m({}, h)
            }
        ].sort((e, t) => e.delta - t.delta)
    },
    b = {
        POSITIVE: f.POSITIVE[f.POSITIVE.length - 1],
        NEGATIVE: f.NEGATIVE[f.NEGATIVE.length - 1]
    };
function N(e, t) {
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
!(function () {
    for (let e of Object.keys(f)) {
        let t = 0,
            n = 0;
        for (let r of f[e]) {
            let e = Math.abs(r.delta - n),
                i = Math.abs(r.duration - t);
            (r.tickConfig = N(e, i)), (t = r.duration), (n = r.delta);
        }
    }
})(),
    p ||
        g.log('Initializing data structures for BalanceCounter speed and tick configurations: ', {
            MAX_ANIMATION_DURATION_MS: 3000,
            ANIMATION_THRESHOLDS: f
        });
let x = (e, t, n, r) => {
        let i = Math.abs(r - n),
            s = f[t],
            a = b[t];
        if (i > a.delta) return N(i, 3000 - a.duration);
        for (let e of s) if (i <= e.delta) return e.tickConfig;
        return {
            jump: 1,
            duration: 1
        };
    },
    _ = (e) => (null === e ? 0 : ''.concat(e).length),
    E = (e) => {
        let { value: t, className: n } = e,
            [s, o] = (0, i.useState)(null),
            c = (0, i.useRef)(null),
            d = (0, i.useRef)(null),
            m = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === t) return;
            let e = null !== d.current ? t - d.current : t;
            m.current = {
                lastChangedAt: Date.now(),
                totalDelta: Math.abs(e),
                changeType: e > 0 ? 'POSITIVE' : 'NEGATIVE'
            };
        }, [t]),
            (0, i.useEffect)(() => {
                var e;
                if (null === t) {
                    null !== s && o(null);
                    return;
                }
                if (null === s || null === d.current) {
                    o(t), (d.current = t);
                    return;
                }
                if (s === t) {
                    if (!p && null !== m.current) {
                        let e = Date.now();
                        g.log('Balance Counter finished updating: ', {
                            time: e - m.current.lastChangedAt,
                            delta: s - d.current
                        });
                    }
                    d.current = t;
                    return;
                }
                if (null !== c.current) return;
                let { totalDelta: n, changeType: r } =
                        null !== (e = m.current) && void 0 !== e
                            ? e
                            : {
                                  totalDelta: Math.abs(t - d.current),
                                  changeType: t > d.current ? 'POSITIVE' : 'NEGATIVE'
                              },
                    { jump: i, duration: a } = x(n, r, t, s);
                c.current = setTimeout(() => {
                    (c.current = null), s < t ? o(s + i) : s > t && o(s - i);
                }, a);
            }, [s, t, o]);
        let h = null === t,
            f = null === s ? _(t) : _(s);
        return (0, r.jsx)(l.Text, {
            variant: 'text-md/semibold',
            className: a()([u.balanceCounterText, n]),
            style: {
                width: 'calc('.concat(h ? 0 : f, 'ch + ').concat(h ? '0px' : '8px', ')'),
                opacity: +!h
            },
            children: s
        });
    };
