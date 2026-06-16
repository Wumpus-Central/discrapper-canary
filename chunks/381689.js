"use strict";
n.d(t, { A: () => f });
var i = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(734057),
    o = n(287809),
    l = n(562153),
    u = n(427262),
    c = n(835002),
    d = n(375708),
    _ = n(221314);
function h(e, t, n) {
    let i = o.default.getUser(t),
        r = a.A.getChannel(n),
        s = l.Ay.getName(r?.guild_id, r?.id, i) ?? u.Ay.getGlobalName(i);
    switch (e) {
        case c.OB.IGNORE_SUCCESS:
            return d.intl.formatToPlainString(d.t["+joqrP"], { username: s });
        case c.OB.UNIGNORE_SUCCESS:
            return d.intl.formatToPlainString(d.t.THExKa, { username: s });
        case c.OB.BLOCK_SUCCESS:
            return d.intl.formatToPlainString(d.t.XXPrIs, { username: s });
        case c.OB.UNBLOCK_SUCCESS:
            return d.intl.formatToPlainString(d.t.uExcGX, { username: s });
        case c.OB.MUTE_SUCCESS:
            return d.intl.formatToPlainString(d.t.X4NtYb, { username: s });
        case c.OB.UNMUTE_SUCCESS:
            return d.intl.formatToPlainString(d.t.tRaBfY, { username: s });
        case c.OB.REPORT_SUCCESS:
            return d.intl.formatToPlainString(d.t.FOptFU, { username: s });
        case c.OB.TIGGER_PAWTECT_ERROR:
            return d.intl.string(d.t.c6kn6F);
        case c.OB.TIGGER_PAWTECT_VERIFIED:
            return d.intl.string(d.t["7nKAXx"]);
        case c.OB.GENERIC_ERROR:
            return d.intl.string(d.t.zBpoc7);
        case c.OB.REPORT_TO_MOD_SUCCESS:
            return d.intl.string(_.default.iBypeZ);
        case c.OB.SAFETY_FEEDBACK_SUCCESS:
            return d.intl.string(d.t.TcFR5k);
        case c.OB.EXISTING_USER_AGE_GATE_SUCCESS:
            return d.intl.string(d.t["susqq/"]);
        default:
            return d.intl.string(d.t["+c5xtT"]);
    }
}
let f = {
    showIgnoreSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.IGNORE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.UNIGNORE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.BLOCK_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.UNBLOCK_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.MUTE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.UNMUTE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, i.P0)((0, r.o)(h(c.OB.REPORT_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showSuccessToast(e) {
        (0, i.P0)((0, r.o)(h(e), s.Ck.SUCCESS));
    },
    showFailedToast(e) {
        (0, i.P0)((0, r.o)(h(e ?? c.OB.GENERIC_ERROR), s.Ck.FAILURE));
    },
};
