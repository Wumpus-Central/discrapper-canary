n.d(t, { Z: () => c });
var r = n(570140),
    i = n(703656),
    l = n(998502),
    a = n(852926),
    s = n(186901),
    o = n(981631);
let c = {
    [o.Etm.OPEN_MESSAGE]: {
        scope: s.lH,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: s, pid: c },
            } = e;
            if ((0, a.jU)(c).context === o.IlC.OVERLAY)
                return void r.Z.dispatch({
                    type: "OVERLAY_OPEN_MESSAGE",
                    guildId: t,
                    channelId: n,
                    messageId: s,
                });
            (0, i.dL)({ pathname: o.Z5c.CHANNEL(t, n, s) }), l.ZP.focus();
        },
    },
};
