n.d(t, { Z: () => s });
var i = n(481060),
    r = n(633182),
    a = n(484710);
let s = {
    showIgnoreSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.IGNORE_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.UNIGNORE_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.BLOCK_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.UNBLOCK_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.MUTE_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.UNMUTE_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.REPORT_SUCCESS, e, t), i.ToastType.SUCCESS));
    },
    showFailedToast() {
        (0, i.showToast)((0, i.createToast)((0, r.o)(a.w.GENERIC_ERROR), i.ToastType.FAILURE));
    }
};
