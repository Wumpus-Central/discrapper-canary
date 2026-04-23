t.d(n, { x: () => u });
var l = t(284009),
    i = t.n(l),
    a = t(827343),
    s = t(956793),
    r = t(430452),
    o = t(108713),
    c = t(350701);
function u(e, n) {
    let t = e.sessionId ?? "";
    (0, o.Fc)(t), (0, o.ZG)();
    let l = n ?? e.channelId;
    i()(null != l, "attempted to transfer to unknown channel"),
        e.selfMute !== r.Ay.isSelfMute() && a.A.toggleSelfMute(),
        e.selfDeaf !== r.Ay.isSelfDeaf() && a.A.toggleSelfDeaf(),
        (0, c.A)(l, "discord_client", t),
        s.default.selectVoiceChannel(l, !1);
}
