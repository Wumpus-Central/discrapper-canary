n.d(t, { t: () => k }), n(388685), n(35282), n(413496), n(433524);
var r = n(54381),
    i = n(473749),
    a = n(921254),
    o = n(481060),
    s = n(745510),
    l = n(661637),
    c = n(549006),
    u = n(728285),
    d = n(146128),
    f = n(981631),
    p = n(675654),
    _ = n(81329);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
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
    v = -40,
    S = -100,
    I = 11,
    T = 125,
    C = 20,
    A = 12,
    N = 48,
    P = 0.01,
    R = new Set(["jack_o_lantern", "nose"]),
    w = {
        jack_o_lantern: {
            sprites: (0, l.Z)(["chocolate_bar", "lollipop", "candy"]),
        },
        nose: { sprites: (0, l.Z)(["foot"]) },
    };
function D(e) {
    if (null == e) return null;
    for (let t of R) if (null != e.match(new RegExp(":".concat(t, "(_tone[1-9])?")))) return t;
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
        .e("77843")
        .then(n.t.bind(n, 931152, 19))
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
        [o, l] = i.useState(null),
        { confettiCanvas: c } = i.useContext(s.h),
        u = (0, a.uR)(c, o);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    u.createMultipleConfetti(
                        E(h({}, p.We), {
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
                                    y: v,
                                },
                                maxValue: {
                                    x: O,
                                    y: S,
                                },
                            },
                            size: {
                                type: "static-random",
                                minValue: A,
                                maxValue: N,
                            },
                            dragCoefficient: {
                                type: "static",
                                value: P,
                            },
                        }),
                        C,
                    );
                },
            }),
            [u],
        ),
        (0, r.jsx)(a.Ji, {
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
        [a, s] = i.useState(null),
        l = j(a),
        p = i.useRef(null),
        [m, h] = i.useState(!1),
        g = i.useRef("jack_o_lantern"),
        E = (0, u.bp)(),
        b = i.useCallback(
            (e) => {
                if (!m) {
                    let t = D(e);
                    null != t && ((g.current = t), h(!0), s(null));
                }
            },
            [m],
        ),
        y = i.useMemo(
            () => ({
                triggerAnimation: b,
                untriggerAnimation: () => {},
            }),
            [b],
        ),
        O = i.useCallback((e) => {
            s(e);
        }, []),
        v = i.useCallback((e) => {
            "exit" === e && h(!1);
        }, []),
        S = i.useCallback((e) => {
            p.current = e;
        }, []);
    return (i.useEffect(() => {
        if ("confetti" === a) {
            if (null == p.current) return;
            let e = p.current.getBoundingClientRect(),
                t = e.left - I,
                r = e.top + T,
                i = n.current[g.current];
            null == i || i.fireConfetti(t, r);
        }
    }, [a]),
    E !== f.IlC.APP)
        ? t
        : (0, r.jsxs)(d.Rm.Provider, {
              value: y,
              children: [
                  t,
                  Object.keys(w).map((e) => {
                      let t = w[e];
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
                  m
                      ? (0, r.jsx)(c.ZP, {
                            children: (0, r.jsx)("div", {
                                className: _.animationWrapper,
                                children: (0, r.jsx)(o.kci, {
                                    animationRef: S,
                                    className: _.lottieAnimation,
                                    nextScene: l,
                                    sceneSegments: x,
                                    onScenePlay: O,
                                    onSceneComplete: v,
                                    importData: L,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
