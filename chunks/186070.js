n.d(t, {
    FI: () => o,
    IL: () => a,
});
var r = n(585483),
    i = n(981631);
let a = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (r.S.hasSubscribers(i.CkL.CALL_ACCEPT)) return r.S.dispatch(i.CkL.CALL_ACCEPT), !1;
        },
    },
    o = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (r.S.hasSubscribers(i.CkL.CALL_START)) return r.S.dispatch(i.CkL.CALL_START, e), !1;
        },
    };
