r.d(n, {
    $H: function () {
        return Z;
    },
    AB: function () {
        return U;
    },
    JS: function () {
        return M;
    },
    hH: function () {
        return w;
    },
    kO: function () {
        return F;
    },
    oG: function () {
        return V;
    },
    v_: function () {
        return k;
    },
    yw: function () {
        return G;
    }
});
var i = r(392711),
    a = r.n(i),
    o = r(149765),
    s = r(50244),
    l = r(686660),
    u = r(131704),
    c = r(314897),
    d = r(592125),
    f = r(984933),
    p = r(650774),
    h = r(271383),
    _ = r(430824),
    m = r(131951),
    g = r(496675),
    E = r(158776),
    v = r(19780),
    y = r(306680),
    b = r(944486),
    I = r(914010),
    T = r(9156),
    S = r(594174),
    A = r(979651),
    C = r(626135),
    N = r(70956),
    R = r(700785),
    O = r(546416),
    D = r(981631),
    x = r(176505);
function L(e) {
    let n = 0;
    for (let r in e) n += 1;
    return n;
}
function w(e) {
    var n;
    if (null == e) return null;
    let r = _.Z.getGuild(e);
    if (null == r) return null;
    let i = _.Z.getRoles(r.id),
        a = c.default.getId(),
        o = h.ZP.getMember(e, a),
        s = f.ZP.getChannels(e),
        l = s[f.sH].length,
        u = s[f.Zb].length,
        d = A.Z.getVoiceStates(e);
    return {
        guild_id: r.id,
        guild_size_total: p.Z.getMemberCount(e),
        guild_num_channels: l + u,
        guild_num_text_channels: l,
        guild_num_voice_channels: u,
        guild_num_roles: L(i),
        guild_member_num_roles: null != o ? o.roles.length : 0,
        guild_member_perms: String(null !== (n = g.Z.getGuildPermissions(r)) && void 0 !== n ? n : R.Hn),
        guild_is_vip: r.hasFeature(D.oNc.VIP_REGIONS),
        is_member: null != o,
        num_voice_channels_active: L(d)
    };
}
function P(e, n) {
    return {
        channel_static_route: n,
        channel_hidden: !1
    };
}
function M(e) {
    if (null == e) return null;
    let n = d.Z.getChannel(e);
    return null == n ? null : k(n);
}
function k(e) {
    var n;
    if (null == e) return null;
    let r = !1,
        i = e.getGuildId();
    if (null != i) {
        let n = (e) => {
            if (null == e) return !1;
            let n = e.permissionOverwrites[i];
            return null != n && o.e$(n.deny, D.Plq.VIEW_CHANNEL);
        };
        r = u.Ec.has(e.type) && null != e.parent_id ? n(d.Z.getChannel(e.parent_id)) : n(e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != i && null !== (n = g.Z.getChannelPermissions(e)) && void 0 !== n ? n : R.Hn),
        channel_hidden: r
    };
}
function U(e) {
    if (null == e) return null;
    let n = d.Z.getChannel(e);
    if (null == n) return null;
    let r = m.Z.isVideoEnabled(),
        i = v.Z.getMediaSessionId();
    return {
        channel_id: n.id,
        channel_type: n.type,
        guild_id: n.getGuildId(),
        media_session_id: i,
        ...F(n.getGuildId(), n.id, r),
        ...(0, O.V)()
    };
}
function B(e, n) {
    var r, i;
    return null == e ? (null != n ? n : null) : e.isPrivate() ? null : null !== (i = null !== (r = e.getGuildId()) && void 0 !== r ? r : n) && void 0 !== i ? i : null;
}
function G(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (C.default.isThrottled(e)) return;
    let i = !('location' in n) || n.location !== D.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        a = 'guild_id' in n ? n.guild_id : i ? I.Z.getGuildId() : null,
        o = 'channel_id' in n ? n.channel_id : i ? b.Z.getChannelId(a) : null,
        s = d.Z.getChannel(o),
        l = B(s, a),
        u = {
            ...n,
            ...w(l),
            ...(null != a && null != o && (0, x.AB)(o) ? P(a, o) : k(s))
        };
    C.default.track(e, u, { flush: r });
}
function Z(e) {
    let n = d.Z.getChannel(e);
    if (null == n) return { channel_id: e };
    let r = _.Z.getGuild(n.guild_id);
    if (null == r) {
        let r = !1;
        if (n.isDM()) {
            let e = S.default.getUser(n.recipients[0]);
            null != e && (r = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: r
        };
    }
    let i = y.ZP.getSnapshot(e, 10 * N.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: i.unread,
        channel_mention_count: i.mentionCount,
        channel_is_muted: T.ZP.isChannelMuted(n.guild_id, n.id),
        channel_is_nsfw: n.isNSFW(),
        channel_resolved_unread_setting: T.ZP.resolveUnreadSetting(n),
        channel_preset: (0, l.gs)(T.ZP.resolveUnreadSetting(n), T.ZP.resolvedMessageNotifications(n)),
        guild_id: n.guild_id,
        guild_was_unread: i.guildUnread,
        guild_mention_count: i.guildMentionCount,
        guild_is_muted: T.ZP.isMuted(n.guild_id),
        guild_resolved_unread_setting: T.ZP.resolveGuildUnreadSetting(r),
        guild_preset: (0, l.gs)(T.ZP.resolveGuildUnreadSetting(r), T.ZP.getMessageNotifications(n.guild_id)),
        parent_id: n.parent_id,
        parent_channel_type: n.parentChannelThreadType,
        has_pending_member_action: (0, s.P)(n.guild_id, e),
        can_send_message: g.Z.can(D.Plq.SEND_MESSAGES, n),
        is_app_dm: !1
    };
}
function F(e, n, r) {
    let i = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: r
    };
    return (
        a()(A.Z.getVoiceStates(e))
            .filter((e) => e.channelId === n)
            .filter((e) => e.userId !== c.default.getId())
            .forEach((e) => {
                i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++;
            }),
        i
    );
}
function V(e, n) {
    let r = { custom_status_count: 0 };
    return (
        a()(A.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === n && null != E.Z.findActivity(e.userId, (e) => e.type === D.IIU.CUSTOM_STATUS) && r.custom_status_count++;
        }),
        r
    );
}
n.ZP = {
    trackWithMetadata: G,
    getVoiceStateMetadata: F
};
