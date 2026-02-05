"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(397927),
    u = n(475743),
    c = n(626584),
    d = n(572009),
    _ = n(14115),
    f = n(115093),
    p = n(467043);
let h = new c.A("BalanceCounter"),
    m = (0, d._$)(void 0) === f.B.PRODUCTION,
    g = (e) => (null == e ? 0 : `${e.toFixed(0)}`.length),
    E = (e, t, n) => (null === n ? Math.max(e, t) : Math.max(t, n)),
    A = (e) => {
        let { value: t, onSetDigitCount: n, onValueChange: a, onValueReached: s, targetTotalCounterTime: u = 3e3 } = e,
            [c, d] = (0, i.useState)(0),
            f = (0, i.useRef)(null),
            p = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            if (null === t) return;
            if (null === f.current) {
                f.current = t;
                return;
            }
            let e = null !== f.current ? t - f.current : t;
            0 !== e && null !== f.current && a(e), (p.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, a]);
        let E = t ?? 0,
            A = f.current ?? E,
            { duration: I, delay: T } = (0, _.Y)(E - A, u),
            { number: y } = (0, l.zhh)({
                from: { number: f.current ?? E },
                number: E,
                config: { mass: 1, tension: 20, friction: 10, duration: I },
                delay: T,
                onStart: () => {
                    n(g(A));
                },
                onRest: () => {
                    if ((d(c + 1), s(), !m && null !== p.current && null !== f.current)) {
                        let e = Date.now();
                        h.log("Balance Counter finished updating: ", {
                            time: e - p.current.lastChangedAt,
                            delta: E - f.current,
                        });
                    }
                    n(g(E)), (f.current = E);
                },
            }),
            S = g(Math.max(t ?? 0, y.get()));
        return (0, r.jsx)(o.animated.div, {
            style: { width: `calc(${S}ch)` },
            children: y.to((e) => `${e.toFixed(0)}`),
        });
    },
    I = (e) => {
        let { value: t, className: n, ...a } = e,
            o = null === t,
            [c, d] = (0, i.useState)(null),
            _ = (0, i.useMemo)(() => g(t), [t]),
            f = (0, u.A)(_) ?? 0,
            h = (0, i.useMemo)(() => E(f, _, c), [f, _, c]),
            m = `${o ? 0 : h}ch`;
        return (0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            className: s()(p.S, o ? void 0 : p.r, n),
            style: { width: m, opacity: o ? "0" : 1 },
            children: o
                ? null
                : (0, r.jsx)(A, {
                      onSetDigitCount: (e) => {
                          e !== c && d(e);
                      },
                      value: t,
                      ...a,
                  }),
        });
    };
