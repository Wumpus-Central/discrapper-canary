n.d(t, { Z: () => g });
var i = n(677166),
    l = n(17928),
    a = n(95701),
    r = n(734057),
    s = n(317525),
    E = n(71393),
    d = n(478437),
    o = n(488926),
    u = n(22464),
    c = n(279116),
    h = n(652215);
let S = Object.freeze({
        [u.y.CHANNEL_SUMMARIES]: {
            key: u.y.CHANNEL_SUMMARIES,
            guildFeature: c.d.SWP_CHANNEL_SUMMARIES_DISABLED,
            channelFlag: c.D.SWP_CHANNEL_SUMMARIES_EXCLUDED,
        },
        [u.y.CHANNEL_MESSAGES]: {
            key: u.y.CHANNEL_MESSAGES,
            guildFeature: c.d.SWP_CHANNEL_MESSAGES_DISABLED,
            channelFlag: c.D.SWP_CHANNEL_MESSAGES_EXCLUDED,
        },
    }),
    _ = new Set([d.r.GUILD_TEXT, d.r.GUILD_ANNOUNCEMENT, d.r.GUILD_FORUM]);
function g(e, t) {
    let n,
        d =
            ((n = (0, i.C)(e?.guild_id, t)),
            (0, l.bG)(
                [E.A, s.A, r.A],
                () => {
                    var t;
                    if (!n || null == e || e.type === h.rbe.PRIVATE_THREAD) return null;
                    let i = a.Le.has(e.type) ? r.A.getChannel(e.parent_id) : e;
                    return null != i &&
                        ((t = E.A.getGuild(e.guild_id)),
                        null != t &&
                            null != i &&
                            Object.values(S).some((e) =>
                                (function (e, t, n) {
                                    return (
                                        !(t.guild_id !== e.id || e.features.has(n.guildFeature)) &&
                                        null ==
                                            (_.has(t.type)
                                                ? t.isNSFW()
                                                    ? "nsfw"
                                                    : o.MJ(h.xBc.VIEW_CHANNEL, t) && o.MJ(h.xBc.READ_MESSAGE_HISTORY, t)
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
            )),
        u = (0, i.Hg)(null != d ? e?.guild_id : null, t);
    return null != d && u;
}
