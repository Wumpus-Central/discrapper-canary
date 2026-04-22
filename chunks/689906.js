l.d(e, { A: () => d });
var n = l(64700),
    a = l(512750),
    i = l(192308),
    r = l(997509),
    s = l(568065),
    o = l(652215);
function d(t, e) {
    let l = n.useCallback(
        (l) => {
            if ((l.stopPropagation(), e.type !== s.o9.LEVEL))
                switch (((0, i.closeModal)(s.Fq), e.skuId)) {
                    case a.SL:
                        r.A.open(t, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.aN:
                        r.A.open(t, o.BEX.ROLES, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.FB:
                        r.A.open(
                            t,
                            o.BEX.BOOST_PERKS,
                            o.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            o.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case a.jF:
                    case a.OJ:
                    case a.Ht:
                    case a.tv:
                        (0, i.closeAllModals)(), r.A.open(t, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [t, e],
    );
    return e.type === s.o9.PERK ? l : void 0;
}
