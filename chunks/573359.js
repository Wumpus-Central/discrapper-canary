n.d(t, { A: () => l });
var o = n(17928),
    r = n(228366);
let a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
class i extends o.Ay.Store {
    static displayName = "WowMomentConfirmationStore";
    getState() {
        return a;
    }
    get isDisplayingWowMomentConfirmation() {
        return a.isDisplayingWowMomentConfirmation;
    }
    get isAnimated() {
        return a.isAnimated;
    }
}
let l = new i(r.h, {
    LOGOUT: function () {
        a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
    },
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: function (e) {
        let { value: t, isAnimated: n } = e;
        (a.isDisplayingWowMomentConfirmation = t), (a.isAnimated = n);
    },
});
