n.d(t, {
    $H: () => F,
    AB: () => G,
    JS: () => k,
    ZP: () => Y,
    hH: () => j,
    kO: () => V,
    oG: () => H,
    v_: () => U,
    yw: () => B,
});
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    o = n(50244),
    s = n(686660),
    l = n(131704),
    c = n(314897),
    u = n(592125),
    d = n(984933),
    f = n(650774),
    p = n(271383),
    _ = n(485386),
    m = n(430824),
    h = n(131951),
    g = n(496675),
    E = n(158776),
    b = n(19780),
    y = n(306680),
    O = n(944486),
    v = n(914010),
    S = n(9156),
    I = n(594174),
    T = n(979651),
    C = n(626135),
    A = n(70956),
    N = n(700785),
    P = n(546416),
    R = n(981631),
    D = n(176505);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function j(e) {
    var t;
    if (null == e) return null;
    let n = m.Z.getGuild(e);
    if (null == n) return null;
    let r = _.Z.getNumRoles(n.id),
        i = c.default.getId(),
        a = p.ZP.getMember(e, i),
        o = d.ZP.getChannels(e),
        s = o[d.sH].length,
        l = o[d.Zb].length,
        u = T.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: f.Z.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: r,
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null != (t = g.Z.getGuildPermissions(n)) ? t : N.Hn),
        guild_is_vip: n.features.has(R.GuildFeatures.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: L(u),
    };
}
function M(e, t) {
    return {
        channel_static_route: t,
        channel_hidden: !1,
    };
}
function k(e) {
    if (null == e) return null;
    let t = u.Z.getChannel(e);
    return null == t ? null : U(t);
}
function U(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        r = e.getGuildId();
    if (null != r) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[r];
            return null != t && a.e$(t.deny, R.Plq.VIEW_CHANNEL);
        };
        n = t(l.Ec.has(e.type) && null != e.parent_id ? u.Z.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null != (t = g.Z.getChannelPermissions(e)) ? t : N.Hn),
        channel_hidden: n,
    };
}
function G(e) {
    if (null == e) return null;
    let t = u.Z.getChannel(e);
    if (null == t) return null;
    let n = h.Z.isVideoEnabled(),
        r = b.Z.getMediaSessionId();
    return x(
        {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: r,
        },
        V(t.getGuildId(), t.id, n),
        (0, P.V)(),
    );
}
function Z(e, t) {
    var n, r;
    return null == e
        ? null != t
            ? t
            : null
        : e.isPrivate()
          ? null
          : null != (r = null != (n = e.getGuildId()) ? n : t)
            ? r
            : null;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (C.default.isThrottled(e)) return;
    let r = !("location" in t) || t.location !== R.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        i = "guild_id" in t ? t.guild_id : r ? v.Z.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : r ? O.Z.getChannelId(i) : null,
        o = u.Z.getChannel(a),
        s = x({}, t, j(Z(o, i)), null != i && null != a && (0, D.AB)(a) ? M(i, a) : U(o));
    C.default.track(e, s, { flush: n });
}
function F(e) {
    if ((0, D.AB)(e)) return { channel_static_route: e };
    let t = u.Z.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = m.Z.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = I.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: n,
        };
    }
    let r = y.ZP.getSnapshot(e, 10 * A.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: S.ZP.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: S.ZP.resolveUnreadSetting(t),
        channel_preset: (0, s.gs)(S.ZP.resolveUnreadSetting(t), S.ZP.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: S.ZP.isMuted(t.guild_id),
        guild_resolved_unread_setting: S.ZP.resolveGuildUnreadSetting(n),
        guild_preset: (0, s.gs)(S.ZP.resolveGuildUnreadSetting(n), S.ZP.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, o.P)(t.guild_id, e),
        can_send_message: g.Z.can(R.Plq.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function V(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n,
    };
    return (
        i()(T.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== c.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function H(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(T.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != E.Z.findActivity(e.userId, (e) => e.type === R.IIU.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let Y = {
    trackWithMetadata: B,
    getVoiceStateMetadata: V,
};
