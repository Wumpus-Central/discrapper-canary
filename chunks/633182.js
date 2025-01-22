r.d(n, {
    o: function () {
        return c;
    }
});
var i = r(592125),
    a = r(594174),
    o = r(5192),
    s = r(51144),
    l = r(484710),
    u = r(388032);
function c(e, n, r) {
    var c;
    let d = a.default.getUser(n),
        f = i.Z.getChannel(r),
        p = null !== (c = o.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, d)) && void 0 !== c ? c : s.ZP.getGlobalName(d);
    switch (e) {
        case l.w.IGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t['+joqrK'], { username: p });
        case l.w.UNIGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t.THExKS, { username: p });
        case l.w.BLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.XXPrIi, { username: p });
        case l.w.UNBLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.uExcGR, { username: p });
        case l.w.MUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.X4NtYW, { username: p });
        case l.w.UNMUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.tRaBfX, { username: p });
        case l.w.REPORT_SUCCESS:
            return u.intl.formatToPlainString(u.t.FOptFR, { username: p });
        case l.w.GENERIC_ERROR:
            return u.intl.string(u.t.zBpoc3);
        default:
            return u.intl.string(u.t['+c5xtb']);
    }
}
