n.d(t, { A: () => R, t: () => w });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    u = n.n(l),
    s = n(941143),
    i = n(834730),
    c = n(717421),
    d = n(475743),
    o = n(626584),
    f = n(572009),
    m = n(14115),
    g = n(652215),
    h = n(115093),
    N = n(398293);
let p = new o.A("BalanceCounter"),
    A = (0, f._$)(void 0) === h.B.PRODUCTION;
function b(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function w(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: l = "right",
            textColor: s,
            ariaHidden: c,
            className: o,
            ...f
        } = e,
        m = null === t,
        [g, h] = (0, a.useState)(null),
        p = (0, a.useMemo)(() => b(t), [t]),
        A = (0, d.Ay)(p) ?? 0,
        w = (0, a.useMemo)(() => (null === g ? Math.max(A, p) : Math.max(p, g)), [A, p, g]),
        R = `${m ? 0 : w}ch`,
        { marginClassName: x, textAlignClassName: C } = (0, a.useMemo)(
            () =>
                "left" === l
                    ? { marginClassName: N.v6, textAlignClassName: N.Sc }
                    : { marginClassName: N.sl, textAlignClassName: N.$j },
            [l],
        );
    return (0, r.jsx)(i.E, {
        "aria-hidden": c,
        variant: n,
        color: s,
        className: u()(N.SP, m ? void 0 : x, C, o),
        style: { width: R, opacity: m ? "0" : 1 },
        children: m
            ? null
            : (0, r.jsx)(D, {
                  onSetDigitCount: (e) => {
                      e !== g && h(e);
                  },
                  value: t,
                  ...f,
              }),
    });
}
let D = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: l = g.tEg,
                onValueReached: u = g.tEg,
                targetTotalCounterTime: i = 3e3,
                isRenderedWithoutLottieAnimation: d,
                counterInnerClassName: o,
            } = e,
            [f, h] = (0, a.useState)(0),
            N = (0, a.useRef)(null),
            w = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === N.current) {
                N.current = t;
                return;
            }
            let e = null !== N.current ? t - N.current : t;
            (0 !== e && null !== N.current && l(e),
                (w.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, l]);
        let D = t ?? 0,
            R = N.current ?? D,
            { duration: x, delay: C } = (0, m.v)(D - R, { targetTime: i, isRenderedWithoutLottieAnimation: d }),
            { number: E } = (0, c.z)({
                from: { number: N.current ?? D },
                number: D,
                config: { mass: 1, tension: 20, friction: 10, duration: x },
                delay: C,
                onStart: () => {
                    n(b(R));
                },
                onRest: () => {
                    if ((h(f + 1), u(), !A && null !== w.current && null !== N.current)) {
                        let e = Date.now();
                        p.log("Balance Counter finished updating: ", {
                            time: e - w.current.lastChangedAt,
                            delta: D - N.current,
                        });
                    }
                    (n(b(D)), (N.current = D));
                },
            }),
            v = b(Math.max(t ?? 0, E.get()));
        return (0, r.jsx)(s.animated.div, {
            style: { width: `calc(${v}ch)` },
            className: o,
            children: E.to((e) => `${e.toFixed(0)}`),
        });
    },
    R = w;
