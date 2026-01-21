n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(434479),
    d = n(819640),
    p = n(713081),
    f = n(326660),
    h = n(730164),
    g = n(441536),
    m = n(933104),
    b = n(921944),
    y = n(556970),
    v = n(388032),
    O = n(243171);
function j(e) {
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
function x(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case f.Ru.WARNING:
            return (0, r.jsx)(s.Mgn, {
                color: s.TVs.colors.STATUS_WARNING,
                size: "sm",
            });
        case f.Ru.UNREAD:
            return (0, r.jsx)(s.mAB, {
                count: t.count,
                color: s.TVs.colors.BACKGROUND_MOD_STRONG.css,
            });
        default:
            return null;
    }
}
let C = {
        animation: {
            BEG: 0,
            END: 75,
        },
        LOOP: {
            BEG: 76,
            END: 376,
        },
    },
    E = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            E = (0, h.ZP)(t),
            S = i.useCallback(() => {
                var e;
                (0, p.jd)(t),
                    (0, g.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == E || null == (e = E.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION);
            }, [t, E]),
            _ = i.useRef(null),
            I = (0, s.s9z)(s.JQI),
            P = (0, o.e7)([d.Z], () => d.Z.hasLayers()),
            Z = I || P,
            N = i.useCallback(() => {
                var e;
                if ((null == E ? void 0 : E.popout) == null || Z) return null;
                switch (null == E || null == (e = E.popout) ? void 0 : e.type) {
                    case f.Jk.LEVEL_REACHED:
                        return (0, r.jsx)(
                            m.jG,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: _,
                                },
                                E.popout,
                            ),
                        );
                    case f.Jk.PERKS_AVAILABLE:
                        return (0, r.jsx)(
                            m.$h,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: _,
                                },
                                E.popout,
                            ),
                        );
                    case f.Jk.PERKS_PURCHASABLE:
                        return (0, r.jsx)(
                            m.yI,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: _,
                                },
                                E.popout,
                            ),
                        );
                    case f.Jk.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(
                            m.cO,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: _,
                                },
                                E.popout,
                            ),
                        );
                    case f.Jk.GAME_SERVER_HOSTING_AVAILABLE:
                    case f.Jk.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(
                            m.dJ,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: _,
                                },
                                E.popout,
                            ),
                        );
                    case f.Jk.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(
                            m.f7,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: _,
                                },
                                E.popout,
                            ),
                        );
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == E ? void 0 : E.popout, _, Z]),
            [T, A] = i.useState(null);
        i.useEffect(() => {
            (null == E ? void 0 : E.popout) == null && A(null);
        }, [null == E ? void 0 : E.popout]);
        let w = i.useCallback((e) => {
            A(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.m, {
                    ref: _,
                    className: O.container,
                    id: "skill-trees-".concat(t),
                    renderIcon: (e) =>
                        (0, r.jsx)(s.Ucv, {
                            size: "md",
                            className: e,
                            color: "currentColor",
                        }),
                    background:
                        (null == E ? void 0 : E.popout) != null &&
                        (0, r.jsx)("div", {
                            className: O.lottieContainer,
                            children: (0, r.jsx)(s.kci, {
                                nextScene: null == T ? "animation" : "LOOP",
                                className: O.lottie,
                                sceneSegments: C,
                                importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
                                onScenePlay: w,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: a()({ [O.textImportant]: (null == E ? void 0 : E.showUnread) === !0 }),
                        children: v.intl.string(y.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: S,
                    showUnread: (null == E ? void 0 : E.showUnread) === !0,
                    trailing: (0, r.jsx)(x, { indicator: null == E ? void 0 : E.indicator }),
                }),
                N(),
            ],
        });
    });
