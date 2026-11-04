var i = n(855986),
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
n.d(t, {}, { A: o });
