n.d(t, { A: () => P });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(687498),
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
    I = n(287809),
    f = n(859703),
    C = n(87549),
    T = n(18437),
    N = n(7832),
    S = n(325087),
    x = n(398025),
    v = n(652215),
    b = n(49999),
    y = n(985018),
    O = n(449014);
let L = Math.ceil(Math.sqrt(115200)),
    R = (L - 240) / 2,
    P = function (e) {
        let { selected: t } = e,
            n = (0, o.rm)("quests"),
            l = a.useRef(null),
            {
                shouldShowPopover: P,
                shouldShowGradientAndBadge: D,
                dismissOnboardingContent: M,
            } = (function () {
                let e = (0, A.useHasAnyModalOpen)(),
                    t = (0, c.bG)([f.A], () => f.A.quests.size > 0),
                    n = (0, c.bG)([I.default], () => I.default.getCurrentUser()),
                    [i, l] = (0, E.kn)(
                        !e && t && null != n ? [u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [],
                        b.m.PRIVATE_CHANNELS_LIST,
                        !0,
                    ),
                    r = a.useCallback(() => {
                        l(b.i.TAKE_ACTION);
                    }, [l]),
                    s = i === u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
                    o = (0, g.JZ)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
                return { shouldShowPopover: s, shouldShowGradientAndBadge: t && !o, dismissOnboardingContent: r };
            })(),
            { shouldShowQuestHomeHeroContent: j, dismissQuestHomeHeroContent: w, questHomeHeroConfig: U } = (0, N.I)(),
            G = a.useCallback(() => {
                C.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" }), j && w();
            }, [j, w]),
            [{ glowSpring: k }, V] = (0, _.zhh)(() => ({
                from: { glowSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 240, friction: 12 },
            })),
            [{ shineSpring: B }, H] = (0, _.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            F = (0, T.cR)({ questHomeHeroConfig: U, shouldShowQuestHomeHeroContent: j }),
            Y = a.useCallback(() => {
                H({ shineSpring: 1 }), V({ glowSpring: 1, delay: 200 }), F.handleMouseEnter();
            }, [H, V, F]),
            W = a.useCallback(() => {
                H({ shineSpring: 0, immediate: !0 }), V({ glowSpring: 0, delay: 0 }), F.handleMouseLeave();
            }, [H, V, F]),
            K = a.useCallback(() => {
                H({ shineSpring: 1, delay: 500 }), V({ glowSpring: 1, delay: 700 }), F.handleOnboardingPopoutRender();
            }, [H, V, F]),
            [q, z] = a.useState(-1),
            $ = a.useCallback((e) => {
                z(e.contentRect.width);
            }, []),
            Q = (0, p.w)($, [], { fireOnMount: !0 }),
            X = !j && D,
            Z = !j && P,
            J = j && U?.questHomeEntrypoint?.tooltipTitle != null,
            { inlineCssProperties: ee, shouldShowQuestHomeHeroGradient: et } = a.useMemo(() => {
                let e = { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${R}px` },
                    t = U?.questHomeEntrypoint?.linearGradientStart,
                    n = U?.questHomeEntrypoint?.linearGradientEnd,
                    i = U?.questHomeEntrypoint?.radialGradientStart,
                    a = U?.questHomeEntrypoint?.radialGradientEnd;
                j &&
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
                return { inlineCssProperties: e, shouldShowQuestHomeHeroGradient: j && (l || r) };
            }, [j, U]),
            en = (0, i.jsx)("div", {
                className: O.iE,
                onMouseEnter: Y,
                onMouseLeave: W,
                onFocus: Y,
                onBlur: W,
                ref: Q,
                style: ee,
                children: (0, i.jsxs)(m.z9, {
                    showHoverGradient: !1,
                    className: r()({ [O.VU]: X || et, [O.jR]: X, [O.XO]: j }),
                    icon: _.r2v,
                    listItemRef: l,
                    onClick: G,
                    route: v.BVt.QUEST_HOME,
                    selected: t,
                    text: y.intl.string(y.t.JALI2K),
                    ...n,
                    children: [
                        j &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: O.qS,
                                        children: (0, i.jsx)(d.Exy, {
                                            type: { text: y.intl.string(y.t.y2b7CA) },
                                            variant: "expressive",
                                        }),
                                    }),
                                    U?.questHomeEntrypoint?.entrypointAssetImageUrl != null &&
                                        (0, i.jsx)("img", {
                                            src: U?.questHomeEntrypoint?.entrypointAssetImageUrl,
                                            className: O.Nd,
                                            alt: "",
                                        }),
                                ],
                            }),
                        X &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(s.animated.div, {
                                        className: O.q2,
                                        style: {
                                            transform: B.to(
                                                (e) =>
                                                    `translateX(calc(${e * q}px + ${e * L}px)) translateY(-50%) rotate(45deg)`,
                                            ),
                                        },
                                    }),
                                    (0, i.jsx)(s.animated.div, {
                                        className: O.ys,
                                        style: { opacity: (0, x.a)(k.to({ range: [0, 1], output: [0, 0.5] })) },
                                    }),
                                    (0, i.jsx)(_.LpS, {
                                        className: O.qS,
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
                J
                    ? (0, i.jsx)(h.un, {
                          title: U?.questHomeEntrypoint?.tooltipTitle,
                          body: U?.questHomeEntrypoint?.tooltipSubtitle ?? "",
                          asset:
                              U?.questHomeEntrypoint?.tooltipAssetImageUrl != null
                                  ? (0, i.jsx)("img", {
                                        src: U.questHomeEntrypoint.tooltipAssetImageUrl,
                                        alt: "",
                                        className: O.ut,
                                    })
                                  : void 0,
                          assetSize: 48,
                          position: "right",
                          align: "center",
                          asContainer: !0,
                          children: en,
                      })
                    : en,
                Z && (0, i.jsx)(S.A, { targetElementRef: l, onNavigateToQuestHome: G, onRender: K, onRequestClose: M }),
            ],
        });
    };
