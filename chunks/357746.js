n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(793574),
    c = n(652793),
    u = n(186111),
    h = n(942975),
    A = n(379229),
    m = n(489306),
    p = n(828162),
    g = n(249584),
    _ = n(49999),
    f = n(136708),
    x = n(985018),
    C = n(14714);
function E(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case A.cD.WARNING:
            return (0, i.jsx)(o.EpV, { color: o.LU0.colors.STATUS_WARNING, size: "sm" });
        case A.cD.UNREAD:
            return (0, i.jsx)(o.hVq, { count: t.count, color: o.LU0.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let I = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    b = l.memo(function (e) {
        let { guildId: t, selected: s } = e,
            b = (0, m.Ay)(t),
            N = l.useCallback(() => {
                (0, h.Zm)(t),
                    (0, p.A)(t, d.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    b?.popout?.markAsDismissed(_.i.INDIRECT_ACTION);
            }, [t, b]),
            S = l.useRef(null),
            T = (0, o.red)(o.DXt),
            v = (0, r.bG)([u.A], () => u.A.hasLayers()),
            y = T || v,
            j = l.useCallback(() => {
                if (b?.popout == null || y) return null;
                switch (b?.popout?.type) {
                    case A.o.LEVEL_REACHED:
                        return (0, i.jsx)(g.HW, { guildId: t, channelRowRef: S, ...b.popout });
                    case A.o.PERKS_AVAILABLE:
                        return (0, i.jsx)(g.UB, { guildId: t, channelRowRef: S, ...b.popout });
                    case A.o.PERKS_PURCHASABLE:
                        return (0, i.jsx)(g.lw, { guildId: t, channelRowRef: S, ...b.popout });
                    case A.o.NEW_PERK_AVAILABLE:
                        return (0, i.jsx)(g.bo, { guildId: t, channelRowRef: S, ...b.popout });
                    case A.o.BOOST_TO_UNLOCK:
                        return (0, i.jsx)(g.Gw, { guildId: t, channelRowRef: S, ...b.popout });
                    case A.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case A.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, i.jsx)(g.jz, { guildId: t, channelRowRef: S, ...b.popout });
                    default:
                        return (0, i.jsx)("div", {});
                }
            }, [t, b?.popout, S, y]),
            [R, O] = l.useState(null);
        l.useEffect(() => {
            b?.popout == null && O(null);
        }, [b?.popout]);
        let L = l.useCallback((e) => {
            O(e);
        }, []);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.G, {
                    ref: S,
                    className: C.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, i.jsx)(o._Jp, { size: "md", className: e, color: "currentColor" }),
                    background:
                        b?.popout != null &&
                        (0, i.jsx)("div", {
                            className: C.Fi,
                            children: (0, i.jsx)(o.tvC, {
                                nextScene: null == R ? "animation" : "LOOP",
                                className: C.UU,
                                sceneSegments: I,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: L,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, i.jsx)("span", {
                        className: a()({ [C.A7]: b?.showUnread === !0 }),
                        children: x.intl.string(f.default.yv3DJJ),
                    }),
                    selected: s,
                    onClick: N,
                    showUnread: b?.showUnread === !0,
                    trailing: (0, i.jsx)(E, { indicator: b?.indicator }),
                }),
                j(),
            ],
        });
    });
