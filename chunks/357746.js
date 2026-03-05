"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(793574),
    d = n(652793),
    u = n(361158),
    h = n(186111),
    A = n(942975),
    m = n(379229),
    p = n(489306),
    g = n(828162),
    _ = n(249584),
    f = n(49999),
    x = n(136708),
    C = n(985018),
    E = n(14714);
function I(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case m.cD.WARNING:
            return (0, i.jsx)(o.EpV, { color: o.LU0.colors.STATUS_WARNING, size: "sm" });
        case m.cD.UNREAD:
            return (0, i.jsx)(o.hVq, { count: t.count, color: o.LU0.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let N = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    b = s.memo(function (e) {
        let { guildId: t, selected: l } = e,
            b = (0, p.Ay)(t),
            S = s.useCallback(() => {
                (0, A.Zm)(t),
                    (0, g.A)(t, c.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    b?.popout?.markAsDismissed(f.i.INDIRECT_ACTION);
            }, [t, b]),
            T = s.useRef(null),
            v = (0, o.red)(o.DXt),
            y = (0, a.bG)([h.A], () => h.A.hasLayers()),
            j = (0, u.xr)((e) => e.fullScreenLayers.length > 0),
            R = v || y || j,
            O = s.useCallback(() => {
                if (b?.popout == null || R) return null;
                switch (b?.popout?.type) {
                    case m.o.LEVEL_REACHED:
                        return (0, i.jsx)(_.HW, { guildId: t, channelRowRef: T, ...b.popout });
                    case m.o.PERKS_AVAILABLE:
                        return (0, i.jsx)(_.UB, { guildId: t, channelRowRef: T, ...b.popout });
                    case m.o.PERKS_PURCHASABLE:
                        return (0, i.jsx)(_.lw, { guildId: t, channelRowRef: T, ...b.popout });
                    case m.o.NEW_PERK_AVAILABLE:
                        return (0, i.jsx)(_.bo, { guildId: t, channelRowRef: T, ...b.popout });
                    case m.o.BOOST_TO_UNLOCK:
                        return (0, i.jsx)(_.Gw, { guildId: t, channelRowRef: T, ...b.popout });
                    case m.o.EXPIRING_PERK:
                        return (0, i.jsx)(_.Mr, { guildId: t, channelRowRef: T, ...b.popout });
                    case m.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case m.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, i.jsx)(_.jz, { guildId: t, channelRowRef: T, ...b.popout });
                    default:
                        return (0, i.jsx)("div", {});
                }
            }, [t, b?.popout, T, R]),
            [L, M] = s.useState(null);
        s.useEffect(() => {
            b?.popout == null && M(null);
        }, [b?.popout]);
        let D = s.useCallback((e) => {
            M(e);
        }, []);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.G, {
                    ref: T,
                    className: E.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, i.jsx)(o._Jp, { size: "md", className: e, color: "currentColor" }),
                    background:
                        b?.popout != null &&
                        (0, i.jsx)("div", {
                            className: E.Fi,
                            children: (0, i.jsx)(o.tvC, {
                                nextScene: null == L ? "animation" : "LOOP",
                                className: E.UU,
                                sceneSegments: N,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: D,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, i.jsx)("span", {
                        className: r()({ [E.A7]: b?.showUnread === !0 }),
                        children: C.intl.string(x.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: S,
                    showUnread: b?.showUnread === !0,
                    trailing: (0, i.jsx)(I, { indicator: b?.indicator }),
                }),
                O(),
            ],
        });
    });
