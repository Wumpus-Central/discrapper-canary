l.d(n, { Dv: () => d, Ws: () => u, Yy: () => s });
var t = l(174459),
    i = l(210470),
    a = l(652215);
function r(e) {
    if ("member_channel" === e.noticeType) {
        let { channel: n } = e;
        return { guild_id: n.guild_id, channel_id: n.id, channel_type: n.type, notice_type: e.noticeType };
    }
    return { guild_id: e.guildId, notice_type: e.noticeType };
}
function u(e) {
    t.default.track(a.HAw.SWP_NOTICE_VIEWED, r(e));
}
function s(e, n) {
    t.default.track(a.HAw.SWP_NOTICE_ACTION, { ...r(e), action: n });
}
function d(e, n, l, r, u) {
    let s = (0, i.Dq)(r),
        d =
            null != u
                ? s.filter((e) => u.includedChannelIds.has(e))
                : r.channels.filter((e) => e.eligible && e.included);
    t.default.track(a.HAw.SWP_SETTINGS_VIEWED, {
        guild_id: e,
        view: n,
        feature_key: l,
        feature_enabled: r.enabled,
        eligible_channel_count: s.length,
        included_channel_count: d.length,
    });
}
