"use strict";
n.d(t, { Ay: () => d, t$: () => c });
var i = n(17928),
    r = n(734057),
    s = n(576705),
    a = n(977997),
    o = n(818348);
let l = { ChannelStore: r.A, PermissionStore: s.A, VoiceStateStore: a.A },
    u = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
function c(e) {
    let { userId: t, guildId: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        r = (function (e) {
            let { userId: t, guildId: n } = e,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
            return null != n && null != t
                ? i.VoiceStateStore.getDiscoverableVoiceState(n, t)
                : null != t
                  ? i.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
                  : void 0;
        })({ userId: t, guildId: n }, i),
        s = (function (e) {
            let { voiceState: t } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
            if (t?.channelId != null) return n.ChannelStore.getChannel(t.channelId);
        })({ voiceState: r }, i);
    return !(function (e) {
        let { voiceState: t, voiceChannel: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
        return null != t && (n?.isPrivate() || i.PermissionStore.can(o.xB.VIEW_CHANNEL, n));
    })({ voiceState: r, voiceChannel: s }, i)
        ? u
        : { voiceState: r, voiceChannel: s };
}
function d(e) {
    let { userId: t, guildId: n } = e;
    return (0, i.cf)(
        [r.A, s.A, a.A],
        () => c({ userId: t, guildId: n }, { ChannelStore: r.A, PermissionStore: s.A, VoiceStateStore: a.A }),
        [n, t],
    );
}
