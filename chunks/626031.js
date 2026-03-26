l.d(t, { A: () => g });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(4208),
    s = l(397927),
    c = l(475743),
    u = l(626584),
    d = l(572009),
    p = l(14115),
    m = l(115093),
    h = l(132182);
let b = new u.A("BalanceCounter"),
    x = (0, d._$)(void 0) === m.B.PRODUCTION,
    y = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    f = (e) => {
        let { value: t, onSetDigitCount: l, onValueChange: r, onValueReached: i, targetTotalCounterTime: c = 3e3 } = e,
            [u, d] = (0, n.useState)(0),
            m = (0, n.useRef)(null),
            h = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
            if (null === t) return;
            if (null === m.current) {
                m.current = t;
                return;
            }
            let e = null !== m.current ? t - m.current : t;
            0 !== e && null !== m.current && r(e), (h.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, r]);
        let f = t ?? 0,
            g = m.current ?? f,
            { duration: v, delay: _ } = (0, p.Y)(f - g, c),
            { number: E } = (0, s.zhh)({
                from: { number: m.current ?? f },
                number: f,
                config: { mass: 1, tension: 20, friction: 10, duration: v },
                delay: _,
                onStart: () => {
                    l(y(g));
                },
                onRest: () => {
                    if ((d(u + 1), i(), !x && null !== h.current && null !== m.current)) {
                        let e = Date.now();
                        b.log("Balance Counter finished updating: ", {
                            time: e - h.current.lastChangedAt,
                            delta: f - m.current,
                        });
                    }
                    l(y(f)), (m.current = f);
                },
            }),
            C = y(Math.max(t ?? 0, E.get()));
        return (0, a.jsx)(o.animated.div, {
            style: { width: `calc(${C}ch)` },
            children: E.to((e) => `${e.toFixed(0)}`),
        });
    },
    g = (e) => {
        let { value: t, className: l, ...r } = e,
            o = null === t,
            [u, d] = (0, n.useState)(null),
            p = (0, n.useMemo)(() => y(t), [t]),
            m = (0, c.A)(p) ?? 0,
            b = (0, n.useMemo)(() => (null === u ? Math.max(m, p) : Math.max(p, u)), [m, p, u]),
            x = `${o ? 0 : b}ch`;
        return (0, a.jsx)(s.Text, {
            variant: "text-md/semibold",
            className: i()(h.S, o ? void 0 : h.r, l),
            style: { width: x, opacity: o ? "0" : 1 },
            children: o
                ? null
                : (0, a.jsx)(f, {
                      onSetDigitCount: (e) => {
                          e !== u && d(e);
                      },
                      value: t,
                      ...r,
                  }),
        });
    };
