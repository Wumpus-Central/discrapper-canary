n.d(t, { A: () => R });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(497766),
    o = n(837381),
    d = n(158954),
    c = n(311907),
    u = n(554146),
    A = n(192308),
    h = n(435371),
    _ = n(397927),
    m = n(701363),
    g = n(770178),
    p = n(826673),
    E = n(932001),
    I = n(859703),
    f = n(87549),
    C = n(18437),
    T = n(7832),
    N = n(325087),
    S = n(398025),
    x = n(652215),
    v = n(49999),
    y = n(985018),
    b = n(817259);
let O = Math.ceil(Math.sqrt(115200)),
    L = (O - 240) / 2,
    R = function (e) {
        let { selected: t } = e,
            n = (0, o.rm)("quests"),
            l = a.useRef(null),
            {
                shouldShowPopover: R,
                shouldShowGradientAndBadge: P,
                dismissOnboardingContent: D,
            } = (function () {
                let e = (0, A.useHasAnyModalOpen)(),
                    t = (0, c.bG)([I.A], () => I.A.quests.size > 0),
                    [n, i] = (0, E.kn)(
                        !e && t ? [u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [],
                        v.m.PRIVATE_CHANNELS_LIST,
                        !0,
                    ),
                    l = a.useCallback(() => {
                        i(v.i.TAKE_ACTION);
                    }, [i]),
                    r = n === u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    s = (0, p.JZ)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
                return { shouldShowPopover: r, shouldShowGradientAndBadge: t && !s, dismissOnboardingContent: l };
            })(),
            { shouldShowQuestHomeHeroContent: M, dismissQuestHomeHeroContent: j, questHomeHeroConfig: w } = (0, T.I)(),
            U = a.useCallback(() => {
                f.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" }), M && j();
            }, [M, j]),
            [{ glowSpring: G }, k] = (0, _.zhh)(() => ({
                from: { glowSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 240, friction: 12 },
            })),
            [{ shineSpring: V }, B] = (0, _.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            H = (0, C.cR)({ questHomeHeroConfig: w, shouldShowQuestHomeHeroContent: M }),
            F = a.useCallback(() => {
                B({ shineSpring: 1 }), k({ glowSpring: 1, delay: 200 }), H.handleMouseEnter();
            }, [B, k, H]),
            Y = a.useCallback(() => {
                B({ shineSpring: 0, immediate: !0 }), k({ glowSpring: 0, delay: 0 }), H.handleMouseLeave();
            }, [B, k, H]),
            W = a.useCallback(() => {
                B({ shineSpring: 1, delay: 500 }), k({ glowSpring: 1, delay: 700 }), H.handleOnboardingPopoutRender();
            }, [B, k, H]),
            [K, q] = a.useState(-1),
            z = a.useCallback((e) => {
                q(e.contentRect.width);
            }, []),
            $ = (0, g.w)(z, [], { fireOnMount: !0 }),
            Q = !M && P,
            X = !M && R,
            Z = M && w?.questHomeEntrypoint?.tooltipTitle != null,
            { inlineCssProperties: J, shouldShowQuestHomeHeroGradient: ee } = a.useMemo(() => {
                let e = { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${L}px` },
                    t = w?.questHomeEntrypoint?.linearGradientStart,
                    n = w?.questHomeEntrypoint?.linearGradientEnd,
                    i = w?.questHomeEntrypoint?.radialGradientStart,
                    a = w?.questHomeEntrypoint?.radialGradientEnd;
                M &&
                    (null != t &&
                        null != n &&
                        ((e["--custom-quest-home-hero-linear-gradient-start"] = t),
                        (e["--custom-quest-home-hero-linear-gradient-end"] = n)),
                    null != i &&
                        null != a &&
                        ((e["--custom-quest-home-hero-radial-gradient-start"] = i),
                        (e["--custom-quest-home-hero-radial-gradient-end"] = a)));
                let l = null != i && null != a,
                    r = null != t && null != n;
                return { inlineCssProperties: e, shouldShowQuestHomeHeroGradient: M && (l || r) };
            }, [M, w]),
            et = (0, i.jsx)("div", {
                className: b.iE,
                onMouseEnter: F,
                onMouseLeave: Y,
                onFocus: F,
                onBlur: Y,
                ref: $,
                style: J,
                children: (0, i.jsxs)(m.z9, {
                    className: r()({ [b.VU]: Q || ee, [b.jR]: Q, [b.XO]: M }),
                    icon: _.r2v,
                    listItemRef: l,
                    onClick: U,
                    route: x.BVt.QUEST_HOME,
                    selected: t,
                    text: y.intl.string(y.t.JALI2K),
                    ...n,
                    children: [
                        M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: b.qS,
                                        children: (0, i.jsx)(d.Exy, {
                                            type: { text: y.intl.string(y.t.y2b7CA) },
                                            variant: "expressive",
                                        }),
                                    }),
                                    w?.questHomeEntrypoint?.entrypointAssetImageUrl != null &&
                                        (0, i.jsx)("img", {
                                            src: w?.questHomeEntrypoint?.entrypointAssetImageUrl,
                                            className: b.Nd,
                                            alt: "",
                                        }),
                                ],
                            }),
                        Q &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(s.animated.div, {
                                        className: b.q2,
                                        style: {
                                            transform: V.to(
                                                (e) =>
                                                    `translateX(calc(${e * K}px + ${e * O}px)) translateY(-50%) rotate(45deg)`,
                                            ),
                                        },
                                    }),
                                    (0, i.jsx)(s.animated.div, {
                                        className: b.ys,
                                        style: { opacity: (0, S.a)(G.to({ range: [0, 1], output: [0, 0.5] })) },
                                    }),
                                    (0, i.jsx)(_.LpS, {
                                        className: b.qS,
                                        text: y.intl.string(y.t.y2b7CA),
                                        color: _.LU0.colors.BACKGROUND_BRAND.css,
                                    }),
                                ],
                            }),
                    ],
                }),
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                Z
                    ? (0, i.jsx)(h.un, {
                          title: w?.questHomeEntrypoint?.tooltipTitle,
                          body: w?.questHomeEntrypoint?.tooltipSubtitle ?? "",
                          asset:
                              w?.questHomeEntrypoint?.tooltipAssetImageUrl != null
                                  ? (0, i.jsx)("img", {
                                        src: w.questHomeEntrypoint.tooltipAssetImageUrl,
                                        alt: "",
                                        className: b.ut,
                                    })
                                  : void 0,
                          assetSize: 48,
                          position: "right",
                          align: "center",
                          asContainer: !0,
                          children: et,
                      })
                    : et,
                X && (0, i.jsx)(N.A, { targetElementRef: l, onNavigateToQuestHome: U, onRender: W, onRequestClose: D }),
            ],
        });
    };
