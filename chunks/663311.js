"use strict";
n.d(t, { A: () => s });
var r = n(253932),
    i = n(486020);
function s(e, t) {
    let n;
    if ("u" < typeof Image) return;
    let s = e.user?.id;
    null == s ||
        "" === s ||
        (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, i.ns)({
                id: s,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: r.kt.getSetting(),
                size: 600,
            })),
        e?.user_profile?.banner != null &&
            (n = (0, i.z)({ id: s, banner: e.user_profile.banner, canAnimate: r.kt.getSetting(), size: 600 })),
        null == n || (new Image().src = n));
}
