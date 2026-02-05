"use strict";
n.d(t, {
    Ay: () => H,
    H$: () => x,
    JK: () => B,
    Ou: () => M,
    QS: () => U,
    dI: () => k,
    dL: () => j,
    qL: () => F,
    zV: () => V,
});
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(880527),
    o = n(24873),
    l = n(95701),
    u = n(961350),
    c = n(734057),
    d = n(808728),
    _ = n(498642),
    f = n(696451),
    p = n(317525),
    h = n(71393),
    m = n(430452),
    g = n(576705),
    E = n(290863),
    A = n(383501),
    I = n(222823),
    T = n(309010),
    y = n(967198),
    S = n(543465),
    v = n(287809),
    C = n(977997),
    b = n(954571),
    N = n(927813),
    R = n(488926),
    O = n(287146),
    D = n(652215),
    L = n(746080);
function w(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function x(e) {
    if (null == e) return null;
    let t = h.A.getGuild(e);
    if (null == t) return null;
    let n = p.A.getNumRoles(t.id),
        r = u.default.getId(),
        i = f.Ay.getMember(e, r),
        a = d.Ay.getChannels(e),
        s = a[d.I6].length,
        o = a[d.vM].length,
        l = C.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: _.A.getMemberCount(e),
        guild_num_channels: s + o,
        guild_num_text_channels: s,
        guild_num_voice_channels: o,
        guild_num_roles: n,
        guild_member_num_roles: null != i ? i.roles.length : 0,
        guild_member_perms: String(g.A.getGuildPermissions(t) ?? R.x3),
        guild_is_vip: t.features.has(D.GuildFeatures.VIP_REGIONS),
        is_member: null != i,
        num_voice_channels_active: w(l),
    };
}
function P(e, t) {
    return { channel_static_route: t, channel_hidden: !1 };
}
function M(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    return null == t ? null : k(t);
}
function k(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        let r = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && a.zy(t.deny, D.xBc.VIEW_CHANNEL);
        };
        t = r(l.Le.has(e.type) && null != e.parent_id ? c.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (g.A.getChannelPermissions(e) ?? R.x3) : R.x3),
        channel_hidden: t,
    };
}
function U(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    if (null == t) return null;
    let n = m.A.isVideoEnabled(),
        r = A.A.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: r,
        ...B(t.getGuildId(), t.id, n),
        ...(0, O.V)(),
    };
}
function G(e, t) {
    return null == e ? (t ?? null) : e.isPrivate() ? null : (e.getGuildId() ?? t ?? null);
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (b.default.isThrottled(e)) return;
    let r = !("location" in t) || t.location !== D.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        i = "guild_id" in t ? t.guild_id : r ? y.A.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : r ? T.A.getChannelId(i) : null,
        s = c.A.getChannel(a),
        o = G(s, i),
        l = { ...t, ...x(o), ...(null != i && null != a && (0, L.jq)(a) ? P(i, a) : k(s)) };
    b.default.track(e, l, { flush: n });
}
function F(e) {
    if ((0, L.jq)(e)) return { channel_static_route: e };
    let t = c.A.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = h.A.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = v.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return { channel_id: e, is_app_dm: n };
    }
    let r = I.Ay.getSnapshot(e, 10 * N.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: S.Ay.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: S.Ay.resolveUnreadSetting(t),
        channel_preset: (0, o.jU)(S.Ay.resolveUnreadSetting(t), S.Ay.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: S.Ay.isMuted(t.guild_id),
        guild_resolved_unread_setting: S.Ay.resolveGuildUnreadSetting(n),
        guild_preset: (0, o.jU)(S.Ay.resolveGuildUnreadSetting(n), S.Ay.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, s.c)(t.guild_id, e),
        can_send_message: g.A.can(D.xBc.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function B(e, t, n) {
    let r = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        i()(C.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function j(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(C.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != E.A.findActivity(e.userId, (e) => e.type === D.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let H = { trackWithMetadata: V, getVoiceStateMetadata: B };
