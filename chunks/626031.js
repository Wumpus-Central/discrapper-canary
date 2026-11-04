var l = n(477900),
    r = n(582128),
    a = n(503698),
    u = n.n(a),
    i = n(736819),
    s = n(834730),
    c = n(717421),
    o = n(475743),
    d = n(626584),
    m = n(572009),
    h = n(14115),
    f = n(652215),
    g = n(115093),
    C = n(398293);
let N = new d.A("BalanceCounter"),
    x = (0, m._$)(void 0) === g.B.PRODUCTION;
function p(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function v(e) {
    let {
            value: t,
            textVariant: n = "body-md/semibold",
            horizontalAlignment: a = "right",
            textColor: i,
            ariaHidden: c,
            className: d,
            ...m
        } = e,
        h = null === t,
        [f, g] = (0, r.useState)(null),
        N = (0, r.useMemo)(() => p(t), [t]),
        x = (0, o.Ay)(N) ?? 0,
        v = (0, r.useMemo)(() => (null === f ? Math.max(x, N) : Math.max(N, f)), [x, N, f]),
        b = `${h ? 0 : v}ch`,
        { marginClassName: E, textAlignClassName: S } = (0, r.useMemo)(
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
        className: u()(C.SP, h ? void 0 : E, S, d),
        style: { width: b, opacity: h ? "0" : 1 },
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
        (0 !== e && null !== C.current && a(e), (v.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
    }, [t, a]);
    let A = t ?? 0,
        b = C.current ?? A,
        { duration: E, delay: S } = (0, h.v)(A - b, { targetTime: s, isRenderedWithoutLottieAnimation: o }),
        { number: y } = (0, c.z)({
            from: { number: C.current ?? A },
            number: A,
            config: { mass: 1, tension: 20, friction: 10, duration: E },
            delay: S,
            onStart: () => {
                n(p(b));
            },
            onRest: () => {
                if ((g(m + 1), u(), !x && null !== v.current && null !== C.current)) {
                    let e = Date.now();
                    N.log("Balance Counter finished updating: ", {
                        time: e - v.current.lastChangedAt,
                        delta: A - C.current,
                    });
                }
                (n(p(A)), (C.current = A));
            },
        }),
        D = p(Math.max(t ?? 0, y.get()));
    return (0, l.jsx)(i.animated.div, {
        style: { width: `calc(${D}ch)` },
        className: d,
        children: y.to((e) => `${e.toFixed(0)}`),
    });
};
n.d(t, {}, { A: v, t: v });
