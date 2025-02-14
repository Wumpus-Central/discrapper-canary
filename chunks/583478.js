n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(710845),
    c = n(168232),
    d = n(48541),
    u = n(287153);
let m = new o.Z('BalanceCounter'),
    h = (0, c.dU)(void 0) === d.C.PRODUCTION,
    g = {
        jump: 1,
        duration: 1
    },
    x = {
        POSITIVE: [
            {
                delta: 200,
                duration: 1000,
                tickConfig: { ...g }
            },
            {
                delta: 500,
                duration: 2000,
                tickConfig: { ...g }
            }
        ].sort((e, t) => e.delta - t.delta),
        NEGATIVE: [
            {
                delta: 1000,
                duration: 1000,
                tickConfig: { ...g }
            },
            {
                delta: 4000,
                duration: 2000,
                tickConfig: { ...g }
            }
        ].sort((e, t) => e.delta - t.delta)
    },
    _ = {
        POSITIVE: x.POSITIVE[x.POSITIVE.length - 1],
        NEGATIVE: x.NEGATIVE[x.NEGATIVE.length - 1]
    };
function p(e, t) {
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
    for (let e of Object.keys(x)) {
        let t = 0,
            n = 0;
        for (let i of x[e]) {
            let e = Math.abs(i.delta - n),
                s = Math.abs(i.duration - t);
            (i.tickConfig = p(e, s)), (t = i.duration), (n = i.delta);
        }
    }
})(),
    h ||
        m.log('Initializing data structures for BalanceCounter speed and tick configurations: ', {
            MAX_ANIMATION_DURATION_MS: 3000,
            ANIMATION_THRESHOLDS: x
        });
let E = (e, t, n, i) => {
        let s = Math.abs(i - n),
            r = x[t],
            l = _[t];
        if (s > l.delta) return p(s, 3000 - l.duration);
        for (let e of r) if (s <= e.delta) return e.tickConfig;
        return {
            jump: 1,
            duration: 1
        };
    },
    C = (e) => {
        let { value: t, placeholderValue: n } = e,
            [r, o] = (0, s.useState)(null),
            c = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            g = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            if (null === t) return;
            let e = null !== d.current ? t - d.current : t;
            g.current = {
                lastChangedAt: Date.now(),
                totalDelta: Math.abs(e),
                changeType: e > 0 ? 'POSITIVE' : 'NEGATIVE'
            };
        }, [t]),
            (0, s.useEffect)(() => {
                var e;
                if (null === t) return;
                if (null === r || null === d.current) {
                    o(t), (d.current = t);
                    return;
                }
                if (r === t) {
                    if (!h && null !== g.current) {
                        let e = Date.now();
                        m.log('Balance Counter finished updating: ', {
                            time: e - g.current.lastChangedAt,
                            delta: r - d.current
                        });
                    }
                    d.current = t;
                    return;
                }
                if (null !== c.current) return;
                let { totalDelta: n, changeType: i } =
                        null !== (e = g.current) && void 0 !== e
                            ? e
                            : {
                                  totalDelta: Math.abs(t - d.current),
                                  changeType: t > d.current ? 'POSITIVE' : 'NEGATIVE'
                              },
                    { jump: s, duration: l } = E(n, i, t, r);
                c.current = setTimeout(() => {
                    (c.current = null), r < t ? o(r + s) : r > t && o(r - s);
                }, l);
            }, [r, t, o]);
        let x = null === r ? n : r,
            _ = null !== x ? ''.concat(x).length : 1;
        return (0, i.jsx)(a.Text, {
            variant: 'text-md/semibold',
            className: l()(u.balanceCounterText),
            style: { width: ''.concat(_, 'ch') },
            children: x
        });
    };
