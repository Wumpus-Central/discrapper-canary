n.d(t, { Z: () => u });
var i = n(481060),
    r = n(703656),
    a = n(302155),
    s = n(71509),
    o = n(981631),
    l = n(388032);
let u = new a.Z({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, r.uL)(o.Z5c.ME), (0, i.showToast)((0, i.createToast)(l.intl.formatToPlainString(l.t.wx7O3N, { username: e.username }), i.ToastType.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, i.showToast)((0, i.createToast)(l.intl.string(l.t.pqvKWF), i.ToastType.FAILURE));
    },
    onTokenSet() {
        (0, i.Mr3)(s.Ui);
    }
});
