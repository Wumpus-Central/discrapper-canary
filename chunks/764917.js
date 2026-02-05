"use strict";
n.d(t, { V: () => x });
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(397927),
    o = n(21161),
    l = n(531301),
    u = n(513609),
    c = n(267102),
    d = n(129185),
    _ = n(652215),
    f = n(851110),
    p = n(409221);
let h = [],
    m = -5,
    g = -40,
    E = -40,
    A = -100,
    I = 11,
    T = 125,
    y = 20,
    S = 12,
    v = 48,
    C = 0.01,
    b = new Set(["jack_o_lantern", "nose"]),
    N = {
        jack_o_lantern: { sprites: (0, l.A)(["chocolate_bar", "lollipop", "candy"]) },
        nose: { sprites: (0, l.A)(["foot"]) },
    };
function R(e) {
    if (null == e) return null;
    for (let t of b) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
    return null;
}
let O = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function D() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function L(e) {
    if (null == e) return "enter";
    switch (e) {
        case "enter":
            return "confetti";
        case "confetti":
            return "exit";
        case "exit":
            return "enter";
    }
}
let w = i.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [s, l] = i.useState(null),
        { confettiCanvas: u } = i.useContext(o.x),
        c = (0, a.f9)(u, s);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    c.createMultipleConfetti(
                        {
                            ...f.Mw,
                            position: { type: "static", value: { x: e, y: t } },
                            velocity: { type: "static-random", minValue: { x: m, y: E }, maxValue: { x: g, y: A } },
                            size: { type: "static-random", minValue: S, maxValue: v },
                            dragCoefficient: { type: "static", value: C },
                        },
                        y,
                    );
                },
            }),
            [c],
        ),
        (0, r.jsx)(a.K_, { ref: l, colors: h, sprites: n, spriteWidth: v, spriteHeight: v })
    );
});
function x(e) {
    let { children: t } = e,
        n = i.useRef({}),
        [a, o] = i.useState(null),
        l = L(a),
        f = i.useRef(null),
        [h, m] = i.useState(!1),
        g = i.useRef("jack_o_lantern"),
        E = (0, c.Us)(),
        A = i.useCallback(
            (e) => {
                if (!h) {
                    let t = R(e);
                    null != t && ((g.current = t), m(!0), o(null));
                }
            },
            [h],
        ),
        y = i.useMemo(() => ({ triggerAnimation: A, untriggerAnimation: () => {} }), [A]),
        S = i.useCallback((e) => {
            o(e);
        }, []),
        v = i.useCallback((e) => {
            "exit" === e && m(!1);
        }, []),
        C = i.useCallback((e) => {
            f.current = e;
        }, []);
    return (i.useEffect(() => {
        if ("confetti" === a) {
            if (null == f.current) return;
            let e = f.current.getBoundingClientRect(),
                t = e.left - I,
                r = e.top + T,
                i = n.current[g.current];
            i?.fireConfetti(t, r);
        }
    }, [a]),
    E !== _.BRT.APP)
        ? t
        : (0, r.jsxs)(d.wE.Provider, {
              value: y,
              children: [
                  t,
                  Object.keys(N).map((e) => {
                      let t = N[e];
                      return (0, r.jsx)(
                          w,
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
                                children: (0, r.jsx)(s.tvC, {
                                    animationRef: C,
                                    className: p.I,
                                    nextScene: l,
                                    sceneSegments: O,
                                    onScenePlay: S,
                                    onSceneComplete: v,
                                    importData: D,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
