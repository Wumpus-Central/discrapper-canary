n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153);
let a = !0,
    s = null;
class l extends i.Ay.Store {
    static displayName = "PinotMemberSettingStore";
    isLocked() {
        return a;
    }
    defaultsToOptedOut() {
        return s ?? !0;
    }
}
let o = new l(r.h, {
    PINOT_MEMBER_SETTING_STATE: function (e) {
        ((a = e.locked), (s = e.defaultOptedOut));
    },
    LOGOUT: function () {
        ((a = !0), (s = null));
    },
});
