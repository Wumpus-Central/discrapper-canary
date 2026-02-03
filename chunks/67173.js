n.d(t, {
    A: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(92674),
    o = n(837381),
    c = n(554146),
    u = n(192308),
    d = n(397927),
    p = n(701363),
    h = n(770178),
    g = n(826673),
    m = n(379848),
    f = n(954571),
    A = n(325087),
    _ = n(398025),
    b = n(419818),
    E = n(652215),
    O = n(49999),
    y = n(985018),
    I = n(106417);
let v = Math.ceil(Math.sqrt(115200)),
    S = (v - 240) / 2,
    C = function (e) {
        var t, n;
        let { selected: l } = e,
            C = (0, o.rm)("quests"),
            N = i.useRef(null),
            {
                shouldShowPopover: T,
                shouldShowGradientAndBadge: j,
                dismissContent: x,
            } = (function () {
                let e = (0, u.useHasAnyModalOpen)(),
                    [t, n] = (0, m.kn)(e ? [] : [c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING], O.m.PRIVATE_CHANNELS_LIST, !0),
                    r = i.useCallback(() => {
                        n(O.i.TAKE_ACTION);
                    }, [n]);
                return {
                    shouldShowPopover: t === c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    shouldShowGradientAndBadge: !(0, g.JZ)(c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING),
                    dismissContent: r,
                };
            })(),
            P = i.useCallback(() => {
                b.A.getState().setUtmCurrentContext({
                    utmContentCurrent: "PRIMARY_QUEST_HOME",
                });
            }, []),
            [{ glowSpring: w }, L] = (0, d.zhh)(() => ({
                from: {
                    glowSpring: 0,
                },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 240,
                    friction: 12,
                },
            })),
            [{ shineSpring: R }, D] = (0, d.zhh)(() => ({
                from: {
                    shineSpring: 0,
                },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            M = i.useCallback(() => {
                D({
                    shineSpring: 1,
                }),
                    L({
                        glowSpring: 1,
                        delay: 200,
                    });
            }, [D, L]),
            k = i.useCallback(() => {
                D({
                    shineSpring: 0,
                    immediate: !0,
                }),
                    L({
                        glowSpring: 0,
                        delay: 0,
                    });
            }, [D, L]),
            U = i.useCallback(() => {
                D({
                    shineSpring: 1,
                    delay: 500,
                }),
                    L({
                        glowSpring: 1,
                        delay: 700,
                    }),
                    f.default.track(E.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [D, L]),
            [G, V] = i.useState(-1),
            B = i.useCallback((e) => {
                V(e.contentRect.width);
            }, []),
            H = (0, h.w)(B, [], {
                fireOnMount: !0,
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: I.iE,
                    onMouseEnter: M,
                    onMouseLeave: k,
                    onFocus: M,
                    onBlur: k,
                    ref: H,
                    style: {
                        "--custom-shine-dimensions": "".concat(240, "px"),
                        "--custom-shine-rotated-dimensions-delta": "".concat(S, "px"),
                    },
                    children: (0, r.jsx)(
                        p.z9,
                        ((t = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: a()({
                                    [I.h6]: j,
                                }),
                                icon: d.r2v,
                                listItemRef: N,
                                onClick: P,
                                route: E.BVt.QUEST_HOME_V2,
                                selected: l,
                                text: y.intl.string(y.t.JALI2K),
                            },
                            C,
                        )),
                        (n = n =
                            {
                                children:
                                    j &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.animated.div, {
                                                className: I.q2,
                                                style: {
                                                    transform: R.to((e) =>
                                                        "translateX(calc("
                                                            .concat(e * G, "px + ")
                                                            .concat(e * v, "px)) translateY(-50%) rotate(45deg)"),
                                                    ),
                                                },
                                            }),
                                            (0, r.jsx)(s.animated.div, {
                                                className: I.ys,
                                                style: {
                                                    opacity: (0, _.a)(
                                                        w.to({
                                                            range: [0, 1],
                                                            output: [0, 0.5],
                                                        }),
                                                    ),
                                                },
                                            }),
                                            (0, r.jsx)(d.LpS, {
                                                className: I.qS,
                                                text: y.intl.string(y.t.y2b7CA),
                                                color: d.LU0.colors.BACKGROUND_BRAND.css,
                                            }),
                                        ],
                                    }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    ),
                }),
                T &&
                    (0, r.jsx)(A.A, {
                        targetElementRef: N,
                        onNavigateToQuestHome: P,
                        onRender: U,
                        onRequestClose: x,
                    }),
            ],
        });
    };
