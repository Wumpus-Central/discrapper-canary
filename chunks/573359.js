"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
function s() {
    a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
}
function o() {
    s();
}
function l(e) {
    let { value: t, isAnimated: n } = e;
    (a.isDisplayingWowMomentConfirmation = t), (a.isAnimated = n);
}
class u extends r.Ay.Store {
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
let c = new u(i.h, { LOGOUT: o, WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: l });
