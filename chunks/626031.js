n.d(t, { A: () => A, t: () => h });
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
function h(e) {
    let {
            value: t,
            textVariant: n = "text-md/semibold",
            horizontalAlignment: l = "right",
            textColor: i,
            ariaHidden: d,
            className: c,
            ...m
        } = e,
        f = null === t,
        [g, b] = (0, a.useState)(null),
        N = (0, a.useMemo)(() => C(t), [t]),
        E = (0, s.Ay)(N) ?? 0,
        h = (0, a.useMemo)(() => (null === g ? Math.max(E, N) : Math.max(N, g)), [E, N, g]),
        A = `${f ? 0 : h}ch`,
        { marginClassName: P, textAlignClassName: D } = (0, a.useMemo)(
            () =>
                "left" === l
                    ? { marginClassName: p.v6, textAlignClassName: p.Sc }
                    : { marginClassName: p.sl, textAlignClassName: p.$j },
            [l],
        );
    return (0, r.jsx)(o.E, {
        "aria-hidden": d,
        variant: n,
        color: i,
        className: u()(p.SP, f ? void 0 : P, D, c),
        style: { width: A, opacity: f ? "0" : 1 },
        children: f
            ? null
            : (0, r.jsx)(R, {
                  onSetDigitCount: (e) => {
                      e !== g && b(e);
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
                targetTotalCounterTime: o = 3e3,
                isRenderedWithoutLottieAnimation: s,
                counterInnerClassName: c,
            } = e,
            [m, b] = (0, a.useState)(0),
            p = (0, a.useRef)(null),
            h = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            if (null === t) return;
            if (null === p.current) {
                p.current = t;
                return;
            }
            let e = null !== p.current ? t - p.current : t;
            (0 !== e && null !== p.current && l(e),
                (h.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
        }, [t, l]);
        let R = t ?? 0,
            A = p.current ?? R,
            { duration: P, delay: D } = (0, f.v)(R - A, { targetTime: o, isRenderedWithoutLottieAnimation: s }),
            { number: S } = (0, d.z)({
                from: { number: p.current ?? R },
                number: R,
                config: { mass: 1, tension: 20, friction: 10, duration: P },
                delay: D,
                onStart: () => {
                    n(C(A));
                },
                onRest: () => {
                    if ((b(m + 1), u(), !E && null !== h.current && null !== p.current)) {
                        let e = Date.now();
                        N.log("Balance Counter finished updating: ", {
                            time: e - h.current.lastChangedAt,
                            delta: R - p.current,
                        });
                    }
                    (n(C(R)), (p.current = R));
                },
            }),
            _ = C(Math.max(t ?? 0, S.get()));
        return (0, r.jsx)(i.animated.div, {
            style: { width: `calc(${_}ch)` },
            className: c,
            children: S.to((e) => `${e.toFixed(0)}`),
        });
    },
    A = h;
