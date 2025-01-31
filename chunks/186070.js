n.d(t, {
    FI: () => l,
    IL: () => r
});
var i = n(585483),
    s = n(981631);
let r = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(s.CkL.CALL_ACCEPT)) return i.S.dispatch(s.CkL.CALL_ACCEPT), !1;
        }
    },
    l = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i.S.hasSubscribers(s.CkL.CALL_START)) return i.S.dispatch(s.CkL.CALL_START, e), !1;
        }
    };
