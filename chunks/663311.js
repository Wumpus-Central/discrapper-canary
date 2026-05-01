n.d(t, { A: () => i });
var o = n(253932),
    r = n(486020);
function i(e, t) {
    let n;
    if ("u" < typeof Image) return;
    let i = e.user?.id;
    null == i ||
        "" === i ||
        (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, r.ns)({
                id: i,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: o.kt.getSetting(),
                size: 600,
            })),
        e?.user_profile?.banner != null &&
            (n = (0, r.z)({ id: i, banner: e.user_profile.banner, canAnimate: o.kt.getSetting(), size: 600 })),
        null == n || (new Image().src = n));
}
