n.d(t, { K: () => o });
var r = n(475468),
    i = n(19780),
    a = n(981631);
let o = {
    binds: ["mod+shift+alt+v"],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = i.Z.getGuildId(),
            n = i.Z.getChannelId();
        return null != n && (0, r.K)(null != t ? t : a.ME, n), !1;
    },
};
