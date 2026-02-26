"use strict";
n.d(t, { $: () => c });
var r = n(734057),
    i = n(287809),
    s = n(562153),
    a = n(427262),
    o = n(835002),
    l = n(985018),
    u = n(733045);
function c(e, t, n) {
    let c = i.default.getUser(t),
        d = r.A.getChannel(n),
        _ = s.Ay.getName(d?.guild_id, d?.id, c) ?? a.Ay.getGlobalName(c);
    switch (e) {
        case o.OB.IGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t["+joqrP"], { username: _ });
        case o.OB.UNIGNORE_SUCCESS:
            return l.intl.formatToPlainString(l.t.THExKa, { username: _ });
        case o.OB.BLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.XXPrIs, { username: _ });
        case o.OB.UNBLOCK_SUCCESS:
            return l.intl.formatToPlainString(l.t.uExcGX, { username: _ });
        case o.OB.MUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.X4NtYb, { username: _ });
        case o.OB.UNMUTE_SUCCESS:
            return l.intl.formatToPlainString(l.t.tRaBfY, { username: _ });
        case o.OB.REPORT_SUCCESS:
            return l.intl.formatToPlainString(l.t.FOptFU, { username: _ });
        case o.OB.TIGGER_PAWTECT_ERROR:
            return l.intl.string(l.t.c6kn6F);
        case o.OB.TIGGER_PAWTECT_VERIFIED:
            return l.intl.string(l.t["7nKAXx"]);
        case o.OB.GENERIC_ERROR:
            return l.intl.string(l.t.zBpoc7);
        case o.OB.REPORT_TO_MOD_SUCCESS:
            return l.intl.string(u.default.iBypeZ);
        case o.OB.SAFETY_FEEDBACK_SUCCESS:
            return l.intl.string(l.t.TcFR5k);
        case o.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return l.intl.string(l.t["susqq/"]);
        default:
            return l.intl.string(l.t["+c5xtT"]);
    }
}
