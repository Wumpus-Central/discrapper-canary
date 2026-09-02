"use strict";
n.d(t, { A: () => h });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(734057),
    l = n(287809),
    o = n(562153),
    d = n(427262),
    c = n(835002),
    u = n(375708),
    _ = n(841365),
    E = n(39470);
function A(e, t, n) {
    let i = l.default.getUser(t),
        r = s.A.getChannel(n),
        a = o.Ay.getName(r?.guild_id, r?.id, i) ?? d.Ay.getGlobalName(i);
    switch (e) {
        case c.OB.IGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t["+joqrP"], { username: a });
        case c.OB.UNIGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t.THExKa, { username: a });
        case c.OB.BLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.XXPrIs, { username: a });
        case c.OB.UNBLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.uExcGX, { username: a });
        case c.OB.MUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.X4NtYb, { username: a });
        case c.OB.UNMUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.tRaBfY, { username: a });
        case c.OB.REPORT_SUCCESS:
            return u.intl.formatToPlainString(u.t.FOptFU, { username: a });
        case c.OB.TIGGER_PAWTECT_ERROR:
            return u.intl.string(u.t.c6kn6F);
        case c.OB.AGE_VERIFICATION_FAE_FAILED:
            return u.intl.string(_.default["9F2y52"]);
        case c.OB.AGE_VERIFICATION_ID_FAILED:
            return u.intl.string(_.default["40UKek"]);
        case c.OB.AGE_VERIFICATION_UNDERAGE:
            return u.intl.string(_.default.XBGt7g);
        case c.OB.TIGGER_PAWTECT_VERIFIED:
            return u.intl.string(u.t["7nKAXx"]);
        case c.OB.GENERIC_ERROR:
            return u.intl.string(u.t.zBpoc7);
        case c.OB.REPORT_TO_MOD_SUCCESS:
            return u.intl.string(E.default.iBypeZ);
        case c.OB.SAFETY_FEEDBACK_SUCCESS:
            return u.intl.string(u.t.TcFR5k);
        case c.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return u.intl.string(u.t["susqq/"]);
        case c.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE:
            return u.intl.string(_.default.vVwFCK);
        default:
            return u.intl.string(u.t["+c5xtT"]);
    }
}
let h = {
    showIgnoreSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.IGNORE_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.UNIGNORE_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.BLOCK_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.UNBLOCK_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.MUTE_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.UNMUTE_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(A(c.OB.REPORT_SUCCESS, e, t), a.Ck.SUCCESS));
    },
    showSuccessToast(e) {
        (0, i.P0)((0, r.o)(A(e), a.Ck.SUCCESS));
    },
    showFailedToast(e) {
        (0, i.P0)((0, r.o)(A(e ?? c.OB.GENERIC_ERROR), a.Ck.FAILURE));
    },
};
