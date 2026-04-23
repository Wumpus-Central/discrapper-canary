"use strict";
n.d(t, {
    CG: () => v,
    DJ: () => U,
    IP: () => R,
    Jg: () => w,
    Jz: () => D,
    Pd: () => b,
    QG: () => M,
    af: () => k,
    an: () => s.A,
    fK: () => L,
    n: () => x,
    n3: () => C,
    vJ: () => P,
    we: () => O,
}),
    n(321073);
var r = n(136722),
    i = n(155718),
    s = n(842937),
    a = n(669715),
    o = n(461715),
    l = n(105530),
    u = n(95701),
    c = n(734057),
    d = n(808728),
    _ = n(576705),
    f = n(309010),
    p = n(607567),
    h = n(488926),
    E = n(661191);
n(427262);
var m = n(652215),
    g = n(788868),
    A = n(985018);
let { GUILD_VOICE: I, GUILD_CATEGORY: T, GUILD_STAGE_VOICE: S } = m.rbe;
function y(e, t) {
    return e === t || e === T;
}
function N(e, t, n) {
    let i = h.x3;
    return (
        ((0, u.tr)(t) || t === T) && (i = r.WQ(i, m.xBc.VIEW_CHANNEL)),
        (y(t, I) || y(t, S)) && ((i = r.WQ(i, m.xBc.VIEW_CHANNEL)), (i = r.WQ(i, m.xBc.CONNECT))),
        { id: e, type: n, deny: h.x3, allow: i }
    );
}
function v(e, t, n) {
    var s;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = [];
    return (
        (n.length > 0 || o) &&
            l.push(
                ((s = i.r2.ROLE),
                (a = h.x3),
                ((0, u.tr)(t) || t === T) && (a = r.WQ(a, m.xBc.VIEW_CHANNEL)),
                y(t, I) && ((a = r.WQ(a, m.xBc.VIEW_CHANNEL)), (a = r.WQ(a, m.xBc.CONNECT))),
                { id: e, type: s, allow: h.x3, deny: a }),
            ),
        n.forEach((e) => {
            l.push(N(e, t, i.r2.ROLE));
        }),
        l
    );
}
function C(e, t) {
    return N(e, t, i.r2.MEMBER);
}
function O(e, t) {
    return N(e, t, i.r2.ROLE);
}
function R(e) {
    return [{ id: e, type: i.r2.ROLE, deny: m.xBc.SEND_MESSAGES, allow: h.x3 }];
}
function b(e, t, n) {
    let r = e.getGuildId(),
        i = n.getGuild(r),
        s = i?.maxVideoChannelUsers ?? -1,
        o = i?.maxStageVideoChannelUsers ?? -1,
        l = p.Ay.countVoiceStatesForChannel(e.id),
        u = p.Ay.getVoiceStatesForChannel(e),
        c = _.A.can(m.xBc.MOVE_MEMBERS, e) && _.A.can(m.xBc.CONNECT, e),
        d = !1;
    d =
        e.type === S
            ? null != r && (t.hasVideo(e.id) || (0, a.t)(u)) && o > 0 && l >= o
            : null != r && t.hasVideo(e.id) && s > 0 && l >= s + +!!c;
    let f = e.userLimit > 0 && l >= e.userLimit;
    return d || (f && !c);
}
function D(e, t) {
    return t.isGuildStageVoice()
        ? m.gp3
        : null == e
          ? m.DqD
          : Math.max(
                e.features.has(m.GuildFeatures.VIP_REGIONS) ? g.TG[m.TVA.TIER_3].limits.bitrate : m.DqD,
                g.TG[e.premiumTier].limits.bitrate,
            );
}
function L(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return (function (e) {
        let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
            s = [];
        return (
            t.forEach((e) => {
                if (e.id === r || e.id === n) return;
                let t = i[e.id];
                null != t &&
                    (e.isGuildStageVoice()
                        ? t.forEach((e) => {
                              (0, l.eY)(e.voiceState) === l.zF.ON_STAGE && s.push(e);
                          })
                        : t.forEach((e) => s.push(e)));
            }),
            s
        );
    })({ channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i }).map((e) => e.user);
}
function w(e) {
    let { type: t } = e;
    switch (t) {
        case m.rbe.DM:
            return A.intl.string(A.t.jN2DfZ);
        case m.rbe.GROUP_DM:
            return A.intl.string(A.t["e5y+gm"]);
        case m.rbe.GUILD_TEXT:
            return A.intl.string(A.t.Pnajj0);
        case m.rbe.GUILD_FORUM:
            return A.intl.string(A.t.GbryDd);
        case m.rbe.GUILD_MEDIA:
            return A.intl.string(A.t.seKITE);
        case m.rbe.GUILD_VOICE:
            return A.intl.string(A.t.BVZqJl);
        case m.rbe.GUILD_STAGE_VOICE:
            return A.intl.string(A.t.EErMzA);
        case m.rbe.GUILD_ANNOUNCEMENT:
            return A.intl.string(A.t.l1dkSD);
        case m.rbe.GUILD_STORE:
            return A.intl.string(A.t["P1/Erq"]);
        case m.rbe.GUILD_CATEGORY:
            return A.intl.string(A.t.vHCZwr);
        default:
            return null;
    }
}
function M(e) {
    if (null == e) return "text";
    let t = e.isMediaChannel();
    if (e.type === m.rbe.GUILD_VOICE) return _.A.can(m.xBc.CONNECT, e) ? "voice" : "voice-locked";
    if (e.type === m.rbe.GUILD_STAGE_VOICE) return _.A.can(m.xBc.CONNECT, e) ? "stage" : "stage-locked";
    if (u.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === m.rbe.GUILD_FORUM) return t ? "media" : "forum";
    if (e.type === m.rbe.GUILD_MEDIA) return "media";
    else if (u.k3.has(e.type)) return "text";
}
function P(e) {
    let t,
        n = c.A.getChannel(f.A.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === m.rbe.GUILD_TEXT) t = n.id;
    else {
        let n = d.Ay.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return m.BVt.CHANNEL(e, t);
}
function x(e, t, n, r) {
    let i = null == r ? "" : `?summaryId=${r}`;
    return `${location.protocol}//${location.host}${m.BVt.CHANNEL(e, t, n)}${i}`;
}
function k(e, t, n, r) {
    let i,
        s = e.getGuildId(),
        a = (0, o.$m)(s, t);
    if (null != t && a) {
        var l, u, c;
        (l = t.id),
            (u = e.id),
            (c = E.default.castChannelIdAsMessageId(e.id)),
            (i =
                null == s || null == l || null == u
                    ? x(s, l, c)
                    : `${location.protocol}//${location.host}${m.BVt.CHANNEL_THREAD_VIEW(s, l, u, c)}`);
    } else i = r ?? x(s, e.id, n);
    return i;
}
function U(e) {
    if (null == e) return null;
    switch (e.type) {
        case m.rbe.GUILD_ANNOUNCEMENT:
        case m.rbe.GUILD_TEXT:
        case m.rbe.GUILD_FORUM:
        case m.rbe.GUILD_MEDIA:
            return m.liQ.GUILD_CHANNEL;
        case m.rbe.GROUP_DM:
        case m.rbe.DM:
            return m.liQ.DM_CHANNEL;
        default:
            return null;
    }
}
