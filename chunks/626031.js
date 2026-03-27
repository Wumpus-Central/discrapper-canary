l.d(t, { A: () => g });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(4208),
    s = l(397927),
    u = l(475743),
    c = l(626584),
    d = l(572009),
    p = l(14115),
    m = l(115093),
    h = l(132182);
let x = new c.A("BalanceCounter"),
    b = (0, d._$)(void 0) === m.B.PRODUCTION,
    y = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    f = (e) => {
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
        let f = t ?? 0,
            g = m.current ?? f,
            { duration: v, delay: E } = (0, p.Y)(f - g, u),
            { number: _ } = (0, s.zhh)({
                from: { number: m.current ?? f },
                number: f,
                config: { mass: 1, tension: 20, friction: 10, duration: v },
                delay: E,
                onStart: () => {
                    l(y(g));
                },
                onRest: () => {
                    if ((d(c + 1), i(), !b && null !== h.current && null !== m.current)) {
                        let e = Date.now();
                        x.log("Balance Counter finished updating: ", {
                            time: e - h.current.lastChangedAt,
                            delta: f - m.current,
                        });
                    }
                    l(y(f)), (m.current = f);
                },
            }),
            C = y(Math.max(t ?? 0, _.get()));
        return (0, a.jsx)(o.animated.div, {
            style: { width: `calc(${C}ch)` },
            children: _.to((e) => `${e.toFixed(0)}`),
        });
    },
    g = (e) => {
        let { value: t, className: l, ...r } = e,
            o = null === t,
            [c, d] = (0, n.useState)(null),
            p = (0, n.useMemo)(() => y(t), [t]),
            m = (0, u.A)(p) ?? 0,
            x = (0, n.useMemo)(() => (null === c ? Math.max(m, p) : Math.max(p, c)), [m, p, c]),
            b = `${o ? 0 : x}ch`;
        return (0, a.jsx)(s.Text, {
            variant: "text-md/semibold",
            className: i()(h.S, o ? void 0 : h.r, l),
            style: { width: b, opacity: o ? "0" : 1 },
            children: o
                ? null
                : (0, a.jsx)(f, {
                      onSetDigitCount: (e) => {
                          e !== c && d(e);
                      },
                      value: t,
                      ...r,
                  }),
        });
    };
