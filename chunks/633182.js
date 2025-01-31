n.d(t, { o: () => u });
var i = n(592125),
    r = n(594174),
    a = n(5192),
    s = n(51144),
    o = n(484710),
    l = n(388032);
function u(e, t, n) {
    var u;
    let c = r.default.getUser(t),
        d = i.Z.getChannel(n),
        f = null !== (u = a.ZP.getName(null == d ? void 0 : d.guild_id, null == d ? void 0 : d.id, c)) && void 0 !== u ? u : s.ZP.getGlobalName(c);
    switch (e) {
        case o.w.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t['+joqrK'], { username: f });
        case o.w.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKS, { username: f });
        case o.w.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIi, { username: f });
        case o.w.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGR, { username: f });
        case o.w.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYW, { username: f });
        case o.w.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfX, { username: f });
        case o.w.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFR, { username: f });
        case o.w.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc3);
        default:
            return l.intl.string(l.t['+c5xtb']);
    }
}
