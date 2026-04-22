n.d(t, { V: () => x });
var i = n(627968),
    s = n(64700),
    r = n(106778),
    a = n(544048),
    l = n(21161),
    o = n(531301),
    u = n(513609),
    d = n(267102),
    c = n(129185),
    m = n(652215),
    h = n(851110),
    p = n(490114);
let f = [],
    g = new Set(["jack_o_lantern", "nose"]),
    C = {
        jack_o_lantern: { sprites: (0, o.A)(["chocolate_bar", "lollipop", "candy"]) },
        nose: { sprites: (0, o.A)(["foot"]) },
    },
    y = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function b() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let v = s.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [a, o] = s.useState(null),
        { confettiCanvas: u } = s.useContext(l.x),
        d = (0, r.f9)(u, a);
    return (
        s.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    d.createMultipleConfetti(
                        {
                            ...h.Mw,
                            position: { type: "static", value: { x: e, y: t } },
                            velocity: {
                                type: "static-random",
                                minValue: { x: -5, y: -40 },
                                maxValue: { x: -40, y: -100 },
                            },
                            size: { type: "static-random", minValue: 12, maxValue: 48 },
                            dragCoefficient: { type: "static", value: 0.01 },
                        },
                        20,
                    );
                },
            }),
            [d],
        ),
        (0, i.jsx)(r.K_, { ref: o, colors: f, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function x(e) {
    let { children: t } = e,
        n = s.useRef({}),
        [r, l] = s.useState(null),
        o = (function (e) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(r),
        h = s.useRef(null),
        [f, x] = s.useState(!1),
        A = s.useRef("jack_o_lantern"),
        S = (0, d.Us)(),
        j = s.useCallback(
            (e) => {
                if (!f) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of g) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((A.current = t), x(!0), l(null));
                }
            },
            [f],
        ),
        E = s.useMemo(() => ({ triggerAnimation: j, untriggerAnimation: () => {} }), [j]),
        N = s.useCallback((e) => {
            l(e);
        }, []),
        R = s.useCallback((e) => {
            "exit" === e && x(!1);
        }, []),
        w = s.useCallback((e) => {
            h.current = e;
        }, []);
    return (s.useEffect(() => {
        if ("confetti" === r) {
            if (null == h.current) return;
            let e = h.current.getBoundingClientRect(),
                t = e.left - 11,
                i = e.top + 125,
                s = n.current[A.current];
            s?.fireConfetti(t, i);
        }
    }, [r]),
    S !== m.BRT.APP)
        ? t
        : (0, i.jsxs)(c.wE.Provider, {
              value: E,
              children: [
                  t,
                  Object.keys(C).map((e) => {
                      let t = C[e];
                      return (0, i.jsx)(
                          v,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  f
                      ? (0, i.jsx)(u.Ay, {
                            children: (0, i.jsx)("div", {
                                className: p.k,
                                children: (0, i.jsx)(a.t, {
                                    animationRef: w,
                                    className: p.I,
                                    nextScene: o,
                                    sceneSegments: y,
                                    onScenePlay: N,
                                    onSceneComplete: R,
                                    importData: b,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
