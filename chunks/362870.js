n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(13941),
    o = n(91192),
    c = n(704215),
    u = n(481060),
    d = n(515753),
    p = n(393903),
    f = n(266454),
    m = n(426032),
    h = n(626135),
    g = n(937797),
    _ = n(150560),
    b = n(551913),
    E = n(46140),
    O = n(981631),
    I = n(921944),
    y = n(388032),
    v = n(228624);
let C = Math.ceil(Math.sqrt(115200)),
    S = (C - 240) / 2,
    T = function (e) {
        var t, n;
        let { selected: l } = e,
            T = (0, o.JA)("quests"),
            N = i.useRef(null),
            {
                shouldShowPopover: j,
                shouldShowGradientAndBadge: P,
                dismissContent: x,
            } = (function () {
                let { enabled: e } = g.GE.useConfig({ location: E.dr.PRIVATE_CHANNELS_LIST }),
                    [t, n] = (0, m.US)(e ? [c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [], I.R.PRIVATE_CHANNELS_LIST, !0),
                    r = i.useCallback(() => {
                        e && n(I.L.TAKE_ACTION);
                    }, [n, e]);
                return {
                    shouldShowPopover: t === c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    shouldShowGradientAndBadge: !(0, f.Nj)(c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING) && e,
                    dismissContent: r,
                };
            })(),
            A = i.useCallback(() => {
                _.Z.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
            }, []),
            [{ glowSpring: Z }, w] = (0, u.q_F)(() => ({
                from: { glowSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 240,
                    friction: 12,
                },
            })),
            [{ shineSpring: L }, R] = (0, u.q_F)(() => ({
                from: { shineSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            D = i.useCallback(() => {
                R({ shineSpring: 1 }),
                    w({
                        glowSpring: 1,
                        delay: 200,
                    });
            }, [R, w]),
            M = i.useCallback(() => {
                R({
                    shineSpring: 0,
                    immediate: !0,
                }),
                    w({
                        glowSpring: 0,
                        delay: 0,
                    });
            }, [R, w]),
            k = i.useCallback(() => {
                R({
                    shineSpring: 1,
                    delay: 500,
                }),
                    w({
                        glowSpring: 1,
                        delay: 700,
                    }),
                    h.default.track(O.rMx.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [R, w]),
            [U, G] = i.useState(-1),
            B = i.useCallback((e) => {
                G(e.contentRect.width);
            }, []),
            H = (0, p.y)(B, [], { fireOnMount: !0 });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: v.wrapper,
                    onMouseEnter: D,
                    onMouseLeave: M,
                    onFocus: D,
                    onBlur: M,
                    ref: H,
                    style: {
                        "--custom-shine-dimensions": "".concat(240, "px"),
                        "--custom-shine-rotated-dimensions-delta": "".concat(S, "px"),
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
                                className: a()({ [v.withGradientAndBadge]: P }),
                                icon: u.qDn,
                                listItemRef: N,
                                onClick: A,
                                route: O.Z5c.QUEST_HOME_V2,
                                selected: l,
                                text: y.intl.string(y.t.JALI2K),
                            },
                            T,
                        )),
                        (n = n =
                            {
                                children:
                                    P &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.animated.div, {
                                                className: v.shine,
                                                style: {
                                                    transform: L.to((e) =>
                                                        "translateX(calc("
                                                            .concat(e * U, "px + ")
                                                            .concat(e * C, "px)) translateY(-50%) rotate(45deg)"),
                                                    ),
                                                },
                                            }),
                                            (0, r.jsx)(s.animated.div, {
                                                className: v.glow,
                                                style: {
                                                    opacity: Z.to({
                                                        range: [0, 1],
                                                        output: [0, 0.5],
                                                    }),
                                                },
                                            }),
                                            (0, r.jsx)(u.IGR, {
                                                className: v.badge,
                                                text: y.intl.string(y.t.y2b7CA),
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
                j &&
                    (0, r.jsx)(b.Z, {
                        targetElementRef: N,
                        onNavigateToQuestHome: A,
                        onRender: k,
                        onRequestClose: x,
                    }),
            ],
        });
    };
