t.d(n, { Dv: () => c, Ws: () => u, Yy: () => s });
var l = t(174459),
    i = t(210470),
    a = t(652215);
function r(e) {
    if ("member_channel" === e.noticeType) {
        let { channel: n } = e;
        return { guild_id: n.guild_id, channel_id: n.id, channel_type: n.type, notice_type: e.noticeType };
    }
    return { guild_id: e.guildId, notice_type: e.noticeType };
}
function u(e) {
    l.default.track(a.HAw.SWP_NOTICE_VIEWED, r(e));
}
function s(e, n) {
    l.default.track(a.HAw.SWP_NOTICE_ACTION, { ...r(e), action: n });
}
function c(e, n, t, r, u) {
    let s = (0, i.Dq)(r),
        c =
            null != u
                ? s.filter((e) => u.includedChannelIds.has(e))
                : r.channels.filter((e) => e.eligible && e.included);
    l.default.track(a.HAw.SWP_SETTINGS_VIEWED, {
        guild_id: e,
        view: n,
        feature_key: t,
        feature_enabled: r.enabled,
        eligible_channel_count: s.length,
        included_channel_count: c.length,
    });
}
