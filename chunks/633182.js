n.d(t, { o: () => u });
var r = n(592125),
    i = n(594174),
    a = n(5192),
    o = n(51144),
    s = n(484710),
    l = n(388032),
    c = n(130883);
function u(e, t, n) {
    var u;
    let d = i.default.getUser(t),
        _ = r.Z.getChannel(n),
        f = null != (u = a.ZP.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, d)) ? u : o.ZP.getGlobalName(d);
    switch (e) {
        case s.wQ.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t['+joqrK'], { username: f });
        case s.wQ.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKS, { username: f });
        case s.wQ.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIi, { username: f });
        case s.wQ.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGR, { username: f });
        case s.wQ.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYW, { username: f });
        case s.wQ.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfX, { username: f });
        case s.wQ.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFR, { username: f });
        case s.wQ.TIGGER_PAWTECT_ERROR:
            return l.intl.string(l.t.c6kn6O);
        case s.wQ.TIGGER_PAWTECT_VERIFIED:
            return l.intl.string(l.t.XwKo1t);
        case s.wQ.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc3);
        case s.wQ.REPORT_TO_MOD_SUCCESS:
            return l.intl.string(c.default.iBypeX);
        default:
            return l.intl.string(l.t['+c5xtb']);
    }
}
