n.d(t, { Z: () => u }), n(789020);
var r = n(399606),
    i = n(592125),
    l = n(630388),
    o = n(637271),
    a = n(931261),
    s = n(981631),
    c = n(176505);
function u(e) {
    let t = (0, r.e7)([i.Z, o.Z], () => {
            let t = i.Z.getChannel(e);
            if (null != t && (0, l.yE)(t.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL) && o.Z.getSelectedResourceChannelId(null == t ? void 0 : t.guild_id) === t.id) return t.guild_id;
        }),
        n = (0, a.g)(null != t ? t : s.lds);
    return null != t && n;
}
