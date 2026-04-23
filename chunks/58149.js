"use strict";
n.d(t, {
    Ay: () => V,
    H$: () => w,
    JK: () => G,
    Ou: () => M,
    QS: () => x,
    dI: () => P,
    dL: () => F,
    qL: () => U,
    zV: () => k,
});
var r = n(735438),
    i = n.n(r),
    s = n(136722),
    a = n(880527),
    o = n(24873),
    l = n(95701),
    u = n(961350),
    c = n(734057),
    d = n(808728),
    _ = n(498642),
    f = n(696451),
    p = n(317525),
    h = n(71393),
    E = n(430452),
    m = n(576705),
    g = n(290863),
    A = n(383501),
    I = n(222823),
    T = n(309010),
    S = n(967198),
    y = n(543465),
    N = n(287809),
    v = n(977997),
    C = n(954571),
    O = n(927813),
    R = n(488926),
    b = n(287146),
    D = n(652215),
    L = n(746080);
function w(e) {
    if (null == e) return null;
    let t = h.A.getGuild(e);
    if (null == t) return null;
    let n = p.A.getNumRoles(t.id),
        r = u.default.getId(),
        i = f.Ay.getMember(e, r),
        s = d.Ay.getChannels(e),
        a = s[d.I6].length,
        o = s[d.vM].length,
        l = v.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: _.A.getMemberCount(e),
        guild_num_channels: a + o,
        guild_num_text_channels: a,
        guild_num_voice_channels: o,
        guild_num_roles: n,
        guild_member_num_roles: null != i ? i.roles.length : 0,
        guild_member_perms: String(m.A.getGuildPermissions(t) ?? R.x3),
        guild_is_vip: t.features.has(D.GuildFeatures.VIP_REGIONS),
        is_member: null != i,
        num_voice_channels_active: (function (e) {
            let t = 0;
            for (let n in e) t += 1;
            return t;
        })(l),
    };
}
function M(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    return null == t ? null : P(t);
}
function P(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        let r = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && s.zy(t.deny, D.xBc.VIEW_CHANNEL);
        };
        t = r(l.Le.has(e.type) && null != e.parent_id ? c.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (m.A.getChannelPermissions(e) ?? R.x3) : R.x3),
        channel_hidden: t,
    };
}
function x(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    if (null == t) return null;
    let n = E.Ay.isVideoEnabled(),
        r = A.A.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: r,
        ...G(t.getGuildId(), t.id, n),
        ...(0, b.V)(),
    };
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (C.default.isThrottled(e)) return;
    let r = !("location" in t) || t.location !== D.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        i = "guild_id" in t ? t.guild_id : r ? S.A.getGuildId() : null,
        s = "channel_id" in t ? t.channel_id : r ? T.A.getChannelId(i) : null,
        a = c.A.getChannel(s),
        o = null == a ? (i ?? null) : a.isPrivate() ? null : (a.getGuildId() ?? i ?? null),
        l = {
            ...t,
            ...w(o),
            ...(null != i && null != s && (0, L.jq)(s) ? { channel_static_route: s, channel_hidden: !1 } : P(a)),
        };
    C.default.track(e, l, { flush: n });
}
function U(e) {
    if ((0, L.jq)(e)) return { channel_static_route: e };
    let t = c.A.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = h.A.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = N.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return { channel_id: e, is_app_dm: n };
    }
    let r = I.Ay.getSnapshot(e, 10 * O.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: y.Ay.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: y.Ay.resolveUnreadSetting(t),
        channel_preset: (0, o.jU)(y.Ay.resolveUnreadSetting(t), y.Ay.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: y.Ay.isMuted(t.guild_id),
        guild_resolved_unread_setting: y.Ay.resolveGuildUnreadSetting(n),
        guild_preset: (0, o.jU)(y.Ay.resolveGuildUnreadSetting(n), y.Ay.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, a.c)(t.guild_id, e),
        can_send_message: m.A.can(D.xBc.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function G(e, t, n) {
    let r = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        i()(v.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function F(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(v.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != g.A.findActivity(e.userId, (e) => e.type === D.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let V = { trackWithMetadata: k, getVoiceStateMetadata: G };
