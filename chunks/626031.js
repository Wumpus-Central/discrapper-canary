l.d(t, { A: () => v, t: () => b });
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
    x = l(115093),
    g = l(398293);
let f = new d.A("BalanceCounter"),
    E = (0, h._$)(void 0) === x.B.PRODUCTION;
function j(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function b(e) {
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
        x = (0, a.useMemo)(() => j(t), [t]),
        f = (0, u.Ay)(x) ?? 0,
        E = (0, a.useMemo)(() => (null === m ? Math.max(f, x) : Math.max(x, m)), [f, x, m]),
        b = `${h ? 0 : E}ch`,
        { marginClassName: v, textAlignClassName: A } = (0, a.useMemo)(
            () =>
                "left" === s
                    ? { marginClassName: g.v6, textAlignClassName: g.Sc }
                    : { marginClassName: g.sl, textAlignClassName: g.$j },
            [s],
        );
    return (0, n.jsx)(c.E, {
        variant: l,
        color: i,
        className: r()(g.SP, h ? void 0 : v, A, o),
        style: { width: b, opacity: h ? "0" : 1 },
        children: h
            ? null
            : (0, n.jsx)(N, {
                  onSetDigitCount: (e) => {
                      e !== m && C(e);
                  },
                  value: t,
                  ...d,
              }),
    });
}
let N = (e) => {
        let {
                value: t,
                onSetDigitCount: l,
                onValueChange: s = C.tEg,
                onValueReached: r = C.tEg,
                targetTotalCounterTime: c = 3e3,
                isRenderedWithoutLottieAnimation: u,
            } = e,
            [d, h] = (0, a.useState)(0),
            x = (0, a.useRef)(null),
            g = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === x.current) {
                x.current = t;
                return;
            }
            let e = null !== x.current ? t - x.current : t;
            0 !== e && null !== x.current && s(e), (g.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, s]);
        let b = t ?? 0,
            N = x.current ?? b,
            { duration: v, delay: A } = (0, m.v)(b - N, { targetTime: c, isRenderedWithoutLottieAnimation: u }),
            { number: p } = (0, o.z)({
                from: { number: x.current ?? b },
                number: b,
                config: { mass: 1, tension: 20, friction: 10, duration: v },
                delay: A,
                onStart: () => {
                    l(j(N));
                },
                onRest: () => {
                    if ((h(d + 1), r(), !E && null !== g.current && null !== x.current)) {
                        let e = Date.now();
                        f.log("Balance Counter finished updating: ", {
                            time: e - g.current.lastChangedAt,
                            delta: b - x.current,
                        });
                    }
                    l(j(b)), (x.current = b);
                },
            }),
            S = j(Math.max(t ?? 0, p.get()));
        return (0, n.jsx)(i.animated.div, {
            style: { width: `calc(${S}ch)` },
            children: p.to((e) => `${e.toFixed(0)}`),
        });
    },
    v = b;
