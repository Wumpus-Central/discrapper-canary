n.d(t, {
    $H: () => Z,
    AB: () => U,
    JS: () => k,
    ZP: () => H,
    hH: () => L,
    kO: () => F,
    oG: () => V,
    v_: () => j,
    yw: () => B
});
var r = n(392711),
    i = n.n(r),
    o = n(149765),
    a = n(50244),
    s = n(686660),
    l = n(131704),
    c = n(314897),
    u = n(592125),
    d = n(984933),
    f = n(650774),
    p = n(271383),
    _ = n(430824),
    h = n(131951),
    m = n(496675),
    g = n(158776),
    E = n(19780),
    v = n(306680),
    b = n(944486),
    y = n(914010),
    O = n(9156),
    S = n(594174),
    I = n(979651),
    T = n(626135),
    N = n(70956),
    A = n(700785),
    C = n(546416),
    R = n(981631),
    P = n(176505);
function w(e, t, n) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function L(e) {
    var t;
    if (null == e) return null;
    let n = _.Z.getGuild(e);
    if (null == n) return null;
    let r = _.Z.getRoles(n.id),
        i = c.default.getId(),
        o = p.ZP.getMember(e, i),
        a = d.ZP.getChannels(e),
        s = a[d.sH].length,
        l = a[d.Zb].length,
        u = I.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: f.Z.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: x(r),
        guild_member_num_roles: null != o ? o.roles.length : 0,
        guild_member_perms: String(null !== (t = m.Z.getGuildPermissions(n)) && void 0 !== t ? t : A.Hn),
        guild_is_vip: n.hasFeature(R.oNc.VIP_REGIONS),
        is_member: null != o,
        num_voice_channels_active: x(u)
    };
}
function M(e, t) {
    return {
        channel_static_route: t,
        channel_hidden: !1
    };
}
function k(e) {
    if (null == e) return null;
    let t = u.Z.getChannel(e);
    return null == t ? null : j(t);
}
function j(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        r = e.getGuildId();
    if (null != r) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[r];
            return null != t && o.e$(t.deny, R.Plq.VIEW_CHANNEL);
        };
        n = t(l.Ec.has(e.type) && null != e.parent_id ? u.Z.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null !== (t = m.Z.getChannelPermissions(e)) && void 0 !== t ? t : A.Hn),
        channel_hidden: n
    };
}
function U(e) {
    if (null == e) return null;
    let t = u.Z.getChannel(e);
    if (null == t) return null;
    let n = h.Z.isVideoEnabled(),
        r = E.Z.getMediaSessionId();
    return D(
        {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: r
        },
        F(t.getGuildId(), t.id, n),
        (0, C.V)()
    );
}
function G(e, t) {
    var n, r;
    return null == e ? (null != t ? t : null) : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (T.default.isThrottled(e)) return;
    let r = !('location' in t) || t.location !== R.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        i = 'guild_id' in t ? t.guild_id : r ? y.Z.getGuildId() : null,
        o = 'channel_id' in t ? t.channel_id : r ? b.Z.getChannelId(i) : null,
        a = u.Z.getChannel(o),
        s = D({}, t, L(G(a, i)), null != i && null != o && (0, P.AB)(o) ? M(i, o) : j(a));
    T.default.track(e, s, { flush: n });
}
function Z(e) {
    let t = u.Z.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = _.Z.getGuild(t.guild_id);
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
    let r = v.ZP.getSnapshot(e, 10 * N.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: O.ZP.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: O.ZP.resolveUnreadSetting(t),
        channel_preset: (0, s.gs)(O.ZP.resolveUnreadSetting(t), O.ZP.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: O.ZP.isMuted(t.guild_id),
        guild_resolved_unread_setting: O.ZP.resolveGuildUnreadSetting(n),
        guild_preset: (0, s.gs)(O.ZP.resolveGuildUnreadSetting(n), O.ZP.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, a.P)(t.guild_id, e),
        can_send_message: m.Z.can(R.Plq.SEND_MESSAGES, t),
        is_app_dm: !1
    };
}
function F(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        i()(I.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== c.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function V(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(I.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != g.Z.findActivity(e.userId, (e) => e.type === R.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
let H = {
    trackWithMetadata: B,
    getVoiceStateMetadata: F
};
