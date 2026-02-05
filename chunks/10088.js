n.d(t, { A: () => d });
var i = n(311907),
    r = n(73153),
    a = n(652215);
let l = null,
    s = {};
class o extends i.Ay.Store {
    static displayName = "CodedLinkNativeAppStateStore";
    getState(e) {
        return s[e];
    }
    getHighestState() {
        return l;
    }
}
let d = new o(r.h, {
    NATIVE_APP_MODAL_OPENING: function (e) {
        let { code: t } = e;
        (s[t] = a.fAW.OPENING), null === l && (l = a.fAW.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
        let { code: t } = e;
        (s[t] = a.fAW.OPEN), (l = a.fAW.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
        let { code: t } = e;
        (s[t] = a.fAW.OPEN_FAIL), (null === l || l === a.fAW.OPENING) && (l = a.fAW.OPEN_FAIL);
    },
});
