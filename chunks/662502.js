n.d(t, { A: () => s });
var i = n(858899),
    r = n(323484),
    a = n(835002);
let s = {
    showIgnoreSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.IGNORE_SUCCESS, e, t), variant: "success" });
    },
    showUnignoreSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.UNIGNORE_SUCCESS, e, t), variant: "success" });
    },
    showBlockSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.BLOCK_SUCCESS, e, t), variant: "success" });
    },
    showUnblockSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.UNBLOCK_SUCCESS, e, t), variant: "success" });
    },
    showMuteSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.MUTE_SUCCESS, e, t), variant: "success" });
    },
    showUnmuteSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.UNMUTE_SUCCESS, e, t), variant: "success" });
    },
    showReportSuccessToast(e, t) {
        (0, i.P0)({ text: (0, r.$)(a.OB.REPORT_SUCCESS, e, t), variant: "success" });
    },
    showSuccessToast(e) {
        (0, i.P0)({ text: (0, r.$)(e), variant: "success" });
    },
    showFailedToast(e) {
        (0, i.P0)({ text: (0, r.$)(e ?? a.OB.GENERIC_ERROR), variant: "critical" });
    },
};
