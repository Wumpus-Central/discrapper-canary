n.d(t, {
    cO: () => u,
    eb: () => c,
    kl: () => d,
});
var r = n(271383),
    i = n(700785),
    a = n(74538),
    o = n(737406),
    s = n(378233),
    l = n(981631),
    c = (function (e) {
        return (
            (e[(e.SENDABLE = 0)] = "SENDABLE"),
            (e[(e.SENDABLE_WITH_PREMIUM = 1)] = "SENDABLE_WITH_PREMIUM"),
            (e[(e.NONSENDABLE = 2)] = "NONSENDABLE"),
            (e[(e.SENDABLE_WITH_BOOSTED_GUILD = 3)] = "SENDABLE_WITH_BOOSTED_GUILD"),
            e
        );
    })({});
let u = (e, t, n) => {
        if (null == t) return 2;
        let c = a.ZP.canUseCustomStickersEverywhere(t);
        return (0, s.jl)(e)
            ? 2 * (null == o.Z.getStickerPack(e.pack_id))
            : (0, s.J8)(e) && null != n
              ? null == r.ZP.getSelfMember(e.guild_id)
                  ? 2
                  : e.available
                    ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id
                        ? 0
                        : null == n.guild_id ||
                            i.BT({
                                permission: l.Plq.USE_EXTERNAL_STICKERS,
                                user: t,
                                context: n,
                            })
                          ? +!c
                          : 2
                    : 3
              : 2;
    },
    d = (e, t, n) => 0 === u(e, t, n);
