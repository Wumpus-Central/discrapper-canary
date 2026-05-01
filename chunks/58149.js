n.d(t, {
    Ay: () => F,
    H$: () => U,
    JK: () => V,
    Ou: () => v,
    QS: () => G,
    dI: () => y,
    dL: () => B,
    qL: () => x,
    zV: () => w,
});
var i = n(735438),
    a = n.n(i),
    r = n(136722),
    s = n(880527),
    l = n(24873),
    o = n(95701),
    d = n(495544),
    c = n(734057),
    _ = n(808728),
    E = n(498642),
    u = n(696451),
    A = n(317525),
    I = n(71393),
    T = n(51760),
    h = n(576705),
    S = n(290863),
    N = n(763827),
    f = n(222823),
    p = n(309010),
    m = n(967198),
    O = n(543465),
    C = n(287809),
    R = n(977997),
    g = n(954571),
    L = n(927813),
    D = n(488926),
    b = n(287146),
    M = n(652215),
    P = n(746080);
function U(e) {
    if (null == e) return null;
    let t = I.A.getGuild(e);
    if (null == t) return null;
    let n = A.A.getNumRoles(t.id),
        i = d.default.getId(),
        a = u.Ay.getMember(e, i),
        r = _.Ay.getChannels(e),
        s = r[_.I6].length,
        l = r[_.vM].length,
        o = R.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: E.A.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: n,
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(h.A.getGuildPermissions(t) ?? D.x3),
        guild_is_vip: t.features.has(M.GuildFeatures.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: (function (e) {
            let t = 0;
            for (let n in e) t += 1;
            return t;
        })(o),
    };
}
function v(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
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
            return null != t && r.zy(t.deny, M.xBc.VIEW_CHANNEL);
        };
        t = i(o.Le.has(e.type) && null != e.parent_id ? c.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (h.A.getChannelPermissions(e) ?? D.x3) : D.x3),
        channel_hidden: t,
    };
}
function G(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    if (null == t) return null;
    let n = T.Ay.isVideoEnabled(),
        i = N.A.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: i,
        ...V(t.getGuildId(), t.id, n),
        ...(0, b.V)(),
    };
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (g.default.isThrottled(e)) return;
    let i = !("location" in t) || t.location !== M.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        a = "guild_id" in t ? t.guild_id : i ? m.A.getGuildId() : null,
        r = "channel_id" in t ? t.channel_id : i ? p.A.getChannelId(a) : null,
        s = c.A.getChannel(r),
        l = null == s ? (a ?? null) : s.isPrivate() ? null : (s.getGuildId() ?? a ?? null),
        o = {
            ...t,
            ...U(l),
            ...(null != a && null != r && (0, P.jq)(r) ? { channel_static_route: r, channel_hidden: !1 } : y(s)),
        };
    g.default.track(e, o, { flush: n });
}
function x(e) {
    if ((0, P.jq)(e)) return { channel_static_route: e };
    let t = c.A.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = I.A.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = C.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return { channel_id: e, is_app_dm: n };
    }
    let i = f.Ay.getSnapshot(e, 10 * L.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: i.unread,
        channel_mention_count: i.mentionCount,
        channel_is_muted: O.Ay.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_is_spoiler: t.isSpoilerChannel(),
        channel_resolved_unread_setting: O.Ay.resolveUnreadSetting(t),
        channel_preset: (0, l.jU)(O.Ay.resolveUnreadSetting(t), O.Ay.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: i.guildUnread,
        guild_mention_count: i.guildMentionCount,
        guild_is_muted: O.Ay.isMuted(t.guild_id),
        guild_resolved_unread_setting: O.Ay.resolveGuildUnreadSetting(n),
        guild_preset: (0, l.jU)(O.Ay.resolveGuildUnreadSetting(n), O.Ay.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, s.c)(t.guild_id, e),
        can_send_message: h.A.can(M.xBc.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function V(e, t, n) {
    let i = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        a()(R.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== d.default.getId())
            .forEach((e) => {
                i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++;
            }),
        i
    );
}
function B(e, t) {
    let n = { custom_status_count: 0 };
    return (
        a()(R.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != S.A.findActivity(e.userId, (e) => e.type === M.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let F = { trackWithMetadata: w, getVoiceStateMetadata: V };
