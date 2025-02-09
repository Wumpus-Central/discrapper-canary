t.d(n, { K: () => l });
var i = t(475468),
    r = t(19780),
    s = t(981631);
let l = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let n = r.Z.getGuildId(),
            t = r.Z.getChannelId();
        return null != t && (0, i.K)(null != n ? n : s.ME, t), !1;
    }
};
