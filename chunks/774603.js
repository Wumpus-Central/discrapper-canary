n.d(t, { OX: () => s, Yo: () => r });
var i = n(625494),
    l = n(652215);
let r = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (i._.hasSubscribers(l.jej.CALL_ACCEPT)) return i._.dispatch(l.jej.CALL_ACCEPT), !1;
        },
    },
    s = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i._.hasSubscribers(l.jej.CALL_START)) return i._.dispatch(l.jej.CALL_START, e), !1;
        },
    };
