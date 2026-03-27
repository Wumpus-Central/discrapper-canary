n.d(t, { A: () => u });
var r = n(64700),
    i = n(512750),
    l = n(397927),
    s = n(997509),
    o = n(568065),
    a = n(652215);
function u(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== o.o9.LEVEL))
                switch (((0, l.OoC)(o.Fq), t.skuId)) {
                    case i.SL:
                        s.A.open(e, a.BEX.TAG, a.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.aN:
                        s.A.open(e, a.BEX.ROLES, a.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.FB:
                        s.A.open(
                            e,
                            a.BEX.BOOST_PERKS,
                            a.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                            a.nd0.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case i.jF:
                    case i.OJ:
                    case i.Ht:
                    case i.tv:
                        (0, l.s7G)(), s.A.open(e, a.BEX.TAG, a.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t],
    );
    return t.type === o.o9.PERK ? n : void 0;
}
