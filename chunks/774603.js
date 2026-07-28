"use strict";
n.d(t, { OX: () => s, Yo: () => a });
var i = n(625494),
    r = n(652215);
let a = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (i._.hasSubscribers(r.jej.CALL_ACCEPT)) return i._.dispatch(r.jej.CALL_ACCEPT), !1;
        },
    },
    s = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i._.hasSubscribers(r.jej.CALL_START)) return i._.dispatch(r.jej.CALL_START, e), !1;
        },
    };
