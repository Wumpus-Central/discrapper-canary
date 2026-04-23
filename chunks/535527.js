n.d(t, { K: () => s });
var i = n(966597),
    l = n(203982),
    r = n(652215);
let s = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: t } = i.A.getConfig({ location: "keybinds" });
        if (e && !t) return l._.dispatch(r.jej.TOGGLE_FOR_LATER), !1;
    },
};
