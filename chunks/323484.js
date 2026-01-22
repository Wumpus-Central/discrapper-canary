n.d(t, { $: () => u });
var r = n(734057),
    i = n(287809),
    a = n(562153),
    s = n(427262),
    o = n(835002),
    l = n(985018),
    c = n(641131);
function u(e, t, n) {
    var u;
    let d = i.default.getUser(t),
        f = r.A.getChannel(n),
        p =
            null != (u = a.Ay.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, d))
                ? u
                : s.Ay.getGlobalName(d);
    switch (e) {
        case o.OB.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t["+joqrP"], { username: p });
        case o.OB.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKa, { username: p });
        case o.OB.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIs, { username: p });
        case o.OB.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGX, { username: p });
        case o.OB.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYb, { username: p });
        case o.OB.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfY, { username: p });
        case o.OB.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFU, { username: p });
        case o.OB.TIGGER_PAWTECT_ERROR:
            return l.intl.string(l.t.c6kn6F);
        case o.OB.TIGGER_PAWTECT_VERIFIED:
            return l.intl.string(l.t.XwKo1k);
        case o.OB.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc7);
        case o.OB.REPORT_TO_MOD_SUCCESS:
            return l.intl.string(c.default.iBypeZ);
        case o.OB.SAFETY_FEEDBACK_SUCCESS:
            return l.intl.string(l.t.TcFR5k);
        case o.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return l.intl.string(l.t["susqq/"]);
        default:
            return l.intl.string(l.t["+c5xtT"]);
    }
}
