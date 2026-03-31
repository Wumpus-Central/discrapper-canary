n.d(t, { x: () => d });
var i = n(284009),
    l = n.n(i),
    s = n(827343),
    a = n(956793),
    r = n(430452),
    o = n(108713),
    c = n(350701);
function d(e, t) {
    let n = e.sessionId ?? "";
    (0, o.Fc)(n), (0, o.ZG)();
    let i = t ?? e.channelId;
    l()(null != i, "attempted to transfer to unknown channel"),
        e.selfMute !== r.Ay.isSelfMute() && s.A.toggleSelfMute(),
        e.selfDeaf !== r.Ay.isSelfDeaf() && s.A.toggleSelfDeaf(),
        (0, c.A)(i, "discord_client", n),
        a.default.selectVoiceChannel(i, !1);
}
