n.d(t, { $: () => u });
var i = n(734057),
    r = n(287809),
    a = n(562153),
    s = n(427262),
    l = n(835002),
    o = n(660183),
    d = n(841365),
    c = n(39470);
function u(e, t, n) {
    let u = r.default.getUser(t),
        _ = i.A.getChannel(n),
        E = a.Ay.getName(_?.guild_id, _?.id, u) ?? s.Ay.getGlobalName(u);
    switch (e) {
        case l.OB.IGNORE_SUCCESS:
            return o.intl.formatToPlainString(o.t["+joqrP"], { username: E });
        case l.OB.UNIGNORE_SUCCESS:
            return o.intl.formatToPlainString(o.t.THExKa, { username: E });
        case l.OB.BLOCK_SUCCESS:
            return o.intl.formatToPlainString(o.t.XXPrIs, { username: E });
        case l.OB.UNBLOCK_SUCCESS:
            return o.intl.formatToPlainString(o.t.uExcGX, { username: E });
        case l.OB.MUTE_SUCCESS:
            return o.intl.formatToPlainString(o.t.X4NtYb, { username: E });
        case l.OB.UNMUTE_SUCCESS:
            return o.intl.formatToPlainString(o.t.tRaBfY, { username: E });
        case l.OB.REPORT_SUCCESS:
            return o.intl.formatToPlainString(o.t.FOptFU, { username: E });
        case l.OB.TIGGER_PAWTECT_ERROR:
            return o.intl.string(o.t.c6kn6F);
        case l.OB.AGE_VERIFICATION_FAE_FAILED:
            return o.intl.string(d.default["9F2y52"]);
        case l.OB.AGE_VERIFICATION_ID_FAILED:
            return o.intl.string(d.default["40UKek"]);
        case l.OB.AGE_VERIFICATION_UNDERAGE:
            return o.intl.string(d.default.XBGt7g);
        case l.OB.TIGGER_PAWTECT_VERIFIED:
            return o.intl.string(o.t["7nKAXx"]);
        case l.OB.GENERIC_ERROR:
            return o.intl.string(o.t.zBpoc7);
        case l.OB.REPORT_TO_MOD_SUCCESS:
            return o.intl.string(c.default.iBypeZ);
        case l.OB.SAFETY_FEEDBACK_SUCCESS:
            return o.intl.string(o.t.TcFR5k);
        case l.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return o.intl.string(o.t["susqq/"]);
        case l.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE:
            return o.intl.string(d.default.vVwFCK);
        default:
            return o.intl.string(o.t["+c5xtT"]);
    }
}
