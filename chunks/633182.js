n.d(t, { o: () => u });
var r = n(592125),
    i = n(594174),
    o = n(5192),
    a = n(51144),
    s = n(484710),
    l = n(388032),
    c = n(776571);
function u(e, t, n) {
    var u;
    let d = i.default.getUser(t),
        f = r.Z.getChannel(n),
        _ = null != (u = o.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, d)) ? u : a.ZP.getGlobalName(d);
    switch (e) {
        case s.w.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t['+joqrK'], { username: _ });
        case s.w.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKS, { username: _ });
        case s.w.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIi, { username: _ });
        case s.w.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGR, { username: _ });
        case s.w.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYW, { username: _ });
        case s.w.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfX, { username: _ });
        case s.w.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFR, { username: _ });
        case s.w.TIGGER_PAWTECT_ERROR:
            return l.intl.string(l.t.c6kn6O);
        case s.w.TIGGER_PAWTECT_VERIFIED:
            return l.intl.string(l.t.EnTLDg);
        case s.w.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc3);
        case s.w.REPORT_TO_MOD_SUCCESS:
            return l.intl.string(c.default.iBypeX);
        default:
            return l.intl.string(l.t['+c5xtb']);
    }
}
