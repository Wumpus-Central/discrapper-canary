n.d(t, { A: () => b });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(419354),
    u = n(834730),
    c = n(717421),
    o = n(475743),
    d = n(626584),
    m = n(572009),
    f = n(14115),
    x = n(115093),
    h = n(745926);
let A = new d.A("BalanceCounter"),
    j = (0, m._$)(void 0) === x.B.PRODUCTION,
    v = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    N = (e) => {
        let { value: t, onSetDigitCount: n, onValueChange: r, onValueReached: s, targetTotalCounterTime: u = 3e3 } = e,
            [o, d] = (0, a.useState)(0),
            m = (0, a.useRef)(null),
            x = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === m.current) {
                m.current = t;
                return;
            }
            let e = null !== m.current ? t - m.current : t;
            0 !== e && null !== m.current && r(e), (x.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, r]);
        let h = t ?? 0,
            N = m.current ?? h,
            { duration: b, delay: g } = (0, f.Y)(h - N, u),
            { number: C } = (0, c.z)({
                from: { number: m.current ?? h },
                number: h,
                config: { mass: 1, tension: 20, friction: 10, duration: b },
                delay: g,
                onStart: () => {
                    n(v(N));
                },
                onRest: () => {
                    if ((d(o + 1), s(), !j && null !== x.current && null !== m.current)) {
                        let e = Date.now();
                        A.log("Balance Counter finished updating: ", {
                            time: e - x.current.lastChangedAt,
                            delta: h - m.current,
                        });
                    }
                    n(v(h)), (m.current = h);
                },
            }),
            R = v(Math.max(t ?? 0, C.get()));
        return (0, l.jsx)(i.animated.div, {
            style: { width: `calc(${R}ch)` },
            children: C.to((e) => `${e.toFixed(0)}`),
        });
    },
    b = (e) => {
        let { value: t, className: n, ...r } = e,
            i = null === t,
            [c, d] = (0, a.useState)(null),
            m = (0, a.useMemo)(() => v(t), [t]),
            f = (0, o.A)(m) ?? 0,
            x = (0, a.useMemo)(() => (null === c ? Math.max(f, m) : Math.max(m, c)), [f, m, c]),
            A = `${i ? 0 : x}ch`;
        return (0, l.jsx)(u.E, {
            variant: "text-md/semibold",
            className: s()(h.S, i ? void 0 : h.r, n),
            style: { width: A, opacity: i ? "0" : 1 },
            children: i
                ? null
                : (0, l.jsx)(N, {
                      onSetDigitCount: (e) => {
                          e !== c && d(e);
                      },
                      value: t,
                      ...r,
                  }),
        });
    };
