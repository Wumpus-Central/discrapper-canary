n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(475539),
    o = n(837381),
    d = n(158954),
    c = n(311907),
    u = n(554146),
    A = n(192308),
    h = n(435371),
    _ = n(397927),
    m = n(701363),
    p = n(770178),
    g = n(826673),
    E = n(932001),
    I = n(859703),
    f = n(18437),
    C = n(7832),
    T = n(325087),
    N = n(398025),
    S = n(419818),
    x = n(652215),
    v = n(49999),
    y = n(985018),
    b = n(106417);
let O = Math.ceil(Math.sqrt(115200)),
    L = (O - 240) / 2,
    R = function (e) {
        let { selected: t } = e,
            n = (0, o.rm)("quests"),
            l = r.useRef(null),
            {
                shouldShowPopover: R,
                shouldShowGradientAndBadge: P,
                dismissOnboardingContent: j,
            } = (function () {
                let e = (0, A.useHasAnyModalOpen)(),
                    t = (0, c.bG)([I.A], () => I.A.quests.size > 0),
                    [n, i] = (0, E.kn)(
                        !e && t ? [u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [],
                        v.m.PRIVATE_CHANNELS_LIST,
                        !0,
                    ),
                    l = r.useCallback(() => {
                        i(v.i.TAKE_ACTION);
                    }, [i]),
                    a = n === u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    s = (0, g.JZ)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
                return { shouldShowPopover: a, shouldShowGradientAndBadge: t && !s, dismissOnboardingContent: l };
            })(),
            { shouldShowQuestHomeHeroContent: D, dismissQuestHomeHeroContent: M, questHomeHeroConfig: w } = (0, C.I)(),
            U = r.useCallback(() => {
                S.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" }), D && M();
            }, [D, M]),
            [{ glowSpring: G }, k] = (0, _.zhh)(() => ({
                from: { glowSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 240, friction: 12 },
            })),
            [{ shineSpring: V }, B] = (0, _.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            H = (0, f.cR)({ questHomeHeroConfig: w, shouldShowQuestHomeHeroContent: D }),
            F = r.useCallback(() => {
                B({ shineSpring: 1 }), k({ glowSpring: 1, delay: 200 }), H.handleMouseEnter();
            }, [B, k, H]),
            Y = r.useCallback(() => {
                B({ shineSpring: 0, immediate: !0 }), k({ glowSpring: 0, delay: 0 }), H.handleMouseLeave();
            }, [B, k, H]),
            q = r.useCallback(() => {
                B({ shineSpring: 1, delay: 500 }), k({ glowSpring: 1, delay: 700 }), H.handleOnboardingPopoutRender();
            }, [B, k, H]),
            [W, z] = r.useState(-1),
            K = r.useCallback((e) => {
                z(e.contentRect.width);
            }, []),
            $ = (0, p.w)(K, [], { fireOnMount: !0 }),
            Q = !D && P,
            X = !D && R,
            Z = D && w?.questHomeEntrypoint?.tooltipTitle != null,
            { inlineCssProperties: J, shouldShowQuestHomeHeroGradient: ee } = r.useMemo(() => {
                let e = { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${L}px` },
                    t = w?.questHomeEntrypoint?.linearGradientStart,
                    n = w?.questHomeEntrypoint?.linearGradientEnd,
                    i = w?.questHomeEntrypoint?.radialGradientStart,
                    r = w?.questHomeEntrypoint?.radialGradientEnd;
                D &&
                    (null != t &&
                        null != n &&
                        ((e["--custom-quest-home-hero-linear-gradient-start"] = t),
                        (e["--custom-quest-home-hero-linear-gradient-end"] = n)),
                    null != i &&
                        null != r &&
                        ((e["--custom-quest-home-hero-radial-gradient-start"] = i),
                        (e["--custom-quest-home-hero-radial-gradient-end"] = r)));
                let l = null != i && null != r,
                    a = null != t && null != n;
                return { inlineCssProperties: e, shouldShowQuestHomeHeroGradient: D && (l || a) };
            }, [D, w]),
            et = (0, i.jsx)("div", {
                className: b.iE,
                onMouseEnter: F,
                onMouseLeave: Y,
                onFocus: F,
                onBlur: Y,
                ref: $,
                style: J,
                children: (0, i.jsxs)(m.z9, {
                    className: a()({ [b.VU]: Q || ee, [b.jR]: Q, [b.XO]: D }),
                    icon: _.r2v,
                    listItemRef: l,
                    onClick: U,
                    route: x.BVt.QUEST_HOME,
                    selected: t,
                    text: y.intl.string(y.t.JALI2K),
                    ...n,
                    children: [
                        D &&
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
                                                    `translateX(calc(${e * W}px + ${e * O}px)) translateY(-50%) rotate(45deg)`,
                                            ),
                                        },
                                    }),
                                    (0, i.jsx)(s.animated.div, {
                                        className: b.ys,
                                        style: { opacity: (0, N.a)(G.to({ range: [0, 1], output: [0, 0.5] })) },
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
                X && (0, i.jsx)(T.A, { targetElementRef: l, onNavigateToQuestHome: U, onRender: q, onRequestClose: j }),
            ],
        });
    };
