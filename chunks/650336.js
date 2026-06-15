n.d(t, { wE: () => M, Xq: () => z, q6: () => F });
var r = n(627968),
    i = n(64700),
    l = n(17928),
    u = n(775602),
    a = n(7584),
    s = n(267102),
    o = n(232835),
    c = n(417146),
    d = n(552122),
    m = n(401266),
    f = n(106778),
    g = n(21161);
function x(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = a.Ay.getByName(e);
            if (null != n && (t.push({ src: n.url, colorize: !1 }), n.hasDiversity))
                for (let e in n.diversityChildren) {
                    let r = n.diversityChildren[e];
                    t.push({ src: r.url, colorize: !1 });
                }
        }),
        t
    );
}
n(321073);
var p = n(652215);
let y = 1e3 / 60,
    A = {
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
    j = ["#FFFFFF"],
    h = [n(426560), ...x(["snowflake"])];
function C(e) {
    let { children: t } = e,
        [n, l] = i.useState(!1),
        u = (0, s.Us)(),
        [a, o] = i.useState(null),
        { confettiCanvas: c } = i.useContext(g.x),
        d = (0, f.f9)(c, a),
        m = i.useMemo(() => ({ triggerAnimation: () => l(!0), untriggerAnimation: () => l(!1) }), []),
        x = i.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            d.createConfetti({
                ...A,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [d, c]);
    return (i.useEffect(() => {
        let e = n ? setInterval(x, y) : null;
        return () => clearInterval(e);
    }, [n, x]),
    u === p.BRT.OVERLAY)
        ? t
        : (0, r.jsxs)(M.Provider, {
              value: m,
              children: [t, (0, r.jsx)(f.K_, { ref: o, colors: j, sprites: h, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var v = n(544048),
    b = n(513609),
    E = n(536283),
    R = n(490114);
let k = [],
    V = new Set(["jack_o_lantern", "nose"]),
    S = { jack_o_lantern: { sprites: x(["chocolate_bar", "lollipop", "candy"]) }, nose: { sprites: x(["foot"]) } },
    w = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function I() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let _ = i.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [l, u] = i.useState(null),
        { confettiCanvas: a } = i.useContext(g.x),
        s = (0, f.f9)(a, l);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    s.createMultipleConfetti(
                        {
                            ...E.Mw,
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
            [s],
        ),
        (0, r.jsx)(f.K_, { ref: u, colors: k, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function N(e) {
    let { children: t } = e,
        n = i.useRef({}),
        [l, u] = i.useState(null),
        a = (function (e) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(l),
        o = i.useRef(null),
        [c, d] = i.useState(!1),
        m = i.useRef("jack_o_lantern"),
        f = (0, s.Us)(),
        g = i.useCallback(
            (e) => {
                if (!c) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of V) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((m.current = t), d(!0), u(null));
                }
            },
            [c],
        ),
        x = i.useMemo(() => ({ triggerAnimation: g, untriggerAnimation: () => {} }), [g]),
        y = i.useCallback((e) => {
            u(e);
        }, []),
        A = i.useCallback((e) => {
            "exit" === e && d(!1);
        }, []),
        j = i.useCallback((e) => {
            o.current = e;
        }, []);
    return (i.useEffect(() => {
        if ("confetti" === l) {
            if (null == o.current) return;
            let e = o.current.getBoundingClientRect(),
                t = e.left - 11,
                r = e.top + 125,
                i = n.current[m.current];
            i?.fireConfetti(t, r);
        }
    }, [l]),
    f !== p.BRT.APP)
        ? t
        : (0, r.jsxs)(M.Provider, {
              value: x,
              children: [
                  t,
                  Object.keys(S).map((e) => {
                      let t = S[e];
                      return (0, r.jsx)(
                          _,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  c
                      ? (0, r.jsx)(b.Ay, {
                            children: (0, r.jsx)("div", {
                                className: R.k,
                                children: (0, r.jsx)(v.t, {
                                    animationRef: j,
                                    className: R.I,
                                    nextScene: a,
                                    sceneSegments: w,
                                    onScenePlay: y,
                                    onSceneComplete: A,
                                    importData: I,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function B(e) {
    if (null == e || null == c.A.emojiAnimationTriggers) return !1;
    for (let t of c.A.emojiAnimationTriggers) {
        let n = a.Ay.getByName(t);
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
let M = i.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function T(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: l } = i.useContext(M),
        u = (0, s.Us)(),
        a = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    u !== p.BRT.OVERLAY && B(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    u !== p.BRT.OVERLAY && B(e) && l(e);
                },
            }),
            [u, n, l],
        );
    return (0, r.jsx)(M.Provider, { value: a, children: t });
}
function z(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        l = i.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, r.jsx)(N, { children: e });
                case c.n.SNOW:
                    return (0, r.jsx)(C, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? l((0, r.jsx)(T, { children: t }), c.A.emojiAnimationType) : t;
}
function L(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: u } = e,
        a = (0, l.bG)([o.A], () => o.A.getMessage(n, r)),
        { triggerAnimation: s } = i.useContext(M);
    return (
        i.useEffect(() => {
            if (!c.A.triggerEmojiAnimationFromSentMessage || a?.state !== p.cmJ.SENT || (0, m.AI)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (s(u), (0, m.IL)(r));
        }, [u, t, a?.state, r, s]),
        null
    );
}
function F(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: a, emojiRef: o } = e,
        c = (0, l.bG)([u.Ay], () => u.Ay.useReducedMotion),
        m = d.A.useIsEligible(),
        f = (0, s.Us)();
    return a || f === p.BRT.OVERLAY || !m || null == n || null == t || c || null == o || !B(i)
        ? null
        : (0, r.jsx)(L, { emojiRef: o, channelId: t, messageId: n, emojiName: i });
}
