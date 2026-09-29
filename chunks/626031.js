n.d(t, { A: () => D, t: () => w });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    u = n.n(l),
    i = n(202091),
    s = n(834730),
    c = n(717421),
    o = n(475743),
    d = n(626584),
    m = n(572009),
    f = n(14115),
    g = n(652215),
    N = n(115093),
    h = n(398293);
let p = new d.A("BalanceCounter"),
    b = (0, m._$)(void 0) === N.B.PRODUCTION;
function A(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function w(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: l = "right",
            textColor: i,
            ariaHidden: c,
            className: d,
            ...m
        } = e,
        f = null === t,
        [g, N] = (0, a.useState)(null),
        p = (0, a.useMemo)(() => A(t), [t]),
        b = (0, o.Ay)(p) ?? 0,
        w = (0, a.useMemo)(() => (null === g ? Math.max(b, p) : Math.max(p, g)), [b, p, g]),
        D = `${f ? 0 : w}ch`,
        { marginClassName: x, textAlignClassName: E } = (0, a.useMemo)(
            () =>
                "left" === l
                    ? { marginClassName: h.v6, textAlignClassName: h.Sc }
                    : { marginClassName: h.sl, textAlignClassName: h.$j },
            [l],
        );
    return (0, r.jsx)(s.E, {
        "aria-hidden": c,
        variant: n,
        color: i,
        className: u()(h.SP, f ? void 0 : x, E, d),
        style: { width: D, opacity: f ? "0" : 1 },
        children: f
            ? null
            : (0, r.jsx)(R, {
                  onSetDigitCount: (e) => {
                      e !== g && N(e);
                  },
                  value: t,
                  ...m,
              }),
    });
}
let R = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: l = g.tEg,
                onValueReached: u = g.tEg,
                targetTotalCounterTime: s = 3e3,
                isRenderedWithoutLottieAnimation: o,
                counterInnerClassName: d,
            } = e,
            [m, N] = (0, a.useState)(0),
            h = (0, a.useRef)(null),
            w = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === h.current) {
                h.current = t;
                return;
            }
            let e = null !== h.current ? t - h.current : t;
            (0 !== e && null !== h.current && l(e),
                (w.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, l]);
        let R = t ?? 0,
            D = h.current ?? R,
            { duration: x, delay: E } = (0, f.v)(R - D, { targetTime: s, isRenderedWithoutLottieAnimation: o }),
            { number: C } = (0, c.z)({
                from: { number: h.current ?? R },
                number: R,
                config: { mass: 1, tension: 20, friction: 10, duration: x },
                delay: E,
                onStart: () => {
                    n(A(D));
                },
                onRest: () => {
                    if ((N(m + 1), u(), !b && null !== w.current && null !== h.current)) {
                        let e = Date.now();
                        p.log("Balance Counter finished updating: ", {
                            time: e - w.current.lastChangedAt,
                            delta: R - h.current,
                        });
                    }
                    (n(A(R)), (h.current = R));
                },
            }),
            y = A(Math.max(t ?? 0, C.get()));
        return (0, r.jsx)(i.animated.div, {
            style: { width: `calc(${y}ch)` },
            className: d,
            children: C.to((e) => `${e.toFixed(0)}`),
        });
    },
    D = w;
