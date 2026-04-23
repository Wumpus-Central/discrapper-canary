"use strict";
n.d(t, { G7: () => c, Ux: () => _, W$: () => u });
var i,
    r = n(696451),
    s = n(488926),
    a = n(927578),
    o = n(514983),
    l = n(68935),
    d = n(652215),
    _ =
        (((i = {})[(i.SENDABLE = 0)] = "SENDABLE"),
        (i[(i.SENDABLE_WITH_PREMIUM = 1)] = "SENDABLE_WITH_PREMIUM"),
        (i[(i.NONSENDABLE = 2)] = "NONSENDABLE"),
        (i[(i.SENDABLE_WITH_BOOSTED_GUILD = 3)] = "SENDABLE_WITH_BOOSTED_GUILD"),
        i);
let u = (e, t, n) => {
        if (null == t) return 2;
        let i = a.Ay.canUseCustomStickersEverywhere(t);
        return (0, l.FD)(e)
            ? 2 * (null == o.A.getStickerPack(e.pack_id))
            : (0, l.Xw)(e) && null != n
              ? null == r.Ay.getSelfMember(e.guild_id)
                  ? 2
                  : e.available
                    ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id
                        ? 0
                        : null == n.guild_id || s.$3({ permission: d.xBc.USE_EXTERNAL_STICKERS, user: t, context: n })
                          ? +!i
                          : 2
                    : 3
              : 2;
    },
    c = (e, t, n) => 0 === u(e, t, n);
