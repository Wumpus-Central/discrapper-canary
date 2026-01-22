n.d(t, {
    s: () => s,
});
var r = n(265422),
    i = n(383501),
    a = n(652215);
let s = {
    binds: ["mod+shift+alt+v"],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = i.A.getGuildId(),
            n = i.A.getChannelId();
        return null != n && (0, r.i)(null != t ? t : a.ME, n), !1;
    },
};
