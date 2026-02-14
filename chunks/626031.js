"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(397927),
    u = n(475743),
    c = n(626584),
    d = n(572009),
    _ = n(14115),
    f = n(115093),
    h = n(467043);
let p = new c.A("BalanceCounter"),
    g = (0, d._$)(void 0) === f.B.PRODUCTION,
    E = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    A = (e, t, n) => (null === n ? Math.max(e, t) : Math.max(t, n)),
    I = (e) => {
        let { value: t, onSetDigitCount: n, onValueChange: a, onValueReached: s, targetTotalCounterTime: u = 3e3 } = e,
            [c, d] = (0, i.useState)(0),
            f = (0, i.useRef)(null),
            h = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === t) return;
            if (null === f.current) {
                f.current = t;
                return;
            }
            let e = null !== f.current ? t - f.current : t;
            0 !== e && null !== f.current && a(e), (h.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, a]);
        let A = t ?? 0,
            I = f.current ?? A,
            { duration: T, delay: y } = (0, _.Y)(A - I, u),
            { number: S } = (0, l.zhh)({
                from: { number: f.current ?? A },
                number: A,
                config: { mass: 1, tension: 20, friction: 10, duration: T },
                delay: y,
                onStart: () => {
                    n(E(I));
                },
                onRest: () => {
                    if ((d(c + 1), s(), !g && null !== h.current && null !== f.current)) {
                        let e = Date.now();
                        p.log("Balance Counter finished updating: ", {
                            time: e - h.current.lastChangedAt,
                            delta: A - f.current,
                        });
                    }
                    n(E(A)), (f.current = A);
                },
            }),
            v = E(Math.max(t ?? 0, S.get()));
        return (0, r.jsx)(o.animated.div, {
            style: { width: `calc(${v}ch)` },
            children: S.to((e) => `${e.toFixed(0)}`),
        });
    },
    T = (e) => {
        let { value: t, className: n, ...a } = e,
            o = null === t,
            [c, d] = (0, i.useState)(null),
            _ = (0, i.useMemo)(() => E(t), [t]),
            f = (0, u.A)(_) ?? 0,
            p = (0, i.useMemo)(() => A(f, _, c), [f, _, c]),
            g = `${o ? 0 : p}ch`;
        return (0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            className: s()(h.S, o ? void 0 : h.r, n),
            style: { width: g, opacity: o ? "0" : 1 },
            children: o
                ? null
                : (0, r.jsx)(I, {
                      onSetDigitCount: (e) => {
                          e !== c && d(e);
                      },
                      value: t,
                      ...a,
                  }),
        });
    };
