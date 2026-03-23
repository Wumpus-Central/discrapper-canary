n.d(t, { O: () => l });
var i = n(397927),
    r = n(186111),
    a = n(203982),
    s = n(652215);
let l = {
    binds: ["mod+f", "mod+shift+f"],
    comboKeysBindGlobal: !0,
    action(e, t) {
        if (r.A.hasLayers() || (0, i.ueM)()) return;
        let n = !t.includes("shift");
        return a._.dispatch(s.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
    },
};
