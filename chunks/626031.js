n.d(t, { A: () => E, t: () => v });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    u = n.n(a),
    i = n(941143),
    s = n(834730),
    c = n(717421),
    o = n(475743),
    d = n(626584),
    m = n(572009),
    h = n(14115),
    f = n(652215),
    g = n(115093),
    C = n(398293);
let x = new d.A("BalanceCounter"),
    N = (0, m._$)(void 0) === g.B.PRODUCTION;
function p(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function v(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: a = "right",
            textColor: i,
            ariaHidden: c,
            className: d,
            ...m
        } = e,
        h = null === t,
        [f, g] = (0, r.useState)(null),
        x = (0, r.useMemo)(() => p(t), [t]),
        N = (0, o.Ay)(x) ?? 0,
        v = (0, r.useMemo)(() => (null === f ? Math.max(N, x) : Math.max(x, f)), [N, x, f]),
        E = `${h ? 0 : v}ch`,
        { marginClassName: S, textAlignClassName: b } = (0, r.useMemo)(
            () =>
                "left" === a
                    ? { marginClassName: C.v6, textAlignClassName: C.Sc }
                    : { marginClassName: C.sl, textAlignClassName: C.$j },
            [a],
        );
    return (0, l.jsx)(s.E, {
        "aria-hidden": c,
        variant: n,
        color: i,
        className: u()(C.SP, h ? void 0 : S, b, d),
        style: { width: E, opacity: h ? "0" : 1 },
        children: h
            ? null
            : (0, l.jsx)(A, {
                  onSetDigitCount: (e) => {
                      e !== f && g(e);
                  },
                  value: t,
                  ...m,
              }),
    });
}
let A = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: a = f.tEg,
                onValueReached: u = f.tEg,
                targetTotalCounterTime: s = 3e3,
                isRenderedWithoutLottieAnimation: o,
                counterInnerClassName: d,
            } = e,
            [m, g] = (0, r.useState)(0),
            C = (0, r.useRef)(null),
            v = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            if (null === t) return;
            if (null === C.current) {
                C.current = t;
                return;
            }
            let e = null !== C.current ? t - C.current : t;
            (0 !== e && null !== C.current && a(e),
                (v.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, a]);
        let A = t ?? 0,
            E = C.current ?? A,
            { duration: S, delay: b } = (0, h.v)(A - E, { targetTime: s, isRenderedWithoutLottieAnimation: o }),
            { number: D } = (0, c.z)({
                from: { number: C.current ?? A },
                number: A,
                config: { mass: 1, tension: 20, friction: 10, duration: S },
                delay: b,
                onStart: () => {
                    n(p(E));
                },
                onRest: () => {
                    if ((g(m + 1), u(), !N && null !== v.current && null !== C.current)) {
                        let e = Date.now();
                        x.log("Balance Counter finished updating: ", {
                            time: e - v.current.lastChangedAt,
                            delta: A - C.current,
                        });
                    }
                    (n(p(A)), (C.current = A));
                },
            }),
            M = p(Math.max(t ?? 0, D.get()));
        return (0, l.jsx)(i.animated.div, {
            style: { width: `calc(${M}ch)` },
            className: d,
            children: D.to((e) => `${e.toFixed(0)}`),
        });
    },
    E = v;
