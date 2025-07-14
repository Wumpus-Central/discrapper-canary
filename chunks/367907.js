n.d(t, {
    $H: () => Z,
    AB: () => B,
    JS: () => U,
    ZP: () => W,
    hH: () => M,
    kO: () => H,
    oG: () => Y,
    v_: () => G,
    yw: () => F
});
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    o = n(622822),
    s = n(50244),
    l = n(686660),
    c = n(131704),
    u = n(314897),
    d = n(592125),
    f = n(984933),
    _ = n(650774),
    p = n(271383),
    h = n(485386),
    m = n(430824),
    g = n(131951),
    E = n(496675),
    b = n(158776),
    y = n(19780),
    O = n(306680),
    v = n(944486),
    I = n(914010),
    T = n(9156),
    S = n(594174),
    A = n(979651),
    N = n(626135),
    C = n(70956),
    R = n(700785),
    P = n(546416),
    w = n(981631),
    D = n(176505);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function k(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function M(e) {
    var t;
    if (null == e) return null;
    let n = m.Z.getGuild(e);
    if (null == n) return null;
    let r = h.Z.getRoles(n.id),
        i = u.default.getId(),
        a = p.ZP.getMember(e, i),
        o = f.ZP.getChannels(e),
        s = o[f.sH].length,
        l = o[f.Zb].length,
        c = A.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: _.Z.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: k(r),
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null != (t = E.Z.getGuildPermissions(n)) ? t : R.Hn),
        guild_is_vip: n.features.has(w.oNc.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: k(c)
    };
}
function j(e, t) {
    return {
        channel_static_route: t,
        channel_hidden: !1
    };
}
function U(e) {
    if (null == e) return null;
    let t = d.Z.getChannel(e);
    return null == t ? null : G(t);
}
function G(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        r = e.getGuildId();
    if (null != r) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[r];
            return null != t && a.e$(t.deny, w.Plq.VIEW_CHANNEL);
        };
        n = t(c.Ec.has(e.type) && null != e.parent_id ? d.Z.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null != (t = E.Z.getChannelPermissions(e)) ? t : R.Hn),
        channel_hidden: n
    };
}
function B(e) {
    if (null == e) return null;
    let t = d.Z.getChannel(e);
    if (null == t) return null;
    let n = g.Z.isVideoEnabled(),
        r = y.Z.getMediaSessionId();
    return x(
        {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: r
        },
        H(t.getGuildId(), t.id, n),
        (0, P.V)()
    );
}
function V(e, t) {
    var n, r;
    return null == e ? (null != t ? t : null) : e.isPrivate() ? null : null != (r = null != (n = e.getGuildId()) ? n : t) ? r : null;
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (N.default.isThrottled(e)) return;
    let r = !('location' in t) || t.location !== w.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        i = 'guild_id' in t ? t.guild_id : r ? I.Z.getGuildId() : null,
        a = 'channel_id' in t ? t.channel_id : r ? v.Z.getChannelId(i) : null,
        o = d.Z.getChannel(a),
        s = x({}, t, M(V(o, i)), null != i && null != a && (0, D.AB)(a) ? j(i, a) : G(o));
    N.default.track(e, s, { flush: n });
}
function Z(e) {
    if ((0, D.AB)(e)) return { channel_static_route: e };
    let t = d.Z.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = m.Z.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = S.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: n
        };
    }
    let r = O.ZP.getSnapshot(e, 10 * C.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: T.ZP.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: (0, o.aC)(t),
        channel_resolved_unread_setting: T.ZP.resolveUnreadSetting(t),
        channel_preset: (0, l.gs)(T.ZP.resolveUnreadSetting(t), T.ZP.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: T.ZP.isMuted(t.guild_id),
        guild_resolved_unread_setting: T.ZP.resolveGuildUnreadSetting(n),
        guild_preset: (0, l.gs)(T.ZP.resolveGuildUnreadSetting(n), T.ZP.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, s.P)(t.guild_id, e),
        can_send_message: E.Z.can(w.Plq.SEND_MESSAGES, t),
        is_app_dm: !1
    };
}
function H(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        i()(A.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                (r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++);
            }),
        r
    );
}
function Y(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(A.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != b.Z.findActivity(e.userId, (e) => e.type === w.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
let W = {
    trackWithMetadata: F,
    getVoiceStateMetadata: H
};
