var l = t(129230),
    i = t(210470),
    a = t(652215);
function r(e) {
    if ("member_channel" === e.noticeType) {
        let { channel: n } = e;
        return { guild_id: n.guild_id, channel_id: n.id, channel_type: n.type, notice_type: e.noticeType };
    }
    return { guild_id: e.guildId, notice_type: e.noticeType };
}
t.d(
    n,
    {},
    {
        Dv: function (e, n, t, r, s) {
            let d = (0, i.Dq)(r),
                u =
                    null != s
                        ? d.filter((e) => s.includedChannelIds.has(e))
                        : r.channels.filter((e) => e.eligible && e.included);
            l.default.track(a.HAw.SWP_SETTINGS_VIEWED, {
                guild_id: e,
                view: n,
                feature_key: t,
                feature_enabled: r.enabled,
                eligible_channel_count: d.length,
                included_channel_count: u.length,
            });
        },
        Ws: function (e) {
            l.default.track(a.HAw.SWP_NOTICE_VIEWED, r(e));
        },
        Yy: function (e, n) {
            l.default.track(a.HAw.SWP_NOTICE_ACTION, { ...r(e), action: n });
        },
    },
);
