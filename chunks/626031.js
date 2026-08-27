n.d(t, { A: () => b, t: () => A });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(221877),
    u = n(834730),
    c = n(717421),
    o = n(475743),
    d = n(626584),
    m = n(572009),
    f = n(14115),
    x = n(652215),
    h = n(115093),
    g = n(398293);
let j = new d.A("BalanceCounter"),
    v = (0, m._$)(void 0) === h.B.PRODUCTION;
function C(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function A(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: r = "right",
            textColor: i,
            className: c,
            ...d
        } = e,
        m = null === t,
        [f, x] = (0, l.useState)(null),
        h = (0, l.useMemo)(() => C(t), [t]),
        j = (0, o.Ay)(h) ?? 0,
        v = (0, l.useMemo)(() => (null === f ? Math.max(j, h) : Math.max(h, f)), [j, h, f]),
        A = `${m ? 0 : v}ch`,
        { marginClassName: b, textAlignClassName: E } = (0, l.useMemo)(
            () =>
                "left" === r
                    ? { marginClassName: g.v6, textAlignClassName: g.Sc }
                    : { marginClassName: g.sl, textAlignClassName: g.$j },
            [r],
        );
    return (0, a.jsx)(u.E, {
        variant: n,
        color: i,
        className: s()(g.SP, m ? void 0 : b, E, c),
        style: { width: A, opacity: m ? "0" : 1 },
        children: m
            ? null
            : (0, a.jsx)(N, {
                  onSetDigitCount: (e) => {
                      e !== f && x(e);
                  },
                  value: t,
                  ...d,
              }),
    });
}
let N = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: r = x.tEg,
                onValueReached: s = x.tEg,
                targetTotalCounterTime: u = 3e3,
                isRenderedWithoutLottieAnimation: o,
            } = e,
            [d, m] = (0, l.useState)(0),
            h = (0, l.useRef)(null),
            g = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            if (null === t) return;
            if (null === h.current) {
                h.current = t;
                return;
            }
            let e = null !== h.current ? t - h.current : t;
            0 !== e && null !== h.current && r(e), (g.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, r]);
        let A = t ?? 0,
            N = h.current ?? A,
            { duration: b, delay: E } = (0, f.v)(A - N, { targetTime: u, isRenderedWithoutLottieAnimation: o }),
            { number: R } = (0, c.z)({
                from: { number: h.current ?? A },
                number: A,
                config: { mass: 1, tension: 20, friction: 10, duration: b },
                delay: E,
                onStart: () => {
                    n(C(N));
                },
                onRest: () => {
                    if ((m(d + 1), s(), !v && null !== g.current && null !== h.current)) {
                        let e = Date.now();
                        j.log("Balance Counter finished updating: ", {
                            time: e - g.current.lastChangedAt,
                            delta: A - h.current,
                        });
                    }
                    n(C(A)), (h.current = A);
                },
            }),
            k = C(Math.max(t ?? 0, R.get()));
        return (0, a.jsx)(i.animated.div, {
            style: { width: `calc(${k}ch)` },
            children: R.to((e) => `${e.toFixed(0)}`),
        });
    },
    b = A;
