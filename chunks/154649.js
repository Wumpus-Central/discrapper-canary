i.d(l, { default: () => _ });
var a = i(477900),
    e = i(582128),
    n = i(793574),
    d = i(808885),
    s = i(976860),
    u = i(907878),
    o = i(475669),
    r = i(610010),
    S = i(144977),
    f = i(628049),
    g = i(652215),
    c = i(746080),
    p = i(351585),
    E = i(105292);
function _(t) {
    let { gameName: l, gameApplicationId: i, onClose: _, transitionState: b } = t,
        C = (0, r.EX)("game_server_modal"),
        L = e.useCallback(
            async (t) => {
                let l;
                if (
                    ((0, u.gU)({ guildId: t.id, gameApplicationId: i }),
                    await _(),
                    (0, s.pX)(g.BVt.CHANNEL(t.id, c.VV.GUILD_BOOSTS)),
                    null != i)
                ) {
                    let { catalog: t } = o.A.getGlobalCatalogState();
                    l = Object.values(t).find((t) => t.gameId === i);
                }
                (0, S.A)({
                    guildId: t.id,
                    analyticsLocation: n.A.GAME_SERVER_GUILD_SELECT_MODAL,
                    ...(null != l
                        ? { stepConfig: { ...f.ZN, initialStep: f.HS.SERVER_SETTINGS }, initialGameServerGame: l }
                        : {}),
                });
            },
            [_, i],
        );
    return (0, a.jsx)(d.A, {
        transitionState: b,
        onClose: _,
        title: E.intl.formatToPlainString(p.default.hPiVx3, { gameName: l }),
        subtitle: E.intl.formatToPlainString(p.default.fUFylB, { gameName: l }),
        listLabel: E.intl.string(p.default["4MInNs"]),
        listLabelTooltip: E.intl.string(p.default.OdTfpx),
        guilds: C,
        onSelectGuild: L,
    });
}
