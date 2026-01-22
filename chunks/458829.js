n.d(t, { x: () => u });
var r = n(284009),
    l = n.n(r),
    i = n(827343),
    a = n(956793),
    s = n(430452),
    o = n(108713),
    c = n(350701);
function u(e, t) {
    var n;
    let r = null != (n = e.sessionId) ? n : "";
    (0, o.Fc)(r), (0, o.ZG)();
    let u = null != t ? t : e.channelId;
    l()(null != u, "attempted to transfer to unknown channel"),
        e.selfMute !== s.A.isSelfMute() && i.A.toggleSelfMute(),
        e.selfDeaf !== s.A.isSelfDeaf() && i.A.toggleSelfDeaf(),
        (0, c.A)(u, "discord_client", r),
        a.default.selectVoiceChannel(u, !1);
}
