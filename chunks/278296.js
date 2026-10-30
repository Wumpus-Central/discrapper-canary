n.d(t, { Ml: () => u, Wz: () => d, lo: () => c, pY: () => _, tR: () => l });
var i = n(478437),
    s = n(488926),
    r = n(22464),
    a = n(279116),
    o = n(652215);
let l = Object.freeze({
        [r.y.CHANNEL_SUMMARIES]: {
            key: r.y.CHANNEL_SUMMARIES,
            guildFeature: a.d.SWP_CHANNEL_SUMMARIES_DISABLED,
            channelFlag: a.D.SWP_CHANNEL_SUMMARIES_EXCLUDED,
        },
        [r.y.CHANNEL_MESSAGES]: {
            key: r.y.CHANNEL_MESSAGES,
            guildFeature: a.d.SWP_CHANNEL_MESSAGES_DISABLED,
            channelFlag: a.D.SWP_CHANNEL_MESSAGES_EXCLUDED,
        },
    }),
    c = new Set([i.r.GUILD_TEXT, i.r.GUILD_ANNOUNCEMENT, i.r.GUILD_FORUM]);
function d(e) {
    return s.MJ(o.xBc.VIEW_CHANNEL, e) && s.MJ(o.xBc.READ_MESSAGE_HISTORY, e);
}
function u(e, t) {
    return !e.features.has(t.guildFeature);
}
function _(e, t) {
    return (
        null != e &&
        null != t &&
        Object.values(l).some((n) =>
            (function (e, t, n) {
                return (
                    t.guild_id === e.id &&
                    !!u(e, n) &&
                    null == (c.has(t.type) ? (t.isNSFW() ? "nsfw" : d(t) ? null : "not_public") : "channel_type") &&
                    !t.hasFlag(n.channelFlag)
                );
            })(e, t, n),
        )
    );
}
