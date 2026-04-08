n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(793574),
    c = n(652793),
    u = n(361158),
    h = n(186111),
    A = n(942975),
    _ = n(379229),
    m = n(489306),
    p = n(828162),
    g = n(249584),
    f = n(49999),
    x = n(136708),
    E = n(985018),
    I = n(93290);
function C(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case _.cD.WARNING:
            return (0, i.jsx)(o.EpV, { color: o.LU0.colors.STATUS_WARNING, size: "sm" });
        case _.cD.UNREAD:
            return (0, i.jsx)(o.hVq, { count: t.count, color: o.LU0.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let N = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    T = l.memo(function (e) {
        let { guildId: t, selected: s } = e,
            T = (0, m.Ay)(t),
            S = l.useCallback(() => {
                (0, A.Zm)(t),
                    (0, p.A)(t, d.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    T?.popout?.markAsDismissed(f.i.INDIRECT_ACTION);
            }, [t, T]),
            b = l.useRef(null),
            v = (0, o.red)(o.DXt),
            y = (0, r.bG)([h.A], () => h.A.hasLayers()),
            j = (0, u.xr)((e) => e.fullScreenLayers.length > 0),
            R = v || y || j,
            O = l.useCallback(() => {
                if (T?.popout == null || R) return null;
                switch (T?.popout?.type) {
                    case _.o.LEVEL_REACHED:
                        return (0, i.jsx)(g.HW, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.PERKS_AVAILABLE:
                        return (0, i.jsx)(g.UB, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.PERKS_PURCHASABLE:
                        return (0, i.jsx)(g.lw, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.NEW_PERK_AVAILABLE:
                        return (0, i.jsx)(g.bo, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.BOOST_TO_UNLOCK:
                        return (0, i.jsx)(g.Gw, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.EXPIRING_PERK:
                        return (0, i.jsx)(g.Mr, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case _.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, i.jsx)(g.jz, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.GAME_SERVER_NEW_GAMES:
                        return (0, i.jsx)(g.YX, { guildId: t, channelRowRef: b, ...T.popout });
                    case _.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, i.jsx)(g.Ns, { guildId: t, channelRowRef: b, ...T.popout });
                    default:
                        return (0, i.jsx)("div", {});
                }
            }, [t, T?.popout, b, R]),
            [L, M] = l.useState(null);
        l.useEffect(() => {
            T?.popout == null && M(null);
        }, [T?.popout]);
        let D = l.useCallback((e) => {
            M(e);
        }, []);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.G, {
                    ref: b,
                    className: I.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, i.jsx)(o._Jp, { size: "md", className: e, color: "currentColor" }),
                    background:
                        T?.popout != null &&
                        (0, i.jsx)("div", {
                            className: I.Fi,
                            children: (0, i.jsx)(o.tvC, {
                                nextScene: null == L ? "animation" : "LOOP",
                                className: I.UU,
                                sceneSegments: N,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: D,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, i.jsx)("span", {
                        className: a()({ [I.A7]: T?.showUnread === !0 }),
                        children: E.intl.string(x.default.yv3DJJ),
                    }),
                    selected: s,
                    onClick: S,
                    showUnread: T?.showUnread === !0,
                    trailing: (0, i.jsx)(C, { indicator: T?.indicator }),
                }),
                O(),
            ],
        });
    });
