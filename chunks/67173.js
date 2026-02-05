n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(92674),
    o = n(837381),
    d = n(311907),
    c = n(554146),
    u = n(192308),
    A = n(397927),
    h = n(701363),
    _ = n(770178),
    m = n(826673),
    p = n(379848),
    g = n(954571),
    E = n(859703),
    f = n(325087),
    I = n(398025),
    C = n(419818),
    N = n(652215),
    T = n(49999),
    S = n(985018),
    x = n(106417);
let v = Math.ceil(Math.sqrt(115200)),
    b = (v - 240) / 2,
    y = function (e) {
        let { selected: t } = e,
            n = (0, o.rm)("quests"),
            a = r.useRef(null),
            {
                shouldShowPopover: y,
                shouldShowGradientAndBadge: L,
                dismissContent: O,
            } = (function () {
                let e = (0, u.useHasAnyModalOpen)(),
                    t = (0, d.bG)([E.A], () => E.A.quests.size > 0),
                    [n, i] = (0, p.kn)(
                        !e && t ? [c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [],
                        T.m.PRIVATE_CHANNELS_LIST,
                        !0,
                    ),
                    a = r.useCallback(() => {
                        i(T.i.TAKE_ACTION);
                    }, [i]),
                    l = n === c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    s = (0, m.JZ)(c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
                return { shouldShowPopover: l, shouldShowGradientAndBadge: t && !s, dismissContent: a };
            })(),
            R = r.useCallback(() => {
                C.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
            }, []),
            [{ glowSpring: P }, j] = (0, A.zhh)(() => ({
                from: { glowSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 240, friction: 12 },
            })),
            [{ shineSpring: D }, w] = (0, A.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            M = r.useCallback(() => {
                w({ shineSpring: 1 }), j({ glowSpring: 1, delay: 200 });
            }, [w, j]),
            U = r.useCallback(() => {
                w({ shineSpring: 0, immediate: !0 }), j({ glowSpring: 0, delay: 0 });
            }, [w, j]),
            G = r.useCallback(() => {
                w({ shineSpring: 1, delay: 500 }),
                    j({ glowSpring: 1, delay: 700 }),
                    g.default.track(N.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [w, j]),
            [k, V] = r.useState(-1),
            B = r.useCallback((e) => {
                V(e.contentRect.width);
            }, []),
            H = (0, _.w)(B, [], { fireOnMount: !0 });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: x.iE,
                    onMouseEnter: M,
                    onMouseLeave: U,
                    onFocus: M,
                    onBlur: U,
                    ref: H,
                    style: {
                        "--custom-shine-dimensions": "240px",
                        "--custom-shine-rotated-dimensions-delta": `${b}px`,
                    },
                    children: (0, i.jsx)(h.z9, {
                        className: l()({ [x.h6]: L }),
                        icon: A.r2v,
                        listItemRef: a,
                        onClick: R,
                        route: N.BVt.QUEST_HOME_V2,
                        selected: t,
                        text: S.intl.string(S.t.JALI2K),
                        ...n,
                        children:
                            L &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(s.animated.div, {
                                        className: x.q2,
                                        style: {
                                            transform: D.to(
                                                (e) =>
                                                    `translateX(calc(${e * k}px + ${e * v}px)) translateY(-50%) rotate(45deg)`,
                                            ),
                                        },
                                    }),
                                    (0, i.jsx)(s.animated.div, {
                                        className: x.ys,
                                        style: { opacity: (0, I.a)(P.to({ range: [0, 1], output: [0, 0.5] })) },
                                    }),
                                    (0, i.jsx)(A.LpS, {
                                        className: x.qS,
                                        text: S.intl.string(S.t.y2b7CA),
                                        color: A.LU0.colors.BACKGROUND_BRAND.css,
                                    }),
                                ],
                            }),
                    }),
                }),
                y && (0, i.jsx)(f.A, { targetElementRef: a, onNavigateToQuestHome: R, onRender: G, onRequestClose: O }),
            ],
        });
    };
