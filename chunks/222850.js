n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(236726),
    s = n(91192),
    c = n(704215),
    u = n(952265),
    d = n(481060),
    p = n(515753),
    f = n(393903),
    g = n(266454),
    h = n(243778),
    m = n(626135),
    b = n(61319),
    _ = n(150560),
    E = n(981631),
    O = n(921944),
    v = n(388032),
    y = n(435673);
let I = Math.ceil(Math.sqrt(115200)),
    C = (I - 240) / 2,
    S = function (e) {
        var t, n;
        let { selected: l } = e,
            S = (0, s.JA)("quests"),
            T = i.useRef(null),
            {
                shouldShowPopover: N,
                shouldShowGradientAndBadge: j,
                dismissContent: P,
            } = (function () {
                let e = (0, u.useHasAnyModalOpen)(),
                    [t, n] = (0, h.US)(e ? [] : [c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING], O.R.PRIVATE_CHANNELS_LIST, !0),
                    r = i.useCallback(() => {
                        n(O.L.TAKE_ACTION);
                    }, [n]);
                return {
                    shouldShowPopover: t === c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    shouldShowGradientAndBadge: !(0, g.Nj)(c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING),
                    dismissContent: r,
                };
            })(),
            x = i.useCallback(() => {
                _.Z.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
            }, []),
            [{ glowSpring: A }, Z] = (0, d.q_F)(() => ({
                from: { glowSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 240,
                    friction: 12,
                },
            })),
            [{ shineSpring: w }, L] = (0, d.q_F)(() => ({
                from: { shineSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 170,
                    friction: 38,
                },
            })),
            R = i.useCallback(() => {
                L({ shineSpring: 1 }),
                    Z({
                        glowSpring: 1,
                        delay: 200,
                    });
            }, [L, Z]),
            D = i.useCallback(() => {
                L({
                    shineSpring: 0,
                    immediate: !0,
                }),
                    Z({
                        glowSpring: 0,
                        delay: 0,
                    });
            }, [L, Z]),
            M = i.useCallback(() => {
                L({
                    shineSpring: 1,
                    delay: 500,
                }),
                    Z({
                        glowSpring: 1,
                        delay: 700,
                    }),
                    m.default.track(E.rMx.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [L, Z]),
            [k, U] = i.useState(-1),
            G = i.useCallback((e) => {
                U(e.contentRect.width);
            }, []),
            H = (0, f.y)(G, [], { fireOnMount: !0 });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: y.wrapper,
                    onMouseEnter: R,
                    onMouseLeave: D,
                    onFocus: R,
                    onBlur: D,
                    ref: H,
                    style: {
                        "--custom-shine-dimensions": "".concat(240, "px"),
                        "--custom-shine-rotated-dimensions-delta": "".concat(C, "px"),
                    },
                    children: (0, r.jsx)(
                        p.Qj,
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
                                className: a()({ [y.withGradientAndBadge]: j }),
                                icon: d.qDn,
                                listItemRef: T,
                                onClick: x,
                                route: E.Z5c.QUEST_HOME_V2,
                                selected: l,
                                text: v.intl.string(v.t.JALI2K),
                            },
                            S,
                        )),
                        (n = n =
                            {
                                children:
                                    j &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(o.animated.div, {
                                                className: y.shine,
                                                style: {
                                                    transform: w.to((e) =>
                                                        "translateX(calc("
                                                            .concat(e * k, "px + ")
                                                            .concat(e * I, "px)) translateY(-50%) rotate(45deg)"),
                                                    ),
                                                },
                                            }),
                                            (0, r.jsx)(o.animated.div, {
                                                className: y.glow,
                                                style: {
                                                    opacity: A.to({
                                                        range: [0, 1],
                                                        output: [0, 0.5],
                                                    }),
                                                },
                                            }),
                                            (0, r.jsx)(d.IGR, {
                                                className: y.badge,
                                                text: v.intl.string(v.t.y2b7CA),
                                                color: d.TVs.colors.BACKGROUND_BRAND.css,
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
                N &&
                    (0, r.jsx)(b.Z, {
                        targetElementRef: T,
                        onNavigateToQuestHome: x,
                        onRender: M,
                        onRequestClose: P,
                    }),
            ],
        });
    };
