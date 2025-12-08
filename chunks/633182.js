n.d(t, { o: () => u });
var r = n(592125),
    i = n(594174),
    a = n(5192),
    o = n(51144),
    s = n(484710),
    l = n(388032),
    c = n(864309);
function u(e, t, n) {
    var u;
    let d = i.default.getUser(t),
        f = r.Z.getChannel(n),
        p =
            null != (u = a.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, d))
                ? u
                : o.ZP.getGlobalName(d);
    switch (e) {
        case s.wQ.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t["+joqrP"], { username: p });
        case s.wQ.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKa, { username: p });
        case s.wQ.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIs, { username: p });
        case s.wQ.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGX, { username: p });
        case s.wQ.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYb, { username: p });
        case s.wQ.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfY, { username: p });
        case s.wQ.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFU, { username: p });
        case s.wQ.TIGGER_PAWTECT_ERROR:
            return l.intl.string(l.t.c6kn6F);
        case s.wQ.TIGGER_PAWTECT_VERIFIED:
            return l.intl.string(l.t.XwKo1k);
        case s.wQ.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc7);
        case s.wQ.REPORT_TO_MOD_SUCCESS:
            return l.intl.string(c.default.iBypeZ);
        case s.wQ.SAFETY_FEEDBACK_SUCCESS:
            return l.intl.string(l.t.TcFR5k);
        case s.wQ.EXISTING_USER_AGE_GATE_SUCCESS:
            return l.intl.string(l.t["susqq/"]);
        default:
            return l.intl.string(l.t["+c5xtT"]);
    }
}
