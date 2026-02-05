"use strict";
n.d(t, { A: () => a });
var r = n(253932),
    i = n(486020);
function a(e, t) {
    let n;
    if ("u" < typeof Image) return;
    let a = e.user?.id;
    null == a ||
        "" === a ||
        (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, i.ns)({
                id: a,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: r.kt.getSetting(),
                size: 600,
            })),
        e?.user_profile?.banner != null &&
            (n = (0, i.z)({ id: a, banner: e.user_profile.banner, canAnimate: r.kt.getSetting(), size: 600 })),
        null == n || (new Image().src = n));
}
