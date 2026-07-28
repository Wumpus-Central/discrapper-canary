r.d(e, { A: () => u });
var n = r(582128),
    s = r(512750),
    i = r(192308),
    a = r(468689),
    l = r(568065),
    c = r(652215);
function u(t, e) {
    let r = n.useCallback(
        (r) => {
            if ((r.stopPropagation(), e.type !== l.o9.LEVEL))
                switch (((0, i.closeModal)(l.Fq), e.skuId)) {
                    case s.SL:
                        a.A.open(t, c.BEX.TAG, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.aN:
                        a.A.open(t, c.BEX.ROLES, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.FB:
                        a.A.open(
                            t,
                            c.BEX.BOOST_PERKS,
                            c.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            c.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case s.d0:
                        a.A.open(t, c.BEX.GUILD_THEME, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.jF:
                    case s.OJ:
                    case s.Ht:
                    case s.tv:
                        (0, i.closeAllModals)(), a.A.open(t, c.BEX.TAG, c.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [t, e],
    );
    return e.type === l.o9.PERK ? r : void 0;
}
