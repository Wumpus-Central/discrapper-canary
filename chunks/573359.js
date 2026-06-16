"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
class a extends i.Ay.Store {
    static displayName = "WowMomentConfirmationStore";
    getState() {
        return s;
    }
    get isDisplayingWowMomentConfirmation() {
        return s.isDisplayingWowMomentConfirmation;
    }
    get isAnimated() {
        return s.isAnimated;
    }
}
let o = new a(r.h, {
    LOGOUT: function () {
        s = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
    },
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: function (e) {
        let { value: t, isAnimated: n } = e;
        (s.isDisplayingWowMomentConfirmation = t), (s.isAnimated = n);
    },
});
