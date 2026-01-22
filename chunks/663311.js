n.d(t, {
    A: () => a,
});
var r = n(253932),
    i = n(486020);

function a(e, t) {
    var n, a, s;
    let o;
    if ("u" < typeof Image) return;
    let l = null == (n = e.user) ? void 0 : n.id;
    null == l ||
        "" === l ||
        (null != t &&
            (null == (a = e.guild_member_profile) ? void 0 : a.banner) != null &&
            (o = (0, i.ns)({
                id: l,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: r.kt.getSetting(),
                size: 600,
            })),
        (null == e || null == (s = e.user_profile) ? void 0 : s.banner) != null &&
            (o = (0, i.z)({
                id: l,
                banner: e.user_profile.banner,
                canAnimate: r.kt.getSetting(),
                size: 600,
            })),
        null == o || (new Image().src = o));
}
