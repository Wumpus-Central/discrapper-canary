n.d(t, {
    A: () => c,
});
var r = n(73153),
    i = n(976860),
    l = n(837921),
    a = n(546983),
    s = n(613057),
    o = n(652215);
let c = {
    [o.e$_.OPEN_MESSAGE]: {
        scope: s.hj,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: s, pid: c },
            } = e;
            (0, a.d5)(c).context === o.BRT.OVERLAY
                ? r.h.dispatch({
                      type: "OVERLAY_OPEN_MESSAGE",
                      guildId: t,
                      channelId: n,
                      messageId: s,
                  })
                : ((0, i.bG)({
                      pathname: o.BVt.CHANNEL(t, n, s),
                  }),
                  l.Ay.focus());
        },
    },
};
