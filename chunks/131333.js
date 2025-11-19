n.d(t, { t: () => j }), n(388685), n(35282), n(413496), n(433524);
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
    _ = n(675654),
    p = n(950176);
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
    v = -40,
    I = -100,
    T = 11,
    S = 125,
    A = 20,
    C = 12,
    N = 48,
    R = 0.01,
    P = new Set(["jack_o_lantern", "nose"]),
    D = {
        jack_o_lantern: {
            sprites: (0, l.Z)(["chocolate_bar", "lollipop", "candy"]),
        },
        nose: { sprites: (0, l.Z)(["foot"]) },
    };
function w(e) {
    if (null == e) return null;
    for (let t of P) if (null != e.match(new RegExp(":".concat(t, "(_tone[1-9])?")))) return t;
    return null;
}
let L = {
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
function x() {
    return n
        .e("77843")
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function M(e) {
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
let k = i.forwardRef(function (e, t) {
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
                        E(m({}, _.We), {
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
                                    y: I,
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
                        A,
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
function j(e) {
    let { children: t } = e,
        n = i.useRef({}),
        [a, s] = i.useState(null),
        l = M(a),
        _ = i.useRef(null),
        [h, m] = i.useState(!1),
        g = i.useRef("jack_o_lantern"),
        E = (0, u.bp)(),
        b = i.useCallback(
            (e) => {
                if (!h) {
                    let t = w(e);
                    null != t && ((g.current = t), m(!0), s(null));
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
            s(e);
        }, []),
        v = i.useCallback((e) => {
            "exit" === e && m(!1);
        }, []),
        I = i.useCallback((e) => {
            _.current = e;
        }, []);
    return (i.useEffect(() => {
        if ("confetti" === a) {
            if (null == _.current) return;
            let e = _.current.getBoundingClientRect(),
                t = e.left - T,
                r = e.top + S,
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
                  Object.keys(D).map((e) => {
                      let t = D[e];
                      return (0, r.jsx)(
                          k,
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
                      ? (0, r.jsx)(c.ZP, {
                            children: (0, r.jsx)("div", {
                                className: p.animationWrapper,
                                children: (0, r.jsx)(o.kci, {
                                    animationRef: I,
                                    className: p.lottieAnimation,
                                    nextScene: l,
                                    sceneSegments: L,
                                    onScenePlay: O,
                                    onSceneComplete: v,
                                    importData: x,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
