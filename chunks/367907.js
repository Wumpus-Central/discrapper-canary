n.d(t, {
    $H: () => B,
    AB: () => k,
    JS: () => w,
    ZP: () => V,
    hH: () => L,
    kO: () => Z,
    oG: () => F,
    v_: () => M,
    yw: () => G
});
var i = n(392711),
    r = n.n(i),
    a = n(149765),
    s = n(50244),
    o = n(686660),
    l = n(131704),
    u = n(314897),
    c = n(592125),
    d = n(984933),
    f = n(650774),
    _ = n(271383),
    p = n(430824),
    h = n(131951),
    m = n(496675),
    g = n(158776),
    E = n(19780),
    v = n(306680),
    y = n(944486),
    I = n(914010),
    b = n(9156),
    T = n(594174),
    S = n(979651),
    A = n(626135),
    N = n(70956),
    C = n(700785),
    R = n(546416),
    O = n(981631),
    D = n(176505);
function x(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function L(e) {
    var t;
    if (null == e) return null;
    let n = p.Z.getGuild(e);
    if (null == n) return null;
    let i = p.Z.getRoles(n.id),
        r = u.default.getId(),
        a = _.ZP.getMember(e, r),
        s = d.ZP.getChannels(e),
        o = s[d.sH].length,
        l = s[d.Zb].length,
        c = S.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: f.Z.getMemberCount(e),
        guild_num_channels: o + l,
        guild_num_text_channels: o,
        guild_num_voice_channels: l,
        guild_num_roles: x(i),
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null !== (t = m.Z.getGuildPermissions(n)) && void 0 !== t ? t : C.Hn),
        guild_is_vip: n.hasFeature(O.oNc.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: x(c)
    };
}
function P(e, t) {
    return {
        channel_static_route: t,
        channel_hidden: !1
    };
}
function w(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    return null == t ? null : M(t);
}
function M(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        i = e.getGuildId();
    if (null != i) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[i];
            return null != t && a.e$(t.deny, O.Plq.VIEW_CHANNEL);
        };
        n = t(l.Ec.has(e.type) && null != e.parent_id ? c.Z.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != i && null !== (t = m.Z.getChannelPermissions(e)) && void 0 !== t ? t : C.Hn),
        channel_hidden: n
    };
}
function k(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    if (null == t) return null;
    let n = h.Z.isVideoEnabled(),
        i = E.Z.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: i,
        ...Z(t.getGuildId(), t.id, n),
        ...(0, R.V)()
    };
}
function U(e, t) {
    var n, i;
    return null == e ? (null != t ? t : null) : e.isPrivate() ? null : null !== (i = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== i ? i : null;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (A.default.isThrottled(e)) return;
    let i = !('location' in t) || t.location !== O.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        r = 'guild_id' in t ? t.guild_id : i ? I.Z.getGuildId() : null,
        a = 'channel_id' in t ? t.channel_id : i ? y.Z.getChannelId(r) : null,
        s = c.Z.getChannel(a),
        o = U(s, r),
        l = {
            ...t,
            ...L(o),
            ...(null != r && null != a && (0, D.AB)(a) ? P(r, a) : M(s))
        };
    A.default.track(e, l, { flush: n });
}
function B(e) {
    let t = c.Z.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = p.Z.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = T.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: n
        };
    }
    let i = v.ZP.getSnapshot(e, 10 * N.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: i.unread,
        channel_mention_count: i.mentionCount,
        channel_is_muted: b.ZP.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: b.ZP.resolveUnreadSetting(t),
        channel_preset: (0, o.gs)(b.ZP.resolveUnreadSetting(t), b.ZP.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: i.guildUnread,
        guild_mention_count: i.guildMentionCount,
        guild_is_muted: b.ZP.isMuted(t.guild_id),
        guild_resolved_unread_setting: b.ZP.resolveGuildUnreadSetting(n),
        guild_preset: (0, o.gs)(b.ZP.resolveGuildUnreadSetting(n), b.ZP.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, s.P)(t.guild_id, e),
        can_send_message: m.Z.can(O.Plq.SEND_MESSAGES, t),
        is_app_dm: !1
    };
}
function Z(e, t, n) {
    let i = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        r()(S.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++;
            }),
        i
    );
}
function F(e, t) {
    let n = { custom_status_count: 0 };
    return (
        r()(S.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != g.Z.findActivity(e.userId, (e) => e.type === O.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
let V = {
    trackWithMetadata: G,
    getVoiceStateMetadata: Z
};
