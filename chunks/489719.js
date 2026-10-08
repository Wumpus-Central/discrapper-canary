n.d(t, { A: () => a });
var i = n(873727),
    r = n(284009),
    l = n.n(r),
    s = n(991690);
function a(e, t) {
    var n;
    let r;
    return {
        instance_id: "example-cl-instance",
        platform: t,
        discord_proxy_ticket: e.data.proxyTicket,
        ...((n = e.data),
        (r = {}),
        n.launch?.customId != null && (r.custom_id = n.launch.customId),
        n.launch?.referrerId != null && (r.referrer_id = n.launch.referrerId),
        r),
        ...(0, i._n)(),
        ...(function (e) {
            let t = String(e.type);
            switch (e.type) {
                case s.U.MAIN:
                case s.U.OVERLAY:
                    return { surface: t };
                case s.U.APP_CHANNEL:
                case s.U.VOICE_CHANNEL:
                    let n = { surface: t, channel_id: e.channelId };
                    return (null != e.guildId && (n.guild_id = e.guildId), n);
                case s.U.INTERACTION_MODAL:
                    return (l()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface"), { surface: t });
                default:
                    return { surface: t };
            }
        })(e.surface),
    };
}
