n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = { isDisplayingWowMomentConfirmation: !1 };
function l() {
    s = { isDisplayingWowMomentConfirmation: !1 };
}
function c() {
    l();
}
function u(e) {
    let { value: t } = e;
    s.isDisplayingWowMomentConfirmation = t;
}
class d extends (r = i.ZP.Store) {
    getState() {
        return s;
    }
    get isDisplayingWowMomentConfirmation() {
        return s.isDisplayingWowMomentConfirmation;
    }
}
a(d, "displayName", "WowMomentConfirmationStore");
let f = new d(o.Z, {
    LOGOUT: c,
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: u,
});
