l.d(t, { A: () => E });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(522160),
    o = l(397927),
    u = l(475743),
    c = l(626584),
    d = l(572009),
    p = l(14115),
    m = l(115093),
    h = l(467043);
let x = new c.A("BalanceCounter"),
    b = (0, d._$)(void 0) === m.B.PRODUCTION,
    g = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    y = (e) => {
        let { value: t, onSetDigitCount: l, onValueChange: r, onValueReached: i, targetTotalCounterTime: u = 3e3 } = e,
            [c, d] = (0, n.useState)(0),
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
        let y = t ?? 0,
            E = m.current ?? y,
            { duration: f, delay: v } = (0, p.Y)(y - E, u),
            { number: S } = (0, o.zhh)({
                from: { number: m.current ?? y },
                number: y,
                config: { mass: 1, tension: 20, friction: 10, duration: f },
                delay: v,
                onStart: () => {
                    l(g(E));
                },
                onRest: () => {
                    if ((d(c + 1), i(), !b && null !== h.current && null !== m.current)) {
                        let e = Date.now();
                        x.log("Balance Counter finished updating: ", {
                            time: e - h.current.lastChangedAt,
                            delta: y - m.current,
                        });
                    }
                    l(g(y)), (m.current = y);
                },
            }),
            j = g(Math.max(t ?? 0, S.get()));
        return (0, a.jsx)(s.animated.div, {
            style: { width: `calc(${j}ch)` },
            children: S.to((e) => `${e.toFixed(0)}`),
        });
    },
    E = (e) => {
        let { value: t, className: l, ...r } = e,
            s = null === t,
            [c, d] = (0, n.useState)(null),
            p = (0, n.useMemo)(() => g(t), [t]),
            m = (0, u.A)(p) ?? 0,
            x = (0, n.useMemo)(() => (null === c ? Math.max(m, p) : Math.max(p, c)), [m, p, c]),
            b = `${s ? 0 : x}ch`;
        return (0, a.jsx)(o.Text, {
            variant: "text-md/semibold",
            className: i()(h.S, s ? void 0 : h.r, l),
            style: { width: b, opacity: s ? "0" : 1 },
            children: s
                ? null
                : (0, a.jsx)(y, {
                      onSetDigitCount: (e) => {
                          e !== c && d(e);
                      },
                      value: t,
                      ...r,
                  }),
        });
    };
