i.d(t, { Ay: () => h, t$: () => o });
var s = i(17928),
    n = i(734057),
    r = i(576705),
    l = i(977997),
    a = i(818348);
let c = { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: l.A },
    d = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
        i = (function (e) {
            let { userId: t, guildId: i, includeNonDiscoverable: s = !1 } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return null != i && null != t
                ? s
                    ? n.VoiceStateStore.getVoiceState(i, t)
                    : n.VoiceStateStore.getDiscoverableVoiceState(i, t)
                : null != t
                  ? s
                      ? n.VoiceStateStore.getVoiceStateForUser(t)
                      : n.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
                  : void 0;
        })(e, t),
        s = (function (e) {
            let { voiceState: t } = e,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            if (t?.channelId != null) return i.ChannelStore.getChannel(t.channelId);
        })({ voiceState: i }, t);
    return !(function (e) {
        let { voiceState: t, voiceChannel: i } = e,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
        return null != t && (i?.isPrivate() || s.PermissionStore.can(a.xB.VIEW_CHANNEL, i));
    })({ voiceState: i, voiceChannel: s }, t)
        ? d
        : { voiceState: i, voiceChannel: s };
}
function h(e) {
    let { userId: t, guildId: i, includeNonDiscoverable: a } = e;
    return (0, s.cf)(
        [n.A, r.A, l.A],
        () =>
            o(
                { userId: t, guildId: i, includeNonDiscoverable: a },
                { ChannelStore: n.A, PermissionStore: r.A, VoiceStateStore: l.A },
            ),
        [i, t, a],
    );
}
