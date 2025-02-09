t.d(n, { F: () => a });
var i = t(925549),
    r = t(475468),
    s = t(19780),
    l = t(944486),
    o = t(981631);
let a = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!s.Z.isConnected()) return !1;
        let n = null !== (e = s.Z.getGuildId()) && void 0 !== e ? e : o.ME,
            t = l.Z.getChannelId(n);
        return (0, r.K)(n, t), i.Z.channelListScrollTo(n, s.Z.getChannelId()), !1;
    }
};
