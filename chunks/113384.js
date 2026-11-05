var i = n(855986),
    r = n(73153);
let a = [],
    s = !1,
    l = null;
class o extends i.Ay.Store {
    static displayName = "InterestPickerSessionStore";
    getPicks() {
        return [...a];
    }
    hasSeenPicker() {
        return s || a.length > 0;
    }
}
let d = new o(r.h, {
    WATERWHEELS_INTEREST_PICKER_SET_PICKS: function (e) {
        let { gameIds: t } = e;
        a = [...t];
    },
    WATERWHEELS_INTEREST_PICKER_SEEN: function () {
        s = !0;
    },
    LOGOUT: function () {
        ((a = []), (s = !1), (l = null));
    },
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        (null != l && l !== t.id && ((a = []), (s = !1)), (l = t.id));
    },
});
n.d(t, {}, { A: d });
