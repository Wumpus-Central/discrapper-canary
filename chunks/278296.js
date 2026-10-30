n.d(t, { pY: () => d });
var i = n(478437),
    s = n(488926),
    a = n(22464),
    r = n(279116),
    l = n(652215);
let o = Object.freeze({
        [a.y.CHANNEL_SUMMARIES]: {
            key: a.y.CHANNEL_SUMMARIES,
            guildFeature: r.d.SWP_CHANNEL_SUMMARIES_DISABLED,
            channelFlag: r.D.SWP_CHANNEL_SUMMARIES_EXCLUDED,
        },
        [a.y.CHANNEL_MESSAGES]: {
            key: a.y.CHANNEL_MESSAGES,
            guildFeature: r.d.SWP_CHANNEL_MESSAGES_DISABLED,
            channelFlag: r.D.SWP_CHANNEL_MESSAGES_EXCLUDED,
        },
    }),
    c = new Set([i.r.GUILD_TEXT, i.r.GUILD_ANNOUNCEMENT, i.r.GUILD_FORUM]);
function d(e, t) {
    return (
        null != e &&
        null != t &&
        Object.values(o).some((n) =>
            (function (e, t, n) {
                var i;
                if (t.guild_id !== e.id || e.features.has(n.guildFeature)) return !1;
                return (
                    null ==
                        (c.has(t.type)
                            ? t.isNSFW()
                                ? "nsfw"
                                : ((i = t), s.MJ(l.xBc.VIEW_CHANNEL, i) && s.MJ(l.xBc.READ_MESSAGE_HISTORY, i))
                                  ? null
                                  : "not_public"
                            : "channel_type") && !t.hasFlag(n.channelFlag)
                );
            })(e, t, n),
        )
    );
}
