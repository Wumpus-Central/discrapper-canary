n.d(t, { OX: () => a, Yo: () => r });
var i = n(203982),
    s = n(652215);
let r = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (i._.hasSubscribers(s.jej.CALL_ACCEPT)) return i._.dispatch(s.jej.CALL_ACCEPT), !1;
        },
    },
    a = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i._.hasSubscribers(s.jej.CALL_START)) return i._.dispatch(s.jej.CALL_START, e), !1;
        },
    };
