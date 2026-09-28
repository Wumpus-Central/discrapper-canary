r.d(e, { A: () => d });
var n = r(582128),
    s = r(512750),
    a = r(192308),
    i = r(468689),
    l = r(568065),
    u = r(652215);
function d(t, e) {
    let r = n.useCallback(
        (r) => {
            if ((r.stopPropagation(), e.type !== l.o9.LEVEL))
                switch (((0, a.closeModal)(l.Fq), e.skuId)) {
                    case s.SL:
                        i.default.open(t, u.BEX.TAG, u.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.aN:
                        i.default.open(t, u.BEX.ROLES, u.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.FB:
                        i.default.open(
                            t,
                            u.BEX.BOOST_PERKS,
                            u.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            u.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case s.d0:
                        i.default.open(t, u.BEX.GUILD_THEME, u.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.jF:
                    case s.OJ:
                    case s.Ht:
                    case s.tv:
                        ((0, a.closeAllModals)(), i.default.open(t, u.BEX.TAG, u.JJy.GUILD_POWERUPS_OVERVIEW_CARD));
                        return;
                    default:
                        return;
                }
        },
        [t, e],
    );
    return e.type === l.o9.PERK ? r : void 0;
}
