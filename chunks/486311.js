n.d(t, { Z: () => x }), n(388685);
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
    p = n(441536),
    g = n(933104),
    b = n(332538),
    m = n(921944),
    y = n(44542),
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
    x = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            x = (0, b.ZP)(t),
            E = i.useCallback(() => {
                var e;
                (0, f.jd)(t),
                    (0, p.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == x || null == (e = x.popout) || e.markAsDismissed(m.L.INDIRECT_ACTION);
            }, [t, x]),
            S = i.useRef(null),
            I = (0, s.s9z)(s.JQI),
            _ = (0, o.e7)([d.Z], () => d.Z.hasLayers()),
            P = I || _,
            N = i.useCallback(() => {
                var e;
                if ((null == x ? void 0 : x.popout) == null || P) return null;
                switch (null == x || null == (e = x.popout) ? void 0 : e.type) {
                    case h.J.LEVEL_REACHED:
                        return (0, r.jsx)(
                            g.jG,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: S,
                                },
                                x.popout,
                            ),
                        );
                    case h.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(
                            g.$h,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: S,
                                },
                                x.popout,
                            ),
                        );
                    case h.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(
                            g.yI,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: S,
                                },
                                x.popout,
                            ),
                        );
                    case h.J.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(
                            g.cO,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: S,
                                },
                                x.popout,
                            ),
                        );
                    case h.J.GAME_SERVER_HOSTING_AVAILABLE:
                    case h.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(
                            g.dJ,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: S,
                                },
                                x.popout,
                            ),
                        );
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == x ? void 0 : x.popout, S, P]),
            [Z, w] = i.useState(null);
        i.useEffect(() => {
            (null == x ? void 0 : x.popout) == null && w(null);
        }, [null == x ? void 0 : x.popout]);
        let T = i.useCallback((e) => {
            w(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.m, {
                    ref: S,
                    className: v.container,
                    id: "skill-trees-".concat(t),
                    renderIcon: (e) =>
                        (0, r.jsx)(s.Ucv, {
                            size: "md",
                            className: e,
                            color: "currentColor",
                        }),
                    background:
                        (null == x ? void 0 : x.popout) != null &&
                        (0, r.jsx)("div", {
                            className: v.lottieContainer,
                            children: (0, r.jsx)(s.kci, {
                                nextScene: null == Z ? "animation" : "LOOP",
                                className: v.lottie,
                                sceneSegments: C,
                                importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
                                onScenePlay: T,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: a()({ [v.textImportant]: (null == x ? void 0 : x.showUnread) === !0 }),
                        children: O.intl.string(y.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: E,
                    showUnread: (null == x ? void 0 : x.showUnread) === !0,
                    trailing: null == x ? void 0 : x.trailing,
                }),
                N(),
            ],
        });
    });
