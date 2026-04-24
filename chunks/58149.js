n.d(t, {
    Ay: () => H,
    H$: () => M,
    JK: () => F,
    Ou: () => G,
    QS: () => v,
    dI: () => y,
    dL: () => V,
    qL: () => w,
    zV: () => B,
});
var i = n(735438),
    a = n.n(i),
    r = n(136722),
    _ = n(880527),
    s = n(24873),
    l = n(95701),
    o = n(495544),
    E = n(734057),
    d = n(808728),
    c = n(498642),
    u = n(696451),
    I = n(317525),
    T = n(71393),
    A = n(969341),
    S = n(576705),
    N = n(290863),
    O = n(763827),
    R = n(222823),
    f = n(309010),
    C = n(967198),
    p = n(543465),
    D = n(287809),
    L = n(977997),
    m = n(954571),
    h = n(927813),
    g = n(488926),
    U = n(287146),
    b = n(652215),
    P = n(746080);
function M(e) {
    if (null == e) return null;
    let t = T.A.getGuild(e);
    if (null == t) return null;
    let n = I.A.getNumRoles(t.id),
        i = o.default.getId(),
        a = u.Ay.getMember(e, i),
        r = d.Ay.getChannels(e),
        _ = r[d.I6].length,
        s = r[d.vM].length,
        l = L.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: c.A.getMemberCount(e),
        guild_num_channels: _ + s,
        guild_num_text_channels: _,
        guild_num_voice_channels: s,
        guild_num_roles: n,
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(S.A.getGuildPermissions(t) ?? g.x3),
        guild_is_vip: t.features.has(b.GuildFeatures.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: (function (e) {
            let t = 0;
            for (let n in e) t += 1;
            return t;
        })(l),
    };
}
function G(e) {
    if (null == e) return null;
    let t = E.A.getChannel(e);
    return null == t ? null : y(t);
}
function y(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        let i = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && r.zy(t.deny, b.xBc.VIEW_CHANNEL);
        };
        t = i(l.Le.has(e.type) && null != e.parent_id ? E.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (S.A.getChannelPermissions(e) ?? g.x3) : g.x3),
        channel_hidden: t,
    };
}
function v(e) {
    if (null == e) return null;
    let t = E.A.getChannel(e);
    if (null == t) return null;
    let n = A.Ay.isVideoEnabled(),
        i = O.A.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: i,
        ...F(t.getGuildId(), t.id, n),
        ...(0, U.V)(),
    };
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (m.default.isThrottled(e)) return;
    let i = !("location" in t) || t.location !== b.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        a = "guild_id" in t ? t.guild_id : i ? C.A.getGuildId() : null,
        r = "channel_id" in t ? t.channel_id : i ? f.A.getChannelId(a) : null,
        _ = E.A.getChannel(r),
        s = null == _ ? (a ?? null) : _.isPrivate() ? null : (_.getGuildId() ?? a ?? null),
        l = {
            ...t,
            ...M(s),
            ...(null != a && null != r && (0, P.jq)(r) ? { channel_static_route: r, channel_hidden: !1 } : y(_)),
        };
    m.default.track(e, l, { flush: n });
}
function w(e) {
    if ((0, P.jq)(e)) return { channel_static_route: e };
    let t = E.A.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = T.A.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = D.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return { channel_id: e, is_app_dm: n };
    }
    let i = R.Ay.getSnapshot(e, 10 * h.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: i.unread,
        channel_mention_count: i.mentionCount,
        channel_is_muted: p.Ay.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_is_spoiler: t.isSpoilerChannel(),
        channel_resolved_unread_setting: p.Ay.resolveUnreadSetting(t),
        channel_preset: (0, s.jU)(p.Ay.resolveUnreadSetting(t), p.Ay.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: i.guildUnread,
        guild_mention_count: i.guildMentionCount,
        guild_is_muted: p.Ay.isMuted(t.guild_id),
        guild_resolved_unread_setting: p.Ay.resolveGuildUnreadSetting(n),
        guild_preset: (0, s.jU)(p.Ay.resolveGuildUnreadSetting(n), p.Ay.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, _.c)(t.guild_id, e),
        can_send_message: S.A.can(b.xBc.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function F(e, t, n) {
    let i = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        a()(L.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== o.default.getId())
            .forEach((e) => {
                i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++;
            }),
        i
    );
}
function V(e, t) {
    let n = { custom_status_count: 0 };
    return (
        a()(L.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != N.A.findActivity(e.userId, (e) => e.type === b.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let H = { trackWithMetadata: B, getVoiceStateMetadata: F };
