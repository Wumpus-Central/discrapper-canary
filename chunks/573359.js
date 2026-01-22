n.d(t, { A: () => f });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = {
    isDisplayingWowMomentConfirmation: !1,
    isAnimated: !1,
};
function l() {
    o = {
        isDisplayingWowMomentConfirmation: !1,
        isAnimated: !1,
    };
}
function c() {
    l();
}
function u(e) {
    let { value: t, isAnimated: n } = e;
    (o.isDisplayingWowMomentConfirmation = t), (o.isAnimated = n);
}
class d extends (r = i.Ay.Store) {
    getState() {
        return o;
    }
    get isDisplayingWowMomentConfirmation() {
        return o.isDisplayingWowMomentConfirmation;
    }
    get isAnimated() {
        return o.isAnimated;
    }
}
s(d, "displayName", "WowMomentConfirmationStore");
let f = new d(a.h, {
    LOGOUT: c,
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: u,
});
