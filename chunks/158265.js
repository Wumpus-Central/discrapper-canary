n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(106778),
    o = n(340287),
    d = n(419354),
    c = n(311907),
    u = n(475743),
    p = n(775602),
    h = n(186111),
    m = n(398025),
    _ = n(568329),
    A = n(963713),
    f = n(772244),
    g = n(272111),
    x = n(851110),
    E = n(947638),
    C = n(231901);
let T = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: T, isExpanded: v } = s.useContext(A.T),
        { expansionSpring: S } = s.useContext(_.PW),
        { completionSpring: b, startCompletionAnimation: j } = (0, f.R)(),
        I = T.userStatus?.completedAt != null,
        R = s.useRef(!1),
        N = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        y = s.useRef(null),
        M = (0, c.bG)([h.A], () => h.A.hasLayers()),
        O = (0, u.A)(M),
        [U, k] = s.useState(null),
        [P, w] = s.useState(null),
        L = s.useRef(new r.OH({ gravity: 0, wind: 0 })),
        D = (0, r.f9)(U, P),
        F = s.useMemo(() => [g.r3], []),
        B = s.useCallback(() => {
            if (N) return;
            let e = n.current,
                t = y.current;
            if (null != t && null != e && D.isReady) {
                var i, s, l, a;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: d } = t.getBoundingClientRect();
                D.createMultipleConfetti(
                    ((i = n - o),
                    (s = r - d),
                    (l = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...x.Mw,
                        position: { type: "static-random", minValue: { x: i, y: s }, maxValue: { x: i + l, y: s + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, y, D, N]),
        G = (0, u.A)(v);
    return (s.useEffect(() => {
        I && v && !G && (j(), B());
    }, [v, I, j, B, G]),
    s.useEffect(() => {
        I &&
            !M &&
            O &&
            setTimeout(() => {
                j(), B();
            }, 200);
    }, [I, O, M, j, B]),
    s.useEffect(() => {
        D.isReady && (!R.current && I && (j(), B()), (R.current = I));
    }, [I, R, B, j, D]),
    s.useEffect(() => {
        l && I && (j(), B());
    }, [l, I, j, B]),
    N)
        ? null
        : (0, i.jsxs)("div", {
              className: E.iE,
              "aria-hidden": "true",
              ref: y,
              children: [
                  (0, i.jsx)(d.animated.div, { className: E.Tp, style: { opacity: (0, m.a)(b) } }),
                  (0, i.jsx)(d.animated.div, { className: a()(E.sJ, E.ix), style: { opacity: (0, m.a)(b) } }),
                  (0, i.jsxs)(d.animated.div, {
                      className: E.KG,
                      style: { transform: S.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(r.Fk, { ref: k, className: E.t_, environment: L.current }),
                          (0, i.jsx)(r.K_, { ref: w, sprites: [C], colors: F, spriteWidth: x.wn, spriteHeight: x.wn }),
                          null != t.current &&
                              (0, o.createPortal)(
                                  (0, i.jsx)(d.animated.div, {
                                      className: a()(E.sJ, E.d7),
                                      style: { opacity: (0, m.a)(b) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
