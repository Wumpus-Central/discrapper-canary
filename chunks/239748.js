n.d(t, { F: () => o });
var i = n(925549),
    s = n(475468),
    r = n(19780),
    l = n(944486),
    a = n(981631);
let o = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!r.Z.isConnected()) return !1;
        let t = null !== (e = r.Z.getGuildId()) && void 0 !== e ? e : a.ME,
            n = l.Z.getChannelId(t);
        return (0, s.K)(t, n), i.Z.channelListScrollTo(t, r.Z.getChannelId()), !1;
    }
};
