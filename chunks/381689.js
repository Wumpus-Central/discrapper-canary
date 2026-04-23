"use strict";
n.d(t, { A: () => h });
var i = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(734057),
    o = n(287809),
    l = n(562153),
    d = n(427262),
    _ = n(835002),
    u = n(985018),
    c = n(221314);
function E(e, t, n) {
    let i = o.default.getUser(t),
        r = a.A.getChannel(n),
        s = l.Ay.getName(r?.guild_id, r?.id, i) ?? d.Ay.getGlobalName(i);
    switch (e) {
        case _.OB.IGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t["+joqrP"], { username: s });
        case _.OB.UNIGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t.THExKa, { username: s });
        case _.OB.BLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.XXPrIs, { username: s });
        case _.OB.UNBLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.uExcGX, { username: s });
        case _.OB.MUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.X4NtYb, { username: s });
        case _.OB.UNMUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.tRaBfY, { username: s });
        case _.OB.REPORT_SUCCESS:
            return u.intl.formatToPlainString(u.t.FOptFU, { username: s });
        case _.OB.TIGGER_PAWTECT_ERROR:
            return u.intl.string(u.t.c6kn6F);
        case _.OB.TIGGER_PAWTECT_VERIFIED:
            return u.intl.string(u.t["7nKAXx"]);
        case _.OB.GENERIC_ERROR:
            return u.intl.string(u.t.zBpoc7);
        case _.OB.REPORT_TO_MOD_SUCCESS:
            return u.intl.string(c.default.iBypeZ);
        case _.OB.SAFETY_FEEDBACK_SUCCESS:
            return u.intl.string(u.t.TcFR5k);
        case _.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return u.intl.string(u.t["susqq/"]);
        default:
            return u.intl.string(u.t["+c5xtT"]);
    }
}
let h = {
    showIgnoreSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.IGNORE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.UNIGNORE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.BLOCK_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.UNBLOCK_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.MUTE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.UNMUTE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(E(_.OB.REPORT_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showSuccessToast(e) {
        (0, i.P0)((0, r.o)(E(e), s.Ck.SUCCESS));
    },
    showFailedToast(e) {
        (0, i.P0)((0, r.o)(E(e ?? _.OB.GENERIC_ERROR), s.Ck.FAILURE));
    },
};
