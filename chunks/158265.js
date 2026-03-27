n.d(t, { A: () => A });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(106778),
    o = n(340287),
    d = n(880013),
    c = n(311907),
    u = n(475743),
    m = n(775602),
    h = n(186111),
    x = n(398025),
    p = n(568329),
    g = n(963713),
    _ = n(772244),
    f = n(272111),
    v = n(851110),
    b = n(873655),
    j = n(231901);
let A = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: s } = e,
        { quest: A, isExpanded: C } = i.useContext(g.T),
        { expansionSpring: y } = i.useContext(p.PW),
        { completionSpring: T, startCompletionAnimation: S } = (0, _.R)(),
        E = A.userStatus?.completedAt != null,
        N = i.useRef(!1),
        I = (0, c.bG)([m.A], () => m.A.useReducedMotion),
        k = i.useRef(null),
        O = (0, c.bG)([h.A], () => h.A.hasLayers()),
        R = (0, u.A)(O),
        [w, D] = i.useState(null),
        [P, M] = i.useState(null),
        L = i.useRef(new r.OH({ gravity: 0, wind: 0 })),
        U = (0, r.f9)(w, P),
        B = i.useMemo(() => [f.r3], []),
        G = i.useCallback(() => {
            if (I) return;
            let e = n.current,
                t = k.current;
            if (null != t && null != e && U.isReady) {
                var a, i, s, l;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: d } = t.getBoundingClientRect();
                U.createMultipleConfetti(
                    ((a = n - o),
                    (i = r - d),
                    (s = e.clientHeight),
                    (l = e.clientWidth),
                    {
                        ...v.Mw,
                        position: { type: "static-random", minValue: { x: a, y: i }, maxValue: { x: a + s, y: i + l } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, k, U, I]),
        F = (0, u.A)(C);
    return (i.useEffect(() => {
        E && C && !F && (S(), G());
    }, [C, E, S, G, F]),
    i.useEffect(() => {
        E &&
            !O &&
            R &&
            setTimeout(() => {
                S(), G();
            }, 200);
    }, [E, R, O, S, G]),
    i.useEffect(() => {
        U.isReady && (!N.current && E && (S(), G()), (N.current = E));
    }, [E, N, G, S, U]),
    i.useEffect(() => {
        s && E && (S(), G());
    }, [s, E, S, G]),
    I)
        ? null
        : (0, a.jsxs)("div", {
              className: b.iE,
              "aria-hidden": "true",
              ref: k,
              children: [
                  (0, a.jsx)(d.animated.div, { className: b.Tp, style: { opacity: (0, x.a)(T) } }),
                  (0, a.jsx)(d.animated.div, { className: l()(b.sJ, b.ix), style: { opacity: (0, x.a)(T) } }),
                  (0, a.jsxs)(d.animated.div, {
                      className: b.KG,
                      style: { transform: y.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, a.jsx)(r.Fk, { ref: D, className: b.t_, environment: L.current }),
                          (0, a.jsx)(r.K_, { ref: M, sprites: [j], colors: B, spriteWidth: v.wn, spriteHeight: v.wn }),
                          null != t.current &&
                              (0, o.createPortal)(
                                  (0, a.jsx)(d.animated.div, {
                                      className: l()(b.sJ, b.d7),
                                      style: { opacity: (0, x.a)(T) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
