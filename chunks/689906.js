s.d(E, { A: () => n });
var _ = s(582128),
    a = s(512750),
    t = s(192308),
    R = s(468689),
    r = s(568065),
    c = s(652215);
function n(e, E) {
    let s = _.useCallback(
        (s) => {
            if ((s.stopPropagation(), E.type !== r.o9.LEVEL))
                switch (((0, t.closeModal)(r.Fq), E.skuId)) {
                    case a.SL:
                        R.A.open(e, c.BEX.TAG, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.aN:
                        R.A.open(e, c.BEX.ROLES, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.FB:
                        R.A.open(
                            e,
                            c.BEX.BOOST_PERKS,
                            c.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            c.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case a.d0:
                        R.A.open(e, c.BEX.GUILD_THEME, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.jF:
                    case a.OJ:
                    case a.Ht:
                    case a.tv:
                        ((0, t.closeAllModals)(), R.A.open(e, c.BEX.TAG, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD));
                        return;
                    default:
                        return;
                }
        },
        [e, E],
    );
    return E.type === r.o9.PERK ? s : void 0;
}
