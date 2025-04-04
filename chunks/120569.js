n.d(t, { Z: () => o });
var r = n(695346),
    i = n(768581);
function o(e, t) {
    var n, o, a;
    let s;
    if ('undefined' == typeof Image) return;
    let l = null == (n = e.user) ? void 0 : n.id;
    if (null != l && '' !== l)
        null != t &&
            (null == (o = e.guild_member_profile) ? void 0 : o.banner) != null &&
            (s = (0, i.tp)({
                id: l,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: r.QK.getSetting(),
                size: 600
            })),
            (null == e || null == (a = e.user_profile) ? void 0 : a.banner) != null &&
                (s = (0, i.aN)({
                    id: l,
                    banner: e.user_profile.banner,
                    canAnimate: r.QK.getSetting(),
                    size: 600
                })),
            null != s && (new Image().src = s);
}
