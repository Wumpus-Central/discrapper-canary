"use strict";
n.d(t, { G7: () => _, Ux: () => c, W$: () => u });
var i,
    r = n(696451),
    a = n(488926),
    s = n(158045),
    l = n(514983),
    o = n(68935),
    d = n(652215),
    c =
        (((i = {})[(i.SENDABLE = 0)] = "SENDABLE"),
        (i[(i.SENDABLE_WITH_PREMIUM = 1)] = "SENDABLE_WITH_PREMIUM"),
        (i[(i.NONSENDABLE = 2)] = "NONSENDABLE"),
        (i[(i.SENDABLE_WITH_BOOSTED_GUILD = 3)] = "SENDABLE_WITH_BOOSTED_GUILD"),
        i);
function u(e, t, n) {
    if (null == t) return 2;
    let i = s.Ay.canUseCustomStickersEverywhere(t);
    return (0, o.FD)(e)
        ? 2 * (null == l.A.getStickerPack(e.pack_id))
        : (0, o.Xw)(e) && null != n
          ? null == r.Ay.getSelfMember(e.guild_id)
              ? 2
              : e.available
                ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id
                    ? 0
                    : null == n.guild_id || a.$3({ permission: d.xBc.USE_EXTERNAL_STICKERS, user: t, context: n })
                      ? +!i
                      : 2
                : 3
          : 2;
}
function _(e, t, n) {
    return 0 === u(e, t, n);
}
