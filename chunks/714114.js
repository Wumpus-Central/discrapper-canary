i.d(t, { Ay: () => A, t$: () => S });
var E = i(17928),
    s = i(734057),
    n = i(576705),
    r = i(977997),
    l = i(818348);
let a = { ChannelStore: s.A, PermissionStore: n.A, VoiceStateStore: r.A },
    _ = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function S(e) {
    let { userId: t, guildId: i } = e,
        E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = (function (e) {
            let { userId: t, guildId: i } = e,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            return null != i && null != t
                ? E.VoiceStateStore.getDiscoverableVoiceState(i, t)
                : null != t
                  ? E.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
                  : void 0;
        })({ userId: t, guildId: i }, E),
        n = (function (e) {
            let { voiceState: t } = e,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            if (t?.channelId != null) return i.ChannelStore.getChannel(t.channelId);
        })({ voiceState: s }, E);
    return !(function (e) {
        let { voiceState: t, voiceChannel: i } = e,
            E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        return null != t && (i?.isPrivate() || E.PermissionStore.can(l.xB.VIEW_CHANNEL, i));
    })({ voiceState: s, voiceChannel: n }, E)
        ? _
        : { voiceState: s, voiceChannel: n };
}
function A(e) {
    let { userId: t, guildId: i } = e;
    return (0, E.cf)(
        [s.A, n.A, r.A],
        () => S({ userId: t, guildId: i }, { ChannelStore: s.A, PermissionStore: n.A, VoiceStateStore: r.A }),
        [i, t],
    );
}
