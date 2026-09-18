n.d(t, { A: () => A, t: () => R });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    u = n.n(l),
    i = n(892437),
    o = n(834730),
    d = n(717421),
    s = n(475743),
    c = n(626584),
    m = n(572009),
    f = n(14115),
    g = n(652215),
    b = n(115093),
    p = n(398293);
let E = new c.A("BalanceCounter"),
    N = (0, m._$)(void 0) === b.B.PRODUCTION;
function C(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
}
function R(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: l = "right",
            textColor: i,
            className: d,
            ...c
        } = e,
        m = null === t,
        [f, g] = (0, a.useState)(null),
        b = (0, a.useMemo)(() => C(t), [t]),
        E = (0, s.Ay)(b) ?? 0,
        N = (0, a.useMemo)(() => (null === f ? Math.max(E, b) : Math.max(b, f)), [E, b, f]),
        R = `${m ? 0 : N}ch`,
        { marginClassName: A, textAlignClassName: P } = (0, a.useMemo)(
            () =>
                "left" === l
                    ? { marginClassName: p.v6, textAlignClassName: p.Sc }
                    : { marginClassName: p.sl, textAlignClassName: p.$j },
            [l],
        );
    return (0, r.jsx)(o.E, {
        variant: n,
        color: i,
        className: u()(p.SP, m ? void 0 : A, P, d),
        style: { width: R, opacity: m ? "0" : 1 },
        children: m
            ? null
            : (0, r.jsx)(h, {
                  onSetDigitCount: (e) => {
                      e !== f && g(e);
                  },
                  value: t,
                  ...c,
              }),
    });
}
let h = (e) => {
        let {
                value: t,
                onSetDigitCount: n,
                onValueChange: l = g.tEg,
                onValueReached: u = g.tEg,
                targetTotalCounterTime: o = 3e3,
                isRenderedWithoutLottieAnimation: s,
            } = e,
            [c, m] = (0, a.useState)(0),
            b = (0, a.useRef)(null),
            p = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === b.current) {
                b.current = t;
                return;
            }
            let e = null !== b.current ? t - b.current : t;
            (0 !== e && null !== b.current && l(e),
                (p.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, l]);
        let R = t ?? 0,
            h = b.current ?? R,
            { duration: A, delay: P } = (0, f.v)(R - h, { targetTime: o, isRenderedWithoutLottieAnimation: s }),
            { number: D } = (0, d.z)({
                from: { number: b.current ?? R },
                number: R,
                config: { mass: 1, tension: 20, friction: 10, duration: A },
                delay: P,
                onStart: () => {
                    n(C(h));
                },
                onRest: () => {
                    if ((m(c + 1), u(), !N && null !== p.current && null !== b.current)) {
                        let e = Date.now();
                        E.log("Balance Counter finished updating: ", {
                            time: e - p.current.lastChangedAt,
                            delta: R - b.current,
                        });
                    }
                    (n(C(R)), (b.current = R));
                },
            }),
            S = C(Math.max(t ?? 0, D.get()));
        return (0, r.jsx)(i.animated.div, {
            style: { width: `calc(${S}ch)` },
            children: D.to((e) => `${e.toFixed(0)}`),
        });
    },
    A = R;
