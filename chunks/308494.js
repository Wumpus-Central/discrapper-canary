n.d(t, { s: () => a });
var i = n(265422),
    s = n(383501),
    r = n(652215);
let a = {
    binds: ["mod+shift+alt+v"],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = s.A.getGuildId(),
            n = s.A.getChannelId();
        return null != n && (0, i.i)(t ?? r.ME, n), !1;
    },
};
