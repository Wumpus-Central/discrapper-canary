n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(789020);
var i = n(399606),
    l = n(592125),
    r = n(630388),
    a = n(637271),
    s = n(931261),
    o = n(981631),
    c = n(176505);
function d(e) {
    let t = (0, i.e7)([l.Z, a.Z], () => {
            let t = l.Z.getChannel(e);
            if (!!(null != t && (0, r.yE)(t.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL)) && a.Z.getSelectedResourceChannelId(null == t ? void 0 : t.guild_id) === t.id) return t.guild_id;
        }),
        n = (0, s.g)(null != t ? t : o.lds);
    return null != t && n;
}
