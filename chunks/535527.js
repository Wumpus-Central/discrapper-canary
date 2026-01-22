n.d(t, { K: () => s });
var r = n(966597),
    i = n(203982),
    a = n(652215);
let s = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: t } = r.A.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
        if (e && !t) return i._.dispatch(a.jej.TOGGLE_FOR_LATER), !1;
    },
};
