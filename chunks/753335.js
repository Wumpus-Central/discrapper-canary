n.d(t, { Z: () => d });
var i = n(570140),
    l = n(703656),
    r = n(998502),
    a = n(852926),
    s = n(186901),
    o = n(981631);
let d = {
    [o.Etm.OPEN_MESSAGE]: {
        scope: s.lH,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: s, pid: d }
            } = e;
            if ((0, a.jU)(d).context === o.IlC.OVERLAY) {
                i.Z.dispatch({
                    type: 'OVERLAY_OPEN_MESSAGE',
                    guildId: t,
                    channelId: n,
                    messageId: s
                });
                return;
            }
            (0, l.dL)({ pathname: o.Z5c.CHANNEL(t, n, s) }), r.ZP.focus();
        }
    }
};
