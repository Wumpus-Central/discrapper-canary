n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(695366),
    d = n(827734),
    c = n(777666),
    u = n(192308),
    h = n(104510),
    A = n(544048),
    _ = n(793574),
    m = n(652793),
    g = n(361158),
    p = n(186111),
    f = n(942975),
    E = n(379229),
    x = n(489306),
    I = n(828162),
    C = n(249584),
    b = n(49999),
    N = n(853513),
    S = n(985018),
    v = n(738247);
function T(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case E.cD.WARNING:
            return (0, i.jsx)(o.E, { color: d.A.colors.STATUS_WARNING, size: "sm" });
        case E.cD.UNREAD:
            return (0, i.jsx)(c.hV, { count: t.count, color: d.A.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let y = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    R = l.memo(function (e) {
        let { guildId: t, selected: s } = e,
            o = (0, x.Ay)(t),
            d = l.useCallback(() => {
                (0, f.Zm)(t),
                    (0, I.A)(t, _.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    o?.popout?.markAsDismissed(b.i.INDIRECT_ACTION);
            }, [t, o]),
            c = l.useRef(null),
            R = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
            j = (0, r.bG)([p.A], () => p.A.hasLayers()),
            L = (0, g.xr)((e) => e.fullScreenLayers.length > 0),
            O = R || j || L,
            G = l.useCallback(() => {
                if (o?.popout == null || O) return null;
                switch (o?.popout?.type) {
                    case E.o.LEVEL_REACHED:
                        return (0, i.jsx)(C.HW, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.PERKS_AVAILABLE:
                        return (0, i.jsx)(C.UB, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.PERKS_PURCHASABLE:
                        return (0, i.jsx)(C.lw, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.NEW_PERK_AVAILABLE:
                        return (0, i.jsx)(C.bo, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.BOOST_TO_UNLOCK:
                        return (0, i.jsx)(C.Gw, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.EXPIRING_PERK:
                        return (0, i.jsx)(C.Mr, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case E.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, i.jsx)(C.jz, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.GAME_SERVER_NEW_GAMES:
                        return (0, i.jsx)(C.YX, { guildId: t, channelRowRef: c, ...o.popout });
                    case E.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, i.jsx)(C.Ns, { guildId: t, channelRowRef: c, ...o.popout });
                    default:
                        return (0, i.jsx)("div", {});
                }
            }, [t, o?.popout, c, O]),
            [D, M] = l.useState(null);
        l.useEffect(() => {
            o?.popout == null && M(null);
        }, [o?.popout]);
        let U = l.useCallback((e) => {
            M(e);
        }, []);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.G, {
                    ref: c,
                    className: v.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, i.jsx)(h._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        o?.popout != null &&
                        (0, i.jsx)("div", {
                            className: v.Fi,
                            children: (0, i.jsx)(A.t, {
                                nextScene: null == D ? "animation" : "LOOP",
                                className: v.UU,
                                sceneSegments: y,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: U,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, i.jsx)("span", {
                        className: a()({ [v.A7]: o?.showUnread === !0 }),
                        children: S.intl.string(N.default.yv3DJJ),
                    }),
                    selected: s,
                    onClick: d,
                    showUnread: o?.showUnread === !0,
                    trailing: (0, i.jsx)(T, { indicator: o?.indicator }),
                }),
                G(),
            ],
        });
    });
