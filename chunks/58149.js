n.d(t, {
    Ay: () => W,
    H$: () => j,
    JK: () => H,
    Ou: () => k,
    QS: () => G,
    dI: () => U,
    dL: () => Y,
    qL: () => B,
    zV: () => F,
});
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(880527),
    o = n(24873),
    l = n(95701),
    c = n(961350),
    u = n(734057),
    d = n(808728),
    f = n(498642),
    p = n(696451),
    _ = n(317525),
    h = n(71393),
    m = n(430452),
    g = n(576705),
    E = n(290863),
    b = n(383501),
    y = n(222823),
    O = n(309010),
    A = n(967198),
    v = n(543465),
    S = n(287809),
    I = n(977997),
    T = n(954571),
    C = n(927813),
    N = n(488926),
    R = n(287146),
    w = n(652215),
    P = n(746080);
function D(e, t, n) {
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
                D(e, t, n[t]);
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
    let n = h.A.getGuild(e);
    if (null == n) return null;
    let r = _.A.getNumRoles(n.id),
        i = c.default.getId(),
        a = p.Ay.getMember(e, i),
        s = d.Ay.getChannels(e),
        o = s[d.I6].length,
        l = s[d.vM].length,
        u = I.A.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: f.A.getMemberCount(e),
        guild_num_channels: o + l,
        guild_num_text_channels: o,
        guild_num_voice_channels: l,
        guild_num_roles: r,
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null != (t = g.A.getGuildPermissions(n)) ? t : N.x3),
        guild_is_vip: n.features.has(w.GuildFeatures.VIP_REGIONS),
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
    let t = u.A.getChannel(e);
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
            return null != t && a.zy(t.deny, w.xBc.VIEW_CHANNEL);
        };
        n = t(l.Le.has(e.type) && null != e.parent_id ? u.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null != (t = g.A.getChannelPermissions(e)) ? t : N.x3),
        channel_hidden: n,
    };
}
function G(e) {
    if (null == e) return null;
    let t = u.A.getChannel(e);
    if (null == t) return null;
    let n = m.A.isVideoEnabled(),
        r = b.A.getMediaSessionId();
    return x(
        {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: r,
        },
        H(t.getGuildId(), t.id, n),
        (0, R.V)(),
    );
}
function V(e, t) {
    var n, r;
    return null == e
        ? null != t
            ? t
            : null
        : e.isPrivate()
          ? null
          : null != (n = null != (r = e.getGuildId()) ? r : t)
            ? n
            : null;
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (T.default.isThrottled(e)) return;
    let r = !("location" in t) || t.location !== w.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        i = "guild_id" in t ? t.guild_id : r ? A.A.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : r ? O.A.getChannelId(i) : null,
        s = u.A.getChannel(a),
        o = x({}, t, j(V(s, i)), null != i && null != a && (0, P.jq)(a) ? M(i, a) : U(s));
    T.default.track(e, o, { flush: n });
}
function B(e) {
    if ((0, P.jq)(e)) return { channel_static_route: e };
    let t = u.A.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = h.A.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = S.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: n,
        };
    }
    let r = y.Ay.getSnapshot(e, 10 * C.A.Millis.SECOND);
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
        can_send_message: g.A.can(w.xBc.SEND_MESSAGES, t),
        is_app_dm: !1,
    };
}
function H(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n,
    };
    return (
        i()(I.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== c.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function Y(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(I.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != E.A.findActivity(e.userId, (e) => e.type === w.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let W = {
    trackWithMetadata: F,
    getVoiceStateMetadata: H,
};
