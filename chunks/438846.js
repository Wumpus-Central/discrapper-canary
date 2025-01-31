n.d(t, { K: () => l });
var i = n(475468),
    s = n(19780),
    r = n(981631);
let l = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = s.Z.getGuildId(),
            n = s.Z.getChannelId();
        return null != n && (0, i.K)(null != t ? t : r.ME, n), !1;
    }
};
