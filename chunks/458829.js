n.d(t, { x: () => c });
var i = n(284009),
    l = n.n(i),
    s = n(827343),
    a = n(956793),
    r = n(430452),
    o = n(108713),
    d = n(350701);
function c(e, t) {
    let n = e.sessionId ?? "";
    (0, o.Fc)(n), (0, o.ZG)();
    let i = t ?? e.channelId;
    l()(null != i, "attempted to transfer to unknown channel"),
        e.selfMute !== r.Ay.isSelfMute() && s.A.toggleSelfMute(),
        e.selfDeaf !== r.Ay.isSelfDeaf() && s.A.toggleSelfDeaf(),
        (0, d.A)(i, "discord_client", n),
        a.default.selectVoiceChannel(i, !1);
}
