(n.d(t, { q: () => S }), n(938796));
var i = n(665260),
    r = n(734057),
    a = n(696451),
    s = n(71393),
    l = n(701785),
    o = n(65995),
    d = n(707167),
    c = n(652215),
    u = n(340837);
n(801541);
var _ = n(889137),
    E = n(790782);
function A(e, t) {
    return (0, _.YW)([t, e])
        .with([c.orn.ALL_MESSAGES, E.e.ALL_MESSAGES], () => "all_messages")
        .with([c.orn.ONLY_MENTIONS, E.e.UNSET], () => "mentions")
        .with([c.orn.ONLY_MENTIONS, E.e.ONLY_MENTIONS], () => "mentions")
        .with([c.orn.NO_MESSAGES, E.e.UNSET], () => "nothing")
        .with([c.orn.NO_MESSAGES, E.e.ONLY_MENTIONS], () => "nothing")
        .otherwise(() => "custom");
}
n(105292);
var h = n(576705),
    f = n(573163),
    I = n(543465),
    p = n(287809),
    T = n(927813),
    m = n(666860),
    g = n(746080);
function S(e) {
    var t;
    let n, _;
    if ((0, g.jq)(e)) return { channel_static_route: e };
    let E = r.A.getChannel(e);
    if (null == E) return { channel_id: e };
    let S = s.A.getGuild(E.guild_id);
    if (null == S) {
        let t = !1;
        if (E.isDM()) {
            let e = p.default.getUser(E.recipients[0]);
            null != e && (t = e.bot);
        }
        let n = E.isDM() || E.isGroupDM() ? (0, m.g4)(E.recipients) : null;
        return {
            channel_id: e,
            is_app_dm: t,
            ...(null != n
                ? { friend_recipient_count: n.friendCount, non_friend_recipient_count: n.nonFriendCount }
                : null),
        };
    }
    let N = f.Ay.getSnapshot(e, 10 * T.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: N.unread,
        channel_mention_count: N.mentionCount,
        channel_is_muted: I.Ay.isChannelMuted(E.guild_id, E.id),
        channel_is_nsfw: E.isNSFW(),
        channel_is_spoiler: E.isSpoilerChannel(),
        channel_resolved_unread_setting: I.Ay.resolveUnreadSetting(E),
        channel_preset: A(I.Ay.resolveUnreadSetting(E), I.Ay.resolvedMessageNotifications(E)),
        guild_id: E.guild_id,
        guild_was_unread: N.guildUnread,
        guild_mention_count: N.guildMentionCount,
        guild_is_muted: I.Ay.isMuted(E.guild_id),
        guild_resolved_unread_setting: I.Ay.resolveGuildUnreadSetting(S),
        guild_preset: A(I.Ay.resolveGuildUnreadSetting(S), I.Ay.getMessageNotifications(E.guild_id)),
        parent_id: E.parent_id,
        parent_channel_type: E.parentChannelThreadType,
        has_pending_member_action:
            ((t = E.guild_id),
            (n = s.A.getGuild(t)),
            (_ = r.A.getChannel(e)),
            null != n &&
                null != _ &&
                (0, d.A)(n) &&
                n.features.has(c.GuildFeatures.GUILD_SERVER_GUIDE) &&
                !i.Lt(a.Ay.getSelfMember(n.id)?.flags ?? 0, u.D.COMPLETED_HOME_ACTIONS) &&
                l.h.hasMemberAction(n.id, _.id) &&
                !o.A.hasCompletedActionForChannel(n.id, _.id)),
        can_send_message: h.A.can(c.xBc.SEND_MESSAGES, E),
        is_app_dm: !1,
        ...((E.type === c.rbe.GUILD_APP || E.isGuildVocal()) && null != E.application_id
            ? { application_id: E.application_id }
            : null),
    };
}
