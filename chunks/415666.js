n.d(t, { wE: () => v, Xq: () => b, q6: () => H });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    l = n(775602),
    s = n(7584),
    o = n(267102),
    u = n(232835),
    _ = n(417146),
    E = n(552122),
    A = n(401266),
    c = n(106778),
    d = n(21161),
    I = n(531301),
    T = n(652215);
let N = 1e3 / 60,
    S = {
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
    p = ["#FFFFFF"],
    O = [n(426560), ...(0, I.A)(["snowflake"])];
function C(e) {
    let { children: t } = e,
        [n, a] = r.useState(!1),
        l = (0, o.Us)(),
        [s, u] = r.useState(null),
        { confettiCanvas: _ } = r.useContext(d.x),
        E = (0, c.f9)(_, s),
        A = r.useMemo(() => ({ triggerAnimation: () => a(!0), untriggerAnimation: () => a(!1) }), []),
        I = r.useCallback(() => {
            let e = _?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            E.createConfetti({
                ...S,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [E, _]);
    return (r.useEffect(() => {
        let e = n ? setInterval(I, N) : null;
        return () => clearInterval(e);
    }, [n, I]),
    l === T.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(v.Provider, {
              value: A,
              children: [t, (0, i.jsx)(c.K_, { ref: u, colors: p, sprites: O, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var g = n(544048),
    R = n(513609),
    m = n(851110),
    h = n(490114);
let M = [],
    f = new Set(["jack_o_lantern", "nose"]),
    L = {
        jack_o_lantern: { sprites: (0, I.A)(["chocolate_bar", "lollipop", "candy"]) },
        nose: { sprites: (0, I.A)(["foot"]) },
    },
    y = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function D() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let U = r.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [a, l] = r.useState(null),
        { confettiCanvas: s } = r.useContext(d.x),
        o = (0, c.f9)(s, a);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    o.createMultipleConfetti(
                        {
                            ...m.Mw,
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
        (0, i.jsx)(c.K_, { ref: l, colors: M, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function P(e) {
    let { children: t } = e,
        n = r.useRef({}),
        [a, l] = r.useState(null),
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
        })(a),
        u = r.useRef(null),
        [_, E] = r.useState(!1),
        A = r.useRef("jack_o_lantern"),
        c = (0, o.Us)(),
        d = r.useCallback(
            (e) => {
                if (!_) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of f) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((A.current = t), E(!0), l(null));
                }
            },
            [_],
        ),
        I = r.useMemo(() => ({ triggerAnimation: d, untriggerAnimation: () => {} }), [d]),
        N = r.useCallback((e) => {
            l(e);
        }, []),
        S = r.useCallback((e) => {
            "exit" === e && E(!1);
        }, []),
        p = r.useCallback((e) => {
            u.current = e;
        }, []);
    return (r.useEffect(() => {
        if ("confetti" === a) {
            if (null == u.current) return;
            let e = u.current.getBoundingClientRect(),
                t = e.left - 11,
                i = e.top + 125,
                r = n.current[A.current];
            r?.fireConfetti(t, i);
        }
    }, [a]),
    c !== T.BRT.APP)
        ? t
        : (0, i.jsxs)(v.Provider, {
              value: I,
              children: [
                  t,
                  Object.keys(L).map((e) => {
                      let t = L[e];
                      return (0, i.jsx)(
                          U,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  _
                      ? (0, i.jsx)(R.Ay, {
                            children: (0, i.jsx)("div", {
                                className: h.k,
                                children: (0, i.jsx)(g.t, {
                                    animationRef: p,
                                    className: h.I,
                                    nextScene: s,
                                    sceneSegments: y,
                                    onScenePlay: N,
                                    onSceneComplete: S,
                                    importData: D,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function G(e) {
    if (null == e || null == _.A.emojiAnimationTriggers) return !1;
    for (let t of _.A.emojiAnimationTriggers) {
        let n = s.Ay.getByName(t);
        if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
                let i = n.diversityChildren[t];
                if (`:${i.uniqueName}:` === e) return !0;
            }
        }
    }
    return !1;
}
let v = r.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function B(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: a } = r.useContext(v),
        l = (0, o.Us)(),
        s = r.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    l !== T.BRT.OVERLAY && G(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    l !== T.BRT.OVERLAY && G(e) && a(e);
                },
            }),
            [l, n, a],
        );
    return (0, i.jsx)(v.Provider, { value: s, children: t });
}
function b(e) {
    let { children: t } = e,
        n = E.A.useIsEligible(),
        a = r.useCallback((e, t) => {
            switch (t) {
                case _.n.THROW_EMOJI:
                    return (0, i.jsx)(P, { children: e });
                case _.n.SNOW:
                    return (0, i.jsx)(C, { children: e });
            }
        }, []);
    return n && null != _.A.emojiAnimationType ? a((0, i.jsx)(B, { children: t }), _.A.emojiAnimationType) : t;
}
function w(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: l } = e,
        s = (0, a.bG)([u.A], () => u.A.getMessage(n, i)),
        { triggerAnimation: o } = r.useContext(v);
    return (
        r.useEffect(() => {
            if (!_.A.triggerEmojiAnimationFromSentMessage || s?.state !== T.cmJ.SENT || (0, A.AI)(i)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (o(l), (0, A.IL)(i));
        }, [l, t, s?.state, i, o]),
        null
    );
}
function H(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: s, emojiRef: u } = e,
        _ = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        A = E.A.useIsEligible(),
        c = (0, o.Us)();
    return s || c === T.BRT.OVERLAY || !A || null == n || null == t || _ || null == u || !G(r)
        ? null
        : (0, i.jsx)(w, { emojiRef: u, channelId: t, messageId: n, emojiName: r });
}
