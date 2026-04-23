n.d(t, { A: () => l });
var i = n(478437),
    r = n(495544),
    a = n(734057),
    s = n(309010),
    _ = n(977997);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        l = t.getChannel(e),
        o = n.getVoiceChannelId();
    return (
        null != l &&
        (l.type === i.r.GUILD_VOICE ||
            (!!l.isPrivate() && (l.id === o || null != _.A.getVoiceStatesForChannel(l.id)[r.default.getId()])))
    );
}
