n.d(t, { A: () => N, t: () => v });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(221877),
    c = n(834730),
    o = n(717421),
    u = n(475743),
    d = n(626584),
    h = n(572009),
    m = n(14115),
    C = n(652215),
    x = n(115093),
    f = n(398293);
let g = new d.A("BalanceCounter"),
    E = (0, h._$)(void 0) === x.B.PRODUCTION;
function A(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function v(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: s = "right",
            textColor: i,
            className: o,
            ...d
        } = e,
        h = null === t,
        [m, C] = (0, l.useState)(null),
        x = (0, l.useMemo)(() => A(t), [t]),
        g = (0, u.Ay)(x) ?? 0,
        E = (0, l.useMemo)(() => (null === m ? Math.max(g, x) : Math.max(x, m)), [g, x, m]),
        v = `${h ? 0 : E}ch`,
        { marginClassName: N, textAlignClassName: _ } = (0, l.useMemo)(
            () =>
                "left" === s
                    ? { marginClassName: f.v6, textAlignClassName: f.Sc }
                    : { marginClassName: f.sl, textAlignClassName: f.$j },
            [s],
        );
    return (0, a.jsx)(c.E, {
        variant: n,
        color: i,
        className: r()(f.SP, h ? void 0 : N, _, o),
        style: { width: v, opacity: h ? "0" : 1 },
        children: h
            ? null
            : (0, a.jsx)(b, {
                  onSetDigitCount: (e) => {
                      e !== m && C(e);
                  },
                  value: t,
                  ...d,
              }),
    });
}
let b = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: s = C.tEg,
                onValueReached: r = C.tEg,
                targetTotalCounterTime: c = 3e3,
                isRenderedWithoutLottieAnimation: u,
            } = e,
            [d, h] = (0, l.useState)(0),
            x = (0, l.useRef)(null),
            f = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            if (null === t) return;
            if (null === x.current) {
                x.current = t;
                return;
            }
            let e = null !== x.current ? t - x.current : t;
            0 !== e && null !== x.current && s(e), (f.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, s]);
        let v = t ?? 0,
            b = x.current ?? v,
            { duration: N, delay: _ } = (0, m.v)(v - b, { targetTime: c, isRenderedWithoutLottieAnimation: u }),
            { number: j } = (0, o.z)({
                from: { number: x.current ?? v },
                number: v,
                config: { mass: 1, tension: 20, friction: 10, duration: N },
                delay: _,
                onStart: () => {
                    n(A(b));
                },
                onRest: () => {
                    if ((h(d + 1), r(), !E && null !== f.current && null !== x.current)) {
                        let e = Date.now();
                        g.log("Balance Counter finished updating: ", {
                            time: e - f.current.lastChangedAt,
                            delta: v - x.current,
                        });
                    }
                    n(A(v)), (x.current = v);
                },
            }),
            S = A(Math.max(t ?? 0, j.get()));
        return (0, a.jsx)(i.animated.div, {
            style: { width: `calc(${S}ch)` },
            children: j.to((e) => `${e.toFixed(0)}`),
        });
    },
    N = v;
