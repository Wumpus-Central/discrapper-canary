var i = n(188567),
    r = n(652215);
n.d(
    t,
    {},
    {
        OX: {
            binds: ["ctrl+'", "ctrl+shift+'"],
            comboKeysBindGlobal: !0,
            action(e) {
                if (i._.hasSubscribers(r.jej.CALL_START)) return (i._.dispatch(r.jej.CALL_START, e), !1);
            },
        },
        Yo: {
            binds: ["mod+return"],
            comboKeysBindGlobal: !0,
            action() {
                if (i._.hasSubscribers(r.jej.CALL_ACCEPT)) return (i._.dispatch(r.jej.CALL_ACCEPT), !1);
            },
        },
    },
);
