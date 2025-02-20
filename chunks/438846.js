n.d(t, { K: () => a });
var r = n(475468),
    i = n(19780),
    s = n(981631);
let a = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = i.Z.getGuildId(),
            n = i.Z.getChannelId();
        return null != n && (0, r.K)(null != t ? t : s.ME, n), !1;
    }
};
