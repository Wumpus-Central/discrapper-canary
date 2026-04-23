n.d(t, { s: () => s });
var i = n(265422),
    l = n(383501),
    r = n(652215);
let s = {
    binds: ["mod+shift+alt+v"],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = l.A.getGuildId(),
            n = l.A.getChannelId();
        return null != n && (0, i.i)(t ?? r.ME, n), !1;
    },
};
