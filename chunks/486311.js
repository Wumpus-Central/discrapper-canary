n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(434479),
    d = n(819640),
    f = n(713081),
    h = n(326660),
    p = n(441536),
    g = n(933104),
    m = n(332538),
    b = n(921944),
    _ = n(265397),
    y = n(388032),
    O = n(969649);
function v(e) {
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
}
let j = {
        animation: {
            BEG: 0,
            END: 75,
        },
        LOOP: {
            BEG: 76,
            END: 376,
        },
    },
    C = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            C = (0, m.ZP)(t),
            x = i.useCallback(() => {
                var e;
                (0, f.jd)(t),
                    (0, p.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == C || null == (e = C.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION);
            }, [t, C]),
            E = i.useRef(null),
            S = (0, s.s9z)(s.JQI),
            I = (0, a.e7)([d.Z], () => d.Z.hasLayers()),
            P = S || I,
            N = i.useCallback(() => {
                var e;
                if ((null == C ? void 0 : C.popout) == null || P) return null;
                switch (null == C || null == (e = C.popout) ? void 0 : e.type) {
                    case h.J.LEVEL_REACHED:
                        return (0, r.jsx)(
                            g.jG,
                            v(
                                {
                                    guildId: t,
                                    channelRowRef: E,
                                },
                                C.popout,
                            ),
                        );
                    case h.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(
                            g.$h,
                            v(
                                {
                                    guildId: t,
                                    channelRowRef: E,
                                },
                                C.popout,
                            ),
                        );
                    case h.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(
                            g.yI,
                            v(
                                {
                                    guildId: t,
                                    channelRowRef: E,
                                },
                                C.popout,
                            ),
                        );
                    case h.J.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(
                            g.cO,
                            v(
                                {
                                    guildId: t,
                                    channelRowRef: E,
                                },
                                C.popout,
                            ),
                        );
                    case h.J.GAME_SERVER_HOSTING_AVAILABLE:
                    case h.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(
                            g.dJ,
                            v(
                                {
                                    guildId: t,
                                    channelRowRef: E,
                                },
                                C.popout,
                            ),
                        );
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == C ? void 0 : C.popout, E, P]),
            [Z, w] = i.useState(null);
        i.useEffect(() => {
            (null == C ? void 0 : C.popout) == null && w(null);
        }, [null == C ? void 0 : C.popout]);
        let T = i.useCallback((e) => {
            w(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.m, {
                    ref: E,
                    className: O.container,
                    id: "skill-trees-".concat(t),
                    renderIcon: (e) =>
                        (0, r.jsx)(s.Ucv, {
                            size: "md",
                            className: e,
                            color: "currentColor",
                        }),
                    background:
                        (null == C ? void 0 : C.popout) != null &&
                        (0, r.jsx)("div", {
                            className: O.lottieContainer,
                            children: (0, r.jsx)(s.kci, {
                                nextScene: null == Z ? "animation" : "LOOP",
                                className: O.lottie,
                                sceneSegments: j,
                                importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
                                onScenePlay: T,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: o()({ [O.textImportant]: (null == C ? void 0 : C.showUnread) === !0 }),
                        children: y.intl.string(_.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: x,
                    showUnread: (null == C ? void 0 : C.showUnread) === !0,
                    trailing: null == C ? void 0 : C.trailing,
                }),
                N(),
            ],
        });
    });
