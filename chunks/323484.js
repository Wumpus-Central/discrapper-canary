n.d(t, {
    $: () => d,
});
var r = n(870383),
    i = n(734057),
    a = n(287809),
    s = n(562153),
    o = n(427262),
    l = n(835002),
    c = n(985018),
    u = n(641131);

function d(e, t, n) {
    var d;
    let f = a.default.getUser(t),
        p = i.A.getChannel(n),
        _ =
            null != (d = s.Ay.getName(null == p ? void 0 : p.guild_id, null == p ? void 0 : p.id, f))
                ? d
                : o.Ay.getGlobalName(f);
    switch (e) {
        case l.OB.IGNORE_SUCCESS:
            return c.intl.formatToPlainString(c.t["+joqrP"], {
                username: _,
            });
        case l.OB.UNIGNORE_SUCCESS:
            return c.intl.formatToPlainString(c.t.THExKa, {
                username: _,
            });
        case l.OB.BLOCK_SUCCESS:
            return c.intl.formatToPlainString(c.t.XXPrIs, {
                username: _,
            });
        case l.OB.UNBLOCK_SUCCESS:
            return c.intl.formatToPlainString(c.t.uExcGX, {
                username: _,
            });
        case l.OB.MUTE_SUCCESS:
            return c.intl.formatToPlainString(c.t.X4NtYb, {
                username: _,
            });
        case l.OB.UNMUTE_SUCCESS:
            return c.intl.formatToPlainString(c.t.tRaBfY, {
                username: _,
            });
        case l.OB.REPORT_SUCCESS:
            return c.intl.formatToPlainString(c.t.FOptFU, {
                username: _,
            });
        case l.OB.TIGGER_PAWTECT_ERROR:
            return c.intl.string(c.t.c6kn6F);
        case l.OB.TIGGER_PAWTECT_VERIFIED:
            return (0, r.H)(c.intl.string(c.t.XwKo1k), c.intl.string(c.t["7nKAXx"]));
        case l.OB.GENERIC_ERROR:
            return c.intl.string(c.t.zBpoc7);
        case l.OB.REPORT_TO_MOD_SUCCESS:
            return c.intl.string(u.default.iBypeZ);
        case l.OB.SAFETY_FEEDBACK_SUCCESS:
            return c.intl.string(c.t.TcFR5k);
        case l.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return c.intl.string(c.t["susqq/"]);
        default:
            return c.intl.string(c.t["+c5xtT"]);
    }
}
