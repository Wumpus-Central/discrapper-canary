r.d(n, {
    cO: function () {
        return u;
    },
    eb: function () {
        return i;
    },
    kl: function () {
        return c;
    }
});
var i,
    a = r(700785),
    o = r(74538),
    s = r(378233),
    l = r(981631);
!(function (e) {
    (e[(e.SENDABLE = 0)] = 'SENDABLE'), (e[(e.SENDABLE_WITH_PREMIUM = 1)] = 'SENDABLE_WITH_PREMIUM'), (e[(e.NONSENDABLE = 2)] = 'NONSENDABLE'), (e[(e.SENDABLE_WITH_BOOSTED_GUILD = 3)] = 'SENDABLE_WITH_BOOSTED_GUILD');
})(i || (i = {}));
let u = (e, n, r) => {
        if (null == n) return 2;
        let i = o.ZP.canUseCustomStickersEverywhere(n);
        if ((0, s.jl)(e)) return 0;
        if ((0, s.J8)(e) && null != r)
            return e.available
                ? null != r.guild_id && '' !== r.guild_id && r.guild_id === e.guild_id
                    ? 0
                    : null == r.guild_id ||
                        a.BT({
                            permission: l.Plq.USE_EXTERNAL_STICKERS,
                            user: n,
                            context: r
                        })
                      ? i
                          ? 0
                          : 1
                      : 2
                : 3;
        return 2;
    },
    c = (e, n, r) => 0 === u(e, n, r);
