n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(793574),
    u = n(652793),
    d = n(186111),
    p = n(942975),
    h = n(379229),
    f = n(489306),
    g = n(828162),
    m = n(249584),
    b = n(49999),
    A = n(333354),
    y = n(985018),
    _ = n(408392);

function O(e) {
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

function j(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case h.cD.WARNING:
            return (0, r.jsx)(o.EpV, {
                color: o.LU0.colors.STATUS_WARNING,
                size: "sm",
            });
        case h.cD.UNREAD:
            return (0, r.jsx)(o.hVq, {
                count: t.count,
                color: o.LU0.colors.BACKGROUND_MOD_STRONG.css,
            });
        default:
            return null;
    }
}
let v = {
        animation: {
            BEG: 0,
            END: 75,
        },
        LOOP: {
            BEG: 76,
            END: 376,
        },
    },
    x = l.memo(function (e) {
        let { guildId: t, selected: i } = e,
            x = (0, f.Ay)(t),
            E = l.useCallback(() => {
                var e;
                (0, p.Zm)(t),
                    (0, g.A)(t, c.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == x || null == (e = x.popout) || e.markAsDismissed(b.i.INDIRECT_ACTION);
            }, [t, x]),
            C = l.useRef(null),
            S = (0, o.red)(o.DXt),
            I = (0, a.bG)([d.A], () => d.A.hasLayers()),
            N = S || I,
            T = l.useCallback(() => {
                var e;
                if ((null == x ? void 0 : x.popout) == null || N) return null;
                switch (null == x || null == (e = x.popout) ? void 0 : e.type) {
                    case h.o.LEVEL_REACHED:
                        return (0, r.jsx)(
                            m.HW,
                            O(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                x.popout,
                            ),
                        );
                    case h.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(
                            m.UB,
                            O(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                x.popout,
                            ),
                        );
                    case h.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(
                            m.lw,
                            O(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                x.popout,
                            ),
                        );
                    case h.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(
                            m.bo,
                            O(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                x.popout,
                            ),
                        );
                    case h.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case h.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(
                            m.jz,
                            O(
                                {
                                    guildId: t,
                                    channelRowRef: C,
                                },
                                x.popout,
                            ),
                        );
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == x ? void 0 : x.popout, C, N]),
            [P, w] = l.useState(null);
        l.useEffect(() => {
            (null == x ? void 0 : x.popout) == null && w(null);
        }, [null == x ? void 0 : x.popout]);
        let R = l.useCallback((e) => {
            w(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.G, {
                    ref: C,
                    className: _.kL,
                    id: "skill-trees-".concat(t),
                    renderIcon: (e) =>
                        (0, r.jsx)(o._Jp, {
                            size: "md",
                            className: e,
                            color: "currentColor",
                        }),
                    background:
                        (null == x ? void 0 : x.popout) != null &&
                        (0, r.jsx)("div", {
                            className: _.Fi,
                            children: (0, r.jsx)(o.tvC, {
                                nextScene: null == P ? "animation" : "LOOP",
                                className: _.UU,
                                sceneSegments: v,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: R,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: s()({
                            [_.A7]: (null == x ? void 0 : x.showUnread) === !0,
                        }),
                        children: y.intl.string(A.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: E,
                    showUnread: (null == x ? void 0 : x.showUnread) === !0,
                    trailing: (0, r.jsx)(j, {
                        indicator: null == x ? void 0 : x.indicator,
                    }),
                }),
                T(),
            ],
        });
    });
