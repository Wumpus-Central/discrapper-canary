var i = n(855986),
    r = n(73153);
let a = [],
    s = !1,
    l = !1,
    o = null;
function d() {
    ((a = []), (s = !1), (l = !1));
}
class c extends i.Ay.Store {
    static displayName = "InterestPickerSessionStore";
    getPicks() {
        return [...a];
    }
    hasSeenPicker() {
        return s || a.length > 0;
    }
    isPickerOpen() {
        return l;
    }
}
let u = new c(r.h, {
    WATERWHEELS_INTEREST_PICKER_SET_PICKS: function (e) {
        let { gameIds: t } = e;
        a = [...t];
    },
    WATERWHEELS_INTEREST_PICKER_SEEN: function () {
        s = !0;
    },
    WATERWHEELS_INTEREST_PICKER_OPEN_CHANGE: function (e) {
        let { open: t } = e;
        if (l === t) return !1;
        l = t;
    },
    LOGOUT: function () {
        (d(), (o = null));
    },
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        (null != o && o !== t.id && d(), (o = t.id));
    },
});
n.d(t, {}, { A: u });
