n.d(t, { A: () => l });
var o = n(17928),
    r = n(228366);
let i = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
class a extends o.Ay.Store {
    static displayName = "WowMomentConfirmationStore";
    getState() {
        return i;
    }
    get isDisplayingWowMomentConfirmation() {
        return i.isDisplayingWowMomentConfirmation;
    }
    get isAnimated() {
        return i.isAnimated;
    }
}
let l = new a(r.h, {
    LOGOUT: function () {
        i = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
    },
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: function (e) {
        let { value: t, isAnimated: n } = e;
        (i.isDisplayingWowMomentConfirmation = t), (i.isAnimated = n);
    },
});
