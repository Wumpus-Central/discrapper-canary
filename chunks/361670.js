"use strict";
n.d(t, { G7: () => _, Ux: () => d, W$: () => c });
var r,
    i = n(696451),
    s = n(488926),
    a = n(927578),
    o = n(514983),
    l = n(378058),
    u = n(652215),
    d =
        (((r = {})[(r.SENDABLE = 0)] = "SENDABLE"),
        (r[(r.SENDABLE_WITH_PREMIUM = 1)] = "SENDABLE_WITH_PREMIUM"),
        (r[(r.NONSENDABLE = 2)] = "NONSENDABLE"),
        (r[(r.SENDABLE_WITH_BOOSTED_GUILD = 3)] = "SENDABLE_WITH_BOOSTED_GUILD"),
        r);
let c = (e, t, n) => {
        if (null == t) return 2;
        let r = a.Ay.canUseCustomStickersEverywhere(t);
        return (0, l.FD)(e)
            ? 2 * (null == o.A.getStickerPack(e.pack_id))
            : (0, l.Xw)(e) && null != n
              ? null == i.Ay.getSelfMember(e.guild_id)
                  ? 2
                  : e.available
                    ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id
                        ? 0
                        : null == n.guild_id || s.$3({ permission: u.xBc.USE_EXTERNAL_STICKERS, user: t, context: n })
                          ? +!r
                          : 2
                    : 3
              : 2;
    },
    _ = (e, t, n) => 0 === c(e, t, n);
