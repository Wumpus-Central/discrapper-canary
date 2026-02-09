n.d(t, { A: () => d });
var i = n(64700),
    l = n(512750),
    s = n(397927),
    a = n(997509),
    r = n(568065),
    o = n(652215);
function d(e, t) {
    let n = i.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== r.o9.LEVEL))
                switch (((0, s.OoC)(r.Fq), t.skuId)) {
                    case l.SL:
                        a.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case l.aN:
                        a.A.open(e, o.BEX.ROLES, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case l.FB:
                        a.A.open(
                            e,
                            o.BEX.BOOST_PERKS,
                            o.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            o.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case l.jF:
                    case l.OJ:
                    case l.Ht:
                    case l.tv:
                        (0, s.s7G)(), a.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t],
    );
    return t.type === r.o9.PERK ? n : void 0;
}
