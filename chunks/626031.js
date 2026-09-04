n.d(t, { A: () => p, t: () => A });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(74445),
    c = n(834730),
    o = n(717421),
    h = n(475743),
    u = n(626584),
    d = n(572009),
    m = n(14115),
    C = n(652215),
    E = n(115093),
    g = n(398293);
let f = new u.A("BalanceCounter"),
    x = (0, d._$)(void 0) === E.B.PRODUCTION;
function _(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function A(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: s = "right",
            textColor: i,
            className: o,
            ...u
        } = e,
        d = null === t,
        [m, C] = (0, l.useState)(null),
        E = (0, l.useMemo)(() => _(t), [t]),
        f = (0, h.Ay)(E) ?? 0,
        x = (0, l.useMemo)(() => (null === m ? Math.max(f, E) : Math.max(E, m)), [f, E, m]),
        A = `${d ? 0 : x}ch`,
        { marginClassName: p, textAlignClassName: S } = (0, l.useMemo)(
            () =>
                "left" === s
                    ? { marginClassName: g.v6, textAlignClassName: g.Sc }
                    : { marginClassName: g.sl, textAlignClassName: g.$j },
            [s],
        );
    return (0, a.jsx)(c.E, {
        variant: n,
        color: i,
        className: r()(g.SP, d ? void 0 : p, S, o),
        style: { width: A, opacity: d ? "0" : 1 },
        children: d
            ? null
            : (0, a.jsx)(v, {
                  onSetDigitCount: (e) => {
                      e !== m && C(e);
                  },
                  value: t,
                  ...u,
              }),
    });
}
let v = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: s = C.tEg,
                onValueReached: r = C.tEg,
                targetTotalCounterTime: c = 3e3,
                isRenderedWithoutLottieAnimation: h,
            } = e,
            [u, d] = (0, l.useState)(0),
            E = (0, l.useRef)(null),
            g = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            if (null === t) return;
            if (null === E.current) {
                E.current = t;
                return;
            }
            let e = null !== E.current ? t - E.current : t;
            0 !== e && null !== E.current && s(e), (g.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) });
        }, [t, s]);
        let A = t ?? 0,
            v = E.current ?? A,
            { duration: p, delay: S } = (0, m.v)(A - v, { targetTime: c, isRenderedWithoutLottieAnimation: h }),
            { number: b } = (0, o.z)({
                from: { number: E.current ?? A },
                number: A,
                config: { mass: 1, tension: 20, friction: 10, duration: p },
                delay: S,
                onStart: () => {
                    n(_(v));
                },
                onRest: () => {
                    if ((d(u + 1), r(), !x && null !== g.current && null !== E.current)) {
                        let e = Date.now();
                        f.log("Balance Counter finished updating: ", {
                            time: e - g.current.lastChangedAt,
                            delta: A - E.current,
                        });
                    }
                    n(_(A)), (E.current = A);
                },
            }),
            N = _(Math.max(t ?? 0, b.get()));
        return (0, a.jsx)(i.animated.div, {
            style: { width: `calc(${N}ch)` },
            children: b.to((e) => `${e.toFixed(0)}`),
        });
    },
    p = A;
