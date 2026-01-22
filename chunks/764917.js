n.d(t, { V: () => k }), n(896048), n(747238), n(591487), n(727858);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(397927),
    o = n(21161),
    l = n(531301),
    c = n(513609),
    u = n(267102),
    d = n(129185),
    f = n(652215),
    p = n(851110),
    _ = n(409221);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = [],
    y = -5,
    O = -40,
    A = -40,
    v = -100,
    S = 11,
    I = 125,
    T = 20,
    C = 12,
    N = 48,
    R = 0.01,
    w = new Set(["jack_o_lantern", "nose"]),
    P = {
        jack_o_lantern: {
            sprites: (0, l.A)(["chocolate_bar", "lollipop", "candy"]),
        },
        nose: { sprites: (0, l.A)(["foot"]) },
    };
function D(e) {
    if (null == e) return null;
    for (let t of w) if (null != e.match(new RegExp(":".concat(t, "(_tone[1-9])?")))) return t;
    return null;
}
let x = {
    enter: {
        BEG: 0,
        END: 22,
    },
    confetti: {
        BEG: 23,
        END: 119,
    },
    exit: {
        BEG: 164,
        END: 200,
    },
};
function L() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function j(e) {
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
let M = i.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [s, l] = i.useState(null),
        { confettiCanvas: c } = i.useContext(o.x),
        u = (0, a.f9)(c, s);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    u.createMultipleConfetti(
                        E(m({}, p.Mw), {
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t,
                                },
                            },
                            velocity: {
                                type: "static-random",
                                minValue: {
                                    x: y,
                                    y: A,
                                },
                                maxValue: {
                                    x: O,
                                    y: v,
                                },
                            },
                            size: {
                                type: "static-random",
                                minValue: C,
                                maxValue: N,
                            },
                            dragCoefficient: {
                                type: "static",
                                value: R,
                            },
                        }),
                        T,
                    );
                },
            }),
            [u],
        ),
        (0, r.jsx)(a.K_, {
            ref: l,
            colors: b,
            sprites: n,
            spriteWidth: N,
            spriteHeight: N,
        })
    );
});
function k(e) {
    let { children: t } = e,
        n = i.useRef({}),
        [a, o] = i.useState(null),
        l = j(a),
        p = i.useRef(null),
        [h, m] = i.useState(!1),
        g = i.useRef("jack_o_lantern"),
        E = (0, u.Us)(),
        b = i.useCallback(
            (e) => {
                if (!h) {
                    let t = D(e);
                    null != t && ((g.current = t), m(!0), o(null));
                }
            },
            [h],
        ),
        y = i.useMemo(
            () => ({
                triggerAnimation: b,
                untriggerAnimation: () => {},
            }),
            [b],
        ),
        O = i.useCallback((e) => {
            o(e);
        }, []),
        A = i.useCallback((e) => {
            "exit" === e && m(!1);
        }, []),
        v = i.useCallback((e) => {
            p.current = e;
        }, []);
    return (i.useEffect(() => {
        if ("confetti" === a) {
            if (null == p.current) return;
            let e = p.current.getBoundingClientRect(),
                t = e.left - S,
                r = e.top + I,
                i = n.current[g.current];
            null == i || i.fireConfetti(t, r);
        }
    }, [a]),
    E !== f.BRT.APP)
        ? t
        : (0, r.jsxs)(d.wE.Provider, {
              value: y,
              children: [
                  t,
                  Object.keys(P).map((e) => {
                      let t = P[e];
                      return (0, r.jsx)(
                          M,
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
                      ? (0, r.jsx)(c.Ay, {
                            children: (0, r.jsx)("div", {
                                className: _.k,
                                children: (0, r.jsx)(s.tvC, {
                                    animationRef: v,
                                    className: _.I,
                                    nextScene: l,
                                    sceneSegments: x,
                                    onScenePlay: O,
                                    onSceneComplete: A,
                                    importData: L,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
