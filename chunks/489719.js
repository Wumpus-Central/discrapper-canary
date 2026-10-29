n.d(t, { v: () => o });
var i = n(727522),
    r = n(873727),
    l = n(284009),
    s = n.n(l),
    a = n(991690);
function o(e, t) {
    let n = (0, i.useMemoOne)(() => (0, r._n)(), [e.data.url]);
    return (function (e, t) {
        var n;
        let i,
            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r._n)();
        return {
            instance_id: "example-cl-instance",
            platform: t,
            discord_proxy_ticket: e.data.proxyTicket,
            ...((n = e.data),
            (i = {}),
            n.launch?.customId != null && (i.custom_id = n.launch.customId),
            n.launch?.referrerId != null && (i.referrer_id = n.launch.referrerId),
            i),
            ...l,
            ...(function (e) {
                let t = String(e.type);
                switch (e.type) {
                    case a.U.MAIN:
                    case a.U.OVERLAY:
                        return { surface: t };
                    case a.U.APP_CHANNEL:
                    case a.U.VOICE_CHANNEL:
                        let n = { surface: t, channel_id: e.channelId };
                        return (null != e.guildId && (n.guild_id = e.guildId), n);
                    case a.U.INTERACTION_MODAL:
                        return (s()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface"), { surface: t });
                    default:
                        return { surface: t };
                }
            })(e.surface),
        };
    })(e, t, n);
}
