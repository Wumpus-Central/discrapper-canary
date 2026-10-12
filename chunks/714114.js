t.d(i, { Ay: () => h, t$: () => o });
var s = t(17928),
    n = t(734057),
    r = t(576705),
    l = t(977997),
    a = t(818348);
let c = { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: l.A },
    d = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function o(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
        t = (function (e) {
            let { userId: i, guildId: t, includeNonDiscoverable: s = !1 } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return null != t && null != i
                ? s
                    ? n.VoiceStateStore.getVoiceState(t, i)
                    : n.VoiceStateStore.getDiscoverableVoiceState(t, i)
                : null != i
                  ? s
                      ? n.VoiceStateStore.getVoiceStateForUser(i)
                      : n.VoiceStateStore.getDiscoverableVoiceStateForUser(i)
                  : void 0;
        })(e, i),
        s = (function (e) {
            let { voiceState: i } = e,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            if (i?.channelId != null) return t.ChannelStore.getChannel(i.channelId);
        })({ voiceState: t }, i);
    return !(function (e) {
        let { voiceState: i, voiceChannel: t } = e,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
        return null != i && (t?.isPrivate() || s.PermissionStore.can(a.xB.VIEW_CHANNEL, t));
    })({ voiceState: t, voiceChannel: s }, i)
        ? d
        : { voiceState: t, voiceChannel: s };
}
function h(e) {
    let { userId: i, guildId: t, includeNonDiscoverable: a } = e;
    return (0, s.cf)(
        [n.A, r.A, l.A],
        () =>
            o(
                { userId: i, guildId: t, includeNonDiscoverable: a },
                { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: l.A },
            ),
        [t, i, a],
    );
}
