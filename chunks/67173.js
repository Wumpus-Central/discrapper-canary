a.d(l, { A: () => L });
var t = a(627968),
    s = a(64700),
    i = a(503698),
    n = a.n(i),
    c = a(419354),
    h = a(837381),
    r = a(508770),
    o = a(311907),
    d = a(554146),
    v = a(192308),
    g = a(459192),
    p = a(717421),
    m = a(577473),
    f = a(777666),
    w = a(827734),
    x = a(701363),
    u = a(770178),
    A = a(826673),
    I = a(932001),
    M = a(287809),
    Z = a(859703),
    _ = a(87549),
    E = a(18437),
    j = a(7832),
    C = a(325087),
    T = a(398025),
    N = a(652215),
    R = a(49999),
    V = a(985018),
    y = a(301958);
let H = Math.ceil(Math.sqrt(115200)),
    O = (H - 240) / 2,
    L = function (e) {
        let { selected: l } = e,
            a = (0, h.rm)("quests"),
            i = s.useRef(null),
            {
                shouldShowPopover: L,
                shouldShowGradientAndBadge: B,
                dismissOnboardingContent: S,
            } = (function () {
                let e = (0, v.useHasAnyModalOpen)(),
                    l = (0, o.bG)([Z.A], () => Z.A.quests.size > 0),
                    a = (0, o.bG)([M.default], () => M.default.getCurrentUser()),
                    [t, i] = (0, I.kn)(
                        !e && l && null != a ? [d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [],
                        R.m.PRIVATE_CHANNELS_LIST,
                        !0,
                    ),
                    n = s.useCallback(() => {
                        i(R.i.TAKE_ACTION);
                    }, [i]),
                    c = t === d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    h = (0, A.JZ)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
                return { shouldShowPopover: c, shouldShowGradientAndBadge: l && !h, dismissOnboardingContent: n };
            })(),
            { shouldShowQuestHomeHeroContent: F, dismissQuestHomeHeroContent: U, questHomeHero: P } = (0, j.I)(),
            b = s.useCallback(() => {
                _.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" }), F && U();
            }, [F, U]),
            [{ glowSpring: D }, k] = (0, p.z)(() => ({
                from: { glowSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 240, friction: 12 },
            })),
            [{ shineSpring: J }, G] = (0, p.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            W = (0, E.cR)({ questHomeHero: P, shouldShowQuestHomeHeroContent: F }),
            q = s.useCallback(() => {
                G({ shineSpring: 1 }), k({ glowSpring: 1, delay: 200 }), W.handleMouseEnter();
            }, [G, k, W]),
            z = s.useCallback(() => {
                G({ shineSpring: 0, immediate: !0 }), k({ glowSpring: 0, delay: 0 }), W.handleMouseLeave();
            }, [G, k, W]),
            K = s.useCallback(() => {
                G({ shineSpring: 1, delay: 500 }), k({ glowSpring: 1, delay: 700 }), W.handleOnboardingPopoutRender();
            }, [G, k, W]),
            [X, Q] = s.useState(-1),
            Y = s.useCallback((e) => {
                Q(e.contentRect.width);
            }, []),
            $ = (0, u.w)(Y, [], { fireOnMount: !0 }),
            ee = !F && B,
            el = !F && L,
            ea = F && P?.questHomeEntrypoint?.tooltipTitle != null,
            { inlineCssProperties: et, shouldShowQuestHomeHeroGradient: es } = s.useMemo(() => {
                let e = { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${O}px` },
                    l = P?.questHomeEntrypoint?.linearGradient?.start,
                    a = P?.questHomeEntrypoint?.linearGradient?.end,
                    t = P?.questHomeEntrypoint?.radialGradient?.start,
                    s = P?.questHomeEntrypoint?.radialGradient?.end;
                F &&
                    (null != l &&
                        null != a &&
                        ((e["--custom-quest-home-hero-linear-gradient-start"] = l),
                        (e["--custom-quest-home-hero-linear-gradient-end"] = a)),
                    null != t &&
                        null != s &&
                        ((e["--custom-quest-home-hero-radial-gradient-start"] = t),
                        (e["--custom-quest-home-hero-radial-gradient-end"] = s)));
                let i = null != t && null != s,
                    n = null != l && null != a;
                return { inlineCssProperties: e, shouldShowQuestHomeHeroGradient: F && (i || n) };
            }, [F, P]),
            ei = (0, t.jsx)("div", {
                className: y.iE,
                onMouseEnter: q,
                onMouseLeave: z,
                onFocus: q,
                onBlur: z,
                ref: $,
                style: et,
                children: (0, t.jsxs)(x.z9, {
                    showHoverGradient: !1,
                    className: n()({ [y.VU]: ee || es, [y.jR]: ee, [y.XO]: F }),
                    icon: m.r,
                    listItemRef: i,
                    onClick: b,
                    route: N.BVt.QUEST_HOME,
                    selected: l,
                    text: V.intl.string(V.t.JALI2K),
                    ...a,
                    children: [
                        F &&
                            (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)("div", {
                                        className: y.qS,
                                        children: (0, t.jsx)(r.E, {
                                            type: { text: V.intl.string(V.t.y2b7CA) },
                                            variant: "expressive",
                                        }),
                                    }),
                                    P?.questHomeEntrypoint?.image != null &&
                                        (0, t.jsx)("img", {
                                            src: P?.questHomeEntrypoint?.image,
                                            className: y.Nd,
                                            alt: "",
                                        }),
                                ],
                            }),
                        ee &&
                            (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(c.animated.div, {
                                        className: y.q2,
                                        style: {
                                            transform: J.to(
                                                (e) =>
                                                    `translateX(calc(${e * X}px + ${e * H}px)) translateY(-50%) rotate(45deg)`,
                                            ),
                                        },
                                    }),
                                    (0, t.jsx)(c.animated.div, {
                                        className: y.ys,
                                        style: { opacity: (0, T.a)(D.to({ range: [0, 1], output: [0, 0.5] })) },
                                    }),
                                    (0, t.jsx)(f.Lp, {
                                        className: y.qS,
                                        text: V.intl.string(V.t.y2b7CA),
                                        color: w.A.colors.BACKGROUND_BRAND.css,
                                    }),
                                ],
                            }),
                    ],
                }),
            });
        return (0, t.jsxs)(t.Fragment, {
            children: [
                ea
                    ? (0, t.jsx)(g.u, {
                          title: P?.questHomeEntrypoint?.tooltipTitle,
                          body: P?.questHomeEntrypoint?.tooltipSubtitle ?? "",
                          asset:
                              P?.questHomeEntrypoint?.tooltipImage != null
                                  ? (0, t.jsx)("img", {
                                        src: P.questHomeEntrypoint.tooltipImage,
                                        alt: "",
                                        className: y.ut,
                                    })
                                  : void 0,
                          assetSize: 48,
                          position: "right",
                          align: "center",
                          asContainer: !0,
                          children: ei,
                      })
                    : ei,
                el &&
                    (0, t.jsx)(C.A, { targetElementRef: i, onNavigateToQuestHome: b, onRender: K, onRequestClose: S }),
            ],
        });
    };
