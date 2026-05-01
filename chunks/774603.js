n.d(t, { OX: () => r, Yo: () => s });
var i = n(625494),
    l = n(652215);
let s = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (i._.hasSubscribers(l.jej.CALL_ACCEPT)) return i._.dispatch(l.jej.CALL_ACCEPT), !1;
        },
    },
    r = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i._.hasSubscribers(l.jej.CALL_START)) return i._.dispatch(l.jej.CALL_START, e), !1;
        },
    };
