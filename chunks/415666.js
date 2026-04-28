a.d(t, { wE: () => O, Xq: () => P, q6: () => U });
var n = a(627968),
    l = a(64700),
    r = a(17928),
    i = a(775602),
    s = a(7584),
    o = a(267102),
    c = a(232835),
    d = a(417146),
    u = a(552122),
    h = a(401266),
    p = a(106778),
    m = a(21161),
    f = a(531301),
    _ = a(652215);
let b = 1e3 / 60,
    g = {
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
    x = ["#FFFFFF"],
    v = [a(426560), ...(0, f.A)(["snowflake"])];
function A(e) {
    let { children: t } = e,
        [a, r] = l.useState(!1),
        i = (0, o.Us)(),
        [s, c] = l.useState(null),
        { confettiCanvas: d } = l.useContext(m.x),
        u = (0, p.f9)(d, s),
        h = l.useMemo(() => ({ triggerAnimation: () => r(!0), untriggerAnimation: () => r(!1) }), []),
        f = l.useCallback(() => {
            let e = d?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            u.createConfetti({
                ...g,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [u, d]);
    return (l.useEffect(() => {
        let e = a ? setInterval(f, b) : null;
        return () => clearInterval(e);
    }, [a, f]),
    i === _.BRT.OVERLAY)
        ? t
        : (0, n.jsxs)(O.Provider, {
              value: h,
              children: [t, (0, n.jsx)(p.K_, { ref: c, colors: x, sprites: v, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var E = a(544048),
    y = a(513609),
    I = a(851110),
    S = a(490114);
let j = [],
    C = new Set(["jack_o_lantern", "nose"]),
    T = {
        jack_o_lantern: { sprites: (0, f.A)(["chocolate_bar", "lollipop", "candy"]) },
        nose: { sprites: (0, f.A)(["foot"]) },
    },
    w = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function R() {
    return a
        .e("98150")
        .then(a.t.bind(a, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let N = l.forwardRef(function (e, t) {
    let { sprites: a } = e,
        [r, i] = l.useState(null),
        { confettiCanvas: s } = l.useContext(m.x),
        o = (0, p.f9)(s, r);
    return (
        l.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    o.createMultipleConfetti(
                        {
                            ...I.Mw,
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
        (0, n.jsx)(p.K_, { ref: i, colors: j, sprites: a, spriteWidth: 48, spriteHeight: 48 })
    );
});
function k(e) {
    let { children: t } = e,
        a = l.useRef({}),
        [r, i] = l.useState(null),
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
        })(r),
        c = l.useRef(null),
        [d, u] = l.useState(!1),
        h = l.useRef("jack_o_lantern"),
        p = (0, o.Us)(),
        m = l.useCallback(
            (e) => {
                if (!d) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of C) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((h.current = t), u(!0), i(null));
                }
            },
            [d],
        ),
        f = l.useMemo(() => ({ triggerAnimation: m, untriggerAnimation: () => {} }), [m]),
        b = l.useCallback((e) => {
            i(e);
        }, []),
        g = l.useCallback((e) => {
            "exit" === e && u(!1);
        }, []),
        x = l.useCallback((e) => {
            c.current = e;
        }, []);
    return (l.useEffect(() => {
        if ("confetti" === r) {
            if (null == c.current) return;
            let e = c.current.getBoundingClientRect(),
                t = e.left - 11,
                n = e.top + 125,
                l = a.current[h.current];
            l?.fireConfetti(t, n);
        }
    }, [r]),
    p !== _.BRT.APP)
        ? t
        : (0, n.jsxs)(O.Provider, {
              value: f,
              children: [
                  t,
                  Object.keys(T).map((e) => {
                      let t = T[e];
                      return (0, n.jsx)(
                          N,
                          {
                              ref: (t) => {
                                  null != t ? (a.current[e] = t) : delete a.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  d
                      ? (0, n.jsx)(y.Ay, {
                            children: (0, n.jsx)("div", {
                                className: S.k,
                                children: (0, n.jsx)(E.t, {
                                    animationRef: x,
                                    className: S.I,
                                    nextScene: s,
                                    sceneSegments: w,
                                    onScenePlay: b,
                                    onSceneComplete: g,
                                    importData: R,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function L(e) {
    if (null == e || null == d.A.emojiAnimationTriggers) return !1;
    for (let t of d.A.emojiAnimationTriggers) {
        let a = s.Ay.getByName(t);
        if (null != a) {
            if (`:${a.uniqueName}:` === e) return !0;
            for (let t in a.diversityChildren) {
                let n = a.diversityChildren[t];
                if (`:${n.uniqueName}:` === e) return !0;
            }
        }
    }
    return !1;
}
let O = l.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function M(e) {
    let { children: t } = e,
        { triggerAnimation: a, untriggerAnimation: r } = l.useContext(O),
        i = (0, o.Us)(),
        s = l.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    i !== _.BRT.OVERLAY && L(e) && a(e);
                },
                untriggerAnimation: (e) => {
                    i !== _.BRT.OVERLAY && L(e) && r(e);
                },
            }),
            [i, a, r],
        );
    return (0, n.jsx)(O.Provider, { value: s, children: t });
}
function P(e) {
    let { children: t } = e,
        a = u.A.useIsEligible(),
        r = l.useCallback((e, t) => {
            switch (t) {
                case d.n.THROW_EMOJI:
                    return (0, n.jsx)(k, { children: e });
                case d.n.SNOW:
                    return (0, n.jsx)(A, { children: e });
            }
        }, []);
    return a && null != d.A.emojiAnimationType ? r((0, n.jsx)(M, { children: t }), d.A.emojiAnimationType) : t;
}
function D(e) {
    let { emojiRef: t, channelId: a, messageId: n, emojiName: i } = e,
        s = (0, r.bG)([c.A], () => c.A.getMessage(a, n)),
        { triggerAnimation: o } = l.useContext(O);
    return (
        l.useEffect(() => {
            if (!d.A.triggerEmojiAnimationFromSentMessage || s?.state !== _.cmJ.SENT || (0, h.AI)(n)) return;
            let { top: e, bottom: a } = t.getBoundingClientRect();
            e >= 0 && a <= window.innerHeight && (o(i), (0, h.IL)(n));
        }, [i, t, s?.state, n, o]),
        null
    );
}
function U(e) {
    let { channelId: t, messageId: a, emojiName: l, disable: s, emojiRef: c } = e,
        d = (0, r.bG)([i.A], () => i.A.useReducedMotion),
        h = u.A.useIsEligible(),
        p = (0, o.Us)();
    return s || p === _.BRT.OVERLAY || !h || null == a || null == t || d || null == c || !L(l)
        ? null
        : (0, n.jsx)(D, { emojiRef: c, channelId: t, messageId: a, emojiName: l });
}
