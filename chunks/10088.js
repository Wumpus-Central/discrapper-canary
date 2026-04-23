s.d(l, { A: () => d });
var t = s(17928),
    c = s(228366),
    e = s(652215);
let i = null,
    f = {};
class r extends t.Ay.Store {
    static displayName = "CodedLinkNativeAppStateStore";
    getState(a) {
        return f[a];
    }
    getHighestState() {
        return i;
    }
}
let d = new r(c.h, {
    NATIVE_APP_MODAL_OPENING: function (a) {
        let { code: l } = a;
        (f[l] = e.fAW.OPENING), null === i && (i = e.fAW.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (a) {
        let { code: l } = a;
        (f[l] = e.fAW.OPEN), (i = e.fAW.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (a) {
        let { code: l } = a;
        (f[l] = e.fAW.OPEN_FAIL), (null === i || i === e.fAW.OPENING) && (i = e.fAW.OPEN_FAIL);
    },
});
