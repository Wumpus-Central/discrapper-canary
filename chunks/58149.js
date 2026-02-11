"use strict";
n.d(t, {
    Ay: () => Y,
    H$: () => P,
    JK: () => j,
    Ou: () => k,
    QS: () => G,
    dI: () => U,
    dL: () => H,
    qL: () => B,
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
    h = n(317525),
    p = n(71393),
    g = n(430452),
    E = n(576705),
    A = n(290863),
    I = n(383501),
    T = n(222823),
    y = n(309010),
    S = n(967198),
    v = n(543465),
    C = n(287809),
    b = n(977997),
    N = n(954571),
    R = n(927813),
    O = n(488926),
    D = n(287146),
    L = n(652215),
    w = n(746080);
function x(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function P(e) {
    if (null == e) return null;
    let t = p.A.getGuild(e);
    if (null == t) return null;
    let n = h.A.getNumRoles(t.id),
        r = u.default.getId(),
        i = f.Ay.getMember(e, r),
        a = d.Ay.getChannels(e),
        s = a[d.I6].length,
        o = a[d.vM].length,
        l = b.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: _.A.getMemberCount(e),
        guild_num_channels: s + o,
        guild_num_text_channels: s,
        guild_num_voice_channels: o,
        guild_num_roles: n,
        guild_member_num_roles: null != i ? i.roles.length : 0,
        guild_member_perms: String(E.A.getGuildPermissions(t) ?? O.x3),
        guild_is_vip: t.features.has(L.GuildFeatures.VIP_REGIONS),
        is_member: null != i,
        num_voice_channels_active: x(l),
    };
}
function M(e, t) {
    return { channel_static_route: t, channel_hidden: !1 };
}
function k(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    return null == t ? null : U(t);
}
function U(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        let r = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && a.zy(t.deny, L.xBc.VIEW_CHANNEL);
        };
        t = r(l.Le.has(e.type) && null != e.parent_id ? c.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (E.A.getChannelPermissions(e) ?? O.x3) : O.x3),
        channel_hidden: t,
    };
}
function G(e) {
    if (null == e) return null;
    let t = c.A.getChannel(e);
    if (null == t) return null;
    let n = g.Ay.isVideoEnabled(),
        r = I.A.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: r,
        ...j(t.getGuildId(), t.id, n),
        ...(0, D.V)(),
    };
}
function F(e, t) {
    return null == e ? (t ?? null) : e.isPrivate() ? null : (e.getGuildId() ?? t ?? null);
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (N.default.isThrottled(e)) return;
    let r = !("location" in t) || t.location !== L.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        i = "guild_id" in t ? t.guild_id : r ? S.A.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : r ? y.A.getChannelId(i) : null,
        s = c.A.getChannel(a),
        o = F(s, i),
        l = { ...t, ...P(o), ...(null != i && null != a && (0, w.jq)(a) ? M(i, a) : U(s)) };
    N.default.track(e, l, { flush: n });
}
function B(e) {
    if ((0, w.jq)(e)) return { channel_static_route: e };
    let t = c.A.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = p.A.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = C.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return { channel_id: e, is_app_dm: n };
    }
    let r = T.Ay.getSnapshot(e, 10 * R.A.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: v.Ay.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: v.Ay.resolveUnreadSetting(t),
        channel_preset: (0, o.jU)(v.Ay.resolveUnreadSetting(t), v.Ay.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: v.Ay.isMuted(t.guild_id),
        guild_resolved_unread_setting: v.Ay.resolveGuildUnreadSetting(n),
        guild_preset: (0, o.jU)(v.Ay.resolveGuildUnreadSetting(n), v.Ay.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, s.c)(t.guild_id, e),
        can_send_message: E.A.can(L.xBc.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function j(e, t, n) {
    let r = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        i()(b.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function H(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(b.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != A.A.findActivity(e.userId, (e) => e.type === L.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let Y = { trackWithMetadata: V, getVoiceStateMetadata: j };
