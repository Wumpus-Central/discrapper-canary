"use strict";
n.d(t, { $: () => d });
var r = n(870383),
    i = n(734057),
    a = n(287809),
    s = n(562153),
    o = n(427262),
    l = n(835002),
    u = n(985018),
    c = n(641131);
function d(e, t, n) {
    let d = a.default.getUser(t),
        _ = i.A.getChannel(n),
        f = s.Ay.getName(_?.guild_id, _?.id, d) ?? o.Ay.getGlobalName(d);
    switch (e) {
        case l.OB.IGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t["+joqrP"], { username: f });
        case l.OB.UNIGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t.THExKa, { username: f });
        case l.OB.BLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.XXPrIs, { username: f });
        case l.OB.UNBLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.uExcGX, { username: f });
        case l.OB.MUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.X4NtYb, { username: f });
        case l.OB.UNMUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.tRaBfY, { username: f });
        case l.OB.REPORT_SUCCESS:
            return u.intl.formatToPlainString(u.t.FOptFU, { username: f });
        case l.OB.TIGGER_PAWTECT_ERROR:
            return u.intl.string(u.t.c6kn6F);
        case l.OB.TIGGER_PAWTECT_VERIFIED:
            return (0, r.H)(u.intl.string(u.t.XwKo1k), u.intl.string(u.t["7nKAXx"]));
        case l.OB.GENERIC_ERROR:
            return u.intl.string(u.t.zBpoc7);
        case l.OB.REPORT_TO_MOD_SUCCESS:
            return u.intl.string(c.default.iBypeZ);
        case l.OB.SAFETY_FEEDBACK_SUCCESS:
            return u.intl.string(u.t.TcFR5k);
        case l.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return u.intl.string(u.t["susqq/"]);
        default:
            return u.intl.string(u.t["+c5xtT"]);
    }
}
