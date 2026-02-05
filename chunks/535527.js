n.d(t, { K: () => a });
var i = n(966597),
    s = n(203982),
    r = n(652215);
let a = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: t } = i.A.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
        if (e && !t) return s._.dispatch(r.jej.TOGGLE_FOR_LATER), !1;
    },
};
