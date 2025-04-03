n.d(t, { Z: () => c });
var r = n(570140),
    i = n(703656),
    l = n(998502),
    a = n(852926),
    o = n(186901),
    s = n(981631);
let c = {
    [s.Etm.OPEN_MESSAGE]: {
        scope: o.lH,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: o, pid: c }
            } = e;
            if ((0, a.jU)(c).context === s.IlC.OVERLAY)
                return void r.Z.dispatch({
                    type: 'OVERLAY_OPEN_MESSAGE',
                    guildId: t,
                    channelId: n,
                    messageId: o
                });
            (0, i.dL)({ pathname: s.Z5c.CHANNEL(t, n, o) }), l.ZP.focus();
        }
    }
};
