n.d(t, { A: () => E });
var i = n(376357),
    r = n(734057),
    a = n(287809),
    s = n(562153),
    l = n(427262),
    o = n(835002),
    d = n(660183),
    c = n(841365),
    u = n(39470);
function _(e, t, n) {
    let i = a.default.getUser(t),
        _ = r.A.getChannel(n),
        E = s.Ay.getName(_?.guild_id, _?.id, i) ?? l.Ay.getGlobalName(i);
    switch (e) {
        case o.OB.IGNORE_SUCCESS:
            return d.intl.formatToPlainString(d.t["+joqrP"], { username: E });
        case o.OB.UNIGNORE_SUCCESS:
            return d.intl.formatToPlainString(d.t.THExKa, { username: E });
        case o.OB.BLOCK_SUCCESS:
            return d.intl.formatToPlainString(d.t.XXPrIs, { username: E });
        case o.OB.UNBLOCK_SUCCESS:
            return d.intl.formatToPlainString(d.t.uExcGX, { username: E });
        case o.OB.MUTE_SUCCESS:
            return d.intl.formatToPlainString(d.t.X4NtYb, { username: E });
        case o.OB.UNMUTE_SUCCESS:
            return d.intl.formatToPlainString(d.t.tRaBfY, { username: E });
        case o.OB.REPORT_SUCCESS:
            return d.intl.formatToPlainString(d.t.FOptFU, { username: E });
        case o.OB.TIGGER_PAWTECT_ERROR:
            return d.intl.string(d.t.c6kn6F);
        case o.OB.AGE_VERIFICATION_FAE_FAILED:
            return d.intl.string(c.default["9F2y52"]);
        case o.OB.AGE_VERIFICATION_ID_FAILED:
            return d.intl.string(c.default["40UKek"]);
        case o.OB.AGE_VERIFICATION_UNDERAGE:
            return d.intl.string(c.default.XBGt7g);
        case o.OB.TIGGER_PAWTECT_VERIFIED:
            return d.intl.string(d.t["7nKAXx"]);
        case o.OB.GENERIC_ERROR:
            return d.intl.string(d.t.zBpoc7);
        case o.OB.REPORT_TO_MOD_SUCCESS:
            return d.intl.string(u.default.iBypeZ);
        case o.OB.SAFETY_FEEDBACK_SUCCESS:
            return d.intl.string(d.t.TcFR5k);
        case o.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return d.intl.string(d.t["susqq/"]);
        case o.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE:
            return d.intl.string(c.default.vVwFCK);
        default:
            return d.intl.string(d.t["+c5xtT"]);
    }
}
let E = {
    showIgnoreSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.IGNORE_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.UNIGNORE_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.BLOCK_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.UNBLOCK_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.MUTE_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.UNMUTE_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, i.P0)((0, i.ox)(_(o.OB.REPORT_SUCCESS, e, t), i.Ck.SUCCESS));
    },
    showSuccessToast(e) {
        (0, i.P0)((0, i.ox)(_(e), i.Ck.SUCCESS));
    },
    showFailedToast(e) {
        (0, i.P0)((0, i.ox)(_(e ?? o.OB.GENERIC_ERROR), i.Ck.FAILURE));
    },
};
