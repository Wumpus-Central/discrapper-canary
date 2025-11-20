n.d(t, { Z: () => u }), n(997841);
var i = n(95015),
    r = n(399606),
    l = n(592125),
    a = n(637271),
    o = n(931261),
    s = n(981631),
    c = n(176505);
function u(e) {
    let t = (0, r.e7)([l.Z, a.Z], () => {
            let t = l.Z.getChannel(e);
            if (
                null != t &&
                (0, i.yE)(t.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL) &&
                a.Z.getSelectedResourceChannelId(null == t ? void 0 : t.guild_id) === t.id
            )
                return t.guild_id;
        }),
        n = (0, o.g)(null != t ? t : s.lds);
    return null != t && n;
}
