n.d(t, {
    dI: () => v,
    JK: () => U,
    g4: () => M,
    Ay: () => G,
    QS: () => b,
    H$: () => y,
    zV: () => P,
    Ou: () => D,
    dL: () => w,
});
var i = n(435558),
    r = n.n(i),
    a = n(350835),
    s = n(136722),
    l = n(95701),
    o = n(280450),
    d = n(734057),
    c = n(808728),
    u = n(498642),
    _ = n(696451),
    E = n(317525),
    A = n(71393),
    h = n(999926),
    f = n(576705),
    I = n(290863),
    p = n(763827),
    T = n(994500),
    m = n(309010),
    g = n(967198),
    S = n(977997),
    N = n(174459),
    C = n(488926),
    O = n(952818),
    R = n(652215),
    L = n(746080);
function y(e) {
    if (null == e) return null;
    let t = A.A.getGuild(e);
    if (null == t) return null;
    let n = E.A.getNumRoles(t.id),
        i = o.default.getId(),
        r = _.Ay.getMember(e, i),
        a = c.Ay.getChannels(e),
        s = a[c.I6].length,
        l = a[c.vM].length,
        d = S.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: u.A.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: n,
        guild_member_num_roles: null != r ? r.roles.length : 0,
        guild_member_perms: String(f.A.getGuildPermissions(t) ?? C.x3),
        guild_is_vip: t.features.has(R.GuildFeatures.VIP_REGIONS),
        is_member: null != r,
        num_voice_channels_active: (function (e) {
            let t = 0;
            for (let n in e) t += 1;
            return t;
        })(d),
    };
}
function D(e) {
    if (null == e) return null;
    let t = d.A.getChannel(e);
    return null == t ? null : v(t);
}
function v(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        function i(e) {
            if (null == n || null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && s.zy(t.deny, R.xBc.VIEW_CHANNEL);
        }
        t = i(l.Le.has(e.type) && null != e.parent_id ? d.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (f.A.getChannelPermissions(e) ?? C.x3) : C.x3),
        channel_hidden: t,
    };
}
function b(e) {
    let t;
    if (null == e) return null;
    let n = d.A.getChannel(e);
    if (null == n) return null;
    let i = h.Ay.isVideoEnabled(),
        r = p.A.getMediaSessionId();
    return {
        channel_id: n.id,
        channel_type: n.type,
        guild_id: n.getGuildId(),
        media_session_id: r,
        ...U(n.getGuildId(), n.id, i),
        ...{
            game_name: null != (t = O.Ay.getCurrentGameForAnalytics()) ? t.name : null,
            game_id: null != t ? t.id : null,
        },
    };
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (N.default.isThrottled(e)) return;
    let i = !("location" in t) || t.location !== R.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        r = "guild_id" in t ? t.guild_id : i ? g.A.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : i ? m.Ay.getChannelId(r) : null,
        s = d.A.getChannel(a),
        l = null == s ? (r ?? null) : s.isPrivate() ? null : (s.getGuildId() ?? r ?? null),
        o = {
            ...t,
            ...y(l),
            ...(null != r && null != a && (0, L.jq)(a) ? { channel_static_route: a, channel_hidden: !1 } : v(s)),
        };
    N.default.track(e, o, { flush: n });
}
function M(e) {
    let t = 0;
    for (let n of e) T.A.isFriend(n) && t++;
    return { friendCount: t, nonFriendCount: e.length - t };
}
function U(e, t, n) {
    let i = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        r()(S.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== o.default.getId())
            .forEach((e) => {
                (i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++);
            }),
        i
    );
}
function w(e, t) {
    let n = { custom_status_count: 0 };
    return (
        r()(S.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != I.A.findActivity(e.userId, (e) => e.type === a.$.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let G = { trackWithMetadata: P, getVoiceStateMetadata: U };
