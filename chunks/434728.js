n.d(t, { O: () => o });
var i = n(192308),
    l = n(186111),
    r = n(203982),
    s = n(652215);
let o = {
    binds: ["mod+f", "mod+shift+f"],
    comboKeysBindGlobal: !0,
    action(e, t) {
        if (l.A.hasLayers() || (0, i.hasAnyModalOpen)()) return;
        let n = !t.includes("shift");
        return r._.dispatch(s.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
    },
};
