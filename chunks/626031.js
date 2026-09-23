n.d(t, { A: () => A, t: () => R });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    u = n.n(l),
    i = n(202091),
    o = n(834730),
    d = n(717421),
    s = n(475743),
    c = n(626584),
    m = n(572009),
    f = n(14115),
    g = n(652215),
    b = n(115093),
    p = n(398293);
let N = new c.A("BalanceCounter"),
    E = (0, m._$)(void 0) === b.B.PRODUCTION;
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
        N = (0, s.Ay)(b) ?? 0,
        E = (0, a.useMemo)(() => (null === f ? Math.max(N, b) : Math.max(b, f)), [N, b, f]),
        R = `${m ? 0 : E}ch`,
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
                counterInnerClassName: c,
            } = e,
            [m, b] = (0, a.useState)(0),
            p = (0, a.useRef)(null),
            R = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === p.current) {
                p.current = t;
                return;
            }
            let e = null !== p.current ? t - p.current : t;
            (0 !== e && null !== p.current && l(e),
                (R.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, l]);
        let h = t ?? 0,
            A = p.current ?? h,
            { duration: P, delay: D } = (0, f.v)(h - A, { targetTime: o, isRenderedWithoutLottieAnimation: s }),
            { number: S } = (0, d.z)({
                from: { number: p.current ?? h },
                number: h,
                config: { mass: 1, tension: 20, friction: 10, duration: P },
                delay: D,
                onStart: () => {
                    n(C(A));
                },
                onRest: () => {
                    if ((b(m + 1), u(), !E && null !== R.current && null !== p.current)) {
                        let e = Date.now();
                        N.log("Balance Counter finished updating: ", {
                            time: e - R.current.lastChangedAt,
                            delta: h - p.current,
                        });
                    }
                    (n(C(h)), (p.current = h));
                },
            }),
            _ = C(Math.max(t ?? 0, S.get()));
        return (0, r.jsx)(i.animated.div, {
            style: { width: `calc(${_}ch)` },
            className: c,
            children: S.to((e) => `${e.toFixed(0)}`),
        });
    },
    A = R;
