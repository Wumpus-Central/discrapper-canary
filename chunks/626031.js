l.d(t, { A: () => N, t: () => j });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    i = l(221877),
    c = l(834730),
    o = l(717421),
    u = l(475743),
    d = l(626584),
    h = l(572009),
    m = l(14115),
    C = l(652215),
    f = l(115093),
    x = l(398293);
let g = new d.A("BalanceCounter"),
    E = (0, h._$)(void 0) === f.B.PRODUCTION;
function b(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function j(e) {
    let {
            value: t,
            textVariant: l = "text-md/semibold",
            horizontalAlignment: s = "right",
            textColor: i,
            className: o,
            ...d
        } = e,
        h = null === t,
        [m, C] = (0, a.useState)(null),
        f = (0, a.useMemo)(() => b(t), [t]),
        g = (0, u.Ay)(f) ?? 0,
        E = (0, a.useMemo)(() => (null === m ? Math.max(g, f) : Math.max(f, m)), [g, f, m]),
        j = `${h ? 0 : E}ch`,
        { marginClassName: N, textAlignClassName: A } = (0, a.useMemo)(
            () =>
                "left" === s
                    ? { marginClassName: x.v6, textAlignClassName: x.Sc }
                    : { marginClassName: x.sl, textAlignClassName: x.$j },
            [s],
        );
    return (0, n.jsx)(c.E, {
        variant: l,
        color: i,
        className: r()(x.SP, h ? void 0 : N, A, o),
        style: { width: j, opacity: h ? "0" : 1 },
        children: h
            ? null
            : (0, n.jsx)(v, {
                  onSetDigitCount: (e) => {
                      e !== m && C(e);
                  },
                  value: t,
                  ...d,
              }),
    });
}
let v = (e) => {
        let {
                value: t,
                onSetDigitCount: l,
                onValueChange: s = C.tEg,
                onValueReached: r = C.tEg,
                targetTotalCounterTime: c = 3e3,
                isRenderedWithoutLottieAnimation: u,
            } = e,
            [d, h] = (0, a.useState)(0),
            f = (0, a.useRef)(null),
            x = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === f.current) {
                f.current = t;
                return;
            }
            let e = null !== f.current ? t - f.current : t;
            0 !== e && null !== f.current && s(e), (x.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, s]);
        let j = t ?? 0,
            v = f.current ?? j,
            { duration: N, delay: A } = (0, m.v)(j - v, { targetTime: c, isRenderedWithoutLottieAnimation: u }),
            { number: p } = (0, o.z)({
                from: { number: f.current ?? j },
                number: j,
                config: { mass: 1, tension: 20, friction: 10, duration: N },
                delay: A,
                onStart: () => {
                    l(b(v));
                },
                onRest: () => {
                    if ((h(d + 1), r(), !E && null !== x.current && null !== f.current)) {
                        let e = Date.now();
                        g.log("Balance Counter finished updating: ", {
                            time: e - x.current.lastChangedAt,
                            delta: j - f.current,
                        });
                    }
                    l(b(j)), (f.current = j);
                },
            }),
            S = b(Math.max(t ?? 0, p.get()));
        return (0, n.jsx)(i.animated.div, {
            style: { width: `calc(${S}ch)` },
            children: p.to((e) => `${e.toFixed(0)}`),
        });
    },
    N = j;
