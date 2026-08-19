n.d(t, { Ay: () => d, t$: () => c });
var i = n(17928),
    s = n(734057),
    a = n(576705),
    l = n(977997),
    r = n(818348);
let E = { ChannelStore: s.A, PermissionStore: a.A, VoiceStateStore: l.A },
    o = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function c(e) {
    let { userId: t, guildId: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
        s = (function (e) {
            let { userId: t, guildId: n } = e,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
            return null != n && null != t
                ? i.VoiceStateStore.getDiscoverableVoiceState(n, t)
                : null != t
                  ? i.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
                  : void 0;
        })({ userId: t, guildId: n }, i),
        a = (function (e) {
            let { voiceState: t } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
            if (t?.channelId != null) return n.ChannelStore.getChannel(t.channelId);
        })({ voiceState: s }, i);
    return !(function (e) {
        let { voiceState: t, voiceChannel: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
        return null != t && (n?.isPrivate() || i.PermissionStore.can(r.xB.VIEW_CHANNEL, n));
    })({ voiceState: s, voiceChannel: a }, i)
        ? o
        : { voiceState: s, voiceChannel: a };
}
function d(e) {
    let { userId: t, guildId: n } = e;
    return (0, i.cf)(
        [s.A, a.A, l.A],
        () => c({ userId: t, guildId: n }, { ChannelStore: s.A, PermissionStore: a.A, VoiceStateStore: l.A }),
        [n, t],
    );
}
