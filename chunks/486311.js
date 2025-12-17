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
    f = n(713081),
    h = n(326660),
    p = n(730164),
    g = n(441536),
    b = n(933104),
    m = n(921944),
    y = n(556970),
    O = n(388032),
    v = n(243171);
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
function C(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case h.Ru.WARNING:
            return (0, r.jsx)(s.Mgn, {
                color: s.TVs.colors.STATUS_WARNING,
                size: "sm",
            });
        case h.Ru.UNREAD:
            return (0, r.jsx)(s.mAB, {
                count: t.count,
                color: s.TVs.colors.BACKGROUND_ACCENT.css,
            });
        default:
            return null;
    }
}
let x = {
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
            E = (0, p.ZP)(t),
            S = i.useCallback(() => {
                var e;
                (0, f.jd)(t),
                    (0, g.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == E || null == (e = E.popout) || e.markAsDismissed(m.L.INDIRECT_ACTION);
            }, [t, E]),
            I = i.useRef(null),
            _ = (0, s.s9z)(s.JQI),
            P = (0, o.e7)([d.Z], () => d.Z.hasLayers()),
            N = _ || P,
            Z = i.useCallback(() => {
                var e;
                if ((null == E ? void 0 : E.popout) == null || N) return null;
                switch (null == E || null == (e = E.popout) ? void 0 : e.type) {
                    case h.Jk.LEVEL_REACHED:
                        return (0, r.jsx)(
                            b.jG,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: I,
                                },
                                E.popout,
                            ),
                        );
                    case h.Jk.PERKS_AVAILABLE:
                        return (0, r.jsx)(
                            b.$h,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: I,
                                },
                                E.popout,
                            ),
                        );
                    case h.Jk.PERKS_PURCHASABLE:
                        return (0, r.jsx)(
                            b.yI,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: I,
                                },
                                E.popout,
                            ),
                        );
                    case h.Jk.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(
                            b.cO,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: I,
                                },
                                E.popout,
                            ),
                        );
                    case h.Jk.GAME_SERVER_HOSTING_AVAILABLE:
                    case h.Jk.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(
                            b.dJ,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: I,
                                },
                                E.popout,
                            ),
                        );
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == E ? void 0 : E.popout, I, N]),
            [w, T] = i.useState(null);
        i.useEffect(() => {
            (null == E ? void 0 : E.popout) == null && T(null);
        }, [null == E ? void 0 : E.popout]);
        let A = i.useCallback((e) => {
            T(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.m, {
                    ref: I,
                    className: v.container,
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
                            className: v.lottieContainer,
                            children: (0, r.jsx)(s.kci, {
                                nextScene: null == w ? "animation" : "LOOP",
                                className: v.lottie,
                                sceneSegments: x,
                                importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
                                onScenePlay: A,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: a()({ [v.textImportant]: (null == E ? void 0 : E.showUnread) === !0 }),
                        children: O.intl.string(y.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: S,
                    showUnread: (null == E ? void 0 : E.showUnread) === !0,
                    trailing: (0, r.jsx)(C, { indicator: null == E ? void 0 : E.indicator }),
                }),
                Z(),
            ],
        });
    });
