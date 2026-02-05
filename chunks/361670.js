"use strict";
n.d(t, { G7: () => d, Ux: () => u, W$: () => c });
var r = n(696451),
    i = n(488926),
    a = n(927578),
    s = n(514983),
    o = n(378058),
    l = n(652215),
    u = (function (e) {
        return (
            (e[(e.SENDABLE = 0)] = "SENDABLE"),
            (e[(e.SENDABLE_WITH_PREMIUM = 1)] = "SENDABLE_WITH_PREMIUM"),
            (e[(e.NONSENDABLE = 2)] = "NONSENDABLE"),
            (e[(e.SENDABLE_WITH_BOOSTED_GUILD = 3)] = "SENDABLE_WITH_BOOSTED_GUILD"),
            e
        );
    })({});
let c = (e, t, n) => {
        if (null == t) return 2;
        let u = a.Ay.canUseCustomStickersEverywhere(t);
        return (0, o.FD)(e)
            ? 2 * (null == s.A.getStickerPack(e.pack_id))
            : (0, o.Xw)(e) && null != n
              ? null == r.Ay.getSelfMember(e.guild_id)
                  ? 2
                  : e.available
                    ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id
                        ? 0
                        : null == n.guild_id || i.$3({ permission: l.xBc.USE_EXTERNAL_STICKERS, user: t, context: n })
                          ? +!u
                          : 2
                    : 3
              : 2;
    },
    d = (e, t, n) => 0 === c(e, t, n);
