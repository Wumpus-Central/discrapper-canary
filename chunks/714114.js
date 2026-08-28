i.d(t, { Ay: () => u, t$: () => d });
var s = i(17928),
    n = i(734057),
    r = i(576705),
    l = i(977997),
    a = i(818348);
let c = { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: l.A },
    o = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function d(e) {
    let { userId: t, guildId: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
        n = (function (e) {
            let { userId: t, guildId: i } = e,
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return null != i && null != t
                ? s.VoiceStateStore.getDiscoverableVoiceState(i, t)
                : null != t
                  ? s.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
                  : void 0;
        })({ userId: t, guildId: i }, s),
        r = (function (e) {
            let { voiceState: t } = e,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            if (t?.channelId != null) return i.ChannelStore.getChannel(t.channelId);
        })({ voiceState: n }, s);
    return !(function (e) {
        let { voiceState: t, voiceChannel: i } = e,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
        return null != t && (i?.isPrivate() || s.PermissionStore.can(a.xB.VIEW_CHANNEL, i));
    })({ voiceState: n, voiceChannel: r }, s)
        ? o
        : { voiceState: n, voiceChannel: r };
}
function u(e) {
    let { userId: t, guildId: i } = e;
    return (0, s.cf)(
        [n.A, r.A, l.A],
        () => d({ userId: t, guildId: i }, { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: l.A }),
        [i, t],
    );
}
