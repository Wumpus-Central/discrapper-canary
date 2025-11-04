n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(689628),
    s = n(91192),
    c = n(704215),
    u = n(481060),
    d = n(515753),
    p = n(393903),
    f = n(266454),
    h = n(426032),
    g = n(626135),
    m = n(150560),
    _ = n(551913),
    b = n(981631),
    E = n(921944),
    O = n(388032),
    y = n(228624);
let v = Math.ceil(Math.sqrt(115200)),
    I = (v - 240) / 2,
    C = function (e) {
        var t, n;
        let { selected: l } = e,
            C = (0, s.JA)("quests"),
            S = i.useRef(null),
            {
                shouldShowPopover: T,
                shouldShowGradientAndBadge: N,
                dismissContent: j,
            } = (function () {
                let [e, t] = (0, h.US)([c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING], E.R.PRIVATE_CHANNELS_LIST, !0),
                    n = i.useCallback(() => {
                        t(E.L.TAKE_ACTION);
                    }, [t]);
                return {
                    shouldShowPopover: e === c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    shouldShowGradientAndBadge: !(0, f.Nj)(c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING),
                    dismissContent: n,
                };
            })(),
            P = i.useCallback(() => {
                m.Z.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
            }, []),
            [{ glowSpring: x }, A] = (0, u.q_F)(() => ({
                from: { glowSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 240,
                    friction: 12,
                },
            })),
            [{ shineSpring: Z }, w] = (0, u.q_F)(() => ({
                from: { shineSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            L = i.useCallback(() => {
                w({ shineSpring: 1 }),
                    A({
                        glowSpring: 1,
                        delay: 200,
                    });
            }, [w, A]),
            R = i.useCallback(() => {
                w({
                    shineSpring: 0,
                    immediate: !0,
                }),
                    A({
                        glowSpring: 0,
                        delay: 0,
                    });
            }, [w, A]),
            D = i.useCallback(() => {
                w({
                    shineSpring: 1,
                    delay: 500,
                }),
                    A({
                        glowSpring: 1,
                        delay: 700,
                    }),
                    g.default.track(b.rMx.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [w, A]),
            [M, k] = i.useState(-1),
            U = i.useCallback((e) => {
                k(e.contentRect.width);
            }, []),
            G = (0, p.y)(U, [], { fireOnMount: !0 });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: y.wrapper,
                    onMouseEnter: L,
                    onMouseLeave: R,
                    onFocus: L,
                    onBlur: R,
                    ref: G,
                    style: {
                        "--custom-shine-dimensions": "".concat(240, "px"),
                        "--custom-shine-rotated-dimensions-delta": "".concat(I, "px"),
                    },
                    children: (0, r.jsx)(
                        d.Qj,
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
                                className: a()({ [y.withGradientAndBadge]: N }),
                                icon: u.qDn,
                                listItemRef: S,
                                onClick: P,
                                route: b.Z5c.QUEST_HOME_V2,
                                selected: l,
                                text: O.intl.string(O.t.JALI2K),
                            },
                            C,
                        )),
                        (n = n =
                            {
                                children:
                                    N &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.animated.div, {
                                                className: y.shine,
                                                style: {
                                                    transform: Z.to((e) =>
                                                        "translateX(calc("
                                                            .concat(e * M, "px + ")
                                                            .concat(e * v, "px)) translateY(-50%) rotate(45deg)"),
                                                    ),
                                                },
                                            }),
                                            (0, r.jsx)(o.animated.div, {
                                                className: y.glow,
                                                style: {
                                                    opacity: x.to({
                                                        range: [0, 1],
                                                        output: [0, 0.5],
                                                    }),
                                                },
                                            }),
                                            (0, r.jsx)(u.IGR, {
                                                className: y.badge,
                                                text: O.intl.string(O.t.y2b7CA),
                                                color: u.TVs.colors.BG_BRAND.css,
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
                    (0, r.jsx)(_.Z, {
                        targetElementRef: S,
                        onNavigateToQuestHome: P,
                        onRender: D,
                        onRequestClose: j,
                    }),
            ],
        });
    };
