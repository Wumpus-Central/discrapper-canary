"use strict";
n.d(t, { wE: () => D, Xq: () => j, q6: () => U });
var r = n(627968),
    a = n(64700),
    i = n(17928),
    l = n(775602),
    s = n(7584),
    o = n(267102),
    c = n(232835),
    d = n(417146),
    u = n(552122),
    _ = n(401266),
    p = n(106778),
    f = n(21161),
    m = n(531301),
    h = n(652215);
let g = 1e3 / 60,
    b = {
        velocity: { type: "static-random", minValue: { x: 8, y: 0 }, maxValue: { x: 50, y: 0 } },
        rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
        },
        size: { type: "static-random", minValue: 2, maxValue: 24, uniformVectorValues: !0 },
        dragCoefficient: { type: "static", value: 0.8 },
        opacity: { type: "static-random", minValue: 0.7, maxValue: 0.5 },
    },
    A = ["#FFFFFF"],
    E = [n(426560), ...(0, m.A)(["snowflake"])];
function v(e) {
    let { children: t } = e,
        [n, i] = a.useState(!1),
        l = (0, o.Us)(),
        [s, c] = a.useState(null),
        { confettiCanvas: d } = a.useContext(f.x),
        u = (0, p.f9)(d, s),
        _ = a.useMemo(() => ({ triggerAnimation: () => i(!0), untriggerAnimation: () => i(!1) }), []),
        m = a.useCallback(() => {
            let e = d?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            u.createConfetti({
                ...b,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [u, d]);
    return (a.useEffect(() => {
        let e = n ? setInterval(m, g) : null;
        return () => clearInterval(e);
    }, [n, m]),
    l === h.BRT.OVERLAY)
        ? t
        : (0, r.jsxs)(D.Provider, {
              value: _,
              children: [t, (0, r.jsx)(p.K_, { ref: c, colors: A, sprites: E, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var I = n(544048),
    y = n(513609),
    x = n(851110),
    S = n(490114);
let T = [],
    C = new Set(["jack_o_lantern", "nose"]),
    N = {
        jack_o_lantern: { sprites: (0, m.A)(["chocolate_bar", "lollipop", "candy"]) },
        nose: { sprites: (0, m.A)(["foot"]) },
    },
    R = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function w() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let L = a.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [i, l] = a.useState(null),
        { confettiCanvas: s } = a.useContext(f.x),
        o = (0, p.f9)(s, i);
    return (
        a.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    o.createMultipleConfetti(
                        {
                            ...x.Mw,
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
            [o],
        ),
        (0, r.jsx)(p.K_, { ref: l, colors: T, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function M(e) {
    let { children: t } = e,
        n = a.useRef({}),
        [i, l] = a.useState(null),
        s = (function (e) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(i),
        c = a.useRef(null),
        [d, u] = a.useState(!1),
        _ = a.useRef("jack_o_lantern"),
        p = (0, o.Us)(),
        f = a.useCallback(
            (e) => {
                if (!d) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of C) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((_.current = t), u(!0), l(null));
                }
            },
            [d],
        ),
        m = a.useMemo(() => ({ triggerAnimation: f, untriggerAnimation: () => {} }), [f]),
        g = a.useCallback((e) => {
            l(e);
        }, []),
        b = a.useCallback((e) => {
            "exit" === e && u(!1);
        }, []),
        A = a.useCallback((e) => {
            c.current = e;
        }, []);
    return (a.useEffect(() => {
        if ("confetti" === i) {
            if (null == c.current) return;
            let e = c.current.getBoundingClientRect(),
                t = e.left - 11,
                r = e.top + 125,
                a = n.current[_.current];
            a?.fireConfetti(t, r);
        }
    }, [i]),
    p !== h.BRT.APP)
        ? t
        : (0, r.jsxs)(D.Provider, {
              value: m,
              children: [
                  t,
                  Object.keys(N).map((e) => {
                      let t = N[e];
                      return (0, r.jsx)(
                          L,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  d
                      ? (0, r.jsx)(y.Ay, {
                            children: (0, r.jsx)("div", {
                                className: S.k,
                                children: (0, r.jsx)(I.t, {
                                    animationRef: A,
                                    className: S.I,
                                    nextScene: s,
                                    sceneSegments: R,
                                    onScenePlay: g,
                                    onSceneComplete: b,
                                    importData: w,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function O(e) {
    if (null == e || null == d.A.emojiAnimationTriggers) return !1;
    for (let t of d.A.emojiAnimationTriggers) {
        let n = s.Ay.getByName(t);
        if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
                let r = n.diversityChildren[t];
                if (`:${r.uniqueName}:` === e) return !0;
            }
        }
    }
    return !1;
}
let D = a.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function P(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: i } = a.useContext(D),
        l = (0, o.Us)(),
        s = a.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    l !== h.BRT.OVERLAY && O(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    l !== h.BRT.OVERLAY && O(e) && i(e);
                },
            }),
            [l, n, i],
        );
    return (0, r.jsx)(D.Provider, { value: s, children: t });
}
function j(e) {
    let { children: t } = e,
        n = u.A.useIsEligible(),
        i = a.useCallback((e, t) => {
            switch (t) {
                case d.n.THROW_EMOJI:
                    return (0, r.jsx)(M, { children: e });
                case d.n.SNOW:
                    return (0, r.jsx)(v, { children: e });
            }
        }, []);
    return n && null != d.A.emojiAnimationType ? i((0, r.jsx)(P, { children: t }), d.A.emojiAnimationType) : t;
}
function k(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: l } = e,
        s = (0, i.bG)([c.A], () => c.A.getMessage(n, r)),
        { triggerAnimation: o } = a.useContext(D);
    return (
        a.useEffect(() => {
            if (!d.A.triggerEmojiAnimationFromSentMessage || s?.state !== h.cmJ.SENT || (0, _.AI)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (o(l), (0, _.IL)(r));
        }, [l, t, s?.state, r, o]),
        null
    );
}
function U(e) {
    let { channelId: t, messageId: n, emojiName: a, disable: s, emojiRef: c } = e,
        d = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        _ = u.A.useIsEligible(),
        p = (0, o.Us)();
    return s || p === h.BRT.OVERLAY || !_ || null == n || null == t || d || null == c || !O(a)
        ? null
        : (0, r.jsx)(k, { emojiRef: c, channelId: t, messageId: n, emojiName: a });
}
