"use strict";
n.d(t, { V: () => T });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    a = n(544048),
    o = n(21161),
    l = n(531301),
    u = n(513609),
    c = n(267102),
    d = n(129185),
    _ = n(652215),
    f = n(851110),
    p = n(490114);
let h = [],
    E = new Set(["jack_o_lantern", "nose"]),
    m = {
        jack_o_lantern: { sprites: (0, l.A)(["chocolate_bar", "lollipop", "candy"]) },
        nose: { sprites: (0, l.A)(["foot"]) },
    },
    g = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function A() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let I = i.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [a, l] = i.useState(null),
        { confettiCanvas: u } = i.useContext(o.x),
        c = (0, s.f9)(u, a);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    c.createMultipleConfetti(
                        {
                            ...f.Mw,
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
            [c],
        ),
        (0, r.jsx)(s.K_, { ref: l, colors: h, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function T(e) {
    let { children: t } = e,
        n = i.useRef({}),
        [s, o] = i.useState(null),
        l = (function (e) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(s),
        f = i.useRef(null),
        [h, T] = i.useState(!1),
        S = i.useRef("jack_o_lantern"),
        y = (0, c.Us)(),
        N = i.useCallback(
            (e) => {
                if (!h) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of E) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((S.current = t), T(!0), o(null));
                }
            },
            [h],
        ),
        v = i.useMemo(() => ({ triggerAnimation: N, untriggerAnimation: () => {} }), [N]),
        C = i.useCallback((e) => {
            o(e);
        }, []),
        O = i.useCallback((e) => {
            "exit" === e && T(!1);
        }, []),
        R = i.useCallback((e) => {
            f.current = e;
        }, []);
    return (i.useEffect(() => {
        if ("confetti" === s) {
            if (null == f.current) return;
            let e = f.current.getBoundingClientRect(),
                t = e.left - 11,
                r = e.top + 125,
                i = n.current[S.current];
            i?.fireConfetti(t, r);
        }
    }, [s]),
    y !== _.BRT.APP)
        ? t
        : (0, r.jsxs)(d.wE.Provider, {
              value: v,
              children: [
                  t,
                  Object.keys(m).map((e) => {
                      let t = m[e];
                      return (0, r.jsx)(
                          I,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  h
                      ? (0, r.jsx)(u.Ay, {
                            children: (0, r.jsx)("div", {
                                className: p.k,
                                children: (0, r.jsx)(a.t, {
                                    animationRef: R,
                                    className: p.I,
                                    nextScene: l,
                                    sceneSegments: g,
                                    onScenePlay: C,
                                    onSceneComplete: O,
                                    importData: A,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
