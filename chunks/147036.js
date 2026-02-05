"use strict";
n.d(t, {
    CG: () => b,
    DJ: () => F,
    IP: () => O,
    Jg: () => P,
    Jz: () => L,
    Pd: () => D,
    QG: () => M,
    af: () => V,
    an: () => a.A,
    fK: () => x,
    n: () => U,
    n3: () => N,
    vJ: () => k,
    we: () => R,
}),
    n(321073);
var r = n(136722),
    i = n(155718),
    a = n(842937),
    s = n(669715),
    o = n(461715),
    l = n(105530),
    u = n(95701),
    c = n(734057),
    d = n(808728),
    _ = n(576705),
    f = n(309010),
    p = n(607567),
    h = n(488926),
    m = n(661191);
n(427262);
var g = n(652215),
    E = n(788868),
    A = n(985018);
let { GUILD_VOICE: I, GUILD_CATEGORY: T, GUILD_STAGE_VOICE: y } = g.rbe;
function S(e, t) {
    return e === t || e === T;
}
function v(e, t, n) {
    let i = h.x3;
    return (
        ((0, u.tr)(t) || t === T) && (i = r.WQ(i, g.xBc.VIEW_CHANNEL)),
        S(t, I) && ((i = r.WQ(i, g.xBc.VIEW_CHANNEL)), (i = r.WQ(i, g.xBc.CONNECT))),
        { id: e, type: n, allow: h.x3, deny: i }
    );
}
function C(e, t, n) {
    let i = h.x3;
    return (
        ((0, u.tr)(t) || t === T) && (i = r.WQ(i, g.xBc.VIEW_CHANNEL)),
        (S(t, I) || S(t, y)) && ((i = r.WQ(i, g.xBc.VIEW_CHANNEL)), (i = r.WQ(i, g.xBc.CONNECT))),
        { id: e, type: n, deny: h.x3, allow: i }
    );
}
function b(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = [];
    return (
        (n.length > 0 || r) && a.push(v(e, t, i.r2.ROLE)),
        n.forEach((e) => {
            a.push(C(e, t, i.r2.ROLE));
        }),
        a
    );
}
function N(e, t) {
    return C(e, t, i.r2.MEMBER);
}
function R(e, t) {
    return C(e, t, i.r2.ROLE);
}
function O(e) {
    return [{ id: e, type: i.r2.ROLE, deny: g.xBc.SEND_MESSAGES, allow: h.x3 }];
}
function D(e, t, n) {
    let r = e.getGuildId(),
        i = n.getGuild(r),
        a = i?.maxVideoChannelUsers ?? -1,
        o = i?.maxStageVideoChannelUsers ?? -1,
        l = p.Ay.countVoiceStatesForChannel(e.id),
        u = p.Ay.getVoiceStatesForChannel(e),
        c = _.A.can(g.xBc.MOVE_MEMBERS, e) && _.A.can(g.xBc.CONNECT, e),
        d = !1;
    d =
        e.type === y
            ? null != r && (t.hasVideo(e.id) || (0, s.t)(u)) && o > 0 && l >= o
            : null != r && t.hasVideo(e.id) && a > 0 && l >= a + +!!c;
    let f = e.userLimit > 0 && l >= e.userLimit;
    return d || (f && !c);
}
function L(e, t) {
    return t.isGuildStageVoice()
        ? g.gp3
        : null == e
          ? g.DqD
          : Math.max(
                e.features.has(g.GuildFeatures.VIP_REGIONS) ? E.TG[g.TVA.TIER_3].limits.bitrate : g.DqD,
                E.TG[e.premiumTier].limits.bitrate,
            );
}
function w(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
        a = [];
    return (
        t.forEach((e) => {
            if (e.id === r || e.id === n) return;
            let t = i[e.id];
            null != t &&
                (e.isGuildStageVoice()
                    ? t.forEach((e) => {
                          (0, l.eY)(e.voiceState) === l.zF.ON_STAGE && a.push(e);
                      })
                    : t.forEach((e) => a.push(e)));
        }),
        a
    );
}
function x(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return w({ channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i }).map((e) => e.user);
}
function P(e) {
    let { type: t } = e;
    switch (t) {
        case g.rbe.DM:
            return A.intl.string(A.t.jN2DfZ);
        case g.rbe.GROUP_DM:
            return A.intl.string(A.t["e5y+gm"]);
        case g.rbe.GUILD_TEXT:
            return A.intl.string(A.t.Pnajj0);
        case g.rbe.GUILD_FORUM:
            return A.intl.string(A.t.GbryDd);
        case g.rbe.GUILD_MEDIA:
            return A.intl.string(A.t.seKITE);
        case g.rbe.GUILD_VOICE:
            return A.intl.string(A.t.BVZqJl);
        case g.rbe.GUILD_STAGE_VOICE:
            return A.intl.string(A.t.EErMzA);
        case g.rbe.GUILD_ANNOUNCEMENT:
            return A.intl.string(A.t.l1dkSD);
        case g.rbe.GUILD_STORE:
            return A.intl.string(A.t["P1/Erq"]);
        case g.rbe.GUILD_CATEGORY:
            return A.intl.string(A.t.vHCZwr);
        default:
            return null;
    }
}
function M(e) {
    if (null == e) return "text";
    let t = e.isMediaChannel();
    if (e.type === g.rbe.GUILD_VOICE) return _.A.can(g.xBc.CONNECT, e) ? "voice" : "voice-locked";
    if (e.type === g.rbe.GUILD_STAGE_VOICE) return _.A.can(g.xBc.CONNECT, e) ? "stage" : "stage-locked";
    if (u.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === g.rbe.GUILD_FORUM) return t ? "media" : "forum";
    if (e.type === g.rbe.GUILD_MEDIA) return "media";
    else if (u.k3.has(e.type)) return "text";
}
function k(e) {
    let t,
        n = c.A.getChannel(f.A.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === g.rbe.GUILD_TEXT) t = n.id;
    else {
        let n = d.Ay.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return g.BVt.CHANNEL(e, t);
}
function U(e, t, n, r) {
    let i = null == r ? "" : `?summaryId=${r}`;
    return `${location.protocol}//${location.host}${g.BVt.CHANNEL(e, t, n)}${i}`;
}
function G(e, t, n, r) {
    return null == e || null == t || null == n
        ? U(e, t, r)
        : `${location.protocol}//${location.host}${g.BVt.CHANNEL_THREAD_VIEW(e, t, n, r)}`;
}
function V(e, t, n, r) {
    let i,
        a = e.getGuildId(),
        s = (0, o.$m)(a, t);
    return null != t && s ? G(a, t.id, e.id, m.default.castChannelIdAsMessageId(e.id)) : (r ?? U(a, e.id, n));
}
function F(e) {
    if (null == e) return null;
    switch (e.type) {
        case g.rbe.GUILD_ANNOUNCEMENT:
        case g.rbe.GUILD_TEXT:
        case g.rbe.GUILD_FORUM:
        case g.rbe.GUILD_MEDIA:
            return g.liQ.GUILD_CHANNEL;
        case g.rbe.GROUP_DM:
        case g.rbe.DM:
            return g.liQ.DM_CHANNEL;
        default:
            return null;
    }
}
