n.d(t, {
    dI: () => D,
    JK: () => P,
    g4: () => M,
    Ay: () => w,
    QS: () => v,
    H$: () => L,
    zV: () => b,
    Ou: () => y,
    dL: () => U,
});
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(95701),
    l = n(280450),
    o = n(734057),
    d = n(808728),
    c = n(498642),
    u = n(696451),
    _ = n(317525),
    E = n(71393),
    A = n(192820),
    h = n(576705),
    f = n(290863),
    I = n(763827),
    p = n(994500),
    T = n(309010),
    m = n(967198),
    g = n(977997),
    S = n(174459),
    N = n(488926),
    C = n(952818),
    O = n(652215),
    R = n(746080);
function L(e) {
    if (null == e) return null;
    let t = E.A.getGuild(e);
    if (null == t) return null;
    let n = _.A.getNumRoles(t.id),
        i = l.default.getId(),
        r = u.Ay.getMember(e, i),
        a = d.Ay.getChannels(e),
        s = a[d.I6].length,
        o = a[d.vM].length,
        A = g.A.getVoiceStates(e);
    return {
        guild_id: t.id,
        guild_size_total: c.A.getMemberCount(e),
        guild_num_channels: s + o,
        guild_num_text_channels: s,
        guild_num_voice_channels: o,
        guild_num_roles: n,
        guild_member_num_roles: null != r ? r.roles.length : 0,
        guild_member_perms: String(h.A.getGuildPermissions(t) ?? N.x3),
        guild_is_vip: t.features.has(O.GuildFeatures.VIP_REGIONS),
        is_member: null != r,
        num_voice_channels_active: (function (e) {
            let t = 0;
            for (let n in e) t += 1;
            return t;
        })(A),
    };
}
function y(e) {
    if (null == e) return null;
    let t = o.A.getChannel(e);
    return null == t ? null : D(t);
}
function D(e) {
    if (null == e) return null;
    let t = !1,
        n = e.getGuildId();
    if (null != n) {
        function i(e) {
            if (null == n || null == e) return !1;
            let t = e.permissionOverwrites[n];
            return null != t && a.zy(t.deny, O.xBc.VIEW_CHANNEL);
        }
        t = i(s.Le.has(e.type) && null != e.parent_id ? o.A.getChannel(e.parent_id) : e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != n ? (h.A.getChannelPermissions(e) ?? N.x3) : N.x3),
        channel_hidden: t,
    };
}
function v(e) {
    let t;
    if (null == e) return null;
    let n = o.A.getChannel(e);
    if (null == n) return null;
    let i = A.Ay.isVideoEnabled(),
        r = I.A.getMediaSessionId();
    return {
        channel_id: n.id,
        channel_type: n.type,
        guild_id: n.getGuildId(),
        media_session_id: r,
        ...P(n.getGuildId(), n.id, i),
        ...{
            game_name: null != (t = C.Ay.getCurrentGameForAnalytics()) ? t.name : null,
            game_id: null != t ? t.id : null,
        },
    };
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (S.default.isThrottled(e)) return;
    let i = !("location" in t) || t.location !== O.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
        r = "guild_id" in t ? t.guild_id : i ? m.A.getGuildId() : null,
        a = "channel_id" in t ? t.channel_id : i ? T.Ay.getChannelId(r) : null,
        s = o.A.getChannel(a),
        l = null == s ? (r ?? null) : s.isPrivate() ? null : (s.getGuildId() ?? r ?? null),
        d = {
            ...t,
            ...L(l),
            ...(null != r && null != a && (0, R.jq)(a) ? { channel_static_route: a, channel_hidden: !1 } : D(s)),
        };
    S.default.track(e, d, { flush: n });
}
function M(e) {
    let t = 0;
    for (let n of e) p.A.isFriend(n) && t++;
    return { friendCount: t, nonFriendCount: e.length - t };
}
function P(e, t, n) {
    let i = { voice_state_count: 0, video_stream_count: 0, video_enabled: n };
    return (
        r()(g.A.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== l.default.getId())
            .forEach((e) => {
                (i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++);
            }),
        i
    );
}
function U(e, t) {
    let n = { custom_status_count: 0 };
    return (
        r()(g.A.getVoiceStates(e)).forEach((e) => {
            e.channelId === t &&
                null != f.A.findActivity(e.userId, (e) => e.type === O.$pd.CUSTOM_STATUS) &&
                n.custom_status_count++;
        }),
        n
    );
}
let w = { trackWithMetadata: b, getVoiceStateMetadata: P };
