n.d(t, { F: () => o });
var i = n(925549),
    r = n(475468),
    s = n(19780),
    l = n(944486),
    a = n(981631);
let o = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!s.Z.isConnected()) return !1;
        let t = null != (e = s.Z.getGuildId()) ? e : a.ME,
            n = l.Z.getChannelId(t);
        return (0, r.K)(t, n), i.Z.channelListScrollTo(t, s.Z.getChannelId()), !1;
    }
};
