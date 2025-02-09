n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    o = n(710845),
    c = n(168232),
    d = n(48541),
    u = n(790777);
let m = new o.Z('BalanceCounter'),
    g = (0, c.dU)(void 0) === d.C.PRODUCTION,
    _ = {
        jump: 1,
        duration: 1
    },
    p = {
        POSITIVE: [
            {
                delta: 200,
                duration: 1000,
                tickConfig: { ..._ }
            },
            {
                delta: 500,
                duration: 2000,
                tickConfig: { ..._ }
            }
        ].sort((e, t) => e.delta - t.delta),
        NEGATIVE: [
            {
                delta: 1000,
                duration: 1000,
                tickConfig: { ..._ }
            },
            {
                delta: 4000,
                duration: 2000,
                tickConfig: { ..._ }
            }
        ].sort((e, t) => e.delta - t.delta)
    },
    f = {
        POSITIVE: p.POSITIVE[p.POSITIVE.length - 1],
        NEGATIVE: p.NEGATIVE[p.NEGATIVE.length - 1]
    };
function h(e, t) {
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
    for (let e of Object.keys(p)) {
        let t = 0,
            n = 0;
        for (let i of p[e]) {
            let e = Math.abs(i.delta - n),
                r = Math.abs(i.duration - t);
            (i.tickConfig = h(e, r)), (t = i.duration), (n = i.delta);
        }
    }
})(),
    g ||
        m.log('Initializing data structures for BalanceCounter speed and tick configurations: ', {
            MAX_ANIMATION_DURATION_MS: 3000,
            ANIMATION_THRESHOLDS: p
        });
let x = (e, t, n, i) => {
        let r = Math.abs(i - n),
            a = p[t],
            s = f[t];
        if (r > s.delta) return h(r, 3000 - s.duration);
        for (let e of a) if (r <= e.delta) return e.tickConfig;
        return {
            jump: 1,
            duration: 1
        };
    },
    E = (e) => {
        let { value: t, placeholderValue: n } = e,
            [a, o] = (0, r.useState)(null),
            c = (0, r.useRef)(null),
            d = (0, r.useRef)(null),
            _ = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            if (null === t) return;
            let e = null !== d.current ? t - d.current : t;
            _.current = {
                lastChangedAt: Date.now(),
                totalDelta: Math.abs(e),
                changeType: e > 0 ? 'POSITIVE' : 'NEGATIVE'
            };
        }, [t]),
            (0, r.useEffect)(() => {
                var e;
                if (null === t) return;
                if (null === a || null === d.current) {
                    o(t), (d.current = t);
                    return;
                }
                if (a === t) {
                    if (!g && null !== _.current) {
                        let e = Date.now();
                        m.log('Balance Counter finished updating: ', {
                            time: e - _.current.lastChangedAt,
                            delta: a - d.current
                        });
                    }
                    d.current = t;
                    return;
                }
                if (null !== c.current) return;
                let { totalDelta: n, changeType: i } =
                        null !== (e = _.current) && void 0 !== e
                            ? e
                            : {
                                  totalDelta: Math.abs(t - d.current),
                                  changeType: t > d.current ? 'POSITIVE' : 'NEGATIVE'
                              },
                    { jump: r, duration: s } = x(n, i, t, a);
                c.current = setTimeout(() => {
                    (c.current = null), a < t ? o(a + r) : a > t && o(a - r);
                }, s);
            }, [a, t, o]);
        let p = null === a ? n : a,
            f = null !== p ? ''.concat(p).length : 1;
        return (0, i.jsx)(l.Text, {
            variant: 'text-md/semibold',
            className: s()(u.balanceCounterText),
            style: { width: ''.concat(f, 'ch') },
            children: p
        });
    };
