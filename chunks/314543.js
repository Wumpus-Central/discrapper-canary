n.d(t, { Z: () => c });
var r = n(442837),
    i = n(570140);
let a = !1;
function o(e) {
    var t;
    a = null != (t = e.disabled) && t;
}
function s() {
    a = !1;
}
class l extends r.ZP.Store {
    isTogglesDisabled() {
        return a;
    }
}
let c = new l(i.Z, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: o,
    CONNECTION_OPEN: s,
    LOGOUT: s,
});
