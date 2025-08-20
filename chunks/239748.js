n.d(t, { F: () => l });
var r = n(925549),
    i = n(475468),
    a = n(19780),
    o = n(944486),
    s = n(981631);
let l = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!a.Z.isConnected()) return !1;
        let t = null != (e = a.Z.getGuildId()) ? e : s.ME,
            n = o.Z.getChannelId(t);
        return (0, i.K)(t, n), r.Z.channelListScrollTo(t, a.Z.getChannelId()), !1;
    },
};
