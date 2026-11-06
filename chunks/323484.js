var i = n(734057),
    r = n(287809),
    a = n(562153),
    s = n(427262),
    l = n(835002),
    o = n(792996),
    d = n(664188),
    c = n(665956),
    u = n(307805);
n.d(
    t,
    {},
    {
        $: function (e, t, n) {
            let _ = r.default.getUser(t),
                E = i.A.getChannel(n),
                A = a.Ay.getName(E?.guild_id, E?.id, _) ?? s.Ay.getGlobalName(_);
            switch (e) {
                case l.OB.IGNORE_SUCCESS:
                    return o.intl.formatToPlainString(o.t["+joqrP"], { username: A });
                case l.OB.UNIGNORE_SUCCESS:
                    return o.intl.formatToPlainString(o.t.THExKa, { username: A });
                case l.OB.BLOCK_SUCCESS:
                    return o.intl.formatToPlainString(o.t.XXPrIs, { username: A });
                case l.OB.UNBLOCK_SUCCESS:
                    return o.intl.formatToPlainString(o.t.uExcGX, { username: A });
                case l.OB.MUTE_SUCCESS:
                    return o.intl.formatToPlainString(o.t.X4NtYb, { username: A });
                case l.OB.UNMUTE_SUCCESS:
                    return o.intl.formatToPlainString(o.t.tRaBfY, { username: A });
                case l.OB.REPORT_SUCCESS:
                    return o.intl.formatToPlainString(o.t.FOptFU, { username: A });
                case l.OB.AGE_VERIFICATION_ERROR:
                    return o.intl.string(o.t.c6kn6F);
                case l.OB.AGE_VERIFICATION_FAE_FAILED:
                    return o.intl.string(d.default["9F2y52"]);
                case l.OB.AGE_VERIFICATION_ID_FAILED:
                    return o.intl.string(d.default["40UKek"]);
                case l.OB.AGE_VERIFICATION_UNDERAGE:
                    return o.intl.string(d.default.XBGt7g);
                case l.OB.AGE_VERIFICATION_VERIFIED:
                    return o.intl.string(o.t["7nKAXx"]);
                case l.OB.GENERIC_ERROR:
                    return o.intl.string(o.t.zBpoc7);
                case l.OB.REPORT_TO_MOD_SUCCESS:
                    return o.intl.string(u.default.iBypeZ);
                case l.OB.SAFETY_FEEDBACK_SUCCESS:
                    return o.intl.string(o.t.TcFR5k);
                case l.OB.EXISTING_USER_AGE_GATE_SUCCESS:
                    return o.intl.string(o.t["susqq/"]);
                case l.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE:
                    return o.intl.string(d.default.vVwFCK);
                case l.OB.FAMILY_CENTER_TEEN_SETTINGS_SAVE_ERROR:
                    return o.intl.string(c.default.fZG8IY);
                case l.OB.FAMILY_CENTER_TEEN_SETTINGS_LOAD_ERROR:
                    return o.intl.string(c.default.onKDuP);
                default:
                    return o.intl.string(o.t["+c5xtT"]);
            }
        },
    },
);
