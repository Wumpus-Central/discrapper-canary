n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(563495),
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
    E = n(379848),
    I = n(954571),
    f = n(859703),
    C = n(796577),
    N = n(325087),
    T = n(398025),
    S = n(419818),
    x = n(652215),
    v = n(49999),
    b = n(985018),
    y = n(817259);
let L = Math.ceil(Math.sqrt(115200)),
    O = (L - 240) / 2,
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
                    t = (0, c.bG)([f.A], () => f.A.quests.size > 0),
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
            { shouldShowTakeoverContent: D, dismissTakeoverContent: w, takeoverConfig: M } = (0, C.j)(),
            U = r.useCallback(() => {
                S.A.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" }), D && w();
            }, [D, w]),
            [{ glowSpring: G }, k] = (0, _.zhh)(() => ({
                from: { glowSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 240, friction: 12 },
            })),
            [{ shineSpring: V }, B] = (0, _.zhh)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            H = r.useCallback(() => {
                B({ shineSpring: 1 }), k({ glowSpring: 1, delay: 200 });
            }, [B, k]),
            F = r.useCallback(() => {
                B({ shineSpring: 0, immediate: !0 }), k({ glowSpring: 0, delay: 0 });
            }, [B, k]),
            Y = r.useCallback(() => {
                B({ shineSpring: 1, delay: 500 }),
                    k({ glowSpring: 1, delay: 700 }),
                    I.default.track(x.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }, [B, k]),
            [W, q] = r.useState(-1),
            z = r.useCallback((e) => {
                q(e.contentRect.width);
            }, []),
            K = (0, p.w)(z, [], { fireOnMount: !0 }),
            $ = !D && P,
            Q = !D && R,
            X = D && M?.questHomeEntrypoint?.tooltipTitle != null,
            { inlineCssProperties: Z, shouldShowTakeoverGradient: J } = r.useMemo(() => {
                let e = { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${O}px` },
                    t = M?.questHomeEntrypoint?.linearGradientStart,
                    n = M?.questHomeEntrypoint?.linearGradientEnd,
                    i = M?.questHomeEntrypoint?.radialGradientStart,
                    r = M?.questHomeEntrypoint?.radialGradientEnd;
                D &&
                    (null != t &&
                        null != n &&
                        ((e["--custom-takeover-linear-gradient-start"] = t),
                        (e["--custom-takeover-linear-gradient-end"] = n)),
                    null != i &&
                        null != r &&
                        ((e["--custom-takeover-radial-gradient-start"] = i),
                        (e["--custom-takeover-radial-gradient-end"] = r)));
                let l = null != i && null != r,
                    a = null != t && null != n;
                return { inlineCssProperties: e, shouldShowTakeoverGradient: D && (l || a) };
            }, [D, M]),
            ee = (0, i.jsx)("div", {
                className: y.iE,
                onMouseEnter: H,
                onMouseLeave: F,
                onFocus: H,
                onBlur: F,
                ref: K,
                style: Z,
                children: (0, i.jsxs)(m.z9, {
                    className: a()({ [y.VU]: $ || J, [y.jR]: $, [y.pC]: D }),
                    icon: _.r2v,
                    listItemRef: l,
                    onClick: U,
                    route: x.BVt.QUEST_HOME_V2,
                    selected: t,
                    text: b.intl.string(b.t.JALI2K),
                    ...n,
                    children: [
                        D &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: y.qS,
                                        children: (0, i.jsx)(d.Exy, {
                                            type: { text: b.intl.string(b.t.y2b7CA) },
                                            variant: "expressive",
                                        }),
                                    }),
                                    M?.questHomeEntrypoint?.entrypointAssetImageUrl != null &&
                                        (0, i.jsx)("img", {
                                            src: M?.questHomeEntrypoint?.entrypointAssetImageUrl,
                                            className: y.VG,
                                            alt: "",
                                        }),
                                ],
                            }),
                        $ &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(s.animated.div, {
                                        className: y.q2,
                                        style: {
                                            transform: V.to(
                                                (e) =>
                                                    `translateX(calc(${e * W}px + ${e * L}px)) translateY(-50%) rotate(45deg)`,
                                            ),
                                        },
                                    }),
                                    (0, i.jsx)(s.animated.div, {
                                        className: y.ys,
                                        style: { opacity: (0, T.a)(G.to({ range: [0, 1], output: [0, 0.5] })) },
                                    }),
                                    (0, i.jsx)(_.LpS, {
                                        className: y.qS,
                                        text: b.intl.string(b.t.y2b7CA),
                                        color: _.LU0.colors.BACKGROUND_BRAND.css,
                                    }),
                                ],
                            }),
                    ],
                }),
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                X
                    ? (0, i.jsx)(h.un, {
                          title: M?.questHomeEntrypoint?.tooltipTitle,
                          body: M?.questHomeEntrypoint?.tooltipSubtitle ?? "",
                          asset:
                              M?.questHomeEntrypoint?.tooltipAssetImageUrl != null
                                  ? (0, i.jsx)("img", {
                                        src: M.questHomeEntrypoint.tooltipAssetImageUrl,
                                        alt: "",
                                        className: y.cl,
                                    })
                                  : void 0,
                          assetSize: 48,
                          position: "right",
                          align: "center",
                          asContainer: !0,
                          children: ee,
                      })
                    : ee,
                Q && (0, i.jsx)(N.A, { targetElementRef: l, onNavigateToQuestHome: U, onRender: Y, onRequestClose: j }),
            ],
        });
    };
