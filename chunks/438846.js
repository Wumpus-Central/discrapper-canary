n.d(t, { K: () => l });
var i = n(475468),
    r = n(19780),
    s = n(981631);
let l = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = r.Z.getGuildId(),
            n = r.Z.getChannelId();
        return null != n && (0, i.K)(null != t ? t : s.ME, n), !1;
    }
};
