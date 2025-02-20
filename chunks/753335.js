n.d(t, { Z: () => c });
var r = n(570140),
    i = n(703656),
    l = n(998502),
    o = n(852926),
    a = n(186901),
    s = n(981631);
let c = {
    [s.Etm.OPEN_MESSAGE]: {
        scope: a.lH,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: a, pid: c }
            } = e;
            if ((0, o.jU)(c).context === s.IlC.OVERLAY) {
                r.Z.dispatch({
                    type: 'OVERLAY_OPEN_MESSAGE',
                    guildId: t,
                    channelId: n,
                    messageId: a
                });
                return;
            }
            (0, i.dL)({ pathname: s.Z5c.CHANNEL(t, n, a) }), l.ZP.focus();
        }
    }
};
