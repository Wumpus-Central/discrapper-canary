a.d(E, { A: () => c });
var t = a(582128),
    s = a(512750),
    _ = a(192308),
    u = a(468689),
    R = a(568065),
    r = a(652215);
function c(e, E) {
    let a = t.useCallback(
        (a) => {
            if ((a.stopPropagation(), E.type !== R.o9.LEVEL))
                switch (((0, _.closeModal)(R.Fq), E.skuId)) {
                    case s.SL:
                        u.default.open(e, r.BEX.TAG, r.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.aN:
                        u.default.open(e, r.BEX.ROLES, r.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.FB:
                        u.default.open(
                            e,
                            r.BEX.BOOST_PERKS,
                            r.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            r.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case s.d0:
                        u.default.open(e, r.BEX.GUILD_THEME, r.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.jF:
                    case s.OJ:
                    case s.Ht:
                    case s.tv:
                        ((0, _.closeAllModals)(), u.default.open(e, r.BEX.TAG, r.JJy.GUILD_POWERUPS_OVERVIEW_CARD));
                        return;
                    default:
                        return;
                }
        },
        [e, E],
    );
    return E.type === R.o9.PERK ? a : void 0;
}
