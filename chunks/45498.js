n.d(t, { F: () => S });
var i = n(17928),
    s = n(95701),
    a = n(734057),
    l = n(317525),
    r = n(71393),
    c = n(478437),
    o = n(488926),
    u = n(22464),
    d = n(279116),
    A = n(652215);
let _ = Object.freeze({
        [u.y.CHANNEL_SUMMARIES]: {
            key: u.y.CHANNEL_SUMMARIES,
            guildFeature: d.d.SWP_CHANNEL_SUMMARIES_DISABLED,
            channelFlag: d.D.SWP_CHANNEL_SUMMARIES_EXCLUDED,
        },
        [u.y.CHANNEL_MESSAGES]: {
            key: u.y.CHANNEL_MESSAGES,
            guildFeature: d.d.SWP_CHANNEL_MESSAGES_DISABLED,
            channelFlag: d.D.SWP_CHANNEL_MESSAGES_EXCLUDED,
        },
    }),
    E = new Set([c.r.GUILD_TEXT, c.r.GUILD_ANNOUNCEMENT, c.r.GUILD_FORUM]);
var p = n(677166);
function S(e, t) {
    let n = (0, p.C)(e?.guild_id, t);
    return (0, i.bG)(
        [r.A, l.A, a.A],
        () => {
            var t;
            if (!n || null == e || e.type === A.rbe.PRIVATE_THREAD) return null;
            let i = s.Le.has(e.type) ? a.A.getChannel(e.parent_id) : e;
            return null != i &&
                ((t = r.A.getGuild(e.guild_id)),
                null != t &&
                    null != i &&
                    Object.values(_).some((e) =>
                        (function (e, t, n) {
                            return (
                                !(t.guild_id !== e.id || e.features.has(n.guildFeature)) &&
                                null ==
                                    (E.has(t.type)
                                        ? t.isNSFW()
                                            ? "nsfw"
                                            : o.MJ(A.xBc.VIEW_CHANNEL, t) && o.MJ(A.xBc.READ_MESSAGE_HISTORY, t)
                                              ? null
                                              : "not_public"
                                        : "channel_type") &&
                                !t.hasFlag(n.channelFlag)
                            );
                        })(t, i, e),
                    ))
                ? i.id
                : null;
        },
        [n, e],
    );
}
