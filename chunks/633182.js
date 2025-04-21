n.d(t, { o: () => c });
var r = n(592125),
    i = n(594174),
    a = n(5192),
    o = n(51144),
    s = n(484710),
    l = n(388032);
function c(e, t, n) {
    var c;
    let u = i.default.getUser(t),
        d = r.Z.getChannel(n),
        f = null != (c = a.ZP.getName(null == d ? void 0 : d.guild_id, null == d ? void 0 : d.id, u)) ? c : o.ZP.getGlobalName(u);
    switch (e) {
        case s.w.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t['+joqrK'], { username: f });
        case s.w.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKS, { username: f });
        case s.w.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIi, { username: f });
        case s.w.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGR, { username: f });
        case s.w.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYW, { username: f });
        case s.w.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfX, { username: f });
        case s.w.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFR, { username: f });
        case s.w.TIGGER_PAWTECT_ERROR:
            return l.intl.string(l.t.c6kn6O);
        case s.w.TIGGER_PAWTECT_VERIFIED:
            return l.intl.string(l.t.EnTLDg);
        case s.w.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc3);
        default:
            return l.intl.string(l.t['+c5xtb']);
    }
}
