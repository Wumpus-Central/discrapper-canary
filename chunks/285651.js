n.d(t, {
    cO: () => l,
    eb: () => s,
    kl: () => c
});
var r = n(700785),
    i = n(74538),
    a = n(378233),
    o = n(981631),
    s = (function (e) {
        return (e[(e.SENDABLE = 0)] = 'SENDABLE'), (e[(e.SENDABLE_WITH_PREMIUM = 1)] = 'SENDABLE_WITH_PREMIUM'), (e[(e.NONSENDABLE = 2)] = 'NONSENDABLE'), (e[(e.SENDABLE_WITH_BOOSTED_GUILD = 3)] = 'SENDABLE_WITH_BOOSTED_GUILD'), e;
    })({});
let l = (e, t, n) => {
        if (null == t) return 2;
        let s = i.ZP.canUseCustomStickersEverywhere(t);
        return (0, a.jl)(e)
            ? 0
            : (0, a.J8)(e) && null != n
              ? e.available
                  ? null != n.guild_id && '' !== n.guild_id && n.guild_id === e.guild_id
                      ? 0
                      : null == n.guild_id ||
                          r.BT({
                              permission: o.Plq.USE_EXTERNAL_STICKERS,
                              user: t,
                              context: n
                          })
                        ? +!s
                        : 2
                  : 3
              : 2;
    },
    c = (e, t, n) => 0 === l(e, t, n);
