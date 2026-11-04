var t = _(582128),
    s = _(512750),
    R = _(192308),
    a = _(727419),
    r = _(568065),
    n = _(652215);
_.d(
    E,
    {},
    {
        A: function (e, E) {
            let _ = t.useCallback(
                (_) => {
                    if ((_.stopPropagation(), E.type !== r.o9.LEVEL))
                        switch (((0, R.Oo)(r.Fq), E.skuId)) {
                            case s.SL:
                                a.A.open(e, n.BEX.TAG, n.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                                return;
                            case s.aN:
                                a.A.open(e, n.BEX.ROLES, n.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                                return;
                            case s.FB:
                                a.A.open(
                                    e,
                                    n.BEX.BOOST_PERKS,
                                    n.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                                    n.nd0.BOOST_PERKS_VANITY_URL,
                                );
                                return;
                            case s.d0:
                                a.A.open(e, n.BEX.GUILD_THEME, n.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                                return;
                            case s.jF:
                            case s.OJ:
                            case s.Ht:
                            case s.tv:
                                ((0, R.s7)(), a.A.open(e, n.BEX.TAG, n.JJy.GUILD_POWERUPS_OVERVIEW_CARD));
                                return;
                            default:
                                return;
                        }
                },
                [e, E],
            );
            return E.type === r.o9.PERK ? _ : void 0;
        },
    },
);
