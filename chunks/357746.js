n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(793574),
    u = n(652793),
    d = n(186111),
    f = n(942975),
    p = n(379229),
    h = n(489306),
    b = n(828162),
    g = n(249584),
    m = n(49999),
    A = n(333354),
    y = n(985018),
    O = n(408392);
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
function v(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case p.cD.WARNING:
            return (0, r.jsx)(o.EpV, {
                color: o.LU0.colors.STATUS_WARNING,
                size: "sm",
            });
        case p.cD.UNREAD:
            return (0, r.jsx)(o.hVq, {
                count: t.count,
                color: o.LU0.colors.BACKGROUND_MOD_STRONG.css,
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
    E = l.memo(function (e) {
        let { guildId: t, selected: i } = e,
            E = (0, h.Ay)(t),
            _ = l.useCallback(() => {
                var e;
                (0, f.Zm)(t),
                    (0, b.A)(t, c.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == E || null == (e = E.popout) || e.markAsDismissed(m.i.INDIRECT_ACTION);
            }, [t, E]),
            C = l.useRef(null),
            S = (0, o.red)(o.DXt),
            I = (0, s.bG)([d.A], () => d.A.hasLayers()),
            N = S || I,
            T = l.useCallback(() => {
                var e;
                if ((null == E ? void 0 : E.popout) == null || N) return null;
                switch (null == E || null == (e = E.popout) ? void 0 : e.type) {
                    case p.o.LEVEL_REACHED:
                        return (0, r.jsx)(
                            g.HW,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                E.popout,
                            ),
                        );
                    case p.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(
                            g.UB,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                E.popout,
                            ),
                        );
                    case p.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(
                            g.lw,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                E.popout,
                            ),
                        );
                    case p.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(
                            g.bo,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                E.popout,
                            ),
                        );
                    case p.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case p.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(
                            g.jz,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                E.popout,
                            ),
                        );
                    case p.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(
                            g.YX,
                            j(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                E.popout,
                            ),
                        );
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == E ? void 0 : E.popout, C, N]),
            [P, w] = l.useState(null);
        l.useEffect(() => {
            (null == E ? void 0 : E.popout) == null && w(null);
        }, [null == E ? void 0 : E.popout]);
        let R = l.useCallback((e) => {
            w(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.G, {
                    ref: C,
                    className: O.kL,
                    id: "skill-trees-".concat(t),
                    renderIcon: (e) =>
                        (0, r.jsx)(o._Jp, {
                            size: "md",
                            className: e,
                            color: "currentColor",
                        }),
                    background:
                        (null == E ? void 0 : E.popout) != null &&
                        (0, r.jsx)("div", {
                            className: O.Fi,
                            children: (0, r.jsx)(o.tvC, {
                                nextScene: null == P ? "animation" : "LOOP",
                                className: O.UU,
                                sceneSegments: x,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: R,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: a()({ [O.A7]: (null == E ? void 0 : E.showUnread) === !0 }),
                        children: y.intl.string(A.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: _,
                    showUnread: (null == E ? void 0 : E.showUnread) === !0,
                    trailing: (0, r.jsx)(v, { indicator: null == E ? void 0 : E.indicator }),
                }),
                T(),
            ],
        });
    });
