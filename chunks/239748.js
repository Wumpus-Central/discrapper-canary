n.d(t, { F: () => o });
var r = n(925549),
    i = n(475468),
    s = n(19780),
    a = n(944486),
    l = n(981631);
let o = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!s.Z.isConnected()) return !1;
        let t = null != (e = s.Z.getGuildId()) ? e : l.ME,
            n = a.Z.getChannelId(t);
        return (0, i.K)(t, n), r.Z.channelListScrollTo(t, s.Z.getChannelId()), !1;
    }
};
