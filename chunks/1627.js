var i = r(481060),
    a = r(703656),
    o = r(302155),
    s = r(71509),
    l = r(981631),
    u = r(388032);
n.Z = new o.Z({
    onSwitchSuccess(e, n) {
        setTimeout(() => {
            n && (0, a.uL)(l.Z5c.ME), (0, i.showToast)((0, i.createToast)(u.intl.formatToPlainString(u.t.wx7O3N, { username: e.username }), i.ToastType.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.pqvKWF), i.ToastType.FAILURE));
    },
    onTokenSet() {
        (0, i.closeModal)(s.Ui);
    }
});
