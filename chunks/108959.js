n.d(t, { A: () => l });
var r = n(478437),
    i = n(961350),
    a = n(734057),
    s = n(309010),
    o = n(977997);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        l = t.getChannel(e),
        c = n.getVoiceChannelId();
    return (
        null != l &&
        (l.type === r.r.GUILD_VOICE ||
            (!!l.isPrivate() && (l.id === c || null != o.A.getVoiceStatesForChannel(l.id)[i.default.getId()])))
    );
}
