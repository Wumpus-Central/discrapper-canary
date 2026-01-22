n.d(t, {
    OX: () => s,
    Yo: () => a,
});
var r = n(203982),
    i = n(652215);
let a = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (r._.hasSubscribers(i.jej.CALL_ACCEPT)) return r._.dispatch(i.jej.CALL_ACCEPT), !1;
        },
    },
    s = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (r._.hasSubscribers(i.jej.CALL_START)) return r._.dispatch(i.jej.CALL_START, e), !1;
        },
    };
