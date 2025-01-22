n.d(t, {
    FI: function () {
        return a;
    },
    IL: function () {
        return s;
    }
});
var i = n(585483),
    r = n(981631);
let s = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(r.CkL.CALL_ACCEPT)) return i.S.dispatch(r.CkL.CALL_ACCEPT), !1;
        }
    },
    a = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i.S.hasSubscribers(r.CkL.CALL_START)) return i.S.dispatch(r.CkL.CALL_START, e), !1;
        }
    };
