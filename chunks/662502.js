"use strict";
n.d(t, { A: () => l });
var r = n(691540),
    i = n(857250),
    s = n(97483),
    a = n(323484),
    o = n(835002);
let l = {
    showIgnoreSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.IGNORE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.UNIGNORE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.BLOCK_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.UNBLOCK_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.MUTE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.UNMUTE_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, r.P0)((0, i.o)((0, a.$)(o.OB.REPORT_SUCCESS, e, t), s.Ck.SUCCESS));
    },
    showSuccessToast(e) {
        (0, r.P0)((0, i.o)((0, a.$)(e), s.Ck.SUCCESS));
    },
    showFailedToast(e) {
        (0, r.P0)((0, i.o)((0, a.$)(e ?? o.OB.GENERIC_ERROR), s.Ck.FAILURE));
    },
};
