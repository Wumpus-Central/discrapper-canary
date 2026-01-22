n.d(t, { A: () => S }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(432022),
    o = n(837381),
    c = n(554146),
    u = n(192308),
    d = n(397927),
    p = n(701363),
    f = n(770178),
    h = n(826673),
    A = n(379848),
    g = n(954571),
    m = n(325087),
    b = n(419818),
    _ = n(652215),
    E = n(49999),
    O = n(985018),
    y = n(106417);
let I = Math.ceil(Math.sqrt(115200)),
    v = (I - 240) / 2,
    S = function (e) {
        var t, n;
        let { selected: l } = e,
            S = (0, o.rm)("quests"),
            C = i.useRef(null),
            {
                shouldShowPopover: N,
                shouldShowGradientAndBadge: T,
                dismissContent: j,
            } = (function () {
                let e = (0, u.useHasAnyModalOpen)(),
                    [t, n] = (0, A.kn)(e ? [] : [c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING], E.m.PRIVATE_CHANNELS_LIST, !0),
                    r = i.useCallback(() => {
                        n(E.i.TAKE_ACTION);
                    }, [n]);
                return {
                    shouldShowPopover: t === c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    shouldShowGradientAndBadge: !(0, h.JZ)(c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING),
                    dismissContent: r,
                };
            })(),
            x = i.useCallback(() => {
                b.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
            }, []),
            [{ glowSpring: P }, w] = (0, d.zhh)(() => ({
                from: { glowSpring: 0 },
                config: {
                    clamp: !0,
                    mass: 1,
                    tension: 240,
                    friction: 12,
                },
            })),
            [{ shineSpring: L }, R] = (0, d.zhh)(() => ({
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
                    g.default.track(_.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [R, w]),
            [U, G] = i.useState(-1),
            V = i.useCallback((e) => {
                G(e.contentRect.width);
            }, []),
            B = (0, f.w)(V, [], { fireOnMount: !0 });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: y.iE,
                    onMouseEnter: D,
                    onMouseLeave: M,
                    onFocus: D,
                    onBlur: M,
                    ref: B,
                    style: {
                        "--custom-shine-dimensions": "".concat(240, "px"),
                        "--custom-shine-rotated-dimensions-delta": "".concat(v, "px"),
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
                                className: a()({ [y.h6]: T }),
                                icon: d.r2v,
                                listItemRef: C,
                                onClick: x,
                                route: _.BVt.QUEST_HOME_V2,
                                selected: l,
                                text: O.intl.string(O.t.JALI2K),
                            },
                            S,
                        )),
                        (n = n =
                            {
                                children:
                                    T &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.animated.div, {
                                                className: y.q2,
                                                style: {
                                                    transform: L.to((e) =>
                                                        "translateX(calc("
                                                            .concat(e * U, "px + ")
                                                            .concat(e * I, "px)) translateY(-50%) rotate(45deg)"),
                                                    ),
                                                },
                                            }),
                                            (0, r.jsx)(s.animated.div, {
                                                className: y.ys,
                                                style: {
                                                    opacity: P.to({
                                                        range: [0, 1],
                                                        output: [0, 0.5],
                                                    }),
                                                },
                                            }),
                                            (0, r.jsx)(d.LpS, {
                                                className: y.qS,
                                                text: O.intl.string(O.t.y2b7CA),
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
                N &&
                    (0, r.jsx)(m.A, {
                        targetElementRef: C,
                        onNavigateToQuestHome: x,
                        onRender: k,
                        onRequestClose: j,
                    }),
            ],
        });
    };
