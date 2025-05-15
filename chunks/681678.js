n.d(t, { Z: () => o });
var r = n(481060),
    i = n(633182),
    a = n(484710);
let o = {
    showIgnoreSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.IGNORE_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showUnignoreSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.UNIGNORE_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showBlockSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.BLOCK_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showUnblockSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.UNBLOCK_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showMuteSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.MUTE_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showUnmuteSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.UNMUTE_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showReportSuccessToast(e, t) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(a.w.REPORT_SUCCESS, e, t), r.ToastType.SUCCESS));
    },
    showSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(e), r.ToastType.SUCCESS));
    },
    showFailedToast(e) {
        (0, r.showToast)((0, r.createToast)((0, i.o)(null != e ? e : a.w.GENERIC_ERROR), r.ToastType.FAILURE));
    }
};
