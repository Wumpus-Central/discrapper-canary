n.d(t, { A: () => S });
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
    g = n(489306),
    m = n(828162),
    p = n(249584),
    _ = n(49999),
    x = n(333354),
    f = n(985018),
    E = n(408392);
function C(e) {
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
    S = l.memo(function (e) {
        let { guildId: t, selected: s } = e,
            S = (0, g.Ay)(t),
            b = l.useCallback(() => {
                (0, h.Zm)(t),
                    (0, m.A)(t, d.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    S?.popout?.markAsDismissed(_.i.INDIRECT_ACTION);
            }, [t, S]),
            N = l.useRef(null),
            T = (0, o.red)(o.DXt),
            j = (0, r.bG)([u.A], () => u.A.hasLayers()),
            v = T || j,
            y = l.useCallback(() => {
                if (S?.popout == null || v) return null;
                switch (S?.popout?.type) {
                    case A.o.LEVEL_REACHED:
                        return (0, i.jsx)(p.HW, { guildId: t, channelRowRef: N, ...S.popout });
                    case A.o.PERKS_AVAILABLE:
                        return (0, i.jsx)(p.UB, { guildId: t, channelRowRef: N, ...S.popout });
                    case A.o.PERKS_PURCHASABLE:
                        return (0, i.jsx)(p.lw, { guildId: t, channelRowRef: N, ...S.popout });
                    case A.o.NEW_PERK_AVAILABLE:
                        return (0, i.jsx)(p.bo, { guildId: t, channelRowRef: N, ...S.popout });
                    case A.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case A.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, i.jsx)(p.jz, { guildId: t, channelRowRef: N, ...S.popout });
                    default:
                        return (0, i.jsx)("div", {});
                }
            }, [t, S?.popout, N, v]),
            [R, O] = l.useState(null);
        l.useEffect(() => {
            S?.popout == null && O(null);
        }, [S?.popout]);
        let L = l.useCallback((e) => {
            O(e);
        }, []);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.G, {
                    ref: N,
                    className: E.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, i.jsx)(o._Jp, { size: "md", className: e, color: "currentColor" }),
                    background:
                        S?.popout != null &&
                        (0, i.jsx)("div", {
                            className: E.Fi,
                            children: (0, i.jsx)(o.tvC, {
                                nextScene: null == R ? "animation" : "LOOP",
                                className: E.UU,
                                sceneSegments: I,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: L,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, i.jsx)("span", {
                        className: a()({ [E.A7]: S?.showUnread === !0 }),
                        children: f.intl.string(x.default.yv3DJJ),
                    }),
                    selected: s,
                    onClick: b,
                    showUnread: S?.showUnread === !0,
                    trailing: (0, i.jsx)(C, { indicator: S?.indicator }),
                }),
                y(),
            ],
        });
    });
