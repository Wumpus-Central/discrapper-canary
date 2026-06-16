n.d(t, { A: () => u });
var l = n(64700),
    i = n(512750),
    r = n(192308),
    a = n(468689),
    s = n(568065),
    o = n(652215);
function u(e, t) {
    let n = l.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== s.o9.LEVEL))
                switch (((0, r.closeModal)(s.Fq), t.skuId)) {
                    case i.SL:
                        a.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.aN:
                        a.A.open(e, o.BEX.ROLES, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.FB:
                        a.A.open(
                            e,
                            o.BEX.BOOST_PERKS,
                            o.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            o.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case i.d0:
                        a.A.open(e, o.BEX.GUILD_THEME, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.jF:
                    case i.OJ:
                    case i.Ht:
                    case i.tv:
                        (0, r.closeAllModals)(), a.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t],
    );
    return t.type === s.o9.PERK ? n : void 0;
}
