n.d(t, { A: () => A });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(106778),
    o = n(340287),
    d = n(563495),
    c = n(311907),
    u = n(475743),
    m = n(775602),
    h = n(186111),
    x = n(398025),
    p = n(568329),
    g = n(963713),
    _ = n(772244),
    f = n(851110),
    v = n(655207),
    b = n(231901);
let j = ["#51BC9D"],
    A = (e) => {
        let { overlayRef: t, progressBarRef: n, isHovered: s } = e,
            { quest: A, isExpanded: C } = i.useContext(g.T),
            { expansionSpring: S } = i.useContext(p.PW),
            { completionSpring: T, startCompletionAnimation: y } = (0, _.Ry)(),
            E = A.userStatus?.completedAt != null,
            N = i.useRef(!1),
            I = (0, c.bG)([m.A], () => m.A.useReducedMotion),
            k = i.useRef(null),
            R = (0, c.bG)([h.A], () => h.A.hasLayers()),
            O = (0, u.A)(R),
            [w, D] = i.useState(null),
            [M, P] = i.useState(null),
            L = i.useRef(new r.OH({ gravity: 0, wind: 0 })),
            U = (0, r.f9)(w, M),
            B = i.useCallback(() => {
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
                            ...f.Mw,
                            position: {
                                type: "static-random",
                                minValue: { x: a, y: i },
                                maxValue: { x: a + s, y: i + l },
                            },
                            velocity: {
                                type: "static-random",
                                minValue: { x: -20, y: -20 },
                                maxValue: { x: 20, y: 20 },
                            },
                            opacity: { type: "linear", value: 2, addValue: -0.1 },
                            dragCoefficient: { type: "static", value: 0.166 },
                            size: { type: "static-random", minValue: 2, maxValue: 3 },
                        }),
                        100,
                    );
                }
            }, [n, k, U, I]),
            G = (0, u.A)(C);
        return (i.useEffect(() => {
            E && C && !G && (y(), B());
        }, [C, E, y, B, G]),
        i.useEffect(() => {
            E &&
                !R &&
                O &&
                setTimeout(() => {
                    y(), B();
                }, 200);
        }, [E, O, R, y, B]),
        i.useEffect(() => {
            U.isReady && (!N.current && E && (y(), B()), (N.current = E));
        }, [E, N, B, y, U]),
        i.useEffect(() => {
            s && E && (y(), B());
        }, [s, E, y, B]),
        I)
            ? null
            : (0, a.jsxs)("div", {
                  className: v.iE,
                  "aria-hidden": "true",
                  ref: k,
                  children: [
                      (0, a.jsx)(d.animated.div, { className: v.Tp, style: { opacity: (0, x.a)(T) } }),
                      (0, a.jsx)(d.animated.div, { className: l()(v.sJ, v.ix), style: { opacity: (0, x.a)(T) } }),
                      (0, a.jsxs)(d.animated.div, {
                          className: v.KG,
                          style: {
                              transform: S.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`),
                          },
                          children: [
                              (0, a.jsx)(r.Fk, { ref: D, className: v.t_, environment: L.current }),
                              (0, a.jsx)(r.K_, {
                                  ref: P,
                                  sprites: [b],
                                  colors: j,
                                  spriteWidth: f.wn,
                                  spriteHeight: f.wn,
                              }),
                              null != t.current &&
                                  (0, o.createPortal)(
                                      (0, a.jsx)(d.animated.div, {
                                          className: l()(v.sJ, v.d7),
                                          style: { opacity: (0, x.a)(T) },
                                      }),
                                      t.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
