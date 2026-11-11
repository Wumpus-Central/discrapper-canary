var l = n(855986),
    i = n(73153),
    s = n(652215);
let r = null,
    a = {};
class o extends l.Ay.Store {
    static displayName = "CodedLinkNativeAppStateStore";
    getState(e) {
        return a[e];
    }
    getHighestState() {
        return r;
    }
}
let u = new o(i.h, {
    NATIVE_APP_MODAL_OPENING: function (e) {
        let { code: t } = e;
        ((a[t] = s.fAW.OPENING), null === r && (r = s.fAW.OPENING));
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
        let { code: t } = e;
        ((a[t] = s.fAW.OPEN), (r = s.fAW.OPEN));
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
        let { code: t } = e;
        ((a[t] = s.fAW.OPEN_FAIL), (null === r || r === s.fAW.OPENING) && (r = s.fAW.OPEN_FAIL));
    },
});
n.d(t, {}, { A: u });
