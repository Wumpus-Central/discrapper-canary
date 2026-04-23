n.d(t, { A: () => l });
var r = n(17928),
    a = n(228366);
let i = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
class o extends r.Ay.Store {
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
let l = new o(a.h, {
    LOGOUT: function () {
        i = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
    },
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: function (e) {
        let { value: t, isAnimated: n } = e;
        (i.isDisplayingWowMomentConfirmation = t), (i.isAnimated = n);
    },
});
